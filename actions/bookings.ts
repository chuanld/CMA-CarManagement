"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import {
  combineDateAndTime,
  serializeBooking,
  serializeCarData,
  serializeDealerData,
  validateRentalStartTime,
  validateWorkingHours,
} from "@/lib/helper";
import { BookingType, BookingStatus, DayOfWeek } from "@prisma/client";
import z from "zod";
import { addDays } from "date-fns";

/**
 * Create booking for TEST_DRIVE (~1h) or RENTAL (hourly/daily)
 */
// export async function createBooking({
//   carId,
//   bookingDate,
//   startTime,
//   endTime,
//   bookingType = "TEST_DRIVE",
//   notes,
// }: {
//   carId: string;
//   bookingDate: string; // ex: "2025-10-21T05:00:00.000Z"
//   startTime: string;   // "16:00"
//   endTime: string;     // "17:00"
//   bookingType?: BookingType;
//   notes?: string;
// }) {
//   try {
//     const { userId } = await auth();
//     if (!userId) throw new Error("Unauthorized");
//     const user = await db.user.findUnique({ where: { clerkUserId: userId } });
//     if (!user) throw new Error("User not found");

//     const car = await db.car.findUnique({
//       where: { id: carId },
//       include: { dealer: { include: { workingHours: true } }, rentInfo: true },
//     });
//     if (!car) throw new Error("Car not found");
//     const dealer = car.dealer;
//     if (!dealer) throw new Error("Dealer not found");

//     const baseDate = new Date(bookingDate);
//     const [startH, startM] = startTime.split(":").map(Number);
//     const [endH, endM] = endTime.split(":").map(Number);

//     const start = new Date(baseDate);
//     const end = new Date(baseDate);
//     start.setUTCHours(startH, startM, 0, 0);
//     end.setUTCHours(endH, endM, 0, 0);

//     if (end <= start) throw new Error("End time must be after start time");

//     const dayName = baseDate
//       .toLocaleString("en-US", { weekday: "long", timeZone: "UTC" })
//       .toUpperCase();

//     const schedule = dealer.workingHours.find(
//       (wh) => wh.dayOfWeek === dayName && wh.isOpen
//     );
//     if (!schedule) throw new Error(`Dealer is closed on ${dayName}`);

//     const openHour = Math.floor(schedule.openTime / 100);
//     const closeHour = Math.floor(schedule.closeTime / 100);

//     if (startH < openHour || endH > closeHour) {
//       throw new Error(
//         `${bookingType === "TEST_DRIVE" ? "Test drive" : "Rental"} must be within dealer hours: ${openHour}:00 - ${closeHour}:00`
//       );
//     }

//     const overlap = await db.booking.findFirst({
//       where: {
//         carId,
//         status: { in: ["PENDING", "CONFIRMED", "ACTIVE"] },
//         AND: [{ startTime: { lt: end } }, { endTime: { gt: start } }],
//       },
//     });
//     if (overlap) throw new Error("Car is already booked in this time range");

//     let totalPrice: number | undefined;
//     if (bookingType === "RENTAL") {
//       if (!car.rentInfo) throw new Error("Car rent info not found");
//       const diffHrs = (end.getTime() - start.getTime()) / 3_600_000;
//       if (car.rentInfo.dailyPrice) {
//         const days = Math.ceil(diffHrs / 24);
//         totalPrice = Number(car.rentInfo.dailyPrice) * days;
//       } else {
//         totalPrice = Number(car.rentInfo.hourlyPrice) * Math.ceil(diffHrs);
//       }
//     }

//     const booking = await db.booking.create({
//       data: {
//         carId,
//         userId: user.id,
//         dealerId: dealer.id,
//         bookingType,
//         bookingDate: new Date(baseDate),
//         startTime: start,
//         endTime: end,
//         notes: notes || null,
//         totalPrice,
//         status: "PENDING",
//       },
//       include: { car: true, dealer: true, user: true },
//     });

//     if (bookingType === "TEST_DRIVE") {
//       revalidatePath(`/bookings/${carId}`);
//       revalidatePath(`/cars/${carId}`);
//     } else {
//       revalidatePath(`/rentals`);
//     }

//     return {
//       success: true,
//       data: {
//         ...booking,
//         car: serializeCarData(booking.car),
//         dealer: serializeDealerData(booking.dealer),
//         bookingDate: booking.bookingDate.toISOString(),
//         startTime: booking.startTime.toISOString(),
//         endTime: booking.endTime.toISOString(),
//         createdAt: booking.createdAt.toISOString(),
//         updatedAt: booking.updatedAt.toISOString(),
//       },
//     };
//   } catch (err: any) {
//     console.error("createBooking error:", err);
//     return { success: false, error: err.message };
//   }
// }

