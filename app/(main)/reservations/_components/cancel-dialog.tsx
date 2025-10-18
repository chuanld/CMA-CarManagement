"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import useFetch from "@/app/hooks/use-fetch";
import { ApiResponse } from "@/types/api";
import { cancelTestDrive } from "@/actions/test-drive";

interface DialogCancelReservationProps {
  bookingId: string;
  isOpen: boolean;
  onClose: () => void;
  onCancelSuccess: () => void;
}

export function DialogCancelReservation({ bookingId, isOpen, onClose, onCancelSuccess }: DialogCancelReservationProps) {
  const { loading: cancelling, fetchData: cancelBookingFn, error: cancelError } = useFetch<ApiResponse<any>>(cancelTestDrive);

  const handleConfirmCancel = async () => {
    await cancelBookingFn(bookingId);
    if (!cancelError) {
      onCancelSuccess();
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <XCircle className="h-6 w-6 text-red-500" />
            Cancel Reservation
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Are you sure you want to cancel this test drive booking? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {cancelError && <p className="text-red-500 text-sm">{cancelError.message}</p>}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={cancelling}>
            No, Keep Booking
          </Button>
          <Button
            variant="destructive"
            onClick={handleConfirmCancel}
            disabled={cancelling}
            className="ml-2"
          >
            {cancelling ? "Cancelling..." : "Yes, Cancel"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}