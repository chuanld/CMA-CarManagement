'use client'

import { useState, useEffect } from 'react'
import { Dealer } from '@/types/dealer'
import { updateDealer } from '@/actions/dealers'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Clock, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import useFetch from '@/app/hooks/use-fetch'
import { WorkingHoursTab } from './working-tab'

type WorkingHour = {
  id?: string
  dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'
  isOpen: boolean
  openTime: number
  closeTime: number
}

const dayNames: Record<WorkingHour['dayOfWeek'], string> = {
  MONDAY: 'Monday',
  TUESDAY: 'Tuesday',
  WEDNESDAY: 'Wednesday',
  THURSDAY: 'Thursday',
  FRIDAY: 'Friday',
  SATURDAY: 'Saturday',
  SUNDAY: 'Sunday',
}

interface WorkingHoursTabProps {
  dealerId: string
  dealer: Dealer
}

export function WorkingHours({ dealerId, dealer }: WorkingHoursTabProps) {
  const [workingHours, setWorkingHours] = useState<WorkingHour[]>([])
  const [saving, setSaving] = useState(false)

  const { fetchData: fnUpdateDealer } = useFetch(updateDealer)

  useEffect(() => {
    // Initialize working hours from dealer data
    const initialWorkingHours: WorkingHour[] = dealer.workingHours?.map(wh => ({
      id: wh.id,
      dayOfWeek: wh.dayOfWeek,
      isOpen: wh.isOpen,
      openTime: wh.openTime || 900,
      closeTime: wh.closeTime || 1700,
    })) || []

    // Fill missing days with defaults
    const allDays = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'] as const
    const completeWorkingHours = allDays.map(day => {
      const existing = initialWorkingHours.find(wh => wh.dayOfWeek === day)
      if (existing) return existing
      return {
        dayOfWeek: day,
        isOpen: day === 'SUNDAY' ? false : true,
        openTime: 900,
        closeTime: 1700,
      }
    })
    setWorkingHours(completeWorkingHours)
  }, [dealer.workingHours])

  const timeToNumber = (time: string): number => {
    if (!time) return 0
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 100 + minutes
  }

  const numberToTime = (num: number): string => {
    const hours = Math.floor(num / 100).toString().padStart(2, '0')
    const minutes = (num % 100).toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const updateWorkingHour = (day: WorkingHour['dayOfWeek'], field: keyof WorkingHour, value: any) => {
    setWorkingHours(prev =>
      prev.map(wh =>
        wh.dayOfWeek === day
          ? {
              ...wh,
              [field]: field === 'openTime' || field === 'closeTime'
                ? timeToNumber(value) || 0
                : Boolean(value),
            }
          : wh
      )
    )
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const formData = {
        workingHours: workingHours.map(wh => ({
          dayOfWeek: wh.dayOfWeek,
          isOpen: wh.isOpen,
          openTime: wh.isOpen ? wh.openTime : 900,
          closeTime: wh.isOpen ? wh.closeTime : 1700,
        })),
      }
      await fnUpdateDealer(dealerId, formData)
      toast.success('Working hours updated successfully!')
    } catch (error) {
      toast.error('Failed to update working hours')
    } finally {
      setSaving(false)
    }
  }

  return (
    // <div className="space-y-6">
    //   <div className="flex justify-between items-center">
    //     <h2 className="text-xl font-semibold flex items-center gap-2">
    //       <Clock className="w-5 h-5" />
    //       Working Hours
    //     </h2>
    //     <Button onClick={handleSave} disabled={saving}>
    //       {saving ? (
    //         <>
    //           <Loader2 className="w-4 h-4 mr-2 animate-spin" />
    //           Saving...
    //         </>
    //       ) : (
    //         'Save Changes'
    //       )}
    //     </Button>
    //   </div>

    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //     {workingHours.map((day, index) => (
    //       <div
    //         key={day.dayOfWeek}
    //         className={`space-y-2 p-4 border rounded-lg ${
    //           day.isOpen
    //             ? 'border-primary/30 bg-primary/5'
    //             : 'border-border bg-muted/20'
    //         }`}
    //       >
    //         <Label className="text-sm font-medium text-center block capitalize">
    //           {dayNames[day.dayOfWeek]}
    //         </Label>

    //         <div className="flex items-center justify-center gap-2">
    //           <input
    //             type="checkbox"
    //             id={`open-${day.dayOfWeek}`}
    //             checked={day.isOpen}
    //             onChange={(e) => updateWorkingHour(day.dayOfWeek, 'isOpen', e.target.checked)}
    //             className="w-4 h-4 rounded"
    //           />
    //           <label htmlFor={`open-${day.dayOfWeek}`} className="text-sm">Open</label>
    //         </div>

    //         {day.isOpen && (
    //           <div className="space-y-2 pt-2">
    //             <div className="flex flex-col items-center space-y-1">
    //               <Label className="text-xs text-center">Open</Label>
    //               <Input
    //                 type="time"
    //                 value={numberToTime(day.openTime)}
    //                 onChange={(e) => updateWorkingHour(day.dayOfWeek, 'openTime', e.target.value)}
    //                 className="h-8 text-xs"
    //               />
    //             </div>
    //             <div className="flex flex-col items-center space-y-1">
    //               <Label className="text-xs text-center">Close</Label>
    //               <Input
    //                 type="time"
    //                 value={numberToTime(day.closeTime)}
    //                 onChange={(e) => updateWorkingHour(day.dayOfWeek, 'closeTime', e.target.value)}
    //                 className="h-8 text-xs"
    //               />
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <WorkingHoursTab
      workingHours={workingHours}
      onUpdateWorkingHour={updateWorkingHour}
      onSave={handleSave}
      saving={saving}
      numberToTime={numberToTime}
      timeToNumber={timeToNumber}
    />
  )
}