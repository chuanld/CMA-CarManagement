'use client'
import CarCard from '@/components/car-card'
import { Button } from '@/components/ui/button'
import { Car } from '@/types/car'
import Link from 'next/link'
import React from 'react'

type SavedCarListProps = {
    initialData: Car[] | any
}

const SavedCarList = ({ initialData }: SavedCarListProps) => {

    if (!initialData || initialData.length === 0) {
        return (
            <div>
                No saved Cars
                <Button variant="default" asChild>
                    <Link href={'/cars'}>Browse Cars</Link>
                </Button>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialData?.map((car: Car) => (
                <CarCard key={car.id} car={{...car, whishlisted: true}} />
            ))}
        </div>
    )
}

export default SavedCarList