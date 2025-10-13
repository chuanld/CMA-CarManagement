// /lib/buildCarQuery.ts
import { CarFilterSchema } from "@/schemas/carFilterSchema";

/**
 * Flatten filter values to query params.
 * Example output: { search: 'bmw', status: 'AVAILABLE', price_gte: '1000', page: '1' }
 */
export const buildCarQueryParams = (values: Partial<CarFilterSchema>) => {
  const params: Record<string, string> = {};

  if (values.search && values.search.trim()) params.search = values.search.trim();
  if (values.status) params.status = values.status;
  if (typeof values.featured === "boolean") params.featured = String(values.featured);
  if (values.make) params.make = values.make;
  if (values.model) params.model = values.model;
  if (values.year !== undefined && values.year !== null) params.year = String(values.year);
  if (values.color) params.color = values.color;
  if (values.fuelType) params.fuelType = values.fuelType;
  if (values.bodyType) params.bodyType = values.bodyType;
  if (values.transmission) params.transmission = values.transmission;

  if (typeof values.minPrice === "number") params.price_gte = String(values.minPrice);
  if (typeof values.maxPrice === "number") params.price_lte = String(values.maxPrice);

  if (values.sortBy) params.sortBy = values.sortBy;
  if (values.sortOrder) params.sortOrder = values.sortOrder;
  params.page = String(values.page ?? 1);
  params.limit = String(values.limit ?? 10);

  return new URLSearchParams(params).toString();
};
