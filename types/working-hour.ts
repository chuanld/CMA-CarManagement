// types/working-hour.ts
import { DayOfWeek } from '@prisma/client'
import { Dealer } from './dealer'

export interface WorkingHour {
  id: string
  dayOfWeek: DayOfWeek
  isOpen: boolean
  createdAt: Date
  updatedAt: Date
  dealerId: string
  openTime: number  // 900 = 9:00 AM (HHMM format)
  closeTime: number // 1800 = 6:00 PM
  dealer: Dealer
}

export interface WorkingHourInput {
  dayOfWeek: string // 'MONDAY', 'TUESDAY', etc.
  isOpen: boolean
  openTime: number | null 
  closeTime: number | null
}

export interface WorkingHourCreateInput {
  dayOfWeek: DayOfWeek
  isOpen: boolean
  openTime: number
  closeTime: number
  dealerId: string
}