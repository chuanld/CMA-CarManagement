import { CarStatus } from "@prisma/client";
import { Dealer } from "./dealer";
import { Review } from "./review";
import { DealershipInfo } from "./settings";
import { TestDriveBooking, TestUserDrive, UserSavedCar } from "./user";



export  type  carDetailsFromAI = {
  success: boolean;
  data: {
    make?: string;
    model?: string;
    year?: number;
    mileage?: number;
    color?: string;
    confidence?: number;
    fuelType?: string;
    transmission?: string;
    bodyType?: string;
    seats?: number;
    description?: string;
    //v3 fields
    salePrice?: number;
    rentHourlyPrice?: number;
    rentDailyPrice?: number;
    deposit?: number;
  };
};

export type GETCARS = {
  success?: boolean;
  data: Car[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  error?: string;
}

// export type Car = {
//     id: string;
//     make: string;
//     model: string;
//     year: number;
//     price: string; // Decimal(10, 2) represented as string
//     mileage: number;
//     color: string;
//     fuelType: string;
//     transmission: string;
//     bodyType: string;
//     seats?: number;
//     description: string;
//     status: 'AVAILABLE' | 'UNAVAILABLE' | 'SOLD' | 'PENDING';
//     featured: boolean;
//     images: string[];
//     createdAt: string; // ISO date string
//     updatedAt: string; // ISO date string
//     testDriverInfo: {
//         dealerShip: DealershipInfo,
//         userTestDrives?: TestDriveBooking[] | []
//     }
//     savedBy?: UserSavedCar[];
//     whishlisted?: boolean;
// };

export interface Car {
  id: string
  make: string
  model: string
  year: number
  price: number // Decimal
  mileage: number
  color: string
  fuelType: string
  transmission: string
  bodyType: string
  seats?: number | null
  description: string
  status: CarStatus
  featured: boolean
  images: string[]
  createdAt: Date
  updatedAt: Date
  avgRating?: number | null
  countViews: number
  dealerId?: string | null
  durationView: number
  reviewCount: number
  statusChangedAt?: Date | null
  statusChangedBy?: string | null
  dealer?: Dealer | null
  reviews: Review[]
  testDriveBookings?: TestDriveBooking[]
  savedBy?: UserSavedCar[]
  whishlisted?: boolean
  isBookedByOther?: boolean
  upcomingBookings?: TestDriveBooking[]
  

  //v3 fields
  salePrice?: number | null
  rentHourlyPrice?: number | null
  rentDailyPrice?: number | null
  deposit?: number | null
  carType?: string | null
  saleInfo?: {
    price?: number
    negotiable?: boolean
  } | null
  rentInfo?: {
    hourlyPrice: number | null
    dailyPrice: number | null
    deposit: number | null
    available: boolean
  } | null
}

export interface CarCreateInput {
  make: string
  model: string
  year: number
  price: number
  mileage: number
  color: string
  fuelType: string
  transmission: string
  bodyType: string
  seats?: number
  description: string
  images: string[]
  dealerId?: string
}

export type CarImage = {
    id: string;
    url: string;
}