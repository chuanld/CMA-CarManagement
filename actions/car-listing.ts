"use server";
import { serializeCarData, serializeDealerData, serializeWorkingHours } from "@/lib/helper";
import { db } from "@/lib/prisma";
import { Car } from "@/types/car";
import { WorkingHour } from "@/types/settings";
import { TestDriveBooking } from "@/types/user";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { includes, success } from "zod";

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
            : 3000000,
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


// export async function getCarById(carId: string) {
//   try {
//     const {userId} = await auth();
//     let dbUser = null;

//     if (userId) {
//       dbUser = await db.user.findUnique({
//         where: { clerkUserId: userId },
//       });
//     }

//     const car = await db.car.findUnique({
//       where: { id: carId },
//     });
//     console.log(car)
//     if (!car) {
//       return { success: false, error: new Error("Car not found") };
//     }
//     let whishlisted = false;
//     if (dbUser) {
//       const existingSavedCar = await db.userSavedCar.findUnique({
//         where: {
//           userId_carId: { userId: dbUser.id, carId },
//         },
//       });
//       whishlisted = !!existingSavedCar;
//     }

//     const existingTestDriveBooking = await db.testDriveBooking.findMany({
//       where: {
//         userId: dbUser?.id || "",
//         carId,
//         status: { in: ["PENDING", "CONFIRMED", "COMPLETED"] },
//       },
//       include: {user: true},
//       orderBy: { bookingDate: "desc" },
//     });
//     let userTestDrives: any[] = [];

//     if(existingTestDriveBooking && existingTestDriveBooking.length > 0){
//       userTestDrives = existingTestDriveBooking.map((booking) => ({
//         ...booking,
//         bookingDate: booking.bookingDate.toISOString(),
//         user: {
//           email: booking.user?.email || "N/A",
//           name: booking.user?.name || "N/A",
//           phone: booking.user?.phone || "N/A",
//         }
//       }));
//     }

//     // if(existingTestDriveBooking){
//     //   userTestDrive = {
//     //     id: existingTestDriveBooking.id,
//     //     carId: existingTestDriveBooking.carId,
//     //     userId: existingTestDriveBooking.userId,
//     //     bookingDate: existingTestDriveBooking.bookingDate.toISOString(),
//     //     status: existingTestDriveBooking.status,
//     //   };
//     // }

//     const dealerShip = await db.dealershipInfo.findFirst({
//       include: {workingHours:true}
//     });
//     const serializedCar = serializeCarData(car, whishlisted);

//     // return {
//     //   success: true,
//     //   data: serializedCar,
//     // };
//     return {
//       success: true,
//       data: {
//         ...serializedCar,
//         testDriverInfo: {
//           userTestDrives,
//           dealerShip: dealerShip
//             ? {
//                 ...dealerShip,
//                 createdAt: dealerShip.createdAt.toISOString(),
//                 updatedAt: dealerShip.updatedAt.toISOString(),
//                 workingHours: dealerShip.workingHours.map((wh: WorkingHour) => ({
//                   ...wh,
//                   createdAt: wh.createdAt.toISOString(),
//                   updatedAt: wh.updatedAt.toISOString(),
//                 }))
//               }
//             : null,
//         },
//       },
//     }
//   } catch (err: unknown) {
//     console.error(err instanceof Error ? err.message : "Unexpected error");
//     return {
//       success: false,
//       error: err instanceof Error ? err : new Error(String(err)),
//     };
//   }
// }

