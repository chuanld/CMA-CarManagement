'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { Heart, HeartIcon, Loader2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { useRouter } from 'next/navigation';
import { Label } from './ui/label';
import useFetch from '@/app/hooks/use-fetch';
import { ApiResponse } from '@/types/api';
import { Car } from '@/types/car';
import { updateCarStatus } from '@/actions/cars';
import { toast } from 'sonner';
import { toggleSavedCar } from '@/actions/car-listing';
import { useAuth } from '@clerk/nextjs';

const CarCard = (props: any) => {
    const { car } = props;
    const [isSaved, setIsSaved] = useState<boolean>(car.whishlisted || false);
    const { isSignedIn } = useAuth(); // Replace with actual auth state


    const router = useRouter();
    const { loading: updatingCar, fetchData: updateStatusCar, data: updateCarData, error: updateCarError } = useFetch<ApiResponse<Car[]>>(updateCarStatus);

    const { loading: isSaving, fetchData: fnToggleSavedCar, data: savedCar, error: savedCarError } = useFetch<ApiResponse<any>>(toggleSavedCar);


    // const handleToggleFeatured = async (car: Car) => {
    //     if (!isSignedIn) {
    //         router.push('/sign-in');
    //         return;
    //     } 
    //     await updateStatusCar(car.id, { featured: !car.featured });
    // }

    useEffect(() => {
        if(savedCar?.saved !== isSaved && savedCar?.success){
            setIsSaved(!!savedCar.saved);
            toast.success(savedCar.message || 'Updated successfully');
        }
    },[savedCar, isSaved])

    const handleToggleSave = async (car: Car) => {
        if (!isSignedIn) {
            router.push('/sign-in');
            return;
        }
        await fnToggleSavedCar(car.id);
    }



    return (
        <Card className='overflow-hidden p-4 hover:shadow-lg transition-transform transform hover:scale-105 group relative' >
            <div className='relative h-48'>
                {
                    car.images && car.images.length > 0 ? (
                        <div className='relative w-full h-full mb-4'>
                            <Image src={car.images[0]} alt={car.make} className='object-cover group-hover:scale-110 transition-transform duration-300' fill />
                        </div>
                    ) : (
                        <div className='w-full h-full bg-gray-200 flex items-center justify-center mb-4'>
                            <span className='text-gray-500'>No Image Available</span>
                        </div>
                    )
                }

                <h3 className='text-lg font-semibold'>{car.model} {car.make}</h3>
            </div>

            <Button 
                variant='ghost'
                size='icon' 
                onClick={() => handleToggleSave(car)} 
                className={`absolute top-2 right-2 rounded-full hover:bg-white/80 transition-transform transform hover:scale-110
                    ${isSaved ? 'text-red-500 hover:text-red-700' : 'text-gray-500 hover:text-gray-700'}`}
            >
                {/* <Heart fill={car.featured ? 'red-500' : 'transparent'} size='30px' className={`w-4 h-4 cursor-pointer`} /> */}
                {isSaving ? (
                    <Loader2 className='animate-spin w-4 h-4' />
                ) : (
                    <Heart className={`${isSaved ? 'fill-current' : 'fill-transparent'}`} size={20} />
                )}
            </Button>

            <CardContent className='flex flex-wrap flex-col p-0 gap-2'>
                <div className='mt-6 flex justify-between items-center'>
                    {/* <div className='flex flex-start items-center gap-2'>
                        <Label className='text-sm text-gray-500'>Price per day</Label>
                        <p className='text-lg font-semibold'>${car.price}</p>
                    </div> */}
                    <div>
                        <p className='text-lg font-semibold'>{car.mileage.toLocaleString()} miles</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant='outline' className="bg-blue-100 text-blue-800">{car.fuelType}</Badge>
                    <Badge variant='outline' className="bg-green-100 text-green-800">{car.transmission}</Badge>
                    <Badge variant='outline' className="bg-purple-100 text-purple-800">{car.year}</Badge>
                    <Badge variant='outline' className="bg-yellow-100 text-yellow-800">{car.seats||4} Seats</Badge>
                </div>

                <div className=""
                    onClick={() => router.push(`/cars/${car.id}`)}>
                    <Button className='w-full hover:shadow-md transition-transform transform hover:scale-105'>Book Now</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CarCard