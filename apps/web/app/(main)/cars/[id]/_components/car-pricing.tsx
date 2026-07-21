import React from 'react'
import { formatCurrencyVND } from '@/lib/helper'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

type CarPricingProps = {
  businessType: 'SALE' | 'RENT' | 'BOTH'
  car: {
    saleInfo?: { price: number; negotiable: boolean; status: string; createdAt?: string; updatedAt?: string }
    rentInfo?: { hourlyPrice: number; dailyPrice: number; deposit?: number; available: boolean }
    dealer?: { name: string; phone: string; email: string; address: string }
  }
}

export const CarPricing = ({ businessType, car }: CarPricingProps) => {
  const pricingSections = [
    {
      show: businessType === 'SALE' || businessType === 'BOTH',
      title: 'Purchase',
      items: [
        { value: car.saleInfo?.price, label: 'Price' },
        {
          value: car.saleInfo?.negotiable ? 'Negotiable' : 'Fixed Price',
          label: `Contact dealer ${car.dealer?.phone || car.dealer?.email}`,
          isBoolean: true,
        },
      ],
    },
    {
      show: businessType === 'RENT' || businessType === 'BOTH',
      title: 'Rental',
      items: [
        { value: car.rentInfo?.hourlyPrice, label: 'Hourly Price' },
        { value: car.rentInfo?.dailyPrice, label: 'Daily Price' },
        { value: car.rentInfo?.deposit, label: 'Deposit' },
      ].filter((item) => item.value !== undefined),
    },
  ].filter((section) => section.show)

  return (
    <Card
      className="bg-card text-card-foreground border border-border shadow-md rounded-2xl transition-all duration-300 hover:shadow-glow"
      role="region"
      aria-label="Car pricing and status"
    >
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-6">
            {pricingSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {section.title}
                </CardTitle>
                <Separator className="bg-border" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div
                        className="text-xl font-bold text-foreground"
                        aria-label={`${section.title} ${item.label}`}
                      >
                        {item.isBoolean
                          ? item.value
                          : formatCurrencyVND(item.value?.toString() || '0')}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Status badges */}
          <div className="flex flex-col items-center md:items-start gap-3">
            {businessType !== 'RENT' && car.saleInfo?.status && (
              <Badge
                className={`px-3 py-1 text-sm font-medium border rounded-full ${
                  car.saleInfo.status === 'AVAILABLE'
                    ? 'bg-success text-success-foreground border-success/40'
                    : car.saleInfo.status === 'SOLD'
                    ? 'bg-destructive text-destructive-foreground border-destructive/40'
                    : 'bg-muted text-muted-foreground border-border'
                }`}
                role="status"
                aria-label={`Sale status: ${car.saleInfo.status}`}
              >
                {car.saleInfo.status}
              </Badge>
            )}

            {businessType !== 'SALE' && car.rentInfo?.available !== undefined && (
              <Badge
                className={`px-3 py-1 text-sm font-medium border rounded-full ${
                  car.rentInfo.available
                    ? 'bg-success text-success-foreground border-success/40'
                    : 'bg-destructive text-destructive-foreground border-destructive/40'
                }`}
                role="status"
                aria-label={`Rental availability: ${
                  car.rentInfo.available ? 'Available' : 'Unavailable'
                }`}
              >
                {car.rentInfo.available ? 'Available' : 'Unavailable'}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
