import { getCarById } from '@/actions/car-listing';
import NotFound from '@/app/not-found';
import React from 'react'
import TestDriveForm from '../_components/test-drive-form';
import BookingDetails from '../_components/booking-detail';

export async function generateMetadata() {
  return {
    title: `Book Test Drive | CMA - Car Marketplace AI`,
    description: `Book a test drive for your favorite car.`,
  }
}

const TestDrivePage = async ({params}: { params: { id: string } }) => {
    const { id } =  await params;
    const result = await getCarById(id);

    if (!result.success || !result.data) {
        return (
            <NotFound />
        );
    }

  return (
    <div className=' '>
        
        {/* <TestDriveForm car={result.data} testDriverInfo={result.data.testDriveBookings} /> */}
        <BookingDetails 
          car={result.data}
          dealer={result.data.dealer}
          historyBookings={result.data.testDriveBookings} 
          upcomingBookings={result.data.upcomingBookings} />
    </div>
  )
}

export default TestDrivePage