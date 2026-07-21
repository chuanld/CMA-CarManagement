"use server";

import { apiFetch } from "@/lib/api-client";
import { revalidatePath } from "next/cache";

export async function createRental({
  carId,
  startTime,
  endTime,
  notes,
}: {
  carId: string;
  startTime: string; // ISO
  endTime: string; // ISO
  notes?: string;
}) {
  try {
    const data = await apiFetch("/rentals", {
      method: "POST",
      body: JSON.stringify({ carId, startTime, endTime, notes }),
    });

    revalidatePath("/rentals");

    return { success: true, data };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}

export async function getRentals({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}) {
  try {
    const params = new URLSearchParams({ page: String(page), limit: String(limit) });
    const { data, pagination } = await apiFetch<{ data: unknown; pagination: unknown }>(
      `/rentals?${params.toString()}`
    );
    return { success: true, data, pagination };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}
