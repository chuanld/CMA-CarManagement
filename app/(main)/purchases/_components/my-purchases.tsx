// src/components/my-purchases/MyPurchases.tsx
'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Package, Calendar, DollarSign, Filter, CurrencyIcon, Loader2 } from 'lucide-react';
import { PurchaseStatus } from '@prisma/client';
import { formatCurrencyVND } from '@/lib/helper';
import { useRouter } from 'next/navigation';
import { useSmoothRouter } from '@/app/hooks/use-smooth-router';

interface MyPurchasesProps {
  purchases: any[];
}

/* --------------------------------------------------------------- */
/*  Helper: status → badge variant (matches your globals.css)      */
/* --------------------------------------------------------------- */
const statusBadge = (status: PurchaseStatus) => {
  switch (status) {
    case 'PENDING':
      return <Badge variant={'accent'} className="badge-secondary">Pending</Badge>;
    case 'CONFIRMED':
      return <Badge variant={'accent'} className="bg-accent text-accent-foreground">Confirmed</Badge>;
    case 'COMPLETED':
      return <Badge variant={'success'} className="bg-success text-success-foreground">Completed</Badge>;
    case 'CANCELLED':
      return <Badge variant={'blush'} className="badge-destructive">Cancelled</Badge>;
    default:
      return <Badge className="badge-secondary">{status}</Badge>;
  }
};

/* --------------------------------------------------------------- */
export default function MyPurchases({ purchases }: MyPurchasesProps) {
  const [filter, setFilter] = useState<PurchaseStatus | 'ALL'>('ALL');
  const router = useRouter();
  const {smoothPush,isPending} = useSmoothRouter();

  const filtered = useMemo(() => {
    if (filter === 'ALL') return purchases;
    return purchases.filter((p) => p.status === filter);
  }, [purchases, filter]);

  const totals = useMemo(() => {
    const total = filtered.reduce((sum, p) => sum + Number(p.price), 0);
    const count = filtered.length;
    const avg = count ? total / count : 0;
    return { total, count, avg };
  }, [filtered]);

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Package className="w-6 h-6 text-accent2" />
          My Purchases
        </h1>

        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-accent2" />
          <Select value={filter} onValueChange={(v) => setFilter(v as any)}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className='bg-card'>
              <SelectItem value="ALL">All</SelectItem>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="CONFIRMED">Confirmed</SelectItem>
              <SelectItem value="COMPLETED">Completed</SelectItem>
              <SelectItem value="CANCELLED">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Separator className="bg-border" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <CurrencyIcon className="w-5 h-5 text-accent2" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {formatCurrencyVND(totals.total)}
            </p>
          </CardContent>
        </Card>

        <Card className="card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Purchases</CardTitle>
            <Package className="w-5 h-5 text-accent2" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totals.count}</p>
          </CardContent>
        </Card>

        <Card className="card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Price</CardTitle>
            <Calendar className="w-5 h-5 text-accent2" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {formatCurrencyVND(totals.avg)}
            </p>
          </CardContent>
        </Card>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {filter === 'ALL'
              ? 'You haven’t made any purchases yet.'
              : `No ${filter.toLowerCase()} purchases.`}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Card key={p.id} className="card overflow-hidden hover:shadow-glow transition-shadow">
              {/* Image */}
              <div className="relative aspect-video bg-muted">
                {p.car.images[0] ? (
                  <Image
                    src={p.car.images[0]}
                    alt={`${p.car.make} ${p.car.model}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Package className="w-12 h-12 text-accent2" />
                  </div>
                )}
              </div>

              <CardHeader className="card-header pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    {p.car.year} {p.car.make} {p.car.model}
                  </CardTitle>
                  {statusBadge(p.status)}
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Price */}
                <p className="flex items-center justify-between font-semibold text-primary">
                  <span>{formatCurrencyVND(p.car.saleInfo?.price)}</span>
                  {p.car.saleInfo?.negotiable && (
                    <Badge className="badge-secondary">Negotiable</Badge>
                  )}
                </p>

                {/* Short specs */}
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{p.car.mileage.toLocaleString()}</span> km
                  </div>
                  <div>{p.car.fuelType}</div>
                  <div>{p.car.transmission}</div>
                  <div className="capitalize">{p.car.status.toLowerCase()}</div>
                </div>

                {/* Dealer */}
                <div className="flex items-center gap-2 text-sm">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden bg-card">
                    {p.dealer.logoUrl ? (
                      <Image src={p.dealer.logoUrl} alt={p.dealer.name} fill className="object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary/20">
                        <span className="text-xs font-bold text-primary">
                          {p.dealer.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="font-medium">{p.dealer.name}</span>
                </div>

                {/* Date */}
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {format(new Date(p.createdAt), 'dd MMM yyyy')}
                </p>

                <Button variant="outline" size="sm" className="w-full btn-outline"
                  onClick={() => smoothPush(`/purchases/${p.id}`)}
                  disabled={isPending}>
                  View Details <Loader2 className={`ml-2 w-4 h-4 animate-spin ${isPending ? 'inline-block' : 'hidden'}`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}