"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Calendar, Clock, MapPin, Car, AlertCircle, CheckCircle, XCircle,
  Mail, Phone, DollarSign, Info, Edit2, Truck, Users
} from "lucide-react";
import { format, formatDistanceToNow, formatDuration } from 'date-fns';
import { vi } from 'date-fns/locale';
import useFetch from "@/app/hooks/use-fetch";
import { getUserBookings, cancelBooking } from "@/actions/bookings";
import usePagination from "@/app/hooks/use-pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { formatCurrencyVND } from "@/lib/helper";
import { useEffect, useState } from "react";
import { DialogCancelReservation } from "./cancel-dialog";
import { DialogViewDetails } from "./details-dialog";
import { Booking } from "@/types/booking";
import { ApiResponse } from "@/types/api";
import { ReservationFilters } from "./reservations-filter";

type RentalBooking = {
  id: string;
  carId: string;
  bookingType: "RENTAL";
  rentalType: "HOURLY" | "DAILY";
  bookingDate: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
  status: "PENDING" | "CONFIRMED" | "ACTIVE" | "COMPLETED" | "CANCELLED";
  notes: string | null;
  car: {
    id: string;
    make: string;
    model: string;
    year: number;
    images: string[];
    dealer: {
      name: string;
      address: string;
      phone: string;
      email: string;
      logoUrl?: string;
    };
  };
  dealer: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
};

type BadgeStatuses = "secondary" | "default" | "outline" | "destructive";

