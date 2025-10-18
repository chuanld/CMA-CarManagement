"use server";
import { serializeDealerData, serializeWorkingHours } from "@/lib/helper";
import { db } from "@/lib/prisma";
import { createClient } from "@/lib/supabase";
import { WorkingHour } from "@/types/working-hour";
import { auth } from "@clerk/nextjs/server";
import { DayOfWeek } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { fa } from "zod/v4/locales";

export async function getDealers() {
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

    const dealers = await db.dealer.findMany({
      where: { ownerId: user.id },
      orderBy: { createdAt: "desc" },
      // include: { cars: true, reviews: true },
    });

    const serializedDealers = dealers.map((dealer) =>
      serializeDealerData(dealer)
    );
    return {
      success: true,
      data: serializedDealers,
    };
  } catch (error: unknown) {
    return {
      success: false,
      message: (error as Error).message || "Failed to fetch dealers",
    };
  }
}

export async function getDealerById(dealerId: string) {
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
    const dealer = await db.dealer.findFirst({
      where: { id: dealerId, ownerId: user.id },
      include: { workingHours: true, owner: true, reviews: true },
    });
    if (!dealer) {
      throw new Error("Dealer not found");
    }

    return {
      success: true,
      data: dealer,
    };
  } catch (err: unknown) {
    return {
      success: false,
      message: (err as Error).message || "Failed to fetch dealer",
    };
  }
}

export async function toggleDealerArchive(
  dealerId: string,
  { isArchived = false }: { isArchived?: boolean }
) {
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
    const dealer = await db.dealer.findFirst({
      where: { id: dealerId, ownerId: user.id },
      include: { cars: true },
    });
    if (!dealer) {
      throw new Error(
        "Dealer not found or you do not have permission to update it"
      );
    }

    await db.dealer.update({
      where: { id: dealer.id, ownerId: dealer.ownerId },
      data: {
        archived: isArchived,
        ...(dealer.archived && {
          cars: {
            updateMany: {
              where: { dealerId: dealer.id },
              data: { status: "MAINTENANCE" },
            },
          },
        }),
      },
    });

    revalidatePath("/admin/dealers");

    return {
      success: true,
    };
  } catch (error: unknown) {
    return {
      success: false,
      message: (error as Error).message || "Failed to update dealer status",
    };
  }
}

export async function deleteDealer(dealerId: string) {
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
    const dealer = await db.dealer.findUnique({
      where: { id: dealerId, ownerId: user.id },
    });
    if (!dealer) {
      throw new Error(
        "Dealer not found or you do not have permission to delete it"
      );
    }
    await db.dealer.delete({
      where: { id: dealer.id, ownerId: dealer.ownerId },
    });
    revalidatePath("/admin/dealers");
    return {
      success: true,
    };
  } catch (error: unknown) {
    return {
      success: false,
      message: (error as Error).message || "Failed to delete dealer",
    };
  }
}

