"use server";
import { apiFetch } from "@/lib/api-client";
import { createClient } from "@/lib/supabase";
import { DayOfWeek } from "@car-marketplace/database";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface WorkingHourInput {
  dayOfWeek: DayOfWeek;
  isOpen: boolean;
  openTime: number; // 900 = 9:00 AM
  closeTime: number; // 1800 = 6:00 PM
  dealerId?: string;
}

export async function getDealers() {
  try {
    const data = await apiFetch("/dealers");
    return { success: true, data };
  } catch (error: unknown) {
    return {
      success: false,
      message: (error as Error).message || "Failed to fetch dealers",
    };
  }
}

export async function getDealerById(dealerId: string) {
  try {
    const data = await apiFetch(`/dealers/${dealerId}`);
    return { success: true, data };
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
    await apiFetch(`/dealers/${dealerId}/archive`, {
      method: "PATCH",
      body: JSON.stringify({ isArchived }),
    });

    revalidatePath("/admin/dealers");

    return { success: true };
  } catch (error: unknown) {
    return {
      success: false,
      message: (error as Error).message || "Failed to update dealer status",
    };
  }
}

export async function deleteDealer(dealerId: string) {
  try {
    await apiFetch(`/dealers/${dealerId}`, { method: "DELETE" });
    revalidatePath("/admin/dealers");
    return { success: true };
  } catch (error: unknown) {
    return {
      success: false,
      message: (error as Error).message || "Failed to delete dealer",
    };
  }
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
    const data = await apiFetch("/dealers", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        address,
        phone,
        description,
        logoUrl,
        workingHours,
      }),
    });

    revalidatePath("/admin/dealers");
    return { success: true, data };
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
    // File uploads stay on this side of the boundary (never proxied through
    // the NestJS API) — resolve any newly-dropped base64 logo to a Supabase
    // public URL here, same as before, then send the API a plain URL string.
    let resolvedLogoUrl = logoUrl;
    const isUploadLogo = logoUrl && logoUrl.startsWith("data:image/");
    if (isUploadLogo) {
      const cookieStore = await cookies();
      const supabase = createClient(cookieStore);
      resolvedLogoUrl = await uploadBase64ImageToSupabase(
        supabase,
        `dealers/${dealerId}`,
        logoUrl,
        dealerId
      );
    }

    const data = await apiFetch(`/dealers/${dealerId}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...(name !== undefined && { name }),
        ...(address !== undefined && { address }),
        ...(phone !== undefined && { phone }),
        ...(email !== undefined && { email }),
        ...(description !== undefined && { description }),
        ...(resolvedLogoUrl !== undefined && { logoUrl: resolvedLogoUrl }),
        ...(workingHours !== undefined && { workingHours }),
      }),
    });

    revalidatePath("/admin");
    revalidatePath("/admin/dealers");
    revalidatePath(`/admin/dealers/${dealerId}`);

    return { success: true, data };
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
