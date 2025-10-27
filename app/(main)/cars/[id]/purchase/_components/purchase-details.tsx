'use client';

import React, { use, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Navigation, Phone, MessageCircle, Calculator, Shield, CheckCircle2, AlertCircle, Calendar, Clock } from 'lucide-react';
import { formatCurrencyVND } from '@/lib/helper';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import EmiCalculator from '../../_components/car-emi-calc';
import Image from 'next/image';
import { createPurchase } from '@/actions/purchases';
import { Car } from '@/types/car';
import { format } from 'date-fns';
import { Booking } from '@prisma/client';
import { displayDateTime } from '@/app/(main)/bookings/helper/handle-bookings';
import { User } from '@/types/user';
import useFetch from '@/app/hooks/use-fetch';
import { ApiResponse } from '@/types/api';
import { useCar } from '@/app/context/car-context';
import { useSmoothRouter } from '@/app/hooks/use-smooth-router';

interface PurchasePageProps {
  car: Car;
  testDriveInfo: any;        // e.g. { date, startTime, endTime, status }
  upcomingBookings: {
    testDrives: Booking[];
    rentals: Booking[];
  };   // array of rental bookings
  user: User | null;
}

export default function PurchaseDetails() {
  
  const router = useRouter();
  const {smoothPush,isPending} = useSmoothRouter();
  const [openEMI, setOpenEMI] = useState(false);

  const { car, testDriveInfo, upcomingBookings } = useCar();


  const isAvailable = car?.status === 'AVAILABLE';
  const finalPrice = car?.saleInfo?.price || car?.price;

  // Block purchase if there is a CONFIRMED test-drive or ACTIVE rental
  const hasConfirmedTestDrive = testDriveInfo?.status === 'CONFIRMED';
  const hasActiveRental = upcomingBookings?.rentals?.some((b:any) => b.status === 'ACTIVE' || b.status === 'CONFIRMED');

  const canPurchase = isAvailable && !hasConfirmedTestDrive && !hasActiveRental;

  const businessType = car?.carType || 'BOTH';
  const isSale = businessType === 'SALE' || businessType === 'BOTH';
  const isRental = businessType === 'RENTAL' || businessType === 'BOTH';

  //handle server action
  const { loading: isLoading, error: purchaseError, fetchData: fnCreatePurchase, data: purchaseData } = useFetch<ApiResponse<any>>(createPurchase);


  const handlePurchase = async () => {
    if (!canPurchase) {
      toast.error('This car is currently reserved for a test-drive or rental.');
      return;
    }

    if (!car.dealer) {
      toast.error('Invalid dealer information.');
      return;
    }

    const payload = {
      carId: car.id,
      dealerId: car.dealer.id,
      price: finalPrice,
    }
    console.log(payload, 'payload purchase')
    await fnCreatePurchase(payload);
  };

  useEffect(() => {
    if (purchaseData?.success) {
      toast.success('Purchase request sent successfully!');
      setTimeout(() => {
        smoothPush(`/purchases/${purchaseData.data.id}`);
      }, 1500);
    }
  }, [purchaseData]);

  useEffect(() => {
    if (purchaseError || purchaseData?.success === false) {
      toast.error(purchaseError?.message || purchaseData?.message || 'Something went wrong. Please try again.');
    }
  }, [purchaseError]);

  const handleContactDealer = () => {
    window.location.href = `tel:${car.dealer?.phone}`;
  };

  const handleBookTestDrive = () => {
    smoothPush(`/test-drive/${car.id}`);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT – Car Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="card overflow-hidden">
              <div className="relative aspect-video bg-muted">
                <Image
                  src={car.images[0]}
                  alt={`${car.make} ${car.model}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`badge-${isAvailable ? 'primary' : 'destructive'} text-badge-foreground`}
                  >
                    {isAvailable ? 'Available' : car.status}
                  </Badge>
                </div>
              </div>

              <CardHeader className="card-header">
                <h1 className="text-2xl md:text-3xl font-bold text-card-foreground">
                  {car.make} {car.model} {car.year}
                </h1>
                <p className="text-lg text-card-foreground/80">ID: #{car.id.slice(0, 8).toUpperCase()}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Sale Price</p>
                    <p className="text-3xl font-bold text-primary">
                      {formatCurrencyVND(finalPrice)}
                    </p>
                    {car.saleInfo?.negotiable && (
                      <p className="text-sm text-accent-foreground flex items-center gap-1 mt-1">
                        <Shield className="w-4 h-4" />
                        Negotiable
                      </p>
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    VAT Included
                  </Badge>
                </div>

                <Separator />

                {/* Dealer */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-accent2" />
                    Dealer Contact
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">{car.dealer?.name}</p>
                    <p className="text-muted-foreground">{car.dealer?.email}</p>
                    <Button
                      variant="link"
                      className="p-0 h-auto font-normal text-accent2"
                      onClick={handleContactDealer}
                    >
                      {car.dealer?.phone}
                    </Button>
                  </div>
                </div>

                {/* Test-Drive Info */}
                {testDriveInfo && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Navigation className="w-5 h-5 text-accent2" />
                        Upcoming Test-Drive
                      </h3>
                      <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
                        <p>
                          <strong>Date:</strong>{' '}
                          {displayDateTime(testDriveInfo.bookingDate)}
                        </p>
                        <p>
                          <strong>Time:</strong>{' '}
                          {displayDateTime(testDriveInfo.startTime)} –{' '}
                          {displayDateTime(testDriveInfo.endTime)}
                        </p>
                        <Badge
                          variant={testDriveInfo.status === 'CONFIRMED' ? 'default' : 'secondary'}
                          className="mt-1"
                        >
                          {testDriveInfo.status}
                        </Badge>
                      </div>
                    </div>
                  </>
                )}

                {/* Upcoming Rentals */}
                {upcomingBookings?.rentals && upcomingBookings.rentals?.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-accent2" />
                        Upcoming Rentals
                      </h3>
                      <div className="space-y-3">
                        {upcomingBookings.rentals.map((booking: any) => (
                          <div
                            key={booking.id}
                            className="bg-muted/50 p-4 rounded-lg text-sm flex justify-between items-center"
                          >
                            <div>
                              <p>
                                <strong>{displayDateTime(booking.startTime)}</strong>
                              </p>
                              <p className="text-muted-foreground">
                                {displayDateTime(booking.startTime)} –{' '}
                                {displayDateTime(booking.endTime)}
                              </p>
                            </div>
                            <Badge
                              variant={
                                booking.status === 'ACTIVE' || booking.status === 'CONFIRMED'
                                  ? 'default'
                                  : 'secondary'
                              }
                            >
                              {booking.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* RIGHT – Actions */}
          <div className="space-y-6">
            {/* Purchase */}
            <Card className="card">
              <CardHeader className="card-header pb-4">
                <h3 className="text-xl font-bold">Confirm Purchase</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {canPurchase ? (
                  <Button
                    className="w-full btn-gold text-lg h-14"
                    onClick={handlePurchase}
                    disabled={isLoading || isPending}
                  >
                    {isLoading ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <CheckCircle2 className="w-5 h-5 mr-2 text-accent2" />
                        Send Purchase Request
                      </>
                    )}
                  </Button>
                ) : (
                  <div className="text-center py-8">
                    <AlertCircle className="w-12 h-12 mx-auto text-destructive mb-3" />
                    <p className="text-muted-foreground">
                      {hasConfirmedTestDrive
                        ? 'Car is booked for a confirmed test-drive.'
                        : hasActiveRental
                          ? 'Car is currently rented.'
                          : 'Car is not available for purchase.'}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  {/* EMI */}
                  <Dialog open={openEMI} onOpenChange={setOpenEMI}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="h-12 btn-outline">
                        <Calculator className="w-4 h-4 mr-2" />
                        EMI Calc
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>EMI Calculator</DialogTitle>
                      </DialogHeader>
                      <EmiCalculator price={finalPrice} />
                    </DialogContent>
                  </Dialog>

                  {/* Test-Drive */}
                  <Button
                    variant="outline"
                    className="h-12 btn-outline"
                    onClick={handleBookTestDrive}
                    disabled={!isAvailable || isPending}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Test Drive
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  className="w-full h-12"
                  onClick={() => window.open(`mailto:${car.dealer?.email}`)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with Dealer
                </Button>
              </CardContent>
            </Card>

            {/* Warranty */}
            <Card className="card border-accent/20">
              <CardContent className="pt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent2 mt-0.5" />
                  <div>
                    <p className="font-medium">Official Warranty</p>
                    <p className="text-muted-foreground">12 months or 20,000 km</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent2 mt-0.5" />
                  <div>
                    <p className="font-medium">150-Point Inspection</p>
                    <p className="text-muted-foreground">By certified technicians</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}