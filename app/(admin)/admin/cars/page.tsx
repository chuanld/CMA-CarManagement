import React from 'react'
import CarList from './_components/car-list'
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Car Marketplace | CMA Admin',
    description: 'Manage cars in the admin panel',
}

const Cars = () => {
  return (
    <div className="p-6">
        <h1 className='text-2xl font-bold mb-6'>Cars Management</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <CarList/>
        </Suspense>
    </div>
  )
}

export default Cars