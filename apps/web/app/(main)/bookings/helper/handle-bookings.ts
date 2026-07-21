import { format } from "date-fns"

interface BookingSlot {
    id: string
    carId: string
    bookingDate: Date
    startTime: string  // "09:00"
    endTime: string    // "10:00"
    status: string
}



export const timeToMinutes = (timeStr: string): number => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + minutes
}

export const displayDateTime = (time?: Date) => {
    if(!time) return 'No time'
    return format(new Date(time), 'dd/MM/yyyy HH:mm')
}