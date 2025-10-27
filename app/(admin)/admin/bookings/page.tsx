import React from 'react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import AdminBookingDashboard from './_components/bookings-list'

export const metadata = {
    title: 'Test Drives | CMA - Car Marketplace AI',
    description: 'Manage test drives and bookings efficiently.',
}

const TestDrivesAdminPage = () => {

  return (
    <div className='p-6'>
        <section className='py-4'>
          <Breadcrumb/>
        </section>
        {/* <TestDriveList /> */}
        <AdminBookingDashboard/>
    </div>
  )
}

export default TestDrivesAdminPage