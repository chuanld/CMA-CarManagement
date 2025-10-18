'use client'
import React, { useEffect, useState } from 'react'
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
import { TestDriveBooking } from '@/types/user'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { WorkingHour } from '@prisma/client'
import { Dealer } from '@/types/dealer'
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
    upcomingBookings?: TestDriveBooking[]
}

const testDriveSchema = z.object({
    date: z
        .date()
        .refine((val) => !isNaN(val.getTime()), { message: 'Please select a valid date' }),
    timeSlot: z.string().trim().min(1, { message: 'Please select a time slot' }),
    notes: z.string().max(500, { message: 'Maximum 500 characters' }).optional(),
})

const BookingDetails = ({ car, dealer, historyBookings, upcomingBookings }: TestDriveFormProps) => {
    const router = useRouter()
    const [selectedTab, setSelectedTab] = useState('schedule')

    const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([])
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false)
    const [bookingDetails, setBookingDetails] = useState<{
        date: string
        timeSlot: string
        notes?: string
    } | null>(null)

    const { control, register, handleSubmit, formState: { errors, isValid }, watch, setValue, reset } = useForm<
        z.infer<typeof testDriveSchema>
    >({
        resolver: zodResolver(testDriveSchema),
        defaultValues: {
            date: undefined,
            timeSlot: '',
            notes: '',
        },
    })

    const dealerShip: DealershipInfo | any = dealer
    const logBookings: TestDriveBooking[] = historyBookings || []

    const selectedDate: Date | undefined = watch('date')


    const isDayDisabled = (date: Date) => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        date.setHours(0, 0, 0, 0)
        if (date < today) return true

        const dayOfWeek = format(date, 'EEEE').toUpperCase()
        const daySchedule = dealerShip?.workingHours?.find((schedule: WorkingHour) => schedule.dayOfWeek === dayOfWeek)
        return !daySchedule || !daySchedule.isOpen
    }


    useEffect(() => {
        if (!selectedDate || !dealerShip?.workingHours) {
            setAvailableTimeSlots([])
            setValue('timeSlot', '')
            return
        }

        const selectedDayOfWeek = format(selectedDate, 'EEEE').toUpperCase()
        const daySchedule = dealerShip.workingHours.find((schedule: WorkingHour) => schedule.dayOfWeek === selectedDayOfWeek)
        console.log(daySchedule, 'daySchedule')
        if (!daySchedule || !daySchedule.isOpen) {
            setAvailableTimeSlots([])
            setValue('timeSlot', '')
            return
        }

        const openHour = Math.floor(Number(daySchedule.openTime) / 100); // 900 -> 9
        const closeHour = Math.floor(Number(daySchedule.closeTime) / 100);
        const slots: TimeSlot[] = []

        for (let hour = openHour; hour < closeHour; hour++) {
            const startTime = `${hour.toString().padStart(2, '0')}:00`
            const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`
            const isBooked = upcomingBookings?.some((booking) => {
                const bookingDate = format(new Date(booking.bookingDate), 'yyyy-MM-dd')
                if (bookingDate !== format(selectedDate, 'yyyy-MM-dd')) return false

                const bookingStart = parseInt(booking.startTime.replace(':', ''))
                const bookingEnd = parseInt(booking.endTime.replace(':', ''))
                const slotStart = parseInt(startTime.replace(':', ''))
                const slotEnd = parseInt(endTime.replace(':', ''))

                return !(slotEnd <= bookingStart || slotStart >= bookingEnd)
            })

            slots.push({
                id: `${startTime}-${endTime}`,
                label: `${startTime} - ${endTime}`,
                startTime,
                endTime,
                available: !isBooked
            })
        }

        setAvailableTimeSlots(slots)
        setValue('timeSlot', '')
    }, [selectedDate, car])

    const { data: bookingResult, error: bookingError, loading: bookingInProcess, fetchData: fnBookTestDrive } =
        useFetch<ApiResponse<TestDriveBooking>>(bookTestDrive)

    useEffect(() => {
        if (bookingResult?.success) {
            setBookingDetails({
                date: format(new Date(bookingResult.data.bookingDate), 'EEEE, MMMM d, yyyy'),
                timeSlot: `${format(parseISO(`2023-01-01T${bookingResult.data.startTime}`), 'h:mm a')} - ${format(
                    parseISO(`2023-01-01T${bookingResult.data.endTime}`),
                    'h:mm a'
                )}`,
                notes: bookingResult.data.notes,
            })
            setShowConfirmation(true)
            toast.success('Test drive booked successfully!')
            reset()
        }
    }, [bookingResult])

    useEffect(() => {
        if (bookingError) {
            toast.error(bookingError.message || 'An error occurred while booking the test drive.')
        }
    }, [bookingError])

    const onSubmit = async (data: z.infer<typeof testDriveSchema>) => {
        const selectedSlot = availableTimeSlots.find((slot) => slot.id === data.timeSlot)
        if (!selectedSlot) {
            toast.error('Selected time slot is no longer available. Please choose another slot.')
            return
        }

        const bookingDateLocal = new Date(data.date);
        bookingDateLocal.setHours(12,0,0,0);

        await fnBookTestDrive({
            carId: car.id,
            // bookingDate: format(data.date, 'yyyy-MM-dd'),
            bookingDate: bookingDateLocal.toISOString(),
            startTime: selectedSlot.startTime,
            endTime: selectedSlot.endTime,
            notes: data.notes || '',
        })
    }

    const handleCloseConfirmation = () => {
        setShowConfirmation(false)
        router.push(`/cars/${car.id}`)
    }
    const getAvailabilityProgress = () => {
        const totalSlots = availableTimeSlots.length
        console.log(availableTimeSlots)
        const availableSlots = availableTimeSlots.filter(slot => slot.available).length
        return totalSlots > 0 ? Math.round((availableSlots / totalSlots) * 100) : 0
    }

    console.log(availableTimeSlots, 'ava')

    return (
        <div className="min-h-screen  py-8">
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
                            className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
                            onClick={() => router.back()}
                            aria-label="Go back to car details"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            Back to Car Details
                        </Button>
                        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <CarIcon className="h-6 w-6 text-blue-600" />
                            Book Test Drive
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            {/* Car Information */}
                            <Card className="shadow-lg border border-gray-100 rounded-2xl overflow-hidden">
                                <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 p-4">
                                    <CardTitle className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                                        <CarIcon className="h-7 w-7 text-blue-600" />
                                        {car.year} {car.make} {car.model}
                                    </CardTitle>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <Badge className="bg-bg-cma border-white-600">Test Drive Ready</Badge>
                                                </div>
                                            </div>
                                            <Badge variant="secondary" className="bg-gray-300 text-black text-sm">
                                                {formatCurrencyVND(car.price)}
                                            </Badge>
                                        </div>

                                        <CardDescription className="opacity-90">
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
                                                <CarIcon className="w-24 h-24 text-gray-300" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-color-cma/20 to-transparent rounded-xl" />
                                    </div>
                                    <div className="text-lg font-semibold text-green-600 mb-4">
                                        {formatCurrencyVND(car.price)}
                                    </div>

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
                                                <item.icon className="w-5 h-5 mx-auto mb-2 text-gray-600" />
                                                <div className="font-medium text-gray-800">{item.label}</div>
                                                {/* <div className="text-xs text-gray-500">{item.value}</div> */}
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
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
                            <Card className="shadow-lg border border-gray-100 rounded-2xl">
                                <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 p-4">
                                    <CardTitle className="text-xl font-bold text-gray-800">Schedule Your Test Drive</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                                        <TabsList className="grid w-full grid-cols-2 bg-gray-50 rounded-2xl p-1">
                                            <TabsTrigger value="schedule" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                                Schedule
                                            </TabsTrigger>
                                            <TabsTrigger value="details" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                                Details
                                            </TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="schedule" className="mt-6">
                                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                                {/* Date Selection */}
                                                <div className="space-y-3">
                                                    <Label className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                                                        <CalendarIcon className="w-5 h-5 text-bg-cma" />
                                                        Choose Date
                                                    </Label>
                                                    <Controller
                                                        name="date"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <Button
                                                                        variant="outline"
                                                                        className={`w-full justify-start text-left font-normal h-14 rounded-2xl border-gray-200 hover:bg-gray-50 ${!field.value && 'text-gray-500'}`}
                                                                    >
                                                                        <CalendarIcon className="mr-3 h-5 w-5 text-bg-cma" />
                                                                        {field.value ? format(field.value, 'PPP') : 'Pick a date'}
                                                                    </Button>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-auto p-0" align="start">
                                                                    <Calendar
                                                                        mode="single"
                                                                        selected={field.value}
                                                                        onSelect={field.onChange}
                                                                        disabled={isDayDisabled}
                                                                        className="rounded-2xl border-0"
                                                                    />
                                                                </PopoverContent>
                                                            </Popover>
                                                        )}
                                                    />
                                                    {errors.date && (
                                                        <p className="text-sm text-red-600 flex items-center gap-2">
                                                            <ClockIcon className="w-4 h-4" />
                                                            {errors.date.message}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Time Slots */}
                                                <div className="space-y-3">
                                                    <div className="flex items-center justify-between">
                                                        <Label className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                                                            <Clock className="w-5 h-5 text-bg-cma" />
                                                            Available Times
                                                        </Label>
                                                        {selectedDate && (
                                                            <div className="flex items-center gap-2 text-sm">
                                                                <Progress value={getAvailabilityProgress()} className="w-24 h-2" indicatorClassName="bg-green-500" />
                                                                <span className="text-gray-600">{getAvailabilityProgress()}% available</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <Controller
                                                        name="timeSlot"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <Select onValueChange={field.onChange} value={field.value} disabled={!selectedDate || availableTimeSlots.length === 0}>
                                                                <SelectTrigger className="w-full h-14 rounded-2xl border-gray-200">
                                                                    <SelectValue placeholder={
                                                                        !selectedDate ? "Select date first" :
                                                                            availableTimeSlots.length === 0 ? "No slots available" :
                                                                                "Choose time slot"
                                                                    } />
                                                                </SelectTrigger>
                                                                <SelectContent className="rounded-2xl max-h-60">
                                                                    {availableTimeSlots.map((slot) => (
                                                                        <SelectItem
                                                                            key={slot.id}
                                                                            value={slot.id}
                                                                            className={`py-4 ${!slot.available ? 'text-gray-400 bg-gray-50' : ''}`}
                                                                            disabled={!slot.available}
                                                                        >
                                                                            <div className="flex items-center justify-between">
                                                                                <span>{slot.label}</span>
                                                                                {!slot.available && <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">Booked</span>}
                                                                            </div>
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                        )}
                                                    />
                                                    {errors.timeSlot && (
                                                        <p className="text-sm text-red-600">{errors.timeSlot.message}</p>
                                                    )}
                                                </div>

                                                {/* Notes */}
                                                <div className="space-y-3">
                                                    <Label className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                                                        <MessageSquare className="w-5 h-5 text-bg-cma" />
                                                        Special Requests
                                                    </Label>
                                                    <Textarea
                                                        {...register('notes')}
                                                        placeholder="Any specific routes you'd like to test? Special requirements? Let us know!"
                                                        className="min-h-[120px] rounded-2xl border-gray-200 focus:ring-emerald-500 resize-none"
                                                    />
                                                    {errors.notes && <p className="text-sm text-red-600">{errors.notes.message}</p>}
                                                </div>

                                                <Button
                                                    type="submit"
                                                    size="lg"
                                                    className="w-full h-14 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-2xl text-lg font-semibold shadow-xl disabled:opacity-50"
                                                    disabled={bookingInProcess || !isValid}
                                                >
                                                    {bookingInProcess ? (
                                                        <>
                                                            <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                                                            Securing Your Slot...
                                                        </>
                                                    ) : (
                                                        'Confirm Booking'
                                                    )}
                                                </Button>
                                            </form>
                                        </TabsContent>

                                        <TabsContent value="details" className="mt-6">
                                            <div className="space-y-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl">
                                                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800">What to Expect</h4>
                                                        <p>30-45 minute guided test drive with expert</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                                                    <Download className="w-5 h-5 text-blue-600" />
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800">Requirements</h4>
                                                        <p>Valid driver's license • Minimum 21 years old</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                                                    <ClockIcon className="w-5 h-5 text-purple-600" />
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800">Cancellation</h4>
                                                        <p>Free cancellation up to 24 hours before</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
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
                            <Card className="shadow-lg border border-gray-100 rounded-2xl overflow-hidden">
                                <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 p-4">
                                    <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-blue-600" />
                                        Dealership Details
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-3 text-gray-600 text-sm">
                                    <p className="font-semibold text-gray-800 flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-blue-600" />
                                        {dealerShip?.name || 'N/A'}
                                    </p>
                                    <p className="pl-6">{dealerShip?.address || 'N/A'}</p>
                                    <p className="flex items-center gap-2 pl-6">
                                        <Phone className="h-4 w-4 text-blue-600" />
                                        {dealerShip?.phone || 'N/A'}
                                    </p>
                                    <p className="flex items-center gap-2 pl-6">
                                        <Mail className="h-4 w-4 text-blue-600" />
                                        {dealerShip?.email || 'N/A'}
                                    </p>
                                    {dealerShip?.website && (
                                        <p className="flex items-center gap-2 pl-6">
                                            <Globe className="h-4 w-4 text-blue-600" />
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
                            <Card className="shadow-lg border border-gray-100 rounded-2xl overflow-hidden">
                                <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 p-4">
                                    <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                        <CalendarIcon className="h-5 w-5 text-blue-600" />
                                        Your Existing Bookings
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    {logBookings && logBookings.length > 0 ? (
                                        <ul className="space-y-4 text-sm text-gray-600">
                                            {logBookings.map((booking, index) => (
                                                <li key={index} className="border-b pb-3">
                                                    <p className="font-semibold text-gray-800">
                                                        {format(new Date(booking.bookingDate), 'MMMM d, yyyy')}
                                                    </p>
                                                    <p>
                                                        Time: {format(parseISO(`2023-01-01T${booking.startTime}`), 'h:mm a')} - {format(parseISO(`2023-01-01T${booking.endTime}`), 'h:mm a')}
                                                    </p>
                                                    {booking.notes && <p className="text-gray-500 italic">Notes: {booking.notes}</p>}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-center text-gray-500">No existing bookings. Schedule one now!</p>
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
                                            <DialogTitle className="flex items-center gap-2 text-xl font-bold text-gray-800">
                                                <CheckCircle2 className="h-6 w-6 text-green-600" />
                                                Test Drive Booked Successfully
                                            </DialogTitle>
                                            <DialogDescription className="text-gray-600 mt-2">
                                                Your test drive has been confirmed. Here's a summary:
                                            </DialogDescription>
                                        </DialogHeader>

                                        {bookingDetails && (
                                            <div className="py-4 space-y-3 text-gray-700 text-sm">
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