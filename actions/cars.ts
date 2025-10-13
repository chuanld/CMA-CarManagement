"use server";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";
import { QueryData } from "@supabase/supabase-js";
import { serializeCarData } from "@/lib/helper";
import { ApiQueryPayload } from "@/types/payload";

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
            10. Price (your best guess, only show the number, no currency symbols)
            11. Short Description as to be added to a car listing

            Format your response as a clean JSON object with these fields:
            {
                "make": "",
                "model": "",
                "year": 0000,
                "color": "",
                "price": 20000,
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

    // Get response from Gemini
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
          "price",
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

// export async function addCar ({carData, images}: {carData: any, images: any[]}) {
//     try {
//         const {userId} = await auth();
//         if(!userId) {
//             throw new Error("Unauthorized");
//         }
//         const user = await db.user.findUnique({
//             where: {clerkUserId: userId},
//         });
//         if(!user) {
//             throw new Error("User not found");
//         }

//         const carId = uuidv4();
//         const folderPath = `cars/${carId}`;

//         const cookieStore = await cookies();
//         const supabase = createClient(cookieStore)

//         const imageUrls: string[] = [];
//         for(let i = 0; i < images.length; i++) {
//             const base64Image: any = images[i];

//             if(!base64Image || !base64Image.startsWith("data:image/")) {
//                 console.warn("Skipping invalid image format");
//                 continue;
//             }

//             //Extract the base64 part (remove data:image/...;base64,)
//             const base64 = base64Image.split(",")[1];
//             const imageBuffer = Buffer.from(base64, 'base64');

//             //Determine file extension
//             const mimeType = base64Image.match(/data:(image\/[a-zA-Z0-9]+);/);
//             const fileExtension = mimeType ? mimeType[1] : "jpg";

//             //Create filename
//             const fileName = `image-${Date.now()}-${i}.${fileExtension}`;
//             const filePath = `${folderPath}/${fileName}`;

//             const {data, error} = await supabase.storage
//                 .from("car-images")
//                 .upload(filePath, imageBuffer, {
//                     contentType: `image/${fileExtension}`,
//                 });
//             if(error) {
//                 console.error("Supabase upload error:", error);
//                 throw new Error("Image upload failed: " + error.message);
//             }
//             const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/car-images/${filePath}`;

//             imageUrls.push(publicUrl);

//             if(imageUrls.length === 0) {
//                 throw new Error("No valid images uploaded");
//             }

//             const car = await db.car.create({
//                 data: {
//                     id: carId,
//                     make: carData.make,
//                     model: carData.model,
//                     year: carData.year,
//                     price: carData.price,
//                     mileage: carData.mileage,
//                     color: carData.color,
//                     fuelType: carData.fuelType,
//                     transmission: carData.transmission,
//                     bodyType: carData.bodyType,
//                     seats: carData.seats,
//                     description: carData.description,
//                     status: carData.status || "available",
//                     featured: carData.featured,
//                     images: imageUrls,
//                 },
//             });
//         };
//         revalidatePath("/admin/cars");
//         return {success: true};
//     } catch (err) {
//         throw new Error("Add car error: " + (err as Error).message);
//     }
// }
export async function addCar({
  carData,
  images,
}: {
  carData: any;
  images: string[];
}) {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }

    const carId = uuidv4();
    const folderPath = `cars/${carId}`;

    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

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

      const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/car-images/${filePath}`;
      imageUrls.push(publicUrl);
    }

    if (imageUrls.length === 0) {
      throw new Error("No valid images uploaded");
    }

    // Create Car record after uploading all images
    const car = await db.car.create({
      data: {
        id: carId, // Use the same ID we used for the folder
        make: carData.make,
        model: carData.model,
        year: carData.year,
        price: carData.price,
        mileage: carData.mileage,
        color: carData.color,
        fuelType: carData.fuelType,
        transmission: carData.transmission,
        bodyType: carData.bodyType,
        seats: carData.seats,
        description: carData.description,
        status: carData.status,
        featured: carData.featured,
        images: imageUrls, // Store the array of image URLs
      },
    });

    revalidatePath("/admin/cars");
    return { success: true };
  } catch (err) {
    throw new Error("Add car error: " + (err as Error).message);
  }
}

export async function getCars({
  search,
  pagination,
  sortBy = "createdAt",
  sortOrder = "desc",
  filters,
}: ApiQueryPayload) {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }

    let whereClause: any = {};
    if (search) {
      whereClause.OR = [
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
      if (filters.status) {
        whereClause.status = filters.status;
      }
      if (filters.featured !== undefined) {
        whereClause.featured = filters.featured;
      }
      if (filters.bodyType) {
        whereClause.bodyType = {
          contains: filters.bodyType,
          mode: "insensitive",
        };
      }
      if (filters.fuelType) {
        whereClause.fuelType = {
          contains: filters.fuelType,
          mode: "insensitive",
        };
      }
      if (filters.transmission) {
        whereClause.transmission = {
          contains: filters.transmission,
          mode: "insensitive",
        };
      }
      if (filters.color) {
        whereClause.color = { contains: filters.color, mode: "insensitive" };
      }
      if (filters.year) {
        whereClause.year = filters.year;
      }
      if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
        whereClause.price = {};
        if (filters.minPrice !== undefined) {
          whereClause.price.gte = filters.minPrice;
        }
        if (filters.maxPrice !== undefined) {
          whereClause.price.lte = filters.maxPrice;
        }
      }
      if (filters.make) {
        whereClause.make = { contains: filters.make, mode: "insensitive" };
      }
      if (filters.model) {
        whereClause.model = { contains: filters.model, mode: "insensitive" };
      }
    }
    const page = pagination?.page || 1;
    const limit = pagination?.limit || 5;
    const skip = (page - 1) * limit;

    const allowedSortFields = ["price", "year", "createdAt"];
    const orderBy: Array<{ [key: string]: "asc" | "desc" }> = [];

    if (allowedSortFields.includes(sortBy)) {
      orderBy.push({ [sortBy]: sortOrder === "asc" ? "asc" : "desc" });
    } else {
      orderBy.push({ createdAt: "desc" }); // fallback
    }

    // Fallback tie-break
    if (sortBy !== "createdAt") {
      orderBy.push({ createdAt: "desc" });
    }

    const totalCars = await db.car.count({ where: whereClause });
    const totalPages = Math.ceil(totalCars / limit);
    console.log(orderBy, "a");

    const cars = await db.car.findMany({
      where: whereClause,
      orderBy,
      skip: skip,
      take: limit,
    });

    const serializeCars = cars.map((car) => serializeCarData(car));

    return {
      success: true,
      data: serializeCars,
      pagination: { total: totalCars, page, limit, totalPages },
    };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}

export async function deleteCar(carId: string) {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }

    const carDeleted = await db.car.findUnique({
      where: { id: carId },
      select: { images: true },
    });

    if (!carDeleted) {
      throw new Error("Car not found");
    }

    await db.car.delete({
      where: { id: carId },
    });

    try {
      const cookieStore = await cookies();
      const supabase = createClient(cookieStore);
      const filePaths = carDeleted.images
        .map((imgUrl: any) => {
          const url = new URL(imgUrl);
          const parts = url.pathname.match(/\/car-images\/(.*)/);
          return parts ? parts[1] : null;
        })
        .filter(Boolean);

      if (filePaths.length > 0) {
        const { error } = await supabase.storage
          .from("car-images")
          .remove(filePaths as string[]);

        if (error) {
          throw new Error("Image deletion failed: " + error.message);
        }
      }
    } catch (err) {
      throw new Error("Image deletion failed: " + (err as Error).message);
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
  }: { status: "AVAILABLE" | "UNAVAILABLE" | "SOLD" | "PENDING"; featured: boolean }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }

    const updateData = {};

    if (status !== undefined) {
      (updateData as any).status = status;
    }
    if (featured !== undefined) {
      (updateData as any).featured = featured;
    }

    await db.car.update({
      where: { id: id },
      data: updateData,
    });

    revalidatePath("/admin/cars");
    return { success: true };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}
