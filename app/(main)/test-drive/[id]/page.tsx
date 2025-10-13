import { getCarById } from '@/actions/car-listing';
import NotFound from '@/app/not-found';
import React from 'react'
import TestDriveForm from '../_components/test-drive-form';

export async function generateMetadata({ params }: { params: { id: string } }) {
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
        
        <TestDriveForm car={result.data} testDriverInfo={result.data.testDriverInfo} />
    </div>
  )
}

export default TestDrivePage