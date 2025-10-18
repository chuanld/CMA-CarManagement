

'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bookTestDrive } from '@/actions/test-drive'
import useFetch from '@/app/hooks/use-fetch'
import { 
  Button 
} from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog'
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { 
  ArrowLeft, 
  CalendarIcon, 
  Car as CarIcon, 
  CheckCircle2, 
  Clock, 
  ClockIcon, 
  DollarSign, 
  Download, 
  Globe, 
  Loader2, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Navigation2, 
  Phone, 
  ShieldCheck, 
  UserCheck 
} from 'lucide-react'
import { format, parseISO } from 'date-fns'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { formatCurrency } from '@/lib/helper'
import { TestDriveBooking } from '@/types/user'
import { DealershipInfo } from '@/types/settings'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Car } from '@/types/car'
import { ApiResponse } from '@/types/api'

interface TimeSlot {
  id: string
  label: string
  startTime: string
  endTime: string
  available: boolean
}

interface TestDriveFormProps {
  car: Car
  testDriverInfo?: {
    dealerShip: DealershipInfo
    userTestDrives: TestDriveBooking[]
  }
}

const testDriveSchema = z.object({
  date: z
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: 'Please select a valid date' }),
  timeSlot: z.string().trim().min(1, { message: 'Please select a time slot' }),
  notes: z.string().max(500, { message: 'Maximum 500 characters' }).optional(),
})

