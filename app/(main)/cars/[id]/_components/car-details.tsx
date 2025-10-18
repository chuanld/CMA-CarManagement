'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import {
  BookCheck,
  CalendarIcon,
  CarIcon,
  CheckCircle,
  CheckCircleIcon,
  ClockIcon,
  CurrencyIcon,
  FolderHeart,
  Fuel,
  Gauge,
  Heart,
  MapPin,
  MessageSquare,
  Navigation,
  Share2,
  
  SpaceIcon,
  
  Users,
  XCircle,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Progress } from '@/components/ui/progress'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import useFetch from '@/app/hooks/use-fetch'
import { ApiResponse } from '@/types/api'
import { Car } from '@/types/car'
import { toggleSavedCar } from '@/actions/car-listing'
import { toast } from 'sonner'
import { formatCurrency, formatCurrencyVND } from '@/lib/helper'
import { format } from 'date-fns'
import CardImageSwipe from './card-image-swipe'
import EmiCalculator from './car-emi-calc'
import { TestDriveBooking } from '@/types/user'

interface CarDetailsProps {
  car: Car
}

const CarDetails = ({ car }: CarDetailsProps) => {
  const router = useRouter()
  const { isSignedIn } = useAuth()
  const [isWishlisted, setIsWishlisted] = useState<boolean>(car.whishlisted || false)

  const existUserBookings: TestDriveBooking[] = car?.testDriveBookings || []
  const nextBooking: TestDriveBooking | null =
    existUserBookings.length > 0
      ? [...existUserBookings].sort(
          (a, b) => new Date(a.bookingDate).getTime() - new Date(b.bookingDate).getTime()
        )[0]
      : null

   console.log(existUserBookings,'existUserBookings')
   console.log(nextBooking,'nextbook')

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
          text: `Check out this car: ${car.make} ${car.model}. Price: ${formatCurrencyVND(car.price.toLocaleString())}`,
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

  const getMileageProgress = () => {
    const maxMileage = 5000 // Assume max mileage for progress
    const percentage = Math.min((car.mileage / maxMileage) * 100, 100)
    return { percentage, color: percentage < 50 ? 'green' : percentage < 80 ? 'yellow' : 'red' }
  }

  const mileageInfo = getMileageProgress()
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="relative">
            <div className="absolute -top-16 left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-10 blur-xl"></div>
            <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-8 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white/20 rounded-xl">
                        <CarIcon className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="bg-white/20 border-white/30">
                        {car.featured ? 'Featured' : 'Premium'}
                      </Badge>
                    </div>
                    <CardTitle className="text-4xl font-bold mb-2">
                      {car.make} {car.model}
                    </CardTitle>
                    <CardDescription className="text-blue-100 text-lg">
                      {car.year} • {car.mileage.toLocaleString()} miles • {car.transmission}
                    </CardDescription>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-2"
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant={isWishlisted ? "secondary" : "default"}
                            size="icon"
                            className={`rounded-full h-12 w-12 shadow-lg ${
                              isWishlisted ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-white/20 hover:bg-white/30'
                            }`}
                            onClick={handleToggleSaved}
                            disabled={savingCar}
                          >
                            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current text-yellow-900' : 'text-white'}`} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {isWishlisted ? 'Remove from favorites' : 'Add to favorites'}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full h-12 w-12 bg-white/20 hover:bg-white/30 text-white shadow-lg"
                            onClick={handleShareCar}
                          >
                            <Share2 className="w-5 h-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Share this car</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </motion.div>
                </div>
                <Separator className="my-4 bg-white/20" />
                <div className="flex items-center justify-between text-blue-100">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{formatCurrencyVND(car.price)}</div>
                      <div className="text-sm opacity-90">Starting Price</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge variant="secondary" className="bg-green-500/20 border-green-500/30 text-green-100">
                        {car.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-75">Available Now</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-8">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="xl:col-span-3 space-y-8"
          >
            {/* Images & Quick Actions */}
            <Card className="overflow-hidden shadow-xl border-0 bg-white">
              <CardContent className="p-0">
                <CardImageSwipe car={car} />
                <div className="p-6 bg-gradient-to-t from-gray-50 to-transparent">
                  <div className="grid grid-cols-2 gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="hover:shadow-md transition-all duration-300 cursor-pointer border-0 bg-white">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <CurrencyIcon className="w-4 h-4 text-blue-600" />
                              <span className="text-sm font-medium text-gray-700">EMI Calculator</span>
                            </div>
                            <div className="text-xs text-gray-500">
                              Est. ${Math.round(car.price / 60).toLocaleString()} /mo
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                          <DialogTitle>EMI Calculator</DialogTitle>
                        </DialogHeader>
                        <EmiCalculator price={Number(car.price)} />
                      </DialogContent>
                    </Dialog>
                    
                    <Card className="hover:shadow-md transition-all duration-300 cursor-pointer border-0 bg-white">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-gray-700">Contact Seller</span>
                        </div>
                        <div className="text-xs text-gray-500">Get personalized offer</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Specifications */}
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800">
                  <Gauge className="w-5 h-5 text-blue-600" />
                  Key Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Price & Mileage */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">Price</span>
                      <span className="text-lg font-bold text-gray-900">{formatCurrency(car.price)}</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-500">Mileage</span>
                        <Badge variant="outline" className="text-xs">
                          {car.mileage.toLocaleString()} miles
                        </Badge>
                      </div>
                      <Progress 
                        value={mileageInfo.percentage} 
                        className="h-2"
                        indicatorClassName={`bg-${mileageInfo.color}-500`}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Low</span>
                        <span>High</span>
                      </div>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Fuel className="w-4 h-4" />
                        <span className="font-medium">{car.fuelType}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{car.seats || 'N/A'} seats</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <SpaceIcon className="w-4 h-4" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-3 h-3 bg-gray-300 rounded-full" style={{backgroundColor: car.color === 'White' ? '#f5f5f5' : car.color?.toLowerCase()}}></div>
                        <span>{car.color}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">About This Vehicle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{car.description || 'Experience luxury and performance in this meticulously maintained vehicle. Perfect for both city driving and long road trips.'}</p>
              </CardContent>
            </Card>

            {/* Test Drive Section */}
            {car.status === 'AVAILABLE' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="shadow-xl border-0 bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm mb-4">
                        <BookCheck className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-800">Ready for Test Drive</span>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="lg"
                              className="w-full max-w-md mx-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-xl py-8 rounded-2xl text-lg font-bold transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                              onClick={handleBookTestDrive}
                              disabled={car.isBookedByOther || savingCar}
                            >
                              {car.isBookedByOther ? (
                                <>
                                  <XCircle className="w-5 h-5 mr-2" />
                                  Currently Booked
                                </>
                              ) : (
                                <>
                                  <Navigation className="w-5 h-5 mr-2" />
                                  Book Test Drive Now
                                </>
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            {car.isBookedByOther ? 'Booked by another customer' : 'Schedule your test drive'}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      {nextBooking && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-4 p-4 bg-white rounded-xl shadow-sm"
                        >
                          <p className="text-sm text-gray-600">
                            <CalendarIcon className="w-4 h-4 inline mr-1" />
                            Your next test drive: {format(new Date(nextBooking.bookingDate), 'EEEE, MMMM d, yyyy')}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Dealer Info */}
            {car.dealer && (
              <Card className="shadow-lg border-0 bg-white sticky top-8">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold flex items-center gap-2 text-gray-800">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Dealership
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">{car.dealer.name}</h4>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {car.dealer.address}
                    </p>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Phone</span>
                      <a href={`tel:${car.dealer.phone}`} className="font-medium text-blue-600 hover:underline">
                        {car.dealer.phone}
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Email</span>
                      <a href={`mailto:${car.dealer.email}`} className="font-medium text-blue-600 hover:underline">
                        {car.dealer.email}
                      </a>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Quick Stats */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-800">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Body Type</span>
                    <span className="font-medium">{car.bodyType}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Year</span>
                    <span className="font-medium">{car.year}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Status</span>
                    <Badge variant={car.status === 'AVAILABLE' ? "default" : "destructive"} className="text-xs">
                      {car.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Embed */}
            {car.dealer && (
              <Card className="shadow-lg border-0 bg-white">
                <CardContent className="p-0">
                  <div className="h-64 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.google.com/maps?q=${encodeURIComponent(car.dealer.address)}&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="rounded-lg"
                      title="Dealership Location"
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {car.testDriveBookings?.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Test Drive History</h3>
                  <div className="grid gap-3">
                    {existUserBookings.slice(0, 3).map((booking, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium">{booking.user?.name || 'Customer'}</p>
                          <p className="text-xs text-gray-500">
                            {format(new Date(booking.bookingDate), 'MMM dd, yyyy')}
                          </p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {car.status !== 'AVAILABLE' && (
                <Alert variant="destructive">
                  <AlertTitle className="flex items-center gap-2">
                    <XCircle className="h-4 w-4" />
                    Vehicle Status
                  </AlertTitle>
                  <AlertDescription>
                    This vehicle is currently {car.status.toLowerCase()}. Please contact dealership for availability.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default CarDetails