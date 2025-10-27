"use client";

import { getCars } from "@/actions/car-listing";
import useFetch from "@/app/hooks/use-fetch";
import { Car } from "@/types/car";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CarListSkeleton from "./car-list-skeleton";
import { ApiResponse, CarListApiResponse } from "@/types/api";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Info, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CarCard from "@/components/car-card";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CarListing = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;

  // Extract filters from URL search params
  const search = searchParams.get("search") || "";
  const make = searchParams.get("make") || "";
  const bodyType = searchParams.get("bodyType") || "";
  const fuelType = searchParams.get("fuelType") || "";
  const transmission = searchParams.get("transmission") || "";
  const minPrice = searchParams.get("minPrice") || "0";
  const maxPrice = searchParams.get("maxPrice") || "100000";
  const sortBy = searchParams.get("sortBy") || "newest";
  const page = parseInt(searchParams.get("page") || "1");

  const {
    loading: isFetchCar,
    fetchData: fnGetCars,
    data: resultCars,
    error: errorData,
  } = useFetch<CarListApiResponse>(getCars);

  useEffect(() => {
    fnGetCars({
      search,
      make,
      bodyType,
      fuelType,
      transmission,
      minPrice,
      maxPrice,
      sortBy,
      page,
      limit,
    });
  }, [search, make, bodyType, fuelType, transmission, minPrice, maxPrice, sortBy, page]);

  if (isFetchCar || !resultCars) {
    return <CarListSkeleton />;
  }

  if (errorData || !resultCars.success) {
    return (
      <Card className="card rounded-2xl">
        <CardContent className="p-6 text-center">
          <Alert variant="destructive" className="max-w-md mx-auto">
            <Info className="h-5 w-5 mr-2 text-destructive" />
            <AlertTitle className="text-lg font-semibold text-foreground">Error</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              Failed to load cars. Please try again later or{" "}
              <Button
                variant="link"
                className="p-0 h-auto text-primary hover:text-primary/80"
                onClick={() => fnGetCars({ search, make, bodyType, fuelType, transmission, minPrice, maxPrice, sortBy, page: 1, limit })}
              >
                refresh
              </Button>
              .
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  if (!resultCars || !resultCars.data) {
    return null;
  }

  const { data: cars, pagination: pageSetting } = resultCars;

  if (cars.length === 0) {
    return (
      <Card className="card rounded-2xl">
        <CardContent className="p-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <Info className="h-8 w-8 text-muted-foreground" />
            <h3 className="text-xl font-semibold text-foreground">No Cars Found</h3>
            <p className="text-muted-foreground max-w-md">
              We couldn't find any cars matching your criteria. Try adjusting your
              filters or explore our full inventory.
            </p>
            <Button
              variant="outline"
              className="btn-outline"
              asChild
            >
              <Link href="/cars">Clear Filters & Explore</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const totalPages = Math.ceil(pageSetting.total / limit);
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const params = new URLSearchParams(searchParams.toString());
    const pathname = window.location.pathname;
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="container mx-auto px-4">
      <Card className="card rounded-2xl">
        <CardHeader className="card-header">
          <CardTitle className="text-2xl font-bold text-foreground">
            Available Vehicles
          </CardTitle>
          <p className="text-sm text-muted-foreground flex items-center">
            <Clock className="h-4 w-4 mr-1 text-muted-foreground" /> Last updated: 04:30 PM +07, Oct 17,
            2025
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6 text-sm text-muted-foreground">
            <p>
              Showing{" "}
              <span className="font-medium text-foreground">
                {(page - 1) * limit + 1} - {Math.min(page * limit, pageSetting.total)}
              </span>{" "}
              of <span className="font-medium text-foreground">{pageSetting.total}</span>{" "}
              results
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {cars.map((car: Car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </CardContent>
        {totalPages > 1 && (
          <CardFooter className="p-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(page - 1)}
                    className={`cursor-pointer ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      onClick={() => handlePageChange(pageNum)}
                      isActive={pageNum === page}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(page + 1)}
                    className={`cursor-pointer ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default CarListing;