const StatusBadge = ({ status }: { status: BadgeStatuses }) => {
  const statusConfig = {
    PENDING: { variant: "secondary", icon: Clock, label: "Pending", color: "bg-yellow-900/20 text-yellow-300 border border-yellow-700/30" },
    CONFIRMED: { variant: "default", icon: CheckCircle, label: "Confirmed", color: "bg-blue-900/20 text-blue-300 border border-blue-700/30" },
    ACTIVE: { variant: "default", icon: Truck, label: "Active", color: "bg-green-900/20 text-green-300 border border-green-700/30" },
    COMPLETED: { variant: "outline", icon: CheckCircle, label: "Completed", color: "bg-gray-800/20 text-gray-300 border border-gray-600/30" },
    CANCELLED: { variant: "destructive", icon: XCircle, label: "Cancelled", color: "bg-red-900/20 text-red-300 border border-red-700/30" },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || 'default';
  const Icon = config?.icon;

  return (
    <Badge variant="outline" className={cn("flex items-center gap-1 px-2 py-1", config?.color)}>
      <Icon className="h-3 w-3" />
      {config?.label}
    </Badge>
  );
};

const RentalTimeline = ({ booking }: { booking: Booking }) => {
  const start = new Date(booking.startTime);
  const end = new Date(booking.endTime);
  const duration = formatDuration({
    days: Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)),
    hours: Math.floor(((end.getTime() - start.getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  }, { locale: vi });

  return (
    <div className="space-y-4">
      {/* Duration Badge */}
      <Badge variant="outline" className="w-full justify-center bg-linear-to-r from-accent2/60 to-accent/60 text-accent-foreground border-accent/30">
        <Clock className="h-3 w-3 mr-1 text-accent2" />
        {duration}
      </Badge>

      {/* Timeline */}
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <div className="h-2 bg-linear-to-r from-accent2/20 to-accent2 rounded-full" />
          <div className="text-center mt-2 text-xs">
            <div className="text-white">{format(start, 'HH:mm')}</div>
            <div className="text-slate-400">{format(start, 'MMM d')}</div>
          </div>
        </div>
        <Calendar className="h-4 w-4 text-slate-400 shrink-0" />
        <div className="flex-1">
          <div className="h-2 bg-linear-to-r from-accent/20 to-accent rounded-full" />
          <div className="text-center mt-2 text-xs">
            <div className="text-white">{format(end, 'HH:mm')}</div>
            <div className="text-slate-400">{format(end, 'MMM d')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarGallery = ({ images, make, model }: { images: string[], make: string, model: string }) => (
  <div className="space-y-2">
    {images?.length > 0 ? (
      <div className="grid grid-cols-2 gap-2">
        {images.slice(0, 4).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${make} ${model}`}
            className="w-full h-24 object-cover rounded-lg border border-primary/30"
            loading="lazy"
          />
        ))}
      </div>
    ) : (
      <div className="h-24 bg-primary/50 rounded-lg flex items-center justify-center border border-primary/30">
        <Car className="h-8 w-8 text-accent2" />
      </div>
    )}
  </div>
);

const DealerInfo = ({ dealer }: { dealer: Booking['dealer'] }) => (
  <div className="space-y-2 text-sm">
    <div className="flex items-center gap-2">
      <MapPin className="h-4 w-4 text-accent2" />
      <span className="font-medium text-secondary-foreground">{dealer?.name}</span>
    </div>
    <div className="flex items-center gap-2">
      <Phone className="h-4 w-4 text-accent2" />
      <span className="text-secondary-foreground">{dealer?.phone}</span>
    </div>
    <div className="flex items-center gap-2">
      <Mail className="h-4 w-4 text-accent2" />
      <span className="text-secondary-foreground">{dealer?.email}</span>
    </div>
  </div>
);

const PriceSummary = ({ totalPrice, rentalType }: { totalPrice: number, rentalType: string }) => (
  <div className="bg-linear-to-l from-accent to-primary p-3 rounded-xl border border-accent/30 backdrop-blur-sm text-primary-foreground">
    <div className="flex justify-between items-center">
      <div className="text-right">
        <div className="text-xl font-bold">
          {formatCurrencyVND(totalPrice)}
        </div>
        <div className="text-xs text-accent2 capitalize">{rentalType.toLowerCase()} rental</div>
      </div>
    </div>
  </div>
);

type SortOptions = 'createdAt' | 'price' | 'year'
type OrderBy = 'asc' | 'desc'


export function ReservationsList() {
  const [viewDetailsOpen, setViewDetailsOpen] = useState<Record<string, boolean>>({});
  const [cancelOpen, setCancelOpen] = useState<Record<string, boolean>>({});
      const [sortBy, setSortBy] = useState<SortOptions>('createdAt')
      const [sortOrder, setSortOrder] = useState<OrderBy>('desc')

  const router = useRouter();
  const searchParams = useSearchParams();

  const { page, limit, setPage, setLimit, totalPages, handlePageChange } = usePagination({
    initialPage: Number(searchParams.get('page')) || 1,
    initialLimit: Number(searchParams.get('limit')) || 5
  });

  const { loading: fetching, data: reservations, fetchData: fnGetReservations } = useFetch<ApiResponse<Booking[]>>(getUserBookings);
  const { loading: cancelling, fetchData: cancelBookingFn } = useFetch(cancelBooking);

  const normalizeQuery = () => {
        const params = Object.fromEntries(searchParams.entries())
        const { search = '', page, limit, sortBy: sort = 'createdAt', sortOrder: order, ...rest } = params
        const pageNum = parseInt(page || '1', 10)
        const limitNum = parseInt(limit || '5', 10)

        setPage(pageNum)
        setLimit(limitNum)

        

        const filtersReduced = Object.entries(rest).reduce((acc, [key, value]) => {
            if (value === 'true') acc[key] = true
            else if (value === 'ALL' || value === 'all') return acc;

            else if (value === 'false') acc[key] = false
            else if (!isNaN(Number(value))) acc[key] = Number(value)
            else acc[key] = value
            return acc
        }, {} as Record<string, any>)

        



        // map frontend sort to backend
        switch (sort) {
            case 'newest':
                setSortBy('createdAt'); setSortOrder('desc'); break
            case 'oldest':
                setSortBy('createdAt'); setSortOrder('asc'); break
            case 'priceAsc':
                setSortBy('price'); setSortOrder('asc'); break
            case 'priceDesc':
                setSortBy('price'); setSortOrder('desc'); break
            case 'yearAsc':
                setSortBy('year'); setSortOrder('asc'); break
            case 'yearDesc':
                setSortBy('year'); setSortOrder('desc'); break
            default:
                setSortBy('createdAt'); setSortOrder('desc')
        }

        console.log(filtersReduced,'restFilter')

        return {
            pagination: { page: pageNum, limit: limitNum },
            sortBy,
            sortOrder,
            filters: filtersReduced,
            search
        }
    }

  useEffect(() => {
    const payload = normalizeQuery()
    fnGetReservations(payload);
  }, [searchParams,page, limit]);

    const handleFilterChange = (newFilters: Record<string, any>) => {
        // Reset page
        setPage(1)

        const cleanFilters: Record<string, string> = {}
        Object.entries(newFilters).forEach(([key, value]) => {
            if (value === undefined || value === null || value === "") return;

            if (key === "status" && value === "ALL") return;

            cleanFilters[key] = String(value);
        })

        const params = new URLSearchParams()
        params.set('page', '1')
        params.set('limit', String(limit))
        Object.entries(cleanFilters).forEach(([k, v]) => params.set(k, v))

 
    }

  const upcomingBookings = reservations?.data?.filter((booking: Booking) =>
    ["PENDING", "CONFIRMED", "ACTIVE"].includes(booking.status)
  ) || [];

  const pastBookings = reservations?.data?.filter((booking: Booking) =>
    ["COMPLETED", "CANCELLED"].includes(booking.status)
  ) || [];

  if (reservations?.data?.length === 0) {
    return (
      <Card className="bg-card border border-card/50 shadow-lg backdrop-blur-sm">
        <CardContent className="text-center py-12">
          <Car className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <CardTitle className="text-2xl mb-2 text-white">No Rentals Yet</CardTitle>
          <p className="text-slate-300 mb-6">Start your rental journey today!</p>
          <Button asChild size="lg" className="bg-bg-cma hover:bg-bg-cma/80 text-white">
            <Link href="/cars">Browse Cars</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }



  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* HEADER */}
        <Card className="bg-linear-to-l from-accent to-primary border-primary backdrop-blur-sm">
          <CardContent className="p-6 py-2">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bol text-muted">My Rentals</h1>
                <p className="text-muted-foreground">Manage your vehicle rentals</p>
              </div>
              <div className="flex gap-4">
                <Badge variant="outline" className="text-lg px-4 py-2 bg-accent2/80 text-accent2-foreground border-accent2">
                    {upcomingBookings.length} Active
                  </Badge>
                <Badge variant="outline" className="text-lg px-4 py-2 bg-accent/80 text-accent-foreground border-accent">
                  {pastBookings.length} Past
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* UPCOMING RENTALS */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-col w-1/4">
            <ReservationFilters onChangeForm={handleFilterChange}/>

          </div>
          <div className="w-3/4">
            <Card className="bg-card border border-primary shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 ">
                  <Truck className="h-6 w-6 text-accent2" />
                  Active Rentals
                </CardTitle>
              </CardHeader>
              <CardContent className=" text-background-force ">
                {upcomingBookings?.map((booking: Booking) => (
                  <Card key={booking.id} className="my-2 border-none hover:shadow-xl transition-all backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="grid lg:grid-cols-4 gap-6">
                        {/* TIMELINE */}
                        <div className="lg:col-span-1">
                          <RentalTimeline booking={booking} />
                        </div>

                        {/* CAR INFO */}
                        <div className="lg:col-span-2 space-y-4">
                          <div className="flex items-center gap-3">
                            <div className=" p-2 rounded-xl">
                              <Car className="h-6 w-6 text-accent2" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">{booking?.car?.model}</h3>
                              <p className="">{booking?.car?.make} {booking?.car?.year}</p>
                            </div>
                          </div>

                          <CarGallery
                            images={booking.car?.images}
                            make={booking.car?.make}
                            model={booking.car?.model}
                          />
                        </div>

                        {/* PRICE & ACTIONS */}
                        <div className="lg:col-span-1 space-y-4">
                          <PriceSummary
                            totalPrice={booking?.totalPrice || 0}
                            rentalType={booking.rentalType || ''}
                          />

                          <div className="space-y-2">
                            <StatusBadge status={booking.status as BadgeStatuses} />

                            <div className="flex gap-2">
                              <DialogViewDetails
                                booking={booking}
                                isOpen={viewDetailsOpen[booking.id] || false}
                                onClose={() => setViewDetailsOpen(prev => ({ ...prev, [booking.id]: false }))}
                              >
                                {/* <Button variant="outline" size="sm" className="w-full">
                              Details
                            </Button> */}
                              </DialogViewDetails>

                              {["PENDING", "CONFIRMED"].includes(booking.status) && (
                                <DialogCancelReservation
                                  bookingId={booking.id}
                                  isOpen={cancelOpen[booking.id] || false}
                                  onClose={() => setCancelOpen(prev => ({ ...prev, [booking.id]: false }))}
                                  onCancelSuccess={() => fnGetReservations({ pagination: { page, limit } })}
                                >
                                  {/* <Button variant="destructive" size="sm" className="w-full">
                                Cancel
                              </Button> */}
                                </DialogCancelReservation>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* DEALER INFO */}
                      <div className="mt-6 pt-6 border-t border-primary/30">
                        <DealerInfo dealer={booking.dealer} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>


        {/* PAST RENTALS */}
        {pastBookings?.length > 0 && (
          <Card className="bg-card shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-accent2" />
                Past Rentals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastBookings.map((booking) => (
                  <Card key={booking.id} className=" transition-all backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            <div className="bg-primary/50 p-2 rounded-lg border border-primary/30">
                              <Car className="h-5 w-5 text-slate-400" />
                            </div>
                            <div>
                              <h4 className="font-medium ">{booking.car.model}</h4>
                              <p className="text-sm">{booking.car.make}</p>
                            </div>
                          </div>
                          <StatusBadge status={booking.status as BadgeStatuses} />
                        </div>

                        <RentalTimeline booking={booking} />

                        <PriceSummary
                          totalPrice={booking?.totalPrice || 0}
                          rentalType={booking?.rentalType || ''}
                        />

                        <Button variant="ghost" size="sm" asChild className="w-full text-primary-foreground hover:primary-foreground/80">
                          <Link href={`/reservations/${booking.id}`}>
                            View Receipt
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </TooltipProvider>
  );
}