interface WorkingHourInput {
  dayOfWeek: DayOfWeek;
  isOpen: boolean;
  openTime: number; // 900 = 9:00 AM
  closeTime: number; // 1800 = 6:00 PM
  dealerId?: string;
}
export async function addDealer({
  email,
  name,
  address,
  phone,
  description,
  logoUrl,
  workingHours,
}: {
  email: string;
  name: string;
  address: string;
  phone: string;
  description: string;
  logoUrl: string;
  workingHours: WorkingHourInput[];
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

    const existingDealer = await db.dealer.findUnique({
      where: { email: email },
    });

    if (existingDealer) {
      throw new Error("Dealer with this email already exists");
    }

    // Filter chỉ working hours mở cửa
    const openWorkingHours = workingHours
      //Filter uneccessary data now
      // .filter(wh => wh.isOpen)
      .map((wh) => ({
        dayOfWeek: wh.dayOfWeek,
        openTime: wh.openTime, // Đảm bảo format 900, 1800
        closeTime: wh.closeTime,
        isOpen: true,
      }));

    const newDealer = await db.dealer.create({
      data: {
        name: name || user.name || "Unnamed Dealer",
        address: address || "No address provided",
        phone: phone || "No phone provided",
        email: email || user.email || "No email provided",
        description: description || "No description provided",
        ownerId: user.id,
        logoUrl: logoUrl || user.imageUrl || "",
      },
      include: { owner: true },
    });

    if (openWorkingHours.length > 0) {
      await db.workingHour.createMany({
        data: openWorkingHours.map((wh) => ({
          dealerId: newDealer.id,
          ...wh,
          dayOfWeek: wh.dayOfWeek.toUpperCase() as DayOfWeek,
        })),
        skipDuplicates: true,
      });
    }

    // Default working hours nếu không có data (optional)
    if (openWorkingHours.length === 0) {
      const defaultHours = [
        { dayOfWeek: "MONDAY", openTime: 900, closeTime: 1800, isOpen: true },
        { dayOfWeek: "TUESDAY", openTime: 900, closeTime: 1800, isOpen: true },
        {
          dayOfWeek: "WEDNESDAY",
          openTime: 900,
          closeTime: 1800,
          isOpen: true,
        },
        { dayOfWeek: "THURSDAY", openTime: 900, closeTime: 1800, isOpen: true },
        { dayOfWeek: "FRIDAY", openTime: 900, closeTime: 1800, isOpen: true },
        {
          dayOfWeek: "SATURDAY",
          openTime: 1000,
          closeTime: 1600,
          isOpen: true,
        },
        { dayOfWeek: "SUNDAY", openTime: 0, closeTime: 0, isOpen: false },
      ];

      await db.workingHour.createMany({
        data: defaultHours.map((wh) => ({
          dealerId: newDealer.id,
          ...wh,
          dayOfWeek: wh.dayOfWeek.toUpperCase() as DayOfWeek,
        })),
        skipDuplicates: true,
      });
    }

    revalidatePath("/admin/dealers");
    return {
      success: true,
      data: newDealer,
    };
  } catch (err: unknown) {
    console.error(err instanceof Error ? err.message : "Unexpected error");
    return {
      success: false,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}

export async function getPotentialOwners() {}

export async function updateDealer(
  dealerId: string,
  {
    name,
    address,
    phone,
    email,
    description,
    logoUrl,
    workingHours,
  }: {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    description?: string;
    logoUrl?: string;
    workingHours?: WorkingHourInput[];
  }
) {
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
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Invalid email format");
    }

    const dealer = await db.dealer.findUnique({
      where: { id: dealerId },
    });
    if (!dealer) {
      throw new Error("Dealer not found");
    }

    const dealerUpdateData: any = {};
    if (name !== undefined) dealerUpdateData.name = name;
    if (address !== undefined) dealerUpdateData.address = address;
    if (phone !== undefined) dealerUpdateData.phone = phone;
    if (email !== undefined) dealerUpdateData.email = email;
    if (description !== undefined) dealerUpdateData.description = description;

    let nestedWorkingHours: any = undefined;
    if (workingHours && workingHours.length > 0) {
      const serialWorkingHours = workingHours.map((wh: any) =>
        serializeWorkingHours(wh)
      );
      nestedWorkingHours = {
        deleteMany: { dealerId: dealerId },
        create: serialWorkingHours,
      };
    }

    //Handle img logo
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const folderPath = `dealers/${dealerId}`;
    const isUploadLogo =
      logoUrl &&
      logoUrl !== dealer.logoUrl &&
      logoUrl.startsWith("data:image/");
    if (isUploadLogo) {
      dealerUpdateData.logoUrl = await uploadBase64ImageToSupabase(
        supabase,
        folderPath,
        logoUrl,
        dealerId
      );
    }

    const updatedDealer = await db.dealer.update({
      where: { id: dealerId },
      data: {
        ...dealerUpdateData,
        ...(nestedWorkingHours && { workingHours: nestedWorkingHours }),
      },
      include: {
        workingHours: true,
        owner: true,
      },
    });

    revalidatePath("/admin");
    revalidatePath("/admin/dealers");
    revalidatePath(`/admin/dealers/${dealerId}`);

    return {
      success: true,
      data: updatedDealer,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: (err as Error).message || "Failed to update dealer",
    };
  }
}

async function uploadBase64ImageToSupabase(
  supabase: any,
  folderPath: string,
  base64Image: string,
  dealerId: string
) {
  if (!base64Image.startsWith("data:image/")) {
    throw new Error("Invalid image format");
  }

  const base64 = base64Image.split(",")[1];
  const imageBuffer = Buffer.from(base64, "base64");

  const mimeType = base64Image.match(/data:(image\/[a-zA-Z0-9]+);/);
  const fileExtension = mimeType ? mimeType[1].split("/")[1] : "jpeg";

  const fileName = `image-${Date.now()}-${dealerId}.${fileExtension}`;
  const filePath = `${folderPath}/${fileName}`;

  const { error } = await supabase.storage
    .from("car-images")
    .upload(filePath, imageBuffer, { contentType: `image/${fileExtension}` });

  if (error) throw new Error("Image upload failed: " + error.message);

  return `${process.env.NEXT_PUBLIC_SUPABASE_URLV2}/storage/v1/object/public/car-images/${filePath}`;
}
