import { z } from "zod";
export declare const publicGetCarsQuerySchema: z.ZodObject<{
    search: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    make: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    bodyType: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    fuelType: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    transmission: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    minPrice: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    maxPrice: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    sortBy: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        newest: "newest";
        oldest: "oldest";
        priceAsc: "priceAsc";
        priceDesc: "priceDesc";
    }>>>;
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export type PublicGetCarsQuery = z.infer<typeof publicGetCarsQuerySchema>;
export declare const adminGetCarsInputSchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    pagination: z.ZodOptional<z.ZodObject<{
        page: z.ZodDefault<z.ZodNumber>;
        limit: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
    sortBy: z.ZodDefault<z.ZodEnum<{
        createdAt: "createdAt";
        year: "year";
        price: "price";
        hourlyPrice: "hourlyPrice";
        dailyPrice: "dailyPrice";
    }>>;
    sortOrder: z.ZodDefault<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    filters: z.ZodOptional<z.ZodObject<{
        status: z.ZodOptional<z.ZodEnum<{
            AVAILABLE: "AVAILABLE";
            RESERVED: "RESERVED";
            SOLD: "SOLD";
            RENTED: "RENTED";
            MAINTENANCE: "MAINTENANCE";
            PENDING: "PENDING";
        }>>;
        featured: z.ZodOptional<z.ZodBoolean>;
        bodyType: z.ZodOptional<z.ZodString>;
        fuelType: z.ZodOptional<z.ZodString>;
        transmission: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodString>;
        year: z.ZodOptional<z.ZodNumber>;
        make: z.ZodOptional<z.ZodString>;
        model: z.ZodOptional<z.ZodString>;
        countViews: z.ZodOptional<z.ZodNumber>;
        avgRating: z.ZodOptional<z.ZodNumber>;
        carType: z.ZodOptional<z.ZodEnum<{
            SALE: "SALE";
            RENT: "RENT";
            BOTH: "BOTH";
        }>>;
        minSalePrice: z.ZodOptional<z.ZodNumber>;
        maxSalePrice: z.ZodOptional<z.ZodNumber>;
        minRentHourlyPrice: z.ZodOptional<z.ZodNumber>;
        maxRentHourlyPrice: z.ZodOptional<z.ZodNumber>;
        minRentDailyPrice: z.ZodOptional<z.ZodNumber>;
        maxRentDailyPrice: z.ZodOptional<z.ZodNumber>;
        minDeposit: z.ZodOptional<z.ZodNumber>;
        maxDeposit: z.ZodOptional<z.ZodNumber>;
        negotiable: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AdminGetCarsInput = z.infer<typeof adminGetCarsInputSchema>;
export declare const addCarSchema: z.ZodObject<{
    carData: z.ZodObject<{
        make: z.ZodString;
        model: z.ZodString;
        year: z.ZodCoercedNumber<unknown>;
        mileage: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        color: z.ZodOptional<z.ZodString>;
        fuelType: z.ZodOptional<z.ZodString>;
        transmission: z.ZodOptional<z.ZodString>;
        bodyType: z.ZodOptional<z.ZodString>;
        seats: z.ZodOptional<z.ZodNullable<z.ZodCoercedNumber<unknown>>>;
        description: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodString>;
        featured: z.ZodOptional<z.ZodBoolean>;
        carType: z.ZodOptional<z.ZodEnum<{
            SALE: "SALE";
            RENT: "RENT";
            BOTH: "BOTH";
        }>>;
        salePrice: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        negotiable: z.ZodOptional<z.ZodBoolean>;
        saleStatus: z.ZodOptional<z.ZodString>;
        rentHourlyPrice: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        rentDailyPrice: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        deposit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        available: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
    images: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type AddCarInput = z.infer<typeof addCarSchema>;
export declare const updateCarSchema: z.ZodObject<{
    carData: z.ZodObject<{
        make: z.ZodOptional<z.ZodString>;
        model: z.ZodOptional<z.ZodString>;
        year: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        mileage: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        fuelType: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        transmission: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        bodyType: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        seats: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodCoercedNumber<unknown>>>>;
        description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        status: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        featured: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        carType: z.ZodOptional<z.ZodOptional<z.ZodEnum<{
            SALE: "SALE";
            RENT: "RENT";
            BOTH: "BOTH";
        }>>>;
        salePrice: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        negotiable: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        saleStatus: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        rentHourlyPrice: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        rentDailyPrice: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        deposit: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
        available: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        images: z.ZodOptional<z.ZodArray<z.ZodString>>;
        saleInfo: z.ZodOptional<z.ZodObject<{
            price: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
            negotiable: z.ZodOptional<z.ZodBoolean>;
            status: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        rentInfo: z.ZodOptional<z.ZodObject<{
            hourlyPrice: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
            dailyPrice: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
            deposit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    images: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type UpdateCarInput = z.infer<typeof updateCarSchema>;
export declare const updateCarStatusSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        RESERVED: "RESERVED";
        SOLD: "SOLD";
        RENTED: "RENTED";
        MAINTENANCE: "MAINTENANCE";
        PENDING: "PENDING";
    }>>;
    featured: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateCarStatusInput = z.infer<typeof updateCarStatusSchema>;
export declare const createRentalSchema: z.ZodObject<{
    carId: z.ZodString;
    startTime: z.ZodString;
    endTime: z.ZodString;
    notes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateRentalInput = z.infer<typeof createRentalSchema>;
export declare const paginationQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
