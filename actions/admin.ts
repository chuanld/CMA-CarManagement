"use server";

import {
  serializeBooking,
  serializeCarData,
  serializePurchase,
  serializeUserData,
} from "@/lib/helper";
import { db } from "@/lib/prisma";
import { Car } from "@/types/car";
import { auth } from "@clerk/nextjs/server";
import { BookingStatus, BookingType, PurchaseStatus } from "@prisma/client";
import { format } from "date-fns";
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

    // Build where clause for Booking (only TEST_DRIVE)
    let whereClause: any = {
      bookingType: "TEST_DRIVE",
    };

    if (status) {
      if (status !== "all") whereClause.status = status;
    }

    if (search) {
      whereClause.AND = [
        // keep bookingType constraint plus search ORs
        {
          OR: [
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
          ],
        },
      ];
    }

    const bookings = await db.booking.findMany({
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

    if (!bookings || bookings.length === 0) {
      return { success: true, data: [] };
    }

    const formattedBookings = bookings.map((booking: any) => ({
      id: booking.id,
      carId: booking.carId,
      userId: booking.userId,
      bookingDate:
        booking.bookingDate instanceof Date
          ? booking.bookingDate.toISOString()
          : booking.bookingDate,
      startTime:
        booking.startTime instanceof Date
          ? booking.startTime.toISOString()
          : booking.startTime,
      endTime:
        booking.endTime instanceof Date
          ? booking.endTime.toISOString()
          : booking.endTime,
      status: booking.status,
      notes: booking.notes,
      createdAt:
        booking.createdAt instanceof Date
          ? booking.createdAt.toISOString()
          : booking.createdAt,
      updatedAt:
        booking.updatedAt instanceof Date
          ? booking.updatedAt.toISOString()
          : booking.updatedAt,
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

    const booking = await db.booking.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      throw new Error("Booking not found");
    }

    // ensure this is a test drive booking
    if (booking.bookingType !== "TEST_DRIVE") {
      return { success: false, error: new Error("Not a test-drive booking") };
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

    await db.booking.update({
      where: { id: bookingId },
      data: { status: newStatus },
    });

    // revalidate admin pages
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

export async function getAdminRentals({
  searchTerm,
  status,
}: {
  searchTerm?: string;
  status?: string;
}) {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId },
    select: { role: true },
  });
  if (user?.role !== "ADMIN") throw new Error("Forbidden");

  const where: any = { bookingType: BookingType.RENTAL };
  if (searchTerm) {
    where.OR = [
      { car: { make: { contains: searchTerm, mode: "insensitive" } } },
      { car: { model: { contains: searchTerm, mode: "insensitive" } } },
      { user: { name: { contains: searchTerm, mode: "insensitive" } } },
      { user: { phone: { contains: searchTerm, mode: "insensitive" } } },
    ];
  }
  if (status && status !== "all") {
    where.status = status;
  }

  try {
    const rentals = await db.booking.findMany({
      where,
      include: {
        car: {
          select: {
            id: true,
            make: true,
            model: true,
            year: true,
            images: true,
            rentInfo: true,
          },
        },
        user: { select: { id: true, name: true, phone: true, email: true } },
        dealer: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    const serialRentals = rentals.map((rental) => serializeBooking(rental));

    return { success: true, data: serialRentals };
  } catch (err: unknown) {}
}

export async function updateRentalStatus({
  bookingId,
  newStatus,
}: {
  bookingId: string;
  newStatus: BookingStatus;
}) {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId },
    select: { role: true },
  });
  if (user?.role !== "ADMIN") throw new Error("Forbidden");

  const updated = await db.booking.update({
    where: { id: bookingId },
    data: { status: newStatus },
  });

  return { success: true, data: updated };
}

// export async function getDashboardStats() {
//   try {
//     const { userId } = await auth();
//     if (!userId) {
//       throw new Error("Not authenticated");
//     }
//     const user = await db.user.findUnique({
//       where: { clerkUserId: userId },
//     });
//     if (!user || user.role !== "ADMIN") {
//       throw new Error("Not authorized");
//     }

//     // --- Run all count queries in parallel ---
//     const [
//       carStats,
//       testDriveStats,
//       userStats,
//       totalDealerships,
//       completedTestDriveCarIds,
//       recentTestDrives,
//     ] = await Promise.all([
//       // --- 1 Cars ---
//       Promise.all([
//         db.car.count(),
//         db.car.count({ where: { status: "AVAILABLE" } }),
//         db.car.count({ where: { status: "SOLD" } }),
//         db.car.count({ where: { status: "RESERVED" } }),
//         db.car.count({ where: { featured: true } }),
//       ]),

//       // --- 2 Test Drives (only bookingType = TEST_DRIVE) ---
//       Promise.all([
//         db.booking.count({ where: { bookingType: "TEST_DRIVE" } }),
//         db.booking.count({
//           where: { bookingType: "TEST_DRIVE", status: "PENDING" },
//         }),
//         db.booking.count({
//           where: { bookingType: "TEST_DRIVE", status: "CONFIRMED" },
//         }),
//         db.booking.count({
//           where: { bookingType: "TEST_DRIVE", status: "COMPLETED" },
//         }),
//         db.booking.count({
//           where: { bookingType: "TEST_DRIVE", status: "CANCELLED" },
//         }),
//         db.booking.count({
//           where: { bookingType: "TEST_DRIVE", status: "NO_SHOW" },
//         }),
//       ]),

//       // --- 3 Users ---
//       Promise.all([
//         db.user.count(),
//         db.user.count({ where: { role: "ADMIN" } }),
//         db.user.count({ where: { role: "USER" } }),
//       ]),

//       // --- 4 Dealerships ---
//       db.dealer.count(),

//       // --- 5 Completed Test Drive IDs (for conversion rate) ---
//       db.booking.findMany({
//         where: { bookingType: "TEST_DRIVE", status: "COMPLETED" },
//         select: { carId: true },
//       }),

//       // --- 6 Recent Test Drives ---
//       db.booking.findMany({
//         where: { bookingType: "TEST_DRIVE" },
//         include: {
//           car: true,
//           user: {
//             select: {
//               id: true,
//               name: true,
//               email: true,
//               imageUrl: true,
//               phone: true,
//             },
//           },
//         },
//         orderBy: { createdAt: "desc" },
//         take: 5,
//       }),
//     ]);

//     // --- Destructure results ---
//     const [totalCars, availableCars, soldCars, unavailableCars, featuredCars] =
//       carStats;
//     const [
//       totalTestDrives,
//       pendingTestDrives,
//       confirmedTestDrives,
//       completedTestDrives,
//       cancelledTestDrives,
//       noShowTestDrives,
//     ] = testDriveStats;
//     const [totalUsers, totalAdmins, totalCustomers] = userStats;

//     // --- Calculate conversion rate ---
//     const soldCarAfterTestDrive = await db.car.count({
//       where: {
//         id: {
//           in: completedTestDriveCarIds.map((td: any) => td.carId),
//         },
//         status: "SOLD",
//       },
//     });

//     const conversionCompletedTestRate =
//       completedTestDrives > 0
//         ? (soldCarAfterTestDrive / completedTestDrives) * 100
//         : 0;

//     // --- Format recent test drives ---
//     const formattedRecentTestDrives = recentTestDrives.map((booking: any) => ({
//       id: booking.id,
//       carId: booking.carId,
//       userId: booking.userId,
//       bookingDate:
//         booking.bookingDate instanceof Date
//           ? booking.bookingDate.toISOString()
//           : booking.bookingDate,
//       startTime:
//         booking.startTime instanceof Date
//           ? booking.startTime.toISOString()
//           : booking.startTime,
//       endTime:
//         booking.endTime instanceof Date
//           ? booking.endTime.toISOString()
//           : booking.endTime,
//       status: booking.status,
//       notes: booking.notes,
//       createdAt:
//         booking.createdAt instanceof Date
//           ? booking.createdAt.toISOString()
//           : booking.createdAt,
//       updatedAt:
//         booking.updatedAt instanceof Date
//           ? booking.updatedAt.toISOString()
//           : booking.updatedAt,
//       car: serializeCarData(booking.car),
//       user: booking.user,
//     }));

//     return {
//       success: true,
//       data: {
//         cars: {
//           total: totalCars,
//           available: availableCars,
//           sold: soldCars,
//           unavailable: unavailableCars,
//           featured: featuredCars,
//         },
//         testDrives: {
//           total: totalTestDrives,
//           pending: pendingTestDrives,
//           confirmed: confirmedTestDrives,
//           completed: completedTestDrives,
//           cancelled: cancelledTestDrives,
//           noShow: noShowTestDrives,
//           conversionCompletedTestRate: parseFloat(
//             conversionCompletedTestRate.toFixed(2)
//           ),
//           recentTestDrives: formattedRecentTestDrives,
//         },
//         users: {
//           total: totalUsers,
//           admins: totalAdmins,
//           customers: totalCustomers,
//         },
//         dealerships: {
//           total: totalDealerships,
//         },
//       },
//     };
//   } catch (err: unknown) {
//     console.error(err instanceof Error ? err.message : "Unexpected error");
//     return {
//       success: false,
//       error: err instanceof Error ? err : new Error(String(err)),
//     };
//   }
// }

//v3.0
export async function getDashboardStats() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Not authenticated");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: { role: true },
    });
    if (!user || user.role !== "ADMIN") throw new Error("Not authorized");

    // --- Run ALL queries in parallel ---
    const [
      // 1. Cars
      carStats,

      // 2. Test Drives
      testDriveStats,

      // 3. Rentals
      rentalStats,

      // 4. Purchases
      purchaseStats,

      // 5. Users
      userStats,

      // 6. Dealers
      totalDealers,

      // 7. Completed Test Drive → Purchase conversion
      completedTestDriveCarIds,

      // 8. Recent Test Drives
      recentTestDrives,

      // 9. Recent Rentals
      recentRentals,

      // 10. Recent Purchases
      recentPurchases,

      // 11. Revenue (Purchases + Rentals)
      revenueResult,
    ] = await Promise.all([
      // --- 1. Cars ---
      Promise.all([
        db.car.count(),
        db.car.count({ where: { status: "AVAILABLE" } }),
        db.car.count({ where: { status: "SOLD" } }),
        db.car.count({ where: { status: "RESERVED" } }),
        db.car.count({ where: { featured: true } }),
      ]),

      // --- 2. Test Drives ---
      Promise.all([
        db.booking.count({ where: { bookingType: "TEST_DRIVE" } }),
        db.booking.count({
          where: { bookingType: "TEST_DRIVE", status: "PENDING" },
        }),
        db.booking.count({
          where: { bookingType: "TEST_DRIVE", status: "CONFIRMED" },
        }),
        db.booking.count({
          where: { bookingType: "TEST_DRIVE", status: "COMPLETED" },
        }),
        db.booking.count({
          where: { bookingType: "TEST_DRIVE", status: "CANCELLED" },
        }),
        db.booking.count({
          where: { bookingType: "TEST_DRIVE", status: "NO_SHOW" },
        }),
      ]),

      // --- 3. Rentals ---
      Promise.all([
        db.booking.count({ where: { bookingType: "RENTAL" } }),
        db.booking.count({
          where: { bookingType: "RENTAL", status: "PENDING" },
        }),
        db.booking.count({
          where: { bookingType: "RENTAL", status: "CONFIRMED" },
        }),
        db.booking.count({
          where: { bookingType: "RENTAL", status: "ACTIVE" },
        }),
        db.booking.count({
          where: { bookingType: "RENTAL", status: "COMPLETED" },
        }),
        db.booking.count({
          where: { bookingType: "RENTAL", status: "CANCELLED" },
        }),
      ]),

      // --- 4. Purchases ---
      Promise.all([
        db.purchase.count(),
        db.purchase.count({ where: { status: PurchaseStatus.PENDING } }),
        db.purchase.count({ where: { status: PurchaseStatus.CONFIRMED } }),
        db.purchase.count({ where: { status: PurchaseStatus.COMPLETED } }),
        db.purchase.count({ where: { status: PurchaseStatus.CANCELLED } }),
      ]),

      // --- 5. Users ---
      Promise.all([
        db.user.count(),
        db.user.count({ where: { role: "ADMIN" } }),
        db.user.count({ where: { role: "USER" } }),
      ]),

      // --- 6. Dealers ---
      db.dealer.count(),

      // --- 7. Completed Test Drive Car IDs (for conversion) ---
      db.booking.findMany({
        where: { bookingType: "TEST_DRIVE", status: "COMPLETED" },
        select: { carId: true },
      }),

      // --- 8. Recent Test Drives ---
      db.booking.findMany({
        where: { bookingType: "TEST_DRIVE" },
        include: {
          car: {
            select: {
              id: true,
              make: true,
              model: true,
              year: true,
              images: true,
            },
          },
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              phone: true,
              imageUrl: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),

      // --- 9. Recent Rentals ---
      db.booking.findMany({
        where: { bookingType: "RENTAL" },
        include: {
          car: {
            select: {
              id: true,
              make: true,
              model: true,
              year: true,
              images: true,
            },
          },
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              phone: true,
              imageUrl: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),

      // --- 10. Recent Purchases ---
      db.purchase.findMany({
        include: {
          car: {
            select: {
              id: true,
              make: true,
              model: true,
              year: true,
              images: true,
            },
          },
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              phone: true,
              imageUrl: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),

      // --- 11. Revenue ---
      Promise.all([
        db.purchase.aggregate({
          where: { status: PurchaseStatus.COMPLETED },
          _sum: { price: true },
        }),
        db.booking.aggregate({
          where: { bookingType: "RENTAL", status: "COMPLETED" },
          _sum: { totalPrice: true },
        }),
        db.purchase.groupBy({
          by: ["createdAt"],
          where: {
            status: PurchaseStatus.COMPLETED,
            createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
          },
          _sum: { price: true },
        }),
        db.booking.groupBy({
          by: ["createdAt"],
          where: {
            bookingType: "RENTAL",
            status: "COMPLETED",
            createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
          },
          _sum: { totalPrice: true },
        }),
      ]),
    ]);

    // --- Destructure ---
    const [totalCars, availableCars, soldCars, reservedCars, featuredCars] =
      carStats;
    const [
      totalTestDrives,
      pendingTD,
      confirmedTD,
      completedTD,
      cancelledTD,
      noShowTD,
    ] = testDriveStats;
    const [
      totalRentals,
      pendingRental,
      confirmedRental,
      activeRental,
      completedRental,
      cancelledRental,
    ] = rentalStats;
    const [
      totalPurchases,
      pendingPurchase,
      confirmedPurchase,
      completedPurchase,
      cancelledPurchase,
    ] = purchaseStats;
    const [totalUsers, totalAdmins, totalCustomers] = userStats;
    const [purchaseRevenue, rentalRevenue, purchaseGroup, rentalGroup] =
      revenueResult;

    // --- Conversion: Test Drive → Purchase ---
    const purchasedAfterTestDrive = await db.purchase.count({
      where: {
        carId: { in: completedTestDriveCarIds.map((td: any) => td.carId) },
        status: PurchaseStatus.COMPLETED,
      },
    });
    const testDriveToPurchaseRate =
      completedTD > 0 ? (purchasedAfterTestDrive / completedTD) * 100 : 0;

    // --- Total Revenue ---
    const totalRevenue =
      ((purchaseRevenue._sum.price &&
        parseFloat(purchaseRevenue._sum.price.toString())) ||
        0) +
      ((rentalRevenue._sum.totalPrice &&
        parseFloat(rentalRevenue._sum.totalPrice.toString())) ||
        0);
    //chart revenue
    const purchaseByDay = purchaseGroup.reduce((acc, curr) => {
      const date = format(curr.createdAt, "MMM dd");
      acc[date] =
        Number(acc[date] || 0) +
        Number(curr._sum.price ? parseFloat(curr._sum.price.toString()) : 0);
      return acc;
    }, {} as Record<string, number>);

    const rentalByDay = rentalGroup.reduce((acc, curr) => {
      const date = format(curr.createdAt, "MMM dd");
      acc[date] =
        Number(acc[date] || 0) +
        Number(
          curr._sum.totalPrice ? parseFloat(curr._sum.totalPrice.toString()) : 0
        );
      return acc;
    }, {} as Record<string, number>);

    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return {
        start: new Date(d.setHours(0, 0, 0, 0)),
        end: new Date(d.setHours(23, 59, 59, 999)),
      };
    }).reverse();

    const revenueChartData = last7Days.map((date: any) => ({
      date,
      purchases: purchaseByDay[date] || 0,
      rentals: rentalByDay[date] || 0,
    }));

    const conversionData = await Promise.all(
      last7Days.map(async ({ start, end }: { start: any; end: any }) => {
        const [completedTD, purchasedAfterTD] = await Promise.all([
          db.booking.count({
            where: {
              bookingType: "TEST_DRIVE",
              status: "COMPLETED",
              createdAt: { gte: start, lte: end },
            },
          }),
          db.purchase.count({
            where: {
              status: PurchaseStatus.COMPLETED,
              createdAt: { gte: start, lte: end },
              car: {
                bookings: {
                  some: {
                    bookingType: "TEST_DRIVE",
                    status: "COMPLETED",
                    createdAt: { lte: end },
                  },
                },
              },
            },
          }),
        ]);

        const rate =
          completedTD > 0 ? (purchasedAfterTD / completedTD) * 100 : 0;
        return {
          date: format(start, "MMM dd"),
          rate: parseFloat(rate.toFixed(2)),
        };
      })
    );

    // --- Format Recent Items ---
    const formatRecent = (
      items: any[],
      type: "testdrive" | "rental" | "purchase"
    ) =>
      items.map((item: any) => ({
        id: item.id,
        car: serializeCarData(item.car),
        user: serializeUserData(item.user),
        status: item.status,
        createdAt: item.createdAt.toISOString(),
        ...(type === "testdrive" || type === "rental"
          ? {
              bookingDate: item.bookingDate.toISOString(),
              startTime: item.startTime.toISOString(),
              endTime: item.endTime.toISOString(),
            }
          : {
              price: item.price ? parseFloat(item.price.toString()) : 0,
            }),
      }));

    return {
      success: true,
      data: {
        cars: {
          total: totalCars,
          available: availableCars,
          sold: soldCars,
          reserved: reservedCars,
          featured: featuredCars,
        },
        testDrives: {
          total: totalTestDrives,
          pending: pendingTD,
          confirmed: confirmedTD,
          completed: completedTD,
          cancelled: cancelledTD,
          noShow: noShowTD,
          conversionToPurchaseRate: parseFloat(
            testDriveToPurchaseRate.toFixed(2)
          ),
          recent: formatRecent(recentTestDrives, "testdrive"),
          conversionChart: conversionData,
        },
        rentals: {
          total: totalRentals,
          pending: pendingRental,
          confirmed: confirmedRental,
          active: activeRental,
          completed: completedRental,
          cancelled: cancelledRental,
          recent: formatRecent(recentRentals, "rental"),
        },
        purchases: {
          total: totalPurchases,
          pending: pendingPurchase,
          confirmed: confirmedPurchase,
          completed: completedPurchase,
          cancelled: cancelledPurchase,
          recent: formatRecent(recentPurchases, "purchase"),
        },
        users: {
          total: totalUsers,
          admins: totalAdmins,
          customers: totalCustomers,
        },
        dealers: {
          total: totalDealers,
        },
        revenue: {
          total: totalRevenue,
          fromPurchases: purchaseRevenue._sum.price
            ? parseFloat(purchaseRevenue._sum.price.toString())
            : 0,
          fromRentals: rentalRevenue._sum.totalPrice
            ? parseFloat(rentalRevenue._sum.totalPrice.toString())
            : 0,
          revenueChart: revenueChartData,
        },
      },
    };
  } catch (err: unknown) {
    console.error("Dashboard stats error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

export async function getAdminPurchases({
  searchTerm,
  status,
}: {
  searchTerm?: string;
  status?: string;
}) {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId },
    select: { role: true },
  });
  if (user?.role !== "ADMIN") throw new Error("Forbidden");

  const where: any = {};
  if (searchTerm) {
    where.OR = [
      { car: { make: { contains: searchTerm, mode: "insensitive" } } },
      { car: { model: { contains: searchTerm, mode: "insensitive" } } },
      { user: { name: { contains: searchTerm, mode: "insensitive" } } },
      { user: { phone: { contains: searchTerm, mode: "insensitive" } } },
    ];
  }
  if (status && status !== "all") {
    where.status = status;
  }

  const purchases = await db.purchase.findMany({
    where,
    include: {
      car: {
        select: {
          id: true,
          make: true,
          model: true,
          year: true,
          images: true,
          saleInfo: true,
        },
      },
      user: { select: { id: true, name: true, phone: true, email: true } },
      dealer: { select: { id: true, name: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  const serialPurchases = purchases.map((purchase) =>
    serializePurchase(purchase)
  );

  return { success: true, data: serialPurchases };
}

export async function updatePurchaseStatus({
  purchaseId,
  newStatus,
}: {
  purchaseId: string;
  newStatus: PurchaseStatus;
}) {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId },
    select: { role: true },
  });
  if (user?.role !== "ADMIN") throw new Error("Forbidden");

  const updated = await db.purchase.update({
    where: { id: purchaseId },
    data: { status: newStatus },
  });

  const serialPur = serializePurchase(updated);

  return { success: true, data: serialPur };
}
