'use client'
import React, { use, useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { format, differenceInHours, differenceInDays, addHours, addDays, set } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import { TabsContent } from '@/components/ui/tabs'
import { CalendarIcon, Clock, Loader2, MessageSquare, DollarSign, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'
import { formatCurrencyVND } from '@/lib/helper'
import useFetch from '@/app/hooks/use-fetch'
import { getBookedSlots } from '@/actions/bookings'
import { ApiResponse } from '@/types/api'
import { displayDateTime } from '../helper/handle-bookings'

/* ✅ Schema đã sửa - Hỗ trợ flexible 24h cho hourly, >=1 day cho daily */
const rentSchema = z.object({
  rentalType: z.enum(['hourly', 'daily']),
  startAt: z.string().datetime(),
  endAt: z.string().datetime(),
  notes: z.string().max(500).optional(),
}).refine((data) => new Date(data.endAt) > new Date(data.startAt), {
  message: 'End time must be after start time',
  path: ['endAt'],
}).refine((data) => {
  const start = new Date(data.startAt)
  const end = new Date(data.endAt)
  const totalHours = differenceInHours(end, start)

  if (data.rentalType === 'hourly') {
    return totalHours > 0 && totalHours <= 24
  }
  if (data.rentalType === 'daily') {
    return differenceInDays(end, start) >= 1
  }
  return false
}, {
  message: 'Invalid rental duration for selected type',
  path: ['endAt'],
})

type RentFormProps = {
  car: any
  dealerShip: any
  bookingInProcess: boolean
  onSubmitForm?: (payload: any, mode: string) => any

}

export function RentForm({ car, dealerShip, bookingInProcess, onSubmitForm, }: RentFormProps) {
  const [totalPrice, setTotalPrice] = useState(0)
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [bookedSlots, setBookedSlots] = useState<any[]>([])

  const { control, register, handleSubmit, watch, setValue, formState: { errors } } =
    useForm<z.infer<typeof rentSchema>>({
      resolver: zodResolver(rentSchema),
      defaultValues: {
        rentalType: 'daily',
        startAt: new Date().toISOString(),
        endAt: addDays(new Date(), 1).toISOString(), 
      },
    })



  const rentalType = watch('rentalType')
  const startAt = watch('startAt')
  const endAt = watch('endAt')

  const {
    data: bookedSlotsData,
    loading: loadingBookedSlots,
    fetchData: fnBookedSlots,
    error: errorBookedSlots
  } = useFetch<ApiResponse<any>>(getBookedSlots)

  console.log(bookedSlots, 'nboookSlots')


  useEffect(() => {
    if (!car?.id) return
    fnBookedSlots({
      carId: car.id,
      days: 30
    })
  }, [car?.id])

  useEffect(() => {
    if (bookedSlotsData && bookedSlotsData?.success) {
      setBookedSlots(bookedSlotsData.data || [])
    }
  }, [bookedSlotsData])


  useEffect(() => {
    if (!car?.rentInfo || !startAt || !endAt) {
      setTotalPrice(0)
      return
    }

    const start = new Date(startAt)
    const end = new Date(endAt)
    let total = 0

    if (rentalType === 'daily') {
      const days = Math.max(1, differenceInDays(end, start))
      const hours = differenceInHours(end, start) % 24
      if (hours > 0) {

        let oddHours = hours / 24
        let roundedHours = Math.round(oddHours * 1000) / 1000
        total = days * (car.rentInfo.dailyPrice || 0) + roundedHours * (car.rentInfo.dailyPrice || 0)
      } else {
        total = days * (car.rentInfo.dailyPrice || 0)
      }
    } else {
      const hours = Math.max(1, differenceInHours(end, start))
      total = hours * (car.rentInfo.hourlyPrice || 0)
    }

    setTotalPrice(total)
  }, [rentalType, startAt, endAt, car])

  useEffect(() => {
    if (!startAt) return

    const start = new Date(startAt)
    let defaultEnd: Date

    if (rentalType === 'hourly') {
      defaultEnd = addHours(start, 2) 
    } else {
      defaultEnd = addDays(start, 1) 
    }

    setValue('endAt', defaultEnd.toISOString())
  }, [rentalType, startAt, setValue])

  const isDateBooked = (date: Date) => {
    return bookedSlots.some(slot => {
      const slotStart = new Date(slot.startTime)
      const slotEnd = new Date(slot.endTime)
      return date >= slotStart && date <= slotEnd
    })
  }

  const isTimeOverlaps = (dateTime: Date) => {
    return bookedSlots.some(slot => {
      const slotStart = new Date(slot.startTime)
      const slotEnd = new Date(slot.endTime)
      return dateTime >= slotStart && dateTime < slotEnd
    })
  }


  const renderDateTimePicker = (name: 'startAt' | 'endAt', label: string) => (
    <Controller
      name={name}
      control={control}

      //About rules rent: 
      // - hourly: max 24h from start time
      // - daily: min 1 day
      // - Available serveral 90 days from now
      render={({ field }) => {
        const current = field.value ? new Date(field.value) : null
        let maxDate: Date
        if (name === 'startAt') {
          maxDate = addDays(new Date(), 90)
        } else {
          const startDate = watch('startAt') ? new Date(watch('startAt')) : new Date()
          if (rentalType === 'hourly') {
            maxDate = addHours(startDate, 24)
          } else {
            maxDate = addDays(startDate, 30)
          }
        }

        return (
          <div className="flex flex-col w-full gap-2">
            {/* Date Picker */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-12 justify-start rounded-xl border-gray-200"
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-accent" />
                  {current ? format(current, 'PPP') : label}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-card">
                <Calendar
                  mode="single"
                  selected={current ?? undefined}
                  onSelect={(date) => {
                    if (!date) return
                    const base = current && !isNaN(current.getTime()) ? new Date(current) : new Date()
       
                    let withTime: Date
                    if (name === 'startAt') {
                      withTime = new Date(date)
                      withTime.setHours(9, 0, 0, 0)  
                    } else {
                      withTime = new Date(date)
                      withTime.setHours(base.getHours() || 9, base.getMinutes() || 0, 0, 0)
                    }

                    // Validate max date
                    if (withTime > maxDate) {
                      toast.warning(
                        rentalType === 'hourly'
                          ? 'Hourly rental cannot exceed 24 hours from start time'
                          : 'Maximum rental period is 30 days'
                      )
                      return
                    }
    

                    field.onChange(withTime.toISOString())
                  }}
                  disabled={(date) => {
                    if (date < new Date()) return true
                    if (date > maxDate) return true
                    return isDateBooked(date)
                    // return false
                  }}
                />
              </PopoverContent>
            </Popover>

            {/* Time Picker */}
            <Select
              onValueChange={(time) => {
                const [h, m] = time.split(':').map(Number)
                const base = current && !isNaN(current.getTime()) ? new Date(current) : new Date()
                const updated = new Date(base)
                updated.setHours(h, m, 0, 0)

                // Validate total duration
                if (name === 'endAt' && startAt) {
                  const start = new Date(startAt)
                  const totalHours = differenceInHours(updated, start)

                  if (rentalType === 'hourly' && totalHours > 24) {
                    toast.warning('Hourly rental cannot exceed 24 hours')
                    return
                  }
                }

                if (!isNaN(updated.getTime())) {
                  field.onChange(updated.toISOString())
                }
              }}
              value={current ? format(current, 'HH:mm') : undefined}
            >
              <SelectTrigger className="w-full h-12 rounded-xl border-gray-200">
                <SelectValue placeholder={`${label} time`} />
              </SelectTrigger>
              <SelectContent className="rounded-2xl max-h-64 bg-card overflow-y-auto">
                {Array.from({ length: 24 }).map((_, i) => {
                  const time = `${i.toString().padStart(2, '0')}:00`
                  const timeDate = new Date(current || new Date())
                  timeDate.setHours(i, 0, 0, 0)

                  let disabled = false
                  let reason = ''

                  // 1. Past time
                  if (timeDate < new Date()) {
                    disabled = true
                    reason = 'Past'
                  }

                  // Disable invalid times
                  if (name === 'endAt' && startAt && rentalType === 'hourly') {
                    const start = new Date(startAt)
                    const totalHours = differenceInHours(timeDate, start)
                    if (totalHours > 24) return null
                  }

                  if (isTimeOverlaps(timeDate)) {
                    disabled = true
                    reason = 'Booked'
                  }

                  if (disabled) {
                    return (
                      <SelectItem key={i} value={time} disabled className="text-gray-400">
                        <span className="flex items-center gap-2">
                          {time}
                          <span className="text-xs bg-red-100 text-red-700 px-1 py-0.5 rounded">
                            {reason}
                          </span>
                        </span>
                      </SelectItem>
                    )
                  }


                  return (
                    <SelectItem key={i} value={time}>
                      {time}
                    </SelectItem>
                  )
                })}
              </SelectContent>

            </Select>

            {/* Error message */}
            {errors[name] && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors[name]?.message}
              </p>
            )}
          </div>
        )
      }}
    />
  )

  /* 📤 Submit */
  const handleSubmitForm = (data: z.infer<typeof rentSchema>) => {
    if (totalPrice <= 0) {
      toast.error('Please select a valid rental period.')
      return
    }

    const payload = {
      carId: car?.id,
      bookingType: 'RENTAL' as const,
      rentalType: data.rentalType,
      bookingDate: new Date(data.startAt).toISOString().split('T')[0], // YYYY-MM-DD
      startTime: data.startAt,
      endTime: data.endAt,
      notes: data.notes || '',
      totalPrice,
    }

    onSubmitForm && onSubmitForm(payload, 'RENTAL')
  }

  /* 🧱 UI - Duration Summary */
  const getDurationSummary = () => {
    if (!startAt || !endAt) return null

    const start = new Date(startAt)
    const end = new Date(endAt)

    if (rentalType === 'hourly') {
      const hours = differenceInHours(end, start)
      return `${hours}h`
    } else {
      const days = differenceInDays(end, start)
      const hours = differenceInHours(end, start) % 24
      if (hours > 0) {
        return `${days}d, ${hours}h`
      }

      return `${days}d`
    }
  }

  const getPriceSummary = () => {
    const diffTotalHours = getDurationSummary()
    let oddHours = 0
    if (diffTotalHours?.includes('h') && rentalType === 'daily') {
      oddHours = Number((parseInt(diffTotalHours.split('h')[0]) % 24).toPrecision(2))
      let getHours = Number(diffTotalHours.split(', ', 2)[1]?.replace('h', ''))
      let roundedHours = getHours / 24
      oddHours = Math.round(roundedHours * 100) / 100
    }

    return (
      <div className="p-4 bg-gradient-to-l from-secondary to-accent2/30 rounded-2xl border border-emerald-200">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold  flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-accent2" />
            Total: {getDurationSummary()}
          </span>
          <span className="text-2xl font-bold ">
            {formatCurrencyVND(totalPrice)}
          </span>
        </div>
        {rentalType === 'hourly' && (
          <p className="text-xs text-accent2">• {car.rentInfo?.hourlyPrice} × {differenceInHours(new Date(endAt), new Date(startAt))} hours</p>
        )}
        {rentalType === 'daily' && (
          <>
            <p className="text-xs ">
              • {car.rentInfo?.dailyPrice} ×
              {
                differenceInDays(new Date(endAt), new Date(startAt))
              }
              days</p>
            {oddHours > 0 && (
              <p className="text-xs text-green-700">
                • {car.rentInfo?.dailyPrice} × {oddHours} day</p>
            )}

          </>
        )}

      </div>
    )
  }

  return (
    <TabsContent value="schedule-rent" className="mt-6">
      <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6">

        {/* Rental Type */}
        <div className="space-y-3">
          <Label className="text-lg font-semibold flex items-center gap-2 ">
            <Clock className="w-5 h-5 text-accent2" />
            Rental Type
          </Label>
          <Controller
            name="rentalType"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full h-14 rounded-2xl border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-2xl bg-card">
                  <SelectItem value="daily" className="py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium ">Daily Rental</span>
                      <span className="text-xs bg-blue-100 text-accent2 px-2 py-1 rounded-full">
                        {formatCurrencyVND(car.rentInfo?.dailyPrice || 0)}/day
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="hourly" className="py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Hourly Rental</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {formatCurrencyVND(car.rentInfo?.hourlyPrice || 0)}/hour
                      </span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {/* Start & End Datetime */}
        <div className="space-y-3">
          <Label className="text-lg font-semibold flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-accent2" />
            Rental Period
            {rentalType === 'hourly' && (
              <span className="text-sm text-accent2">(Max 24 hours)</span>
            )}
            {rentalType === 'daily' && (
              <span className="text-sm text-accent2">(Min 1 day)</span>
            )}
          </Label>

          <div className="grid md:grid-cols-2 gap-6">
            {renderDateTimePicker('startAt', 'Start')}
            {renderDateTimePicker('endAt', 'End')}
          </div>

          {/* Duration Summary */}
          {startAt && endAt && (
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex justify-between items-center text-sm">
                <span className="text-accent2">Duration:</span>
                <span className="font-semibold text-blue-800">{getDurationSummary()}</span>
              </div>
            </div>
          )}
        </div>

        {/* Notes */}
        <div className="space-y-3">
          <Label className="text-lg font-semibold flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-accent2" />
            Special Requests
          </Label>
          <Textarea
            {...register('notes')}
            placeholder="Any special requirements? Insurance needs? Pick-up location?"
            className="min-h-[100px] rounded-2xl border-gray-200 focus:ring-primary resize-none"
          />
        </div>

        {/* Price Summary */}
        {getPriceSummary()}


        {bookedSlots.length > 0 && !loadingSlots && (
          <div className="p-3 bg-card rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 text-sm font-medium  mb-2">
              📅 Booked slots ({bookedSlots.length})
            </div>
            <div className="space-y-1 max-h-20 overflow-y-auto">
              {bookedSlots.slice(0, 5).map((slot) => (
                <div key={slot.id} className="text-xs text-info flex justify-between">
                  <span>
                    {displayDateTime(slot.startTime)} - {displayDateTime(slot.endTime)}
                  </span>
                  {
                    slot.bookingType === 'RENTAL' ? (
                      <>
                        <p className="text-gray-400">
                          Rent: <span className='text-primary-foreground'>{slot.rentalType}</span>
                        </p>
                        <p className="text-gray-400">
                          Total: <span className='text-primary-foreground'>{formatCurrencyVND(slot.totalPrice)}</span>
                        </p>
                      </>
                    ) : (<>

                    </>)
                  }

                </div>
              ))}
              {bookedSlots.length > 5 && (
                <div className="text-xs ">...and {bookedSlots.length - 5} more</div>
              )}
            </div>
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full h-14 bg-gradient-to-b from-primary to-accent/60 
                     hover:from-primary/90 hover:to-accent/40 
                      rounded-2xl text-lg font-semibold 
                     shadow-xl disabled:opacity-50"
          disabled={bookingInProcess || totalPrice <= 0}
        >
          {bookingInProcess ? (
            <>
              <Loader2 className="mr-3 h-5 w-5 animate-spin" />
              Processing Rental...
            </>
          ) : (
            `Confirm Rental • ${formatCurrencyVND(totalPrice)}`
          )}
        </Button>
      </form>
    </TabsContent>
  )
}