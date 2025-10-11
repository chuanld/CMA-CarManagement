import { getCarById } from '@/actions/car-listing'
import React from 'react'
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {  CarIcon } from "lucide-react";
import CarDetails from './_components/car-details';
    



const CarPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    const car = await getCarById(id)

    if (!car.success || !car.data) {
        return (
            <div className="container mx-auto px-6 py-10">
                <Card className="shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 border-b">
                        <CardTitle className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                            <CarIcon className="w-7 h-7 text-indigo-600" />
                            Car Not Found
                        </CardTitle>
                    </CardHeader>
                </Card>
            </div>
        )
    }
    return (
        <div className="container mx-auto px-6 py-10">
            <CarDetails car={car.data} />
        </div>
    );
}

export default CarPage