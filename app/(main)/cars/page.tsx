import { getCarFilters } from '@/actions/car-listing'
import React from 'react'
import CarListing from './_components/car-listing'
import { Car } from '@/types/car'
import { ApiResponse, FilterOptions } from '@/types/api'
import CarFilters from './_components/car-filters'
import { Suspense } from 'react'

export const metadata = {
    title: 'Car Listings | CMA',
    description: 'Explore our extensive car listings powered by AI. Find your perfect car with ease and confidence.',
}

const CarListPage = async () => {
    const {data:filtersData,} = await getCarFilters();
  return (
    <div className='container mx-auto px-4 py-12'>
      <Suspense fallback={<div>Loading...</div>}>
        <h1 className='text-6xl mb-4 gradient-title'>Browser Cars</h1>
       <div className='flex flex-col lg:flex-row gap-8'>
        <div className='w-full lg:w-1/4 flex-shrink-0'>
            <CarFilters filters={filtersData} />
        </div>
        <div className='flex flex-col flex-1'>
          
            <CarListing />
          
        </div>
       </div>
       </Suspense>
    </div>
  )
}

export default CarListPage