const TestDriveForm = ({ car, testDriverInfo }: TestDriveFormProps) => {
  const router = useRouter()
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([])
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false)
  const [bookingDetails, setBookingDetails] = useState<any>(null)
  const [selectedTab, setSelectedTab] = useState('schedule')

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

  const dealerShip: DealershipInfo | undefined = testDriverInfo?.dealerShip
  const existingBookings: TestDriveBooking[] = testDriverInfo?.userTestDrives || []
  const selectedDate: Date | undefined = watch('date')

  const { data: bookingResult, error: bookingError, loading: bookingInProcess, fetchData: fnBookTestDrive } =
    useFetch<ApiResponse<any>>(bookTestDrive)

  const isDayDisabled = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    date.setHours(0, 0, 0, 0)
    if (date < today) return true

    const dayOfWeek = format(date, 'EEEE').toUpperCase()
    const daySchedule = dealerShip?.workingHours?.find((schedule) => schedule.dayOfWeek === dayOfWeek)
    return !daySchedule || !daySchedule.isOpen
  }

  useEffect(() => {
    if (!selectedDate || !dealerShip?.workingHours) {
      setAvailableTimeSlots([])
      setValue('timeSlot', '')
      return
    }

    const selectedDayOfWeek = format(selectedDate, 'EEEE').toUpperCase()
    const daySchedule = dealerShip.workingHours.find((schedule) => schedule.dayOfWeek === selectedDayOfWeek)

    if (!daySchedule || !daySchedule.isOpen) {
      setAvailableTimeSlots([])
      setValue('timeSlot', '')
      return
    }

    const openHour = parseInt(daySchedule.openTime.split(':')[0])
    const closeHour = parseInt(daySchedule.closeTime.split(':')[0])
    const slots: TimeSlot[] = []

    for (let hour = openHour; hour < closeHour; hour++) {
      const startTime = `${hour.toString().padStart(2, '0')}:00`
      const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`
      const isBooked = existingBookings.some((booking) => {
        const bookingDate = format(new Date(booking.bookingDate), 'yyyy-MM-dd')
        return (
          bookingDate === format(selectedDate, 'yyyy-MM-dd') &&
          (booking.startTime === startTime || booking.endTime === endTime)
        )
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
  }, [selectedDate])

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
    if (!selectedSlot || !selectedSlot.available) {
      toast.error('Selected time slot is no longer available. Please choose another slot.')
      return
    }

    await fnBookTestDrive({
      carId: car.id,
      bookingDate: format(data.date, 'yyyy-MM-dd'),
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
    const availableSlots = availableTimeSlots.filter(slot => slot.available).length
    return totalSlots > 0 ? Math.round((availableSlots / totalSlots) * 100) : 0
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Car
            </Button>
            <div className="text-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Book Test Drive
              </h1>
              <p className="text-gray-600 mt-1">Schedule your hands-on experience</p>
            </div>
            <div className="w-12" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content */}
          <motion.div className="xl:col-span-3 space-y-8">
            {/* Car Hero Card */}
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-emerald-600 via-green-600 to-blue-600 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-2xl">
                        <CarIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <Badge className="bg-white/20 border-white/30">Test Drive Ready</Badge>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/20">
                      {formatCurrency(car.price)}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold mb-2">
                    {car.year} {car.make} {car.model}
                  </CardTitle>
                  <CardDescription className="opacity-90">
                    Experience premium driving performance
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  {car.images && car.images.length > 0 ? (
                    <motion.img
                      src={car.images[0]}
                      alt={`${car.make} ${car.model}`}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <CarIcon className="w-24 h-24 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
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
                      <div className="text-xs text-gray-500">{item.value}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold flex items-center gap-3 text-gray-800">
                  <CalendarIcon className="w-6 h-6 text-emerald-600" />
                  Schedule Your Test Drive
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Select your preferred date and time. We'll confirm availability instantly.
                </CardDescription>
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
                          <CalendarIcon className="w-5 h-5 text-emerald-600" />
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
                                  <CalendarIcon className="mr-3 h-5 w-5 text-emerald-600" />
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
                            <Clock className="w-5 h-5 text-emerald-600" />
                            Available Times
                          </Label>
                          {selectedDate && (
                            <div className="flex items-center gap-2 text-sm">
                              <Progress value={getAvailabilityProgress()} className="w-24 h-2" indicatorClassName="bg-emerald-600" />
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
                          <MessageSquare className="w-5 h-5 text-emerald-600" />
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
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 xl:sticky xl:top-8"
          >
            {/* Dealership Card */}
            {dealerShip && (
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5" />
                    {dealerShip.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2 text-sm">
                    <p className="flex items-start gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 mt-0.5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-600">{dealerShip.address}</span>
                    </p>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <a href={`tel:${dealerShip.phone}`} className="text-blue-600 hover:underline font-medium">
                        {dealerShip.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-emerald-600" />
                      <a href={`mailto:${dealerShip.email}`} className="text-blue-600 hover:underline font-medium">
                        {dealerShip.email}
                      </a>
                    </div>
                    {dealerShip.website && (
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-emerald-600" />
                        <a href={dealerShip.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 border-emerald-200 hover:bg-emerald-50">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Existing Bookings */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                  <CalendarIcon className="w-5 h-5" />
                  Your Bookings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {existingBookings.length > 0 ? (
                  <div className="space-y-3 p-4">
                    {existingBookings.slice(0, 3).map((booking, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-800">
                            {format(new Date(booking.bookingDate), 'MMM dd, yyyy')}
                          </span>
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        </div>
                        <p className="text-sm text-gray-600">
                          {format(parseISO(`2023-01-01T${booking.startTime}`), 'h:mm a')} -{' '}
                          {format(parseISO(`2023-01-01T${booking.endTime}`), 'h:mm a')}
                        </p>
                        {booking.notes && (
                          <p className="text-xs text-gray-500 mt-1 italic">{booking.notes}</p>
                        )}
                      </motion.div>
                    ))}
                    {existingBookings.length > 3 && (
                      <Button variant="ghost" size="sm" className="w-full text-emerald-600">
                        View All Bookings
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CalendarIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No bookings yet</p>
                    <p className="text-sm text-gray-400">Book your first test drive!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Confirmation Dialog */}
        <AnimatePresence>
          {showConfirmation && bookingDetails && (
            <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
              <DialogContent className="sm:max-w-2xl rounded-3xl shadow-2xl bg-white">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-2xl">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <DialogTitle className="text-2xl font-bold text-gray-800">
                          Booking Confirmed!
                        </DialogTitle>
                        <DialogDescription className="text-gray-600">
                          Your test drive is secured. Get ready for an amazing drive!
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <span className="text-gray-500">Vehicle</span>
                        <span className="font-semibold">{car.year} {car.make} {car.model}</span>
                      </div>
                      <div className="space-y-2">
                        <span className="text-gray-500">Date & Time</span>
                        <span className="font-semibold">{bookingDetails.date} • {bookingDetails.timeSlot}</span>
                      </div>
                      <div className="space-y-2">
                        <span className="text-gray-500">Location</span>
                        <span className="font-semibold">{dealerShip?.name}</span>
                      </div>
                      <div className="space-y-2 col-span-2">
                        <span className="text-gray-500">Notes</span>
                        <span className="font-medium text-gray-700">{bookingDetails.notes || 'None'}</span>
                      </div>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-2xl">
                      <h4 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5" />
                        Before You Go
                      </h4>
                      <ul className="space-y-2 text-sm text-emerald-700">
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5">•</span>
                          Arrive 15 minutes early with valid driver's license
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5">•</span>
                          Wear comfortable shoes and clothing
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5">•</span>
                          Contact us if you need to reschedule
                        </li>
                      </ul>
                    </div>
                  </div>

                  <DialogFooter className="gap-3">
                    <Button
                      variant="outline"
                      onClick={handleCloseConfirmation}
                      className="flex-1"
                    >
                      Back to Car
                    </Button>
                    <Button
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      onClick={handleCloseConfirmation}
                    >
                      View My Bookings
                    </Button>
                  </DialogFooter>
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TestDriveForm