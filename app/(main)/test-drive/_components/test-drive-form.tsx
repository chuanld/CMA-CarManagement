"use client"
import { bookTestDrive } from '@/actions/test-drive'
import useFetch from '@/app/hooks/use-fetch'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ApiResponse } from '@/types/api'
import { Car } from '@/types/car'
import { DealershipInfo } from '@/types/settings'
import { TestDriveBooking } from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { format, parseISO } from 'date-fns'
import { CalendarIcon, Car as CarIcon, CheckCircle2, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

type Props = {
  car: Car,
  testDriverInfo?: {
    dealerShip: DealershipInfo,
    userTestDrives: TestDriveBooking[] | []
  }
}

type TimeSlot = {
  id: string;
  label: string;
  startTime: string;
  endTime: string;
}

const testDriveSchema = z.object({
  date: z.coerce
    .date()
    .refine((val) => !isNaN(val.getTime()), { message: "Please select a valid date" }),
  timeSlot: z.string().trim().min(1, { message: "Please select a time slot" }),
  notes: z.string().max(500, { message: "Maximum 500 characters" }).optional(),
})
const TestDriveForm = ({ car, testDriverInfo }: Props) => {

  const router = useRouter();
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [bookingDetails, setBookingDetails] = useState<{
    date: string;
    timeSlot: string;
    notes?: string;
  } | null>(null);


  const { control, register, handleSubmit, formState: { errors, isValid }, watch, setValue, reset } = useForm({
    resolver: zodResolver(testDriveSchema),
    defaultValues: {
      date: undefined,
      timeSlot: undefined,
      notes: ''
    }
  })

  const dealerShip: DealershipInfo | undefined = testDriverInfo?.dealerShip;
  const existingBookings: TestDriveBooking[] = testDriverInfo?.userTestDrives || [];
  const selectedDate: Date | unknown = watch('date');


  const isPastDate = (d: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)  // reset giờ phút giây
    d.setHours(0, 0, 0, 0)
    return d < today
  }

  const isDayDisabled = (date: any) => {
    const today = new Date();
    console.log(date, today);

    const isPast = new Date(date).setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)
    if (isPast) return true

    const dayOfWeek = format(date as Date, 'EEEE').toUpperCase();
    const daySchedule = dealerShip?.workingHours?.find((schedule) => schedule.dayOfWeek === dayOfWeek);

    return !daySchedule || !daySchedule.isOpen;
  }

  useEffect(() => {
    if (!selectedDate || !dealerShip?.workingHours) return

    const selectedDayOfWeek = format(selectedDate as Date, 'EEEE').toUpperCase();
    const daySchedule = dealerShip.workingHours.find((schedule) => schedule.dayOfWeek === selectedDayOfWeek);

    if (!daySchedule || !daySchedule.isOpen) {
      setAvailableTimeSlots([]);
      return;
    }

    const openHour = parseInt(daySchedule.openTime.split(':')[0]);
    const closeHour = parseInt(daySchedule.closeTime.split(':')[0]);

    const slots: TimeSlot[] = [];
    for (let hour = openHour; hour < closeHour; hour++) {
      const startTime = `${hour.toString().padStart(2, "0")}:00`;
      const endTime = `${(hour + 1).toString().padStart(2, "0")}:00`;

      const isBooked = existingBookings.some((booking: any) => {
        const bookingDate = booking.bookingDate;
        return (
          bookingDate === format(selectedDate as Date, 'yyyy-MM-dd') &&
          (booking.startTime === startTime || booking.endTime === endTime)
        )
      });

      if (!isBooked) {
        slots.push({
          id: `${startTime} - ${endTime}`,
          label: `${startTime} - ${endTime}`,
          startTime,
          endTime
        })
      }
    }

    setAvailableTimeSlots(slots);
    setValue('timeSlot', "") // reset selected time slot
  }, [selectedDate])


  //Book test drive
  const {
    data: bookingResult,
    error: bookingError,
    loading: bookingInProcess,
    fetchData: fnBookTestDrive
  } = useFetch<ApiResponse<TestDriveBooking>>(bookTestDrive)
  useEffect(() => {
    if (bookingResult && bookingResult?.success) {
      setBookingDetails({
        date: format(bookingResult?.data?.bookingDate as Date, "EEEE, MMMM d, yyyy"),
        timeSlot: `${format(
          parseISO(`2022-01-01T${bookingResult?.data?.startTime}`), "h:mm a"
        )} - ${format(parseISO(`2022-01-01T${bookingResult?.data?.endTime}`), "h:mm a"
        )}`,
        notes: bookingResult?.data?.notes
      })
      setShowConfirmation(true);
      toast.success("Test drive booked successfully!");

      // Reset form
      reset();
    }
  }, [bookingResult]);

  useEffect(() => {
    if (bookingError) {
      toast.error(bookingError?.message || "An error occurred while booking the test drive. Please try again.");
    }
  }, [bookingError]);

  const onSubmit = async (data: z.infer<typeof testDriveSchema>) => {
    // return console.log(data, "submitting")
    const selectedSlot = availableTimeSlots.find(slot => slot.id === data.timeSlot);

    if (!selectedSlot) {
      return toast.error("Selected time slot is no longer available. Please choose another slot.");
    }

    await fnBookTestDrive({
      carId: car.id,
      bookingDate: format(data.date, 'yyyy-MM-dd'),
      startTime: selectedSlot.startTime,
      endTime: selectedSlot.endTime,
      notes: data.notes || ""
    });

    setBookingDetails({
      date: data.date.toDateString(),
      timeSlot: data.timeSlot,
      notes: data.notes
    });
    setShowConfirmation(true);
  }

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    router.push(`/cars/${car.id}`);  // Redirect to car details page
  }



  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      <div className='md:col-span-2'>
        <Card>
          <CardContent>
            <h2 className='text-xl font-bold mb-4'>Test Drive Form</h2>

            <div className='aspect-video rounded-lg overflow-hidden relative mb-4'>
              {car.images && car.images.length > 0 ? (
                <img
                  src={car.images[0]}
                  alt={car.make + ' ' + car.model}
                  className="w-full h-full object-cover rounded-lg "
                />
              ) : (
                <div className='w-full h-full flex items-center justify-center bg-gray-100'>
                  <CarIcon className="w-full h-64 text-gray-300" />
                </div>
              )}
            </div>
            <h3>
              {car.year} {car.make} {car.model} - ${car.price.toLocaleString()}
            </h3>

            <div className="mt-2 text-xl font-bold text-blue-600">
              ${car.price.toLocaleString()}
            </div>

            <div className='mt-4 text-sm text-gray-500'>
              <div className="flex">
                <span>Mileage</span>
                <span className="font-medium">
                  {car.mileage.toLocaleString()} miles
                </span>
              </div>
              <div className="flex">
                <span>Fuel Type</span>
                <span className="font-medium">{car.fuelType}</span>
              </div>

              <div className="flex">
                <span>Transmission</span>
                <span className="font-medium">{car.transmission}</span>
              </div>

              <div className="flex">
                <span>Body Type</span>
                <span className="font-medium">{car.bodyType}</span>
              </div>

              <div className="flex">
                <span>Color</span>
                <span className="font-medium">{car.color}</span>
              </div>


            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2>Dealership Information</h2>
            <div className='text-sm font-bold mb-4'>
              <p className="font-medium">{dealerShip?.name || "N/A"}</p>
              <p>{dealerShip?.address || "N/A"}</p>
              <p>Phone: {dealerShip?.phone || "N/A"}</p>
              <p>Email: {dealerShip?.email || "N/A"}</p>
            </div>
          </CardContent>
        </Card>

        <div>
          <Card>
            <CardContent>
              <h2 className="text-xl">Schedule Test Drive</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="date" className="block mb-1 font-medium">
                    Select Date
                  </Label>
                  <Controller name="date" control={control} render={({ field }: { field: any }) => {
                    return (
                      <div>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-between" >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? format(field.value as Date, "PPP") : "Select Date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode='single'
                              selected={field.value}
                              onSelect={field.onChange}

                              disabled={isDayDisabled}
                            />
                          </PopoverContent>
                        </Popover>
                        {errors.date && <p className="text-sm text-red-600 mt-1">{errors.date.message}</p>}
                      </div>
                    )
                  }} />
                </div>

                <div>
                  <Label htmlFor="timeSlot" className="block mb-1 font-medium">
                    Select Time
                  </Label>
                  <Controller name="timeSlot" control={control} render={({ field }: { field: any }) => {
                    return (
                      <div>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          disabled={!selectedDate || availableTimeSlots.length === 0}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue
                              placeholder={!selectedDate ? "Select date first" : availableTimeSlots.length === 0 ? "No available time slots" : "Select Time Slot"}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {availableTimeSlots.map((slot: TimeSlot) => (
                              <SelectItem key={slot.id} value={slot.id}>
                                {slot.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.timeSlot && <p className="text-sm text-red-600 mt-1">{errors.timeSlot.message}</p>}
                      </div>
                    )
                  }} />
                </div>
                {/* Notes Section */}
                <div className='space-y-2'>
                  <Label htmlFor="notes" className="block mb-1 font-medium">Notes (Optional)</Label>
                  <Controller name="notes" control={control} render={({ field }: { field: any }) => {
                    return (
                      <Textarea
                        {...field}
                        placeholder="Enter any additional notes here..."
                        className='min-h-24'
                      />
                    )
                  }} />
                </div>
                <Button type="submit"
                  className='w-full mt-4'
                  disabled={bookingInProcess}
                >
                  {bookingInProcess ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    "Book Test Drive"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
            {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Test Drive Booked Successfully
            </DialogTitle>
            <DialogDescription>
              Your test drive has been confirmed with the following details:
            </DialogDescription>
          </DialogHeader>

          {bookingDetails && (
            <div className="py-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Car:</span>
                  <span>
                    {car.year} {car.make} {car.model}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Date:</span>
                  <span>{bookingDetails.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Time Slot:</span>
                  <span>{bookingDetails.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dealership:</span>
                  <span>{dealerShip?.name || "CMA Motors"}</span>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 p-3 rounded text-sm text-blue-700">
                Please arrive 10 minutes early with your driver's license.
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <Button onClick={handleCloseConfirmation}>Done</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default TestDriveForm