const bookingSchema = z.object({
  carId: z.string().uuid(),
  bookingType: z.enum(["RENTAL", "TEST_DRIVE"]),
  bookingDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), 
  startTime: z.string().datetime(), // ISO full
  endTime: z.string().datetime(), // ISO full
  rentalType: z.enum(["hourly", "daily"]).optional(), 
  totalPrice: z.number().optional(), 
  notes: z.string().optional(),
});

export async function createBooking(payload: z.infer<typeof bookingSchema>) {
  try {
    const validated = bookingSchema.parse(payload);
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) throw new Error("User not found");

    const car = await db.car.findUnique({
      where: { id: validated.carId },
      include: { dealer: { include: { workingHours: true } }, rentInfo: true },
    });
    if (!car) throw new Error("Car not found");
    const dealer = car.dealer;
    if (!dealer) throw new Error("Dealer not found");

    const start = new Date(validated.startTime);
    const end = new Date(validated.endTime);
    const bookingDate = new Date(validated.bookingDate);

    if (end <= start) throw new Error("End time must be after start time");

    if (validated.bookingType === "TEST_DRIVE") {
      // Test Drive: 1h slot, same day
      if (start.toDateString() !== bookingDate.toDateString())
        throw new Error("Test drive must be on selected date");

      const totalHours = (end.getTime() - start.getTime()) / 36e5;
      if (totalHours !== 1) throw new Error("Test drive must be 1 hour");

      await validateWorkingHours(dealer.workingHours, bookingDate, start, end);
    } else if (validated.bookingType === "RENTAL") {
      // Rental: Flexible duration
      if (!validated.rentalType) throw new Error("Rental type required");

      if (validated.rentalType === "hourly") {
        const totalHours = (end.getTime() - start.getTime()) / 36e5;
        if (totalHours > 24 || totalHours <= 0)
          throw new Error("Hourly rental must be 1-24 hours");
      } else {
        const totalDays = (end.getTime() - start.getTime()) / (24 * 36e5);
        if (totalDays < 1)
          throw new Error("Daily rental must be at least 1 day");
      }

      await validateRentalStartTime(
        dealer.workingHours,
        start,
        end,
        validated.rentalType
      );
    }

    const overlap = await db.booking.findFirst({
      where: {
        carId: validated.carId,
        status: { in: ["PENDING", "CONFIRMED", "ACTIVE"] },
        OR: [
          {
            AND: [{ startTime: { lt: end } }, { endTime: { gt: start } }],
          },
        ],
      },
    });
    if (overlap) throw new Error("Car is already booked in this time range");

    let totalPrice = validated.totalPrice;
    if (!totalPrice && validated.bookingType === "RENTAL" && car.rentInfo) {
      if (!validated.rentalType) throw new Error("Rental type required");

      const totalHours = (end.getTime() - start.getTime()) / 36e5;
      if (validated.rentalType === "daily") {
        const days = Math.ceil(totalHours / 24);
        totalPrice = Number(car.rentInfo.dailyPrice) * days;
      } else {
        totalPrice = Number(car.rentInfo.hourlyPrice) * Math.ceil(totalHours);
      }
    }

    const booking = await db.booking.create({
      data: {
        carId: validated.carId,
        userId: user.id,
        dealerId: dealer.id,
        bookingType: validated.bookingType,
        bookingDate: bookingDate,
        startTime: start,
        endTime: end,
        totalPrice,
        notes: validated.notes || null,
        status: "PENDING",
      },
      include: { car: true, dealer: true, user: true },
    });

    revalidatePath(`/cars/${validated.carId}`);
    revalidatePath("/bookings");
    if (validated.bookingType === "RENTAL") revalidatePath("/rentals");

    const serialBooking = serializeBooking(booking);

    return {
      success: true,
      data: serialBooking,
    };
  } catch (err: unknown) {
    console.error(err instanceof Error ? err.message : "Create Booking error");
    return {
      success: false,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}

/**
 * Get user bookings with optional type filter
 */
export async function getUserBookings({
  search='',
  pagination = { page: 1, limit: 10 },
  sortBy = "createdAt",
  orderBy = "desc",
  filter = {},
}: {
  search?: string
  pagination?: { page?: number; limit?: number }
  sortBy?: string
  orderBy?: "asc" | "desc"
  filter?: {
    bookingType?: BookingType
    status?: BookingStatus[]
  }
}) {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error("Unauthorized")

    const user = await db.user.findUnique({ where: { clerkUserId: userId } })
    if (!user) throw new Error("User not found")

    const { page = 1, limit = 10 } = pagination
    const skip = (page - 1) * limit

    const where: any = {
      userId: user.id,
      ...(filter.bookingType && { bookingType: filter.bookingType }),
      ...(filter.status?.length && { status: { in: filter.status } }),
    }

    if (search) {
      where.OR = [
        { car: { name: { contains: search, mode: "insensitive" } } },
        { car: { model: { contains: search, mode: "insensitive" } } },
        { dealer: { name: { contains: search, mode: "insensitive" } } },
      ]
    }

    const [bookings, total] = await Promise.all([
      db.booking.findMany({
        where,
        include: { car: true, dealer: true },
        skip,
        take: limit,
        orderBy: { [sortBy]: orderBy },
      }),
      db.booking.count({ where }),
    ])

    const data = bookings.map((b) => (serializeBooking(b)))

    return {
      success: true,
      data,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    }
  } catch (err) {
    console.error("getUserBookings error:", err)
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    }
  }
}


