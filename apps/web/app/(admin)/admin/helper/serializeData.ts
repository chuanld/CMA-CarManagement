import z from "zod";
import { CarEditSchema } from "../cars/schemas/carEditSchema";
import { saleStatuses } from "./types";

export function cleanObject(obj: any) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, value]) => value !== undefined && value !== null && value !== ""
    )
  );
}

export function parseCarUpdatePayload(
  data: z.infer<typeof CarEditSchema>,
  uploadedImages: string[]
) {
  if (!uploadedImages || uploadedImages.length === 0) {
    throw new Error("Please upload at least one image.");
  }

  const payload = cleanObject({
    ...data,
    images: uploadedImages,
    year: data.year ? parseInt(data.year) : null,
    mileage: data.mileage ? parseInt(data.mileage) : 0,
    seats: data.seats ? parseInt(data.seats) : null,
    carType: data.carType,
    saleInfo: cleanObject({
      negotiable:
        data.carType === "SALE" || data.carType === "BOTH"
          ? data.saleInfo?.negotiable
          : undefined,
      price:
        data.carType === "SALE" || data.carType === "BOTH"
          ? parseFloat(data.saleInfo?.price || "0")
          : undefined,
      status: data.saleInfo?.status as typeof saleStatuses | undefined,
    }),
    rentInfo: cleanObject({
      hourlyPrice:
        data.carType === "RENT" || data.carType === "BOTH"
          ? parseFloat(data.rentInfo?.hourlyPrice || "0")
          : undefined,
      dailyPrice:
        data.carType === "RENT" || data.carType === "BOTH"
          ? parseFloat(data.rentInfo?.dailyPrice || "0")
          : undefined,
      deposit:
        data.carType === "RENT" || data.carType === "BOTH"
          ? parseFloat(data.rentInfo?.deposit || "0")
          : undefined,
      available: 
        data.carType === "RENT" || data.carType === "BOTH"
          ? data.rentInfo?.available
          : undefined,
    }),
  });

  return {
    carData: payload,
    images: uploadedImages,
  };
}