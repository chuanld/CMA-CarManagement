// components/dealer/dealer-action-dialog.tsx
'use client'

import { useEffect, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { AlertTriangle, CheckCircle, Trash2, Archive, ArchiveRestore } from 'lucide-react'
import { toast } from 'sonner'
import { deleteDealer, toggleDealerArchive } from '@/actions/dealers'
import useFetch from '@/app/hooks/use-fetch'
import { ApiResponse } from '@/types/api'
import { Dealer } from '@/types/dealer'

interface DealerActionDialogProps {
  dealerId?: string
  dealerName?: string
  currentStatus: boolean // true = active, false = archived
  isOpen: boolean
  onClose: () => void
  actionType: 'toggle' | 'delete' | null
  onSuccess?: () => void
}

export function DealerActionDialog({
  dealerId,
  dealerName,
  currentStatus,
  isOpen,
  onClose,
  actionType,
  onSuccess
}: DealerActionDialogProps) {
    const [loading, setLoading] = useState(false)
  const isToggle = actionType === 'toggle'
  const isDelete = actionType === 'delete'

  const actionTitle = isToggle
    ? !currentStatus ? 'Archive Dealer' : 'Restore Dealer'
    : 'Delete Dealer'
  
  const actionDescription = isToggle
    ? !currentStatus 
      ? `This will archive "${dealerName}". Archived dealers are hidden from public view but can be restored later.`
      : `This will restore "${dealerName}" and make it visible again.`
    : `This action cannot be undone. This will permanently delete "${dealerName}" and all associated data.`
  
  const icon = isDelete ? (
    <Trash2 className="h-6 w-6 text-destructive" />
  ) : !currentStatus ? (
    <Archive className="h-6 w-6 text-yellow-500" />
  ) : (
    <ArchiveRestore className="h-6 w-6 text-green-500" />
  )

      const { loading: isToggling, fetchData: fnToggleDealerArchive,data: resultToggle, error: errToggle } = useFetch<ApiResponse<Dealer>>(toggleDealerArchive)
    const { loading: isDeleting, fetchData: fnDeleteDealer,data:resultDel,error: errDel } = useFetch<ApiResponse<Dealer>>(deleteDealer)

  const handleConfirm = async () => {


    
            if (isToggle) {
        await fnToggleDealerArchive(dealerId, {isArchived: !currentStatus})
    } else {
        await fnDeleteDealer(dealerId)
    }


  }

  //handle success
    useEffect(()=>{
      if(resultToggle && resultToggle?.success){
          toast.success(!currentStatus ? `Dealer "${dealerName}" archived successfully!` : `Dealer "${dealerName}" restored successfully!`)
          onSuccess && onSuccess()
          onClose && onClose()
      }
      if(resultDel && resultDel?.success){
          toast.success(`Dealer "${dealerName}" deleted successfully!`)
          onSuccess && onSuccess()
          onClose && onClose()
      }
  },[resultToggle, resultDel])

  //handle error
  useEffect(()=>{
    if(errDel && errDel?.message){
        toast.error(errDel.message)
    }
    if(errToggle && errToggle?.message){
        toast.error(errToggle.message)
    }
  },[errDel, errToggle])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            {icon}
          </div>
          <DialogTitle className="text-center">
            {actionTitle}
          </DialogTitle>
          <DialogDescription className="text-center">
            {actionDescription}
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter className="gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isToggling || isDeleting}
          >
            {isDelete ? 'Cancel' : 'Keep'}
          </Button>
          <Button
            type="button"
            variant={isDelete ? 'destructive' : 'default'}
            onClick={handleConfirm}
            disabled={isToggling || isDeleting}
            className={isToggle && currentStatus ? 'bg-green-600 hover:bg-green-700' : ''}
          >
            {(isToggling || isDeleting) && (
              <span className="mr-2 animate-spin">⏳</span>
            )}
            {isDelete ? 'Delete' : !currentStatus ? 'Archive' : 'Restore'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}