/**
 * Cancel a booking
 */
export async function cancelBooking(bookingId: string) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
    const user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) throw new Error("User not found");

    const booking = await db.booking.findUnique({ where: { id: bookingId } });
    if (!booking) throw new Error("Booking not found");

    if (booking.userId !== user.id && user.role !== "ADMIN") {
      throw new Error("Unauthorized to cancel this booking");
    }

    if (["CANCELLED", "COMPLETED"].includes(booking.status)) {
      throw new Error(`Cannot cancel booking with status: ${booking.status}`);
    }

    await db.booking.update({
      where: { id: bookingId },
      data: {
        status: "CANCELLED",
        statusChangedAt: new Date(),
        statusChangedBy: user.id,
      },
    });

    if (booking.bookingType === "TEST_DRIVE") {
      revalidatePath(`/test-drive/${booking.carId}`);
      revalidatePath(`/cars/${booking.carId}`);
      revalidatePath(`/reservations`);
    } else if (booking.bookingType === "RENTAL") {
      revalidatePath(`/rentals`);
      revalidatePath(`/reservations`);
    }

    return { success: true, message: "Booking cancelled successfully" };
  } catch (err: unknown) {
    console.error("cancelBooking error:", err);
    return { success: false, error: (err as Error).message };
  }
}

export async function updateBookingStatuses() {
  try {
    const now = new Date();

    const pendingToActive = await db.booking.updateMany({
      where: {
        status: "PENDING",
        startTime: { lte: now },
        endTime: { gt: now },
      },
      data: { status: "ACTIVE", statusChangedAt: now },
    });

    const activeToCompleted = await db.booking.updateMany({
      where: {
        status: "ACTIVE",
        endTime: { lte: now },
      },
      data: { status: "COMPLETED", statusChangedAt: now },
    });

    console.log(
      `[Booking Status Update] PENDING→ACTIVE: ${pendingToActive.count}, ACTIVE→COMPLETED: ${activeToCompleted.count}`
    );
  } catch (err: unknown) {
    console.error("updateBookingStatuses error:", err);
  }
}

export async function getTestDriveInfo(carId: string) {
  try {
    const MAX_TEST_DRIVE = 3;
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
    const user = await db.user.findUnique({ where: { clerkUserId: userId } });
    if (!user) throw new Error("User not found");

    const bookings = await db.booking.findMany({
      where: {
        userId: user.id,
        carId,
        bookingType: "TEST_DRIVE",
        status: { in: ["PENDING", "CONFIRMED", "ACTIVE"] },
      },
      include: { dealer: true },
      orderBy: { createdAt: "desc" },
    });

    const count = bookings.length;

    return {
      success: true,
      data: {
        count,
        max: MAX_TEST_DRIVE,
        bookings,
        canBook: count < MAX_TEST_DRIVE,
      },
    };
  } catch (err: unknown) {
    console.error("getTestDriveInfo error:", err);
    return { success: false, error: (err as Error).message };
  }
}

export async function getBookedSlots({
  carId,
  days = 30,
}: {
  carId: string;
  days?: number;
}) {
  try {
    const endDate = addDays(new Date(), days);

    const bookings = await db.booking.findMany({
      where: {
        carId,
        status: { in: ["PENDING", "CONFIRMED", "ACTIVE"] },
        OR: [{ startTime: { lte: endDate } }, { endTime: { gte: new Date() } }],
      },

      select: {
        id: true,
        startTime: true,
        endTime: true,
        bookingType: true,
        carId: true,
        totalPrice: true,
      },
    });

    const serialBookings = bookings.map((b) =>
      serializeBooking(b)
    );
    console.log(serialBookings, "asds");
    return {
      success: true,
      data: serialBookings,
    };
  } catch (error: unknown) {
    console.error("getBookedSlots error:", error);
    return {
      success: false,
      error: (error as Error).message,
    };
  }
}
