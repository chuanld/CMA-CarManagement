module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/packages/database/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.db = void 0;
const client_1 = __turbopack_context__.r("[externals]/@prisma/client [external] (@prisma/client, cjs)");
__exportStar(__turbopack_context__.r("[externals]/@prisma/client [external] (@prisma/client, cjs)"), exports);
exports.db = globalThis.prisma ?? new client_1.PrismaClient();
if ("TURBOPACK compile-time truthy", 1) globalThis.prisma = exports.db;
}),
"[project]/apps/web/lib/helper.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combineDateAndTime",
    ()=>combineDateAndTime,
    "formatCurrency",
    ()=>formatCurrency,
    "formatCurrencyVND",
    ()=>formatCurrencyVND,
    "searchDebounce",
    ()=>searchDebounce,
    "serializeBooking",
    ()=>serializeBooking,
    "serializeCarData",
    ()=>serializeCarData,
    "serializeDealerData",
    ()=>serializeDealerData,
    "serializeMessage",
    ()=>serializeMessage,
    "serializePurchase",
    ()=>serializePurchase,
    "serializeUserData",
    ()=>serializeUserData,
    "serializeWorkingHours",
    ()=>serializeWorkingHours,
    "validateRentalStartTime",
    ()=>validateRentalStartTime,
    "validateWorkingHours",
    ()=>validateWorkingHours
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/differenceInHours.js [app-rsc] (ecmascript)");
;
;
const serializeUserData = (user)=>{
    if (!user) return null;
    return {
        id: user.id,
        email: user.email,
        name: user.name
    };
};
const serializeCarData = (car, wishlisted = false)=>{
    const price = car?.saleInfo?.price !== undefined && car?.saleInfo?.price !== null ? parseFloat(car.saleInfo.price.toString()) : 0;
    const saleInfo = car?.saleInfo ? {
        id: car.saleInfo.id,
        carId: car.saleInfo.carId,
        price: car.saleInfo.price ? parseFloat(car.saleInfo.price.toString()) : 0,
        negotiable: car.saleInfo.negotiable ?? false,
        status: car.saleInfo.status,
        createdAt: car.saleInfo.createdAt?.toISOString() || null,
        updatedAt: car.saleInfo.updatedAt?.toISOString() || null,
        statusChangedAt: car.saleInfo.statusChangedAt?.toISOString() || null,
        statusChangedBy: car.saleInfo.statusChangedBy || null
    } : null;
    const rentInfo = car?.rentInfo ? {
        hourlyPrice: car.rentInfo.hourlyPrice ? parseFloat(car.rentInfo.hourlyPrice.toString()) : null,
        dailyPrice: car.rentInfo.dailyPrice ? parseFloat(car.rentInfo.dailyPrice.toString()) : null,
        deposit: car.rentInfo.deposit ? parseFloat(car.rentInfo.deposit.toString()) : null,
        available: car.rentInfo.available ?? true,
        statusChangedAt: car.rentInfo.statusChangedAt?.toISOString() || null,
        statusChangedBy: car.rentInfo.statusChangedBy || null
    } : null;
    let carType = "SALE";
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
        wishlisted
    };
};
const serializeDealerData = (dealer)=>{
    if (!dealer) return null;
    const verifiedAvgRating = dealer?.reviews?.length > 0 ? dealer.reviews.reduce((sum, r)=>sum + (r.rating || 0), 0) / dealer.reviews.length : 0;
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
        cars: dealer.cars ? dealer.cars.map((car)=>serializeCarData(car)) : [],
        // serialized working hours
        workingHours: dealer.workingHours ? dealer.workingHours.map((wh)=>serializeWorkingHours(wh)) : [],
        // Thời gian
        createdAt: dealer.createdAt ? dealer.createdAt.toISOString() : null,
        updatedAt: dealer.updatedAt ? dealer.updatedAt.toISOString() : null
    };
};
const serializeWorkingHours = (workingHour)=>{
    if (!workingHour) return null;
    // Parse dayOfWeek enum
    const parsedDayOfWeek = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DayOfWeek"][workingHour.dayOfWeek];
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
        createdAt: workingHour.createdAt ? workingHour.createdAt.toISOString() : null,
        updatedAt: workingHour.updatedAt ? workingHour.updatedAt.toISOString() : null
    };
};
function serializeBooking(booking) {
    let rentalType = "";
    if (booking.bookingType === "RENTAL") {
        const start = new Date(booking.startTime);
        const end = new Date(booking.endTime);
        const totalHours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$differenceInHours$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["differenceInHours"])(end, start);
        const totalDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["differenceInDays"])(end, start);
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
        totalPrice: booking.totalPrice ? parseFloat(booking.totalPrice.toString()) : null,
        status: booking.status,
        notes: booking.notes,
        statusChangedAt: booking.statusChangedAt ? booking.statusChangedAt.toISOString() : null,
        statusChangedBy: booking.statusChangedBy,
        createdAt: booking.createdAt ? booking.createdAt.toISOString() : null,
        updatedAt: booking.updatedAt ? booking.updatedAt.toISOString() : null,
        car: booking.car ? serializeCarData(booking.car) : null,
        dealer: booking.dealer ? serializeDealerData(booking.dealer) : null,
        user: booking.user
    };
}
function serializePurchase(purchase) {
    if (!purchase) return null;
    return {
        ...purchase,
        id: purchase.id,
        status: purchase.status,
        price: purchase.price instanceof __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Prisma"].Decimal ? Number(purchase.price) : purchase.price,
        dealerId: purchase.dealerId,
        carId: purchase.carId,
        userId: purchase.userId,
        createdAt: purchase.createdAt instanceof Date ? purchase.createdAt.toISOString() : purchase.createdAt,
        updatedAt: purchase.updatedAt instanceof Date ? purchase.updatedAt.toISOString() : purchase.updatedAt,
        statusChangedAt: purchase.statusChangedAt ? new Date(purchase.statusChangedAt).toISOString() : null,
        car: purchase.car ? serializeCarData(purchase.car) : null,
        dealer: purchase.dealer ? serializeDealerData(purchase.dealer) : null,
        user: purchase.user ? serializeUserData(purchase.user) : null
    };
}
function serializeMessage(message) {
    if (!message) return null;
    return {
        ...message,
        id: message.id,
        type: message.type,
        createdAt: message.createdAt ? message.createdAt.toISOString() : null,
        readAt: message.readAt ? message.readAt.toISOString() : null,
        isUser: message.sender.role === "USER",
        sender: {
            id: message.sender.id,
            name: message.sender.name,
            email: message.sender.email,
            role: message.sender.role
        },
        receiver: {
            id: message.receiver.id,
            name: message.receiver.name,
            email: message.receiver.email,
            role: message.receiver.role
        }
    };
}
const formatCurrency = (amount)=>{
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(typeof amount === "string" ? parseFloat(amount) : amount);
};
const formatCurrencyVND = (amount)=>{
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        currencyDisplay: "code"
    }).format(typeof amount === "string" ? parseFloat(amount) : amount);
};
const searchDebounce = (func, delay)=>{
    let timeoutId;
    return (...args)=>{
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            func(...args);
        }, delay);
    };
};
function combineDateAndTime(dateStr, timeStr) {
    const [year, month, day] = dateStr.split("-").map(Number);
    const [hour, minute] = timeStr.split(":").map(Number);
    return new Date(Date.UTC(year, month - 1, day, hour, minute));
}
function utcToLocalMinutes(date, offsetHours = 7) {
    return (date.getUTCHours() + offsetHours) * 60 + date.getUTCMinutes();
}
async function validateWorkingHours(workingHours, date, start, end) {
    const dayName = date.toLocaleString("en-US", {
        weekday: "long",
        timeZone: "UTC"
    }).toUpperCase();
    const schedule = workingHours.find((wh)=>wh.dayOfWeek === dayName && wh.isOpen);
    if (!schedule) throw new Error(`Dealer closed on ${dayName}`);
    // const openHour = Math.floor(schedule.openTime / 100);
    // const closeHour = Math.floor(schedule.closeTime / 100);
    // const startH = start.getUTCHours();
    // const endH = end.getUTCHours();
    // if (startH < openHour || endH > closeHour) {
    //   throw new Error(`Must be within ${openHour}:00-${closeHour}:00`);
    // }
    const openMinutes = Math.floor(schedule.openTime / 100) * 60 + schedule.openTime % 100;
    const closeMinutes = Math.floor(schedule.closeTime / 100) * 60 + schedule.closeTime % 100;
    const startMinutes = utcToLocalMinutes(start);
    const endMinutes = utcToLocalMinutes(end);
    if (startMinutes < openMinutes || endMinutes > closeMinutes) {
        throw new Error(`Must be within ${schedule.openTime}-${schedule.closeTime}`);
    }
}
//Rules for rental preparation time
const PREPARATION_HOURS = {
    hourly: 0.5,
    daily: 1.0
};
async function validateRentalStartTime(workingHours, start, end, rentalType) {
    if (rentalType === "daily") {
        const startDay = new Date(start).toLocaleString("en-US", {
            weekday: "long"
        }).toUpperCase();
        const endDay = new Date(end).toLocaleString("en-US", {
            weekday: "long"
        }).toUpperCase();
        const startSchedule = workingHours.find((wh)=>wh.dayOfWeek === startDay && wh.isOpen);
        const endSchedule = workingHours.find((wh)=>wh.dayOfWeek === endDay && wh.isOpen);
        if (!startSchedule) throw new Error(`Dealer closed on ${startDay} for pickup`);
        if (!endSchedule) throw new Error(`Dealer closed on ${endDay} for return`);
        console.log(`✅ Daily: Pickup ${startDay} OK, Return ${endDay} OK`);
        return;
    }
    if (rentalType === "hourly") {
        const dayName = start.toLocaleString("en-US", {
            weekday: "long"
        }).toUpperCase();
        const schedule = workingHours.find((wh)=>wh.dayOfWeek === dayName && wh.isOpen);
        if (!schedule) throw new Error(`Dealer closed on ${dayName}`);
        const openHour = Math.floor(schedule.openTime / 100);
        const startH = start.getUTCHours();
        if (startH < openHour || startH > 18) {
            throw new Error(`Hourly pickup: ${openHour}:00-18:00`);
        }
    }
}
}),
"[project]/apps/web/lib/prisma.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/dist/index.js [app-rsc] (ecmascript)");
;
}),
"[project]/apps/web/actions/admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0097aaaf29b721bdddd164be14a501e670966c07df":"getDashboardStats","00c22e735ee729d0c1592242a61c60bb93a90453c3":"getAdmin","4062f36aebd7f795b1f6b5d1fe183a00cbdd7d0e72":"getAdminTestDrives","407999de6011694723857aab7be88d2c22aa76232c":"updatePurchaseStatus","40c39ae944b20637f1f521480173bb57a50498d2ae":"getAdminPurchases","40dc28d20cb6328ea81d3229ed41806bc20dd41b6b":"updateTestDriveStatus","40f379bca1a22b808ca0a5bbe482a96f39b4c5bafe":"updateRentalStatus","40f8d61fe41e965b61f7df9faca1455ce9d87cd937":"getAdminRentals"},"",""] */ __turbopack_context__.s([
    "getAdmin",
    ()=>getAdmin,
    "getAdminPurchases",
    ()=>getAdminPurchases,
    "getAdminRentals",
    ()=>getAdminRentals,
    "getAdminTestDrives",
    ()=>getAdminTestDrives,
    "getDashboardStats",
    ()=>getDashboardStats,
    "updatePurchaseStatus",
    ()=>updatePurchaseStatus,
    "updateRentalStatus",
    ()=>updateRentalStatus,
    "updateTestDriveStatus",
    ()=>updateTestDriveStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/helper.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/database/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.4.0/node_modules/date-fns/format.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function getAdmin() {
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) {
        throw new Error("Not authenticated");
    }
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            clerkUserId: userId
        }
    });
    if (!user || user.role !== "ADMIN") {
        return {
            authorized: false,
            reason: "Not an admin"
        };
    }
    return {
        authorized: true,
        user
    };
}
async function getAdminTestDrives({ search = "", status = "" }) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            throw new Error("Not authenticated");
        }
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            }
        });
        if (!user || user.role !== "ADMIN") {
            throw new Error("Not authorized");
        }
        // Build where clause for Booking (only TEST_DRIVE)
        let whereClause = {
            bookingType: "TEST_DRIVE"
        };
        if (status) {
            if (status !== "all") whereClause.status = status;
        }
        if (search) {
            whereClause.AND = [
                // keep bookingType constraint plus search ORs
                {
                    OR: [
                        {
                            car: {
                                OR: [
                                    {
                                        make: {
                                            contains: search,
                                            mode: "insensitive"
                                        }
                                    },
                                    {
                                        model: {
                                            contains: search,
                                            mode: "insensitive"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            user: {
                                OR: [
                                    {
                                        name: {
                                            contains: search,
                                            mode: "insensitive"
                                        }
                                    },
                                    {
                                        email: {
                                            contains: search,
                                            mode: "insensitive"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ];
        }
        const bookings = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.findMany({
            where: whereClause,
            include: {
                car: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        imageUrl: true,
                        phone: true
                    }
                }
            },
            orderBy: [
                {
                    bookingDate: "desc"
                },
                {
                    startTime: "asc"
                }
            ]
        });
        if (!bookings || bookings.length === 0) {
            return {
                success: true,
                data: []
            };
        }
        const formattedBookings = bookings.map((booking)=>({
                id: booking.id,
                carId: booking.carId,
                userId: booking.userId,
                bookingDate: booking.bookingDate instanceof Date ? booking.bookingDate.toISOString() : booking.bookingDate,
                startTime: booking.startTime instanceof Date ? booking.startTime.toISOString() : booking.startTime,
                endTime: booking.endTime instanceof Date ? booking.endTime.toISOString() : booking.endTime,
                status: booking.status,
                notes: booking.notes,
                createdAt: booking.createdAt instanceof Date ? booking.createdAt.toISOString() : booking.createdAt,
                updatedAt: booking.updatedAt instanceof Date ? booking.updatedAt.toISOString() : booking.updatedAt,
                car: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeCarData"])(booking.car),
                user: booking.user
            }));
        return {
            success: true,
            data: formattedBookings
        };
    } catch (err) {
        console.error(err instanceof Error ? err.message : "Unexpected error");
        return {
            success: false,
            error: err instanceof Error ? err : new Error(String(err))
        };
    }
}
async function updateTestDriveStatus({ bookingId, newStatus }) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) {
            throw new Error("Not authenticated");
        }
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            }
        });
        if (!user || user.role !== "ADMIN") {
            throw new Error("Not authorized");
        }
        const booking = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.findUnique({
            where: {
                id: bookingId
            }
        });
        if (!booking) {
            throw new Error("Booking not found");
        }
        // ensure this is a test drive booking
        if (booking.bookingType !== "TEST_DRIVE") {
            return {
                success: false,
                error: new Error("Not a test-drive booking")
            };
        }
        const validStatuses = [
            "PENDING",
            "CONFIRMED",
            "COMPLETED",
            "CANCELLED",
            "NO_SHOW"
        ];
        if (!validStatuses.includes(newStatus)) {
            return {
                success: false,
                error: new Error("Invalid status")
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.update({
            where: {
                id: bookingId
            },
            data: {
                status: newStatus
            }
        });
        // revalidate admin pages
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/test-drives");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/reservations");
        return {
            success: true,
            message: "Status updated successfully"
        };
    } catch (err) {
        console.error(err instanceof Error ? err.message : "Unexpected error");
        return {
            success: false,
            error: err instanceof Error ? err : new Error(String(err))
        };
    }
}
async function getAdminRentals({ searchTerm, status }) {
    const { userId: clerkUserId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!clerkUserId) throw new Error("Unauthorized");
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            clerkUserId
        },
        select: {
            role: true
        }
    });
    if (user?.role !== "ADMIN") throw new Error("Forbidden");
    const where = {
        bookingType: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BookingType"].RENTAL
    };
    if (searchTerm) {
        where.OR = [
            {
                car: {
                    make: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                }
            },
            {
                car: {
                    model: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                }
            },
            {
                user: {
                    name: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                }
            },
            {
                user: {
                    phone: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                }
            }
        ];
    }
    if (status && status !== "all") {
        where.status = status;
    }
    try {
        const rentals = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.findMany({
            where,
            include: {
                car: {
                    select: {
                        id: true,
                        make: true,
                        model: true,
                        year: true,
                        images: true,
                        rentInfo: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        name: true,
                        phone: true,
                        email: true
                    }
                },
                dealer: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        const serialRentals = rentals.map((rental)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeBooking"])(rental));
        return {
            success: true,
            data: serialRentals
        };
    } catch (err) {}
}
async function updateRentalStatus({ bookingId, newStatus }) {
    const { userId: clerkUserId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!clerkUserId) throw new Error("Unauthorized");
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            clerkUserId
        },
        select: {
            role: true
        }
    });
    if (user?.role !== "ADMIN") throw new Error("Forbidden");
    const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.update({
        where: {
            id: bookingId
        },
        data: {
            status: newStatus
        }
    });
    return {
        success: true,
        data: updated
    };
}
async function getDashboardStats() {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) throw new Error("Not authenticated");
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            },
            select: {
                role: true
            }
        });
        if (!user || user.role !== "ADMIN") throw new Error("Not authorized");
        // --- Run ALL queries in parallel ---
        const [// 1. Cars
        carStats, // 2. Test Drives
        testDriveStats, // 3. Rentals
        rentalStats, // 4. Purchases
        purchaseStats, // 5. Users
        userStats, // 6. Dealers
        totalDealers, // 7. Completed Test Drive → Purchase conversion
        completedTestDriveCarIds, // 8. Recent Test Drives
        recentTestDrives, // 9. Recent Rentals
        recentRentals, // 10. Recent Purchases
        recentPurchases, // 11. Revenue (Purchases + Rentals)
        revenueResult] = await Promise.all([
            // --- 1. Cars ---
            Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.count(),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.count({
                    where: {
                        status: "AVAILABLE"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.count({
                    where: {
                        status: "SOLD"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.count({
                    where: {
                        status: "RESERVED"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].car.count({
                    where: {
                        featured: true
                    }
                })
            ]),
            // --- 2. Test Drives ---
            Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "TEST_DRIVE"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "TEST_DRIVE",
                        status: "PENDING"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "TEST_DRIVE",
                        status: "CONFIRMED"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "TEST_DRIVE",
                        status: "COMPLETED"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "TEST_DRIVE",
                        status: "CANCELLED"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "TEST_DRIVE",
                        status: "NO_SHOW"
                    }
                })
            ]),
            // --- 3. Rentals ---
            Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "RENTAL"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "RENTAL",
                        status: "PENDING"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "RENTAL",
                        status: "CONFIRMED"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "RENTAL",
                        status: "ACTIVE"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "RENTAL",
                        status: "COMPLETED"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "RENTAL",
                        status: "CANCELLED"
                    }
                })
            ]),
            // --- 4. Purchases ---
            Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].purchase.count(),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].purchase.count({
                    where: {
                        status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PurchaseStatus"].PENDING
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].purchase.count({
                    where: {
                        status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PurchaseStatus"].CONFIRMED
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].purchase.count({
                    where: {
                        status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PurchaseStatus"].COMPLETED
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].purchase.count({
                    where: {
                        status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PurchaseStatus"].CANCELLED
                    }
                })
            ]),
            // --- 5. Users ---
            Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.count(),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.count({
                    where: {
                        role: "ADMIN"
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.count({
                    where: {
                        role: "USER"
                    }
                })
            ]),
            // --- 6. Dealers ---
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].dealer.count(),
            // --- 7. Completed Test Drive Car IDs (for conversion) ---
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.findMany({
                where: {
                    bookingType: "TEST_DRIVE",
                    status: "COMPLETED"
                },
                select: {
                    carId: true
                }
            }),
            // --- 8. Recent Test Drives ---
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.findMany({
                where: {
                    bookingType: "TEST_DRIVE"
                },
                include: {
                    car: {
                        select: {
                            id: true,
                            make: true,
                            model: true,
                            year: true,
                            images: true
                        }
                    },
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            phone: true,
                            imageUrl: true
                        }
                    }
                },
                orderBy: {
                    createdAt: "desc"
                },
                take: 5
            }),
            // --- 9. Recent Rentals ---
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.findMany({
                where: {
                    bookingType: "RENTAL"
                },
                include: {
                    car: {
                        select: {
                            id: true,
                            make: true,
                            model: true,
                            year: true,
                            images: true
                        }
                    },
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            phone: true,
                            imageUrl: true
                        }
                    }
                },
                orderBy: {
                    createdAt: "desc"
                },
                take: 5
            }),
            // --- 10. Recent Purchases ---
            __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].purchase.findMany({
                include: {
                    car: {
                        select: {
                            id: true,
                            make: true,
                            model: true,
                            year: true,
                            images: true
                        }
                    },
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            phone: true,
                            imageUrl: true
                        }
                    }
                },
                orderBy: {
                    createdAt: "desc"
                },
                take: 5
            }),
            // --- 11. Revenue ---
            Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].purchase.aggregate({
                    where: {
                        status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PurchaseStatus"].COMPLETED
                    },
                    _sum: {
                        price: true
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.aggregate({
                    where: {
                        bookingType: "RENTAL",
                        status: "COMPLETED"
                    },
                    _sum: {
                        totalPrice: true
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].purchase.groupBy({
                    by: [
                        "createdAt"
                    ],
                    where: {
                        status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PurchaseStatus"].COMPLETED,
                        createdAt: {
                            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                        }
                    },
                    _sum: {
                        price: true
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.groupBy({
                    by: [
                        "createdAt"
                    ],
                    where: {
                        bookingType: "RENTAL",
                        status: "COMPLETED",
                        createdAt: {
                            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                        }
                    },
                    _sum: {
                        totalPrice: true
                    }
                })
            ])
        ]);
        // --- Destructure ---
        const [totalCars, availableCars, soldCars, reservedCars, featuredCars] = carStats;
        const [totalTestDrives, pendingTD, confirmedTD, completedTD, cancelledTD, noShowTD] = testDriveStats;
        const [totalRentals, pendingRental, confirmedRental, activeRental, completedRental, cancelledRental] = rentalStats;
        const [totalPurchases, pendingPurchase, confirmedPurchase, completedPurchase, cancelledPurchase] = purchaseStats;
        const [totalUsers, totalAdmins, totalCustomers] = userStats;
        const [purchaseRevenue, rentalRevenue, purchaseGroup, rentalGroup] = revenueResult;
        // --- Conversion: Test Drive → Purchase ---
        const purchasedAfterTestDrive = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].purchase.count({
            where: {
                carId: {
                    in: completedTestDriveCarIds.map((td)=>td.carId)
                },
                status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PurchaseStatus"].COMPLETED
            }
        });
        const testDriveToPurchaseRate = completedTD > 0 ? purchasedAfterTestDrive / completedTD * 100 : 0;
        // --- Total Revenue ---
        const totalRevenue = (purchaseRevenue._sum.price && parseFloat(purchaseRevenue._sum.price.toString()) || 0) + (rentalRevenue._sum.totalPrice && parseFloat(rentalRevenue._sum.totalPrice.toString()) || 0);
        //chart revenue
        const purchaseByDay = purchaseGroup.reduce((acc, curr)=>{
            const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(curr.createdAt, "MMM dd");
            acc[date] = Number(acc[date] || 0) + Number(curr._sum.price ? parseFloat(curr._sum.price.toString()) : 0);
            return acc;
        }, {});
        const rentalByDay = rentalGroup.reduce((acc, curr)=>{
            const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(curr.createdAt, "MMM dd");
            acc[date] = Number(acc[date] || 0) + Number(curr._sum.totalPrice ? parseFloat(curr._sum.totalPrice.toString()) : 0);
            return acc;
        }, {});
        const last7Days = Array.from({
            length: 7
        }, (_, i)=>{
            const d = new Date();
            d.setDate(d.getDate() - i);
            return {
                start: new Date(d.setHours(0, 0, 0, 0)),
                end: new Date(d.setHours(23, 59, 59, 999))
            };
        }).reverse();
        const revenueChartData = last7Days.map((date)=>({
                date,
                purchases: purchaseByDay[date] || 0,
                rentals: rentalByDay[date] || 0
            }));
        const conversionData = await Promise.all(last7Days.map(async ({ start, end })=>{
            const [completedTD, purchasedAfterTD] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].booking.count({
                    where: {
                        bookingType: "TEST_DRIVE",
                        status: "COMPLETED",
                        createdAt: {
                            gte: start,
                            lte: end
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].purchase.count({
                    where: {
                        status: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PurchaseStatus"].COMPLETED,
                        createdAt: {
                            gte: start,
                            lte: end
                        },
                        car: {
                            bookings: {
                                some: {
                                    bookingType: "TEST_DRIVE",
                                    status: "COMPLETED",
                                    createdAt: {
                                        lte: end
                                    }
                                }
                            }
                        }
                    }
                })
            ]);
            const rate = completedTD > 0 ? purchasedAfterTD / completedTD * 100 : 0;
            return {
                date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$4$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(start, "MMM dd"),
                rate: parseFloat(rate.toFixed(2))
            };
        }));
        // --- Format Recent Items ---
        const formatRecent = (items, type)=>items.map((item)=>({
                    id: item.id,
                    car: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeCarData"])(item.car),
                    user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeUserData"])(item.user),
                    status: item.status,
                    createdAt: item.createdAt.toISOString(),
                    ...type === "testdrive" || type === "rental" ? {
                        bookingDate: item.bookingDate.toISOString(),
                        startTime: item.startTime.toISOString(),
                        endTime: item.endTime.toISOString()
                    } : {
                        price: item.price ? parseFloat(item.price.toString()) : 0
                    }
                }));
        return {
            success: true,
            data: {
                cars: {
                    total: totalCars,
                    available: availableCars,
                    sold: soldCars,
                    reserved: reservedCars,
                    featured: featuredCars
                },
                testDrives: {
                    total: totalTestDrives,
                    pending: pendingTD,
                    confirmed: confirmedTD,
                    completed: completedTD,
                    cancelled: cancelledTD,
                    noShow: noShowTD,
                    conversionToPurchaseRate: parseFloat(testDriveToPurchaseRate.toFixed(2)),
                    recent: formatRecent(recentTestDrives, "testdrive"),
                    conversionChart: conversionData
                },
                rentals: {
                    total: totalRentals,
                    pending: pendingRental,
                    confirmed: confirmedRental,
                    active: activeRental,
                    completed: completedRental,
                    cancelled: cancelledRental,
                    recent: formatRecent(recentRentals, "rental")
                },
                purchases: {
                    total: totalPurchases,
                    pending: pendingPurchase,
                    confirmed: confirmedPurchase,
                    completed: completedPurchase,
                    cancelled: cancelledPurchase,
                    recent: formatRecent(recentPurchases, "purchase")
                },
                users: {
                    total: totalUsers,
                    admins: totalAdmins,
                    customers: totalCustomers
                },
                dealers: {
                    total: totalDealers
                },
                revenue: {
                    total: totalRevenue,
                    fromPurchases: purchaseRevenue._sum.price ? parseFloat(purchaseRevenue._sum.price.toString()) : 0,
                    fromRentals: rentalRevenue._sum.totalPrice ? parseFloat(rentalRevenue._sum.totalPrice.toString()) : 0,
                    revenueChart: revenueChartData
                }
            }
        };
    } catch (err) {
        console.error("Dashboard stats error:", err);
        return {
            success: false,
            error: err instanceof Error ? err.message : "Unknown error"
        };
    }
}
async function getAdminPurchases({ searchTerm, status }) {
    const { userId: clerkUserId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!clerkUserId) throw new Error("Unauthorized");
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            clerkUserId
        },
        select: {
            role: true
        }
    });
    if (user?.role !== "ADMIN") throw new Error("Forbidden");
    const where = {};
    if (searchTerm) {
        where.OR = [
            {
                car: {
                    make: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                }
            },
            {
                car: {
                    model: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                }
            },
            {
                user: {
                    name: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                }
            },
            {
                user: {
                    phone: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                }
            }
        ];
    }
    if (status && status !== "all") {
        where.status = status;
    }
    const purchases = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].purchase.findMany({
        where,
        include: {
            car: {
                select: {
                    id: true,
                    make: true,
                    model: true,
                    year: true,
                    images: true,
                    saleInfo: true
                }
            },
            user: {
                select: {
                    id: true,
                    name: true,
                    phone: true,
                    email: true
                }
            },
            dealer: {
                select: {
                    id: true,
                    name: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    const serialPurchases = purchases.map((purchase)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializePurchase"])(purchase));
    return {
        success: true,
        data: serialPurchases
    };
}
async function updatePurchaseStatus({ purchaseId, newStatus }) {
    const { userId: clerkUserId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!clerkUserId) throw new Error("Unauthorized");
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
        where: {
            clerkUserId
        },
        select: {
            role: true
        }
    });
    if (user?.role !== "ADMIN") throw new Error("Forbidden");
    const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].purchase.update({
        where: {
            id: purchaseId
        },
        data: {
            status: newStatus
        }
    });
    const serialPur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializePurchase"])(updated);
    return {
        success: true,
        data: serialPur
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAdmin,
    getAdminTestDrives,
    updateTestDriveStatus,
    getAdminRentals,
    updateRentalStatus,
    getDashboardStats,
    getAdminPurchases,
    updatePurchaseStatus
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdmin, "00c22e735ee729d0c1592242a61c60bb93a90453c3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdminTestDrives, "4062f36aebd7f795b1f6b5d1fe183a00cbdd7d0e72", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTestDriveStatus, "40dc28d20cb6328ea81d3229ed41806bc20dd41b6b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdminRentals, "40f8d61fe41e965b61f7df9faca1455ce9d87cd937", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateRentalStatus, "40f379bca1a22b808ca0a5bbe482a96f39b4c5bafe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDashboardStats, "0097aaaf29b721bdddd164be14a501e670966c07df", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdminPurchases, "40c39ae944b20637f1f521480173bb57a50498d2ae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePurchaseStatus, "407999de6011694723857aab7be88d2c22aa76232c", null);
}),
"[project]/apps/web/app/(admin)/admin/_components/sidebar.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Sidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Sidebar() from the server but Sidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/app/(admin)/admin/_components/sidebar.tsx <module evaluation>", "Sidebar");
}),
"[project]/apps/web/app/(admin)/admin/_components/sidebar.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Sidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Sidebar() from the server but Sidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/app/(admin)/admin/_components/sidebar.tsx", "Sidebar");
}),
"[project]/apps/web/app/(admin)/admin/_components/sidebar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f28$admin$292f$admin$2f$_components$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/web/app/(admin)/admin/_components/sidebar.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f28$admin$292f$admin$2f$_components$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/apps/web/app/(admin)/admin/_components/sidebar.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f28$admin$292f$admin$2f$_components$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/apps/web/app/(admin)/admin/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/actions/admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f28$admin$292f$admin$2f$_components$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/(admin)/admin/_components/sidebar.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const dynamic = 'force-dynamic';
const AdminLayout = async ({ children })=>{
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$actions$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdmin"])();
    if (!admin || !admin.authorized) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                isAdminPage: true
            }, void 0, false, {
                fileName: "[project]/apps/web/app/(admin)/admin/layout.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full w-56 flex-col top-[80px] fixed z-50 inset-y-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f28$admin$292f$admin$2f$_components$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                    fileName: "[project]/apps/web/app/(admin)/admin/layout.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/app/(admin)/admin/layout.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "md:pl-56 pt-[80px] h-full",
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/app/(admin)/admin/layout.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/(admin)/admin/layout.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AdminLayout;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a09628eb._.js.map