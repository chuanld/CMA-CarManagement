'use client'

import { useParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Skeleton } from '@/components/ui/skeleton'
import { Dealer } from '@/types/dealer'
import { DealerHeader } from './header'
import { useState } from 'react'
import { DealerInfoTab } from './infor'
import { ReviewsTab } from './reviews'
import { WorkingHours } from './working-hours'

export default function DealerDetailsPage({dealer}: {dealer: Dealer|any}) {

    const [loading, setLoading] = useState(false)

    if (!dealer) {
        return (
            <div className="container mx-auto p-6">
                <div className="text-center text-destructive">
                    Failed to load dealer details
                </div>
            </div>
        )
    }



  return (
    <div className="container mx-auto p-4 max-w-7xl">
      {/* Header */}
      <DealerHeader dealerId={dealer.id} loading={false} dealer={dealer} />
      
      {/* Tabs */}
      <Tabs defaultValue="info" className="mt-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="hours">Working Hours</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="info" className="mt-6">
          {loading ? (
            <Skeleton className="h-64 w-full" />
          ) : (
            <DealerInfoTab dealerId={dealer.id} dealer={dealer} />
          )}
        </TabsContent>

        <TabsContent value="hours" className="mt-6">
          {loading ? (
            <Skeleton className="h-96 w-full" />
          ) : (
            <WorkingHours dealerId={dealer.id} dealer={dealer} />
          )}
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <ReviewsTab  reviews={dealer.reviews} />
        </TabsContent>

        <TabsContent value="stats" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Average Rating</h3>
              <div className="text-3xl font-bold text-yellow-500">
                {dealer?.avgRating || 0}/5
              </div>
            </div>
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Total Reviews</h3>
              <div className="text-3xl font-bold">{dealer?.reviewCount || 0}</div>
            </div>
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Status</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                dealer?.archived ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
              }`}>
                {dealer?.archived ? 'Archived' : 'Active'}
              </span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}