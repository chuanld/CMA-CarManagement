type QueryData<T> = T | undefined | null;

type PaginationOptions = { page: number; limit: number };

type SortOptions = "newest" | "oldest" | "priceAsc" | "priceDesc" | "createdAt" | "price" | "year";

type FilterOptions = {
  status?: string;
  featured?: boolean;
  bodyType?: string;
  fuelType?: string;
  transmission?: string;
  color?: string;
  year?: number;
  make?: string;
  model?: string;

  //v3 fields
  minPrice?: number;
  maxPrice?: number;
};

export interface ApiQueryPayload {
  search?: QueryData<string>;
  pagination?: PaginationOptions;
  sortBy?: SortOptions;
  filters?: FilterOptions;
  sortOrder?: QueryData<"asc" | "desc">;
}