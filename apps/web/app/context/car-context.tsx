// app/context/car-context.tsx
'use client'
import { createContext, useContext, ReactNode, useState } from 'react'
import { Car } from '@/types/car'

interface CarContextType {
  car: Car | any
  setCar: (car: Car) => void
  testDriveInfo?: any
  setTestDriveInfo: (info: any) => void
  upcomingBookings: any
  setUpcomingBookings: (bookings: any) => void
  user?: any
  setUser: (user: any) => void
}
interface initialProps {
  children: ReactNode
  car?: Car | any
  testDriveInfo?: any
  upcomingBookings?: any
  user?: any
}

const CarContext = createContext<CarContextType | undefined>(undefined)

export const CarProvider = ({ children, initialCar }: { children: ReactNode, initialCar?: initialProps | any }) => {
  const [car, setCar] = useState<Car | null>(initialCar?.car || null)
  const [testDriveInfo, setTestDriveInfo] = useState<any|null>(initialCar?.testDriveInfo || null)
  const [upcomingBookings, setUpcomingBookings] = useState<any|null>(initialCar?.upcomingBookings || null)
  const [user, setUser] = useState<any|null>(initialCar?.user || null)

  

  return (
    <CarContext.Provider value={{ car, setCar, testDriveInfo, setTestDriveInfo, upcomingBookings, setUpcomingBookings, user, setUser }}>
      {children}
    </CarContext.Provider>
  )
}

export const useCar = () => {
  const context = useContext(CarContext)
  if (!context) throw new Error('useCar must be used within CarProvider')
  return context
}
