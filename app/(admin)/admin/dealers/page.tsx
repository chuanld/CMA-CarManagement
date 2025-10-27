import React, { Suspense } from 'react'
import DealerList from './_components/dealer-list'

export const metadata = {
    title: 'Dealers | CMA Admin',
    description: 'Admin dealers page for Car Marketplace Admin',
}


const DealersPage = () => {
  return (
        <div className="min-h-screen p-4 bg-background text-foreground border-border">
        <Suspense fallback={<div>Loading...</div>}>
          <DealerList/>
        </Suspense>
    </div>
  )
}

export default DealersPage