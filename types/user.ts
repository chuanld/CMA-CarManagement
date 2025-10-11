import { Car } from "./car";

export type UserRole = 'USER' | 'ADMIN';

export interface User {
    id: string;
    clerkUserId: string;
    email: string;
    name?: string;
    imageUrl?: string;
    phone?: string;
    createdAt: Date;
    updatedAt: Date;
    role: UserRole;
    testDrives: TestDriveBooking[];
    savedCars: UserSavedCar[];
}

export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED' | 'NO_SHOW';

export interface TestDriveBooking {
    id: string;
    carId: string;
    userId: string;
    bookingDate: Date;
    startTime: string;
    endTime: string;
    status: BookingStatus;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
    car: Car;
    user: User;
}

export interface UserSavedCar {
    id: string;
    userId: string;
    carId: string;
    savedAt: Date;
    car: Car;
    user: User;
}

export interface TestUserDrive {
    id: string;
    carId: string;
    userId: string;
    bookingDate: Date;
    status: BookingStatus;
}