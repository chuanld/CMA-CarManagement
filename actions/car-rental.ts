"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { serializeCarData, serializeDealerData } from "@/lib/helper";

export async function createRental({
  carId,
  startTime,
  endTime,
  notes,
}: {
  carId: string;
  startTime: string; // ISO
  endTime: string;   // ISO
  notes?: string;
}) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) throw new Error("User not found");

    const car = await db.car.findUnique({
      where: { id: carId },
      include: { dealer: true, rentInfo: true },
    });
    if (!car) throw new Error("Car not found");

    if (!car.rentInfo || !car.rentInfo.available)
      throw new Error("Car is not available for rental");

    const rentalStart = new Date(startTime);
    const rentalEnd = new Date(endTime);

    // Check overlapping bookings
    const overlap = await db.booking.findFirst({
      where: {
        carId,
        bookingType: "RENTAL",
        OR: [
          {
            startTime: { lte: rentalEnd },
            endTime: { gte: rentalStart },
          },
        ],
      },
    });
    if (overlap) throw new Error("Car is already rented in this time range");

    // Calculate total price
    const hours = (rentalEnd.getTime() - rentalStart.getTime()) / 1000 / 3600;
    const totalPrice = car.rentInfo.hourlyPrice
      ? Number(car.rentInfo.hourlyPrice) * hours
      : 0;

    const booking = await db.booking.create({
      data: {
        carId,
        userId: user.id,
        dealerId: car.dealerId!,
        bookingType: "RENTAL",
        bookingDate: rentalStart,
        startTime: rentalStart,
        endTime: rentalEnd,
        totalPrice,
        notes,
      },
      include: { car: true, dealer: true },
    });

    await db.rentInfo.update({
      where: { carId },
      data: { available: false },
    });

    revalidatePath("/rentals");

    return {
      success: true,
      data: {
        ...booking,
        car: serializeCarData(booking.car),
        dealer: serializeDealerData(booking.dealer),
        createdAt: booking.createdAt.toISOString(),
        updatedAt: booking.updatedAt.toISOString(),
        bookingDate: booking.bookingDate.toISOString(),
        startTime: booking.startTime.toISOString(),
        endTime: booking.endTime.toISOString(),
      },
    };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}

export async function getRentals({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) throw new Error("User not found");

    const skip = (page - 1) * limit;

    const rentals = await db.booking.findMany({
      where: { userId: user.id, bookingType: "RENTAL" },
      orderBy: { bookingDate: "desc" },
      skip,
      take: limit,
      include: { car: true, dealer: true },
    });

    const total = await db.booking.count({ where: { userId: user.id, bookingType: "RENTAL" } });

    return {
      success: true,
      data: rentals.map((r) => ({
        ...r,
        car: serializeCarData(r.car),
        dealer: serializeDealerData(r.dealer),
        createdAt: r.createdAt.toISOString(),
        updatedAt: r.updatedAt.toISOString(),
        bookingDate: r.bookingDate.toISOString(),
        startTime: r.startTime.toISOString(),
        endTime: r.endTime.toISOString(),
      })),
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}
