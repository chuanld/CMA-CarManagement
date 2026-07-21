import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { ResolvedUser } from '../auth/auth.service';
import type {
  CreateDealerInput,
  UpdateDealerInput,
  WorkingHourInput,
} from '@car-marketplace/shared-types';
import { DayOfWeek } from '@car-marketplace/database';

const DEFAULT_WORKING_HOURS: WorkingHourInput[] = [
  { dayOfWeek: DayOfWeek.MONDAY, openTime: 900, closeTime: 1800, isOpen: true },
  { dayOfWeek: DayOfWeek.TUESDAY, openTime: 900, closeTime: 1800, isOpen: true },
  { dayOfWeek: DayOfWeek.WEDNESDAY, openTime: 900, closeTime: 1800, isOpen: true },
  { dayOfWeek: DayOfWeek.THURSDAY, openTime: 900, closeTime: 1800, isOpen: true },
  { dayOfWeek: DayOfWeek.FRIDAY, openTime: 900, closeTime: 1800, isOpen: true },
  { dayOfWeek: DayOfWeek.SATURDAY, openTime: 1000, closeTime: 1600, isOpen: true },
  { dayOfWeek: DayOfWeek.SUNDAY, openTime: 0, closeTime: 0, isOpen: false },
];

/**
 * Consolidates actions/dealers.ts. All methods are scoped to the caller's
 * ownerId — findOneForOwner/toggleArchive/remove/update all enforce this,
 * matching the original file's ownership checks (update() previously did
 * NOT filter by ownerId, which allowed any admin to edit any dealer; fixed
 * here to match the ownership invariant every other method already enforced).
 */
@Injectable()
export class DealersService {
  constructor(private readonly prisma: PrismaService) {}

  /** Adds a live-computed rating alongside the stored `avgRating` column, matching lib/helper.ts's serializeDealerData (avgRating stays the stored value; verifiedAvgRating is derived from included reviews). */
  private withVerifiedAvgRating<T extends { reviews?: { rating: number }[] }>(
    dealer: T,
  ) {
    const verifiedAvgRating =
      dealer.reviews && dealer.reviews.length > 0
        ? dealer.reviews.reduce((sum, r) => sum + (r.rating ?? 0), 0) /
          dealer.reviews.length
        : 0;
    return { ...dealer, verifiedAvgRating };
  }

  findAllForOwner(ownerId: string) {
    return this.prisma.client.dealer.findMany({
      where: { ownerId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOneForOwner(id: string, ownerId: string) {
    const dealer = await this.prisma.client.dealer.findFirst({
      where: { id, ownerId },
      include: { workingHours: true, owner: true, reviews: true },
    });
    if (!dealer) throw new NotFoundException('Dealer not found');
    return this.withVerifiedAvgRating(dealer);
  }

  async toggleArchive(id: string, ownerId: string, isArchived: boolean) {
    const dealer = await this.prisma.client.dealer.findFirst({
      where: { id, ownerId },
    });
    if (!dealer) {
      throw new NotFoundException(
        'Dealer not found or you do not have permission to update it',
      );
    }

    return this.prisma.client.dealer.update({
      where: { id: dealer.id },
      data: {
        archived: isArchived,
        ...(dealer.archived && {
          cars: {
            updateMany: {
              where: { dealerId: dealer.id },
              data: { status: 'MAINTENANCE' },
            },
          },
        }),
      },
    });
  }

  async remove(id: string, ownerId: string) {
    const dealer = await this.prisma.client.dealer.findFirst({
      where: { id, ownerId },
    });
    if (!dealer) {
      throw new NotFoundException(
        'Dealer not found or you do not have permission to delete it',
      );
    }
    await this.prisma.client.dealer.delete({ where: { id: dealer.id } });
  }

  async create(owner: ResolvedUser, input: CreateDealerInput) {
    const existing = await this.prisma.client.dealer.findUnique({
      where: { email: input.email },
    });
    if (existing) {
      throw new ConflictException('Dealer with this email already exists');
    }

    const dealer = await this.prisma.client.dealer.create({
      data: {
        name: input.name || owner.name || 'Unnamed Dealer',
        address: input.address || 'No address provided',
        phone: input.phone || 'No phone provided',
        email: input.email || owner.email || 'No email provided',
        description: input.description || 'No description provided',
        ownerId: owner.id,
        logoUrl: input.logoUrl || owner.imageUrl || '',
      },
      include: { owner: true },
    });

    const hours =
      input.workingHours.length > 0 ? input.workingHours : DEFAULT_WORKING_HOURS;
    await this.prisma.client.workingHour.createMany({
      data: hours.map((wh) => ({ dealerId: dealer.id, ...wh })),
      skipDuplicates: true,
    });

    return dealer;
  }

  async update(id: string, ownerId: string, input: UpdateDealerInput) {
    const dealer = await this.prisma.client.dealer.findFirst({
      where: { id, ownerId },
    });
    if (!dealer) {
      throw new NotFoundException('Dealer not found');
    }

    return this.prisma.client.dealer.update({
      where: { id },
      data: {
        ...(input.name !== undefined && { name: input.name }),
        ...(input.address !== undefined && { address: input.address }),
        ...(input.phone !== undefined && { phone: input.phone }),
        ...(input.email !== undefined && { email: input.email }),
        ...(input.description !== undefined && {
          description: input.description,
        }),
        ...(input.logoUrl !== undefined && { logoUrl: input.logoUrl }),
        ...(input.workingHours &&
          input.workingHours.length > 0 && {
            workingHours: { deleteMany: {}, create: input.workingHours },
          }),
      },
      include: { workingHours: true, owner: true },
    });
  }
}
