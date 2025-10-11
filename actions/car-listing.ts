"use server";
import { serializeCarData } from "@/lib/helper";
import { db } from "@/lib/prisma";
import { Car } from "@/types/car";
import { WorkingHour } from "@/types/settings";
import { TestDriveBooking } from "@/types/user";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { includes } from "zod";

export async function getCarFilters() {
  try {
    const makes = await db.car.findMany({
      where: { status: "AVAILABLE" },
      distinct: ["make"],
      select: {
        make: true,
      },
      orderBy: {
        make: "asc",
      },
    });

    const bodyTypes = await db.car.findMany({
      where: { status: "AVAILABLE" },
      distinct: ["bodyType"],
      select: {
        bodyType: true,
      },
      orderBy: {
        bodyType: "asc",
      },
    });

    const fuelTypes = await db.car.findMany({
      where: { status: "AVAILABLE" },
      distinct: ["fuelType"],
      select: {
        fuelType: true,
      },
      orderBy: {
        fuelType: "asc",
      },
    });

    const transmissions = await db.car.findMany({
      where: { status: "AVAILABLE" },
      distinct: ["transmission"],
      select: {
        transmission: true,
      },
      orderBy: {
        transmission: "asc",
      },
    });

    const priceRanges = await db.car.aggregate({
      where: { status: "AVAILABLE" },
      _min: { price: true },
      _max: { price: true },
    });

    return {
      success: true,
      data: {
        makes: makes.map((item) => item.make),
        bodyTypes: bodyTypes.map((item) => item.bodyType),
        fuelTypes: fuelTypes.map((item) => item.fuelType),
        transmissions: transmissions.map((item) => item.transmission),
        priceRanges: {
          min: priceRanges._min.price
            ? parseFloat(priceRanges._min.price.toString())
            : 0,
          max: priceRanges._max.price
            ? parseFloat(priceRanges._max.price.toString())
            : 100000,
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

export async function getCars({
  search = "",
  make = "",
  bodyType = "",
  fuelType = "",
  transmission = "",
  minPrice = 0,
  maxPrice = 100000,
  sortBy = "newest",
  page = 1,
  limit = 10,
}) {
  try {
    const { userId } = await auth();
    let dbUser = null;

    if (userId) {
      dbUser = await db.user.findUnique({
        where: { clerkUserId: userId },
      });
    }

    let whereClause: any = {
      status: "AVAILABLE",
    };

    if (search) {
      whereClause.OR = [
        { make: { contains: search, mode: "insensitive" } },
        { model: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    if (make) whereClause.make = { equals: make, mode: "insensitive" };
    if (bodyType)
      whereClause.bodyType = { equals: bodyType, mode: "insensitive" };
    if (fuelType)
      whereClause.fuelType = { equals: fuelType, mode: "insensitive" };
    if (transmission)
      whereClause.transmission = { equals: transmission, mode: "insensitive" };

    whereClause.price = {
      gte: parseFloat(minPrice as any) || 0,
    };
    if (maxPrice && maxPrice < 100000)
      whereClause.price.lte = parseFloat(maxPrice as any);

    const skip = (page - 1) * limit;
    let orderBy: any = {};
    switch (sortBy) {
      case "priceAsc":
        orderBy = { price: "asc" };
        break;
      case "priceDesc":
        orderBy = { price: "desc" };
        break;
      case "oldest":
        orderBy = { createdAt: "asc" };
        break;
      case "newest":
      default:
        orderBy = { createdAt: "desc" };
        break;
    }

    const totalCars = await db.car.count({ where: whereClause });
    //excute query
    const cars = await db.car.findMany({
      where: whereClause,
      orderBy,
      skip,
      take: limit,
    });

    let whishlisted = new Set();
    if (dbUser) {
      const savedCars = await db.userSavedCar.findMany({
        where: { userId: dbUser.id },
        select: { carId: true },
      });
      whishlisted = new Set(savedCars.map((save: any) => save.carId));
    }

    const serializedCars = cars.map((car) =>
      serializeCarData(car, whishlisted.has(car.id))
    );

    return {
      success: true,
      data: serializedCars,
      pagination: {
        total: totalCars,
        page,
        limit,
        totalPages: Math.ceil(totalCars / limit),
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

export async function toggleSavedCar(carId: string) {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const car = await db.car.findUnique({
      where: { id: carId },
    });
    if (!car) {
      return { success: false, error: new Error("Car not found") };
    }

    const existingSavedCar = await db.userSavedCar.findUnique({
      where: {
        userId_carId: { userId: user.id, carId },
      },
    });
    if (existingSavedCar) {
      // Remove from saved
      await db.userSavedCar.delete({
        where: { userId_carId: { userId: user.id, carId } },
      });
      return { success: true, saved: false, message: "Removed from favorites" };
    }

    // Add to saved
    await db.userSavedCar.create({
      data: {
        userId: user.id,
        carId,
      },
    });
    revalidatePath("/saved-cars");
    return { success: true, saved: true, message: "Added to favorites" };
  } catch (err: unknown) {
    console.error(err instanceof Error ? err.message : "Unexpected error");
    return {
      success: false,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}

export async function getSavedCars() {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const savedCars = await db.userSavedCar.findMany({
      where: { userId: user.id },
      include: { car: true },
      orderBy: { savedAt: "desc" },
    });

    const savedCarSerialized = savedCars.map((car) =>
      serializeCarData(car.car)
    );

    return {
      success: true,
      data: savedCarSerialized,
    };
  } catch (err: unknown) {
    console.error(err instanceof Error ? err.message : "Unexpected error");
    return {
      success: false,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}


export async function getCarById(carId: string) {
  try {
    const {userId} = await auth();
    let dbUser = null;

    if (userId) {
      dbUser = await db.user.findUnique({
        where: { clerkUserId: userId },
      });
    }

    const car = await db.car.findUnique({
      where: { id: carId },
    });
    if (!car) {
      return { success: false, error: new Error("Car not found") };
    }
    let whishlisted = false;
    if (dbUser) {
      const existingSavedCar = await db.userSavedCar.findUnique({
        where: {
          userId_carId: { userId: dbUser.id, carId },
        },
      });
      whishlisted = !!existingSavedCar;
    }

    const existingTestDriveBooking = await db.testDriveBooking.findMany({
      where: {
        userId: dbUser?.id || "",
        carId,
        status: { in: ["PENDING", "CONFIRMED", "COMPLETED"] },
      },
      include: {user: true},
      orderBy: { bookingDate: "desc" },
    });
    let userTestDrives: any[] = [];

    if(existingTestDriveBooking && existingTestDriveBooking.length > 0){
      userTestDrives = existingTestDriveBooking.map((booking) => ({
        ...booking,
        bookingDate: booking.bookingDate.toISOString(),
        user: {
          email: booking.user?.email || "N/A",
          name: booking.user?.name || "N/A",
          phone: booking.user?.phone || "N/A",
        }
      }));
    }

    // if(existingTestDriveBooking){
    //   userTestDrive = {
    //     id: existingTestDriveBooking.id,
    //     carId: existingTestDriveBooking.carId,
    //     userId: existingTestDriveBooking.userId,
    //     bookingDate: existingTestDriveBooking.bookingDate.toISOString(),
    //     status: existingTestDriveBooking.status,
    //   };
    // }

    const dealerShip = await db.dealershipInfo.findFirst({
      include: {workingHours:true}
    });
    const serializedCar = serializeCarData(car, whishlisted);

    // return {
    //   success: true,
    //   data: serializedCar,
    // };
    return {
      success: true,
      data: {
        ...serializedCar,
        testDriverInfo: {
          userTestDrives,
          dealerShip: dealerShip
            ? {
                ...dealerShip,
                createdAt: dealerShip.createdAt.toISOString(),
                updatedAt: dealerShip.updatedAt.toISOString(),
                workingHours: dealerShip.workingHours.map((wh: WorkingHour) => ({
                  ...wh,
                  createdAt: wh.createdAt.toISOString(),
                  updatedAt: wh.updatedAt.toISOString(),
                }))
              }
            : null,
        },
      },
    }
  } catch (err: unknown) {
    console.error(err instanceof Error ? err.message : "Unexpected error");
    return {
      success: false,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}