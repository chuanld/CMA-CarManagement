import { getCarById } from '@/actions/car-listing';
import NotFound from '@/app/not-found';
import React from 'react'
import BookingDetails from '../_components/booking-details';
import { Car } from '@/types/car';
import { getTestDriveInfo } from '@/actions/bookings';
import BreadcrumbComponent from '@/components/breadcrumClient';

export async function generateMetadata () {
  return {
    title: `Booking Details | CMS - Car Marketplace System`,
    description: `View your booking details.`,
  }
}

const BookingPage = async ({params}:{params: {id: string}}) => {
    const {id} = await params;
    const result:any = await getCarById(id);
    const testDriveInfo = await getTestDriveInfo(id);

const businessType = result?.data?.carType || 'BOTH'
  const upcomingBookings = getUpcomingBookings(result.data, businessType);


    if (!result.success || !result.data) {
        return (
            <div><NotFound /></div>
        );
    }
  return (
    <div className='min-h-screen'>
            <section className="w-full mx-auto max-w-6xl mb-0">
        <BreadcrumbComponent />
      </section>
        {result.data && (
            <BookingDetails
            car={result.data as Car}
            dealer={result.data?.dealer}
            // historyBookings={result.data?.testDriveBookings}
            upcomingBookings={upcomingBookings}
            testDriveInfo={testDriveInfo.data}
            />
        )}
    </div>
  )
}

export default BookingPage
           

export function getUpcomingBookings(data: any, businessType: string) {
  const testDrives = data?.upcomingBookings?.testDrives ?? [];
  const rentals = data?.upcomingBookings?.rentals ?? [];

  switch (businessType) {
    case "SALE":
      return testDrives;
    case "RENT":
      return rentals;
    case "BOTH":
      return [...testDrives, ...rentals];
    default:
      return [];
  }
}
