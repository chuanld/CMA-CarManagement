import { z } from "zod";
import { DayOfWeek } from "@car-marketplace/database";

export const workingHourInputSchema = z.object({
  dayOfWeek: z.nativeEnum(DayOfWeek),
  isOpen: z.boolean(),
  openTime: z.number().int().min(0).max(2359),
  closeTime: z.number().int().min(0).max(2359),
});
export type WorkingHourInput = z.infer<typeof workingHourInputSchema>;

export const createDealerSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
  description: z.string().optional().default(""),
  logoUrl: z.string().optional().default(""),
  workingHours: z.array(workingHourInputSchema).optional().default([]),
});
export type CreateDealerInput = z.infer<typeof createDealerSchema>;

export const updateDealerSchema = z.object({
  name: z.string().min(1).optional(),
  address: z.string().min(1).optional(),
  phone: z.string().min(1).optional(),
  email: z.string().email().optional(),
  description: z.string().optional(),
  logoUrl: z.string().optional(),
  workingHours: z.array(workingHourInputSchema).optional(),
});
export type UpdateDealerInput = z.infer<typeof updateDealerSchema>;

export const toggleDealerArchiveSchema = z.object({
  isArchived: z.boolean().optional().default(false),
});
export type ToggleDealerArchiveInput = z.infer<typeof toggleDealerArchiveSchema>;
