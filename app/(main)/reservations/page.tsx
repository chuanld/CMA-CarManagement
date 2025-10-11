import { getUserTestDrives } from '@/actions/test-drive';
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import { ReservationsList } from './_components/reservations-list';

export const metadata = {
    title: 'Reservations | CMA - Car Marketplace AI',
    description: 'Manage your car reservations and test drives easily.',
}

const ReservationsPage = async () => {
    const {userId} = await auth();
    if(!userId) {
        redirect('/sign-in?redirect=/reservations');
    }

    const reservations:any = await getUserTestDrives();
    return (
        <div className='container mx-auto px-6 py-10'>
            <h1 className="text-6xl mb-6 gradient-title">Your Reservations</h1>
            <ReservationsList initialData={reservations} />
        </div>
    )
}

export default ReservationsPage