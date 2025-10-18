"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Calendar, Clock, MapPin, Car, AlertCircle, CheckCircle, XCircle, Users, Mail, Info, Phone, CreativeCommons, Edit2 } from "lucide-react";
import { cancelTestDrive } from "@/actions/test-drive";
import useFetch from "@/app/hooks/use-fetch";
import { ApiResponse } from "@/types/api";
import { TestDriveBooking } from "@/types/user";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { DialogCancelReservation } from "./cancel-dialog";
import { DialogViewDetails } from "./details-dialog";

const StatusBadge = ({ status }: { status: string }) => {
  const statusConfig = {
    PENDING: { variant: "secondary" as const, icon: Clock, label: "Pending" },
    CONFIRMED: { variant: "default" as const, icon: CheckCircle, label: "Confirmed" },
    COMPLETED: { variant: "outline" as const, icon: CheckCircle, label: "Completed" },
    CANCELLED: { variant: "destructive" as const, icon: XCircle, label: "Cancelled" },
    "NO_SHOW": { variant: "destructive" as const, icon: AlertCircle, label: "No Show" },
  };

  const config = statusConfig[status as keyof typeof statusConfig];
  const Icon = config?.icon || Clock;

  return (
    <Badge variant={config?.variant} className="flex items-center gap-1">
      <Icon className="h-3 w-3" />
      {config?.label}
    </Badge>
  );
};

