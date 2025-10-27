'use client'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { format } from 'date-fns'
import { bookTestDrive } from '@/actions/test-drive'
import { CardContent } from '@/components/ui/card'
import { CalendarIcon, Clock, ClockIcon, Loader2, MessageSquare } from 'lucide-react'
import { TabsContent } from '@/components/ui/tabs'
import { WorkingHour } from '@/types/settings'
import { Progress } from '@/components/ui/progress'
import { Booking } from '@/types/booking'


interface TimeSlot {
    id: string
    label: string
    startTime: string
    endTime: string
    available?: boolean
}

const testDriveSchema = z.object({
    date: z
        .date()
        .refine((val) => !isNaN(val.getTime()), { message: 'Please select a valid date' }),
    timeSlot: z.string().trim().min(1, { message: 'Please select a time slot' }),
    notes: z.string().max(500, { message: 'Maximum 500 characters' }).optional(),
})

type TestDriveFormProps = {
    dealerShip: any,
    car: any,
    userTestDrives: any,
    bookingInProcess: boolean,
    upcomingBookings: Booking[] | any[],
    onSubmitForm?: (data: any, mode: string) => any,
}
export function TestDriveForm({ dealerShip, userTestDrives, bookingInProcess, upcomingBookings, onSubmitForm }: TestDriveFormProps) {


    const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([])
    const [openedDate, setOpenedDate] = useState<Boolean>(false)



    const { control, register, handleSubmit, formState: { errors, isValid }, watch, setValue, reset } = useForm<z.infer<typeof testDriveSchema>>({
        resolver: zodResolver(testDriveSchema),
        defaultValues: {
            date: undefined,
            timeSlot: '',
            notes: '',
        },
    })

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
    function getMinutesFromDateOrString(input: string | Date) {
        const d = typeof input === "string" ? new Date(input) : input;
        if (isNaN(d.getTime())) return NaN;

        const h = d.getUTCHours();
        const m = d.getUTCMinutes();
        return h * 60 + m;
    }



    useEffect(() => {
        console.log(selectedDate, 'sss')
        if (!selectedDate || !dealerShip?.workingHours) {
            setAvailableTimeSlots([]);
            setValue('timeSlot', '');
            return;
        }

        const selectedDayOfWeek = format(selectedDate, 'EEEE').toUpperCase();
        const daySchedule = dealerShip.workingHours.find(
            (s: any) => s.dayOfWeek === selectedDayOfWeek
        );

        if (!daySchedule || !daySchedule.isOpen) {
            setAvailableTimeSlots([]);
            setValue('timeSlot', '');
            return;
        }

        const openHour = Math.floor(daySchedule.openTime / 100);
        const closeHour = Math.floor(daySchedule.closeTime / 100);

        const slots: TimeSlot[] = [];
        const selectedDateStr = format(selectedDate, 'yyyy-MM-dd');

        for (let hour = openHour; hour < closeHour; hour++) {
            const startTime = `${hour.toString().padStart(2, '0')}:00`;
            const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`;

            const slotStartMinutes = hour * 60;
            const slotEndMinutes = (hour + 1) * 60;

            const isBooked = (upcomingBookings || []).some((booking) => {
                const bookingDate = format(new Date(booking.bookingDate), 'yyyy-MM-dd');
                if (bookingDate !== selectedDateStr) return false;

                const bookingStart = getMinutesFromDateOrString(booking.startTime);
                const bookingEnd = getMinutesFromDateOrString(booking.endTime);

                return !(slotEndMinutes <= bookingStart || slotStartMinutes >= bookingEnd);
            });

            slots.push({
                id: `${startTime}-${endTime}`,
                label: `${startTime} - ${endTime}`,
                startTime,
                endTime,
                available: !isBooked,
            });
        }


        setAvailableTimeSlots(slots);
        setValue('timeSlot', '');
    }, [selectedDate, dealerShip, upcomingBookings]);



    const onSubmit = async (data: z.infer<typeof testDriveSchema>) => {
        const selectedSlot = availableTimeSlots.find((slot) => slot.id === data.timeSlot)
        if (!selectedSlot) {
            toast.error('Selected time slot is no longer available. Please choose another slot.')
            return
        }

        const bookingDate = new Date(data.date).toLocaleDateString('sv-SE');

        const startTime = new Date(`${bookingDate}T${selectedSlot.startTime}:00`).toISOString();
        const endTime = new Date(`${bookingDate}T${selectedSlot.endTime}:00`).toISOString();

        const payload: any = {
            bookingType: 'TEST_DRIVE',
            bookingDate: bookingDate,
            startTime: startTime,
            endTime: endTime,
            notes: data.notes || '',
        }
        const mode = "TEST_DRIVE"

        onSubmitForm && onSubmitForm(payload, mode)

    }

    const getAvailabilityProgress = () => {
        const totalSlots = availableTimeSlots.length
        const availableSlots = availableTimeSlots.filter(slot => slot.available).length
        return totalSlots > 0 ? Math.round((availableSlots / totalSlots) * 100) : 0
    }


    return (
        <TabsContent value="schedule-test-drive" className="mt-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Date Selection */}
                <div className="space-y-3">
                    <Label className="text-lg font-semibold flex items-center gap-2 ">
                        <CalendarIcon className="w-5 h-5 text-accent2" />
                        Choose Date
                    </Label>
                    <Controller
                        name="date"
                        control={control}
                        render={({ field }) => (
                            <Popover open={!!openedDate} onOpenChange={setOpenedDate}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={`w-full justify-start text-left font-normal h-14 rounded-2xl hover:bg-muted/10 ${!field.value && 'text-gray-500'} disabled:opacity-50 disabled:cursor-not-allowed`}
                                        disabled={!userTestDrives.canBook}
                                    >
                                        <CalendarIcon className="mr-3 h-5 w-5 text-accent2" />
                                        {field.value ? format(field.value, 'PPP') : 'Pick a date'}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 bg-card" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={(date) => {
                                            field.onChange(date);
                                            setOpenedDate(false);
                                        }}
                                        disabled={isDayDisabled || !userTestDrives.canBook}
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
                        <Label className="text-lg font-semibold flex items-center gap-2 ">
                            <Clock className="w-5 h-5 text-accent2" />
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
                            <Select onValueChange={field.onChange} value={field.value} disabled={!selectedDate || availableTimeSlots.length === 0 || !userTestDrives.canBook}>
                                <SelectTrigger className="w-full h-14 rounded-2xl border-gray-200">
                                    <SelectValue placeholder={
                                        !selectedDate ? "Select date first" :
                                            availableTimeSlots.length === 0 ? "No slots available" :
                                                "Choose time slot"
                                    } />
                                </SelectTrigger>
                                <SelectContent className="rounded-2xl max-h-60 bg-card">
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
                    <Label className="text-lg font-semibold flex items-center gap-2 ">
                        <MessageSquare className="w-5 h-5 text-accent2" />
                        Special Requests
                    </Label>
                    <Textarea
                        {...register('notes')}
                        placeholder="Any specific routes you'd like to test? Special requirements? Let us know!"
                        className="min-h-[120px] rounded-2xl border-gray-200 focus:ring-emerald-500 resize-none"
                    />
                    {errors.notes && <p className="text-sm text-destructive">{errors.notes.message}</p>}
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-gradient-to-l from-accent2/70 to-primary hover:to-accent/80 hover:from-accent2/80 text-accent2-foreground rounded-2xl text-lg font-semibold shadow-xl disabled:opacity-50"
                    disabled={bookingInProcess || !isValid || !userTestDrives.canBook}
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
                {!userTestDrives.canBook && (
                    <p className="text-sm text-destructive text-center">
                        You have reached the maximum number of test drives allowed. Please contact the dealership for further assistance.
                    </p>
                )}
            </form>
        </TabsContent>

    )
}
