import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
import type { ResolvedUser } from '../auth/auth.service';
import { serializeCarData, serializeDealerData, serializeWorkingHours } from '../common/serializers';
import type {
  AddCarInput,
  AdminGetCarsInput,
  CreateRentalInput,
  PublicGetCarsQuery,
  UpdateCarInput,
  UpdateCarStatusInput,
} from '@car-marketplace/shared-types';

@Injectable()
export class CarsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly supabase: SupabaseService,
  ) {}

  async getFilters() {
    const availableCars = { where: { status: 'AVAILABLE' as const } };

    const [makes, bodyTypes, fuelTypes, transmissions, priceRanges] = await Promise.all([
      this.prisma.client.car.findMany({
        ...availableCars,
        distinct: ['make'],
        select: { make: true },
        orderBy: { make: 'asc' },
      }),
      this.prisma.client.car.findMany({
        ...availableCars,
        distinct: ['bodyType'],
        select: { bodyType: true },
        orderBy: { bodyType: 'asc' },
      }),
      this.prisma.client.car.findMany({
        ...availableCars,
        distinct: ['fuelType'],
        select: { fuelType: true },
        orderBy: { fuelType: 'asc' },
      }),
      this.prisma.client.car.findMany({
        ...availableCars,
        distinct: ['transmission'],
        select: { transmission: true },
        orderBy: { transmission: 'asc' },
      }),
      this.prisma.client.saleInfo.aggregate({
        where: { status: 'AVAILABLE' },
        _min: { price: true },
        _max: { price: true },
      }),
    ]);

    return {
      makes: makes.map((m) => m.make),
      bodyTypes: bodyTypes.map((b) => b.bodyType),
      fuelTypes: fuelTypes.map((f) => f.fuelType),
      transmissions: transmissions.map((t) => t.transmission),
      priceRanges: {
        min: priceRanges._min.price ? parseFloat(priceRanges._min.price.toString()) : 0,
        max: priceRanges._max.price ? parseFloat(priceRanges._max.price.toString()) : 3000000,
      },
    };
  }

  async findPublic(query: PublicGetCarsQuery, userId?: string) {
    const { search, make, bodyType, fuelType, transmission, minPrice, maxPrice, sortBy, page, limit } = query;

    const where: any = {
      status: 'AVAILABLE',
      OR: search
        ? [
            { make: { contains: search, mode: 'insensitive' } },
            { model: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ]
        : undefined,
    };
    if (make) where.make = { equals: make, mode: 'insensitive' };
    if (bodyType) where.bodyType = { equals: bodyType, mode: 'insensitive' };
    if (fuelType) where.fuelType = { equals: fuelType, mode: 'insensitive' };
    if (transmission) where.transmission = { equals: transmission, mode: 'insensitive' };

    const skip = (page - 1) * limit;
    let orderBy: any = { createdAt: 'desc' };
    switch (sortBy) {
      case 'priceAsc':
        orderBy = { saleInfo: { price: 'asc' } };
        break;
      case 'priceDesc':
        orderBy = { saleInfo: { price: 'desc' } };
        break;
      case 'oldest':
        orderBy = { createdAt: 'asc' };
        break;
    }

    const [total, cars] = await Promise.all([
      this.prisma.client.car.count({ where }),
      this.prisma.client.car.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: { saleInfo: true, rentInfo: true },
      }),
    ]);

    let wishlisted = new Set<string>();
    if (userId) {
      const saved = await this.prisma.client.userSavedCar.findMany({
        where: { userId },
        select: { carId: true },
      });
      wishlisted = new Set(saved.map((s) => s.carId));
    }

    return {
      data: cars.map((car) => serializeCarData(car, wishlisted.has(car.id))),
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async toggleSaved(carId: string, userId: string) {
    const existing = await this.prisma.client.userSavedCar.findUnique({
      where: { userId_carId: { userId, carId } },
    });

    if (existing) {
      await this.prisma.client.userSavedCar.delete({
        where: { userId_carId: { userId, carId } },
      });
      return { saved: false, message: 'Removed from favorites' };
    }

    await this.prisma.client.userSavedCar.create({ data: { userId, carId } });
    return { saved: true, message: 'Added to favorites' };
  }

  async findSavedForUser(userId: string) {
    const savedCars = await this.prisma.client.userSavedCar.findMany({
      where: { userId },
      include: { car: { include: { saleInfo: true } } },
      orderBy: { savedAt: 'desc' },
    });
    return savedCars.map((s) => serializeCarData(s.car));
  }

  async findPublicById(carId: string, userId?: string) {
    const now = new Date();
    const car = await this.prisma.client.car.findUnique({
      where: { id: carId },
      include: {
        dealer: { include: { workingHours: true } },
        saleInfo: true,
        rentInfo: true,
        reviews: { include: { user: true }, orderBy: { createdAt: 'desc' } },
        bookings: {
          where: { status: { in: ['PENDING', 'CONFIRMED'] }, endTime: { gte: now } },
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
            user: { select: { id: true, name: true, email: true } },
          },
          orderBy: [{ bookingDate: 'asc' }, { startTime: 'asc' }],
        },
      },
    });

    if (!car) throw new NotFoundException('Car not found');

    const wishlisted = userId
      ? !!(await this.prisma.client.userSavedCar.findUnique({
          where: { userId_carId: { userId, carId } },
        }))
      : false;

    const dealer = car.dealer
      ? {
          ...car.dealer,
          createdAt: car.dealer.createdAt.toISOString(),
          updatedAt: car.dealer.updatedAt.toISOString(),
          workingHours: car.dealer.workingHours.map((wh) => serializeWorkingHours(wh)),
        }
      : null;

    const reviews = car.reviews.map((r) => ({
      id: r.id,
      rating: r.rating,
      comment: r.comment,
      createdAt: r.createdAt.toISOString(),
      updatedAt: r.updatedAt.toISOString(),
      user: {
        name: r.user?.name ?? 'Anonymous',
        email: r.user?.email ?? '',
        phone: r.user?.phone ?? '',
      },
    }));

    const testDrives = car.bookings.filter((b) => b.bookingType === 'TEST_DRIVE');
    const rentals = car.bookings.filter((b) => b.bookingType === 'RENTAL');

    return {
      ...serializeCarData(car, wishlisted),
      dealer,
      reviews,
      upcomingBookings: { testDrives, rentals },
    };
  }

  /** Auto-provisions a dealer for a user's first car listing, matching addCar/adminUpdateCarById's original inline behavior. */
  private async ensureDealerForUser(user: ResolvedUser) {
    const existing = await this.prisma.client.dealer.findFirst({ where: { ownerId: user.id } });
    if (existing) return existing;

    const dealer = await this.prisma.client.dealer.create({
      data: {
        name: (user.name ?? '') + 'Dealer' || 'Unnamed Dealer',
        ownerId: user.id,
        email: user.email,
        phone: user.phone || 'updating...',
        address: 'updating...',
        description: 'init dealer profile, please update.',
        logoUrl: user.imageUrl || '',
      },
    });
    return dealer;
  }

  async create(user: ResolvedUser, input: AddCarInput) {
    const dealer = await this.ensureDealerForUser(user);
    const carData = input.carData;

    const createdCar = await this.prisma.client.car.create({
      data: {
        dealerId: dealer.id,
        make: carData.make,
        model: carData.model,
        year: carData.year,
        mileage: carData.mileage ?? 0,
        color: carData.color ?? '',
        fuelType: carData.fuelType ?? '',
        transmission: carData.transmission ?? '',
        bodyType: carData.bodyType ?? '',
        seats: carData.seats ?? null,
        description: carData.description ?? '',
        status: (carData.status || 'AVAILABLE').toUpperCase() as any,
        featured: !!carData.featured,
        images: input.images,
      },
    });

    if (
      (carData.carType === 'SALE' || carData.carType === 'BOTH') &&
      carData.salePrice !== undefined
    ) {
      await this.prisma.client.saleInfo.create({
        data: {
          carId: createdCar.id,
          price: carData.salePrice,
          negotiable: !!carData.negotiable,
          status: (carData.saleStatus || 'AVAILABLE').toUpperCase() as any,
        },
      });
    }

    if (
      carData.carType === 'RENT' ||
      carData.carType === 'BOTH' ||
      carData.rentHourlyPrice !== undefined ||
      carData.rentDailyPrice !== undefined ||
      carData.deposit !== undefined
    ) {
      await this.prisma.client.rentInfo.create({
        data: {
          carId: createdCar.id,
          hourlyPrice: carData.rentHourlyPrice ?? 0,
          dailyPrice: carData.rentDailyPrice ?? null,
          deposit: carData.deposit ?? null,
          available: carData.available ?? true,
        },
      });
    }

    return { carId: createdCar.id };
  }

  async findAdmin(input: AdminGetCarsInput) {
    const { search, pagination, sortBy, sortOrder, filters } = input;
    const where: any = {};

    if (search) {
      where.OR = [
        { make: { contains: search, mode: 'insensitive' } },
        { model: { contains: search, mode: 'insensitive' } },
        { color: { contains: search, mode: 'insensitive' } },
        { bodyType: { contains: search, mode: 'insensitive' } },
        { fuelType: { contains: search, mode: 'insensitive' } },
        { transmission: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (filters) {
      if (filters.status) where.status = filters.status;
      if (filters.featured !== undefined) where.featured = filters.featured;
      if (filters.bodyType) where.bodyType = { contains: filters.bodyType, mode: 'insensitive' };
      if (filters.fuelType) where.fuelType = { contains: filters.fuelType, mode: 'insensitive' };
      if (filters.transmission)
        where.transmission = { contains: filters.transmission, mode: 'insensitive' };
      if (filters.color) where.color = { contains: filters.color, mode: 'insensitive' };
      if (filters.year) where.year = filters.year;
      if (filters.make) where.make = { contains: filters.make, mode: 'insensitive' };
      if (filters.model) where.model = { contains: filters.model, mode: 'insensitive' };
      if (filters.countViews) where.countViews = { gte: filters.countViews };
      if (filters.avgRating) where.avgRating = { gte: filters.avgRating };

      if (filters.carType === 'SALE') {
        where.saleInfo = { isNot: null };
        where.rentInfo = null;
      } else if (filters.carType === 'RENT') {
        where.rentInfo = { isNot: null };
        where.saleInfo = null;
      }

      if (filters.carType === 'SALE' || filters.carType === 'BOTH') {
        if (
          filters.minSalePrice ||
          filters.maxSalePrice ||
          filters.negotiable !== undefined
        ) {
          where.saleInfo = where.saleInfo || {};
          if (filters.minSalePrice) where.saleInfo.price = { gte: filters.minSalePrice };
          if (filters.maxSalePrice)
            where.saleInfo.price = { ...where.saleInfo.price, lte: filters.maxSalePrice };
          if (filters.negotiable !== undefined) where.saleInfo.negotiable = filters.negotiable;
        }
      }

      if (filters.carType === 'RENT' || filters.carType === 'BOTH') {
        if (filters.minRentHourlyPrice || filters.maxRentHourlyPrice) {
          where.rentInfo = where.rentInfo || {};
          if (filters.minRentHourlyPrice)
            where.rentInfo.hourlyPrice = { gte: filters.minRentHourlyPrice };
          if (filters.maxRentHourlyPrice)
            where.rentInfo.hourlyPrice = {
              ...where.rentInfo.hourlyPrice,
              lte: filters.maxRentHourlyPrice,
            };
        }
        if (filters.minRentDailyPrice || filters.maxRentDailyPrice) {
          where.rentInfo = where.rentInfo || {};
          if (filters.minRentDailyPrice)
            where.rentInfo.dailyPrice = { gte: filters.minRentDailyPrice };
          if (filters.maxRentDailyPrice)
            where.rentInfo.dailyPrice = {
              ...where.rentInfo.dailyPrice,
              lte: filters.maxRentDailyPrice,
            };
        }
        if (filters.minDeposit || filters.maxDeposit) {
          where.rentInfo = where.rentInfo || {};
          if (filters.minDeposit) where.rentInfo.deposit = { gte: filters.minDeposit };
          if (filters.maxDeposit)
            where.rentInfo.deposit = { ...where.rentInfo.deposit, lte: filters.maxDeposit };
        }
      }
    }

    const page = pagination?.page || 1;
    const limit = pagination?.limit || 10;
    const skip = (page - 1) * limit;

    let orderBy: any = [{ createdAt: sortOrder }];
    switch (sortBy) {
      case 'price':
        orderBy = [{ saleInfo: { price: sortOrder } }, { createdAt: sortOrder }];
        break;
      case 'hourlyPrice':
        orderBy = [{ rentInfo: { hourlyPrice: sortOrder } }, { createdAt: sortOrder }];
        break;
      case 'dailyPrice':
        orderBy = [{ rentInfo: { dailyPrice: sortOrder } }, { createdAt: sortOrder }];
        break;
      case 'year':
      case 'createdAt':
        orderBy = [{ [sortBy]: sortOrder }];
        break;
    }

    const [total, cars] = await Promise.all([
      this.prisma.client.car.count({ where }),
      this.prisma.client.car.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          dealer: { include: { workingHours: true } },
          saleInfo: true,
          rentInfo: true,
          _count: { select: { savedBy: true, reviews: true } },
        },
      }),
    ]);

    return {
      data: cars.map((car) => serializeCarData(car)),
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async remove(carId: string) {
    const car = await this.prisma.client.car.findUnique({ where: { id: carId } });
    if (!car) throw new NotFoundException('Car not found');

    await this.prisma.client.car.delete({ where: { id: carId } });

    const filePaths = car.images
      .map((url) => {
        const match = url.match(/\/car-images\/(.*)/);
        return match ? match[1] : null;
      })
      .filter((p): p is string => !!p);

    if (filePaths.length > 0) {
      const { error } = await this.supabase.client.storage.from('car-images').remove(filePaths);
      if (error) console.warn('Failed to delete images:', error.message);
    }
  }

  async updateStatus(id: string, input: UpdateCarStatusInput) {
    const updateData: any = {};
    if (input.status) updateData.status = input.status;
    if (input.featured !== undefined) updateData.featured = input.featured;
    await this.prisma.client.car.update({ where: { id }, data: updateData });
  }

  async findAdminById(carId: string) {
    const car = await this.prisma.client.car.findUnique({
      where: { id: carId },
      include: {
        dealer: { include: { workingHours: true } },
        saleInfo: true,
        rentInfo: true,
        reviews: true,
        _count: { select: { savedBy: true, reviews: true } },
      },
    });
    if (!car) throw new NotFoundException('Car not found');
    return serializeCarData(car);
  }

  async updateAdmin(carId: string, user: ResolvedUser, input: UpdateCarInput) {
    const dealer = await this.ensureDealerForUser(user);
    const carData = input.carData;

    const car = await this.prisma.client.car.findUnique({
      where: { id: carId },
      include: { saleInfo: true, rentInfo: true },
    });
    if (!car) throw new NotFoundException('Car not found');

    const updatedCar = await this.prisma.client.car.update({
      where: { id: carId },
      data: {
        dealerId: dealer.id,
        make: carData.make,
        model: carData.model,
        year: carData.year ? Number(carData.year) : 2025,
        mileage: carData.mileage ? Number(carData.mileage) : 50,
        color: carData.color ? carData.color : 'white',
        fuelType: carData.fuelType ?? '',
        transmission: carData.transmission ?? '',
        bodyType: carData.bodyType ?? '',
        seats: carData.seats ?? null,
        description: carData.description ?? '',
        status: (carData.status || 'AVAILABLE').toUpperCase() as any,
        featured: !!carData.featured,
        images: input.images,
      },
    });

    if (carData.carType === 'SALE' || carData.carType === 'BOTH') {
      await this.prisma.client.saleInfo.upsert({
        where: { carId: updatedCar.id },
        create: {
          carId: updatedCar.id,
          price: carData.saleInfo?.price ?? 0,
          negotiable: !!carData.saleInfo?.negotiable,
          status: (carData.saleInfo?.status || 'AVAILABLE').toUpperCase() as any,
        },
        update: {
          ...(carData.saleInfo?.price !== undefined && { price: carData.saleInfo.price }),
          ...(carData.saleInfo?.negotiable !== undefined && {
            negotiable: !!carData.saleInfo.negotiable,
          }),
          ...(carData.saleInfo?.status !== undefined && {
            status: (carData.saleInfo.status || 'AVAILABLE').toUpperCase() as any,
          }),
        },
      });
    }

    if (carData.carType === 'RENT' || carData.carType === 'BOTH') {
      await this.prisma.client.rentInfo.upsert({
        where: { carId: updatedCar.id },
        create: {
          carId: updatedCar.id,
          hourlyPrice: carData.rentInfo?.hourlyPrice ?? 0,
          dailyPrice: carData.rentInfo?.dailyPrice ?? 0,
          deposit: carData.rentInfo?.deposit ?? 0,
        },
        update: {
          ...(carData.rentInfo?.hourlyPrice !== undefined && {
            hourlyPrice: carData.rentInfo.hourlyPrice,
          }),
          ...(carData.rentInfo?.dailyPrice !== undefined && {
            dailyPrice: carData.rentInfo.dailyPrice,
          }),
          ...(carData.rentInfo?.deposit !== undefined && { deposit: carData.rentInfo.deposit }),
        },
      });
    }

    if (carData.carType === 'SALE') {
      await this.prisma.client.rentInfo.deleteMany({ where: { carId } });
    } else if (carData.carType === 'RENT') {
      await this.prisma.client.saleInfo.deleteMany({ where: { carId } });
    }

    return { carId: updatedCar.id };
  }

  async createRental(user: ResolvedUser, input: CreateRentalInput) {
    const car = await this.prisma.client.car.findUnique({
      where: { id: input.carId },
      include: { dealer: true, rentInfo: true },
    });
    if (!car) throw new NotFoundException('Car not found');
    if (!car.rentInfo || !car.rentInfo.available) {
      throw new ForbiddenException('Car is not available for rental');
    }

    const rentalStart = new Date(input.startTime);
    const rentalEnd = new Date(input.endTime);

    const overlap = await this.prisma.client.booking.findFirst({
      where: {
        carId: input.carId,
        bookingType: 'RENTAL',
        startTime: { lte: rentalEnd },
        endTime: { gte: rentalStart },
      },
    });
    if (overlap) throw new ForbiddenException('Car is already rented in this time range');

    const hours = (rentalEnd.getTime() - rentalStart.getTime()) / 1000 / 3600;
    const totalPrice = car.rentInfo.hourlyPrice ? Number(car.rentInfo.hourlyPrice) * hours : 0;

    const booking = await this.prisma.client.booking.create({
      data: {
        carId: input.carId,
        userId: user.id,
        dealerId: car.dealerId!,
        bookingType: 'RENTAL',
        bookingDate: rentalStart,
        startTime: rentalStart,
        endTime: rentalEnd,
        totalPrice,
        notes: input.notes,
      },
      include: { car: true, dealer: true },
    });

    await this.prisma.client.rentInfo.update({
      where: { carId: input.carId },
      data: { available: false },
    });

    return {
      ...booking,
      car: serializeCarData(booking.car),
      dealer: serializeDealerData(booking.dealer),
      totalPrice: Number(booking.totalPrice),
    };
  }

  async findRentalsForUser(userId: string, page: number, limit: number) {
    const skip = (page - 1) * limit;
    const where = { userId, bookingType: 'RENTAL' as const };

    const [total, rentals] = await Promise.all([
      this.prisma.client.booking.count({ where }),
      this.prisma.client.booking.findMany({
        where,
        orderBy: { bookingDate: 'desc' },
        skip,
        take: limit,
        include: { car: true, dealer: true },
      }),
    ]);

    return {
      data: rentals.map((r) => ({
        ...r,
        car: serializeCarData(r.car),
        dealer: serializeDealerData(r.dealer),
        totalPrice: r.totalPrice ? Number(r.totalPrice) : null,
      })),
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }
}
