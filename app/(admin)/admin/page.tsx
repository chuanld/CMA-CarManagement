import { getDashboardStats } from '@/actions/admin';
import React from 'react'
import { DashboardStats } from '@/types/api';
import Dashboard from './_components/dashboard';
export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Admin Dashboard | CMA ADMIN',
  description: 'Admin dashboard for managing the car marketplace',
}

const AdminPage = async () => {
  const dashboardData = await getDashboardStats();

  if (!dashboardData.success) {
    return <div className='p-6'>Failed to load dashboard data.</div>;
  }
  const stats = dashboardData.data;
  console.log(stats,'stats')
  return (
    <div className='p-6'>
      <Dashboard initialData={stats} />
    </div>
  )
}

export default AdminPage