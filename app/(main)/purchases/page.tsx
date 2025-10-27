import { getPurchases } from '@/actions/purchases'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import React from 'react'
import MyPurchases from './_components/my-purchases'

const Purchases = async () => {
    const purchases = await getPurchases()

    if(!purchases.success || purchases.data.length === 0){
        return <div>Error loading purchases:</div>
    }
  return (
    <div className='min-h-screen'>
        <section><Breadcrumb/></section>
        <div className='container py-4 mx-auto'>
            <MyPurchases purchases={purchases.data}/>
        </div>
    </div>
  )
}

export default Purchases