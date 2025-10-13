import { CarFilterSchema } from "@/schemas/carFilterSchema";

export const buildCarPayload = (values: Partial<CarFilterSchema>) => {
  const {
    search,
    status,
    make,
    model,
    year,
    color,
    fuelType,
    bodyType,
    transmission,
    featured,
    sortBy,
    sortOrder,
    page,
    limit,
    minPrice,
    maxPrice,
  } = values;

  const filters: Record<string, any> = {};

  if (status) filters.status = status;
  if (minPrice || maxPrice)
    filters.price = { gte: minPrice ?? 0, lte: maxPrice ?? undefined };
  if (make) filters.make = make;
  if (model) filters.model = model;
  if (year) filters.year = year;
  if (color) filters.color = color;
  if (fuelType) filters.fuelType = fuelType;
  if (bodyType) filters.bodyType = bodyType;
  if (transmission) filters.transmission = transmission;
  if (typeof featured === "boolean") filters.featured = featured;

  return {
    search: search?.trim() || "",
    filters,
    pagination: { page: page || 1, limit: limit || 10 },
    sort: { field: sortBy || "createdAt", order: sortOrder || "desc" },
  };
};