export async function getCarById(carId: string) {
  try {
    // const { userId } = await auth();

    // // 1️⃣ Lấy user nếu đã đăng nhập
    // const dbUser = userId
    //   ? await db.user.findUnique({ where: { clerkUserId: userId } })
    //   : null;

    // // 2️⃣ Lấy thông tin xe kèm dealer, review, test drive
    // const car = await db.car.findUnique({
    //   where: { id: carId },
    //   include: {
    //     dealer: {
    //       include: { workingHours: true },
    //     },
    //     reviews: {
    //       include: { user: true },
    //       orderBy: { createdAt: "desc" },
    //     },
    //     testDriveBookings: {
    //       include: { user: true}
    //     }
    //   },
    // });
    // console.log(car)

    // if (!car) {
    //   return { success: false, error: new Error("Car not found") };
    // }

    // // 3️⃣ Kiểm tra wishlist
    // const wishlisted = dbUser
    //   ? !!(await db.userSavedCar.findUnique({
    //       where: { userId_carId: { userId: dbUser.id, carId } },
    //     }))
    //   : false;

    // // 4️⃣ Lấy danh sách test drive của user
    // let userTestDrives: any[] = [];
    // if (dbUser) {
    //   const testDrives = await db.testDriveBooking.findMany({
    //     where: {
    //       userId: dbUser.id,
    //       carId,
    //       status: { in: ["PENDING", "CONFIRMED", "COMPLETED"] },
    //     },
    //     include: { user: true },
    //     orderBy: { bookingDate: "desc" },
    //   });

    //   userTestDrives = testDrives.map((test) => ({
    //     ...test,
    //     bookingDate: test.bookingDate.toISOString(),
    //     createdAt: test.createdAt.toISOString(),
    //     updatedAt: test.updatedAt.toISOString(),
    //     user: {
    //       name: test.user?.name ?? "N/A",
    //       email: test.user?.email ?? "N/A",
    //       phone: test.user?.phone ?? "N/A",
    //     },
    //   }));
    // }
    // const serialWorkingHours = car.dealer?.workingHours.map((wh)=>serializeDealerData(wh))

    // const dealer = car.dealer
    //   ? {
    //       ...car.dealer,
    //       createdAt: car.dealer.createdAt.toISOString(),
    //       updatedAt: car.dealer.updatedAt.toISOString(),
    //       workingHours: serialWorkingHours
    //     }
    //   : null;

    // // 6️⃣ Serialize dữ liệu review
    // const reviews = car.reviews.map((r) => ({
    //   id: r.id,
    //   rating: r.rating,
    //   comment: r.comment,
    //   createdAt: r.createdAt.toISOString(),
    //   updatedAt: r.updatedAt.toISOString(),
    //   user: {
    //     name: r.user?.name ?? "Anonymous",
    //     email: r.user?.email ?? "",
    //     imageUrl: r.user?.imageUrl ?? "",
    //   },
    // }));

    // // 7️⃣ Chuẩn hóa dữ liệu xe
    // const serializedCar = serializeCarData(car, wishlisted);

    // // 8️⃣ Trả dữ liệu cuối cùng
    // return {
    //   success: true,
    //   data: {
    //     ...serializedCar,
    //     dealer,
    //     reviews,
    //     testDriverBookings: userTestDrives,
    //     upcomingBookings
    //   },
    // };
    const {userId} = await auth();

    const dbUser = userId
      ? await db.user.findUnique({where: {clerkUserId: userId}})
      : null;

    const car = await db.car.findUnique({
      where: {id: carId},
      include: {
        dealer: { include: {workingHours: true}},
        reviews: {
          include: {user:true},
          orderBy: {createdAt: 'desc'}
        },
        testDriveBookings: {
          include: { user: true},
        }
      }
    })

    if (!car) {
      return { success: false, error: new Error("Car not found") };
    }

    const whishlisted = dbUser
      ? !!(await db.userSavedCar.findUnique({
        where: {userId_carId: {userId: dbUser.id, carId}}
      }))
      : false
    
    let userTestDrives: any[]=[];
    if(dbUser) {
      const testDrives = await db.testDriveBooking.findMany({
        where: {
          userId: dbUser.id,
          carId,
          status: { in: ["PENDING", "CONFIRMED","COMPLETED"]}
        },
        include: { user: true},
        orderBy: {bookingDate: 'desc'}
      })
      userTestDrives = testDrives.map((testDrive)=>({
        ...testDrive,
        bookingDate: testDrive.bookingDate.toISOString(),
        createdAt: testDrive.createdAt.toISOString(),
        updatedAt: testDrive.updatedAt.toISOString(),
        user: {
          name:testDrive.user?.name ?? 'N/A',
          email: testDrive.user?.email ?? 'N/A',
          phone: testDrive.user?.phone ?? 'N/A'
        }
      }))
    }

    const today = new Date();
    today.setHours(0,0,0,0)
    const upcomingRaws = await db.testDriveBooking.findMany({
      where: {
        carId,
        status: {in:["PENDING","CONFIRMED"]},
        bookingDate: {gte: today}
      },
      include: {user:true},
      orderBy: [{bookingDate: 'asc'},{startTime: 'asc'}],
    })

    const upcomingBookings = upcomingRaws.map((book)=>({
      id: book.id,
      carId: book.carId,
      userId: book.userId,
      bookingDate: book.bookingDate.toISOString(),
      startTime: book.startTime,
      endTime: book.endTime,
      status: book.status,
      notes: book.notes,
      createdAt: book.createdAt.toISOString(),
      updatedAt: book.updatedAt.toISOString(),
      user: {
        name: book.user?.name ?? 'N/A',
        email: book.user?.email ?? 'N/A',
        phone: book.user?.phone ?? 'N/A',
      }
    }))

    const isBookedByOther = upcomingRaws.length > 0 && upcomingRaws.some((book)=> book.userId !== dbUser?.id)

    const serializedWorkingHours = car.dealer?.workingHours.map((wh: any) => serializeWorkingHours(wh))
    
    const dealer = car.dealer ? {
      ...car.dealer,
      createdAt: car.dealer.createdAt.toISOString(),
      updatedAt: car.dealer.updatedAt.toISOString(),
      workingHours: serializedWorkingHours
    } : null;

    const reviews = car.reviews.map((r)=>({
      ...r,
      createdAt: r.createdAt.toISOString(),
      updatedAt: r.updatedAt.toISOString(),
      user: {
        name: r.user?.name ?? 'N/A',
        email: r.user?.email ?? 'N/A',
        phone: r.user?.phone ?? 'N/A',
      }
    }));

    const serializedCar = serializeCarData(car, whishlisted);

    return {
      success: true,
      data: {
        ...serializedCar,
        dealer,
        reviews,
        testDriveBookings: userTestDrives,
        isBookedByOther,
        upcomingBookings
      }
    }

  } catch (err) {
    console.error(err instanceof Error ? err.message : "Unexpected error");
    return {
      success: false,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}
