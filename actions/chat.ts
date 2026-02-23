"use server";

import { serializeMessage } from "@/lib/helper";
import { db } from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { success } from "zod";

export async function getOrCreateConversation(dealerId: string, carId: string) {
  try {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId },
    });
    if (!user) throw new Error("User not found");

    // Validate car belongs to dealerId FE gửi lên
    const car = await db.car.findUnique({
      where: { id: carId },
      select: { dealerId: true },
    });
    if (!car || car.dealerId !== dealerId) {
      return { success: false, error: "Car not found or dealer mismatch" };
    }

    // BUYER FLOW ONLY → create or get
    const conversation = await db.conversation.findFirst({
      where: {
        carId,
        dealerId,
        userId: user.id,
      },
    });

    if (conversation) {
      return { success: true, data: conversation };
    }

    // Create new
    const created = await db.conversation.create({
      data: {
        carId,
        dealerId,
        userId: user.id,
      },
    });

    return { success: true, data: created };
  } catch (error) {
    console.error("Conversation error:", error);
    return { success: false, error: "Failed to create or get conversation" };
  }
}

export async function getMessagesByConversation(conversationId: string) {
  try {
    const messages = await db.message.findMany({
      where: { conversationId },
      orderBy: { createdAt: "asc" },
      include: {
        sender: {
          select: { id: true, name: true, imageUrl: true, role: true },
        },
        receiver: {
          select: { id: true, name: true, imageUrl: true, role: true },
        },
      },
    });

    const serialMessages = messages.map(serializeMessage);
    return {
      success: true,
      data: serialMessages,
    };
  } catch (err: unknown) {
    console.error("Error fetching messages:", err);
    return {
      success: false,
      error: "Failed to fetch messages",
    };
  }
}

export async function sendMessage({
  conversationId,
  content,
}: {
  conversationId: string;
  content: string;
}) {
  try {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId },
      select: { id: true },
    });
    if (!user) throw new Error("User not found");

    const conversation = await db.conversation.findUnique({
      where: { id: conversationId },
      select: {
        id: true,
        userId: true,
        dealerId: true,
        carId: true,
      },
    });
    if (!conversation) throw new Error("Conversation not found");

    const dealer = await db.dealer.findUnique({
      where: { id: conversation.dealerId },
      select: { id: true, ownerId: true },
    });
    if (!dealer?.ownerId) throw new Error("Dealer owner not found");

    const senderId = user.id;
    let receiverId: string;

    if (senderId === conversation.userId) {
      receiverId = dealer.ownerId; // user → dealer.owner
    } else if (senderId === dealer.ownerId) {
      receiverId = conversation.userId; // dealer.owner → user
    } else {
      throw new Error("Sender is not part of this conversation");
    }

    const message = await db.message.create({
      data: {
        conversationId,
        carId: conversation.carId,
        senderId,
        receiverId,
        content,
        type: "TEXT",
      },
      include: {
        sender: {
          select: { id: true, name: true, imageUrl: true, role: true },
        },
        receiver: {
          select: { id: true, name: true, imageUrl: true, role: true },
        },
      },
    });

    const serialMessage = serializeMessage(message);

    await pusherServer.trigger(
      `conversation-${conversationId}`,
      "new-message",
      serialMessage
    );

    if (senderId === conversation.userId) {
      await pusherServer.trigger(
        `pm-dealer-${dealer.ownerId}`,
        "notification",
        {
          conversationId,
          message: {
            ...serialMessage,
            isUser: senderId === conversation.userId,
            dealerId: conversation.dealerId,
          },
        }
      );
    } else {
      await pusherServer.trigger(
        `pm-user-${conversation.userId}`,
        "notification",
        {
          conversationId,
          message: {
            ...serialMessage,
            isUser: senderId === conversation.userId,
            dealerId: conversation.dealerId,
          },
        }
      );
    }

    return {
      success: true,
      data: {
        ...serialMessage,
        isUser: senderId === conversation.userId,
      },
    };
  } catch (err) {
    console.error("Error sending message:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to send message",
    };
  }
}

export async function getMessages(conversationId: string) {
  try {
    const res = await getMessagesByConversation(conversationId);
    return res;
  } catch (error) {
    console.error("Get messages error:", error);
    return {
      success: false,
      error: "Failed to load messages",
    };
  }
}

//Manage Dealer Conversations
export async function getDealerConversations(dealerId: string) {
  try {
    const { userId: clerkUserId } = await auth();
    if (!clerkUserId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId },
    });
    if (!user) throw new Error("User not found");

    const conversations = await db.conversation.findMany({
      where: { dealerId },
      include: {
        user: {
          select: { id: true, name: true, imageUrl: true },
        },
        car: {
          select: { id: true, model: true, make: true, year: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const serialConversations = conversations.map((conv) => ({
      ...conv,
      user: conv.user,
      car: conv.car,
    }));
    return { success: true, data: serialConversations };
  } catch (err: unknown) {
    console.error("Get messages error:", err);
    return {
      success: false,
      error: "Failed to load messages",
    };
  }
}

export async function getConversationInfo(conversationId: string) {
  try {
    if (!conversationId) return null;

    const data = await db.conversation.findUnique({
      where: { id: conversationId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            imageUrl: true,
            phone: true,
            role: true,
          },
        },
        car: {
          select: {
            id: true,
            model: true,
            year: true,
            images: true,
          },
        },
        dealer: {
          select: {
            id: true,
            name: true,
            address: true,
          },
        },
      },
    });

    return {
      success: true,
      data: {
        user: data?.user,
        car: data?.car,
        dealer: data?.dealer,
      },
    };
  } catch (err: unknown) {
    console.error("Get conversation info error:", err);
    return {
      success: false,
      error: "Failed to load conversation info",
    };
  }
}
