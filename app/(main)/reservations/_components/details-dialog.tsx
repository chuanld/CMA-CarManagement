"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Car, MapPin, Users, Mail, Phone } from "lucide-react";
import { TestDriveBooking } from "@/types/user";
import { Booking } from "@/types/booking";
import { displayDateTime } from "../../bookings/helper/handle-bookings";

interface DialogViewDetailsProps {
  booking: Booking;
  isOpen: boolean;
  onClose: () => void;
}

export function DialogViewDetails({ booking, isOpen, onClose }: DialogViewDetailsProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Booking Details</DialogTitle>
          <DialogDescription className="text-gray-600">
            View the full details of your test drive reservation.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Car Information */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Car className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{booking.car?.model || "Test Drive"}</h3>
              <p className="text-sm text-gray-500">{booking.car?.make || "Premium Vehicle"} {booking.car?.year || "2025"}</p>
            </div>
          </div>

          {/* Date and Time */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span>{new Date(booking.bookingDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span>{displayDateTime(booking.startTime)} - {displayDateTime(booking.endTime)}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-5 w-5" />
            <span>{booking.car?.dealer?.name || "Dealership Location"}</span>
          </div>

          {/* User Information */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="h-5 w-5" />
              <span>{booking.user?.name || "User Name"}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-5 w-5" />
              <span>{booking.user?.email || "user@example.com"}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="h-5 w-5" />
              <span>{booking.user?.phone || "Updating..."}</span>
            </div>
          </div>

          {/* Additional Notes */}
          {booking.notes && (
            <div className="text-gray-600">
              <p><strong>Notes:</strong> {booking.notes}</p>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}