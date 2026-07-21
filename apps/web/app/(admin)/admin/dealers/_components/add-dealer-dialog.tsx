'use client'

import { use, useEffect, useState, useTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2, UserPlus, Clock, X, Users, Mail, Phone, MapPin, FileText } from 'lucide-react'
import { z } from 'zod'
import { Form, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { cn } from '@/lib/utils'
import { toast } from 'sonner'
import { addDealer } from '@/actions/dealers'
import useFetch from '@/app/hooks/use-fetch'
import { ApiResponse } from '@/types/api'
import { DealerCreateInput } from '@/types/dealer'

// Validation schemas
const createDealerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email format'),
  phone: z.string().min(10, 'Phone must be at least 10 digits').optional().or(z.literal('')),
  address: z.string().min(5, 'Address must be at least 5 characters').max(500),
  description: z.string().max(1000).optional().or(z.literal('')),
  ownerId: z.string().uuid().optional().or(z.literal('noone'))
})

type WorkingHour = {
  dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'
  isOpen: boolean
  openTime: number
  closeTime: number
}

interface AddDealerDialogProps {
  onSuccess?: () => void
}

const dayNames: Record<WorkingHour['dayOfWeek'], string> = {
  MONDAY: 'Monday',
  TUESDAY: 'Tuesday',
  WEDNESDAY: 'Wednesday',
  THURSDAY: 'Thursday',
  FRIDAY: 'Friday',
  SATURDAY: 'Saturday',
  SUNDAY: 'Sunday'
}

