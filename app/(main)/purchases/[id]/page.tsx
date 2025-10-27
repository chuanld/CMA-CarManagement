import { getPurchaseById } from '@/actions/purchases'
import React from 'react'
import PurchaseInfoComponent from './_components/purchase-infor'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { auth } from '@clerk/nextjs/server'
import { getCurrentUser } from '@/actions/user'

const PurchaseInformation = async ({params}: {params: {id: string}}) => {
    const { id } = await params
    const purchase = await getPurchaseById({ purchaseId: id })
    const {userId} = await auth()
    const user = await getCurrentUser(userId || '')

    if(!purchase.success){
        return <div className='min-h-screen'>Error loading purchase information: {purchase.message}</div>
    }
    if(!user?.data || user?.success === false){
      return <div className='min-h-screen'>Unauthorized</div>
    }

  return (
    <div className='min-h-screen'>
      <section className=' py-4 mb-4 shadow-sm'>
        <Breadcrumb />
      </section>
    <div className='container mx-auto py-4'>
      <PurchaseInfoComponent purchase={purchase.data} currentUserId={user?.data?.id} />
    </div>
    </div>
  )
}

export default PurchaseInformation