import { Injectable } from '@nestjs/common';
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

const USER_SELECT = {
  id: true,
  clerkUserId: true,
  name: true,
  email: true,
  phone: true,
  imageUrl: true,
  role: true,
} as const;

/**
 * Single source of truth for "resolve the local User row for a Clerk identity",
 * consolidating what used to be three separate implementations in the Next.js
 * app: lib/checkUser.js, and actions/user.ts's getCurrentUser/currentUser.
 * JIT-provisions the local User row on first sign-in, same as checkUser.js did.
 */
@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async resolveCurrentUser(identity: ClerkIdentity): Promise<ResolvedUser> {
    const existing = await this.prisma.client.user.findUnique({
      where: { clerkUserId: identity.clerkUserId },
      select: USER_SELECT,
    });

    if (existing) {
      return existing;
    }

    const name =
      [identity.firstName, identity.lastName].filter(Boolean).join(' ') || null;

    return this.prisma.client.user.create({
      data: {
        clerkUserId: identity.clerkUserId,
        name,
        email: identity.email,
        imageUrl: identity.imageUrl ?? undefined,
      },
      select: USER_SELECT,
    });
  }
}
