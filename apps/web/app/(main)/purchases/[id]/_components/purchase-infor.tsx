// app/components/purchase-info.tsx
'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { formatCurrencyVND } from '@/lib/helper';
import { format } from 'date-fns';
import {
  CheckCircle2, XCircle, Clock, User, Phone, Mail, Car,
  MessageCircle, Calculator, FileDown, AlertCircle, Check
} from 'lucide-react';
import { updatePurchaseStatus } from '@/actions/purchases';
import { toast } from 'sonner';
import Image from 'next/image';
import EmiCalculator from '@/app/(main)/cars/[id]/_components/car-emi-calc';
import useFetch from '@/app/hooks/use-fetch';
import { ApiResponse } from '@/types/api';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import { useSmoothRouter } from '@/app/hooks/use-smooth-router';

interface PurchaseInfoProps {
  purchase: any;
  currentUserId: string; // Pass from server component
}

export default function PurchaseInfoComponent({ purchase, currentUserId }: PurchaseInfoProps) {
  const [isCancelling, setIsCancelling] = useState(false);
  const [openEMI, setOpenEMI] = useState(false);
  const router = useRouter();
  const { smoothPush,isPending } = useSmoothRouter();

  if (!purchase) return null;

  const { id, price, status, createdAt, statusChangedAt, statusChangedBy } = purchase;
  const car = purchase.car;
  const user = purchase.user;
  const dealer = car.dealer;

  const isOwner = purchase?.userId === currentUserId;
  const isDealer = car.dealer?.ownerId === currentUserId;


  const canCancel = isOwner && ['PENDING', 'CONFIRMED'].includes(status);
  const canConfirm = isDealer && status === 'PENDING';
  const canComplete = isDealer && status === 'CONFIRMED';

  //handle serveraction status update
  const {loading:isLoading,error:errorPurchase,data:updatedPurchase,fetchData: fnUpdatePurchase} = useFetch<ApiResponse<any>>(updatePurchaseStatus)

  const handleStatusUpdate = async (newStatus: 'CANCELLED' | 'CONFIRMED' | 'COMPLETED') => {
    const payload = {
      purchaseId: id,
      status: newStatus,
    }
    console.log(payload)
    await fnUpdatePurchase(payload)
  };

  useEffect(() => {
    if(updatedPurchase &&updatedPurchase?.success){
      if(isDealer){
        if(updatedPurchase.data.status === 'CONFIRMED') {
          toast.success('Purchase status updated successfully. Please proceed to deliver the car.')
          smoothPush(`/purchases/success?purchaseId=${id}`)

        }else if(updatedPurchase.data.status === 'COMPLETED'){
          toast.success('Purchase marked as completed successfully.')
          smoothPush(`/purchases/success?purchaseId=${id}`)

        }else{
          toast.success('Purchase cancelled successfully')
          router.refresh()
        }

      }else{
        if(updatedPurchase.data.status === 'CANCELLED'){
          toast.success('Purchase status updated successfully')
          smoothPush('/purchases')
        }else{
          toast.success('Purchase status updated successfully')
          smoothPush(`/purchases/success?purchaseId=${id}`)
        }
      }
    }
  },[updatedPurchase])

  useEffect(() => {
    if(errorPurchase?.message || updatedPurchase?.success === false){
      toast.error(errorPurchase?.message || updatedPurchase?.message || 'Failed to update purchase status')
    }
  },[errorPurchase, updatedPurchase])

  const getStatusBadge = () => {
    const variants: Record<string, any> = {
      PENDING: 'secondary',
      CONFIRMED: 'default',
      COMPLETED: 'success',
      CANCELLED: 'destructive',
    };
    const icons:any = {
      COMPLETED: <Check className="w-3 h-3" />,
      CANCELLED: <XCircle className="w-3 h-3" />,
    };
    return (
      <Badge variant={variants[status] || 'secondary'} className="text-xs flex items-center gap-1">
        {icons[status]} {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="card">
        <CardHeader className="card-header">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Purchase #{id.slice(0, 8).toUpperCase()}</h2>
            {getStatusBadge()}
          </div>
          <p className="text-sm text-muted-foreground">
            Created: {format(new Date(createdAt), 'PPP p')}
          </p>
        </CardHeader>
      </Card>

      {/* Actions Bar */}
      {(canCancel || canConfirm || canComplete) && (
        <Card className="card border-accent/20">
          <CardContent className="flex gap-3 flex-wrap pt-6">
            {canCancel && (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleStatusUpdate('CANCELLED')}
                disabled={isCancelling || isPending}
              >
                <XCircle className="w-4 h-4 mr-2" />
                Cancel Purchase
              </Button>
            )}
            {canConfirm && (
              <Button
                className="btn-primary"
                size="sm"
                onClick={() => handleStatusUpdate('CONFIRMED')}
                disabled={isCancelling || isPending}
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Confirm Order
              </Button>
            )}
            {canComplete && (
              <Button
                className="btn-gold"
                size="sm"
                onClick={() => handleStatusUpdate('COMPLETED')}
                disabled={isCancelling || isPending}
              >
                <Check className="w-4 h-4 mr-2" />
                Mark as Delivered
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Car Info */}
      <Card className="card overflow-hidden">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative aspect-video md:aspect-auto md:h-full bg-muted">
            <Image
              src={car.images[0]}
              alt={`${car.make} ${car.model}`}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2 space-y-4 p-6">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Car className="w-5 h-5" />
                {car.make} {car.model} {car.year}
              </h3>
              <p className="text-sm text-muted-foreground">ID: #{car.id.slice(0, 8)}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Mileage</p>
                <p className="font-medium">{car.mileage.toLocaleString()} km</p>
              </div>
              <div>
                <p className="text-muted-foreground">Fuel</p>
                <p className="font-medium">{car.fuelType}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Transmission</p>
                <p className="font-medium">{car.transmission}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Car Status</p>
                <Badge variant={car.status === 'SOLD' ? 'success' : 'secondary'}>
                  {car.status}
                </Badge>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Total Price</p>
                <p className="text-2xl font-bold text-primary">
                  {formatCurrencyVND(price)}
                </p>
              </div>
              <div className="flex gap-2">
                <Dialog open={openEMI} onOpenChange={setOpenEMI}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Calculator className="w-4 h-4 mr-1" />
                      EMI
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>EMI Calculator</DialogTitle>
                    </DialogHeader>
                    <EmiCalculator price={price} />
                  </DialogContent>
                </Dialog>

                <Button variant="outline" size="sm" onClick={() => window.print()}>
                  <FileDown className="w-4 h-4 mr-1" />
                  Invoice
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Buyer & Dealer */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="card">
          <CardHeader className="card-header">
            <h3 className="font-semibold">Buyer</h3>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <User className="w-4 h-4" /> {user.name}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> {user.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> {user.phone || 'Not provided'}
            </p>
          </CardContent>
        </Card>

        <Card className="card">
          <CardHeader className="card-header">
            <h3 className="font-semibold flex items-center gap-2">
              Dealer
              {isDealer && <Badge variant="secondary" className="ml-2 text-xs">You</Badge>}
            </h3>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="font-medium">{dealer.name}</p>
            <p className="text-muted-foreground">{dealer.address}</p>
            <div className="flex gap-2 mt-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.href = `tel:${dealer.phone}`}
              >
                <Phone className="w-4 h-4 mr-1" />
                Call
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(`mailto:${dealer.email}`)}
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Status Timeline */}
      {statusChangedAt && (
        <Card className="card">
          <CardHeader className="card-header">
            <h3 className="font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Status History
            </h3>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                {status === 'COMPLETED' ? (
                  <CheckCircle2 className="w-4 h-4 text-success" />
                ) : status === 'CANCELLED' ? (
                  <XCircle className="w-4 h-4 text-destructive" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-primary" />
                )}
              </div>
              <div>
                <p className="font-medium">Status: {status}</p>
                <p className="text-muted-foreground">
                  Updated on {format(new Date(statusChangedAt), 'PPP p')}
                  {statusChangedBy && ` by User #${statusChangedBy.slice(0, 8)}`}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}