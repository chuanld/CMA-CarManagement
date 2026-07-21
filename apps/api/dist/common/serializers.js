"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCarData = serializeCarData;
exports.serializeDealerData = serializeDealerData;
exports.serializeWorkingHours = serializeWorkingHours;
exports.serializeBooking = serializeBooking;
const date_fns_1 = require("date-fns");
function serializeCarData(car, wishlisted = false) {
    const price = car?.saleInfo?.price !== undefined && car?.saleInfo?.price !== null
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
    let carType = 'SALE';
    if (car?.saleInfo && car?.rentInfo) {
        carType = 'BOTH';
    }
    else if (car?.rentInfo) {
        carType = 'RENT';
    }
    else if (!car?.saleInfo) {
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
function serializeDealerData(dealer) {
    if (!dealer)
        return null;
    const verifiedAvgRating = dealer?.reviews?.length > 0
        ? dealer.reviews.reduce((sum, r) => sum + (r.rating || 0), 0) /
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
        cars: dealer.cars ? dealer.cars.map((car) => serializeCarData(car)) : [],
        workingHours: dealer.workingHours
            ? dealer.workingHours.map((wh) => serializeWorkingHours(wh))
            : [],
        createdAt: dealer.createdAt ? dealer.createdAt.toISOString() : null,
        updatedAt: dealer.updatedAt ? dealer.updatedAt.toISOString() : null,
    };
}
function serializeWorkingHours(workingHour) {
    if (!workingHour)
        return null;
    return {
        id: workingHour.id,
        dayOfWeek: workingHour.dayOfWeek,
        isOpen: workingHour.isOpen ?? true,
        openTime: workingHour.openTime ?? 900,
        closeTime: workingHour.closeTime ?? 1700,
    };
}
function serializeBooking(booking) {
    let rentalType = '';
    if (booking.bookingType === 'RENTAL') {
        const start = new Date(booking.startTime);
        const end = new Date(booking.endTime);
        const totalHours = (0, date_fns_1.differenceInHours)(end, start);
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
//# sourceMappingURL=serializers.js.map