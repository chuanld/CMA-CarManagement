// 'use client'

// import { useCallback, useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Textarea } from '@/components/ui/textarea'
// import { Loader2, Star, User, MessageCircle, Calendar, ThumbsUp, ThumbsDown, Edit, Trash2, Search } from 'lucide-react'
// import { z } from 'zod'
// import { Form, useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { toast } from 'sonner'
// import useFetch from '@/app/hooks/use-fetch'
// import { ApiResponse } from '@/types/api'
// import { Switch } from '@/components/ui/switch'
// // import { ReviewSkeleton } from './skeleton'

// // Review schema for validation
// const reviewSchema = z.object({
//     title: z.string().min(3, 'Title must be at least 3 characters').max(100),
//     content: z.string().min(10, 'Content must be at least 10 characters').max(2000),
//     rating: z.number().min(1).max(5),
//     isApproved: z.boolean().optional(),
//     authorName: z.string().min(2, 'Author name is required').max(50).optional(),
//     authorEmail: z.string().email('Invalid email format').optional()
// })

// type ReviewStatus = 'PENDING' | 'APPROVED' | 'REJECTED'

// interface Review {
//     id: string
//     dealerId: string
//     title: string
//     content: string
//     rating: number
//     status: ReviewStatus
//     isApproved: boolean
//     authorName?: string
//     authorEmail?: string
//     createdAt: string
//     updatedAt?: string
// }

// interface ReviewDialogProps {
//     dealerId: string // REQUIRED - dealer ID
//     children?: React.ReactNode
//     trigger?: React.ReactNode
//     isOpen?: boolean
//     onOpenChange?: (open: boolean) => void
//     onSuccess?: () => void
//     showAddReview?: boolean // Whether to show add review form
// }

// export function ReviewDialog({ 
//     dealerId, 
//     children, 
//     trigger, 
//     onSuccess, 
//     isOpen, 
//     onOpenChange,
//     showAddReview = true 
// }: ReviewDialogProps) {
//     const [open, setOpen] = useState(false)
//     const [selectedReview, setSelectedReview] = useState<Review | null>(null)
//     const [filterStatus, setFilterStatus] = useState<ReviewStatus | 'ALL'>('ALL')
//     const [searchTerm, setSearchTerm] = useState('')

//     const {
//         loading: fetchingReviews,
//         fetchData: fnFetchReviews,
//         data: resultReviews,
//         error: errorFetchReviews
//     } = useFetch<ApiResponse<Review[]>>(getReviewsByDealerId)

//     const {
//         loading: reviewActionLoading,
//         fetchData: fnReviewAction,
//         data: resultReviewAction,
//         error: errorReviewAction
//     } = useFetch<ApiResponse<Review>>(() => ({}))

//     // Add/Edit Review Form
//     const form = useForm<z.infer<typeof reviewSchema>>({
//         resolver: zodResolver(reviewSchema),
//         defaultValues: {
//             title: '',
//             content: '',
//             rating: 5,
//             isApproved: true,
//             authorName: '',
//             authorEmail: ''
//         }
//     })

//     // Controlled dialog
//     const handleOpenChange = (value: boolean) => {
//         setOpen(value)
//         onOpenChange?.(value)
//         if (!value) {
//             form.reset()
//             setSelectedReview(null)
//         }
//     }

//     // Fetch reviews when dialog opens
//     useEffect(() => {
//         if (open && dealerId) {
//             fnFetchReviews(dealerId)
//         }
//     }, [open, dealerId])

//     // Handle review action success
//     useEffect(() => {
//         if (resultReviewAction?.success) {
//             toast.success(
//                 selectedReview 
//                     ? 'Review updated successfully!' 
//                     : 'Review added successfully!'
//             )
//             fnFetchReviews(dealerId) // Refresh reviews
//             handleOpenChange(false)
//             onSuccess?.()
//         }
//     }, [resultReviewAction])

//     // Handle errors
//     useEffect(() => {
//         if (errorReviewAction) {
//             toast.error(errorReviewAction.message || 'Failed to process review')
//         }
//         if (errorFetchReviews) {
//             toast.error(errorFetchReviews.message || 'Failed to fetch reviews')
//         }
//     }, [errorReviewAction, errorFetchReviews])

//     const handleAddReview = async (data: z.infer<typeof reviewSchema>) => {
//         await fnReviewAction({
//             action: 'create',
//             dealerId,
//             data: {
//                 ...data,
//                 rating: Number(data.rating)
//             }
//         })
//     }

//     const handleEditReview = async (data: z.infer<typeof reviewSchema>) => {
//         if (!selectedReview?.id) return
        
//         await fnReviewAction({
//             action: 'update',
//             reviewId: selectedReview.id,
//             data: {
//                 ...data,
//                 rating: Number(data.rating)
//             }
//         })
//     }

