import React from 'react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import AdminPurchaseList from './_components/purchase-list'

export const metadata = {
    title: 'Purchases | CMA - Car Marketplace AI',
    description: 'Manage purchases and bookings efficiently.',
}

const PurchasesAdminPage = () => {

  return (
    <div className='p-6'>
        <section className='py-4'>
          <Breadcrumb/>
        </section>
        <AdminPurchaseList/>
        
    </div>
  )
}

export default PurchasesAdminPage