'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Review } from '@/types/review'
import { Dealer } from '@/types/dealer'
import { Star, Search, Calendar, MessageCircle, Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

type ReviewStatus = 'PENDING' | 'APPROVED' | 'REJECTED'

const reviewSchema = z.object({
  title: z.string().min(3).max(100),
  content: z.string().min(10).max(2000),
  rating: z.number().min(1).max(5),
  authorName: z.string().optional(),
  authorEmail: z.string().email().optional(),
})

interface ReviewsTabProps {
  dealerId: string
  dealer: Dealer
}

export function ReviewsTab({ reviews }: { reviews: Review[] | any[] }) {
  const [filterStatus, setFilterStatus] = useState<'ALL' | ReviewStatus>('ALL')
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)




  const filteredReviews = reviews.filter((review: Review) => {
    // const matchesStatus = filterStatus === 'ALL' || review?.status === filterStatus
    // const matchesSearch = !searchTerm ||
    //   review?.comment.toLowerCase().includes(searchTerm.toLowerCase()) || ''
          // return matchesStatus && matchesSearch
          return review
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Reviews ({reviews.length})</h2>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? 'Cancel' : 'Add Review'}
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
          <Input
            placeholder="Search reviews..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as any)}
          className="px-3 py-2 border rounded-md"
        >
          <option value="ALL">All Status</option>
          <option value="PENDING">Pending</option>
          <option value="APPROVED">Approved</option>
          <option value="REJECTED">Rejected</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No reviews found</p>
          </div>
        ) : (
          filteredReviews.map((review: Review) => (
            <div key={review.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">{renderStars(review.rating)}</div>
                    <span className="text-sm">{review.rating}/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {review.userId || 'Anonymous'} •{' '}
                    <Calendar className="w-3 h-3 inline mr-1" />
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm mt-2">{review.comment}</p>
                </div>
                {/* <div className="ml-4 space-y-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    review.status === 'APPROVED' ? 'bg-green-100 text-green-600' :
                    review.status === 'REJECTED' ? 'bg-red-100 text-red-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                    {review.status}
                  </span>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div> */}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Review Form - Simplified for page */}
      {showAddForm && (
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Add New Review</h3>
          {/* Add your review form here similar to the dialog */}
        </div>
      )}
    </div>
  )
}