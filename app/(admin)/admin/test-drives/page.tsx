import React from 'react'
import TestDriveList from './_components/test-drive-list'

export const metadata = {
    title: 'Test Drives | CMA - Car Marketplace AI',
    description: 'Manage test drives and bookings efficiently.',
}

const TestDrivesAdminPage = () => {

  return (
    <div className='p-6'>
        <h1 className="text-2xl font-bold mb-6">Test Drives Management</h1>
        <TestDriveList />
    </div>
  )
}

export default TestDrivesAdminPage