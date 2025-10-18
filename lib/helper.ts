import { WorkingHour } from "@/types/settings"
import { WorkingHourCreateInput, WorkingHourInput } from "@/types/working-hour"
import { DayOfWeek } from "@prisma/client"

export const serializeCarData = (car: any, wishlisted: boolean = false) => {
    return {
        ...car,
        price: car.price ? parseFloat(car.price.toString()) : 0,
        createdAt: car.createdAt ? car.createdAt.toISOString() : null,
        updatedAt: car.updatedAt ? car.updatedAt.toISOString() : null,
        wishlisted
    }
}

export const serializeDealerData = (dealer: any) => {
    return {
        ...dealer,
        avgRating: dealer.avgRating || 0,
        createdAt: dealer.createdAt ? dealer.createdAt.toISOString() : null,
        updatedAt: dealer.updatedAt ? dealer.updatedAt.toISOString() : null,
        cars: dealer.cars ? dealer.cars.map((car: any) => serializeCarData(car)) : [],
        verifiedAvgRating: dealer?.reviews?.length > 0
        ? dealer.reviews.reduce((sum:number, r:any) => sum + r.rating, 0) / dealer.reviews.length
        : 0

    }
}

export const serializeWorkingHours = (workingHour: WorkingHour) => {

        const parseDayOfWeek = DayOfWeek[workingHour.dayOfWeek as keyof typeof DayOfWeek];
        if(!parseDayOfWeek) {
            throw new Error(`Invalid dayOfWeek: ${workingHour.dayOfWeek}`);
        }
        return {
            ...workingHour,
            dayOfWeek: parseDayOfWeek,
            openTime: workingHour.openTime || 900,
            closeTime: workingHour.closeTime || 1700,
        }

    
}

// export const formatCurrency = (price: string): string => {
//     return price.replace(/\$/g, "").trim(); 
//   };
export const formatCurrency = (amount: string | number): string => {
    return  new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(typeof amount === 'string' ? parseFloat(amount) : amount);
}

export const formatCurrencyVND = (amount: string | number): string => {
    return  new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        currencyDisplay: 'code',
    }).format(typeof amount === 'string' ? parseFloat(amount) : amount);
}

// export function useDebouncedValue(value: string, delay: number) {
//   const [debouncedValue, setDebouncedValue] = useState(value)

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value)
//     }, delay)

//     return () => {
//       clearTimeout(handler)
//     }
//   }, [value, delay])

//   return debouncedValue
// }

export const searchDebounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};