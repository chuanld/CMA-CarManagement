import { Car } from "./car";

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: Error | string;
    saved?: boolean;
    message?: string;
    pagination?: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    
}

export interface  UseFetchResult<T> {
    loading: boolean;
    error: Error | null;
    data: T | null;
    fetchData: () => Promise<void>;
}

export interface CarListApiResponse {
    success: boolean;
    data: Car[];
    pagination: PaginatedResponse;
    error?: string;
}



export interface PaginatedResponse {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface FilterOptions {
    make?: string;
    model?: string;
    year?: number;

    mileageRange?: {
        min: number;
        max: number;
    };
    location?: string;
    makes?: string[];
    bodyTypes?: string[];
    fuelTypes?: string[];
    transmissions?: string[];
    priceRange: {
        min: number | 0;
        max: number | 100000;
    };
    priceRanges: {
        min: number | 0;
        max: number | 100000;
    };
}

export interface FilterOptions {
    models?: string;
    years?: number;

    makes?: string[];
    bodyTypes?: string[];
    fuelTypes?: string[];
    transmissions?: string[];
    priceRange: {
        min: number | 0;
        max: number | 100000;
    };
}


// src/types/dashboard.ts
export interface DashboardStats {
  cars: {
    total: number;
    available: number;
    sold: number;
    reserved: number;
    featured: number;
  };
  testDrives: {
    total: number;
    pending: number;
    confirmed: number;
    completed: number;
    cancelled: number;
    noShow: number;
    conversionToPurchaseRate: number;
    recent: Array<{
      id: string;
      car: any;
      user: any;
      status: string;
      createdAt: string;
      bookingDate: string;
      startTime: string;
      endTime: string;
    }>;
  };
  rentals: {
    total: number;
    pending: number;
    confirmed: number;
    active: number;
    completed: number;
    cancelled: number;
    recent: Array<{
      id: string;
      car: any;
      user: any;
      status: string;
      createdAt: string;
      bookingDate: string;
      startTime: string;
      endTime: string;
    }>;
  };
  purchases: {
    total: number;
    pending: number;
    confirmed: number;
    completed: number;
    cancelled: number;
    recent: Array<{
      id: string;
      car: any;
      user: any;
      status: string;
      createdAt: string;
      price: string;
    }>;
  };
  users: {
    total: number;
    admins: number;
    customers: number;
  };
  dealers: {
    total: number;
  };
  revenue: {
    total: number;
    fromPurchases: number;
    fromRentals: number;
  };
}