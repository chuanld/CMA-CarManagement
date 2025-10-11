import { DealershipInfo } from "./settings";
import { TestDriveBooking, TestUserDrive, UserSavedCar } from "./user";



export  type  carDetailsFromAI = {
  success: boolean;
  data: {
    make?: string;
    model?: string;
    year?: number;
    price?: string;
    mileage?: number;
    color?: string;
    confidence?: number;
    fuelType?: string;
    transmission?: string;
    bodyType?: string;
    seats?: number;
    description?: string;
  };
};

export type Car = {
    id: string;
    make: string;
    model: string;
    year: number;
    price: string; // Decimal(10, 2) represented as string
    mileage: number;
    color: string;
    fuelType: string;
    transmission: string;
    bodyType: string;
    seats?: number;
    description: string;
    status: 'AVAILABLE' | 'UNAVAILABLE' | 'SOLD' | 'PENDING';
    featured: boolean;
    images: string[];
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    testDriverInfo: {
        dealerShip: DealershipInfo,
        userTestDrives?: TestDriveBooking[] | []
    }
    savedBy?: UserSavedCar[];
    whishlisted?: boolean;
};

export type CarImage = {
    id: string;
    url: string;
}