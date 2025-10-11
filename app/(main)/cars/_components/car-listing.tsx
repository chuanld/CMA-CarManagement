'use client'
import { getCars } from '@/actions/car-listing'
import useFetch from '@/app/hooks/use-fetch'
import { Car } from '@/types/car'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CarListSkeleton from './car-list-skeleton'
import { ApiResponse, CarListResponse } from '@/types/api'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CarCard from '@/components/car-card'

const CarListing = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 6;

    //Extract filters from URL search params
    const search = searchParams.get('search') || '';
    const make = searchParams.get('make') || '';
    const bodyType = searchParams.get('bodyType') || '';
    const fuelType = searchParams.get('fuelType') || '';
    const transmission = searchParams.get('transmission') || '';
    const minPrice = searchParams.get('minPrice') || 0;
    const maxPrice = searchParams.get('maxPrice') || 100000;
    const sortBy = searchParams.get('sortBy') || 'newest';
    const page = parseInt(searchParams.get('page') || '1');

    const { loading: isFetchCar, fetchData: fnGetCars, data: resultCars, error: errorData } = useFetch<CarListResponse>(getCars)

    useEffect(() => {
        fnGetCars({ search, make, bodyType, fuelType, transmission, minPrice, maxPrice, sortBy, page, limit });
    }, [search, make, bodyType, fuelType, transmission, minPrice, maxPrice, sortBy, page])


    if (isFetchCar || !resultCars) {
        return <CarListSkeleton />
    }

    if (errorData || (!resultCars.success)) {
        <Alert variant={'destructive'}>
            <Info className='h-4 w-4 mr-2' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Failed to load car. Try again later</AlertDescription>
        </Alert>
    }

    if (!resultCars || !resultCars.data) {
        return null;
    }

    const { data: cars, pagination: pageSetting } = resultCars;

    if (cars.length === 0) {
        return (
            <div>
                <div>
                    <Info className='h-4 w-4 mr-2' />
                </div>
                <h3>No cars found</h3>
                <p>We couldn't find any cars matching your criteria.</p>
                <Button variant='outline' asChild>
                    <Link href='/cars'>Clear All filter</Link>
                </Button>
            </div>
        )
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                    Showing {" "}
                    <span className="font-medium">
                        {(page - 1) * limit + 1} - {Math.min(page * limit, pageSetting.total)}
                    </span>{" "}of
                    <span className='font-medium'> of {pageSetting.total} results</span>
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((Car:Car)=>(
                    <CarCard key={Car.id} car={Car} />
                ))}
            </div>
        </div>
    )
}

export default CarListing