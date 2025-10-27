'use client'
import React, { use, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bookTestDrive } from '@/actions/test-drive'
import useFetch from '@/app/hooks/use-fetch'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ApiResponse } from '@/types/api'
import { Car } from '@/types/car'
import { DealershipInfo } from '@/types/settings'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@/components/ui/label'
import { format, parseISO } from 'date-fns'
import { ArrowLeft, CalendarIcon, Car as CarIcon, CheckCircle2, Clock, ClockIcon, Download, Globe, Loader2, Mail, MapPin, MessageSquare, Navigation2, Phone, ShieldCheck, UserCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { formatCurrencyVND } from '@/lib/helper'
import { TestDriveBooking, User } from '@/types/user'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { WorkingHour } from '@prisma/client'
import { Dealer } from '@/types/dealer'
import { Booking } from '@/types/booking'
import { createBooking } from '@/actions/bookings'
import { formatDate24h } from '@/utils/helper-client'
import { TestDriveForm } from './test-drive'
import { RentForm } from './rental'
import { displayDateTime } from '../helper/handle-bookings'
import { useSmoothRouter } from '@/app/hooks/use-smooth-router'
import { useCurrentUser } from '@/app/hooks/use-current-user'
interface TimeSlot {
    id: string
    label: string
    startTime: string
    endTime: string
    available?: boolean
}

interface TestDriveFormProps {
    car: Car
    dealer?: Dealer
    historyBookings?: TestDriveBooking[]
    upcomingBookings?: Booking[]
    testDriveInfo?: any
}



const BookingDetails = ({ car, dealer, upcomingBookings, testDriveInfo }: TestDriveFormProps) => {
    const router = useRouter()
    const { smoothPush,isPending } = useSmoothRouter()
    const { user } = useCurrentUser()
    

    const [selectedTab, setSelectedTab] = useState('details')

    const [showConfirmation, setShowConfirmation] = useState<boolean>(false)
    const [bookingDetails, setBookingDetails] = useState<{
        type: string
        date: string
        rentType?: string
        timeSlot: string
        notes?: string
    } | null>(null)



    //Clarify bussiness type
    const businessType = car?.carType || 'BOTH'
    const isSale = businessType === 'SALE' || businessType === 'BOTH'
    const isRent = businessType === 'RENT' || businessType === 'BOTH'

    const dealerShip: DealershipInfo | any = dealer


    //temporary upcoming bookings
    const userTestDrives = testDriveInfo || {}
    const logBookings: Booking[] = upcomingBookings || []
    console.log(testDriveInfo,'ts')

    //logBookings current user
    const currentUserBookings = logBookings.filter((b) => b.userId === user?.id);


    const { data: bookingResult, error: bookingError, loading: bookingInProcess, fetchData: fnBookTestDrive } =
        useFetch<ApiResponse<any>>(createBooking)

    useEffect(() => {
        if (bookingResult?.success) {
            if(bookingResult.data && bookingResult.data.bookingType === 'RENTAL'){
                setBookingDetails({
                type: bookingResult.data.bookingType,
                rentType: bookingResult.data.rentalType,
                date: format(new Date(bookingResult.data.bookingDate), 'EEEE, MMMM d, yyyy'),
                timeSlot: `${format(new Date(bookingResult.data.bookingDate), 'dd/MM/yyyy')} | ${displayDateTime(bookingResult.data.startTime)} - ${displayDateTime(bookingResult.data.endTime)}`,
                notes: bookingResult.data.notes,
            })
                setShowConfirmation(true)
                toast.success('Car rental booked successfully!')
                return
            }
            setBookingDetails({ 
                type: bookingResult.data.bookingType,
                date: format(new Date(bookingResult.data.bookingDate), 'EEEE, MMMM d, yyyy'),
                timeSlot: `${format(new Date(bookingResult.data.bookingDate), 'dd/MM/yyyy')} | ${displayDateTime(bookingResult.data.startTime)} - ${displayDateTime(bookingResult.data.endTime)}`,
                notes: bookingResult.data.notes,
            })
            setShowConfirmation(true)
            toast.success('Test drive booked successfully!')

        }
    }, [bookingResult])

    useEffect(() => {
        if (bookingError) {
            console.log(bookingError)
            toast.error(bookingError?.message || 'An error occurred while booking the test drive.')
        }
    }, [bookingError])



    const handleCloseConfirmation = () => {
        setShowConfirmation(false)
        smoothPush(`/cars/${car.id}`)
    }

    const handleBookTestDrive = async (value: any, type: string) => {
        if (type === 'RENTAL') { 
            const newData = {
                ...value,
                carId: car.id as string,
            }
            console.log(newData,'data rent')
            await fnBookTestDrive(newData)
        }
        else if (type === 'TEST_DRIVE') {
            const newData = {
                ...value,
                carId: car.id as string,
            }
            console.log(newData,type)
            await fnBookTestDrive(newData)
        }

    }



    return (
        <div className="min-h-screen  py-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="container mx-auto px-4 sm:px-6 py-8 max-w-7xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center justify-between mb-6">
                        <Button
                            variant="ghost"
                            className="  flex items-center gap-2"
                            onClick={() => router.back()}
                            aria-label="Go back to car details"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            Back to Car Details
                        </Button>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <CarIcon className="h-6 w-6 text-accent2" />
                            Book Test Drive
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            {/* Car Information */}
                            <Card className="shadow-lg border border-gray-100 rounded-2xl overflow-hidden">
                                <CardHeader className="bg-gradient-to-l from-primary to-accent p-4">
                                    <CardTitle className="text-3xl font-bold  flex items-center gap-2">
                                        <CarIcon className="h-7 w-7 text-blue-600" />
                                        {car.year} {car.make} {car.model}
                                    </CardTitle>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    {userTestDrives.canBook ? (

                                                        <Badge className="bg-bg-cma border-white-600">{
                                                            isSale ? "Test Drive Available" : "Rental Available"
                                                        }</Badge>

                                                    ) : (
                                                        <Badge className="bg-red-100 text-red-600">Test Drive Used: {userTestDrives.count}/{userTestDrives.max}. Contact for deal</Badge>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-2 flex-col'>
                                                {
                                                    isSale && (
                                                        <Badge variant="secondary" className="bg-badge-isSale/80 text-foreground-isSale text-sm">
                                                            {formatCurrencyVND(car.saleInfo?.price || 0)}
                                                        </Badge>
                                                    )
                                                }
                                                {isRent && (
                                                    <>
                                                        <Badge variant="secondary" className="bg-badge-isRent/50 text-foreground-isRent text-sm">
                                                            {formatCurrencyVND(car.rentInfo?.dailyPrice || 0)} / day
                                                        </Badge>
                                                        <Badge variant="secondary" className="bg-badge-isRent/50 text-foreground-isRent text-sm">
                                                            {formatCurrencyVND(car.rentInfo?.hourlyPrice || 0)} / hour
                                                        </Badge>
                                                    </>
                                                )}
                                            </div>


                                        </div>

                                        <CardDescription className="opacity-90 text-primary-foreground flex items-center gap-2">
                                            Experience premium driving performance
                                        </CardDescription>
                                        <div className="w-12"></div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="relative mb-4 rounded-xl overflow-hidden flex items-center justify-center ">
                                        {car.images && car.images.length > 0 ? (
                                            <motion.img
                                                src={car.images[0]}
                                                alt={`${car.make} ${car.model}`}
                                                className="w-auto h-48 object-fit rounded-xl"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        ) : (
                                            <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-xl">
                                                <CarIcon className="w-24 h-24" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-color-cma/20 to-transparent rounded-xl" />
                                    </div>
                                    {isSale && (
                                        <div className="text-lg font-semibold text-green-600 mb-2">
                                            {formatCurrencyVND(car.price)}
                                        </div>
                                    )}
                                    {isRent && (
                                        <div className="">
                                            <div className="flex items-center gap-4 mb-2">
                                                {car.rentInfo && car.rentInfo.dailyPrice && (
                                                    <div className="text-md font-semibold ">
                                                        {formatCurrencyVND(car.rentInfo?.dailyPrice)} / day
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-4">
                                                {car.rentInfo?.hourlyPrice && (
                                                    <div className="text-sm font-semibold ">
                                                        {formatCurrencyVND(car.rentInfo?.hourlyPrice)} / hour
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    )}


                                    <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm">
                                        {[
                                            { icon: ClockIcon, label: `${car.mileage.toLocaleString()} miles`, value: 'Mileage' },
                                            { icon: Navigation2, label: car.transmission, value: 'Transmission' },
                                            { icon: ShieldCheck, label: car.fuelType, value: 'Fuel Type' },
                                            { icon: UserCheck, label: `${car.seats || 'N/A'} seats`, value: 'Capacity' },
                                            { icon: MapPin, label: car.bodyType, value: 'Body' }
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="text-center p-3 bg-gray-50/50 rounded-xl"
                                            >
                                                <item.icon className="w-5 h-5 mx-auto mb-2 " />
                                                <div className="font-medium ">{item.label}</div>
                                                {/* <div className="text-xs text-gray-500">{item.value}</div> */}
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-sm ">
                                        <div>
                                            <span className="font-medium">Mileage:</span>{' '}
                                            {car.mileage.toLocaleString()} miles
                                        </div>
                                        <div>
                                            <span className="font-medium">Fuel Type:</span> {car.fuelType}
                                        </div>
                                        <div>
                                            <span className="font-medium">Transmission:</span> {car.transmission}
                                        </div>
                                        <div>
                                            <span className="font-medium">Body Type:</span> {car.bodyType}
                                        </div>
                                        <div>
                                            <span className="font-medium">Color:</span> {car.color}
                                        </div>
                                        {car.seats && (
                                            <div>
                                                <span className="font-medium">Seats:</span> {car.seats}
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Schedule Test Drive Form */}
                            <Card className="shadow-lg border bg-card rounded-2xl">
                                <CardHeader className="bg-gradient-to-l from-primary to-accent p-4 text-foreground">
                                    {businessType === 'SALE' && (
                                        <CardTitle className="text-xl font-bold">Schedule Your Test Drive</CardTitle>

                                    )}
                                    {businessType === 'RENT' && (
                                        <CardTitle className="text-xl font-bold ">Schedule Your Rent</CardTitle>

                                    )}
                                    {businessType === 'BOTH' && (
                                        <CardTitle className="text-xl font-bold ">Schedule Your Test Drive or Rent</CardTitle>

                                    )}
                                </CardHeader>
                                <CardContent>
                                    <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                                        <TabsList className="grid w-full grid-cols-3 bg-gray-50 rounded-2xl p-1">
                                            {isSale && (
                                                <TabsTrigger value="schedule-test-drive" className="rounded-xl data-[state=active]:bg-accent/80 data-[state=active]:shadow-sm">
                                                    TestDrive Schedule
                                                </TabsTrigger>
                                            )}
                                            {isRent && (
                                                <TabsTrigger value="schedule-rent" className="rounded-xl data-[state=active]:bg-accent/80 data-[state=active]:shadow-sm">
                                                    Rent Schedule
                                                </TabsTrigger>
                                            )}


                                            <TabsTrigger value="details" className="rounded-xl data-[state=active]:bg-accent/80 data-[state=active]:shadow-sm">
                                                Details
                                            </TabsTrigger>
                                        </TabsList>

                                        <TestDriveForm
                                            onSubmitForm={handleBookTestDrive}
                                            car={car}
                                            userTestDrives={userTestDrives}
                                            bookingInProcess={bookingInProcess || isPending}
                                            upcomingBookings={upcomingBookings as Booking[]}
                                            dealerShip={dealerShip}
                                        />

                                        <RentForm
                                            car={car}
                                            dealerShip={dealerShip}
                                            bookingInProcess={bookingInProcess || isPending}
                                            onSubmitForm={handleBookTestDrive} // hoặc createBooking riêng cho rental
                                        />




                                        <TabsContent value="details" className="mt-6">
                                            <div className="space-y-4 text-sm ">
                                                <div className="flex items-center gap-3 p-4 rounded-xl">
                                                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                                    <div>
                                                        <h4 className="font-semibold">What to Expect</h4>
                                                        <p>30-45 minute guided test drive with expert</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 p-4 rounded-xl">
                                                    <Download className="w-5 h-5 text-blue-600" />
                                                    <div>
                                                        <h4 className="font-semibold ">Requirements</h4>
                                                        <p>Valid driver's license • Minimum 21 years old</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 p-4  rounded-xl">
                                                    <ClockIcon className="w-5 h-5 text-purple-600" />
                                                    <div>
                                                        <h4 className="font-semibold ">Cancellation</h4>
                                                        <p>Free cancellation up to 24 hours before</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </Tabs>

                                    {/* <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                                        <TabsList>
                                            <TabsTrigger value="test-drive">Test Drive</TabsTrigger>
                                            <TabsTrigger value="rent">Rent</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="test-drive">
                                            <TestDriveForm
                                                carId={car.id}
                                                availableTimeSlots={availableTimeSlots}
                                                onSuccess={() => setShowConfirmation(true)}
                                            />
                                        </TabsContent>

                                        <TabsContent value="rent">
                                            <RentForm carId={car.id} availableTimeSlots={availableTimeSlots} />
                                        </TabsContent>
                                    </Tabs> */}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar: Dealership and Existing Bookings */}
                        <motion.div
                            className="space-y-6 lg:col-span-1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            {/* Dealership Details */}
                            <Card className="shadow-lg   rounded-2xl overflow-hidden">
                                <CardHeader className="bg-gradient-to-l from-primary to-accent p-4">
                                    <CardTitle className="text-lg font-bold  flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-info" />
                                        Dealership Details
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-3  text-sm">
                                    <p className="font-semibold  flex items-center gap-2 text-accent">
                                        <MapPin className="h-4 w-4 text-primary-foreground" />
                                        {dealerShip?.name || 'N/A'}
                                    </p>
                                    <p className="pl-6">{dealerShip?.address || 'N/A'}</p>
                                    <p className="flex items-center gap-2 pl-6">
                                        <Phone className="h-4 w-4 " />
                                        {dealerShip?.phone || 'N/A'}
                                    </p>
                                    <p className="flex items-center gap-2 pl-6">
                                        <Mail className="h-4 w-4 " />
                                        {dealerShip?.email || 'N/A'}
                                    </p>
                                    {dealerShip?.website && (
                                        <p className="flex items-center gap-2 pl-6">
                                            <Globe className="h-4 w-4 " />
                                            <a
                                                href={dealerShip.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                {dealerShip.website}
                                            </a>
                                        </p>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Existing Bookings */}
                            <Card className="shadow-lg  rounded-2xl overflow-hidden">
                                <CardHeader className="bg-gradient-to-l from-primary to-accent text-primary-foreground p-4">
                                    <CardTitle className="text-lg font-bold  flex items-center gap-2">
                                        <CalendarIcon className="h-5 w-5 text-blue-600" />
                                        Your Existing Bookings
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    {logBookings && logBookings.length > 0 ? (
                                        <ul className="space-y-4 text-sm ">
                                            {logBookings.filter((b)=>b.userId === user?.id).map((booking, index) => (
                                                <li key={index} className="border-b pb-3">
                                                    <p className="font-semibold ">
                                                        Depart: {format(new Date(booking.bookingDate), 'MMMM d, yyyy')}
                                                    </p>
                                                    <div className='flex items-baseline justify-start gap-2 my-2'>
                                                        <p>Schedule:</p>

                                                        <div className='flex flex-col gap-2'>
                                                            <p>Start: {displayDateTime(booking.startTime)}</p>
                                                            <p>End: {displayDateTime(booking.endTime)}</p>

                                                        </div>

                                                    </div>
                                                   
                                                    {booking.notes && <p className="italic">Notes: {booking.notes}</p>}
                                                    {booking.bookingType === 'RENTAL' && (
                                                        <>
                                                        <p>
                                                            Booking Type: Rental (following {booking?.rentalType})
                                                        </p>
                                                       
                                                        </>
                                                        
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-center">No existing bookings. Schedule one now!</p>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Confirmation Dialog */}
                    <AnimatePresence>
                        {showConfirmation && (
                            <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                                <DialogContent className="sm:max-w-md rounded-2xl shadow-xl">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <DialogHeader>
                                            <DialogTitle className="flex items-center gap-2 text-xl font-bold ">
                                                <CheckCircle2 className="h-6 w-6 text-green-600" />
                                                Test Drive Booked Successfully
                                            </DialogTitle>
                                            <DialogDescription className=" mt-2">
                                                Your test drive has been confirmed. Here's a summary:
                                            </DialogDescription>
                                        </DialogHeader>

                                        {bookingDetails && (
                                            <div className="py-4 space-y-3  text-sm">
                                                <div className="flex justify-between">
                                                    <span className="font-semibold">Car Model:</span>
                                                    <span>
                                                        {car.year} {car.make} {car.model}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="font-semibold">Date:</span>
                                                    <span>{bookingDetails.date}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="font-semibold">Time Slot:</span>
                                                    <span>{bookingDetails.timeSlot}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="font-semibold">Dealership:</span>
                                                    <span>{dealerShip?.name || 'CMA Motors'}</span>
                                                </div>
                                                {bookingDetails.notes && (
                                                    <div className="flex flex-col">
                                                        <span className="font-semibold">Notes:</span>
                                                        <span className="text-gray-600">{bookingDetails.notes}</span>
                                                    </div>
                                                )}
                                                <Separator className="my-4" />
                                                <div className="mt-2 bg-blue-50 p-4 rounded-lg text-sm text-blue-700 flex flex-col gap-2">
                                                    <p className="font-semibold">Important Reminders:</p>
                                                    <ul className="list-disc ml-4 space-y-1">
                                                        <li>Arrive 10 minutes early with your driver's license.</li>
                                                        <li>Contact the dealership if you need to reschedule.</li>
                                                        <li>Enjoy your test drive!</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex justify-end mt-4">
                                            <Tooltip.Provider>
                                                <Tooltip.Root>
                                                    <Tooltip.Trigger asChild>
                                                        <Button
                                                            onClick={handleCloseConfirmation}
                                                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-6 text-base font-semibold transition-transform duration-200 hover:scale-105"
                                                            aria-label="Close confirmation and return to car details"
                                                        >
                                                            Got It!
                                                        </Button>
                                                    </Tooltip.Trigger>
                                                    <Tooltip.Content className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20">
                                                        Return to car details
                                                        <Tooltip.Arrow className="fill-gray-900" />
                                                    </Tooltip.Content>
                                                </Tooltip.Root>
                                            </Tooltip.Provider>
                                        </div>
                                    </motion.div>
                                </DialogContent>
                            </Dialog>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}

export default BookingDetails



/*

{}

*/