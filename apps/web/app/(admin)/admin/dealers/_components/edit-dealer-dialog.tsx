'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, UserCheck, Clock, X, Users, Mail, Phone, MapPin, FileText, Edit, Upload } from 'lucide-react'
import { z } from 'zod'
import { Form, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import useFetch from '@/app/hooks/use-fetch'
import { ApiResponse } from '@/types/api'
import { Dealer } from '@/types/dealer'
import { getDealerById, updateDealer } from '@/actions/dealers'
import { Switch } from '@/components/ui/switch'
import { get } from 'http'
import { DealerLoadingSkeleton, WorkingHoursSkeleton } from './skeleton'
import { useDropzone } from 'react-dropzone'

// Update schema for edit (email not required to be unique if same)
const editDealerSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(100),
    email: z.string().email('Invalid email format'),
    phone: z.string().min(10, 'Phone must be at least 10 digits').optional().or(z.literal('')),
    address: z.string().min(5, 'Address must be at least 5 characters').max(500),
    description: z.string().max(1000).optional().or(z.literal('')),
    archived: z.boolean().optional(),
    logoUrl: z.string().url().or(z.literal(''))
})

type WorkingHour = {
    id?: string
    dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'
    isOpen: boolean
    openTime: number
    closeTime: number
}

interface EditDealerDialogProps {
    dealerId?: string | null // Full dealer data - REQUIRED
    children?: React.ReactNode // Custom trigger button
    trigger?: React.ReactNode // Alternative trigger prop (deprecated)
    isOpen?: boolean // Controlled mode
    onOpenChange?: (open: boolean) => void
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

export function EditDealerDialog({ dealerId, trigger, children, onSuccess, isOpen, onOpenChange }: EditDealerDialogProps) {
    const [open, setOpen] = useState(false)
    const [workingHours, setWorkingHours] = useState<WorkingHour[]>([])

    //img
    const [logoPreview, setLogoPreview] = useState<Blob | null>(null);
    const [uploadedLogo, setUploadedLogo] = useState<File | null>(null);

    const {
        loading: fetchingDealer,
        fetchData: fnFetchDealer,
        data: resultDealer,
        error: errorFetchDealer
    } = useFetch<ApiResponse<Dealer>>(getDealerById)

    // Form setup
    const form = useForm<z.infer<typeof editDealerSchema>>({
        resolver: zodResolver(editDealerSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
            description: '',
            archived: false,
            logoUrl: ''
        }
    })

    const {
        loading: updatingDealer,
        fetchData: fnUpdateDealer,
        data: resultUpdateDealer,
        error: errorUpdateDealer
    } = useFetch<ApiResponse<Dealer>>(updateDealer)

    // Controlled dialog
    const handleOpenChange = (value: boolean) => {
        setOpen(value)
        onOpenChange?.(value)
    }

    // Initialize form and working hours when dialog opens
    useEffect(() => {
        if (open && dealerId) {
            // Set form values
            fnFetchDealer(dealerId)
        }
    }, [open, dealerId])

    // Handle success
    useEffect(() => {

        if (resultDealer && resultDealer?.success && resultDealer?.data) {
            form.reset({
                name: resultDealer?.data.name || '',
                email: resultDealer?.data.email || '',
                phone: resultDealer?.data.phone || '',
                address: resultDealer?.data.address || '',
                description: resultDealer?.data.description || '',
                archived: resultDealer?.data.archived || false,
                logoUrl: resultDealer?.data.logoUrl || ''
            })

            // Initialize working hours from dealer data
            const initialWorkingHours: WorkingHour[] = resultDealer?.data.workingHours?.map(wh => ({
                id: wh.id,
                dayOfWeek: wh.dayOfWeek,
                isOpen: wh.isOpen,
                openTime: wh.openTime || 900,
                closeTime: wh.closeTime || 1700
            })) || []

            // Fill missing days with defaults
            const allDays = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'] as const
            const completeWorkingHours = allDays.map(day => {
                const existing = initialWorkingHours.find(wh => wh.dayOfWeek === day)
                if (existing) return existing

                return {
                    dayOfWeek: day,
                    isOpen: day === 'SUNDAY' ? false : true,
                    openTime: 900,
                    closeTime: 1700
                }
            })
            setWorkingHours(completeWorkingHours)

        }
        if (resultUpdateDealer?.success && resultUpdateDealer?.data) {
            toast.success(`Dealer "${resultUpdateDealer.data.name}" updated successfully!`, { duration: 3000 })
            handleOpenChange(false)
            form.reset()
            onSuccess?.()
        }

    }, [resultDealer, resultUpdateDealer])

    // Handle errors
    useEffect(() => {
        if (errorUpdateDealer && errorUpdateDealer?.message) {
            toast.error(errorUpdateDealer.message || 'Failed to update dealer')
        }
    }, [errorUpdateDealer])

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

    const handleSubmit = async (data: z.infer<typeof editDealerSchema>) => {
        if (!data || !dealerId) return


        const formData = {
            name: data.name,
            email: data.email,
            phone: data.phone || undefined,
            address: data.address,
            description: data.description || undefined,
            logoUrl: data.logoUrl || undefined,
            archived: data.archived,
            workingHours: workingHours.map(wh => ({
                dayOfWeek: wh.dayOfWeek,
                isOpen: wh.isOpen,
                openTime: wh.isOpen ? wh.openTime : 900,
                closeTime: wh.isOpen ? wh.closeTime : 1700
            }))
        }


        await fnUpdateDealer(dealerId, formData)

    }

    const isDialogControlled = isOpen !== undefined

    const renderTrigger = () => {
        if (children) {
            return (
                <DialogTrigger asChild onClick={() => handleOpenChange(true)}>
                    {children}
                </DialogTrigger>
            )
        }

        if (trigger) {
            return (
                <DialogTrigger asChild onClick={() => handleOpenChange(true)}>
                    {trigger}
                </DialogTrigger>
            )
        }

        // Default trigger
        return (
            <DialogTrigger asChild onClick={() => handleOpenChange(true)}>
                <Button variant="outline" className="gap-2">
                    <Edit className="w-4 h-4" />
                    Edit
                </Button>
            </DialogTrigger>
        )
    }

    //Handle Logo
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file) return;

