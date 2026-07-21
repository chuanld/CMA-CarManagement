import { z } from "zod";
import { CarStatus } from "@car-marketplace/database";

export const publicGetCarsQuerySchema = z.object({
  search: z.string().optional().default(""),
  make: z.string().optional().default(""),
  bodyType: z.string().optional().default(""),
  fuelType: z.string().optional().default(""),
  transmission: z.string().optional().default(""),
  minPrice: z.coerce.number().optional().default(0),
  maxPrice: z.coerce.number().optional().default(1000000000),
  sortBy: z
    .enum(["newest", "oldest", "priceAsc", "priceDesc"])
    .optional()
    .default("newest"),
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
});
export type PublicGetCarsQuery = z.infer<typeof publicGetCarsQuerySchema>;

export const adminGetCarsInputSchema = z.object({
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
      status: z.nativeEnum(CarStatus).optional(),
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
export type AdminGetCarsInput = z.infer<typeof adminGetCarsInputSchema>;

const addCarDataSchema = z.object({
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.coerce.number().int(),
  mileage: z.coerce.number().int().optional(),
  color: z.string().optional(),
  fuelType: z.string().optional(),
  transmission: z.string().optional(),
  bodyType: z.string().optional(),
  seats: z.coerce.number().int().nullable().optional(),
  description: z.string().optional(),
  status: z.string().optional(),
  featured: z.boolean().optional(),
  carType: z.enum(["SALE", "RENT", "BOTH"]).optional(),
  salePrice: z.coerce.number().optional(),
  negotiable: z.boolean().optional(),
  saleStatus: z.string().optional(),
  rentHourlyPrice: z.coerce.number().optional(),
  rentDailyPrice: z.coerce.number().optional(),
  deposit: z.coerce.number().optional(),
  available: z.boolean().optional(),
});

export const addCarSchema = z.object({
  carData: addCarDataSchema,
  images: z.array(z.string()),
});
export type AddCarInput = z.infer<typeof addCarSchema>;

const updateCarDataSchema = addCarDataSchema.partial().extend({
  images: z.array(z.string()).optional(),
  saleInfo: z
    .object({
      price: z.coerce.number().optional(),
      negotiable: z.boolean().optional(),
      status: z.string().optional(),
    })
    .optional(),
  rentInfo: z
    .object({
      hourlyPrice: z.coerce.number().optional(),
      dailyPrice: z.coerce.number().optional(),
      deposit: z.coerce.number().optional(),
    })
    .optional(),
});

export const updateCarSchema = z.object({
  carData: updateCarDataSchema,
  images: z.array(z.string()),
});
export type UpdateCarInput = z.infer<typeof updateCarSchema>;

export const updateCarStatusSchema = z.object({
  status: z.nativeEnum(CarStatus).optional(),
  featured: z.boolean().optional(),
});
export type UpdateCarStatusInput = z.infer<typeof updateCarStatusSchema>;

export const createRentalSchema = z.object({
  carId: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  notes: z.string().optional(),
});
export type CreateRentalInput = z.infer<typeof createRentalSchema>;

export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(10),
});
export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
