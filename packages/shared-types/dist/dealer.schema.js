"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleDealerArchiveSchema = exports.updateDealerSchema = exports.createDealerSchema = exports.workingHourInputSchema = void 0;
const zod_1 = require("zod");
const database_1 = require("@car-marketplace/database");
exports.workingHourInputSchema = zod_1.z.object({
    dayOfWeek: zod_1.z.nativeEnum(database_1.DayOfWeek),
    isOpen: zod_1.z.boolean(),
    openTime: zod_1.z.number().int().min(0).max(2359),
    closeTime: zod_1.z.number().int().min(0).max(2359),
});
exports.createDealerSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string().min(1),
    address: zod_1.z.string().min(1),
    phone: zod_1.z.string().min(1),
    description: zod_1.z.string().optional().default(""),
    logoUrl: zod_1.z.string().optional().default(""),
    workingHours: zod_1.z.array(exports.workingHourInputSchema).optional().default([]),
});
exports.updateDealerSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).optional(),
    address: zod_1.z.string().min(1).optional(),
    phone: zod_1.z.string().min(1).optional(),
    email: zod_1.z.string().email().optional(),
    description: zod_1.z.string().optional(),
    logoUrl: zod_1.z.string().optional(),
    workingHours: zod_1.z.array(exports.workingHourInputSchema).optional(),
});
exports.toggleDealerArchiveSchema = zod_1.z.object({
    isArchived: zod_1.z.boolean().optional().default(false),
});
