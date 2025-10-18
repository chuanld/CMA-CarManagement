import React, { Suspense } from 'react'
import DealerList from './_components/dealer-list'

export const metadata = {
    title: 'Dealers | CMA Admin',
    description: 'Admin dealers page for Car Marketplace Admin',
}


const DealersPage = () => {
  return (
        <div className="">
        <Suspense fallback={<div>Loading...</div>}>
          <DealerList/>
        </Suspense>
    </div>
  )
}

export default DealersPage