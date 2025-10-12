import { getDashboardStats } from '@/actions/admin';
import React from 'react'
import { Dashboard } from './_components/dashboard';
export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Admin Dashboard | CMA ADMIN',
  description: 'Admin dashboard for managing the car marketplace',
}

const AdminPage = async () => {
  const dashboardData = await getDashboardStats();
  return (
    <div className='p-6'>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <Dashboard initialData={dashboardData} />
    </div>
  )
}

export default AdminPage