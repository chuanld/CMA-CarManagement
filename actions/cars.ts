"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

import { serializeCarData } from "@/lib/helper";
import { ApiQueryPayload } from "@/types/payload";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GetCarsInput, GetCarsInputSchema } from "@/schemas/carFilterSchema";

async function fileToBase64(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  return buffer.toString("base64");
}

export async function processCarImageAI(file: File) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Missing GEMINI_API_KEY");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const base64Image = await fileToBase64(file);

    const imagePart = {
      inlineData: {
        data: base64Image,
        mimeType: file.type,
      },
    };

    const prompt = `
            Analyze this car image and extract the following information:
            1. Make (manufacturer)
            2. Model
            3. Year (approximately)
            4. Color
            5. Body type (SUV, Sedan, Hatchback, etc.)
            6. Mileage (your best guess, but should be a number)
            7. Fuel type (your best guess)
            8. Transmission type (your best guess)
            9. Seats (your best guess)
            10. Sale Price (your best guess, it's a price sale for car, only show the number following VND (VietNam currency), no currency symbols)
            11. Rent Hourly Price (your best guess, it's a price for renting car hourly, normal range 200000 - 400000vnd, only show the number following VND (VietNam currency), no currency symbols)
            12. Rent Daily Price (your best guess, it's a price for renting car daily, normal range 1000000 - 2000000vnd, only show the number following VND (VietNam currency), no currency symbols)
            13. Short Description as to be added to a car listing

            Format your response as a clean JSON object with these fields:
            {
                "make": "",
                "model": "",
                "year": 0000,
                "color": "",
                "salePrice": 2000000000,
                "rentHourlyPrice":300000,
                "rentDailyPrice":1200000,
                "mileage": 50,
                "bodyType": "",
                "fuelType": "",
                "transmission": "",
                "seats": 4,
                "description": "",
                "confidence": 0.0
            }

            For confidence, provide a value between 0 and 1 representing how confident you are in your overall identification.
            Only respond with the JSON object, nothing else.
        `;

    const result = await model.generateContent([imagePart, prompt]);
    const response = await result.response;
    const text = response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

    let retries = 3;

    while (0 < retries) {
      try {
        const carDetails = JSON.parse(cleanedText);

        const requiredFields = [
          "make",
          "model",
          "year",
          "color",
          "salePrice",
          "rentHourlyPrice",
          "rentDailyPrice",
          "mileage",
          "bodyType",
          "fuelType",
          "transmission",
          "description",
          "confidence",
        ];
        const missingFields = requiredFields.filter(
          (field) => !(field in carDetails)
        );
        if (missingFields.length > 0) {
          throw new Error(
            "Missing fields in AI response: " + missingFields.join(", ")
          );
        }

        return {
          success: true,
          data: carDetails,
        };
      } catch (err: any) {
        console.error("Error parsing AI response:", err);
        if (retries && err.message) {
          retries--;
          await new Promise((res) => setTimeout(res, 2000));
        } else {
          return {
            success: false,
            error: "Error parsing AI response: " + err.message,
          };
        }
      }
    }
  } catch (error: any) {
    console.error();
    throw new Error("Gemini API error:" + error.message);
  }
}

export async function uploadImageToSupabase(
  supabase: ReturnType<typeof createClient>,
  folderPath: string,
  base64Image: string,
  index: number
): Promise<string | null> {
  if (!base64Image.startsWith("data:image/")) return null;

  const base64 = base64Image.split(",")[1];
  const imageBuffer = Buffer.from(base64, "base64");

  const mimeType = base64Image.match(/data:(image\/[a-zA-Z0-9]+);/);
  const fileExtension = mimeType ? mimeType[1].split("/")[1] : "jpeg";
  const fileName = `image-${Date.now()}-${index}.${fileExtension}`;
  const filePath = `${folderPath}/${fileName}`;

  const { error } = await supabase.storage
    .from("car-images")
    .upload(filePath, imageBuffer, {
      contentType: `image/${fileExtension}`,
    });

  if (error) throw new Error("Supabase upload error: " + error.message);

  return `${process.env.NEXT_PUBLIC_SUPABASE_URLV2}/storage/v1/object/public/car-images/${filePath}`;
}

