// "use server";
// import { db } from "@/lib/prisma";
// import { User } from "@/types/user";
// import { auth } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";

// export async function getdealer() {
//   try {
//     const { userId } = await auth();
//     if (!userId) {
//       throw new Error("Unauthorized");
//     }

//     const user = await db.user.findUnique({
//       where: { clerkUserId: userId },
//     });
//     if (!user) {
//       throw new Error("User not found");
//     }

//     let dealership = await db.dealer.findFirst({
//       where: { ownerId: user.id },
//       include: {
//         workingHours: {
//           orderBy: {
//             dayOfWeek: "asc",
//           },
//         },
//       },
//     });

//     if (!dealership) {
//       dealership = await db.dealer.create({
//         data: {
//           workingHours: {
//             create: [
//               {
//                 dayOfWeek: "MONDAY",
//                 openTime: 900,
//                 closeTime: 1800,
//                 isOpen: true,
//               },
//               {
//                 dayOfWeek: "TUESDAY",
//                 openTime: 900,
//                 closeTime: 1800,
//                 isOpen: true,
//               },
//               {
//                 dayOfWeek: "WEDNESDAY",
//                 openTime: 900,
//                 closeTime: 1800,
//                 isOpen: true,
//               },
//               {
//                 dayOfWeek: "THURSDAY",
//                 openTime: 900,
//                 closeTime: 1800,
//                 isOpen: true,
//               },
//               {
//                 dayOfWeek: "FRIDAY",
//                 openTime: 900,
//                 closeTime: 1800,
//                 isOpen: true,
//               },
//             ],
//           },
//           name: "Vina Motors",
//           address: "San FansixLong, CA 94016",
//           phone: "+1 (555) 123-4567",
//           email: "contact@vina-motors.com",
//         },
//         include: {
//           workingHours: { orderBy: { dayOfWeek: "asc" } },
//         },
//       });
//     }

//     return {
//       success: true,
//       data: {
//         ...dealership,
//         createdAt: dealership.createdAt.toISOString(),
//         updatedAt: dealership.updatedAt.toISOString(),
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

// export async function saveWorkingHours(workingHours: any) {
//   try {
//     const { userId } = await auth();
//     if (!userId) {
//       throw new Error("Unauthorized");
//     }

//     const user = await db.user.findUnique({
//       where: { clerkUserId: userId },
//     });
//     if (!user) {
//       throw new Error("User not found");
//     }
//     if (user.role !== "ADMIN") {
//       throw new Error("Forbidden");
//     }

//     const dealership = await db.dealer.findFirst();
//     if (!dealership) {
//       throw new Error("Dealership not found");
//     }

//     await db.workingHour.deleteMany({
//       where: {
//         dealerId: dealership.id,
//       },
//     });

//     for (const wh of workingHours) {
//       await db.workingHour.create({
//         data: {
//           dealerId: dealership.id,
//           dayOfWeek: wh.dayOfWeek,
//           openTime: wh.openTime,
//           closeTime: wh.closeTime,
//           isOpen: wh.isOpen,
//         },
//       });
//     }
//     revalidatePath("/admin/settings");
//     return { success: true };
//   } catch (err: unknown) {
//     console.error(err instanceof Error ? err.message : "Unexpected error");
//     return {
//       success: false,
//       error: err instanceof Error ? err : new Error(String(err)),
//     };
//   }
// }

// export async function getUsers() {
//   try {
//     const { userId } = await auth();
//     if (!userId) {
//       throw new Error("Unauthorized");
//     }

//     const user = await db.user.findUnique({
//       where: { clerkUserId: userId },
//     });
//     if (!user) {
//       throw new Error("User not found");
//     }
//     if (user.role !== "ADMIN") {
//       throw new Error("Forbidden");
//     }

//     const users = await db.user.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//       include: {
//         bookings: true,
//         savedCars: true,
//       },
//     });
//     return {
//       success: true,
//       data: users.map((user) => ({
//         ...user,
//         createdAt: new Date(user.createdAt).toISOString(),
//         updatedAt: new Date(user.updatedAt).toISOString(),
//       })),
//     };
//   } catch (err: unknown) {
//     console.error(err instanceof Error ? err.message : "Unexpected error");
//     return {
//       success: false,
//       error: err instanceof Error ? err : new Error(String(err)),
//     };
//   }
// }

// export async function updateUserRole(
//   userIdToUpdate: string,
//   role: "USER" | "ADMIN"
// ) {
//   try {
//     const { userId: adminId } = await auth();
//     if (!adminId) throw new Error("Unauthorized");

//     // Check if user is admin
//     const adminUser = await db.user.findUnique({
//       where: { clerkUserId: adminId },
//     });

//     if (!adminUser || adminUser.role !== "ADMIN") {
//       throw new Error("Unauthorized: Admin access required");
//     }

//     // Update user role
//     await db.user.update({
//       where: { id: userIdToUpdate },
//       data: { role },
//     });

//     // Revalidate paths
//     revalidatePath("/admin/settings");

//     return {
//       success: true,
//     };
//   } catch (err: unknown) {
//     console.error(err instanceof Error ? err.message : "Unexpected error");
//     return {
//       success: false,
//       error: err instanceof Error ? err : new Error(String(err)),
//     };
//   }
// }

// export async function deleteUser(userIdToDelete: string) {
//   try {
//     const { userId } = await auth();
//     if (!userId) {
//       throw new Error("Unauthorized");
//     }
//     const user = await db.user.findUnique({
//       where: { id: userId },
//     });
//     if (!user) {
//       throw new Error("User not found");
//     }
//     if (user.role !== "ADMIN") {
//       throw new Error("Forbidden");
//     }

//     await db.user.delete({
//       where: { id: userIdToDelete },
//     });
//     revalidatePath("/admin/settings");
//     return {
//       success: true,
//     };
//   } catch (err: unknown) {
//     console.error(err instanceof Error ? err.message : "Unexpected error");
//     return {
//       success: false,
//       error: err instanceof Error ? err : new Error(String(err)),
//     };
//   }
// }

// export async function updatedealer(data: any) {}
// export async function getAdminUsers() {}
