import { getCarById } from '@/actions/car-listing'
import React from 'react'
import CarEditForm from './_components/car-edit-form'
import { adminGetCarById } from '@/actions/cars'

const CarDetails = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    const car = await adminGetCarById(id)

    if (!car.success || !car.data) {
        return <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Car Not Found</h1>
            <p>The requested car does not exist.</p>
        </div>
    }

    return (
        <div className="container mx-auto p-4">
            <div className='p-8 space-y-4'>
                <h1 className="text-2xl font-bold mb-4">{car?.data.make} {car?.data.model}</h1>
            <CarEditForm carId={id} defaultValues={car.data} />
            </div>
            
        </div>
    )
}

export default CarDetails