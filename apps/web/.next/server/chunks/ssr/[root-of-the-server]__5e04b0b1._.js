module.exports = [
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:os [external] (node:os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}),
"[externals]/node:tty [external] (node:tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:tty", () => require("node:tty"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:child_process [external] (node:child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:child_process", () => require("node:child_process"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$19$2e$3_prism_1d040ab5215f59f0e27ddee7f0cf082e$2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/default.js [app-rsc] (ecmascript)");
;
;
const db = globalThis.prisma ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$19$2e$3_prism_1d040ab5215f59f0e27ddee7f0cf082e$2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalThis.prisma = db;
}),
"[project]/apps/web/lib/prisma.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <locals>");
;
}),
"[project]/apps/web/lib/checkUser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkUser",
    ()=>checkUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <locals>");
;
;
const checkUser = async ()=>{
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["currentUser"])();
    if (!user) {
        return null;
    }
    try {
        const loggedInUser = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.findUnique({
            where: {
                clerkUserId: user.id
            }
        });
        if (loggedInUser) {
            return loggedInUser;
        }
        const name = `${user.firstName} ${user.lastName}`;
        const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.create({
            data: {
                clerkUserId: user.id,
                name,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress
            }
        });
        return newUser;
    } catch (error) {
        console.log(error.message);
    }
};
}),
"[project]/apps/web/lib/getOrderUser.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"008f7ab740e40ddfb234d50c5acbea1dfcaea484c2":"getOrCreateUser"},"",""] */ __turbopack_context__.s([
    "getOrCreateUser",
    ()=>getOrCreateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$checkUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/checkUser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getOrCreateUser() {
    // Chạy server-side, tạo user nếu chưa tồn tại
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$checkUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkUser"])();
    return user;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getOrCreateUser
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrCreateUser, "008f7ab740e40ddfb234d50c5acbea1dfcaea484c2", null);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$19$2e$3_prism_1d040ab5215f59f0e27ddee7f0cf082e$2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+client@6.19.3_prism_1d040ab5215f59f0e27ddee7f0cf082e/node_modules/@prisma/client/default.js [app-rsc] (ecmascript)");
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
    const parsedDayOfWeek = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$19$2e$3_prism_1d040ab5215f59f0e27ddee7f0cf082e$2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DayOfWeek"][workingHour.dayOfWeek];
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
        price: purchase.price instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$19$2e$3_prism_1d040ab5215f59f0e27ddee7f0cf082e$2f$node_modules$2f40$prisma$2f$client$2f$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Prisma"].Decimal ? Number(purchase.price) : purchase.price,
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
"[project]/apps/web/actions/home.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401069f31be1ae2375914ea61738c495d089849c19":"getFeaturedCars","40e1f3f63454781840cf3b0fc73a546e9b511eb3cb":"processImageSearch"},"",""] */ __turbopack_context__.s([
    "getFeaturedCars",
    ()=>getFeaturedCars,
    "processImageSearch",
    ()=>processImageSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
// import { aj } from "@/lib/arcjet";
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/helper.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <locals>");
// import { request } from "@arcjet/next";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$google$2b$generative$2d$ai$40$0$2e$24$2e$1$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@google+generative-ai@0.24.1/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function fileToBase64(file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    return buffer.toString("base64");
}
async function getFeaturedCars(limit = 3) {
    try {
        const cars = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].car.findMany({
            where: {
                featured: true
            },
            take: limit,
            orderBy: {
                createdAt: "desc"
            },
            include: {
                saleInfo: true,
                rentInfo: true
            }
        });
        return cars.map((car)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeCarData"])(car));
    } catch (err) {
        console.error(err instanceof Error ? err.message : "Unexpected error");
        return {
            success: false,
            error: err instanceof Error ? err : new Error(String(err))
        };
    }
}
async function processImageSearch(file) {
    try {
        //For arcjet rate limiting
        // const req = await request();
        // const decision = await aj.protect(req, { requested: 1 });
        // if (decision.isDenied()) {
        //   if (decision.reason.isRateLimit()) {
        //     const { remaining, reset } = decision.reason;
        //     console.error({
        //       code: "RATE_LIMIT_EXCEEDED",
        //       details: {
        //         remaining,
        //         resetInSeconds: reset,
        //       },
        //     });
        //     throw new Error("Too Many Requests");
        //   }
        //   throw new Error("Request blocked");
        // }
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("Missing GEMINI_API_KEY");
        }
        const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$google$2b$generative$2d$ai$40$0$2e$24$2e$1$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash"
        });
        const base64Image = await fileToBase64(file);
        const imagePart = {
            inlineData: {
                data: base64Image,
                mimeType: file.type
            }
        };
        const prompt = `
      Analyze this car image and extract the following information for a search query:
      1. Make (manufacturer)
      2. Body type (SUV, Sedan, Hatchback, etc.)
      3. Color

      Format your response as a clean JSON object with these fields:
      {
        "make": "",
        "bodyType": "",
        "color": "",
        "confidence": 0.0
      }

      For confidence, provide a value between 0 and 1 representing how confident you are in your overall identification.
      Only respond with the JSON object, nothing else.
    `;
        // Get response from Gemini
        const result = await model.generateContent([
            imagePart,
            prompt
        ]);
        const response = await result.response;
        const text = response.text();
        const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
        let retries = 3;
        while(0 < retries){
            try {
                const carDetails = JSON.parse(cleanedText);
                return {
                    success: true,
                    data: carDetails
                };
            } catch (err) {
                console.error("Error parsing AI response:", err);
                if (retries && err.message) {
                    retries--;
                    await new Promise((res)=>setTimeout(res, 2000));
                } else {
                    return {
                        success: false,
                        error: "Error parsing AI response: " + err.message
                    };
                }
            }
        }
    } catch (err) {
        console.error(err instanceof Error ? err.message : "Unexpected error");
        return {
            success: false,
            error: err instanceof Error ? err : new Error(String(err))
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getFeaturedCars,
    processImageSearch
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFeaturedCars, "401069f31be1ae2375914ea61738c495d089849c19", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(processImageSearch, "40e1f3f63454781840cf3b0fc73a546e9b511eb3cb", null);
}),
"[project]/apps/web/actions/car-listing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"002b091e08fec0075bf3a1e1d4d2d66c39ed5b4334":"getCarFilters","00583110591db7fc8007bae14570715051479f7016":"getSavedCars","4004d922b0f430595c2091a7d5b2ddfeab63ab5a58":"getCars","404f6a6ae9aa204db4be26b3540ba07dbddab8f869":"toggleSavedCar","40657e4ca06eac6b8b27854bd2a70ba98a4a0653be":"getCarById"},"",""] */ __turbopack_context__.s([
    "getCarById",
    ()=>getCarById,
    "getCarFilters",
    ()=>getCarFilters,
    "getCars",
    ()=>getCars,
    "getSavedCars",
    ()=>getSavedCars,
    "toggleSavedCar",
    ()=>toggleSavedCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/prisma.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.39.6_next@1_e4f340dc9b8ea70227def0df2f5abc5c/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/helper.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function getCarFilters() {
    try {
        const availableCars = {
            where: {
                status: "AVAILABLE"
            }
        };
        const makes = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].car.findMany({
            ...availableCars,
            distinct: [
                "make"
            ],
            select: {
                make: true
            },
            orderBy: {
                make: "asc"
            }
        });
        const bodyTypes = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].car.findMany({
            ...availableCars,
            distinct: [
                "bodyType"
            ],
            select: {
                bodyType: true
            },
            orderBy: {
                bodyType: "asc"
            }
        });
        const fuelTypes = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].car.findMany({
            ...availableCars,
            distinct: [
                "fuelType"
            ],
            select: {
                fuelType: true
            },
            orderBy: {
                fuelType: "asc"
            }
        });
        const transmissions = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].car.findMany({
            ...availableCars,
            distinct: [
                "transmission"
            ],
            select: {
                transmission: true
            },
            orderBy: {
                transmission: "asc"
            }
        });
        const priceRanges = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].saleInfo.aggregate({
            where: {
                status: "AVAILABLE"
            },
            _min: {
                price: true
            },
            _max: {
                price: true
            }
        });
        return {
            success: true,
            data: {
                makes: makes.map((m)=>m.make),
                bodyTypes: bodyTypes.map((b)=>b.bodyType),
                fuelTypes: fuelTypes.map((f)=>f.fuelType),
                transmissions: transmissions.map((t)=>t.transmission),
                priceRanges: {
                    min: priceRanges._min.price ? parseFloat(priceRanges._min.price.toString()) : 0,
                    max: priceRanges._max.price ? parseFloat(priceRanges._max.price.toString()) : 3000000
                }
            }
        };
    } catch (err) {
        console.error(err);
        return {
            success: false,
            error: err
        };
    }
}
async function getCars({ search = "", make = "", bodyType = "", fuelType = "", transmission = "", minPrice = 0, maxPrice = 1000000000, sortBy = "newest", page = 1, limit = 10 }) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        const dbUser = userId ? await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            }
        }) : null;
        const where = {
            status: "AVAILABLE",
            OR: search ? [
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
                },
                {
                    description: {
                        contains: search,
                        mode: "insensitive"
                    }
                }
            ] : undefined
        };
        if (make) where.make = {
            equals: make,
            mode: "insensitive"
        };
        if (bodyType) where.bodyType = {
            equals: bodyType,
            mode: "insensitive"
        };
        if (fuelType) where.fuelType = {
            equals: fuelType,
            mode: "insensitive"
        };
        if (transmission) where.transmission = {
            equals: transmission,
            mode: "insensitive"
        };
        const priceFilter = {
            gte: minPrice || 0,
            lte: maxPrice || 1000000000
        };
        const skip = (page - 1) * limit;
        let orderBy = {};
        switch(sortBy){
            case "priceAsc":
                orderBy = {
                    saleInfo: {
                        price: "asc"
                    }
                };
                break;
            case "priceDesc":
                orderBy = {
                    saleInfo: {
                        price: "desc"
                    }
                };
                break;
            case "oldest":
                orderBy = {
                    createdAt: "asc"
                };
                break;
            case "newest":
            default:
                orderBy = {
                    createdAt: "desc"
                };
                break;
        }
        const total = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].car.count({
            where
        });
        const cars = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].car.findMany({
            where,
            orderBy,
            skip,
            take: limit,
            include: {
                saleInfo: true,
                rentInfo: true
            }
        });
        let wishlisted = new Set();
        if (dbUser) {
            const saved = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].userSavedCar.findMany({
                where: {
                    userId: dbUser.id
                },
                select: {
                    carId: true
                }
            });
            wishlisted = new Set(saved.map((s)=>s.carId));
        }
        const serialized = cars.map((car)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeCarData"])(car, wishlisted.has(car.id)));
        return {
            success: true,
            data: serialized,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        };
    } catch (err) {
        console.error(err);
        return {
            success: false,
            error: err
        };
    }
}
async function toggleSavedCar(carId) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) throw new Error("Unauthorized");
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            }
        });
        if (!user) throw new Error("User not found");
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].userSavedCar.findUnique({
            where: {
                userId_carId: {
                    userId: user.id,
                    carId
                }
            }
        });
        if (existing) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].userSavedCar.delete({
                where: {
                    userId_carId: {
                        userId: user.id,
                        carId
                    }
                }
            });
            return {
                success: true,
                saved: false,
                message: "Removed from favorites"
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].userSavedCar.create({
            data: {
                userId: user.id,
                carId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/saved-cars");
        return {
            success: true,
            saved: true,
            message: "Added to favorites"
        };
    } catch (err) {
        console.error(err);
        return {
            success: false,
            error: err
        };
    }
}
async function getSavedCars() {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        if (!userId) throw new Error("Unauthorized");
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            }
        });
        if (!user) throw new Error("User not found");
        const savedCars = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].userSavedCar.findMany({
            where: {
                userId: user.id
            },
            include: {
                car: {
                    include: {
                        saleInfo: true
                    }
                }
            },
            orderBy: {
                savedAt: "desc"
            }
        });
        const serialized = savedCars.map((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeCarData"])(s.car));
        return {
            success: true,
            data: serialized
        };
    } catch (err) {
        console.error(err);
        return {
            success: false,
            error: err
        };
    }
}
async function getCarById(carId) {
    try {
        const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$39$2e$6_next$40$1_e4f340dc9b8ea70227def0df2f5abc5c$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
        const dbUser = userId ? await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.findUnique({
            where: {
                clerkUserId: userId
            }
        }) : null;
        const now = new Date();
        const car = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].car.findUnique({
            where: {
                id: carId
            },
            include: {
                dealer: {
                    include: {
                        workingHours: true
                    }
                },
                saleInfo: true,
                rentInfo: true,
                reviews: {
                    include: {
                        user: true
                    },
                    orderBy: {
                        createdAt: "desc"
                    }
                },
                bookings: {
                    where: {
                        status: {
                            in: [
                                "PENDING",
                                "CONFIRMED"
                            ]
                        },
                        endTime: {
                            gte: now
                        }
                    },
                    select: {
                        id: true,
                        bookingDate: true,
                        startTime: true,
                        endTime: true,
                        bookingType: true,
                        status: true,
                        createdAt: true,
                        updatedAt: true,
                        notes: true,
                        totalPrice: true,
                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true
                            }
                        }
                    },
                    orderBy: [
                        {
                            bookingDate: "asc"
                        },
                        {
                            startTime: "asc"
                        }
                    ]
                }
            }
        });
        if (!car) return {
            success: false,
            error: new Error("Car not found")
        };
        const wishlisted = dbUser ? !!await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].userSavedCar.findUnique({
            where: {
                userId_carId: {
                    userId: dbUser.id,
                    carId
                }
            }
        }) : false;
        const dealer = car.dealer ? {
            ...car.dealer,
            createdAt: car.dealer.createdAt.toISOString(),
            updatedAt: car.dealer.updatedAt.toISOString(),
            workingHours: car.dealer.workingHours.map((wh)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeWorkingHours"])(wh))
        } : null;
        const reviews = car.reviews.map((r)=>({
                id: r.id,
                rating: r.rating,
                comment: r.comment,
                createdAt: r.createdAt.toISOString(),
                updatedAt: r.updatedAt.toISOString(),
                user: {
                    name: r.user?.name ?? "Anonymous",
                    email: r.user?.email ?? "",
                    phone: r.user?.phone ?? ""
                }
            }));
        const testDriveBookings = car.bookings.filter((book)=>book.bookingType === "TEST_DRIVE").map((b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeBooking"])(b));
        const rentalBookings = car.bookings.filter((book)=>book.bookingType === "RENTAL").map((b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeBooking"])(b));
        const serializedCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$helper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeCarData"])(car, wishlisted);
        return {
            success: true,
            data: {
                ...serializedCar,
                dealer,
                reviews,
                upcomingBookings: {
                    testDrives: testDriveBookings,
                    rentals: rentalBookings
                }
            }
        };
    } catch (err) {
        console.error(err);
        return {
            success: false,
            error: err
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCarFilters,
    getCars,
    toggleSavedCar,
    getSavedCars,
    getCarById
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCarFilters, "002b091e08fec0075bf3a1e1d4d2d66c39ed5b4334", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCars, "4004d922b0f430595c2091a7d5b2ddfeab63ab5a58", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleSavedCar, "404f6a6ae9aa204db4be26b3540ba07dbddab8f869", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSavedCars, "00583110591db7fc8007bae14570715051479f7016", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCarById, "40657e4ca06eac6b8b27854bd2a70ba98a4a0653be", null);
}),
"[project]/apps/web/app/favicon.ico.mjs { IMAGE => \"[project]/apps/web/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/app/favicon.ico.mjs { IMAGE => \"[project]/apps/web/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/apps/web/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/web/components/homepage.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/apps/web/components/homepage.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/components/homepage.tsx <module evaluation>", "default");
}),
"[project]/apps/web/components/homepage.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/apps/web/components/homepage.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/web/components/homepage.tsx", "default");
}),
"[project]/apps/web/components/homepage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$homepage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/web/components/homepage.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$homepage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/apps/web/components/homepage.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$homepage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/apps/web/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$actions$2f$home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/actions/home.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$homepage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/homepage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/header.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function Home() {
    const featuredCars = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$actions$2f$home$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeaturedCars"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-background text-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$homepage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    featuredCars: featuredCars
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/page.tsx",
                    lineNumber: 24,
                    columnNumber: 68
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5e04b0b1._.js.map