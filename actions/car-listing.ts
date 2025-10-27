"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import {
  serializeBooking,
  serializeCarData,
  serializeDealerData,
  serializeWorkingHours,
} from "@/lib/helper";

export async function getCarFilters() {
  try {
    const availableCars = {
      where: { status: "AVAILABLE" as const },
    };

    const makes = await db.car.findMany({
      ...availableCars,
      distinct: ["make"],
      select: { make: true },
      orderBy: { make: "asc" },
    });

    const bodyTypes = await db.car.findMany({
      ...availableCars,
      distinct: ["bodyType"],
      select: { bodyType: true },
      orderBy: { bodyType: "asc" },
    });

    const fuelTypes = await db.car.findMany({
      ...availableCars,
      distinct: ["fuelType"],
      select: { fuelType: true },
      orderBy: { fuelType: "asc" },
    });

    const transmissions = await db.car.findMany({
      ...availableCars,
      distinct: ["transmission"],
      select: { transmission: true },
      orderBy: { transmission: "asc" },
    });

    const priceRanges = await db.saleInfo.aggregate({
      where: { status: "AVAILABLE" },
      _min: { price: true },
      _max: { price: true },
    });

    return {
      success: true,
      data: {
        makes: makes.map((m) => m.make),
        bodyTypes: bodyTypes.map((b) => b.bodyType),
        fuelTypes: fuelTypes.map((f) => f.fuelType),
        transmissions: transmissions.map((t) => t.transmission),
        priceRanges: {
          min: priceRanges._min.price
            ? parseFloat(priceRanges._min.price.toString())
            : 0,
          max: priceRanges._max.price
            ? parseFloat(priceRanges._max.price.toString())
            : 3000000,
        },
      },
    };
  } catch (err: unknown) {
    console.error(err);
    return { success: false, error: err };
  }
}

export async function getCars({
  search = "",
  make = "",
  bodyType = "",
  fuelType = "",
  transmission = "",
  minPrice = 0,
  maxPrice = 1000000000,
  sortBy = "newest",
  page = 1,
  limit = 10,
}) {
  try {
    const { userId } = await auth();
    const dbUser = userId
      ? await db.user.findUnique({ where: { clerkUserId: userId } })
      : null;

    const where: any = {
      status: "AVAILABLE",
      OR: search
        ? [
            { make: { contains: search, mode: "insensitive" } },
            { model: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
          ]
        : undefined,
    };

    if (make) where.make = { equals: make, mode: "insensitive" };
    if (bodyType) where.bodyType = { equals: bodyType, mode: "insensitive" };
    if (fuelType) where.fuelType = { equals: fuelType, mode: "insensitive" };
    if (transmission)
      where.transmission = { equals: transmission, mode: "insensitive" };

    const priceFilter: any = {
      gte: minPrice || 0,
      lte: maxPrice || 1000000000,
    };

    const skip = (page - 1) * limit;
    let orderBy: any = {};

    switch (sortBy) {
      case "priceAsc":
        orderBy = { saleInfo: { price: "asc" } };
        break;
      case "priceDesc":
        orderBy = { saleInfo: { price: "desc" } };
        break;
      case "oldest":
        orderBy = { createdAt: "asc" };
        break;
      case "newest":
      default:
        orderBy = { createdAt: "desc" };
        break;
    }

    const total = await db.car.count({ where });

    const cars = await db.car.findMany({
      where,
      orderBy,
      skip,
      take: limit,
      include: { saleInfo: true, rentInfo: true },
    });

    let wishlisted = new Set();
    if (dbUser) {
      const saved = await db.userSavedCar.findMany({
        where: { userId: dbUser.id },
        select: { carId: true },
      });
      wishlisted = new Set(saved.map((s) => s.carId));
    }

    const serialized = cars.map((car) =>
      serializeCarData(car, wishlisted.has(car.id))
    );

    return {
      success: true,
      data: serialized,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (err: unknown) {
    console.error(err);
    return { success: false, error: err };
  }
}

export async function toggleSavedCar(carId: string) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) throw new Error("User not found");

    const existing = await db.userSavedCar.findUnique({
      where: { userId_carId: { userId: user.id, carId } },
    });

    if (existing) {
      await db.userSavedCar.delete({
        where: { userId_carId: { userId: user.id, carId } },
      });
      return { success: true, saved: false, message: "Removed from favorites" };
    }

    await db.userSavedCar.create({ data: { userId: user.id, carId } });
    revalidatePath("/saved-cars");
    return { success: true, saved: true, message: "Added to favorites" };
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
}

export async function getSavedCars() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) throw new Error("User not found");

    const savedCars = await db.userSavedCar.findMany({
      where: { userId: user.id },
      include: { car: { include: { saleInfo: true } } },
      orderBy: { savedAt: "desc" },
    });

    const serialized = savedCars.map((s) => serializeCarData(s.car));

    return { success: true, data: serialized };
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
}

export async function getCarById(carId: string) {
  try {
    const { userId } = await auth();
    const dbUser = userId
      ? await db.user.findUnique({ where: { clerkUserId: userId } })
      : null;

    const now = new Date();
    const car = await db.car.findUnique({
      where: { id: carId },
      include: {
        dealer: { include: { workingHours: true } },
        saleInfo: true,
        rentInfo: true,
        reviews: {
          include: { user: true },
          orderBy: { createdAt: "desc" },
        },
        bookings: {
          where: {
            status: { in: ["PENDING", "CONFIRMED"] },
            endTime: { gte: now },
          },
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
            user: {
              select: { id: true, name: true, email: true },
            },
          },
          orderBy: [{ bookingDate: "asc" }, { startTime: "asc" }],
        },
      },
    });

    if (!car) return { success: false, error: new Error("Car not found") };

    const wishlisted = dbUser
      ? !!(await db.userSavedCar.findUnique({
          where: { userId_carId: { userId: dbUser.id, carId } },
        }))
      : false;

    const dealer = car.dealer
      ? {
          ...car.dealer,
          createdAt: car.dealer.createdAt.toISOString(),
          updatedAt: car.dealer.updatedAt.toISOString(),
          workingHours: car.dealer.workingHours.map((wh) =>
            serializeWorkingHours(wh)
          ),
        }
      : null;

    const reviews = car.reviews.map((r) => ({
      id: r.id,
      rating: r.rating,
      comment: r.comment,
      createdAt: r.createdAt.toISOString(),
      updatedAt: r.updatedAt.toISOString(),
      user: {
        name: r.user?.name ?? "Anonymous",
        email: r.user?.email ?? "",
        phone: r.user?.phone ?? "",
      },
    }));

    const testDriveBookings = car.bookings
      .filter((book) => book.bookingType === "TEST_DRIVE")
      .map((b: any) => serializeBooking(b));
    const rentalBookings = car.bookings
      .filter((book) => book.bookingType === "RENTAL")
      .map((b: any) => serializeBooking(b));

    const serializedCar = serializeCarData(car, wishlisted);

    return {
      success: true,
      data: {
        ...serializedCar,
        dealer,
        reviews,
        upcomingBookings: {
          testDrives: testDriveBookings,
          rentals: rentalBookings,
        },
      },
    };
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
}
