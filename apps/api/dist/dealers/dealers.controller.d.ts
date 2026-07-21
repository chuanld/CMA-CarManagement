import { type CreateDealerInput, type ToggleDealerArchiveInput, type UpdateDealerInput } from '@car-marketplace/shared-types';
import type { ResolvedUser } from '../auth/auth.service';
import { DealersService } from './dealers.service';
export declare class DealersController {
    private readonly dealersService;
    constructor(dealersService: DealersService);
    findAll(user: ResolvedUser): import("@prisma/client").Prisma.PrismaPromise<{
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
    findOne(id: string, user: ResolvedUser): Promise<{
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
            role: import("@prisma/client").$Enums.UserRole;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        workingHours: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            dayOfWeek: import("@prisma/client").$Enums.DayOfWeek;
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
    create(dto: CreateDealerInput, user: ResolvedUser): Promise<{
        owner: {
            id: string;
            clerkUserId: string;
            email: string;
            name: string | null;
            imageUrl: string | null;
            phone: string | null;
            role: import("@prisma/client").$Enums.UserRole;
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
    update(id: string, dto: UpdateDealerInput, user: ResolvedUser): Promise<{
        owner: {
            id: string;
            clerkUserId: string;
            email: string;
            name: string | null;
            imageUrl: string | null;
            phone: string | null;
            role: import("@prisma/client").$Enums.UserRole;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        workingHours: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            dayOfWeek: import("@prisma/client").$Enums.DayOfWeek;
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
    toggleArchive(id: string, dto: ToggleDealerArchiveInput, user: ResolvedUser): Promise<{
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
    remove(id: string, user: ResolvedUser): Promise<void>;
}