const BookingTimeline = ({ booking }: { booking: TestDriveBooking }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING": return "bg-yellow-100 text-yellow-800";
      case "CONFIRMED": return "bg-blue-100 text-blue-800";
      case "COMPLETED": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1">
        <div className={`h-2 rounded-full ${getStatusColor(booking.status)} flex items-center justify-center`}>
          <div className="flex flex-col items-center justify-center">
            <span>{booking.startTime}</span>
            <span className="text-gray-500 text-sm">{new Date(booking.bookingDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Calendar className="h-4 w-4 text-gray-400" />
        <div className="w-px h-8 bg-gray-200"></div>
      </div>
      <div className="flex-1">
        <div className="h-2 rounded-full bg-gray-200 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <span>{booking.endTime}</span>
            <span className="text-gray-500 text-sm">{new Date(booking.bookingDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingGallery = ({ images }: { images: string[] }) => {
  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }
  return (
    <div className="mt-4 space-y-2">
      {images && images.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {Array.isArray(images) ? (
            images.slice(0, 3).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${img} ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg border border-gray-200"
                loading="lazy"
              />
            ))
          ) : (
            <img
              src={images[0]}
              alt={`${images[0]} 1`}
              className="w-full h-24 object-cover rounded-lg border border-gray-200"
              loading="lazy"
            />
          )}
        </div>
      )}
    </div>
  );
};

export function ReservationsList({ initialData }: { initialData: any }) {
  const [viewDetailsOpen, setViewDetailsOpen] = useState<Record<string, boolean>>({});
  const [cancelOpen, setCancelOpen] = useState<Record<string, boolean>>({});


  const {
    loading: cancelling,
    fetchData: cancelBookingFn,
    error: cancelError,
  } = useFetch<ApiResponse<any>>(cancelTestDrive);

  const handleCancelBooking = async (bookingId: string) => {
    await cancelBookingFn(bookingId);
  };

  const upcomingBookings = initialData?.data?.filter((booking: TestDriveBooking) =>
    ["PENDING", "CONFIRMED"].includes(booking.status)
  );

  const pastBookings = initialData?.data?.filter((booking: TestDriveBooking) =>
    ["COMPLETED", "CANCELLED", "NO_SHOW"].includes(booking.status)
  );

  if (initialData?.data?.length === 0) {
    return (
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="flex flex-col items-center justify-center text-center p-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
            <Calendar className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800 mb-3">
            No Reservations Yet
          </CardTitle>
          <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
            Ready to experience our premium vehicles? Book a test drive and discover
            your perfect match today.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8">
            <Car className="h-4 w-4 mr-2" />
            Browse Cars & Book
          </Button>
          <p className="text-xs text-gray-500 mt-4">Start your journey with confidence</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <TooltipProvider>
      <div className="space-y-8">
        {/* Header Stats */}
        <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-0">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">My Reservations</h1>
                <p className="text-gray-600">
                  Manage your test drive bookings and track their status
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-xl">
                  <Badge variant="secondary" className="bg-bg-cma text-white border-blue-200">
                    {upcomingBookings.length} Upcoming
                  </Badge>
                </div>
                <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-xl">
                  <Badge variant="outline" className="border-gray-300">
                    {pastBookings.length} Past
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Bookings */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-bg-cma/20 to-bg-cma p-3 rounded-xl">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Upcoming Test Drives
                </CardTitle>
                <p className="text-sm text-gray-500">
                  Prepare for your next driving experience
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {upcomingBookings.length === 0 ? (
              <div className="text-center py-12">
                <Clock className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No upcoming test drives scheduled</p>
                <Button variant="outline" className="mt-4">
                  Book a Test Drive
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {upcomingBookings.map((booking: TestDriveBooking) => (
                  <Card key={booking.id} className="border-l-4 border-l-bg-cma/80 hover:shadow-md transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
                        {/* Left Section - Timeline & Status */}
                        <div className="lg:w-1/4 mb-4 lg:mb-0">
                          <BookingTimeline booking={booking} />
                          <div className="mt-4">
                            <StatusBadge status={booking.status} />
                          </div>
                          <div>
                            <BookingGallery images={booking?.car?.images || []} />
                          </div>
                        </div>

                        {/* Right Section - Details */}
                        <div className="lg:flex-1 space-y-4">
                          {/* Car & Date */}
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="bg-blue-100 p-2 rounded-lg">
                                <Car className="h-6 w-6 text-bg-cma" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  {booking.car?.model || "Test Drive Booking"}
                                </h3>
                                <p className="text-sm text-gray-500">
                                  {booking.car?.make || "Premium Vehicle"}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {booking.car?.year || "2025 Model"}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                                <p className="text-sm italic text-gray-400">Created:</p>
                                {new Date(booking.createdAt).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <p className="text-sm italic text-gray-400">Last modified:</p>
                                {new Date(booking.updatedAt).toLocaleDateString()}
                              </div>
                            </div>
                          </div>

                          {/* Location & Actions */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex flex-col items-left gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">

                                  {booking.car?.dealer && (
                                    <>
                                      <div className="flex items-center justify-start gap-2">
                                        {booking?.car?.dealer?.logoUrl ? (
                                          <img
                                            src={booking.car.dealer.logoUrl}
                                            alt={booking.car.dealer.name || "Dealer Logo"}
                                            className="w-8 h-8 rounded-full object-cover"
                                          />
                                        ) : (
                                          <div className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-xs text-gray-500">
                                            N/A
                                          </div>
                                        )}
                                        <span className="text-sm text-gray-700">
                                          {booking?.car?.dealer?.name || "Dealership"}
                                        </span>
                                      </div>
                                      <div className="flex gap-6 ">
                                        <Mail className="h-4 w-4" />
                                        {booking?.car?.dealer?.email || "Dealership Location"}
                                      </div>
                                      <div className="flex gap-6">
                                        <Info className="h-4 w-4" />
                                        {booking?.car?.dealer?.name || "Dealership Location"}
                                      </div>
                                      <div className="flex gap-6">
                                        <Phone className="h-4 w-4" />
                                        {booking?.car?.dealer?.phone || "Dealership Location"}
                                      </div>
                                    </>

                                  )}


                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Click for directions</p>
                              </TooltipContent>
                            </Tooltip>

                            <div className="flex items-center gap-3">
                              {booking.status === "PENDING" && (
                                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                  Awaiting Confirmation
                                </Badge>
                              )}
                              {["PENDING", "CONFIRMED"].includes(booking.status) && (
                             
                                <>
                                  <DialogViewDetails
                                    booking={booking}
                                    isOpen={viewDetailsOpen[booking.id] || false}
                                    onClose={() => setViewDetailsOpen((prev) => ({ ...prev, [booking.id]: false }))}
                                  />
                                  <DialogCancelReservation
                                    bookingId={booking.id}
                                    isOpen={cancelOpen[booking.id] || false}
                                    onClose={() => setCancelOpen((prev) => ({ ...prev, [booking.id]: false }))}
                                    onCancelSuccess={() => {
                                      // Refresh bookings after cancellation
                                      // This could trigger a refetch or state update
                                    }}
                                  />
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setViewDetailsOpen((prev) => ({ ...prev, [booking.id]: true }))}
                                      >
                                        View Details
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>View full booking details</p>
                                    </TooltipContent>
                                  </Tooltip>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        variant="rored"
                                        size="sm"
                                        onClick={() => setCancelOpen((prev) => ({ ...prev, [booking.id]: true }))}
                                        disabled={cancelling}
                                        className="px-4"
                                      >
                                        {cancelling ? "Cancelling..." : "Cancel Booking"}
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Cancel this reservation</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </>
                              )}
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Past Bookings */}
        {pastBookings.length > 0 && (
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Past Test Drives
                  </CardTitle>
                  <p className="text-sm text-gray-500">
                    Review your previous driving experiences
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastBookings.map((booking: TestDriveBooking) => (
                  <Card key={booking.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-gray-100 p-2 rounded-lg">
                              <Car className="h-5 w-5 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {booking.car?.model || "Test Drive"}
                              </h4>
                              <p className="text-sm text-gray-500">{booking.car?.make}</p>
                            </div>
                          </div>
                          <StatusBadge status={booking.status} />
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                            <Calendar className="h-4 w-4" />
                            {new Date(booking.bookingDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            {booking.startTime} - {booking.endTime}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/reservations/${booking.id}`}>
                            View Feedback & Details
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

        {/* Error Display */}
        {cancelError && (
          <Card className="border-l-4 border-l-red-500 bg-red-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 text-red-800">
                <AlertCircle className="h-5 w-5" />
                <span>{cancelError.message}</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </TooltipProvider>
  );
}