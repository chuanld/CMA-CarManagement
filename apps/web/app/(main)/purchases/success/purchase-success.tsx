// src/components/purchase/PurchaseSuccess.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { CheckCircle2, Car, Calendar, MapPin, Phone, Mail, DollarSign, CreditCard, ArrowLeft, CurrencyIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatCurrencyVND } from '@/lib/helper';

interface PurchaseSuccessProps {
  purchase: any;
}

export default function PurchaseSuccess({ purchase }: PurchaseSuccessProps) {
  const { car, dealer, price, status, createdAt } = purchase;
  console.log(purchase)

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      {/* ===== Success Header ===== */}
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="w-16 h-16 text-success animate-pulse" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">Purchase Confirmed!</h1>
        <p className="text-muted-foreground mt-2">
          Thank you for your purchase. Your order has been processed successfully.
        </p>
      </div>

      <Separator className="mb-8" />

      {/* ===== Main Receipt Card ===== */}
      <Card className="card shadow-xl">
        <CardHeader className="card-header">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center gap-2">
              <Car className="w-6 h-6 text-accent2" />
              Purchase Receipt
            </CardTitle>
            <Badge className="bg-success text-success-foreground">
              {status}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* === Car Info === */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Vehicle Details</h3>
              <div className="space-y-2">
                <p className="text-lg font-medium">
                  {car.year} {car.make} {car.model}
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>Mileage: <span className="font-medium text-foreground">{car.mileage.toLocaleString()} km</span></div>
                  <div>Fuel: <span className="font-medium text-foreground">{car.fuelType}</span></div>
                  <div>Transmission: <span className="font-medium text-foreground">{car.transmission}</span></div>
                  <div>Status: <span className="font-medium text-foreground capitalize">{car.status.toLowerCase()}</span></div>
                </div>
              </div>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
              {car.images[0] ? (
                <Image
                  src={car.images[0]}
                  alt={`${car.make} ${car.model}`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <Car className="w-16 h-16 text-muted-foreground" />
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* === Dealer Info === */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Sold By</h3>
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-card shadow-md">
                {dealer.logoUrl ? (
                  <Image src={dealer.logoUrl} alt={dealer.name} fill className="object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary/20">
                    <span className="text-lg font-bold text-primary">
                      {dealer.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{dealer.name}</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-accent2" /> {dealer.address}
                  </p>
                  <p className="flex items-center gap-1">
                    <Phone className="w-4 h-4 text-accent2" /> {dealer.phone}
                  </p>
                  <p className="flex items-center gap-1">
                    <Mail className="w-4 h-4 text-accent2   " /> {dealer.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* === Payment Summary === */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Payment Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-lg">
                <span className="flex items-center gap-2">
                  <CurrencyIcon className="w-5 h-5 text-primary" />
                  Final Price
                </span>
                <span className="font-bold text-primary dark:text-accent">
                  {formatCurrencyVND(price)}
                </span>
              </div>
              {car.saleInfo?.negotiable && (
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <CreditCard className="w-4 h-4" />
                  Price was negotiable
                </p>
              )}
              <div className="flex justify-between text-sm">
                <span>Purchase Date</span>
                <span className="font-medium flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(createdAt), 'dd MMM yyyy, HH:mm')}
                </span>
              </div>
            </div>
          </div>

          <Separator />

          {/* === Actions === */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="btn-primary flex-1">
              <Link href="/dashboard/purchases">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to My Purchases
              </Link>
            </Button>
            <Button variant="outline" className="btn-outline flex-1" onClick={() => window.print()}>
              <CreditCard className="w-4 h-4 mr-2" />
              Print Receipt
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ===== Footer Note ===== */}
      <p className="text-center text-sm text-muted-foreground mt-8">
        Need help? Contact us at{' '}
        <a href="mailto:support@yourcarshop.com" className="text-primary underline">
          support@chuansuperdealer.com
        </a>
      </p>
    </div>
  );
}