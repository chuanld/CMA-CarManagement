import { differenceInHours } from 'date-fns';

/**
 * Ports of apps/web/lib/helper.ts's serialize* functions. The frontend's
 * existing wire format (numeric `price`/`saleInfo.price`/etc instead of
 * Prisma Decimal, plus a computed top-level `price`/`carType`) is treated
 * as the contract here — these responses now come from this API instead of
 * a Next.js Server Action, but callers expect the exact same shape.
 */

export function serializeCarData(car: any, wishlisted = false) {
  const price =
    car?.saleInfo?.price !== undefined && car?.saleInfo?.price !== null
      ? parseFloat(car.saleInfo.price.toString())
      : 0;

  const saleInfo = car?.saleInfo
    ? {
        id: car.saleInfo.id,
        carId: car.saleInfo.carId,
        price: car.saleInfo.price ? parseFloat(car.saleInfo.price.toString()) : 0,
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
        deposit: car.rentInfo.deposit ? parseFloat(car.rentInfo.deposit.toString()) : null,
        available: car.rentInfo.available ?? true,
        statusChangedAt: car.rentInfo.statusChangedAt?.toISOString() || null,
        statusChangedBy: car.rentInfo.statusChangedBy || null,
      }
    : null;

  let carType: 'SALE' | 'RENT' | 'BOTH' = 'SALE';
  if (car?.saleInfo && car?.rentInfo) {
    carType = 'BOTH';
  } else if (car?.rentInfo) {
    carType = 'RENT';
  } else if (!car?.saleInfo) {
    carType = 'RENT';
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

    carType,
    saleInfo: saleInfo || null,
    rentInfo: rentInfo || null,
    price,
    createdAt: car.createdAt ? car.createdAt.toISOString() : null,
    updatedAt: car.updatedAt ? car.updatedAt.toISOString() : null,
    wishlisted,
  };
}

export function serializeDealerData(dealer: any) {
  if (!dealer) return null;

  const verifiedAvgRating =
    dealer?.reviews?.length > 0
      ? dealer.reviews.reduce((sum: number, r: any) => sum + (r.rating || 0), 0) /
        dealer.reviews.length
      : 0;

  return {
    id: dealer.id,
    name: dealer.name,
    address: dealer.address,
    phone: dealer.phone,
    email: dealer.email,
    description: dealer.description || '',
    logoUrl: dealer.logoUrl || '',
    archived: dealer.archived ?? false,
    avgRating: dealer.avgRating || 0,
    reviewCount: dealer.reviewCount || 0,
    verifiedAvgRating,
    ownerId: dealer.ownerId || null,
    owner: dealer.owner || null,
    cars: dealer.cars ? dealer.cars.map((car: any) => serializeCarData(car)) : [],
    workingHours: dealer.workingHours
      ? dealer.workingHours.map((wh: any) => serializeWorkingHours(wh))
      : [],
    createdAt: dealer.createdAt ? dealer.createdAt.toISOString() : null,
    updatedAt: dealer.updatedAt ? dealer.updatedAt.toISOString() : null,
  };
}

export function serializeWorkingHours(workingHour: any) {
  if (!workingHour) return null;
  return {
    id: workingHour.id,
    dayOfWeek: workingHour.dayOfWeek,
    isOpen: workingHour.isOpen ?? true,
    openTime: workingHour.openTime ?? 900,
    closeTime: workingHour.closeTime ?? 1700,
  };
}

export function serializeBooking(booking: any) {
  let rentalType = '';
  if (booking.bookingType === 'RENTAL') {
    const start = new Date(booking.startTime);
    const end = new Date(booking.endTime);
    const totalHours = differenceInHours(end, start);
    rentalType = totalHours < 24 ? 'HOURLY' : 'DAILY';
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
    totalPrice: booking.totalPrice ? parseFloat(booking.totalPrice.toString()) : null,
    status: booking.status,
    notes: booking.notes,
    statusChangedAt: booking.statusChangedAt ? booking.statusChangedAt.toISOString() : null,
    statusChangedBy: booking.statusChangedBy,
    createdAt: booking.createdAt ? booking.createdAt.toISOString() : null,
    updatedAt: booking.updatedAt ? booking.updatedAt.toISOString() : null,
    car: booking.car ? serializeCarData(booking.car) : null,
    dealer: booking.dealer ? serializeDealerData(booking.dealer) : null,
    user: booking.user,
  };
}
