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
  Loader2,
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
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
import { CarPricing } from './car-pricing'
import { cn } from '@/lib/utils'
import { is } from 'date-fns/locale'
import { formatDate24h } from '@/utils/helper-client'
import { Separator } from '@/components/ui/separator'
import { useCar } from '@/app/context/car-context'
import { displayDateTime } from '@/app/(main)/bookings/helper/handle-bookings'
import { useSmoothRouter } from '@/app/hooks/use-smooth-router'
import { Booking } from '@/types/booking'
import { currentUser } from '@/actions/user'

interface CarDetailsProps {
  car: Car | any
  testDriveInfo?: any
  upcomingBookings: any
}

const CarDetails = () => {
  const { car, testDriveInfo, upcomingBookings,user } = useCar();
  const { smoothPush, isPending } = useSmoothRouter()
  const { isSignedIn } = useAuth()
  const [isWishlisted, setIsWishlisted] = useState<boolean>(car.whishlisted || false)
  const [activeTab, setActiveTab] = useState(car.carType === 'RENT' ? 'rent' : 'sale');


  const businessType = car.carType || 'BOTH'
  const isSale = businessType === 'SALE' || businessType === 'BOTH'
  const isRent = businessType === 'RENT' || businessType === 'BOTH'

  const userTestDrive = testDriveInfo || {}
  


  const existUserBookings: TestDriveBooking[] = car?.testDriveBookings || []

  const upcomingRentalBookings: TestDriveBooking[] = upcomingBookings?.rentals || []
  console.log(upcomingRentalBookings,'up')
  console.log(user,'user')
  const userRentalBookings: TestDriveBooking[] = upcomingRentalBookings.filter((b => b.user?.id === user?.id)) || []
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
    smoothPush(`/test-drive/${car.id}`)
  }

  const getMileageProgress = () => {
    const maxMileage = 5000 // Assume max mileage for progress
    const percentage = Math.min((car.mileage / maxMileage) * 100, 100)
    return { percentage, color: percentage < 50 ? 'green' : percentage < 80 ? 'yellow' : 'red' }
  }

  const mileageInfo = getMileageProgress()

  const handleBooking = (value: string) => {
    setActiveTab(value);
    smoothPush(`/bookings/${car.id}`);
  }


  if (!user) {
    return (
      <div className="container mx-auto px-6 py-10">
        <Card className="shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 border-b">
            <CardTitle className="text-3xl font-bold flex items-center gap-3 text-gray-800">
              <CarIcon className="w-7 h-7 text-indigo-600" />
              Please Sign In to View Car Details
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    )
  }


  if (!car) {
    return (
      <div className="container mx-auto px-6 py-10">
        <Card className="shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 border-b">
            <CardTitle className="text-3xl font-bold flex items-center gap-3 text-gray-800">
              <CarIcon className="w-7 h-7 text-indigo-600" />
              Car Not Found
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    )
  }
  // if (!testDriveInfo) {
  //   return (
  //     <div className="container mx-auto px-6 py-10">
  //       <Card className="shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
  //         <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 border-b">
  //           <CardTitle className="text-3xl font-bold flex items-center gap-3 text-gray-800">
  //             <CarIcon className="w-7 h-7 text-indigo-600" />
  //             Test Drive Info Not Found
  //           </CardTitle>
  //         </CardHeader>
  //       </Card>
  //     </div>
  //   )
  // }


  return (

    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}

        <Card className="relative overflow-hidden bg-card border border-border shadow-md rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-primary to-accent p-6 text-primary-foreground">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <CarIcon className="w-6 h-6" />
                  <Badge variant="secondary" className="bg-primary-foreground/20 border-primary-foreground/30">
                    {car.featured ? 'Featured' : 'Premium'}
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold">
                  {car.make} {car.model}
                </CardTitle>
                <p className="text-primary-foreground/80">
                  {car.year} • {car.mileage.toLocaleString()} miles • {car.transmission}
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={isWishlisted ? 'secondary' : 'ghost'}
                  size="icon"
                  className={cn(
                    'rounded-full h-10 w-10 shadow-md',
                    isWishlisted
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                      : 'bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground'
                  )}
                  onClick={handleToggleSaved}
                  disabled={savingCar || isPending}
                >
                  <Heart className="w-5 h-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground shadow-md"
                  onClick={handleShareCar}
                  disabled={isPending}
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 bg-background">
            <CardImageSwipe car={car} />
          </CardContent>
        </Card>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pricing Section */}
            <Card className="shadow-md border-0 bg-card ">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground">Pricing & Availability</CardTitle>
              </CardHeader>
              <CardContent className="bg-card rounded-b-xl">
                {businessType === 'BOTH' && (
                  <div className="flex gap-2 mb-4">
                    <Button
                      variant={activeTab === 'sale' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('sale')}
                      className={cn(
                        "flex-1 font-medium transition-colors",
                        activeTab === 'sale'
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700"
                      )}
                    >
                      Purchase
                    </Button>
                    <Button
                      variant={activeTab === 'rent' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('rent')}
                      className={cn(
                        "flex-1 font-medium transition-colors",
                        activeTab === 'rent'
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700"
                      )}
                    >
                      Rental
                    </Button>
                  </div>
                )}

                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {(activeTab === 'sale' || businessType === 'SALE') && isSale && (
                    <CarPricing businessType="SALE" car={car} />
                  )}
                  {(activeTab === 'rent' || businessType === 'RENT') && isRent && (
                    <CarPricing businessType="RENT" car={car} />
                  )}
                </motion.div>

                {isSale && (
                  <Badge
                    variant="secondary"
                    className={cn(
                      "mt-4 px-3 py-1 text-xs font-semibold rounded-md border",
                      car.status === "AVAILABLE"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-rose-50 text-rose-700 border-rose-200"
                    )}
                    aria-label={`Car status: ${car.saleInfo?.status}`}
                  >
                    {car.saleInfo.status === "AVAILABLE" ? "Available" : "Unavailable"}
                  </Badge>
                )}

              </CardContent>

            </Card>

            {/* Booking Section */}
            <Card className="shadow-md border-0 bg-card">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {isSale && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full h-auto bg-accent hover:bg-accent/90 text-primary-foreground flex flex-col cursor-pointer"
                          disabled={car.isBookedByOther || car.status !== 'AVAILABLE' || !userTestDrive.canBook || isPending}
                          aria-label="Book a test drive"
                        >
                          <div className='flex'>
                            <Navigation className="w-5 h-5 mr-2" />
                            Book Test Drive (1 Hour) {userTestDrive.count}/{userTestDrive.max} {isPending && <Loader2 className="h-4 w-4 ml-2 animate-spin" />}
                          </div>

                          <p className='text-sm text-primary-foreground italic'>{userTestDrive.canBook ? `Can book ${userTestDrive.max - userTestDrive.count} more test drives.` : "You have reached your booking limit."}</p>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Book Test Drive</DialogTitle>
                        </DialogHeader>
                        <p className="text-sm text-primary-foreground">Schedule a 1-hour test drive for this vehicle.</p>
                        <Button onClick={() => handleBooking('test-drive')} className="bg-bg-cma hover:bg-cma/90"
                          disabled={isPending}
                        >
                          Confirm Test Drive {isPending && <Loader2 className="h-4 w-4 ml-2 animate-spin" />}
                        </Button>
                      </DialogContent>
                    </Dialog>
                  )}
                  {isRent && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full bg-accent-foreground hover:bg-accent-foreground/90 text-accent flex items-center justify-center"
                          disabled={car.status !== 'AVAILABLE' || isPending}
                          aria-label="Book a rental"
                        >
                          <BookCheck className="w-5 h-5 mr-2" />
                          Book Rental
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                          <DialogTitle>Book Rental</DialogTitle>
                        </DialogHeader>
                        <p className="text-sm text-gray-600">Choose rental duration (hourly or daily).</p>
                        <Button 
                          onClick={() => handleBooking('rental')} 
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          disabled={isPending}
                          >
                          Confirm Rental {isPending && <Loader2 className="h-4 w-4 ml-2 animate-spin" />}
                        </Button>
                      </DialogContent>
                    </Dialog>
                  )}
                  {isSale && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full" aria-label="Calculate EMI">
                          <CurrencyIcon className="w-5 h-5 mr-2" />
                          EMI Calculator
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>EMI Calculator</DialogTitle>
                        </DialogHeader>
                        <EmiCalculator price={Number(car.price)} />
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
                {nextBooking && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <CalendarIcon className="w-4 h-4 inline mr-1" />
                      Next booking: {format(new Date(nextBooking.bookingDate), 'EEEE, MMMM d, yyyy')}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="shadow-md border-0 bg-card text-card-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <Gauge className="w-5 h-5 " />
                  Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium ">Mileage</span>
                    <Badge variant="outline">{car.mileage.toLocaleString()} miles</Badge>
                  </div>
                  <Progress
                    value={mileageInfo.percentage}
                    className="h-2"
                    indicatorClassName={`bg-${mileageInfo.color}-500`}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 ">
                    <Fuel className="w-4 h-4" />
                    <span>{car.fuelType}</span>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Users className="w-4 h-4" />
                    <span>{car.seats || 'N/A'} seats</span>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <SpaceIcon className="w-4 h-4" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: car.color?.toLowerCase() }}></div>
                    <span>{car.color}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="shadow-md border-0 bg-card text-card-foreground">
              <CardHeader>
                <CardTitle className="text-xl font-bold ">About This Vehicle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/70">{car.description || 'No description available.'}</p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {car.dealer && (
              <Card className="shadow-md border-0 bg-card text-card-foreground sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-bold ">
                    <MapPin className="w-5 h-5 " />
                    Dealership
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent">{car.dealer.name}</h4>
                    <p className="text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {car.dealer.address}
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-accent-foreground">Phone</span>
                      <a href={`tel:${car.dealer.phone}`} className="text-secondary-foreground hover:underline">{car.dealer.phone}</a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-accent-foreground">Email</span>
                      <a href={`mailto:${car.dealer.email}`} className="text-secondary-foreground hover:underline">{car.dealer.email}</a>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Get Directions</Button>
                </CardContent>
              </Card>
            )}
            <Card className="shadow-md border-0 bg-card text-card-foreground sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Bussiness Type</span>
                  <span className="font-medium">
                    {businessType === 'BOTH' ? 'Sale & Rent' : businessType === 'SALE' ? 'Sale' : 'Rent'}
                  </span>
                </div>
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
                  <Badge variant={car.status === 'AVAILABLE' ? 'default' : 'destructive'}>{car.status}</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Color</span>
                  <span className="font-medium">{car.color}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Fuel Type</span>
                  <span className="font-medium">{car.fuelType}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Transmission</span>
                  <span className="font-medium">{car.transmission}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Mileage</span>
                  <span className="font-medium">{car.mileage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Seats</span>
                  <span className="font-medium">{car.seats || 'N/A'}</span>
                </div>

              </CardContent>
            </Card>
            {isSale && car.status === 'AVAILABLE' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="shadow-xl border-0 bg-gradient-to-r bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Schedule a Test Drive</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    {userTestDrive.bookings && userTestDrive.bookings.length > 0 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="  flex flex-col gap-4"
                      >
                         { userTestDrive.bookings.map((book: any, i: number) => (
                          <p key={i} className="text-md text-black-600">
                            <CalendarIcon className="w-4 h-4 inline mr-1" />
                            Test drive on: {format(new Date(book.bookingDate), 'EEEE, MMMM d, yyyy')}
                          </p>
                        ))}

                        <Separator className="w-full   py-[2px] text-red-900" />
                        <p className="text-sm text-red-600">
                          <CalendarIcon className="w-4 h-4 inline mr-1" />
                          Your next test drive: {displayDateTime(userTestDrive.bookings[0].startTime)} - {displayDateTime(userTestDrive.bookings[0].endTime)}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm mb-4">
                          <BookCheck className="w-5 h-5 text-bg-cma/50" />
                          <span className="font-semibold text-green-800">You haven't booked a test drive yet</span>
                        </div>

                      </div>
                    )}

                    <div className="text-center">

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
            {userRentalBookings.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="shadow-xl border-0 bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Schedule a Test Drive</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    { userRentalBookings.length > 0 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="  flex flex-col gap-4"
                      >
                        {userRentalBookings.map((book: any, i: number) => (
                          <p key={i} className="text-md text-black-600">
                            <CalendarIcon className="w-4 h-4 inline mr-1" />
                            Test drive on: {format(new Date(book.bookingDate), 'EEEE, MMMM d, yyyy')}
                          </p>
                        ))}

                        <Separator className="w-full   py-[2px] text-red-900" />
                        <p className="text-sm text-red-600">
                          <CalendarIcon className="w-4 h-4 inline mr-1" />
                          Next test drive: {displayDateTime(new Date(userRentalBookings[0].startTime))} - {displayDateTime(new Date(userRentalBookings[0].endTime))}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm mb-4">
                          <BookCheck className="w-5 h-5 text-bg-cma/50" />
                          <span className="font-semibold text-green-800">You haven't booked a test drive yet</span>
                        </div>

                      </div>
                    )}

                    <div className="text-center">

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
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetails