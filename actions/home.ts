'use server';
// import { aj } from "@/lib/arcjet";
import { serializeCarData } from "@/lib/helper";
import { db } from "@/lib/prisma";
import { Car } from "@/types/car";
// import { request } from "@arcjet/next";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "sonner";

async function fileToBase64(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  return buffer.toString("base64");
}

export async function getFeaturedCars(limit: number = 3) {
  try {
    const cars = await db.car.findMany({
      where: { featured: true },
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {saleInfo:true, rentInfo:true},
    });
    return cars.map((car) => serializeCarData(car));
  } catch (err: unknown) {
    console.error(err instanceof Error ? err.message : "Unexpected error");
    return {
      success: false,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}

export async function processImageSearch(file: File) {
  try {

    //For arcjet rate limiting
    // const req = await request();

    // const decision = await aj.protect(req, { requested: 1 });

    // if (decision.isDenied()) {
    //   if (decision.reason.isRateLimit()) {
    //     const { remaining, reset } = decision.reason;

    //     console.error({
    //       code: "RATE_LIMIT_EXCEEDED",
    //       details: {
    //         remaining,
    //         resetInSeconds: reset,
    //       },
    //     });

    //     throw new Error("Too Many Requests");
    //   }
    //   throw new Error("Request blocked");
    // }
    

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
      Analyze this car image and extract the following information for a search query:
      1. Make (manufacturer)
      2. Body type (SUV, Sedan, Hatchback, etc.)
      3. Color

      Format your response as a clean JSON object with these fields:
      {
        "make": "",
        "bodyType": "",
        "color": "",
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
  } catch (err: unknown) {
    console.error(err instanceof Error ? err.message : "Unexpected error");
    return {
      success: false,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}
