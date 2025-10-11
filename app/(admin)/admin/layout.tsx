import { getAdmin } from '@/actions/admin'
import Header from '@/components/header'
import { notFound } from 'next/navigation'
import React from 'react'
import { Sidebar } from './_components/sidebar'

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const admin = await getAdmin()
  if (!admin || !admin.authorized) {
    return notFound()
  }
  return (
    <div className='h-full'>
      <Header isAdminPage={true}/>
      <div className='flex h-full w-56 flex-col top-20 fixed z-50 inset-y-0'>
        <Sidebar/>
      </div>
      <main className='md:pl-56 pt-[80px] h-full'>
          {children}
        </main>
    </div>
  )
}

export default AdminLayout