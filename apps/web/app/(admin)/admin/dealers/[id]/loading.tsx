// app/dealers/[id]/loading.tsx
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, Phone, Mail, MapPin, Star, Clock, MessageCircle, Loader2 } from 'lucide-react'

export default function DealerDetailsLoading() {
  return (
    <div className="container mx-auto p-4 max-w-7xl space-y-6">
      {/* Header Loading */}
      <div className="bg-muted rounded-lg p-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
          <div className="flex items-center gap-4">
            <Skeleton className="h-20 w-20 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-64" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
          
          <div className="flex gap-2">
            <Skeleton className="h-10 w-24 rounded-md" />
            <Skeleton className="h-10 w-32 rounded-md" />
          </div>
        </div>
      </div>

      {/* Tabs Loading */}
      <Tabs defaultValue="info">
        <TabsList className="grid w-full grid-cols-4">
          {['info', 'hours', 'reviews', 'stats'].map((tab) => (
            <TabsTrigger key={tab} value={tab} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Skeleton className="h-4 w-16 mx-auto" />
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Info Tab Skeleton */}
        <div className="mt-6 space-y-6">
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-10 w-24 rounded-md" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-10 w-3/4" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-10 w-1/2" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-20 w-full" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-24 w-full rounded" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-32 w-32 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Working Hours Tab Skeleton */}
        <div className="mt-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-10 w-24 rounded-md" />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="space-y-2 p-4 border rounded-lg">
                <Skeleton className="h-4 w-16 mx-auto" />
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Skeleton className="h-4 w-4 rounded" />
                  <Skeleton className="h-4 w-12" />
                </div>
                <div className="space-y-2 opacity-50">
                  <Skeleton className="h-8 w-16 mx-auto" />
                  <Skeleton className="h-8 w-16 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Tab Skeleton */}
        <div className="mt-6 space-y-6">
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-10 w-24 rounded-md" />
          </div>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-10 w-32" />
          </div>
          
          {/* Reviews List */}
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Skeleton key={j} className="h-4 w-4" />
                        ))}
                      </div>
                      <Skeleton className="h-4 w-8" />
                    </div>
                    <Skeleton className="h-5 w-48" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-3 w-20" />
                      <Skeleton className="h-3 w-3 rounded-full inline mr-1" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                    <Skeleton className="h-16 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <div className="flex gap-1">
                      <Skeleton className="h-6 w-6 rounded" />
                      <Skeleton className="h-6 w-6 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Tab Skeleton */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-6 bg-muted rounded-lg space-y-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-12 w-20 text-3xl font-bold" />
            </div>
          ))}
        </div>
      </Tabs>

      {/* Floating loading indicator */}
      <div className="fixed top-4 right-4 z-50">
        <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm border rounded-lg px-4 py-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="text-sm text-muted-foreground">Loading dealer details...</span>
        </div>
      </div>
    </div>
  )
}