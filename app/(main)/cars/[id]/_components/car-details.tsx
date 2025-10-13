'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BookCheck,
  CalendarIcon,
  CarIcon,
  CheckCircleIcon,
  ClockIcon,
  Currency,
  FolderHeart,
  Heart,
  MapPinIcon,
  MessageSquare,
  Share2,
  XCircleIcon,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import useFetch from '@/app/hooks/use-fetch'
import { ApiResponse } from '@/types/api'
import { Car, SerializeCars} from '@/types/car'
import { toggleSavedCar } from '@/actions/car-listing'
import { toast } from 'sonner'
import { formatCurrency } from '@/lib/helper'
import { format, formatDate } from 'date-fns'
import CardImageSwipe from './card-image-swipe'
import EmiCalculator from './car-emi-calc'
import { TestDriveBooking } from '@/types/user'

interface CarDetailsProps {
  car: SerializeCars
}

const CarDetails = ({ car }: CarDetailsProps) => {
  const router = useRouter()
  const { isSignedIn } = useAuth()
  const [isWishlisted, setIsWishlisted] = useState<boolean>(car.whishlisted || false)

  const existUserBookings: TestDriveBooking[] = car?.testDriverInfo?.userTestDrives || []
  const nextBooking: TestDriveBooking | null =
    existUserBookings.length > 0
      ? [...existUserBookings].sort(
          (a, b) => new Date(a.bookingDate).getTime() - new Date(b.bookingDate).getTime()
        )[0]
      : null

  const { loading: savingCar, fetchData: fnToggleSavedCar, data: savedCarData, error: saveCarError } =
    useFetch<ApiResponse<any>>(toggleSavedCar)

  useEffect(() => {
    if (savedCarData?.success && savedCarData.saved !== isWishlisted) {
      setIsWishlisted(!!savedCarData.saved)
      toast.success(savedCarData.message || (savedCarData.saved ? 'Added to favorites' : 'Removed from favorites'))
    }
    if (saveCarError) {
      toast.error(saveCarError.message || 'An error occurred')
    }
  }, [savedCarData, saveCarError, isWishlisted])

  const handleToggleSaved = async () => {
    if (!isSignedIn) {
      toast.error('You must be signed in to save cars.')
      return
    }
    if (savingCar) return
    await fnToggleSavedCar(car.id)
  }

  const handleShareCar = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Check out this car: ${car.make} ${car.model}`,
          text: `Check out this car: ${car.make} ${car.model}. Price: $${car.price.toLocaleString()}`,
          url: window.location.href,
        })
        .catch((error) => {
          console.error('Error sharing', error)
          copyToClipboard()
        })
    } else {
      copyToClipboard()
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => toast.success('Link copied to clipboard'))
      .catch((error) => {
        console.error('Error copying to clipboard', error)
        toast.error('Failed to copy link')
      })
  }

  const handleBookTestDrive = () => {
    if (!isSignedIn) {
      toast.error('You must be signed in to book a test drive.')
      return
    }
    router.push(`/test-drive/${car.id}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-xl border border-gray-100 rounded-2xl overflow-hidden bg-white">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-100 p-6 border-b border-gray-200">
          <CardTitle className="text-3xl font-bold flex items-center gap-3 text-gray-800">
            <CarIcon className="w-8 h-8 text-blue-600" />
            {car.make} {car.model} ({car.year})
          </CardTitle>
          <CardDescription className="text-gray-600 text-lg mt-1">
            Explore the details of this stunning vehicle
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Vehicle Information */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Vehicle Information</h3>
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: isWishlisted ? [1, 1.2, 1] : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FolderHeart
                      size={36}
                      className={isWishlisted ? 'text-yellow-500' : 'text-gray-400'}
                    />
                  </motion.div>
                </div>

                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <strong>Price:</strong>
                    <span className="text-green-600 font-semibold text-lg">
                      {formatCurrency(car.price)}
                    </span>
                  </p>
                  <p>
                    <strong>Mileage:</strong> {car.mileage.toLocaleString()} miles
                  </p>
                  <p>
                    <strong>Color:</strong> {car.color}
                  </p>
                  <p>
                    <strong>Fuel Type:</strong> {car.fuelType}
                  </p>
                  <p>
                    <strong>Transmission:</strong> {car.transmission}
                  </p>
                  <p>
                    <strong>Body Type:</strong> {car.bodyType}
                  </p>
                  {car.seats && (
                    <p>
                      <strong>Seats:</strong> {car.seats}
                    </p>
                  )}
                  <p className="flex items-center gap-2">
                    <strong>Status:</strong>
                    <Badge
                      variant={car.status === 'AVAILABLE' ? 'default' : 'destructive'}
                      className={`capitalize text-sm ${
                        car.status === 'AVAILABLE'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {car.status.toLowerCase()}
                    </Badge>
                  </p>
                  <p className="flex items-center gap-2">
                    <strong>Featured:</strong>
                    {car.featured ? (
                      <CheckCircleIcon className="text-green-500 w-5 h-5" />
                    ) : (
                      <XCircleIcon className="text-red-500 w-5 h-5" />
                    )}
                  </p>
                </div>

                <div className="flex gap-3 mt-5">
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <Button
                          variant={isWishlisted ? 'outline' : 'default'}
                          className={`flex items-center gap-2 rounded-lg transition-transform duration-200 hover:scale-105 ${
                            isWishlisted
                              ? 'border-gray-300 text-gray-800 hover:bg-color-cma hover:text-white'
                              : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                          disabled={savingCar}
                          onClick={handleToggleSaved}
                          aria-label={isWishlisted ? 'Remove from saved cars' : 'Save this car'}
                        >
                          <Heart
                            className={`w-5 h-5 ${isWishlisted ? 'fill-current' : 'fill-transparent'}`}
                          />
                          {savingCar ? 'Processing...' : isWishlisted ? 'Remove from Saved' : 'Save Car'}
                        </Button>
                      </Tooltip.Trigger>
                      <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                        {isWishlisted ? 'Remove from saved cars' : 'Save this car'}
                        <Tooltip.Arrow className="fill-gray-900" />
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>

                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-600 hover:bg-gray-100 rounded-full transition-transform duration-200 hover:scale-105"
                          onClick={handleShareCar}
                          aria-label="Share this car"
                        >
                          <Share2 className="w-5 h-5" />
                        </Button>
                      </Tooltip.Trigger>
                      <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                        Share this car
                        <Tooltip.Arrow className="fill-gray-900" />
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </div>
              </div>

              <div className="text-lg text-gray-700">
                <p>
                  <strong>Description:</strong> {car.description || 'No description available.'}
                </p>
              </div>

              <div className="text-sm text-gray-500 space-y-2">
                <p className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-gray-400" />
                  <strong>Created At:</strong> {formatDate(new Date(car.createdAt), 'MMMM d, yyyy')}
                </p>
                <p className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-gray-400" />
                  <strong>Updated At:</strong> {formatDate(new Date(car.updatedAt), 'MMMM d, yyyy')}
                </p>
              </div>
            </motion.div>

            {/* Image and Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <CardImageSwipe car={car} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="hover:shadow-md transition-shadow duration-300 cursor-pointer">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
                          <Currency className="h-5 w-5 text-blue-600" />
                          EMI Calculator
                        </div>
                        <p className="text-sm text-gray-600">
                          Estimated Monthly Payment:{' '}
                          <span className="font-bold text-gray-800">
                            {formatCurrency(Number(car.price) / 60)}
                          </span>{' '}
                          for 60 months
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          *Based on $0 down payment and 4.5% interest rate
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gray-800">
                        CMA Smart Calculator
                      </DialogTitle>
                    </DialogHeader>
                    <EmiCalculator price={Number(car.price)} />
                  </DialogContent>
                </Dialog>

                <Card className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-2">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                      Contact Seller
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Have questions? Reach out to the seller directly.
                    </p>
                    <a href={`mailto:${car.testDriverInfo?.dealerShip?.email || '#'}`}>
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 text-gray-800 hover:bg-blue-600 hover:text-white rounded-lg transition-transform duration-200 hover:scale-105"
                      >
                        Contact via Email
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>

              {car.status !== 'AVAILABLE' && (
                <Alert variant="destructive" className="mt-6 rounded-lg">
                  <AlertTitle className="flex items-center gap-2">
                    <XCircleIcon className="h-5 w-5 text-red-600" />
                    <span className="text-sm font-semibold">
                      This car is currently {car.status.toLowerCase()}.
                    </span>
                  </AlertTitle>
                  <AlertDescription>Please check back later for more information.</AlertDescription>
                </Alert>
              )}

              {car.status === 'AVAILABLE' && (
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <Button
                        className="mt-6 w-full py-6 text-lg bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105"
                        onClick={handleBookTestDrive}
                        aria-label="Book a test drive"
                      >
                        Book a Test Drive
                        <BookCheck className="h-5 w-5" />
                      </Button>
                    </Tooltip.Trigger>
                    <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                      Schedule a test drive for this car
                      <Tooltip.Arrow className="fill-gray-900" />
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              )}

              {nextBooking && (
                <p className="text-sm text-yellow-600 italic mt-2 text-center">
                  Reminder: Your nearest test drive is scheduled for{' '}
                  {formatDate(new Date(nextBooking.bookingDate), 'EEEE, MMMM d, yyyy')}
                </p>
              )}
            </motion.div>
          </div>

          {/* Test Drive and Dealership Information */}
          {car.testDriverInfo && (
            <motion.div
              className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Test Drive Information</h2>
                <Card className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">User Test Drives</h3>
                      {existUserBookings.length > 0 ? (
                        <ul className="list-disc ml-6 text-gray-700 space-y-2">
                          {existUserBookings.map((testDrive, index) => (
                            <li key={index}>
                              <p>
                                <strong>Email:</strong> {testDrive?.user?.email || 'N/A'}
                              </p>
                              <p>
                                <strong>Booking Date:</strong>{' '}
                                {testDrive.bookingDate
                                  ? formatDate(new Date(testDrive.bookingDate), 'MMMM d, yyyy')
                                  : 'N/A'}
                              </p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500">No test drives scheduled.</p>
                      )}
                    </div>

                    {car.testDriverInfo.dealerShip && (
                      <div className="border-t pt-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Dealership Information
                        </h3>
                        <div className="space-y-2 text-gray-700">
                          <p className="flex items-center gap-2">
                            <MapPinIcon className="w-5 h-5 text-blue-600" />
                            <strong>{car.testDriverInfo.dealerShip.name || 'N/A'}</strong>
                          </p>
                          <p className="ml-7">{car.testDriverInfo.dealerShip.address || 'N/A'}</p>
                          <p className="ml-7">
                            <strong>Phone:</strong> {car.testDriverInfo.dealerShip.phone || 'N/A'}
                          </p>
                          <p className="ml-7">
                            <strong>Email:</strong> {car.testDriverInfo.dealerShip.email || 'N/A'}
                          </p>
                          <p className="ml-7">
                            <strong>Website:</strong>{' '}
                            <a
                              href={car.testDriverInfo.dealerShip.website || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {car.testDriverInfo.dealerShip.website || 'N/A'}
                            </a>
                          </p>
                          <div className="ml-7 mt-2">
                            <p className="flex items-center gap-2 font-semibold text-gray-800">
                              <ClockIcon className="w-5 h-5 text-blue-600" />
                              Working Hours:
                            </p>
                            <ul className="list-disc ml-6 text-gray-600 text-sm">
                              {car.testDriverInfo.dealerShip.workingHours?.map((wh, i) => (
                                <li key={i}>
                                  {wh.dayOfWeek}: {wh.isOpen ? `${wh.openTime} – ${wh.closeTime}` : 'Closed'}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="text-sm text-gray-500 mt-3">
                            <p>
                              <strong>Created At:</strong>{' '}
                              {formatDate(
                                new Date(car.testDriverInfo.dealerShip.createdAt),
                                'MMMM d, yyyy'
                              )}
                            </p>
                            <p>
                              <strong>Updated At:</strong>{' '}
                              {formatDate(
                                new Date(car.testDriverInfo.dealerShip.updatedAt),
                                'MMMM d, yyyy'
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Find Us</h2>
                <Card className="p-4 rounded-xl shadow-sm">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      car.testDriverInfo?.dealerShip?.address || 'San Francisco, CA'
                    )}&output=embed`}
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen
                    loading="lazy"
                    title="Dealership Location"
                  />
                </Card>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default CarDetails