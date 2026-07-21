import { z } from "zod";
export declare const workingHourInputSchema: z.ZodObject<{
    dayOfWeek: z.ZodEnum<{
        MONDAY: "MONDAY";
        TUESDAY: "TUESDAY";
        WEDNESDAY: "WEDNESDAY";
        THURSDAY: "THURSDAY";
        FRIDAY: "FRIDAY";
        SATURDAY: "SATURDAY";
        SUNDAY: "SUNDAY";
    }>;
    isOpen: z.ZodBoolean;
    openTime: z.ZodNumber;
    closeTime: z.ZodNumber;
}, z.core.$strip>;
export type WorkingHourInput = z.infer<typeof workingHourInputSchema>;
export declare const createDealerSchema: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodString;
    address: z.ZodString;
    phone: z.ZodString;
    description: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    logoUrl: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    workingHours: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        dayOfWeek: z.ZodEnum<{
            MONDAY: "MONDAY";
            TUESDAY: "TUESDAY";
            WEDNESDAY: "WEDNESDAY";
            THURSDAY: "THURSDAY";
            FRIDAY: "FRIDAY";
            SATURDAY: "SATURDAY";
            SUNDAY: "SUNDAY";
        }>;
        isOpen: z.ZodBoolean;
        openTime: z.ZodNumber;
        closeTime: z.ZodNumber;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
export type CreateDealerInput = z.infer<typeof createDealerSchema>;
export declare const updateDealerSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    logoUrl: z.ZodOptional<z.ZodString>;
    workingHours: z.ZodOptional<z.ZodArray<z.ZodObject<{
        dayOfWeek: z.ZodEnum<{
            MONDAY: "MONDAY";
            TUESDAY: "TUESDAY";
            WEDNESDAY: "WEDNESDAY";
            THURSDAY: "THURSDAY";
            FRIDAY: "FRIDAY";
            SATURDAY: "SATURDAY";
            SUNDAY: "SUNDAY";
        }>;
        isOpen: z.ZodBoolean;
        openTime: z.ZodNumber;
        closeTime: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type UpdateDealerInput = z.infer<typeof updateDealerSchema>;
export declare const toggleDealerArchiveSchema: z.ZodObject<{
    isArchived: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export type ToggleDealerArchiveInput = z.infer<typeof toggleDealerArchiveSchema>;
