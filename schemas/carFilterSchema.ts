import { count } from "console";
import { z } from "zod";

// search: z.string().optional(),
// status: z.enum(["ALL","AVAILABLE", "RESERVED", "RENTED", "SOLD", "PENDING"]).optional(),
// featured: z.coerce.boolean().optional(),
// bodyType: z.string().optional(),
// fuelType: z.string().optional(),
// transmission: z.string().optional(),
// color: z.string().optional(),
// year: z.coerce.number().optional(),
// make: z.string().optional(),
// model: z.string().optional(),
// minPrice: z.coerce.number().optional(),
// maxPrice: z.coerce.number().optional(),
// sortBy: z.enum(["createdAt", "price", "year"]).default("createdAt"),
// sortOrder: z.enum(["asc", "desc"]).default("desc"),
// page: z.coerce.number().default(1),
// limit: z.coerce.number().default(10),
// //v3 fields
// negotiable: z.coerce.boolean().optional(),
// minSalePrice: z.coerce.number().optional(),
// maxSalePrice: z.coerce.number().optional(),
// minRentDailyPrice: z.coerce.number().optional(),
// maxRentDailyPrice: z.coerce.number().optional(),
// minRentHourlyPrice: z.coerce.number().optional(),
// maxRentHourlyPrice: z.coerce.number().optional(),
// minDeposit: z.coerce.number().optional(),
// maxDeposit: z.coerce.number().optional(),

export const carFilterSchema = z
  .object({
    search: z.string().optional(),
    status: z
      .enum([
        "ALL",
        "AVAILABLE",
        "RESERVED",
        "SOLD",
        "RENTED",
        "MAINTENANCE",
        "PENDING",
      ])
      .optional(),
    featured: z.boolean().optional(),
    make: z.string().min(1, "Make cannot be empty").optional(),
    model: z.string().optional(),
    year: z
      .number()
      .int()
      .min(1900, "Year must be 1900 or later")
      .max(new Date().getFullYear() + 1, "Year cannot be in the future")
      .optional(),
    bodyType: z.enum(["Sedan", "SUV", "Truck", "Van"]).optional(),
    fuelType: z.enum(["Petrol", "Diesel", "Electric", "Hybrid"]).optional(),
    transmission: z.enum(["Automatic", "Manual", "Semi-Automatic"]).optional(),
    color: z.string().optional(),
    negotiable: z.boolean().optional(),
    sortBy: z
      .enum(["createdAt", "price", "year", "countViews", "avgRating"])
      .optional(),
    sortOrder: z.enum(["asc", "desc"]).optional(),
    page: z.number().int().min(1).default(1),

    // v3 fields
    carType: z.enum(["SALE", "RENT", "BOTH"]).optional(),
    countViews: z.number().int().min(0).optional(),
    avgRating: z.number().min(0).max(5).optional(),
    // Price filters
    minSalePrice: z.number().min(0).step(0.01).optional(),
    maxSalePrice: z.number().min(0).optional(),
    minRentHourlyPrice: z.number().min(0).optional(),
    maxRentHourlyPrice: z.number().min(0).optional(),
    minRentDailyPrice: z.number().min(0).optional(),
    maxRentDailyPrice: z.number().min(0).optional(),
    minDeposit: z.number().min(0).optional(),
    maxDeposit: z.number().min(0).optional(),

    limit: z.number().int().min(1).max(100).default(10),
  })
  .refine(
    (data) =>
      !data.minSalePrice ||
      !data.maxSalePrice ||
      data.minSalePrice <= data.maxSalePrice,
    {
      message: "Min sale price must be less than or equal to max sale price",
      path: ["minSalePrice"],
    }
  )
  .refine(
    (data) =>
      !data.minRentHourlyPrice ||
      !data.maxRentHourlyPrice ||
      data.minRentHourlyPrice <= data.maxRentHourlyPrice,
    {
      message:
        "Min hourly price must be less than or equal to max hourly price",
      path: ["minRentHourlyPrice"],
    }
  )
  .refine(
    (data) =>
      !data.minRentDailyPrice ||
      !data.maxRentDailyPrice ||
      data.minRentDailyPrice <= data.maxRentDailyPrice,
    {
      message: "Min daily price must be less than or equal to max daily price",
      path: ["minRentDailyPrice"],
    }
  )
  .refine(
    (data) =>
      !data.minDeposit ||
      !data.maxDeposit ||
      data.minDeposit <= data.maxDeposit,
    {
      message: "Min deposit must be less than or equal to max deposit",
      path: ["minDeposit"],
    }
  );

export type CarFilterSchema = z.infer<typeof carFilterSchema>;



export const GetCarsInputSchema = z.object({
  search: z.string().optional(),
  pagination: z
    .object({
      page: z.number().int().positive().default(1),
      limit: z.number().int().positive().max(100).default(10),
    })
    .optional(),
  sortBy: z
    .enum(["createdAt", "year", "price", "hourlyPrice", "dailyPrice"])
    .default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  filters: z
    .object({
      status: z.enum(["AVAILABLE", "RESERVED", "SOLD", "RENTED", "MAINTENANCE", "PENDING"]).optional(),
      featured: z.boolean().optional(),
      bodyType: z.string().optional(),
      fuelType: z.string().optional(),
      transmission: z.string().optional(),
      color: z.string().optional(),
      year: z.number().int().optional(),
      make: z.string().optional(),
      model: z.string().optional(),
      countViews: z.number().int().optional(),
      avgRating: z.number().min(0).max(5).optional(),
      //v3 fields
      carType: z.enum(["SALE", "RENT", "BOTH"]).optional(),
      minSalePrice: z.number().optional(),
      maxSalePrice: z.number().optional(),
      minRentHourlyPrice: z.number().optional(),
      maxRentHourlyPrice: z.number().optional(),
      minRentDailyPrice: z.number().optional(),
      maxRentDailyPrice: z.number().optional(),
      minDeposit: z.number().optional(),
      maxDeposit: z.number().optional(),
      negotiable: z.boolean().optional(),
    })
    .optional(),
});

// Type for the input
export type GetCarsInput = z.infer<typeof GetCarsInputSchema>;
