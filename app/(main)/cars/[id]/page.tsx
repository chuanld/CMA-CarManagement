import { getCarById } from '@/actions/car-listing'
import React from 'react'
import { CarIcon } from "lucide-react";
import CarDetails from './_components/car-details';
import { getTestDriveInfo } from '@/actions/bookings';
import BreadcrumbComponent from '@/components/breadcrumClient';
import { CarProvider, useCar } from '@/app/context/car-context';
import { CarDataProvider } from './data-provider';




const CarPage =  () => {
    
    return (
        <div className="container mx-auto px-4 py-10 bg-background text-foreground">
            <section className="w-full  mb-6">
                <BreadcrumbComponent />
            </section>
                <CarDetails />
            </div>
    );
}

export default CarPage