//     const handleDeleteReview = async (reviewId: string) => {
//         if (!confirm('Are you sure you want to delete this review?')) return
        
//         await fnReviewAction({
//             action: 'delete',
//             reviewId
//         })
//         fnFetchReviews(dealerId)
//     }

//     const handleApproveReview = async (reviewId: string, approve: boolean) => {
//         await fnReviewAction({
//             action: 'update',
//             reviewId,
//             data: { isApproved: approve }
//         })
//     }

//     const filteredReviews = resultReviews?.data?.filter(review => {
//         const matchesStatus = filterStatus === 'ALL' || review.status === filterStatus
//         const matchesSearch = !searchTerm || 
//             review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             review.authorName?.toLowerCase().includes(searchTerm.toLowerCase())
//         return matchesStatus && matchesSearch
//     }) || []

//     const renderTrigger = () => {
//         if (children) {
//             return (
//                 <DialogTrigger asChild onClick={() => handleOpenChange(true)}>
//                     {children}
//                 </DialogTrigger>
//             )
//         }
//         return (
//             <DialogTrigger asChild onClick={() => handleOpenChange(true)}>
//                 <Button variant="outline" className="gap-2">
//                     <Star className="w-4 h-4" />
//                     Manage Reviews
//                 </Button>
//             </DialogTrigger>
//         )
//     }

//     const renderStars = (rating: number) => {
//         return Array.from({ length: 5 }, (_, i) => (
//             <Star 
//                 key={i} 
//                 className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
//             />
//         ))
//     }

//     const getStatusColor = (status: ReviewStatus) => {
//         switch (status) {
//             case 'APPROVED': return 'text-green-600 bg-green-100'
//             case 'REJECTED': return 'text-red-600 bg-red-100'
//             default: return 'text-yellow-600 bg-yellow-100'
//         }
//     }

//     const isDialogControlled = isOpen !== undefined

//     return (
//         <Dialog open={isDialogControlled ? isOpen : open} onOpenChange={handleOpenChange}>
//             {renderTrigger()}

//             <DialogContent className="max-w-4xl w-full max-h-[95vh] flex flex-col">
//                 <DialogHeader>
//                     <DialogTitle className="flex items-center gap-2">
//                         <Star className="w-5 h-5 text-yellow-500" />
//                         Dealer Reviews
//                     </DialogTitle>
//                 </DialogHeader>

//                 <div className="flex-1 flex flex-col overflow-hidden">
//                     {/* Filters */}
//                     <div className="flex flex-col sm:flex-row gap-2 p-4 bg-muted/50 rounded-lg mb-4">
//                         <div className="flex-1 relative">
//                             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                             <Input
//                                 placeholder="Search reviews..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="pl-10"
//                             />
//                         </div>
//                         <select 
//                             value={filterStatus} 
//                             onChange={(e) => setFilterStatus(e.target.value as ReviewStatus | 'ALL')}
//                             className="px-3 py-2 border rounded-md"
//                         >
//                             <option value="ALL">All Status</option>
//                             <option value="PENDING">Pending</option>
//                             <option value="APPROVED">Approved</option>
//                             <option value="REJECTED">Rejected</option>
//                         </select>
//                     </div>

