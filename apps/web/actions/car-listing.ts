"use server";

import { apiFetch } from "@/lib/api-client";

export async function getCarFilters() {
  try {
    const data = await apiFetch("/cars/filters");
    return { success: true, data };
  } catch (err: unknown) {
    console.error(err);
    return { success: false, error: err };
  }
}

export async function getCars({
  search = "",
  make = "",
  bodyType = "",
  fuelType = "",
  transmission = "",
  minPrice = 0,
  maxPrice = 1000000000,
  sortBy = "newest",
  page = 1,
  limit = 10,
}) {
  try {
    const params = new URLSearchParams({
      search,
      make,
      bodyType,
      fuelType,
      transmission,
      minPrice: String(minPrice),
      maxPrice: String(maxPrice),
      sortBy,
      page: String(page),
      limit: String(limit),
    });
    const { data, pagination } = await apiFetch<{ data: unknown; pagination: unknown }>(
      `/cars?${params.toString()}`
    );
    return { success: true, data, pagination };
  } catch (err: unknown) {
    console.error(err);
    return { success: false, error: err };
  }
}

export async function toggleSavedCar(carId: string) {
  try {
    const { saved, message } = await apiFetch<{ saved: boolean; message: string }>(
      `/cars/${carId}/save`,
      { method: "POST" }
    );
    return { success: true, saved, message };
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
}

export async function getSavedCars() {
  try {
    const data = await apiFetch("/cars/saved");
    return { success: true, data };
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
}

export async function getCarById(carId: string) {
  try {
    const data = await apiFetch(`/cars/${carId}`);
    return { success: true, data };
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
}
