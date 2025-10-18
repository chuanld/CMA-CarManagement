"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { serializeCarData } from "@/lib/helper";
import { TestDriveBooking } from "@/types/user";

/**
 * Books a test drive for a car
 */
export async function bookTestDrive({
  carId,
  bookingDate,
  startTime,
  endTime,
  notes,
}: TestDriveBooking) {
  try {
    // Authenticate user
    const { userId } = await auth();
    if (!userId) throw new Error("You must be logged in to book a test drive");

    // Find user in our database
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found in database");

    // Check if car exists and is available
    const car = await db.car.findFirst({
      where: { id: carId, status: "AVAILABLE" },
      include: { dealer: {include: {workingHours: true}}}
    });

    if (!car) throw new Error("Car not available for test drive");

    //check working hours of dealer
    const dealer = car.dealer;
    if (dealer && dealer.workingHours) {
      const dayName = new Date(bookingDate).toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase() as any;
      const schedule = dealer.workingHours.find((wh)=>wh.dayOfWeek === dayName && wh.isOpen)

      if (!schedule) {
        throw new Error(`Dealer is closed on ${dayName}s. Please select another date.`);
      }

      const openHour = Math.floor(schedule.openTime / 100);
      const closeHour = Math.floor(schedule.closeTime / 100);
      const [startH] = startTime.split(':').map(Number);
      const [endH] = endTime.split(':').map(Number);

      if (startH < openHour || endH > closeHour) {
        throw new Error(`Test drive time must be within dealer working hours: ${String(openHour).padStart(2,'0')}:00 - ${String(closeHour).padStart(2,'0')}:00`);
      }
    }

    // Check book overlap
    const existingBooking = await db.testDriveBooking.findFirst({
      where: {
        carId,
        bookingDate: new Date(bookingDate),
        status: { in: ["PENDING", "CONFIRMED"] },
        OR: [
          {
            AND: [
              { startTime: { lt: endTime } },
              { endTime: { gt: startTime } },
            ],
          },
        ],
      },
    });

    if (existingBooking) {
      throw new Error(
        "This time slot is already booked. Please select another time."
      );
    }

    // Create the booking
    const booking = await db.testDriveBooking.create({
      data: {
        carId,
        userId: user.id,
        bookingDate: new Date(bookingDate),
        startTime,
        endTime,
        notes: notes || null,
        status: "PENDING",
      },
    });

    // Revalidate relevant paths
    revalidatePath(`/test-drive/${carId}`);
    revalidatePath(`/cars/${carId}`);

    return {
      success: true,
      data: booking,
    };
  } catch (error: unknown) {
    console.error("Error booking test drive:", error);
    return {
      success: false,
      error: (error as Error).message || "Failed to book test drive",
    };
  }
}

/**
 * Get user's test drive bookings - reservations page
 */
export async function getUserTestDrives() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        error: "Unauthorized",
      };
    }

    // Get the user from our database
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      return {
        success: false,
        error: "User not found",
      };
    }

    // Get user's test drive bookings
    const bookings = await db.testDriveBooking.findMany({
      where: { userId: user.id },
      include: {
        car: { include: { dealer: true } },
        user: true,

      },
      orderBy: { bookingDate: "desc" },
    });

    // Format the bookings
    const formattedBookings = bookings.map((booking) => ({
      id: booking.id,
      carId: booking.carId,
      car: serializeCarData(booking.car),
      bookingDate: booking.bookingDate.toISOString(),
      startTime: booking.startTime,
      endTime: booking.endTime,
      status: booking.status,
      notes: booking.notes,
      createdAt: booking.createdAt.toISOString(),
      updatedAt: booking.updatedAt.toISOString(),
    }));

    return {
      success: true,
      data: formattedBookings,
    };
  } catch (error: unknown) {
    console.error("Error fetching test drives:", error);
    return {
      success: false,
      error: (error as Error).message,
    };
  }
}

/**
 * Cancel a test drive booking
 */
export async function cancelTestDrive(bookingId: string) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        error: "Unauthorized",
      };
    }

    // Get the user from our database
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      return {
        success: false,
        error: "User not found",
      };
    }

    // Get the booking
    const booking = await db.testDriveBooking.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      return {
        success: false,
        error: "Booking not found",
      };
    }

    // Check if user owns this booking
    if (booking.userId !== user.id || user.role !== "ADMIN") {
      return {
        success: false,
        error: "Unauthorized to cancel this booking",
      };
    }

    // Check if booking can be cancelled
    if (booking.status === "CANCELLED") {
      return {
        success: false,
        error: "Booking is already cancelled",
      };
    }

    if (booking.status === "COMPLETED") {
      return {
        success: false,
        error: "Cannot cancel a completed booking",
      };
    }

    // Update the booking status
    await db.testDriveBooking.update({
      where: { id: bookingId },
      data: { status: "CANCELLED" },
    });

    // Revalidate paths
    revalidatePath("/reservations");
    revalidatePath("/admin/test-drives");

    return {
      success: true,
      message: "Test drive cancelled successfully",
    };
  } catch (error: unknown) {
    console.error("Error cancelling test drive:", error);
    return {
      success: false,
      error: (error as Error).message,
    };
  }
}
