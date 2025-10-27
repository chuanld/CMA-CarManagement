import z from "zod";

// Input validation schema for car details
export const CarEditSchema = z.object({
  make: z.string().min(1, "Make is required"),
      model: z.string().min(1, "Model is required"),
      year: z.string().refine((val) => {
            const year = parseInt(val);
            return !isNaN(year) && year >= 1900 && year <= new Date().getFullYear() + 1;
          }, "Valid year required"),
      // price: z.string().min(1, "Price is required"), refactor business logic later
      mileage: z.string().min(1, "Mileage is required"),
      color: z.string().min(1, "Color is required"),
      fuelType: z.string().min(1, "Fuel type is required"),
      transmission: z.string().min(1, "Transmission is required"),
      bodyType: z.string().min(1, "Body type is required"),
      seats: z.string().optional(),
      description: z.string().min(10, "Description must be at least 10 characters"),
      status: z.enum(["AVAILABLE", "SOLD", "MAINTENANCE", "PENDING"]).default("AVAILABLE"),
      featured: z.boolean().default(false),
      confidence: z.string().optional(),
    carType: z.enum(["SALE", "RENT", "BOTH"]).default("SALE"),
    saleInfo: z
      .object({
        price:  z.string().optional().refine((val) => !val || parseFloat(val) >= 0, "Price must be >= 0"),
        negotiable: z.boolean().default(false),
        status: z.enum(["AVAILABLE", "RESERVED", "SOLD", "NEGOTIATION"]).optional(),
      })
      .optional(),
    rentInfo: z
      .object({
        hourlyPrice: z.string().optional().refine((val) => !val || parseFloat(val) >= 0, "Hourly price must be >= 0"),
        dailyPrice: z.string().optional().refine((val) => !val || parseFloat(val) >= 0, "Daily price must be >= 0"),
        deposit: z.string().optional().refine((val) => !val || parseFloat(val) >= 0, "Deposit must be >= 0"),
        available: z.boolean().default(true),
    
      })
      .optional(),
})
export type CarEditSchemaType = typeof CarEditSchema;