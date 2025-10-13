'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Heart, Loader2 } from 'lucide-react'
import { Badge } from './ui/badge'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import * as Tooltip from '@radix-ui/react-tooltip'
import { toast } from 'sonner'
import { toggleSavedCar } from '@/actions/car-listing'
import useFetch from '@/app/hooks/use-fetch'
import { ApiResponse } from '@/types/api'
import { Car } from '@/types/car'

interface CarCardProps {
  car: Car
  className?: string
}

const CarCard = ({ car, className }: CarCardProps) => {
  const [isSaved, setIsSaved] = useState<boolean>(car.whishlisted || false)
  const { isSignedIn } = useAuth()
  const router = useRouter()

  const { loading: isSaving, fetchData: fnToggleSavedCar, data: savedCar, error: savedCarError } =
    useFetch<ApiResponse<any>>(toggleSavedCar)

  useEffect(() => {
    if (savedCar?.saved !== isSaved && savedCar?.success) {
      setIsSaved(!!savedCar.saved)
      toast.success(savedCar.message || 'Updated successfully')
    }
    if (savedCarError) {
      toast.error(savedCarError?.message || 'Failed to update saved car')
    }
  }, [savedCar, savedCarError, isSaved])

  const handleToggleSave = async () => {
    if (!isSignedIn) {
      router.push('/sign-in')
      return
    }
    await fnToggleSavedCar(car.id)
  }

  return (
    <motion.div
      className={`overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="border-none">
        <div className="relative h-48">
          {car.images && car.images.length > 0 ? (
            <div className="relative w-full h-full">
              <Image
                src={car.images[0]}
                alt={`${car.make} ${car.model}`}
                fill
                className="object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-color-cma/50 to-transparent rounded-t-xl" />
            </div>
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-t-xl">
              <span className="text-gray-500 font-medium">No Image Available</span>
            </div>
          )}

          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleToggleSave}
                  disabled={isSaving}
                  className={`absolute top-3 right-3 rounded-full bg-white/80 hover:bg-white transition-transform duration-200 hover:scale-110 ${
                    isSaved ? 'text-red-500 hover:text-red-600' : 'text-gray-500 hover:text-gray-600'
                  }`}
                  aria-label={isSaved ? 'Remove from saved cars' : 'Save this car'}
                >
                  {isSaving ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: isSaved ? [1, 1.2, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Heart className={isSaved ? 'fill-current' : 'fill-transparent'} size={20} />
                    </motion.div>
                  )}
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                {isSaved ? 'Remove from saved cars' : 'Save this car'}
                <Tooltip.Arrow className="fill-gray-900" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        <CardContent className="p-4 flex flex-col gap-3">
          <h3 className="text-lg font-bold text-gray-800 truncate">
            {car.make} {car.model}
          </h3>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Mileage</span>
              <p className="text-base font-semibold text-gray-800">
                {car.mileage.toLocaleString()} miles
              </p>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-sm text-gray-500">Price per day</span>
              <p className="text-base font-semibold text-gray-800">${car.price}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-100 text-blue-800 font-medium px-2 py-1">{car.fuelType}</Badge>
            <Badge className="bg-green-100 text-green-800 font-medium px-2 py-1">
              {car.transmission}
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 font-medium px-2 py-1">{car.year}</Badge>
            <Badge className="bg-yellow-100 text-yellow-800 font-medium px-2 py-1">
              {car.seats || 4} Seats
            </Badge>
          </div>

          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button
                  className="w-full  hover:bg-bg-cma text-white rounded-lg hover:shadow-md transition-transform duration-200 active:scale-95"
                  onClick={() => router.push(`/cars/${car.id}`)}
                >
                  Book Now
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                View details and book this car
                <Tooltip.Arrow className="fill-gray-900" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CarCard