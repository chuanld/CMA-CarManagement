"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationQuerySchema = exports.createRentalSchema = exports.updateCarStatusSchema = exports.updateCarSchema = exports.addCarSchema = exports.adminGetCarsInputSchema = exports.publicGetCarsQuerySchema = void 0;
const zod_1 = require("zod");
const database_1 = require("@car-marketplace/database");
exports.publicGetCarsQuerySchema = zod_1.z.object({
    search: zod_1.z.string().optional().default(""),
    make: zod_1.z.string().optional().default(""),
    bodyType: zod_1.z.string().optional().default(""),
    fuelType: zod_1.z.string().optional().default(""),
    transmission: zod_1.z.string().optional().default(""),
    minPrice: zod_1.z.coerce.number().optional().default(0),
    maxPrice: zod_1.z.coerce.number().optional().default(1000000000),
    sortBy: zod_1.z
        .enum(["newest", "oldest", "priceAsc", "priceDesc"])
        .optional()
        .default("newest"),
    page: zod_1.z.coerce.number().int().min(1).optional().default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).optional().default(10),
});
exports.adminGetCarsInputSchema = zod_1.z.object({
    search: zod_1.z.string().optional(),
    pagination: zod_1.z
        .object({
        page: zod_1.z.number().int().positive().default(1),
        limit: zod_1.z.number().int().positive().max(100).default(10),
    })
        .optional(),
    sortBy: zod_1.z
        .enum(["createdAt", "year", "price", "hourlyPrice", "dailyPrice"])
        .default("createdAt"),
    sortOrder: zod_1.z.enum(["asc", "desc"]).default("desc"),
    filters: zod_1.z
        .object({
        status: zod_1.z.nativeEnum(database_1.CarStatus).optional(),
        featured: zod_1.z.boolean().optional(),
        bodyType: zod_1.z.string().optional(),
        fuelType: zod_1.z.string().optional(),
        transmission: zod_1.z.string().optional(),
        color: zod_1.z.string().optional(),
        year: zod_1.z.number().int().optional(),
        make: zod_1.z.string().optional(),
        model: zod_1.z.string().optional(),
        countViews: zod_1.z.number().int().optional(),
        avgRating: zod_1.z.number().min(0).max(5).optional(),
        carType: zod_1.z.enum(["SALE", "RENT", "BOTH"]).optional(),
        minSalePrice: zod_1.z.number().optional(),
        maxSalePrice: zod_1.z.number().optional(),
        minRentHourlyPrice: zod_1.z.number().optional(),
        maxRentHourlyPrice: zod_1.z.number().optional(),
        minRentDailyPrice: zod_1.z.number().optional(),
        maxRentDailyPrice: zod_1.z.number().optional(),
        minDeposit: zod_1.z.number().optional(),
        maxDeposit: zod_1.z.number().optional(),
        negotiable: zod_1.z.boolean().optional(),
    })
        .optional(),
});
const addCarDataSchema = zod_1.z.object({
    make: zod_1.z.string().min(1),
    model: zod_1.z.string().min(1),
    year: zod_1.z.coerce.number().int(),
    mileage: zod_1.z.coerce.number().int().optional(),
    color: zod_1.z.string().optional(),
    fuelType: zod_1.z.string().optional(),
    transmission: zod_1.z.string().optional(),
    bodyType: zod_1.z.string().optional(),
    seats: zod_1.z.coerce.number().int().nullable().optional(),
    description: zod_1.z.string().optional(),
    status: zod_1.z.string().optional(),
    featured: zod_1.z.boolean().optional(),
    carType: zod_1.z.enum(["SALE", "RENT", "BOTH"]).optional(),
    salePrice: zod_1.z.coerce.number().optional(),
    negotiable: zod_1.z.boolean().optional(),
    saleStatus: zod_1.z.string().optional(),
    rentHourlyPrice: zod_1.z.coerce.number().optional(),
    rentDailyPrice: zod_1.z.coerce.number().optional(),
    deposit: zod_1.z.coerce.number().optional(),
    available: zod_1.z.boolean().optional(),
});
exports.addCarSchema = zod_1.z.object({
    carData: addCarDataSchema,
    images: zod_1.z.array(zod_1.z.string()),
});
const updateCarDataSchema = addCarDataSchema.partial().extend({
    images: zod_1.z.array(zod_1.z.string()).optional(),
    saleInfo: zod_1.z
        .object({
        price: zod_1.z.coerce.number().optional(),
        negotiable: zod_1.z.boolean().optional(),
        status: zod_1.z.string().optional(),
    })
        .optional(),
    rentInfo: zod_1.z
        .object({
        hourlyPrice: zod_1.z.coerce.number().optional(),
        dailyPrice: zod_1.z.coerce.number().optional(),
        deposit: zod_1.z.coerce.number().optional(),
    })
        .optional(),
});
exports.updateCarSchema = zod_1.z.object({
    carData: updateCarDataSchema,
    images: zod_1.z.array(zod_1.z.string()),
});
exports.updateCarStatusSchema = zod_1.z.object({
    status: zod_1.z.nativeEnum(database_1.CarStatus).optional(),
    featured: zod_1.z.boolean().optional(),
});
exports.createRentalSchema = zod_1.z.object({
    carId: zod_1.z.string(),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string(),
    notes: zod_1.z.string().optional(),
});
exports.paginationQuerySchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).optional().default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).optional().default(10),
});