export async function addCar({
  carData,
  images,
}: {
  carData: any;
  images: string[];
}) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      include: { dealers: true },
    });
    if (!user) throw new Error("User not found");

    // ensure dealer
    let dealer = user.dealers?.[0];
    if (!dealer) {
      dealer = await db.dealer.create({
        data: {
          name: user.name + "Dealer" || "Unnamed Dealer",
          ownerId: user.id,
          email: user.email,
          phone: user.phone || "updating...",
          address: "updating...",
          description: "init dealer profile, please update.",
          logoUrl: user.imageUrl || "",
        },
      });
      // connect dealer to user (optional, but keep consistency)
      await db.user.update({
        where: { id: user.id },
        data: { dealers: { connect: { id: dealer.id } } },
      });
    }

    // upload images -> supabase
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const folderPath = `cars/${dealer.id}/${uuidv4()}`;



    const imageUrls: string[] = [];
    for (let i = 0; i < images.length; i++) {
      const base64Image = images[i];

      if (
        !base64Image ||
        typeof base64Image !== "string" ||
        !base64Image.startsWith("data:image/")
      ) {
        console.warn("Skipping invalid image format");
        continue;
      }

      // Extract the base64 part (remove data:image/...;base64,)
      const base64 = base64Image.split(",")[1];
      const imageBuffer = Buffer.from(base64, "base64");

      // Determine file extension
      const mimeType = base64Image.match(/data:(image\/[a-zA-Z0-9]+);/);
      const fileExtension = mimeType
        ? mimeType[1].split("/")[1] // image/png → png
        : "jpeg";

      // Create filename
      const fileName = `image-${Date.now()}-${i}.${fileExtension}`;
      const filePath = `${folderPath}/${fileName}`;

      // Upload to Supabase
      const { data, error } = await supabase.storage
        .from("car-images")
        .upload(filePath, imageBuffer, {
          contentType: `image/${fileExtension}`,
        });

      if (error) {
        console.error("Supabase upload error:", error);
        throw new Error("Image upload failed: " + error.message);
      }

      const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URLV2}/storage/v1/object/public/car-images/${filePath}`;
      imageUrls.push(publicUrl);
    }

    if (imageUrls.length === 0) {
      throw new Error("No valid images uploaded");
    }

    // 1) Create car (NO price here)
    const createdCar = await db.car.create({
      data: {
        dealerId: dealer.id,
        make: carData.make,
        model: carData.model,
        year: carData.year,
        mileage: carData.mileage ?? 0,
        color: carData.color ?? "",
        fuelType: carData.fuelType ?? "",
        transmission: carData.transmission ?? "",
        bodyType: carData.bodyType ?? "",
        seats: carData.seats ?? null,
        description: carData.description ?? "",
        status: (carData.status || "AVAILABLE").toUpperCase() as any,
        featured: !!carData.featured,
        images: imageUrls,
      },
    });

    // 2) If sale info provided -> create SaleInfo
    if (
      (carData.carType === "SALE" || carData.carType === "BOTH") &&
      carData.salePrice !== undefined &&
      carData.salePrice !== null &&
      carData.salePrice !== ""
    ) {
      // price should be decimal-like (string/number). Prisma will coerce.
      await db.saleInfo.create({
        data: {
          carId: createdCar.id,
          price:
            typeof carData.salePrice === "string"
              ? carData.salePrice
              : Number(carData.salePrice),
          negotiable: !!carData.negotiable,
          status: (carData.saleStatus || "AVAILABLE").toUpperCase() as any,
        },
      });
    }

    // 3) If rent info provided -> create RentInfo
    // check at least one rent field exists
    if (
      carData.carType === "RENT" ||
      carData.carType === "BOTH" ||
      carData.rentHourlyPrice !== undefined ||
      carData.rentDailyPrice !== undefined ||
      carData.deposit !== undefined
    ) {
      await db.rentInfo.create({
        data: {
          carId: createdCar.id,
          hourlyPrice:
            carData.rentHourlyPrice !== undefined
              ? typeof carData.rentHourlyPrice === "string"
                ? carData.rentHourlyPrice
                : Number(carData.rentHourlyPrice)
              : 0,
          dailyPrice:
            carData.rentDailyPrice !== undefined
              ? typeof carData.rentDailyPrice === "string"
                ? carData.rentDailyPrice
                : Number(carData.rentDailyPrice)
              : null,
          deposit:
            carData.deposit !== undefined
              ? typeof carData.deposit === "string"
                ? carData.deposit
                : Number(carData.deposit)
              : null,
          available:
            carData.available !== undefined ? !!carData.available : true,
        },
      });
    }

    revalidatePath("/admin/cars");

    return { success: true, data: { carId: createdCar.id } };
  } catch (err: any) {
    console.error("Add car error:", err);
    return { success: false, error: err?.message ?? String(err) };
  }
}


export async function getCars(input: GetCarsInput) {
  try {
    const validatedInput = GetCarsInputSchema.parse(input);

    const { search, pagination, sortBy, sortOrder, filters } = validatedInput;

    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) throw new Error("User not found");
    if (user.role !== "ADMIN") throw new Error("Forbidden");

    const where: any = {};

    if (search) {
      where.OR = [
        { make: { contains: search, mode: "insensitive" } },
        { model: { contains: search, mode: "insensitive" } },
        { color: { contains: search, mode: "insensitive" } },
        { bodyType: { contains: search, mode: "insensitive" } },
        { fuelType: { contains: search, mode: "insensitive" } },
        { transmission: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    if (filters) {
      if (filters.status) where.status = filters.status;
      if (filters.featured !== undefined) where.featured = filters.featured;
      if (filters.bodyType)
        where.bodyType = { contains: filters.bodyType, mode: "insensitive" };
      if (filters.fuelType)
        where.fuelType = { contains: filters.fuelType, mode: "insensitive" };
      if (filters.transmission)
        where.transmission = {
          contains: filters.transmission,
          mode: "insensitive",
        };
      if (filters.color)
        where.color = { contains: filters.color, mode: "insensitive" };
      if (filters.year) where.year = filters.year;
      if (filters.make)
        where.make = { contains: filters.make, mode: "insensitive" };
      if (filters.model)
        where.model = { contains: filters.model, mode: "insensitive" };

      if (filters.countViews) {
        where.countViews = { gte: filters.countViews };
      }
      if (filters.avgRating) {
        where.avgRating = { gte: filters.avgRating };
      }

      if (filters.carType === "SALE") {
        where.saleInfo = { isNot: null };
        where.rentInfo = null;
      } else if (filters.carType === "RENT") {
        where.rentInfo = { isNot: null };
        where.saleInfo = null;
      }

      // v3 price filters
      if (filters.carType === "SALE" || filters.carType === "BOTH") {
        if (
          filters.minSalePrice ||
          filters.maxSalePrice ||
          filters.negotiable !== undefined
        ) {
          where.saleInfo = where.saleInfo || {};
          if (filters.minSalePrice)
            where.saleInfo.price = { gte: filters.minSalePrice };
          if (filters.maxSalePrice)
            where.saleInfo.price = {
              ...where.saleInfo.price,
              lte: filters.maxSalePrice,
            };
          if (filters.negotiable !== undefined)
            where.saleInfo.negotiable = filters.negotiable;
        }
      }

      if (filters.carType === "RENT" || filters.carType === "BOTH") {
        if (filters.minRentHourlyPrice || filters.maxRentHourlyPrice) {
          where.rentInfo = where.rentInfo || {};
          if (filters.minRentHourlyPrice)
            where.rentInfo.hourlyPrice = { gte: filters.minRentHourlyPrice };
          if (filters.maxRentHourlyPrice)
            where.rentInfo.hourlyPrice = {
              ...where.rentInfo.hourlyPrice,
              lte: filters.maxRentHourlyPrice,
            };
        }

        if (filters.minRentDailyPrice || filters.maxRentDailyPrice) {
          where.rentInfo = where.rentInfo || {};
          if (filters.minRentDailyPrice)
            where.rentInfo.dailyPrice = { gte: filters.minRentDailyPrice };
          if (filters.maxRentDailyPrice)
            where.rentInfo.dailyPrice = {
              ...where.rentInfo.dailyPrice,
              lte: filters.maxRentDailyPrice,
            };
        }

        if (filters.minDeposit || filters.maxDeposit) {
          where.rentInfo = where.rentInfo || {};
          if (filters.minDeposit)
            where.rentInfo.deposit = { gte: filters.minDeposit };
          if (filters.maxDeposit)
            where.rentInfo.deposit = {
              ...where.rentInfo.deposit,
              lte: filters.maxDeposit,
            };
        }
      }
    }

    // Pagination
    const page = pagination?.page || 1;
    const limit = pagination?.limit || 10;
    const skip = (page - 1) * limit;

    // Sorting
    let orderBy: any = [{ createdAt: sortOrder }];

    switch (sortBy) {
      case "price":
        orderBy = [
          { saleInfo: { price: sortOrder } },
          { createdAt: sortOrder },
        ];
        break;
      case "hourlyPrice":
        orderBy = [
          { rentInfo: { hourlyPrice: sortOrder } },
          { createdAt: sortOrder },
        ];
        break;
      case "dailyPrice":
        orderBy = [
          { rentInfo: { dailyPrice: sortOrder } },
          { createdAt: sortOrder },
        ];
        break;
      case "year":
      case "createdAt":
        orderBy = [{ [sortBy]: sortOrder }];
        break;
      default:
        orderBy = [{ createdAt: sortOrder }];
    }

    // Query
    const total = await db.car.count({ where });

    const cars = await db.car.findMany({
      where,
      orderBy,
      skip,
      take: limit,
      include: {
        dealer: {
          include: { workingHours: true },
        },
        saleInfo: true,
        rentInfo: true,
        _count: {
          select: { savedBy: true, reviews: true },
        },
      },
    });

    const serialized = cars.map((car) => serializeCarData(car));

    return {
      success: true,
      data: serialized,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (err) {
    console.error("Get cars error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

export async function deleteCar(carId: string) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const car = await db.car.findUnique({ where: { id: carId } });
    if (!car) throw new Error("Car not found");

    await db.car.delete({ where: { id: carId } });

    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const filePaths = car.images
      .map((url: string) => {
        const match = url.match(/\/car-images\/(.*)/);
        return match ? match[1] : null;
      })
      .filter(Boolean) as string[];

    if (filePaths.length > 0) {
      const { error } = await supabase.storage
        .from("car-images")
        .remove(filePaths);
      if (error) console.warn("Failed to delete images:", error.message);
    }

    revalidatePath("/admin/cars");
    return { success: true };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}

export async function updateCarStatus(
  id: string,
  {
    status,
    featured,
  }: {
    status?: "AVAILABLE" | "RESERVED" | "RENTED" | "SOLD" | "PENDING";
    featured?: boolean;
  }
) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) throw new Error("User not found");
    if (user.role !== "ADMIN") throw new Error("Forbidden");

    const updateData: any = {};
    if (status) updateData.status = status;
    if (featured !== undefined) updateData.featured = featured;

    await db.car.update({ where: { id }, data: updateData });

    revalidatePath("/admin/cars");
    return { success: true };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}

export async function adminGetCarById(carId: string) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) throw new Error("User not found");
    if (user.role !== "ADMIN") throw new Error("Forbidden");
    const car = await db.car.findUnique({
      where: { id: carId },
      include: {
        dealer: {
          include: { workingHours: true },
        },
        saleInfo: true,
        rentInfo: true,
        reviews: true,
        _count: {
          select: { savedBy: true, reviews: true },
        },
      },
    });
    if (!car) throw new Error("Car not found");
    const serialized = serializeCarData(car);
    return { success: true, data: serialized };
  } catch (err: unknown) {
    return { success: false, error: (err as Error).message };
  }
}

export async function adminUpdateCarById(
  carId: string,
  { carData, images }: { carData: any; images: string[] }
) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      include: { dealers: true },
    });
    if (!user) throw new Error("User not found");

    // ensure dealer
    let dealer = user.dealers?.[0];
    if (!dealer) {
      dealer = await db.dealer.create({
        data: {
          name: user.name + "Dealer" || "Unnamed Dealer",
          ownerId: user.id,
          email: user.email,
          phone: user.phone || "updating...",
          address: "updating...",
          description: "init dealer profile, please update.",
          logoUrl: user.imageUrl || "",
        },
      });
      // connect dealer to user (optional, but keep consistency)
      await db.user.update({
        where: { id: user.id },
        data: { dealers: { connect: { id: dealer.id } } },
      });
    }

    // upload images -> supabase
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const car = await db.car.findUnique({
      where: { id: carId },
      include: { saleInfo: true, rentInfo: true },
    });
    if (!car) throw new Error("Car not found");

    const dealerId = dealer.id;
    const oldImages = (carData.images || []).filter(
      (img: any) => typeof img === "string" && img.startsWith("http")
    );
    const newImages = images.filter(
      (img: any) => typeof img === "string" && img.startsWith("data:image/")
    );
    const folderPath = `cars/${dealerId}/${carId}`;

    const uploadedUrls = await Promise.all(
      newImages.map((img, i) =>
        uploadImageToSupabase(supabase, folderPath, img, i).catch(() => null)
      )
    );

    const validUploadedUrls = uploadedUrls.filter(
      (url) => typeof url === "string"
    );
    const finalImagesUrls = [...oldImages, ...validUploadedUrls];

    const updatedCar = await db.car.update({
      where: { id: carId },
      data: {
        dealerId,
        make: carData.make,
        model: carData.model,
        year: carData.year ? Number(carData.year) : 2025,
        mileage: carData.mileage ? Number(carData.mileage) : 50,
        color: carData.color ? carData.color : "white",
        fuelType: carData.fuelType ?? "",
        transmission: carData.transmission ?? "",
        bodyType: carData.bodyType ?? "",
        seats: carData.seats ?? null,
        description: carData.description ?? "",
        status: (carData.status || "AVAILABLE").toUpperCase() as any,
        featured: !!carData.featured,
        images: finalImagesUrls,
      },
    });

    if (carData.carType === "SALE" || carData.carType === "BOTH") {
      await db.saleInfo.upsert({
        where: { carId: updatedCar.id },
        create: {
          carId: updatedCar.id,
          price: carData.saleInfo?.price ?? 0,
          negotiable: !!carData.saleInfo?.negotiable,
          status: (
            carData.saleInfo?.status || "AVAILABLE"
          ).toUpperCase() as any,
        },
        update: {
          ...(carData.saleInfo?.price !== undefined && {
            price: carData.saleInfo.price,
          }),
          ...(carData.saleInfo?.negotiable !== undefined && {
            negotiable: !!carData.saleInfo.negotiable,
          }),
          ...(carData.saleInfo?.status !== undefined && {
            status: (
              carData.saleInfo.status || "AVAILABLE"
            ).toUpperCase() as any,
          }),
        },
      });
    }


    if (carData.carType === "RENT" || carData.carType === "BOTH") {
      await db.rentInfo.upsert({
        where: { carId: updatedCar.id },
        create: {
          carId: updatedCar.id,
          hourlyPrice: carData.rentInfo?.hourlyPrice ?? 0,
          dailyPrice: carData.rentInfo?.dailyPrice ?? 0,
          deposit: carData.rentInfo?.deposit ?? 0,
        },
        update: {
          ...(carData.rentInfo?.hourlyPrice !== undefined && {
            hourlyPrice: carData.rentInfo.hourlyPrice,
          }),
          ...(carData.rentInfo?.dailyPrice !== undefined && {
            dailyPrice: carData.rentInfo.dailyPrice,
          }),
          ...(carData.rentInfo?.deposit !== undefined && {
            deposit: carData.rentInfo.deposit,
          }),
        },
      });
    }

    if (carData.carType === "SALE") {
      await db.rentInfo.deleteMany({ where: { carId } });
    } else if (carData.carType === "RENT") {
      await db.saleInfo.deleteMany({ where: { carId } });
    }

    revalidatePath("/admin/cars");

    return { success: true, data: { carId: updatedCar.id } };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}
