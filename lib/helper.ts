import {
  Booking,
  Car,
  DayOfWeek,
  Dealer,
  Prisma,
  User,
  WorkingHour,
} from "@prisma/client";
import { differenceInDays, differenceInHours } from "date-fns";

export const serializeUserData = (user: any) => {
  if (!user) return null;

  return {
    id: user.id,
    email: user.email,
    name: user.name,
  };
};

export const serializeCarData = (car: any, wishlisted: boolean = false) => {
  const price =
    car?.saleInfo?.price !== undefined && car?.saleInfo?.price !== null
      ? parseFloat(car.saleInfo.price.toString())
      : 0;

  const saleInfo = car?.saleInfo
    ? {
        id: car.saleInfo.id,
        carId: car.saleInfo.carId,
        price: car.saleInfo.price
          ? parseFloat(car.saleInfo.price.toString())
          : 0,
        negotiable: car.saleInfo.negotiable ?? false,
        status: car.saleInfo.status,
        createdAt: car.saleInfo.createdAt?.toISOString() || null,
        updatedAt: car.saleInfo.updatedAt?.toISOString() || null,
        statusChangedAt: car.saleInfo.statusChangedAt?.toISOString() || null,
        statusChangedBy: car.saleInfo.statusChangedBy || null,
      }
    : null;

  const rentInfo = car?.rentInfo
    ? {
        hourlyPrice: car.rentInfo.hourlyPrice
          ? parseFloat(car.rentInfo.hourlyPrice.toString())
          : null,
        dailyPrice: car.rentInfo.dailyPrice
          ? parseFloat(car.rentInfo.dailyPrice.toString())
          : null,
        deposit: car.rentInfo.deposit
          ? parseFloat(car.rentInfo.deposit.toString())
          : null,
        available: car.rentInfo.available ?? true,
        statusChangedAt: car.rentInfo.statusChangedAt?.toISOString() || null,
        statusChangedBy: car.rentInfo.statusChangedBy || null,
      }
    : null;

  let carType: "SALE" | "RENT" | "BOTH" = "SALE";

  if (car?.saleInfo && car?.rentInfo) {
    carType = "BOTH";
  } else if (car?.rentInfo) {
    carType = "RENT";
  } else if (!car?.saleInfo) {
    carType = "RENT";
  }

  return {
    id: car.id,
    make: car.make,
    model: car.model,
    year: car.year,
    mileage: car.mileage,
    color: car.color,
    fuelType: car.fuelType,
    transmission: car.transmission,
    bodyType: car.bodyType,
    seats: car.seats,
    description: car.description,
    status: car.status,
    featured: car.featured,
    images: car.images || [],
    dealer: car.dealer || null,
    countViews: car.countViews,
    durationView: car.durationView,
    avgRating: car.avgRating || null,
    reviewCount: car.reviewCount,
    statusChangedAt: car.statusChangedAt,
    saveBy: car.savedBy || [],

    //v3 fields
    carType: carType,
    saleInfo: saleInfo || null,
    rentInfo: rentInfo || null,
    // normalized price for FE convenience
    price,
    createdAt: car.createdAt ? car.createdAt.toISOString() : null,
    updatedAt: car.updatedAt ? car.updatedAt.toISOString() : null,
    wishlisted,
  };
};

export const serializeDealerData = (dealer: any) => {
  if (!dealer) return null;

  const verifiedAvgRating =
    dealer?.reviews?.length > 0
      ? dealer.reviews.reduce(
          (sum: number, r: any) => sum + (r.rating || 0),
          0
        ) / dealer.reviews.length
      : 0;

  return {
    id: dealer.id,
    name: dealer.name,
    address: dealer.address,
    phone: dealer.phone,
    email: dealer.email,
    description: dealer.description || "",
    logoUrl: dealer.logoUrl || "",
    archived: dealer.archived ?? false,
    avgRating: dealer.avgRating || 0,
    reviewCount: dealer.reviewCount || 0,
    verifiedAvgRating,

    // relation user
    ownerId: dealer.ownerId || null,
    owner: dealer.owner || null,

    // serialized car
    cars: dealer.cars
      ? dealer.cars.map((car: any) => serializeCarData(car))
      : [],

    // serialized working hours
    workingHours: dealer.workingHours
      ? dealer.workingHours.map((wh: any) => serializeWorkingHours(wh))
      : [],

    // Thời gian
    createdAt: dealer.createdAt ? dealer.createdAt.toISOString() : null,
    updatedAt: dealer.updatedAt ? dealer.updatedAt.toISOString() : null,
  };
};

export const serializeWorkingHours = (workingHour: any) => {
  if (!workingHour) return null;

  // Parse dayOfWeek enum
  const parsedDayOfWeek =
    DayOfWeek[workingHour.dayOfWeek as keyof typeof DayOfWeek];
  if (!parsedDayOfWeek) {
    throw new Error(`Invalid dayOfWeek: ${workingHour.dayOfWeek}`);
  }

  return {
    id: workingHour.id,
    dayOfWeek: parsedDayOfWeek,
    isOpen: workingHour.isOpen ?? true,
    openTime: workingHour.openTime ?? 900,
    closeTime: workingHour.closeTime ?? 1700,
    dealerId: workingHour.dealerId,

    // Time
    createdAt: workingHour.createdAt
      ? workingHour.createdAt.toISOString()
      : null,
    updatedAt: workingHour.updatedAt
      ? workingHour.updatedAt.toISOString()
      : null,
  };
};

