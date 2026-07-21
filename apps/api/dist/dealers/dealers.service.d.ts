import { PrismaService } from '../prisma/prisma.service';
import type { ResolvedUser } from '../auth/auth.service';
import type { CreateDealerInput, UpdateDealerInput } from '@car-marketplace/shared-types';
export declare class DealersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private withVerifiedAvgRating;
    findAllForOwner(ownerId: string): import("@car-marketplace/database").Prisma.PrismaPromise<{
        id: string;
        email: string;
        name: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        description: string | null;
        logoUrl: string | null;
        archived: boolean;
        avgRating: number | null;
        reviewCount: number;
        ownerId: string | null;
    }[]>;
    findOneForOwner(id: string, ownerId: string): Promise<{
        reviews: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            carId: string | null;
            dealerId: string | null;
            rating: number;
            comment: string | null;
        }[];
        owner: {
            id: string;
            clerkUserId: string;
            email: string;
            name: string | null;
            imageUrl: string | null;
            phone: string | null;
            role: import("@car-marketplace/database").$Enums.UserRole;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        workingHours: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            dayOfWeek: import("@car-marketplace/database").$Enums.DayOfWeek;
            isOpen: boolean;
            openTime: number;
            closeTime: number;
            dealerId: string;
        }[];
    } & {
        id: string;
        email: string;
        name: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        description: string | null;
        logoUrl: string | null;
        archived: boolean;
        avgRating: number | null;
        reviewCount: number;
        ownerId: string | null;
    } & {
        verifiedAvgRating: number;
    }>;
    toggleArchive(id: string, ownerId: string, isArchived: boolean): Promise<{
        id: string;
        email: string;
        name: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        description: string | null;
        logoUrl: string | null;
        archived: boolean;
        avgRating: number | null;
        reviewCount: number;
        ownerId: string | null;
    }>;
    remove(id: string, ownerId: string): Promise<void>;
    create(owner: ResolvedUser, input: CreateDealerInput): Promise<{
        owner: {
            id: string;
            clerkUserId: string;
            email: string;
            name: string | null;
            imageUrl: string | null;
            phone: string | null;
            role: import("@car-marketplace/database").$Enums.UserRole;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: string;
        email: string;
        name: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        description: string | null;
        logoUrl: string | null;
        archived: boolean;
        avgRating: number | null;
        reviewCount: number;
        ownerId: string | null;
    }>;
    update(id: string, ownerId: string, input: UpdateDealerInput): Promise<{
        owner: {
            id: string;
            clerkUserId: string;
            email: string;
            name: string | null;
            imageUrl: string | null;
            phone: string | null;
            role: import("@car-marketplace/database").$Enums.UserRole;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        workingHours: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            dayOfWeek: import("@car-marketplace/database").$Enums.DayOfWeek;
            isOpen: boolean;
            openTime: number;
            closeTime: number;
            dealerId: string;
        }[];
    } & {
        id: string;
        email: string;
        name: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        description: string | null;
        logoUrl: string | null;
        archived: boolean;
        avgRating: number | null;
        reviewCount: number;
        ownerId: string | null;
    }>;
}
