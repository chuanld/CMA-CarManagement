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

interface CarCardProps {
  car: Car;
  className?: string;
}

const CarCard = ({ car, className }: CarCardProps) => {
  const [isSaved, setIsSaved] = useState<boolean>(car.whishlisted || false);
  const { isSignedIn } = useAuth();
  const router = useRouter();

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
      className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="border-0">
        {/* Image Block */}
        <div className="relative h-56 w-full">
          {car.images && car.images.length > 0 ? (
            <Image
              src={car.images[0]}
              alt={`${car.make} ${car.model}`}
              fill
              className="object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-t-xl">
              <span className="text-gray-500 text-sm font-medium">No Image Available</span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl flex items-end p-3">
            <p className="text-white text-sm font-semibold truncate">
              {car.make} {car.model} {car.year}
            </p>
          </div>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleToggleSave}
                  disabled={isSaving}
                  className={`absolute top-3 right-3 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-200 hover:scale-110 ${isSaved ? "text-red-500 hover:text-red-600" : "text-gray-600 hover:text-gray-800"
                    }`}
                  aria-label={isSaved ? "Remove from saved" : "Add to saved"}
                >
                  {isSaving ? (
                    <Loader2 className="animate-spin h-5 w-5" />
                  ) : (
                    <Heart
                      className={isSaved ? "fill-current" : "fill-transparent"}
                      size={20}
                    />
                  )}
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-md p-2 shadow-lg border border-gray-800/20">
                {isSaved ? "Remove from Saved" : "Save this Car"}
                <Tooltip.Arrow className="fill-gray-900" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        {/* Content Block */}
        <CardContent className="p-4 pb-0 flex flex-col gap-4">
          {/* Car Details */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900 truncate">
              {car.make} {car.model}
            </h3>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span className="text-gray-500">Mileage</span>
                <p className="font-medium text-gray-800">
                  {car.mileage.toLocaleString()} km
                </p>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-gray-500">Price/Day</span>
                <p className="font-medium text-gray-800">{formatCurrencyVND(car.price)}</p>
              </div>
            </div>
          </div>

          <div className="flex items-baseline-last justify-between">

            {/* Badges Block */}
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-1 text-xs">
                {car.fuelType}
              </Badge>
              <Badge className="bg-green-50 text-green-700 border border-green-200 px-2 py-1 text-xs">
                {car.transmission}
              </Badge>
              <Badge className="bg-purple-50 text-purple-700 border border-purple-200 px-2 py-1 text-xs">
                {car.year}
              </Badge>
              <Badge className="bg-yellow-50 text-yellow-700 border border-yellow-200 px-2 py-1 text-xs">
                {car.seats || 4} Seats
              </Badge>
            </div>

            {/* Action Block */}
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className="flex justify-end">
                    <Button
                      className="w-fit bg-transparent text-black rounded-lg bg-gradient-to-br hover:from-bg-cma/80 hover:to-bg-cma/100 hover:text-white shadow-sm hover:shadow-md transition-all duration-200 text-left border-none outline-none"
                      onClick={() => router.push(`/cars/${car.id}`)}
                    >
                      Book Now
                    </Button>
                  </div>

                </Tooltip.Trigger>
                <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-md p-2 shadow-lg border border-gray-800/20 z-10">
                  View details and book this car
                  <Tooltip.Arrow className="fill-gray-900" />
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