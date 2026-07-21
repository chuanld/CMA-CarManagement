import { PrismaService } from '../prisma/prisma.service';
import type { UserRole } from '@car-marketplace/database';
export interface ResolvedUser {
    id: string;
    clerkUserId: string;
    name: string | null;
    email: string;
    phone: string | null;
    imageUrl: string | null;
    role: UserRole;
}
export interface ClerkIdentity {
    clerkUserId: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    imageUrl?: string | null;
}
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    resolveCurrentUser(identity: ClerkIdentity): Promise<ResolvedUser>;
}
