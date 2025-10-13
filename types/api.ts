import { Car, SerializeCars } from "./car";

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: Error;
    saved?: boolean;
    message?: string;
}

export interface  UseFetchResult<T> {
    loading: boolean;
    error: Error | null;
    data: T | null;
    fetchData: () => Promise<void>;
}

export interface CarListApiResponse {
    success: boolean;
    data: SerializeCars[];
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