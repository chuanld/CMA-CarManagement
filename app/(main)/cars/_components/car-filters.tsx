"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { FilterOptions } from "@/types/api";
import { Filter, Sliders, X, ChevronDown, Clock } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CarFilterControls from "./filter-controls";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { formatCurrencyVND } from "@/lib/helper";

type Props = {
    filters: FilterOptions | any;
};

const CarFilters = ({ filters }: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    console.log(filters, "filters");

    // Filter features
    const currentMake = searchParams.get("make") || "";
    const currentBodyType = searchParams.get("bodyType") || "";
    const currentFuelType = searchParams.get("fuelType") || "";
    const currentTransmission = searchParams.get("transmission") || "";
    const currentMinPrice = searchParams.get("minPrice")
        ? parseInt(searchParams.get("minPrice") || "0")
        : filters.priceRange?.min || 0;
    const currentMaxPrice = searchParams.get("maxPrice")
        ? parseInt(searchParams.get("maxPrice") || "5000000")
        : filters.priceRange?.max || 5000000;
    const currentSortBy = searchParams.get("sortBy") || "newest";

    // State
    const [make, setMake] = useState(currentMake);
    const [bodyType, setBodyType] = useState(currentBodyType);
    const [fuelType, setFuelType] = useState(currentFuelType);
    const [transmission, setTransmission] = useState(currentTransmission);
    const [priceRange, setPriceRange] = useState<[number, number]>([
        currentMinPrice | 0,
        currentMaxPrice | 5000000,
    ]);
    const [sortBy, setSortBy] = useState(currentSortBy);
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    // Count active filters
    const activeFiltersCount = [
        make,
        bodyType,
        fuelType,
        transmission,
        priceRange[0] > (filters.priceRange?.min || 0) ||
        priceRange[1] < (filters.priceRange?.max || 100000),
    ].filter(Boolean).length;

    const currentFilters = {
        make,
        bodyType,
        fuelType,
        transmission,
        priceRange,
        priceRangeMin: filters.priceRange?.min,
        priceRangeMax: filters.priceRange?.max,
    };

    useEffect(() => {
        setMake(currentMake);
        setBodyType(currentBodyType);
        setFuelType(currentFuelType);
        setTransmission(currentTransmission);
        setPriceRange([currentMinPrice, currentMaxPrice]);
        setSortBy(currentSortBy);
    }, [
        currentMake,
        currentBodyType,
        currentFuelType,
        currentTransmission,
        currentMinPrice,
        currentMaxPrice,
        currentSortBy,
    ]);

    const handleFilterChange = (filterName: string, value: any) => {
        switch (filterName) {
            case "make":
                setMake(value as string);
                break;
            case "bodyType":
                setBodyType(value as string);
                break;
            case "fuelType":
                setFuelType(value as string);
                break;
            case "transmission":
                setTransmission(value as string);
                break;
            case "priceRange":
                setPriceRange(value as [number, number]);
                break;
            default:
                break;
        }
    };

    const handleClearFilter = (filterName: string) => {
        handleFilterChange(filterName, "");
    };

    const clearFilters = () => {
        setMake("");
        setBodyType("");
        setFuelType("");
        setTransmission("");
        setPriceRange([filters.priceRange?.min || 0, filters.priceRange?.max || 100000]);
        setSortBy("newest");

        const params = new URLSearchParams();
        const search = searchParams.get("search") || "";
        if (search) {
            params.set("search", search);
        }
        const queryString = params.toString();
        const url = queryString ? `${pathname}?${queryString}` : pathname;

        router.push(url);
        setIsMobileFiltersOpen(false);
    };

    const applyFilters = () => {
        const params = new URLSearchParams();

        if (make) params.set("make", make);
        if (bodyType) params.set("bodyType", bodyType);
        if (fuelType) params.set("fuelType", fuelType);
        if (transmission) params.set("transmission", transmission);
        if (priceRange[0] > (filters.priceRange?.min || 0))
            params.set("minPrice", priceRange[0].toString());
        if (priceRange[1] < (filters.priceRange?.max || 100000))
            params.set("maxPrice", priceRange[1].toString());
        if (sortBy && sortBy !== "newest") params.set("sortBy", sortBy);

        const search = searchParams.get("search") || "";
        const page = searchParams.get("page") || "";

        if (search) {
            params.set("search", search);
        }
        if (page && page !== "1") {
            params.set("page", page);
        }

        const queryString = params.toString();
        const url = queryString ? `${pathname}?${queryString}` : pathname;
        router.push(url);
        setIsMobileFiltersOpen(false);
    };

    console.log(priceRange,'aaaa')
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Mobile Filter */}
            <div className="lg:hidden mb-4">
                <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors rounded-lg shadow-sm"
                        >
                            <Filter className="h-5 w-5 text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">Filters</span>
                            {activeFiltersCount > 0 && (
                                <Badge className="ml-2 bg-blue-600 text-white h-6 w-6 rounded-full flex items-center justify-center text-xs">
                                    {activeFiltersCount}
                                </Badge>
                            )}
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="w-full sm:max-w-sm overflow-y-auto bg-white p-6 rounded-t-2xl shadow-xl">
                        <SheetHeader className="mb-6 border-b pb-4">
                            <SheetTitle className="text-2xl font-bold text-gray-900">
                                Refine Your Search
                            </SheetTitle>
                            <p className="text-sm text-gray-500">Customize your vehicle preferences</p>
                        </SheetHeader>
                        <Select
          value={sortBy}
          onValueChange={(value) => {
            setSortBy(value);
            applyFilters();
          }}
        >
          <SelectTrigger className="w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-300 transition-all flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-800">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
            {[
              { value: "newest", label: "Newest First" },
              { value: "priceASC", label: "Price: Low to High" },
              { value: "priceDESC", label: "Price: High to Low" },
              { value: "mileageASC", label: "Mileage: Low to High" },
            ].map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="hover:bg-gray-100 text-sm py-2"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
                        <div className="space-y-6">
                            <CarFilterControls
                                filters={filters}
                                currentFilters={currentFilters}
                                onFilterChange={handleFilterChange}
                                onClearFilter={handleClearFilter}
                            />
                        </div>
                        <SheetFooter className="mt-6 flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="outline"
                                className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50"
                                onClick={clearFilters}
                            >
                                <X className="h-4 w-4 mr-2" /> Reset All
                            </Button>
                            <Button
                                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md"
                                onClick={applyFilters}
                            >
                                Apply Filters
                            </Button>
                        </SheetFooter>
                        <p className="text-xs text-gray-400 mt-4 text-center">
                            Last updated: 04:22 PM +07, Oct 17, 2025
                        </p>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Sort Selection */}
            {/* <div className="w-full lg:w-1/4">
        <Select
          value={sortBy}
          onValueChange={(value) => {
            setSortBy(value);
            applyFilters();
          }}
        >
          <SelectTrigger className="w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-300 transition-all flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-800">
            <SelectValue placeholder="Sort by" />
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
            {[
              { value: "newest", label: "Newest First" },
              { value: "priceASC", label: "Price: Low to High" },
              { value: "priceDESC", label: "Price: High to Low" },
              { value: "mileageASC", label: "Mileage: Low to High" },
            ].map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="hover:bg-gray-100 text-sm py-2"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div> */}

            {/* Desktop Filter */}
            <div className="hidden lg:block w-full ">
                <Card className="border border-gray-200 rounded-xl shadow-md bg-white/95 backdrop-blur-sm sticky top-24">
                    <CardHeader className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 flex justify-between items-center rounded-t-xl">
                        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                            <Sliders className="h-5 w-5 mr-2 text-blue-600" />
                            Vehicle Filters
                        </CardTitle>
                        {activeFiltersCount > 0 && (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-gray-600 hover:text-red-600 transition-colors"
                                        onClick={clearFilters}
                                    >
                                        <X className="h-4 w-4 mr-1" /> Clear All
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-900 text-white">
                                    <p>Reset all applied filters</p>
                                </TooltipContent>
                            </Tooltip>
                        )}
                    </CardHeader>
                    <CardContent className="p-4 space-y-6">
                        <Select
                            value={sortBy}
                            onValueChange={(value) => {
                                setSortBy(value);
                                applyFilters();
                            }}
                        >
                            <SelectTrigger className="w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-300 transition-all flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-800">
                                <SelectValue placeholder="Sort by" />
                                {/* <ChevronDown className="h-4 w-4 text-gray-400" /> */}
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                                {[
                                    { value: "newest", label: "Newest First" },
                                    { value: "priceAsc", label: "Price: Low to High" },
                                    { value: "priceDesc", label: "Price: High to Low" },
                                    { value: "mileageAsc", label: "Mileage: Low to High" },
                                ].map((option) => (
                                    <SelectItem
                                        key={option.value}
                                        value={option.value}
                                        className="hover:bg-gray-100 text-sm py-2"
                                    >
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <CarFilterControls
                            filters={filters}
                            currentFilters={currentFilters}
                            onFilterChange={handleFilterChange}
                            onClearFilter={handleClearFilter}
                        />
                        <Separator className="bg-gray-200" />
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>Price Range: {formatCurrencyVND(priceRange[0] || 0)} - {formatCurrencyVND(priceRange[1] || 5000000)}</span>
                            <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" /> Updated: 04:22 PM +07, Oct 17, 2025
                            </span>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 border-t border-gray-200">
                        <Button
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg shadow-md transition-all"
                            onClick={applyFilters}
                        >
                            Apply Filters
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default CarFilters;