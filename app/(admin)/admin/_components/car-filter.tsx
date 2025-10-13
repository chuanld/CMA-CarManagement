"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { z } from "zod";
import { cn } from "@/lib/utils"; // shadcn utility for className merging
import { carFilterSchema } from "@/schemas/carFilterSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Search, ChevronDown, X } from "lucide-react";

type StatusCar = "ALL" | "AVAILABLE" | "SOLD" | "UNAVAILABLE" | "PENDING";
type CarFilterFormValues = z.infer<typeof carFilterSchema>;
type SortOrder = "asc" | "desc";
type SortBy = "createdAt" | "price" | "year";

const defaultCarFilterValues: CarFilterFormValues = {
  search: "",
  status: "ALL",
  featured: undefined,
  bodyType: undefined,
  fuelType: undefined,
  transmission: undefined,
  color: undefined,
  year: undefined,
  make: undefined,
  model: undefined,
  minPrice: undefined,
  maxPrice: undefined,
  sortBy: "createdAt",
  sortOrder: "desc",
  page: 1,
  limit: 5,
};

export const CarFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [filterCount, setFilterCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // For debounced feedback

  const form = useForm<CarFilterFormValues>({
    resolver: zodResolver(carFilterSchema) as any,
    defaultValues: defaultCarFilterValues,
  });

  // Sync form with URL search params
  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    form.reset({
      ...defaultCarFilterValues,
      ...params,
      page: params.page ? Number(params.page) : 1,
      limit: params.limit ? Number(params.limit) : 5,
      year: params.year ? Number(params.year) : undefined,
      minPrice: params.minPrice ? Number(params.minPrice) : undefined,
      maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
    });
  }, [searchParams, form]);

  // Debounced URL update and filter count
  useEffect(() => {
    let handler: NodeJS.Timeout;

    const subscription = form.watch((values) => {
      clearTimeout(handler);
      setIsLoading(true);

      handler = setTimeout(() => {
        const params = new URLSearchParams();
        Object.entries(values).forEach(([key, value]) => {
          if (
            value !== undefined &&
            value !== "" &&
            value !== null &&
            !(typeof value === "number" && isNaN(value)) &&
            !(key === "status" && value === "ALL")
          ) {
            params.set(key, String(value));
          }
        });

        router.replace(`?${params.toString()}`, { scroll: false });
        setIsLoading(false);

        // Calculate active filter count
        const count = Object.entries(values).reduce((acc, [key, value]) => {
          if (
            value !== undefined &&
            value !== "" &&
            value !== null &&
            !(typeof value === "number" && isNaN(value)) &&
            !(key === "status" && value === "ALL") &&
            !["sortBy", "sortOrder", "page", "limit"].includes(key)
          ) {
            return acc + 1;
          }
          return acc;
        }, 0);
        setFilterCount(count);
      }, 400);
    });

    return () => {
      clearTimeout(handler);
      subscription.unsubscribe();
    };
  }, [form.watch, router]);

  return (
    <div className="sticky top-0 z-10 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-2">
      {/* Header with Filter Count */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Filter Vehicles
        </h3>
        {filterCount > 0 && (
          <span className="inline-flex items-center px-2.5 py-1 text-sm font-medium text-white bg-primary rounded-full">
            {filterCount} {filterCount === 1 ? "Filter" : "Filters"} Active
          </span>
        )}
      </div>

      {/* Main Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by model or make..."
            className={cn(
              "pl-10 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
              form.formState.errors.search && "border-red-500"
            )}
            {...form.register("search")}
          />
          {form.formState.errors.search && (
            <p className="mt-1 text-xs text-red-500">
              {form.formState.errors.search.message}
            </p>
          )}
        </div>

        {/* Status Select */}
        <Select
          onValueChange={(val: StatusCar) => form.setValue("status", val)}
          value={form.watch("status") || "ALL"}
        >
          <SelectTrigger
            className={cn(
              "border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
              form.formState.errors.status && "border-red-500"
            )}
            aria-label="Select vehicle status"
          >
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All Statuses</SelectItem>
            <SelectItem value="AVAILABLE">Available</SelectItem>
            <SelectItem value="UNAVAILABLE">Unavailable</SelectItem>
            <SelectItem value="SOLD">Sold</SelectItem>
            <SelectItem value="PENDING">Pending</SelectItem>
          </SelectContent>
        </Select>

        {/* Featured Checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="featured"
            checked={!!form.watch("featured")}
            onCheckedChange={(val) => form.setValue("featured", Boolean(val))}
            className="border-gray-300 focus:ring-primary"
            aria-label="Filter by featured vehicles"
          />
          <label
            htmlFor="featured"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Featured Vehicles
          </label>
        </div>

        {/* Sort By and Order */}
        <div className="flex  gap-3">
          <Select
            onValueChange={(val: SortBy) => form.setValue("sortBy", val)}
            value={form.watch("sortBy")}
          >
            <SelectTrigger
              className={cn(
                "border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-full",
                form.formState.errors.sortBy && "border-red-500"
              )}
              aria-label="Sort by"
            >
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="createdAt">Date Added</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectContent>
          </Select>

          <Select
            onValueChange={(val: SortOrder) => form.setValue("sortOrder", val)}
            value={form.watch("sortOrder")}
          >
            <SelectTrigger
              className={cn(
                "border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-full",
                form.formState.errors.sortOrder && "border-red-500"
              )}
              aria-label="Sort order"
            >
              <SelectValue placeholder="Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectContent>
          </Select>

          <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 text-primary font-medium hover:bg-primary hover:text-white transition-all rounded-lg"
          aria-expanded={showAdvanced}
          aria-controls="advanced-filters"
        >
          Advanced Filters
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform",
              showAdvanced && "rotate-180"
            )}
          />
        </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="border-t pt-2 dark:border-gray-700">
        {showAdvanced && (
          <div
            id="advanced-filters"
            className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-300"
          >
            {[
              { name: "bodyType", placeholder: "Body Type (e.g., SUV)", type: "text", hint: "Sedan, SUV, Truck, Van,..." },
              { name: "fuelType", placeholder: "Fuel Type (e.g., Petrol)", type: "text", hint: "Petrol, Diesel, Electric, Hybrid,..." },
              { name: "transmission", placeholder: "Transmission (e.g., Automatic)", type: "text", hint: "Automatic, Manual, Semi-Automatic,..." },
              { name: "color", placeholder: "Color (e.g., Blue)", type: "text", hint: "Red, Blue, Green, Black, White,..." },
              { name: "make", placeholder: "Make (e.g., Toyota)", type: "text", hint: "Toyota, Ford, BMW, Audi,..." },
              { name: "model", placeholder: "Model (e.g., Corolla)", type: "text", hint: "Corolla, Mustang, X5, A4,..." },
              { name: "year", placeholder: "Year (e.g., 2020)", type: "number" },
              { name: "minPrice", placeholder: "Min Price (e.g., 10000)", type: "number" },
              { name: "maxPrice", placeholder: "Max Price (e.g., 50000)", type: "number" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <Input
                  type={field.type}
                  placeholder={field.placeholder}
                  className={cn(
                    "border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                    form.formState.errors[field.name as keyof CarFilterFormValues] && "border-red-500"
                  )}
                  {...form.register(field.name as keyof CarFilterFormValues, {
                    valueAsNumber: field.type === "number",
                  })}
                />
                {field.hint && (
                  <p className="mt-1 ml-2 text-xs text-gray-500">{field.hint}</p>
                )}
                {form.formState.errors[field.name as keyof CarFilterFormValues] && (
                  <p className="mt-1 text-xs text-red-500">
                    {form.formState.errors[field.name as keyof CarFilterFormValues]?.message}
                  </p>
                )}
              </div>
            ))}
            {/* Clear Advanced Filters Button */}
            <div className="flex justify-end col-span-full">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  ["bodyType", "fuelType", "transmission", "color", "make", "model", "year", "minPrice", "maxPrice"].forEach((field) =>
                    form.setValue(field as keyof CarFilterFormValues, undefined)
                  );
                }}
                className="text-primary hover:text-primary-dark"
              >
                <X className="h-4 w-4 mr-1" /> Clear Advanced Filters
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Reset All Button */}
      <div className="flex justify-end">
        <Button
          type="button"
          variant="outline"
          className={cn(
            "bg-primary text-white hover:bg-primary-dark transition-all rounded-lg",
            isLoading && "opacity-50 cursor-not-allowed"
          )}
          disabled={isLoading}
          onClick={() => {
            form.reset(defaultCarFilterValues);
            router.replace("?", { scroll: false });
          }}
        >
          {isLoading ? "Applying..." : "Reset All Filters"}
        </Button>
      </div>
    </div>
  );
};