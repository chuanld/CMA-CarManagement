import { type AddCarInput, type AdminGetCarsInput, type PublicGetCarsQuery, type UpdateCarInput, type UpdateCarStatusInput } from '@car-marketplace/shared-types';
import type { ResolvedUser } from '../auth/auth.service';
import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getFilters(): Promise<{
        makes: string[];
        bodyTypes: string[];
        fuelTypes: string[];
        transmissions: string[];
        priceRanges: {
            min: number;
            max: number;
        };
    }>;
    getSaved(user: ResolvedUser): Promise<{
        id: any;
        make: any;
        model: any;
        year: any;
        mileage: any;
        color: any;
        fuelType: any;
        transmission: any;
        bodyType: any;
        seats: any;
        description: any;
        status: any;
        featured: any;
        images: any;
        dealer: any;
        countViews: any;
        durationView: any;
        avgRating: any;
        reviewCount: any;
        statusChangedAt: any;
        saveBy: any;
        carType: "SALE" | "RENT" | "BOTH";
        saleInfo: {
            id: any;
            carId: any;
            price: number;
            negotiable: any;
            status: any;
            createdAt: any;
            updatedAt: any;
            statusChangedAt: any;
            statusChangedBy: any;
        } | null;
        rentInfo: {
            hourlyPrice: number | null;
            dailyPrice: number | null;
            deposit: number | null;
            available: any;
            statusChangedAt: any;
            statusChangedBy: any;
        } | null;
        price: number;
        createdAt: any;
        updatedAt: any;
        wishlisted: boolean;
    }[]>;
    findAdmin(dto: AdminGetCarsInput): Promise<{
        data: {
            id: any;
            make: any;
            model: any;
            year: any;
            mileage: any;
            color: any;
            fuelType: any;
            transmission: any;
            bodyType: any;
            seats: any;
            description: any;
            status: any;
            featured: any;
            images: any;
            dealer: any;
            countViews: any;
            durationView: any;
            avgRating: any;
            reviewCount: any;
            statusChangedAt: any;
            saveBy: any;
            carType: "SALE" | "RENT" | "BOTH";
            saleInfo: {
                id: any;
                carId: any;
                price: number;
                negotiable: any;
                status: any;
                createdAt: any;
                updatedAt: any;
                statusChangedAt: any;
                statusChangedBy: any;
            } | null;
            rentInfo: {
                hourlyPrice: number | null;
                dailyPrice: number | null;
                deposit: number | null;
                available: any;
                statusChangedAt: any;
                statusChangedBy: any;
            } | null;
            price: number;
            createdAt: any;
            updatedAt: any;
            wishlisted: boolean;
        }[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findAdminById(id: string): Promise<{
        id: any;
        make: any;
        model: any;
        year: any;
        mileage: any;
        color: any;
        fuelType: any;
        transmission: any;
        bodyType: any;
        seats: any;
        description: any;
        status: any;
        featured: any;
        images: any;
        dealer: any;
        countViews: any;
        durationView: any;
        avgRating: any;
        reviewCount: any;
        statusChangedAt: any;
        saveBy: any;
        carType: "SALE" | "RENT" | "BOTH";
        saleInfo: {
            id: any;
            carId: any;
            price: number;
            negotiable: any;
            status: any;
            createdAt: any;
            updatedAt: any;
            statusChangedAt: any;
            statusChangedBy: any;
        } | null;
        rentInfo: {
            hourlyPrice: number | null;
            dailyPrice: number | null;
            deposit: number | null;
            available: any;
            statusChangedAt: any;
            statusChangedBy: any;
        } | null;
        price: number;
        createdAt: any;
        updatedAt: any;
        wishlisted: boolean;
    }>;
    updateAdmin(id: string, dto: UpdateCarInput, user: ResolvedUser): Promise<{
        carId: string;
    }>;
    findPublicById(id: string, user?: ResolvedUser): Promise<{
        dealer: {
            createdAt: string;
            updatedAt: string;
            workingHours: ({
                id: any;
                dayOfWeek: any;
                isOpen: any;
                openTime: any;
                closeTime: any;
            } | null)[];
            id: string;
            email: string;
            name: string;
            phone: string;
            address: string;
            description: string | null;
            logoUrl: string | null;
            archived: boolean;
            avgRating: number | null;
            reviewCount: number;
            ownerId: string | null;
        } | null;
        reviews: {
            id: string;
            rating: number;
            comment: string | null;
            createdAt: string;
            updatedAt: string;
            user: {
                name: string;
                email: string;
                phone: string;
            };
        }[];
        upcomingBookings: {
            testDrives: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                user: {
                    id: string;
                    email: string;
                    name: string | null;
                };
                status: import("@prisma/client").$Enums.BookingStatus;
                bookingType: import("@prisma/client").$Enums.BookingType;
                bookingDate: Date;
                startTime: Date;
                endTime: Date;
                totalPrice: import("@prisma/client/runtime/library").Decimal | null;
                notes: string | null;
            }[];
            rentals: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                user: {
                    id: string;
                    email: string;
                    name: string | null;
                };
                status: import("@prisma/client").$Enums.BookingStatus;
                bookingType: import("@prisma/client").$Enums.BookingType;
                bookingDate: Date;
                startTime: Date;
                endTime: Date;
                totalPrice: import("@prisma/client/runtime/library").Decimal | null;
                notes: string | null;
            }[];
        };
        id: any;
        make: any;
        model: any;
        year: any;
        mileage: any;
        color: any;
        fuelType: any;
        transmission: any;
        bodyType: any;
        seats: any;
        description: any;
        status: any;
        featured: any;
        images: any;
        countViews: any;
        durationView: any;
        avgRating: any;
        reviewCount: any;
        statusChangedAt: any;
        saveBy: any;
        carType: "SALE" | "RENT" | "BOTH";
        saleInfo: {
            id: any;
            carId: any;
            price: number;
            negotiable: any;
            status: any;
            createdAt: any;
            updatedAt: any;
            statusChangedAt: any;
            statusChangedBy: any;
        } | null;
        rentInfo: {
            hourlyPrice: number | null;
            dailyPrice: number | null;
            deposit: number | null;
            available: any;
            statusChangedAt: any;
            statusChangedBy: any;
        } | null;
        price: number;
        createdAt: any;
        updatedAt: any;
        wishlisted: boolean;
    }>;
    findPublic(query: PublicGetCarsQuery, user?: ResolvedUser): Promise<{
        data: {
            id: any;
            make: any;
            model: any;
            year: any;
            mileage: any;
            color: any;
            fuelType: any;
            transmission: any;
            bodyType: any;
            seats: any;
            description: any;
            status: any;
            featured: any;
            images: any;
            dealer: any;
            countViews: any;
            durationView: any;
            avgRating: any;
            reviewCount: any;
            statusChangedAt: any;
            saveBy: any;
            carType: "SALE" | "RENT" | "BOTH";
            saleInfo: {
                id: any;
                carId: any;
                price: number;
                negotiable: any;
                status: any;
                createdAt: any;
                updatedAt: any;
                statusChangedAt: any;
                statusChangedBy: any;
            } | null;
            rentInfo: {
                hourlyPrice: number | null;
                dailyPrice: number | null;
                deposit: number | null;
                available: any;
                statusChangedAt: any;
                statusChangedBy: any;
            } | null;
            price: number;
            createdAt: any;
            updatedAt: any;
            wishlisted: boolean;
        }[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    create(dto: AddCarInput, user: ResolvedUser): Promise<{
        carId: string;
    }>;
    toggleSaved(id: string, user: ResolvedUser): Promise<{
        saved: boolean;
        message: string;
    }>;
    updateStatus(id: string, dto: UpdateCarStatusInput): Promise<void>;
    remove(id: string): Promise<void>;
}
