import { getDealerById } from '@/actions/dealers'
import React from 'react'
import DealerDetailsPage from './_components/dealer-details'
import { Dealer } from '@/types/dealer'

const DealerDetails = async ({params}: {params: {id: string}}) => {
    const {id} = await params
    const {data: dealer} = await getDealerById(id)

  return (
    <div>
        <DealerDetailsPage dealer={dealer} />
    </div>
  )
}

export default DealerDetails