"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Heart, Loader2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import * as Tooltip from "@radix-ui/react-tooltip";
import { toast } from "sonner";
import { toggleSavedCar } from "@/actions/car-listing";
import useFetch from "@/app/hooks/use-fetch";
import { ApiResponse } from "@/types/api";
import { Car } from "@/types/car";
import { formatCurrencyVND } from "@/lib/helper";
import { cn } from "@/lib/utils";

interface CarCardProps {
  car: Car;
  className?: string;
}

const CarCard = ({ car, className }: CarCardProps) => {
  const [isSaved, setIsSaved] = useState<boolean>(car.whishlisted || false);
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const businessType = car.carType || 'BOTH';

  const {
    loading: isSaving,
    fetchData: fnToggleSavedCar,
    data: savedCar,
    error: savedCarError,
  } = useFetch<ApiResponse<any>>(toggleSavedCar);

  useEffect(() => {
    if (savedCar?.saved !== isSaved && savedCar?.success) {
      setIsSaved(!!savedCar.saved);
      toast.success(savedCar.message || "Updated successfully");
    }
    if (savedCarError) {
      toast.error(savedCarError?.message || "Failed to update saved car");
    }
  }, [savedCar, savedCarError, isSaved]);

  const handleToggleSave = async () => {
    if (!isSignedIn) {
      router.push("/sign-in");
      return;
    }
    await fnToggleSavedCar(car.id);
  };

  return (
    <motion.div
      className="card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-fit"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="border-0 h-full">
        {/* Image Block */}
        <div className="relative h-40 w-full">
          {car.images && car.images.length > 0 ? (
            <Image
              src={car.images[0]}
              alt={`${car.make} ${car.model}`}
              fill
              className="object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
              quality={90}
              priority
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center rounded-t-2xl">
              <span className="text-muted-foreground text-sm font-medium">No Image Available</span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl flex items-end p-3">
            <p className="text-white text-sm font-semibold truncate">
              {car.make} {car.model} {car.year}
            </p>
            <Badge
              className={cn(
                "absolute top-2 left-2 px-2.5 py-1 text-xs font-medium rounded-md",
                businessType === "SALE" && "bg-badge-isSale/70 text-badge-isSale-foreground border-badge-isSale",
                businessType === "RENT" && "bg-badge-isRent/70 text-badge-isRent-foreground border-badge-isRent",
                businessType === "BOTH" && "bg-badge-both/70 text-badge-both-foreground border-badge-both "
              )}
            >
              {businessType === "SALE"
                ? "For Sale"
                : businessType === "RENT"
                  ? "For Rent"
                  : "Sale & Rent"}
            </Badge>
          </div>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleToggleSave}
                  disabled={isSaving}
                  className="absolute top-3 right-3 h-10 w-10 rounded-full bg-background/90 hover:bg-background shadow-md transition-all duration-200 hover:scale-110"
                >
                  {isSaving ? (
                    <Loader2 className="animate-spin h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Heart
                      className={cn(
                        "h-5 w-5 transition-colors",
                        isSaved ? "text-destructive fill-current" : "text-muted-foreground"
                      )}
                      size={20}
                    />
                  )}
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content className="bg-muted text-foreground text-xs rounded-md p-2 shadow-lg">
                {isSaved ? "Remove from Saved" : "Save this Car"}
                <Tooltip.Arrow className="fill-muted" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        {/* Content Block */}
        <CardContent className="p-4 flex flex-col gap-4 h-full">
          {/* Car Details */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-accent-foreground truncate">
              {car.make} {car.model}
            </h3>

            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span className="text-muted-foreground">Mileage</span>
                <p className="font-medium text-accent-foreground">
                  {car.mileage.toLocaleString()} km
                </p>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-muted-foreground">Price/Day</span>
                <p className="font-medium text-muted-foreground">{formatCurrencyVND(car.price)}</p>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between mt-4">
            {/* Badges Block */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="lavender" className="text-xs">
                {car.fuelType}
              </Badge>
              <Badge variant="navy" className="text-xs">
                {car.transmission}
              </Badge>
              <Badge variant="sage" className="text-xs">
                {car.year}
              </Badge>
              <Badge variant="sky" className="text-xs">
                {car.seats || 4} Seats
              </Badge>
            </div>

            {/* Action Block */}
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className="flex justify-end">
                    <Button
                      className="w-fit btn-gold text-sm px-4 py-2"
                      onClick={() => router.push(`/cars/${car.id}`)}
                    >
                      Book Now
                    </Button>
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Content className="bg-muted text-foreground text-xs rounded-md p-2 shadow-lg">
                  View details and book this car
                  <Tooltip.Arrow className="fill-muted" />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CarCard;