'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Dealer } from '@/types/dealer'
import { updateDealer } from '@/actions/dealers'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Users, Mail, Phone, MapPin, FileText, Upload } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import { Loader2 } from 'lucide-react'
import useFetch from '@/app/hooks/use-fetch'

const editDealerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email format'),
  phone: z.string().min(10, 'Phone must be at least 10 digits').optional().or(z.literal('')),
  address: z.string().min(5, 'Address must be at least 5 characters').max(500),
  description: z.string().max(1000).optional().or(z.literal('')),
  archived: z.boolean().optional(),
    logoUrl: z.string().url().optional().or(z.literal('')),
})

interface DealerInfoTabProps {
  dealerId: string
  dealer: Dealer
}

export function DealerInfoTab({ dealerId, dealer }: DealerInfoTabProps) {
  const [editMode, setEditMode] = useState(false)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  const form = useForm<z.infer<typeof editDealerSchema>>({
    resolver: zodResolver(editDealerSchema),
    defaultValues: {
      name: dealer.name,
      email: dealer.email,
      phone: dealer.phone,
      address: dealer.address,
      description: dealer.description || '',
      archived: dealer.archived,
    },
  })

  const {
    loading: updating,
    fetchData: fnUpdateDealer,
  } = useFetch(updateDealer)

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return
    if (file.size > 1024 * 1024) {
      toast.error("Image size should be less than 1MB")
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      setLogoPreview(e.target?.result as string)
      form.setValue('logoUrl', e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.png', '.jpg'] },
    maxFiles: 1,
  })

  const handleSubmit = async (data: z.infer<typeof editDealerSchema>) => {
    const formData = {
      ...data,
      logoUrl: logoPreview || data.logoUrl || undefined,
    }
    await fnUpdateDealer(dealerId, formData)
    toast.success('Dealer updated successfully!')
    setEditMode(false)
  }

  if (!editMode) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dealer Information</h2>
          <Button onClick={() => setEditMode(true)}>Edit</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Name
              </Label>
              <p className="text-muted-foreground">{dealer.name}</p>
            </div>
            <div>
              <Label className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <p className="text-muted-foreground">{dealer.email}</p>
            </div>
            <div>
              <Label className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone
              </Label>
              <p className="text-muted-foreground">{dealer.phone}</p>
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={!dealer.archived} disabled />
              <Label>Active</Label>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Address
              </Label>
              <p className="text-muted-foreground">{dealer.address}</p>
            </div>
            <div>
              <Label className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Description
              </Label>
              <p className="text-muted-foreground">{dealer.description || 'No description'}</p>
            </div>
            {dealer.logoUrl && (
              <div>
                <Label>Logo</Label>
                <img
                  src={dealer.logoUrl}
                  alt="Dealer Logo"
                  className="w-32 h-32 object-cover rounded-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Dealer Information</h2>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Dealer Name *
              </Label>
              <Input {...form.register('name')} disabled={updating} />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email *
              </Label>
              <Input type="email" {...form.register('email')} disabled={updating} />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone
              </Label>
              <Input {...form.register('phone')} disabled={updating} />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                checked={!form.watch('archived')}
                onCheckedChange={(checked) => form.setValue('archived', !checked)}
                disabled={updating}
              />
              <Label>Active</Label>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Address *
              </Label>
              <Textarea
                {...form.register('address')}
                rows={3}
                disabled={updating}
              />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Description
              </Label>
              <Textarea
                {...form.register('description')}
                rows={4}
                placeholder="Update dealer description..."
                disabled={updating}
              />
            </div>
            <div className="space-y-2">
              <Label>Logo</Label>
              <div {...getRootProps()} className="border-2 border-dashed p-4 rounded-lg">
                <input {...getInputProps()} />
                {logoPreview ? (
                  <img src={logoPreview} alt="Preview" className="w-32 h-32 object-cover rounded-full" />
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="h-8 w-8 mb-2" />
                    <span>Click to upload logo</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setEditMode(false)}
            disabled={updating}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={updating || !form.formState.isValid}>
            {updating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              'Save Changes'
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}