        if (file.size > 1 * 1024 * 1024) {
            toast.error("Image size should be less than 1MB");
            return;
        }

        setUploadedLogo(file);

        const reader = new FileReader();
        reader.onload = (e: any) => {
            setLogoPreview(e.target.result);
            form.setValue('logoUrl', e.target.result);
        };
        reader.readAsDataURL(file);
    }, [])

    const { getRootProps: getAiRootProps, getInputProps: getAiInputProps } = useDropzone({
        onDrop: onDrop,
        accept: { 'image/*': [".jpeg", ".png", ".jpg"] },
        maxFiles: 1,
        multiple: false,
    })

    return (
        <Dialog open={isDialogControlled ? isOpen : open} onOpenChange={handleOpenChange}>
            {renderTrigger()}

            <DialogContent className="max-w-6xl w-full max-h-[95vh] flex flex-col overflow-auto">
                <DialogHeader className="flex flex-row items-center justify-between pb-2">
                    <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
                        <Edit className="w-5 h-5 text-primary" />
                        Edit Dealer: {resultDealer?.data.name}
                    </DialogTitle>
                </DialogHeader>

                <div className="flex-1 flex flex-col">
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="space-y-4 overflow-y-auto flex-1 p-1"
                    >
                        {/* Basic Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            {fetchingDealer ? (<DealerLoadingSkeleton />) : (
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
                                                disabled={updatingDealer}
                                            />
                                            {form.formState.errors.name && (
                                                <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                                                    <X className="w-3 h-3" />
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
                                                disabled={updatingDealer}
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
                                                disabled={updatingDealer}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="flex items-center gap-2 text-sm font-medium">
                                                <UserCheck className="w-4 h-4" />
                                                Status
                                            </Label>
                                            <div className="flex items-center space-x-2">
                                                <Switch
                                                    id="archived"
                                                    checked={form.watch('archived')}
                                                    onCheckedChange={(checked) => form.setValue('archived', checked)}
                                                    disabled={updatingDealer}
                                                />
                                                <Label htmlFor="archived" className="text-sm font-normal">
                                                    {form.watch('archived') ? 'Archived' : 'Active'}
                                                </Label>
                                            </div>
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
                                                disabled={updatingDealer}
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
                                                placeholder="Update dealer description..."
                                                disabled={updatingDealer}
                                                className="resize-none"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="logoUrl" className="flex items-center gap-2 text-sm font-medium">
                                                Logo
                                            </Label>

                                            <div className="flex flex-col items-start gap-3">
                                                {/* Ảnh xem trước */}
                                                {logoPreview || form.watch('logoUrl') ? (
                                                    <div className="relative group">
                                                        <img
                                                            src={logoPreview ||form.watch('logoUrl')}
                                                            alt="Dealer Logo"
                                                            className="w-32 h-32 object-cover rounded-full border shadow-sm"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => form.setValue('logoUrl', '')}
                                                            className="absolute top-1 right-1 bg-red-500/80 hover:bg-red-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition"
                                                        >
                                                            <X className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div
                                                        {...getAiRootProps()}
                                                        className="cursor-pointer hover:bg-gray-50 transition"
                                                    >
                                                        <input {...getAiInputProps()} />
                                                        <div className="flex flex-col items-center justify-center">
                                                            <Upload className="h-12 w-12 text-gray-400 mb-3" />
                                                            <span className="text-sm text-gray-600">
                                                                Drag & drop or click to upload a logo
                                                            </span>
                                                            <span className="text-xs text-gray-500 mt-1">
                                                                (JPG, PNG, WebP, max 1MB)
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {form.formState.errors.logoUrl && (
                                                <p className="text-sm text-destructive mt-1">
                                                    {form.formState.errors.logoUrl.message}
                                                </p>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            )}

                        </motion.div>

                        {/* Working Hours Section - Same as Add */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-2"
                        >
                            <div className="flex items-center gap-2 p-4 bg-muted/50 rounded-lg">
                                <Clock className="w-5 h-5 text-primary" />
                                <h3 className="text-lg font-semibold">Working Hours</h3>
                            </div>

                            {fetchingDealer ? (<WorkingHoursSkeleton />) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto p-4 bg-background rounded-lg border">
                                    {workingHours.map((day, index) => (
                                        <motion.div
                                            key={day.dayOfWeek}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className={`space-y-1 p-3 border rounded-md flex flex-col ${day.isOpen
                                                ? 'border-primary/30 bg-primary/5'
                                                : 'border-border bg-muted/20'
                                                }`}
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
                                                    className="w-4 h-4 rounded accent-bg-cma"
                                                    disabled={updatingDealer}
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
                                                        className="flex items-center justify-center w-full space-y-2 pt-2"
                                                    >
                                                        <div className="flex gap-1 items-center">
                                                            <div className="flex flex-col items-centerflex-1 space-y-1">
                                                                <Label className="text-xs text-center block">Open</Label>
                                                                <Input
                                                                    type="time"
                                                                    value={numberToTime(day.openTime)}
                                                                    onChange={(e) => updateWorkingHour(day.dayOfWeek, 'openTime', e.target.value)}
                                                                    className="text-xs h-8 w-fit"
                                                                    disabled={updatingDealer}
                                                                />
                                                            </div>
                                                            <div className="flex flex-col items-centerflex-1 space-y-1">
                                                                <Label className="text-xs text-center block">Close</Label>
                                                                <Input
                                                                    type="time"
                                                                    value={numberToTime(day.closeTime)}
                                                                    onChange={(e) => updateWorkingHour(day.dayOfWeek, 'closeTime', e.target.value)}
                                                                    className="text-xs h-8 w-fit"
                                                                    disabled={updatingDealer}
                                                                />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </div>
                            )}


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
                                onClick={() => handleOpenChange(false)}
                                disabled={updatingDealer}
                                className="w-full sm:w-auto"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={updatingDealer || !form.formState.isValid}
                                className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                            >
                                {updatingDealer ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Updating...
                                    </>
                                ) : (
                                    <>
                                        <Edit className="w-4 h-4 mr-2" />
                                        Update Dealer
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