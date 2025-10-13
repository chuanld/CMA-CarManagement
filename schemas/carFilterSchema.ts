import { z } from "zod";

export const carFilterSchema = z.object({
  search: z.string().optional(),
  status: z.enum(["ALL","AVAILABLE", "UNAVAILABLE", "SOLD", "PENDING"]).optional(),
  featured: z.coerce.boolean().optional(),
  bodyType: z.string().optional(),
  fuelType: z.string().optional(),
  transmission: z.string().optional(),
  color: z.string().optional(),
  year: z.coerce.number().optional(),
  make: z.string().optional(),
  model: z.string().optional(),
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
  sortBy: z.enum(["createdAt", "price", "year"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
});

export type CarFilterSchema = z.infer<typeof carFilterSchema>;
