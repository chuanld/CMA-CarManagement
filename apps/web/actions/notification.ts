import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";


export async function createNotification(
  userId: string,
  title: string,
  message: string,
  type: "CHAT" | "BOOKING" | "PURCHASE" | "GENERAL" = "GENERAL" ,
  data?: Record<string, any>
) {
  await db.notification.create({
    data: {
      userId,
      title,
      message,
      type,
      data: data ? JSON.parse(JSON.stringify(data)) : undefined,
    },
  });
}

export async function getNotifications() {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId },
    select: { id: true },
  });
  if (!user) throw new Error("User not found");

  return await db.notification.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 20,
  });
}

export async function markNotificationAsRead(notificationId: string) {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId },
    select: { id: true },
  });
  if (!user) throw new Error("User not found");

  const notification = await db.notification.findUnique({
    where: { id: notificationId },
    select: { userId: true },
  });
  if (!notification || notification.userId !== user.id) {
    throw new Error("Notification not found");
  }

  await db.notification.update({
    where: { id: notificationId },
    data: { read: true },
  });

  revalidatePath("/notifications");
}

// Pattern for auto create noti
// await createNotification(
//   userId,
//   "Đặt lịch thành công",
//   `Lịch hẹn thử xe ${car.make} ${car.model} đã được xác nhận.`,
//   "BOOKING",
//   { bookingId: booking.id }
// );