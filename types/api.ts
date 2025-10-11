import { Car } from "./car";

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: Error;
    saved?: boolean;
    message?: string;
}

export interface CarListResponse {
    success: boolean;
    data: Car[];
    pagination: PaginatedResponse;

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