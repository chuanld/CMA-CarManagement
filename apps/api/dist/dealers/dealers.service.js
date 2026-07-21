"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const database_1 = require("@car-marketplace/database");
const DEFAULT_WORKING_HOURS = [
    { dayOfWeek: database_1.DayOfWeek.MONDAY, openTime: 900, closeTime: 1800, isOpen: true },
    { dayOfWeek: database_1.DayOfWeek.TUESDAY, openTime: 900, closeTime: 1800, isOpen: true },
    { dayOfWeek: database_1.DayOfWeek.WEDNESDAY, openTime: 900, closeTime: 1800, isOpen: true },
    { dayOfWeek: database_1.DayOfWeek.THURSDAY, openTime: 900, closeTime: 1800, isOpen: true },
    { dayOfWeek: database_1.DayOfWeek.FRIDAY, openTime: 900, closeTime: 1800, isOpen: true },
    { dayOfWeek: database_1.DayOfWeek.SATURDAY, openTime: 1000, closeTime: 1600, isOpen: true },
    { dayOfWeek: database_1.DayOfWeek.SUNDAY, openTime: 0, closeTime: 0, isOpen: false },
];
let DealersService = class DealersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    withVerifiedAvgRating(dealer) {
        const verifiedAvgRating = dealer.reviews && dealer.reviews.length > 0
            ? dealer.reviews.reduce((sum, r) => sum + (r.rating ?? 0), 0) /
                dealer.reviews.length
            : 0;
        return { ...dealer, verifiedAvgRating };
    }
    findAllForOwner(ownerId) {
        return this.prisma.client.dealer.findMany({
            where: { ownerId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOneForOwner(id, ownerId) {
        const dealer = await this.prisma.client.dealer.findFirst({
            where: { id, ownerId },
            include: { workingHours: true, owner: true, reviews: true },
        });
        if (!dealer)
            throw new common_1.NotFoundException('Dealer not found');
        return this.withVerifiedAvgRating(dealer);
    }
    async toggleArchive(id, ownerId, isArchived) {
        const dealer = await this.prisma.client.dealer.findFirst({
            where: { id, ownerId },
        });
        if (!dealer) {
            throw new common_1.NotFoundException('Dealer not found or you do not have permission to update it');
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
    async remove(id, ownerId) {
        const dealer = await this.prisma.client.dealer.findFirst({
            where: { id, ownerId },
        });
        if (!dealer) {
            throw new common_1.NotFoundException('Dealer not found or you do not have permission to delete it');
        }
        await this.prisma.client.dealer.delete({ where: { id: dealer.id } });
    }
    async create(owner, input) {
        const existing = await this.prisma.client.dealer.findUnique({
            where: { email: input.email },
        });
        if (existing) {
            throw new common_1.ConflictException('Dealer with this email already exists');
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
        const hours = input.workingHours.length > 0 ? input.workingHours : DEFAULT_WORKING_HOURS;
        await this.prisma.client.workingHour.createMany({
            data: hours.map((wh) => ({ dealerId: dealer.id, ...wh })),
            skipDuplicates: true,
        });
        return dealer;
    }
    async update(id, ownerId, input) {
        const dealer = await this.prisma.client.dealer.findFirst({
            where: { id, ownerId },
        });
        if (!dealer) {
            throw new common_1.NotFoundException('Dealer not found');
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
};
exports.DealersService = DealersService;
exports.DealersService = DealersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DealersService);
//# sourceMappingURL=dealers.service.js.map