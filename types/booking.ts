import { Car } from "./car";
import { Dealer } from "./dealer";
import { User } from "./user";

export interface Booking {
  id: string;
  carId: string;
  userId: string;
  dealerId: string;
  bookingType: BookingType; // RENTAL | TEST_DRIVE
  bookingDate: Date;
  startTime: Date;
  endTime: Date;
  totalPrice?: number | null;
  status: BookingStatus; // PENDING | CONFIRMED | CANCELLED | COMPLETED (tuỳ enum)
  notes?: string | null;
  createdAt: Date;
  updatedAt: Date;
  statusChangedAt?: Date | null;
  statusChangedBy?: string | null;
  rentalType?: 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | null;

  // Relations
  car: Car;
  user: Pick<User, "id" | "name" | "email" | "phone" | "imageUrl">;
  dealer: Dealer;
}

export type BookingType = 'RENTAL' | 'TEST_DRIVE';
export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';


export type RentalBooking = {
  id: string;
  carId: string;
  bookingType: "RENTAL";
  rentalType: "HOURLY" | "DAILY";
  bookingDate: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
  status: "PENDING" | "CONFIRMED" | "ACTIVE" | "COMPLETED" | "CANCELLED";
  notes: string | null;
  car: {
    id: string;
    make: string;
    model: string;
    year: number;
    images: string[];
    dealer: {
      name: string;
      address: string;
      phone: string;
      email: string;
      logoUrl?: string;
    };
  };
  dealer: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
};