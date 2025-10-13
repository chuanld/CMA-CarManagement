'use client'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { FilterOptions } from '@/types/api';
import { Filter, Sliders, X } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CarFilterControls from './filter-controls';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {
    data: FilterOptions
    success: boolean
}

const CarFilters = ({ filters }: { filters: any }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    console.log(filters,'filters');

    //Filter features
    const currentMake = searchParams.get('make') || '';
    const currentBodyType = searchParams.get('bodyType') || '';
    const currentFuelType = searchParams.get('fuelType') || '';
    const currentTransmission = searchParams.get('transmission') || '';
    const currentMinPrice = searchParams.get('minPrice')
        ? parseInt(searchParams.get('minPrice') || '0')
        : filters.priceRange?.min;
    const currentMaxPrice = searchParams.get('maxPrice')
        ? parseInt(searchParams.get('maxPrice') || '100000')
        : filters.priceRange?.max;
    const currentSortBy = searchParams.get('sortBy') || 'newest';



    //State
    const [make, setMake] = useState(currentMake);
    const [bodyType, setBodyType] = useState(currentBodyType);
    const [fuelType, setFuelType] = useState(currentFuelType);
    const [transmission, setTransmission] = useState(currentTransmission);
    const [priceRange, setPriceRange] = useState<[number, number]>([currentMinPrice || 0, currentMaxPrice || 100000]);
    const [sortBy, setSortBy] = useState(currentSortBy);
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    //Count filter
    const activeFiltersCount = [
        make,
        bodyType,
        fuelType,
        transmission,
        currentMinPrice || 0 > (filters.priceRange?.min || 0) ||
        currentMaxPrice || 100000 < (filters.priceRange?.max || 100000),
    ].filter(Boolean).length;

    const currentFilters = {
        make,
        bodyType,
        fuelType,
        transmission,
        priceRange,
        priceRangeMin: filters.priceRange?.min,
        priceRangeMax: filters.priceRange?.max
    }



    useEffect(() => {
        setMake(currentMake);
        setBodyType(currentBodyType);
        setFuelType(currentFuelType);
        setTransmission(currentTransmission);
        setPriceRange([currentMinPrice || 0, currentMaxPrice || 100000]);
        setSortBy(currentSortBy);
    }, [currentMake, currentBodyType, currentFuelType, currentTransmission, currentMinPrice, currentMaxPrice, currentSortBy]);

    const handleFilterChange = (filterName: string, value: any) => {
        switch (filterName) {
            case 'make':
                setMake(value as string);
                break;
            case 'bodyType':
                setBodyType(value as string);
                break;
            case 'fuelType':
                setFuelType(value as string);
                break;
            case 'transmission':
                setTransmission(value as string);
                break;
            case 'priceRange':
                setPriceRange(value as [number, number]);
                break;
            default:
                break;
        }
    }

    const handleClearFilter = (filterName: string) => {

        handleFilterChange(filterName, '');
    }

    const clearFilters = () => {
        setMake('');
        setBodyType('');
        setFuelType('');
        setTransmission('');
        setPriceRange([filters.priceRange?.min || 0, filters.priceRange?.max || 100000]);
        setSortBy('newest');

        const params = new URLSearchParams();
        const search = searchParams.get('search') || '';
        if (search) {
            params.set('search', search);
        }
        const queryString = params.toString();
        const url = queryString ? `${pathname}?${queryString}` : pathname;

        router.push(url);
        setIsMobileFiltersOpen(false);
    }

    const applyFilters = () => {
        const params = new URLSearchParams();

        if (make) params.set('make', make);
        if (bodyType) params.set('bodyType', bodyType);
        if (fuelType) params.set('fuelType', fuelType);
        if (transmission) params.set('transmission', transmission);
        // if (priceRange[0] !== (filters.priceRange?.min || 0)) params.set('minPrice', priceRange[0].toString());
        // if (priceRange[1] !== (filters.priceRange?.max || 100000)) params.set('maxPrice', priceRange[1].toString());
        if (priceRange[0] > filters.priceRange.min)
            params.set('minPrice', priceRange[0].toString());
        if (priceRange[1] < filters.priceRange.max)
            params.set('maxPrice', priceRange[1].toString());
        if (sortBy && sortBy !== 'newest') params.set('sortBy', sortBy);

        const search = searchParams.get('search') || '';
        const page = searchParams.get('page') || '';

        if (search) {
            params.set('search', search);
        }
        if (page && page !== '1') {
            params.set('page', page);
        }

        const queryString = params.toString();
        const url = queryString ? `${pathname}?${queryString}` : pathname;
        router.push(url);
        setIsMobileFiltersOpen(false);
    }


    return (
        <div className='flex lg:flex-col justify-beetween gap-4'>
            {/* Mobile Filter  */}
            <div className='lg:hidden mb-4'>
                <div className="flex items-center">
                    <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
                        <SheetTrigger asChild >
                            <Button variant='outline' className='flex items-center gap-2'>
                                <Filter className='mr-2' /> Filters
                                {activeFiltersCount > 0 && (
                                    <Badge className='ml-1 h-5 w-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs'>
                                        {activeFiltersCount}
                                    </Badge>
                                )}

                            </Button>

                        </SheetTrigger>
                        <SheetContent className='w-full sm:max-w-md overflow-y-auto' side='left'>
                            <SheetHeader>
                                <SheetTitle>Filter by</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-4"> 
                                <CarFilterControls filters={filters} currentFilters={currentFilters} onFilterChange={handleFilterChange} onClearFilter={handleClearFilter} />
                            </div>
                            <SheetFooter className='sm:justify-between gap-2 flex-row pt-2 border-t space-x-4 mt-auto'>
                                <Button
                                    variant='outline'
                                    className='flex-1'
                                    onClick={clearFilters}
                                >
                                    Reset
                                </Button>
                                <Button className='flex-1' onClick={applyFilters} type='button'>Show Results</Button>
                            </SheetFooter>
                        </SheetContent>

                    </Sheet>
                </div>
            </div>

            {/* Sort Selection  */}
            <Select value={sortBy} onValueChange={(value) => {
                setSortBy(value);
            }}>
                <SelectTrigger className='w-[180px] lg:w-full'>
                    <SelectValue placeholder='Sort by' />
                </SelectTrigger>
                <SelectContent>
                    {[
                        { value: 'newest', label: 'Newest' },
                        { value: 'priceASC', label: 'Price: Low to High' },
                        { value: 'priceDESC', label: 'Price: High to Low' },

                    ].map((option) => (
                        <SelectItem
                            key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {/* Desktop Filter  */}
            <div className="hidden lg:block sticky top-24">
                <div className="border rounded-lg overflow-hidden bg-white">
                    <div className='p-4 border-b bg-gray-50 flex justify-between items-center'>
                        <h3 className='font-medium flex items-center'>
                            <Sliders className='mr-2 h-4 w-4' />
                            Filters
                        </h3>
                        {activeFiltersCount > 0 && (
                            <Button
                                variant={'ghost'}
                                size={'sm'}
                                className='h-8 text-sm text-gray-600'
                                onClick={clearFilters}
                            >
                                <X className='mr-2' size={12} />
                                Clear Filters
                            </Button>
                        )}
                    </div>


                    <div className="p-4">
                        <CarFilterControls
                            filters={filters}
                            currentFilters={currentFilters}
                            onFilterChange={handleFilterChange}
                            onClearFilter={handleClearFilter}
                        />
                    </div>
                </div>

                <div className="px-4 py-4 border-t">
                    <Button onClick={applyFilters} className='w-full'>Apply</Button>
                </div>

            </div>
        </div>
    )
}

export default CarFilters