export function AddDealerDialog({ onSuccess }: AddDealerDialogProps) {
  const [open, setOpen] = useState(false)
  // const [addingDealer, startTransition] = useTransition()
  const [potentialOwners, setPotentialOwners] = useState<any[]>([])
  const [workingHours, setWorkingHours] = useState<WorkingHour[]>([
    { dayOfWeek: 'MONDAY', isOpen: true, openTime: 900, closeTime: 1700 },
    { dayOfWeek: 'TUESDAY', isOpen: true, openTime: 900, closeTime: 1700 },
    { dayOfWeek: 'WEDNESDAY', isOpen: true, openTime: 900, closeTime: 1700 },
    { dayOfWeek: 'THURSDAY', isOpen: true, openTime: 900, closeTime: 1700 },
    { dayOfWeek: 'FRIDAY', isOpen: true, openTime: 900, closeTime: 1700 },
    { dayOfWeek: 'SATURDAY', isOpen: true, openTime: 900, closeTime: 1700 },
    { dayOfWeek: 'SUNDAY', isOpen: false, openTime: 0, closeTime: 0 }
  ])

  const form = useForm<z.infer<typeof createDealerSchema>>({
    resolver: zodResolver(createDealerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      description: '',
      ownerId: 'noone'
    }
  })

  const { loading: addingDealer, fetchData: fnAddDealer,data: resultAddDealer, error: errorAddDealer } = useFetch<ApiResponse<DealerCreateInput>>(addDealer)


  useEffect(() => {
    if(resultAddDealer?.success && resultAddDealer?.data) {
      toast.success(`Dealer "${resultAddDealer?.data?.name || 'New Dealer'}" created successfully!`, { duration: 3000 })
      setOpen(false)
      form.reset()
      setWorkingHours(prev => 
        prev.map(wh => ({ ...wh, isOpen: wh.dayOfWeek === 'SUNDAY' ? false : true }))
      )
      onSuccess?.()
    }
  }, [resultAddDealer, errorAddDealer])

  //handle error
  useEffect(() => {
    if(errorAddDealer) {
      toast.error(errorAddDealer?.message || 'Failed to create dealer')
    } 
  }, [errorAddDealer])

  // Load potential owners
  // useEffect(() => {
  //   // if (open) {
  //   //   startTransition(async () => {
  //   //     try {
  //   //       const owners = await getPotentialOwners()
  //   //       setPotentialOwners(owners)
  //   //     } catch (error) {
  //   //       toast({
  //   //         title: 'Error',
  //   //         description: 'Failed to load potential owners',
  //   //         variant: 'destructive'
  //   //       })
  //   //     }
  //   //   })
  //   // }
  // }, [open, toast])

  const timeToNumber = (time: string): number => {
    if (!time) return 0
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 100 + minutes
  }

  const numberToTime = (num: number): string => {
    const hours = Math.floor(num / 100).toString().padStart(2, '0')
    const minutes = (num % 100).toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const updateWorkingHour = (
    day: WorkingHour['dayOfWeek'], 
    field: keyof WorkingHour, 
    value: any
  ) => {
    setWorkingHours(prev => 
      prev.map(wh => 
        wh.dayOfWeek === day 
          ? { 
              ...wh, 
              [field]: field === 'openTime' || field === 'closeTime' 
                ? timeToNumber(value) || 0 
                : Boolean(value)
            }
          : wh
      )
    )
  }

  const handleSubmit = async (data: z.infer<typeof createDealerSchema>) => {
    // startTransition(async () => {
    //   try {
    //     const formData = new FormData()
    //     Object.entries(data).forEach(([key, value]) => {
    //       formData.append(key, String(value))
    //     })
        
    //     // Only include open working hours
    //     const openWorkingHours = workingHours.filter(wh => wh.isOpen)
    //     formData.append('workingHours', JSON.stringify(openWorkingHours))

    //     const result = await addDealer(formData)
        
    //     if (result.success) {
    //       toast({
    //         title: 'Success!',
    //         description: `Dealer "${result.dealer?.name || 'New Dealer'}" created successfully!`,
    //         duration: 3000
    //       })
    //       setOpen(false)
    //       form.reset()
    //       setWorkingHours(prev => 
    //         prev.map(wh => ({ ...wh, isOpen: wh.dayOfWeek === 'SUNDAY' ? false : true }))
    //       )
    //       onSuccess?.()
    //     } else {
    //       toast({
    //         title: 'Error',
    //         description: result.errors?._root?.[0] || 'Failed to create dealer',
    //         variant: 'destructive'
    //       })
          
    //       // Handle field-specific errors
    //       if (result.errors && typeof result.errors === 'object') {
    //         Object.entries(result.errors).forEach(([field, errors]) => {
    //           if (Array.isArray(errors) && errors.length > 0) {
    //             form.setError(field as keyof z.infer<typeof createDealerSchema>, {
    //               type: 'manual',
    //               message: errors[0] as string
    //             })
    //           }
    //         })
    //       }
    //     }
    //   } catch (error) {
    //     console.error('Submit error:', error)
    //     toast({
    //       title: 'Error',
    //       description: 'An unexpected error occurred',
    //       variant: 'destructive'
    //     })
    //   }
    // })


    if(!data) return
    const formData = {
      ...data,
      workingHours
    }
    await fnAddDealer(formData)
    
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Dealer
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full max-h-[95vh] flex flex-col overflow-auto">
        <DialogHeader className="flex flex-row items-center justify-between pb-4">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <UserPlus className="w-5 h-5 text-primary" />
            Add New Dealer
          </DialogTitle>
          
        </DialogHeader>
        
        <div className="flex-1  flex flex-col">
          <form 
            onSubmit={form.handleSubmit(handleSubmit)} 
            className="space-y-6 overflow-y-auto flex-1 p-1"
          >
            {/* Basic Information */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                      <Users className="w-4 h-4" />
                      Dealer Name *
                    </Label>
                    <Input 
                      id="name" 
                      {...form.register('name')}
                      className="w-full"
                      disabled={addingDealer}
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                        <span className="w-4 h-4 flex-shrink-0">
                          <X className="w-3 h-3" />
                        </span>
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                      <Mail className="w-4 h-4" />
                      Email *
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      {...form.register('email')}
                      disabled={addingDealer}
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                        <X className="w-3 h-3" />
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                      <Phone className="w-4 h-4" />
                      Phone
                    </Label>
                    <Input 
                      id="phone" 
                      {...form.register('phone')}
                      disabled={addingDealer}
                    />
                    {form.formState.errors.phone && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ownerId" className="flex items-center gap-2 text-sm font-medium">
                      Owner (Optional)
                    </Label>
                    <Select 
                      onValueChange={(value) => form.setValue('ownerId', value === 'noone' ? 'noone' : value)}
                      value={form.watch('ownerId')}
                      disabled={addingDealer}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select owner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="noone">No owner assigned</SelectItem>
                        {potentialOwners.map((owner) => (
                          <SelectItem key={owner.id} value={owner.id}>
                            {owner.name || owner.email}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address" className="flex items-center gap-2 text-sm font-medium">
                      <MapPin className="w-4 h-4" />
                      Address *
                    </Label>
                    <Textarea 
                      id="address" 
                      {...form.register('address')}
                      rows={3}
                      disabled={addingDealer}
                      className="resize-none"
                    />
                    {form.formState.errors.address && (
                      <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.address.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="flex items-center gap-2 text-sm font-medium">
                      <FileText className="w-4 h-4" />
                      Description
                    </Label>
                    <Textarea 
                      id="description" 
                      {...form.register('description')}
                      rows={4}
                      placeholder="Tell us about this dealer..."
                      disabled={addingDealer}
                      className="resize-none"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Working Hours Section */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 p-4 bg-muted/50 rounded-lg">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Working Hours</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto p-2 bg-background rounded-lg border ">
                {workingHours.map((day, index) => (
                  <motion.div
                    key={day.dayOfWeek}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={
                      `space-y-2 p-3 border rounded-md flex flex-col
                      ${day.isOpen} ? "border-primary/30 bg-primary/5" : "border-border`
                    }
                  >
                    <Label className="text-xs font-medium capitalize text-center block">
                      {dayNames[day.dayOfWeek]}
                    </Label>
                    
                    <div className="flex items-center justify-center gap-2">
                      <input
                        type="checkbox"
                        id={`open-${day.dayOfWeek}`}
                        checked={day.isOpen}
                        onChange={(e) => updateWorkingHour(day.dayOfWeek, 'isOpen', e.target.checked)}
                        className="w-4 h-4 rounded"
                        disabled={addingDealer}
                      />
                      <label htmlFor={`open-${day.dayOfWeek}`} className="text-xs">Open</label>
                    </div>

                    <AnimatePresence>
                      {day.isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-2 pt-2"
                        >
                          <div className="flex gap-1">
                            <div className="flex-1 space-y-1">
                              <Label className="text-xs text-center block">Open</Label>
                              <Input
                                type="time"
                                value={numberToTime(day.openTime)}
                                onChange={(e) => updateWorkingHour(day.dayOfWeek, 'openTime', e.target.value)}
                                className="text-xs h-8"
                                disabled={addingDealer}
                              />
                            </div>
                            <div className="flex-1 space-y-1">
                              <Label className="text-xs text-center block">Close</Label>
                              <Input
                                type="time"
                                value={numberToTime(day.closeTime)}
                                onChange={(e) => updateWorkingHour(day.dayOfWeek, 'closeTime', e.target.value)}
                                className="text-xs h-8"
                                disabled={addingDealer}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t bg-background/50"
            >
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setOpen(false)} 
                disabled={addingDealer}
                className="w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={addingDealer || !form.formState.isValid}
                className="w-full sm:w-auto"
              >
                {addingDealer ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4 mr-2" />
                    Create Dealer
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}