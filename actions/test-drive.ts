"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { serializeCarData, serializeDealerData, serializeWorkingHours } from "@/lib/helper";
import { TestDriveBooking } from "@/types/user";
import { BookingType, DayOfWeek } from "@prisma/client";

// /**
//  * Book a test drive for a car
//  */
export async function bookTestDrive({
  carId,
  bookingDate,
  startTime,
  notes,
}: {
  carId: string;
  bookingDate: string; // e.g., "2025-10-21"
  startTime: string; // e.g., "10:00"
  notes?: string;
}) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("You must be logged in to book a test drive");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user) throw new Error("User not found");

    const car = await db.car.findUnique({
      where: { id: carId },
      include: { dealer: { include: { workingHours: true } } },
    });
    if (!car || car.status !== "AVAILABLE")
      throw new Error("Car not available for test drive");

    const dealer = car.dealer;
    if (!dealer) throw new Error("Dealer information not found for this car");

    // Compute DateTime objects for startTime and endTime (+1 hour)
    const startDateTime = new Date(`${bookingDate}T${startTime}:00`);
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(endDateTime.getHours() + 1);

    // Check dealer working hours (optional but useful)
    if (dealer.workingHours?.length) {
      const dayName = new Date(bookingDate)
        .toLocaleDateString("en-US", { weekday: "long" })
        .toUpperCase() as keyof typeof DayOfWeek;

      const schedule = dealer.workingHours.find(
        (wh) => wh.dayOfWeek === dayName && wh.isOpen
      );

      if (!schedule)
        throw new Error(
          `Dealer is closed on ${dayName}. Please select another date.`
        );

      const openHour = Math.floor(schedule.openTime / 100);
      const closeHour = Math.floor(schedule.closeTime / 100);
      const startH = startDateTime.getHours();
      const endH = endDateTime.getHours();

      if (startH < openHour || endH > closeHour) {
        throw new Error(
          `Test drive must be within dealer working hours: ${String(
            openHour
          ).padStart(2, "0")}:00 - ${String(closeHour).padStart(2, "0")}:00`
        );
      }
    }

    // Prevent overlapping bookings
    const existingBooking = await db.booking.findFirst({
      where: {
        carId,
        bookingDate: new Date(bookingDate),
        bookingType: BookingType.TEST_DRIVE,
        status: { in: ["PENDING", "CONFIRMED"] },
        AND: [
          { startTime: { lt: endDateTime } },
          { endTime: { gt: startDateTime } },
        ],
      },
    });

    if (existingBooking)
      throw new Error("This time slot is already booked. Please choose another.");

    // Create booking (1-hour fixed test drive)
    const booking = await db.booking.create({
      data: {
        carId,
        userId: user.id,
        dealerId: dealer.id,
        bookingType: BookingType.TEST_DRIVE,
        bookingDate: new Date(bookingDate),
        startTime: startDateTime,
        endTime: endDateTime,
        totalPrice: null,
        notes: notes || null,
        status: "PENDING",
      },
    });

    revalidatePath(`/test-drive/${carId}`);
    revalidatePath(`/cars/${carId}`);

    return { success: true, data: booking };
  } catch (err: unknown) {
    console.error("bookTestDrive error:", err);
    return { success: false, error: (err as Error).message };
  }
}

// /**
//  * Get all test drive bookings for the authenticated user
//  */
// export async function getUserTestDrives() {
//   try {
//     const { userId } = await auth();
//     if (!userId) throw new Error("Unauthorized");

//     const user = await db.user.findUnique({ where: { clerkUserId: userId } });
//     if (!user) throw new Error("User not found");

//     const bookings = await db.testDriveBooking.findMany({
//       where: { userId: user.id },
//       include: { car: { include: { dealer: true } }, user: true },
//       orderBy: { bookingDate: "desc" },
//     });

//     const formatted = bookings.map((b) => ({
//       id: b.id,
//       carId: b.carId,
//       car: serializeCarData(b.car),
//       bookingDate: b.bookingDate.toISOString(),
//       startTime: b.startTime,
//       endTime: b.endTime,
//       status: b.status,
//       notes: b.notes,
//       createdAt: b.createdAt.toISOString(),
//       updatedAt: b.updatedAt.toISOString(),
//     }));

//     return { success: true, data: formatted };
//   } catch (err: unknown) {
//     console.error("getUserTestDrives error:", err);
//     return { success: false, error: (err as Error).message };
//   }
// }

// /**
//  * Cancel a test drive booking
//  */
// export async function cancelTestDrive(bookingId: string) {
//   try {
//     const { userId } = await auth();
//     if (!userId) throw new Error("Unauthorized");

//     const user = await db.user.findUnique({ where: { clerkUserId: userId } });
//     if (!user) throw new Error("User not found");

//     const booking = await db.testDriveBooking.findUnique({ where: { id: bookingId } });
//     if (!booking) throw new Error("Booking not found");

//     if (booking.userId !== user.id && user.role !== "ADMIN") {
//       throw new Error("Unauthorized to cancel this booking");
//     }

//     if (["CANCELLED", "COMPLETED"].includes(booking.status)) {
//       throw new Error(`Cannot cancel booking with status: ${booking.status}`);
//     }

//     await db.testDriveBooking.update({
//       where: { id: bookingId },
//       data: { status: "CANCELLED" },
//     });

//     revalidatePath("/reservations");
//     revalidatePath("/admin/test-drives");

//     return { success: true, message: "Test drive cancelled successfully" };
//   } catch (err: unknown) {
//     console.error("cancelTestDrive error:", err);
//     return { success: false, error: (err as Error).message };
//   }
// }
