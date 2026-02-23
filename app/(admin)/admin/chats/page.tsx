import React, { Suspense } from 'react'

import { getDealers } from '@/actions/dealers'
import ChatContainer from './_components/chat-container'

export const metadata = {
    title: 'Chats | CMA Admin',
    description: 'Admin chats page for Car Marketplace Admin',
}

const Chats = async ({searchParams}: { searchParams: { dealerId?: string } }) => {
  const params = await searchParams

  const dealers:any = await getDealers()

  if (!dealers || dealers?.data.length === 0) {
    return <div className="min-h-screen p-4 bg-background text-foreground border-border">
      No dealers found.
    </div>
  }

  return (
        <div className=" p-4 bg-background text-foreground border-border">
            <Suspense fallback={<div>Loading...</div>}>
              <ChatContainer dealers={dealers.data} searchParams={params}/>
              
            </Suspense>
        </div>
  )
}

export default Chats