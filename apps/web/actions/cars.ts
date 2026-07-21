"use server";

import { apiFetch } from "@/lib/api-client";
import { createClient } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { GetCarsInput } from "@/schemas/carFilterSchema";
import { Car } from "@/types/car";

async function fileToBase64(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  return buffer.toString("base64");
}

// Not part of the Cars domain migration — pure Gemini AI proxy, touches no
// database/storage, so it stays exactly as-is on the Next.js side.
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

// Not part of the Cars domain migration — stays client/Next-side per the
// confirmed decision to never proxy file uploads through the NestJS API.
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
    const me = await apiFetch<{ id: string }>("/users/me");

    // upload images -> supabase (unchanged, stays on this side of the boundary)
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const folderPath = `cars/${me.id}/${uuidv4()}`;

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

      const base64 = base64Image.split(",")[1];
      const imageBuffer = Buffer.from(base64, "base64");

      const mimeType = base64Image.match(/data:(image\/[a-zA-Z0-9]+);/);
      const fileExtension = mimeType ? mimeType[1].split("/")[1] : "jpeg";

      const fileName = `image-${Date.now()}-${i}.${fileExtension}`;
      const filePath = `${folderPath}/${fileName}`;

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

    const data = await apiFetch("/cars", {
      method: "POST",
      body: JSON.stringify({ carData, images: imageUrls }),
    });

    revalidatePath("/admin/cars");

    return { success: true, data };
  } catch (err: any) {
    console.error("Add car error:", err);
    return { success: false, error: err?.message ?? String(err) };
  }
}

export async function getCars(input: GetCarsInput) {
  try {
    const data = await apiFetch("/cars/admin/search", {
      method: "POST",
      body: JSON.stringify(input),
    });
    return { success: true, ...(data as object) };
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
    await apiFetch(`/cars/${carId}`, { method: "DELETE" });
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
    await apiFetch(`/cars/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status, featured }),
    });
    revalidatePath("/admin/cars");
    return { success: true };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}

export async function adminGetCarById(carId: string) {
  try {
    const data = await apiFetch<Car>(`/cars/admin/${carId}`);
    return { success: true, data };
  } catch (err: unknown) {
    return { success: false, error: (err as Error).message };
  }
}

export async function adminUpdateCarById(
  carId: string,
  { carData, images }: { carData: any; images: string[] }
) {
  try {
    // upload images -> supabase (unchanged, stays on this side of the boundary)
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const oldImages = (carData.images || []).filter(
      (img: any) => typeof img === "string" && img.startsWith("http")
    );
    const newImages = images.filter(
      (img: any) => typeof img === "string" && img.startsWith("data:image/")
    );
    const folderPath = `cars/${carId}`;

    const uploadedUrls = await Promise.all(
      newImages.map((img, i) =>
        uploadImageToSupabase(supabase, folderPath, img, i).catch(() => null)
      )
    );

    const validUploadedUrls = uploadedUrls.filter(
      (url) => typeof url === "string"
    );
    const finalImagesUrls = [...oldImages, ...validUploadedUrls];

    const data = await apiFetch(`/cars/admin/${carId}`, {
      method: "PATCH",
      body: JSON.stringify({ carData, images: finalImagesUrls }),
    });

    revalidatePath("/admin/cars");

    return { success: true, data };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}
