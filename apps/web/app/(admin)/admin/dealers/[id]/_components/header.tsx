'use client'

import { Dealer } from '@/types/dealer'
import { Users, Phone, Mail, MapPin, Star, Edit3, Mail as MailIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import Link from 'next/link'

interface DealerHeaderProps {
  dealerId: string
  dealer?: Dealer | null
  loading: boolean
}

export function DealerHeader({ dealerId, dealer }: DealerHeaderProps) {
//   if (loading) {
//     return (
//       <div className="bg-background border rounded-lg p-6">
//         <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
//           {/* Avatar & Title Skeleton */}
//           <div className="flex items-center gap-4">
//             <Skeleton className="h-20 w-20 rounded-full" />
//             <div className="space-y-3">
//               <Skeleton className="h-8 w-64" />
//               <div className="flex items-center gap-3">
//                 <Skeleton className="h-4 w-32" />
//                 <Skeleton className="h-6 w-20 rounded-full" />
//               </div>
//             </div>
//           </div>

//           {/* Contact Info Skeleton */}
//           <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
//             {Array.from({ length: 3 }).map((_, i) => (
//               <div key={i} className="flex items-center gap-2">
//                 <Skeleton className="h-4 w-4 rounded-full" />
//                 <Skeleton className="h-4 w-32" />
//               </div>
//             ))}
//           </div>

//           {/* Action Buttons Skeleton */}
//           <div className="flex gap-2">
//             <Skeleton className="h-10 w-28 rounded-md" />
//             <Skeleton className="h-10 w-32 rounded-md" />
//           </div>
//         </div>
//       </div>
//     )
//   }

  if (!dealer) {
    return (
      <div className="bg-background border rounded-lg p-6 text-center text-muted-foreground">
        Dealer not found
      </div>
    )
  }

  return (
<div className="bg-gradient-to-r from-background to-muted/20 border rounded-xl p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        {/* Avatar & Dealer Info */}
        <div className="flex items-center gap-4 flex-1">
          {/* Custom Avatar */}
          <div className="relative h-20 w-20 rounded-full border-2 border-primary/20 overflow-hidden bg-muted flex items-center justify-center">
            {dealer.logoUrl ? (
              <div className="relative h-full w-full">
                <Image
                  src={dealer.logoUrl}
                  alt={`${dealer.name} logo`}
                  fill
                  className="object-cover"
                  sizes="80px"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                  onLoadingComplete={() => {
                    // Image loaded successfully
                  }}
                />
                {/* Fallback icon when image fails */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-primary to-primary-foreground p-2 rounded-full">
                <Users className="h-12 w-12 text-primary-foreground" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-foreground truncate" title={dealer.name}>
              {dealer.name}
            </h1>
            <div className="flex items-center gap-3 mt-2">
              {/* Rating */}
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor((dealer.avgRating || 0))
                          ? 'text-yellow-400 fill-current'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {dealer.avgRating?.toFixed(1) || '0.0'}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({dealer.reviewCount || 0})
                </span>
              </div>
              
              {/* Status Badge */}
              <Badge 
                variant={dealer.archived ? "destructive" : "secondary"}
                className={`${
                  dealer.archived 
                    ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {dealer.archived ? 'Archived' : 'Active'}
              </Badge>
            </div>
          </div>
        </div>

        {/* Contact Information - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 flex-1 max-w-lg">
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg group hover:bg-muted transition-colors">
            <MailIcon className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm font-medium truncate" title={dealer.email}>
              {dealer.email}
            </span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <Phone className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm font-medium">{dealer.phone}</span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <span 
              className="text-sm font-medium truncate" 
              title={dealer.address}
            >
              {dealer.address}
            </span>
          </div>
        </div>

        {/* Contact Information - Mobile */}
        <div className="md:hidden flex flex-col gap-3 flex-1 max-w-md">
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <MailIcon className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm font-medium truncate md:hidden" title={dealer.email}>
              {dealer.email}
            </span>
          </div>
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <Phone className="w-4 h-4 text-primary flex-shrink-0" />
            <a href={`tel:${dealer.phone}`} className="text-sm font-medium hover:text-primary transition-colors">
              {dealer.phone}
            </a>
          </div>
          <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm font-medium leading-relaxed max-w-[200px] line-clamp-2">
              {dealer.address}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            variant="outline" 
            asChild
            className="w-full sm:w-auto"
          >
            <Link href={`mailto:${dealer.email}`}>
              <MailIcon className="w-4 h-4 mr-2" />
              Contact
            </Link>
          </Button>
          {/* <Button 
            asChild
            className="w-full sm:w-auto"
          >
            <Link href={`/dealers/${dealerId}/edit`}>
              <Edit3 className="w-4 h-4 mr-2" />
              Edit
            </Link>
          </Button> */}
        </div>
      </div>

      {/* Mobile Address Summary */}
      {dealer.address && (
        <div className="md:hidden mt-4 p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="truncate flex-1" title={dealer.address}>
              {dealer.address}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}