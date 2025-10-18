// types/review.ts
export interface Review {
  id: string
  userId: string
  carId?: string | null
  dealerId?: string | null
  rating: number
  comment?: string | null
  createdAt: Date
  updatedAt: Date
  car?: Car | null
  dealer?: Dealer | null
  user: User
}

export interface ReviewCreateInput {
  userId: string
  carId?: string
  dealerId?: string
  rating: number
  comment?: string
}

// types/booking.ts
import { BookingStatus } from '@prisma/client'
import { Dealer } from './dealer'
import { Car } from './car'
import { User } from './user'

export interface TestDriveBooking {
  id: string
  carId: string
  userId: string
  bookingDate: Date
  startTime: string // ISO time string
  endTime: string
  status: BookingStatus
  notes?: string | null
  createdAt: Date
  updatedAt: Date
  car: Car
  user: User
}

export interface BookingCreateInput {
  carId: string
  userId: string
  bookingDate: string // ISO date
  startTime: string
  endTime: string
  notes?: string
}