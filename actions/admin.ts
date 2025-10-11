"use server";
import { serializeCarData } from "@/lib/helper";
import { db } from "@/lib/prisma";
import { Car } from "@/types/car";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getAdmin() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Not authenticated");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user || user.role !== "ADMIN") {
    return { authorized: false, reason: "Not an admin" };
  }
  return { authorized: true, user };
}

export async function getAdminTestDrives({
  search = "",
  status = "",
}: {
  search?: string;
  status?: string;
}) {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Not authenticated");
    }
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user || user.role !== "ADMIN") {
      throw new Error("Not authorized");
    }

    let whereClause: any = {};

    if (status) {
      if (status !== "all") whereClause.status = status;
    }

    if (search) {
      whereClause.OR = [
        {
          car: {
            OR: [
              { make: { contains: search, mode: "insensitive" } },
              { model: { contains: search, mode: "insensitive" } },
            ],
          },
        },
        {
          user: {
            OR: [
              { name: { contains: search, mode: "insensitive" } },
              { email: { contains: search, mode: "insensitive" } },
            ],
          },
        },
      ];
    }

    const bookings = await db.testDriveBooking.findMany({
      where: whereClause,
      include: {
        car: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            imageUrl: true,
            phone: true,
          },
        },
      },
      orderBy: [{ bookingDate: "desc" }, { startTime: "asc" }],
    });

    const formattedBookings = bookings.map((booking: any) => ({
      id: booking.id,
      carId: booking.carId,
      userId: booking.userId,
      bookingDate: booking.bookingDate.toISOString(),
      startTime: booking.startTime,
      endTime: booking.endTime,
      status: booking.status,
      notes: booking.notes,
      createdAt: booking.createdAt.toISOString(),
      updatedAt: booking.updatedAt.toISOString(),
      car: serializeCarData(booking.car),
      user: booking.user,
    }));

    return {
      success: true,
      data: formattedBookings,
    };
  } catch (err: unknown) {
    console.error(err instanceof Error ? err.message : "Unexpected error");
    return {
      success: false,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}

export async function updateTestDriveStatus({
  bookingId,
  newStatus,
}: {
  bookingId: string;
  newStatus: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED" | "NO_SHOW";
}) {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Not authenticated");
    }
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user || user.role !== "ADMIN") {
      throw new Error("Not authorized");
    }

    const booking = await db.testDriveBooking.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      throw new Error("Booking not found");
    }

    const validStatuses = [
      "PENDING",
      "CONFIRMED",
      "COMPLETED",
      "CANCELLED",
      "NO_SHOW",
    ];

    if (!validStatuses.includes(newStatus)) {
      return { success: false, error: new Error("Invalid status") };
    }

    await db.testDriveBooking.update({
      where: { id: bookingId },
      data: { status: newStatus },
    });

    revalidatePath("/admin/test-drives");
    revalidatePath("/reservations");

    return {
      success: true,
      message: "Status updated successfully",
    };
  } catch (err: unknown) {
    console.error(err instanceof Error ? err.message : "Unexpected error");
    return {
      success: false,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}

export async function getDashboardStats() {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Not authenticated");
    }
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user || user.role !== "ADMIN") {
      throw new Error("Not authorized");
    }

    // --- Run all count queries in parallel ---
    const [
      carStats,
      testDriveStats,
      userStats,
      totalDealerships,
      completedTestDriveCarIds,
      recentTestDrives,
    ] = await Promise.all([
      // --- 1Cars ---
      Promise.all([
        db.car.count(),
        db.car.count({ where: { status: "AVAILABLE" } }),
        db.car.count({ where: { status: "SOLD" } }),
        db.car.count({ where: { status: "UNAVAILABLE" } }),
        db.car.count({ where: { featured: true } }),
      ]),

      // --- 2Test Drives ---
      Promise.all([
        db.testDriveBooking.count(),
        db.testDriveBooking.count({ where: { status: "PENDING" } }),
        db.testDriveBooking.count({ where: { status: "CONFIRMED" } }),
        db.testDriveBooking.count({ where: { status: "COMPLETED" } }),
        db.testDriveBooking.count({ where: { status: "CANCELLED" } }),
        db.testDriveBooking.count({ where: { status: "NO_SHOW" } }),
      ]),

      // --- 3Users ---
      Promise.all([
        db.user.count(),
        db.user.count({ where: { role: "ADMIN" } }),
        db.user.count({ where: { role: "USER" } }),
      ]),

      // --- 4Dealerships ---
      db.dealershipInfo.count(),

      // --- 5Completed Test Drive IDs (for conversion rate) ---
      db.testDriveBooking.findMany({
        where: { status: "COMPLETED" },
        select: { carId: true },
      }),

      // --- 6Recent Test Drives ---
      db.testDriveBooking.findMany({
        include: {
          car: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              imageUrl: true,
              phone: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

    // --- Destructure results ---
    const [totalCars, availableCars, soldCars, unavailableCars, featuredCars] =
      carStats;
    const [
      totalTestDrives,
      pendingTestDrives,
      confirmedTestDrives,
      completedTestDrives,
      cancelledTestDrives,
      noShowTestDrives,
    ] = testDriveStats;
    const [totalUsers, totalAdmins, totalCustomers] = userStats;

    // --- Calculate conversion rate ---
    const soldCarAfterTestDrive = await db.car.count({
      where: {
        id: {
          in: completedTestDriveCarIds.map((td: any) => td.carId),
        },
        status: "SOLD",
      },
    });

    const conversionCompletedTestRate =
      completedTestDrives > 0
        ? (soldCarAfterTestDrive / completedTestDrives) * 100
        : 0;

    // --- Format recent test drives ---
    const formattedRecentTestDrives = recentTestDrives.map(
      (booking: any) => ({
        id: booking.id,
        carId: booking.carId,
        userId: booking.userId,
        bookingDate: booking.bookingDate.toISOString(),
        startTime: booking.startTime,
        endTime: booking.endTime,
        status: booking.status,
        notes: booking.notes,
        createdAt: booking.createdAt.toISOString(),
        updatedAt: booking.updatedAt.toISOString(),
        car: serializeCarData(booking.car),
        user: booking.user,
      })
    );

    // //Fetch all nessesary stats in a single parallel query
    // const [cars, testDrives] = await Promise.all([
    //   //ness fields
    //   db.car.findMany({
    //     select: {
    //       id: true,
    //       status: true,
    //       featured: true,
    //     },
    //   }),
    //   db.testDriveBooking.findMany({
    //     select: {
    //       id: true,
    //       status: true,
    //       carId: true,
    //     },
    //   }),
    // ]);

    // //Calc statitics
    // const totalCarsCheck = cars.length;
    // const availableCarsCheck = cars.filter(
    //   (car: Car) => car.status === "AVAILABLE"
    // ).length;
    // const soldCarsCheck = cars.filter(
    //   (car: Car) => car.status === "SOLD"
    // ).length;
    // const unavailableCarsCheck = cars.filter(
    //   (car: Car) => car.status === "UNAVAILABLE"
    // ).length;
    // const featuredCarsCheck = cars.filter(
    //   (car: Car) => car.featured === true
    // ).length;

    // const totalTestDrivesCheck = testDrives.length;
    // const pendingTestDrivesCheck = testDrives.filter(
    //   (td: TestDriveBooking) => td.status === "PENDING"
    // ).length;
    // const confirmedTestDrivesCheck = testDrives.filter(
    //   (td: TestDriveBooking) => td.status === "CONFIRMED"
    // ).length;
    // const completedTestDrivesCheck = testDrives.filter(
    //   (td: TestDriveBooking) => td.status === "COMPLETED"
    // ).length;
    // const cancelledTestDrivesCheck = testDrives.filter(
    //   (td: TestDriveBooking) => td.status === "CANCELLED"
    // ).length;
    // const noShowTestDrivesCheck = testDrives.filter(
    //   (td: TestDriveBooking) => td.status === "NO_SHOW"
    // ).length;

    // const completedTestDriveCarIdsCheck = testDrives
    //   .filter((td: TestDriveBooking) => td.status === "COMPLETED")
    //   .map((td: TestDriveBooking) => td.carId);
    // const soldCarAfterTestDriveCheck = cars.filter(
    //   (car: Car) =>
    //     completedTestDriveCarIdsCheck.includes(car.id) && car.status === "SOLD"
    // ).length;
    // const conversionCompletedTestRateCheck =
    //   completedTestDrivesCheck > 0
    //     ? (soldCarAfterTestDriveCheck / completedTestDrivesCheck) * 100
    //     : 0;

    return {
      success: true,
      data: {
        cars: {
          total: totalCars,
          available: availableCars,
          sold: soldCars,
          unavailable: unavailableCars,
          featured: featuredCars,
        },
        testDrives: {
          total: totalTestDrives,
          pending: pendingTestDrives,
          confirmed: confirmedTestDrives,
          completed: completedTestDrives,
          cancelled: cancelledTestDrives,
          noShow: noShowTestDrives,
          conversionCompletedTestRate: parseFloat(
            conversionCompletedTestRate.toFixed(2)
          ),
          recentTestDrives: formattedRecentTestDrives,
        },
        users: {
          total: totalUsers,
          admins: totalAdmins,
          customers: totalCustomers,
        },
        dealerships: {
          total: totalDealerships,
        },
      },
    };
  } catch (err: unknown) {
    console.error(err instanceof Error ? err.message : "Unexpected error");
    return {
      success: false,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}
