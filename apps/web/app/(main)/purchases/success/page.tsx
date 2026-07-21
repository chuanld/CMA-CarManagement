import { getPurchaseById } from '@/actions/purchases'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import React from 'react'
import PurchaseSuccess from './purchase-success'
import { redirect } from 'next/navigation'


const SuccessPurchase = async({searchParams}: {searchParams: {purchaseId: string}}) => {
  const {purchaseId:id} = await searchParams
 
  const purchase = await getPurchaseById({purchaseId:id})

  if(!id){
    redirect('/purchases')
  }

  if(!purchase || purchase?.success === false|| !purchase?.data){
    return <div>Purchase not found</div>
  }

  if (!['CONFIRMED', 'COMPLETED'].includes(purchase.data?.status)) {
    redirect(`/purchases/${id}`);
  }
  return (
    <div className='min-h-screen'>
      <section className='container py-4 mx-auto'><Breadcrumb/></section>
      <div className='container py-4 mx-auto'>
        <PurchaseSuccess purchase={purchase?.data}/>
      </div>
    </div>
  )
}

export default SuccessPurchase