export function serializeBooking(booking: any) {
  let rentalType = "";
  if (booking.bookingType === "RENTAL") {
    const start = new Date(booking.startTime);
    const end = new Date(booking.endTime);

    const totalHours = differenceInHours(end, start);
    const totalDays = differenceInDays(end, start);

    rentalType = totalHours < 24 ? "HOURLY" : "DAILY";
  }

  return {
    id: booking.id,
    carId: booking.carId,
    userId: booking.userId,
    dealerId: booking.dealerId,
    bookingType: booking.bookingType,
    rentalType: rentalType && rentalType,
    bookingDate: booking.bookingDate ? booking.bookingDate.toISOString() : null,
    startTime: booking.startTime.toISOString(),
    endTime: booking.endTime.toISOString(),
    totalPrice: booking.totalPrice? parseFloat(booking.totalPrice.toString()) : null,
    status: booking.status,
    notes: booking.notes,
    statusChangedAt: booking.statusChangedAt
      ? booking.statusChangedAt.toISOString()
      : null,
    statusChangedBy: booking.statusChangedBy,
    createdAt: booking.createdAt ? booking.createdAt.toISOString() : null,
    updatedAt: booking.updatedAt ? booking.updatedAt.toISOString() : null,

    car: booking.car ? serializeCarData(booking.car) : null,
    dealer: booking.dealer ? serializeDealerData(booking.dealer) : null,
    user: booking.user,
  };
}

export function serializePurchase(purchase: any) {
  if (!purchase) return null

  return {
    ...purchase,
    id: purchase.id,
    status: purchase.status,
    price: purchase.price instanceof Prisma.Decimal 
      ? Number(purchase.price) 
      : purchase.price,
    
    dealerId: purchase.dealerId,
    carId: purchase.carId,
    userId: purchase.userId,

    createdAt: purchase.createdAt instanceof Date 
      ? purchase.createdAt.toISOString() 
      : purchase.createdAt,

    updatedAt: purchase.updatedAt instanceof Date 
      ? purchase.updatedAt.toISOString() 
      : purchase.updatedAt,

    statusChangedAt: purchase.statusChangedAt 
      ? new Date(purchase.statusChangedAt).toISOString() 
      : null,

    car: purchase.car
      ? serializeCarData(purchase.car)
      : null,

    dealer: purchase.dealer
      ? serializeDealerData(purchase.dealer)
      : null,

    user: purchase.user
      ? serializeUserData(purchase.user)
      : null,
  }
};
// export const formatCurrency = (price: string): string => {
//     return price.replace(/\$/g, "").trim();
//   };
export const formatCurrency = (amount: string | number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(typeof amount === "string" ? parseFloat(amount) : amount);
};

export const formatCurrencyVND = (amount: string | number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  }).format(typeof amount === "string" ? parseFloat(amount) : amount);
};

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

export const searchDebounce = (
  func: (...args: any[]) => void,
  delay: number
) => {
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

//for cron job to update booking statuses
// export default async function handler(req, res) {
//   await updateBookingStatuses();
//   res.status(200).json({ success: true });
// }

export function combineDateAndTime(dateStr: string, timeStr: string): Date {
  const [year, month, day] = dateStr.split("-").map(Number);
  const [hour, minute] = timeStr.split(":").map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour, minute));
}

//  handle time validation for rental pickup and return
export async function validateWorkingHours(
  workingHours: any[],
  date: Date,
  start: Date,
  end: Date
) {
  const dayName = date
    .toLocaleString("en-US", { weekday: "long", timeZone: "UTC" })
    .toUpperCase();
  const schedule = workingHours.find(
    (wh) => wh.dayOfWeek === dayName && wh.isOpen
  );
  if (!schedule) throw new Error(`Dealer closed on ${dayName}`);

  const openHour = Math.floor(schedule.openTime / 100);
  const closeHour = Math.floor(schedule.closeTime / 100);

  const startH = start.getUTCHours();
  const endH = end.getUTCHours();

  if (startH < openHour || endH > closeHour) {
    throw new Error(`Must be within ${openHour}:00-${closeHour}:00`);
  }
}

//Rules for rental preparation time
const PREPARATION_HOURS = {
  hourly: 0.5, // 30p
  daily: 1.0, // 1h
};


export async function validateRentalStartTime(
  workingHours: any[],
  start: Date,
  end: Date,
  rentalType: "hourly" | "daily"
) {
  if (rentalType === "daily") {
    const startDay = new Date(start)
      .toLocaleString("en-US", { weekday: "long" })
      .toUpperCase();
    const endDay = new Date(end)
      .toLocaleString("en-US", { weekday: "long" })
      .toUpperCase();

    const startSchedule = workingHours.find(
      (wh) => wh.dayOfWeek === startDay && wh.isOpen
    );
    const endSchedule = workingHours.find(
      (wh) => wh.dayOfWeek === endDay && wh.isOpen
    );

    if (!startSchedule)
      throw new Error(`Dealer closed on ${startDay} for pickup`);
    if (!endSchedule) throw new Error(`Dealer closed on ${endDay} for return`);

    console.log(`✅ Daily: Pickup ${startDay} OK, Return ${endDay} OK`);
    return;
  }

  if (rentalType === "hourly") {
    const dayName = start
      .toLocaleString("en-US", { weekday: "long" })
      .toUpperCase();
    const schedule = workingHours.find(
      (wh) => wh.dayOfWeek === dayName && wh.isOpen
    );
    if (!schedule) throw new Error(`Dealer closed on ${dayName}`);

    const openHour = Math.floor(schedule.openTime / 100);
    const startH = start.getUTCHours();
    if (startH < openHour || startH > 18) {
      throw new Error(`Hourly pickup: ${openHour}:00-18:00`);
    }
  }
}
