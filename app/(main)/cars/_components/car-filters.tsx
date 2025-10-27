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
    const currentCarType = searchParams.get("carType") || "";

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
    const [carType, setCarType] = useState(currentCarType);
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

    return (
        <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Mobile Filter */}
            <div className="lg:hidden mb-4">
                <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 px-4 py-2 btn-outline rounded-lg"
                        >
                            <Filter className="h-5 w-5 text-muted-foreground" />
                            <span className="text-sm font-medium text-foreground">Filters</span>
                            {activeFiltersCount > 0 && (
                                <Badge className="ml-2 badge-primary h-6 w-6">
                                    {activeFiltersCount}
                                </Badge>
                            )}
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="w-full sm:max-w-sm">
                        <SheetHeader className="mb-6">
                            <SheetTitle className="text-2xl font-bold text-foreground">
                                Refine Your Search
                            </SheetTitle>
                            <p className="text-sm text-muted-foreground">Customize your vehicle preferences</p>
                        </SheetHeader>
                        <Select
                            value={sortBy}
                            onValueChange={(value) => {
                                setSortBy(value);
                                applyFilters();
                            }}
                        >
                            <SelectTrigger className="w-full select-trigger">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent className="bg-card">
                                {[
                                    { value: "newest", label: "Newest First" },
                                    { value: "priceASC", label: "Price: Low to High" },
                                    { value: "priceDESC", label: "Price: High to Low" },
                                    { value: "mileageASC", label: "Mileage: Low to High" },
                                ].map((option) => (
                                    <SelectItem
                                        key={option.value}
                                        value={option.value}
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
                                className="w-full sm:w-auto btn-outline"
                                onClick={clearFilters}
                            >
                                <X className="h-4 w-4 mr-2 text-muted-foreground" /> Reset All
                            </Button>
                            <Button
                                className="w-full sm:w-auto btn-gold"
                                onClick={applyFilters}
                            >
                                Apply Filters
                            </Button>
                        </SheetFooter>
                        <p className="text-xs text-muted-foreground mt-4 text-center">
                            Last updated: 04:22 PM +07, Oct 17, 2025
                        </p>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Filter */}
            <div className="hidden lg:block w-full">
                <Card className="card rounded-2xl sticky top-24 bg-card">
                    <CardHeader className="card-header flex justify-between items-center rounded-t-2xl">
                        <CardTitle className="text-lg font-semibold text-foreground flex items-center">
                            <Sliders className="h-5 w-5 mr-2 text-accent2" />
                            Vehicle Filters
                        </CardTitle>
                        {activeFiltersCount > 0 && (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-muted-foreground hover:text-destructive"
                                        onClick={clearFilters}
                                    >
                                        <X className="h-4 w-4 mr-1 text-muted-foreground" /> Clear All
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
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
                            <SelectTrigger className="w-full select-trigger">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent className="bg-card">
                                {[
                                    { value: "newest", label: "Newest First" },
                                    { value: "priceAsc", label: "Price: Low to High" },
                                    { value: "priceDesc", label: "Price: High to Low" },
                                    { value: "mileageAsc", label: "Mileage: Low to High" },
                                ].map((option) => (
                                    <SelectItem
                                        key={option.value}
                                        value={option.value}
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
                        <Separator />
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>Price Range: {formatCurrencyVND(priceRange[0] || 0)} - {formatCurrencyVND(priceRange[1] || 5000000)}</span>
                            <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1 text-muted-foreground" /> Updated: 04:22 PM +07, Oct 17, 2025
                            </span>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4">
                        <Button
                            className="w-full btn-gold"
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