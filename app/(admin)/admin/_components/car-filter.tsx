"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { z } from "zod";
import { cn } from "@/lib/utils";
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
import { Search, ChevronDown, X, ArrowUp, ArrowDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type CarFilterFormValues = z.infer<typeof carFilterSchema>;

interface CarFiltersProps {
  onChange: (values: CarFilterFormValues) => void;
}

const defaultValues: CarFilterFormValues = {
  search: "",
  status: undefined,
  featured: undefined,
  bodyType: undefined,
  fuelType: undefined,
  transmission: undefined,
  color: undefined,
  year: undefined,
  make: undefined,
  model: undefined,
  carType: undefined,
  countViews: undefined,
  avgRating: undefined,
  negotiable: undefined,
  minSalePrice: undefined,
  maxSalePrice: undefined,
  minRentHourlyPrice: undefined,
  maxRentHourlyPrice: undefined,
  minRentDailyPrice: undefined,
  maxRentDailyPrice: undefined,
  minDeposit: undefined,
  maxDeposit: undefined,
  sortBy: "createdAt",
  sortOrder: "desc",
  page: 1,
  limit: 5,
};

export const CarFilters = ({ onChange }: CarFiltersProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isFirst = useRef(true);
  const [filterCount, setFilterCount] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const {
    register,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<CarFilterFormValues>({
    resolver: zodResolver(carFilterSchema) as any,
    defaultValues,
  });

  /* ---------------------------------------------------- */
  /* 1. Init form from URL                               */
  /* ---------------------------------------------------- */
  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    const parsed: Partial<CarFilterFormValues> = {};

    for (const [k, v] of Object.entries(params)) {
      if (["page", "limit", "year", "countViews", "avgRating", "minSalePrice", "maxSalePrice", "minRentHourlyPrice", "maxRentHourlyPrice", "minRentDailyPrice", "maxRentDailyPrice", "minDeposit", "maxDeposit"].includes(k)) {
        parsed[k as keyof CarFilterFormValues] = Number(v) as any;
      } else if (["featured", "negotiable"].includes(k)) {
        parsed[k as keyof CarFilterFormValues] = v === "true" ? true : undefined as any;
      } else {
        parsed[k as keyof CarFilterFormValues] = v as any;
      }
    }

    reset({ ...defaultValues, ...parsed });
    onChange({ ...defaultValues, ...parsed });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  /* ---------------------------------------------------- */
  /* 2. Push every change → URL + parent                */
  /* ---------------------------------------------------- */
  useEffect(() => {
    const sub = watch((values:any) => {
      if (isFirst.current) {
        isFirst.current = false;
        return;
      }

      const clean: Record<string, string> = {};
      let cnt = 0;

      Object.entries(values).forEach(([k, v]) => {
        if (v === undefined || v === "" || v === false) return;
        if (k === "status" && v === "ALL") return;
        if (["sortBy", "sortOrder", "page", "limit"].includes(k)) return;

        clean[k] = String(v);
        cnt++;
      });
      if (values.status && values.status !== "ALL") cnt++;

      setFilterCount(cnt);

      const sp = new URLSearchParams();
      Object.entries(clean).forEach(([k, v]) => sp.set(k, v));
      sp.set("page", String(values.page ?? 1));
      sp.set("limit", String(values.limit ?? 5));
      sp.set("sortBy", values.sortBy ?? "createdAt");
      sp.set("sortOrder", values.sortOrder ?? "desc");

      router.replace(`?${sp.toString()}`, { scroll: false });
      onChange && onChange(values);
    });

    return () => sub.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch, router, onChange]);

  const advancedFields = [
    { name: "bodyType", placeholder: "Body Type", hint: "Sedan, SUV, …" },
    { name: "fuelType", placeholder: "Fuel Type", hint: "Petrol, Diesel, …" },
    { name: "transmission", placeholder: "Transmission", hint: "Automatic, Manual, …" },
    { name: "color", placeholder: "Color", hint: "Red, Blue, …" },
    { name: "make", placeholder: "Make", hint: "Toyota, BMW, …" },
    { name: "model", placeholder: "Model", hint: "Corolla, X5, …" },
    { name: "year", placeholder: "Year", type: "number" },
    { name: "countViews", placeholder: "Min Views", type: "number" },
    { name: "avgRating", placeholder: "Min Rating", type: "number" },
  ] as const;

  return (
    <div className="sticky top-0 z-10 p-4 bg-card rounded-xl shadow-lg space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filter Vehicles</h3>
        {filterCount > 0 && (
          <span className="badge-primary">{filterCount} active</span>
        )}
      </div>

      {/* Main row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 p-4 bg-card rounded-xl border border-border">
        {/* Search */}
        <div className="relative col-span-1 sm:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search make / model…"
            className={cn("pl-10 h-10 border-none", errors.search && "border-destructive")}
            {...register("search")}
          />
        </div>

        {/* Status */}
        <Select
          value={watch("status") ?? "ALL"}
          onValueChange={(v) => setValue("status", v as any)}
        >
          <SelectTrigger className="h-10 border-none">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-card">
            <SelectItem value="ALL">All</SelectItem>
            {["AVAILABLE","RESERVED","RENTED","SOLD","PENDING"].map((s) => (
              <SelectItem key={s} value={s}>
                {s[0] + s.slice(1).toLowerCase()}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Car type */}
        <Select
          value={watch("carType") ?? "BOTH"}
          onValueChange={(v) => setValue("carType", v as any)}
        >
          <SelectTrigger className="h-10 border-none">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent className="bg-card">
            <SelectItem value="SALE">Sale</SelectItem>
            <SelectItem value="RENT">Rent</SelectItem>
            <SelectItem value="BOTH">Both</SelectItem>
          </SelectContent>
        </Select>

        {/* Featured */}
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg  bg-background">
          <Checkbox
            id="featured"
            checked={!!watch("featured")}
            onCheckedChange={(c) => setValue("featured", Boolean(c))}
          />
          <label htmlFor="featured" className="text-sm">Featured</label>
        </div>

        {/* Sort */}
        <div className="flex gap-2 col-span-1 sm:col-span-2 lg:col-span-1">
          <Select
            value={watch("sortBy")}
            onValueChange={(v) => setValue("sortBy", v as any)}
          >
            <SelectTrigger className="h-10 border-none">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-card">
              <SelectItem value="createdAt">Date added</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={watch("sortOrder")}
            onValueChange={(v) => setValue("sortOrder", v as any)}
          >
            <SelectTrigger className="h-10 w-12 border-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card">
              <SelectItem value="asc"><ArrowUp className="h-4 w-4" /></SelectItem>
              <SelectItem value="desc"><ArrowDown className="h-4 w-4" /></SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Pricing collapsible */}
      <Collapsible open={showPricing} onOpenChange={setShowPricing}>
        <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium">
          Pricing <ChevronDown className={cn("h-4 w-4 transition-transform", showPricing && "rotate-180")} />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Sale price */}
          {(watch("carType") === "SALE" || watch("carType") === "BOTH") && (
            <>
              <div>
                <label className="text-xs">Min Sale Price</label>
                <Input type="number" {...register("minSalePrice", { valueAsNumber: true })} />
              </div>
              <div>
                <label className="text-xs">Max Sale Price</label>
                <Input type="number" {...register("maxSalePrice", { valueAsNumber: true })} />
              </div>
              <div className="flex items-center gap-2 mt-5">
                <Checkbox
                  id="negotiable"
                  checked={!!watch("negotiable")}
                  onCheckedChange={(c) => setValue("negotiable", Boolean(c))}
                />
                <label htmlFor="negotiable" className="text-sm">Negotiable</label>
              </div>
            </>
          )}

          {/* Rent price */}
          {(watch("carType") === "RENT" || watch("carType") === "BOTH") && (
            <>
              <div><label className="text-xs">Min Hourly</label><Input type="number" {...register("minRentHourlyPrice", { valueAsNumber: true })} /></div>
              <div><label className="text-xs">Max Hourly</label><Input type="number" {...register("maxRentHourlyPrice", { valueAsNumber: true })} /></div>
              <div><label className="text-xs">Min Daily</label><Input type="number" {...register("minRentDailyPrice", { valueAsNumber: true })} /></div>
              <div><label className="text-xs">Max Daily</label><Input type="number" {...register("maxRentDailyPrice", { valueAsNumber: true })} /></div>
              <div><label className="text-xs">Min Deposit</label><Input type="number" {...register("minDeposit", { valueAsNumber: true })} /></div>
              <div><label className="text-xs">Max Deposit</label><Input type="number" {...register("maxDeposit", { valueAsNumber: true })} /></div>
            </>
          )}
        </CollapsibleContent>
      </Collapsible>

      {/* Advanced collapsible */}
      <Collapsible open={showAdvanced} onOpenChange={setShowAdvanced}>
        <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium">
          Advanced <ChevronDown className={cn("h-4 w-4 transition-transform", showAdvanced && "rotate-180")} />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {advancedFields.map((f:any) => (
            <div key={f.name}>
              <Input
                type={f.type ?? "text"}
                placeholder={f.placeholder}
                {...register(f.name as keyof CarFilterFormValues, {
                  valueAsNumber: f.type === "number",
                })}
              />
              {f.hint && <p className="mt-1 text-xs text-muted-foreground">{f.hint}</p>}
            </div>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => advancedFields.forEach((f) => setValue(f.name as any, undefined))}
          >
            <X className="h-4 w-4 mr-1" /> Clear
          </Button>
        </CollapsibleContent>
      </Collapsible>

      {/* Reset */}
      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={() => {
            reset(defaultValues);
            router.replace("?", { scroll: false });
          }}
        >
          Reset All
        </Button>
      </div>
    </div>
  );
};