//                     {/* Reviews List */}
//                     <div className="flex-1 overflow-y-auto p-4 space-y-4">
//                         {fetchingReviews ? (
//                             <ReviewSkeleton />
//                         ) : filteredReviews.length === 0 ? (
//                             <div className="text-center py-8 text-muted-foreground">
//                                 <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
//                                 <p>No reviews found</p>
//                             </div>
//                         ) : (
//                             filteredReviews.map((review) => (
//                                 <motion.div
//                                     key={review.id}
//                                     initial={{ opacity: 0, y: 10 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     className="border rounded-lg p-4 space-y-3"
//                                 >
//                                     <div className="flex justify-between items-start">
//                                         <div className="flex-1">
//                                             <div className="flex items-center gap-2 mb-2">
//                                                 <div className="flex gap-1">{renderStars(review.rating)}</div>
//                                                 <span className="text-sm font-medium">{review.rating}/5</span>
//                                             </div>
//                                             <h4 className="font-semibold">{review.title}</h4>
//                                             <p className="text-sm text-muted-foreground mb-2">
//                                                 by {review.authorName || 'Anonymous'} •{' '}
//                                                 <Calendar className="w-3 h-3 inline mr-1" />
//                                                 {new Date(review.createdAt).toLocaleDateString()}
//                                             </p>
//                                             <p className="text-sm leading-relaxed">{review.content}</p>
//                                         </div>
//                                         <div className="flex flex-col gap-2 ml-4">
//                                             <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(review.status)}`}>
//                                                 {review.status}
//                                             </span>
//                                             <div className="flex gap-1">
//                                                 <Button
//                                                     size="sm"
//                                                     variant="ghost"
//                                                     onClick={() => {
//                                                         setSelectedReview(review)
//                                                         form.reset({
//                                                             title: review.title,
//                                                             content: review.content,
//                                                             rating: review.rating,
//                                                             isApproved: review.isApproved,
//                                                             authorName: review.authorName || '',
//                                                             authorEmail: review.authorEmail || ''
//                                                         })
//                                                     }}
//                                                 >
//                                                     <Edit className="w-3 h-3" />
//                                                 </Button>
//                                                 <Button
//                                                     size="sm"
//                                                     variant="ghost"
//                                                     onClick={() => handleDeleteReview(review.id)}
//                                                     className="text-destructive hover:text-destructive"
//                                                 >
//                                                     <Trash2 className="w-3 h-3" />
//                                                 </Button>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Approval Controls */}
//                                     {!review.isApproved && (
//                                         <div className="flex gap-2 pt-2 border-t">
//                                             <Button
//                                                 size="sm"
//                                                 variant="outline"
//                                                 onClick={() => handleApproveReview(review.id, true)}
//                                                 disabled={reviewActionLoading}
//                                             >
//                                                 <ThumbsUp className="w-3 h-3 mr-1" />
//                                                 Approve
//                                             </Button>
//                                             <Button
//                                                 size="sm"
//                                                 variant="destructive"
//                                                 onClick={() => handleApproveReview(review.id, false)}
//                                                 disabled={reviewActionLoading}
//                                             >
//                                                 <ThumbsDown className="w-3 h-3 mr-1" />
//                                                 Reject
//                                             </Button>
//                                         </div>
//                                     )}
//                                 </motion.div>
//                             ))
//                         )}
//                     </div>

//                     {/* Add Review Form */}
//                     {showAddReview && (
//                         <AnimatePresence>
//                             <motion.div
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: 'auto' }}
//                                 exit={{ opacity: 0, height: 0 }}
//                                 className="border-t pt-4 mt-4"
//                             >
//                                 <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//                                     <MessageCircle className="w-5 h-5" />
//                                     Add New Review
//                                 </h3>
                                
//                                 <Form {...form}>
//                                     <form onSubmit={form.handleSubmit(selectedReview ? handleEditReview : handleAddReview)}>
//                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                                             <div className="space-y-2">
//                                                 <Label htmlFor="title">Title *</Label>
//                                                 <Input {...form.register('title')} />
//                                             </div>
//                                             <div className="space-y-2">
//                                                 <Label htmlFor="rating">Rating *</Label>
//                                                 <div className="flex gap-1">
//                                                     {[5, 4, 3, 2, 1].map((star) => (
//                                                         <button
//                                                             key={star}
//                                                             type="button"
//                                                             onClick={() => form.setValue('rating', star)}
//                                                             className={`w-8 h-8 rounded transition-colors ${
//                                                                 form.watch('rating') >= star
//                                                                     ? 'text-yellow-400'
//                                                                     : 'text-gray-300'
//                                                             } hover:text-yellow-400`}
//                                                         >
//                                                             <Star className="w-5 h-5" />
//                                                         </button>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="space-y-4 mb-4">
//                                             <div>
//                                                 <Label htmlFor="content">Content *</Label>
//                                                 <Textarea {...form.register('content')} rows={4} />
//                                             </div>
//                                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                                 <div>
//                                                     <Label htmlFor="authorName">Author Name</Label>
//                                                     <Input {...form.register('authorName')} />
//                                                 </div>
//                                                 <div>
//                                                     <Label htmlFor="authorEmail">Author Email</Label>
//                                                     <Input {...form.register('authorEmail')} type="email" />
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="flex justify-end gap-3 pt-4 border-t">
//                                             <Button
//                                                 type="button"
//                                                 variant="outline"
//                                                 onClick={() => {
//                                                     form.reset()
//                                                     setSelectedReview(null)
//                                                 }}
//                                             >
//                                                 Cancel
//                                             </Button>
//                                             <Button type="submit" disabled={reviewActionLoading}>
//                                                 {reviewActionLoading ? (
//                                                     <>
//                                                         <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                                                         Processing...
//                                                     </>
//                                                 ) : selectedReview ? (
//                                                     'Update Review'
//                                                 ) : (
//                                                     'Add Review'
//                                                 )}
//                                             </Button>
//                                         </div>
//                                     </form>
//                                 </Form>
//                             </motion.div>
//                         </AnimatePresence>
//                     )}
//                 </div>
//             </DialogContent>
//         </Dialog>
//     )
// }