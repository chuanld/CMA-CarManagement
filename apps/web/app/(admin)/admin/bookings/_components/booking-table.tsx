// src/components/admin/bookings/BookingTable.tsx
import { format } from "date-fns";
import { CheckCircle2, XCircle, Clock, AlertCircle, Car, Phone, User, Filter, Loader2, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { displayDateTime } from "@/app/(main)/bookings/helper/handle-bookings";

const statusColors: Record<string, string> = {
  PENDING: "bg-secondary text-secondary-foreground",
  CONFIRMED: "bg-success text-success-foreground",
  ACTIVE: "bg-primary text-primary-foreground",
  COMPLETED: "bg-primary text-primary-foreground",
  CANCELLED: "bg-destructive text-destructive-foreground",
  NO_SHOW: "bg-muted text-muted-foreground",
};

const statusIcons: Record<string, React.ReactNode> = {
  PENDING: <Clock className="w-4 h-4" />,
  CONFIRMED: <CheckCircle2 className="w-4 h-4" />,
  ACTIVE: <Car className="w-4 h-4" />,
  COMPLETED: <CheckCircle2 className="w-4 h-4" />,
  CANCELLED: <XCircle className="w-4 h-4" />,
  NO_SHOW: <AlertCircle className="w-4 h-4" />,
};

interface BookingRowProps {
  booking: any;
  type: "testdrive" | "rental";
  updating: boolean;
  cancelling: boolean;
  onStatusChange: (id: string, status: string) => void;
  onCancel: (id: string) => void;
}

const BookingRow = ({ booking, type, updating, cancelling, onStatusChange, onCancel }: BookingRowProps) => {
  const isEditable = ["PENDING", "CONFIRMED", ...(type === "rental" ? ["ACTIVE"] : [])].includes(booking.status);

  return (
    <TableRow className="hover:bg-accent/5 transition-colors animate-in fade-in slide-in-from-top-2 duration-300">
      <TableCell>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary dark:text-accent dark:bg-accent/10 font-bold">
          {booking.user.name?.[0] ?? "?"}
        </div>
      </TableCell>

      <TableCell>
        <div className="font-medium">{booking.user.name}</div>
        <div className="text-sm text-muted-foreground flex items-center gap-1">
          <Phone className="w-3 h-3 text-accent2" /> {booking.user.phone}
        </div>
      </TableCell>

      <TableCell>
        <div className="flex items-center gap-2">
          <Car className="w-4 h-4 text-accent2" />
          <span>
            {booking.car.year} {booking.car.make} {booking.car.model}
          </span>
        </div>
      </TableCell>

      <TableCell className="hidden md:table-cell">
        <div className="text-sm">{format(new Date(booking.bookingDate), "MMM dd, yyyy")}</div>
        <div className="text-xs text-secondary-foreground">
          {displayDateTime(booking.startTime)} – {displayDateTime(booking.endTime)}
        </div>
      </TableCell>

      {type === "rental" && (
        <TableCell>
          <div className="font-semibold text-secondary-foreground">
            ${booking.totalPrice ? Number(booking.totalPrice).toLocaleString() : "—"}
          </div>
        </TableCell>
      )}

      <TableCell>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1">
              {statusIcons[booking.status]}
              <Badge className={cn("capitalize", statusColors[booking.status] ?? "bg-muted")}>
                {booking.status.toLowerCase()}
              </Badge>
            </div>
          </TooltipTrigger>
          <TooltipContent>Status</TooltipContent>
        </Tooltip>
      </TableCell>

      <TableCell className="text-right space-x-2">
        {isEditable && (
          <Select
            value={booking.status}
            onValueChange={(v) => onStatusChange(booking.id, v)}
            disabled={updating}
          >
            <SelectTrigger className="w-32 h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card">
              {["PENDING", "CONFIRMED", ...(type === "rental" ? ["ACTIVE"] : []), "COMPLETED", "CANCELLED", "NO_SHOW"].map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {isEditable && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onCancel(booking.id)}
            disabled={cancelling}
            className="h-8 w-8"
          >
            {cancelling ? <Loader2 className="w-4 h-4 animate-spin" /> : <X className="w-4 h-4 text-destructive" />}
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

interface BookingTableProps {
  type: "testdrive" | "rental";
  data?: any[];
  loading: boolean;
  updating: boolean;
  cancelling: boolean;
  onStatusChange: (id: string, status: string) => void;
  onCancel: (id: string) => void;
}

export default function BookingTable({ type, data = [], loading, updating, cancelling, onStatusChange, onCancel }: BookingTableProps) {
  if (loading) {
    return (
      <div className="divide-y divide-border">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-4 flex gap-4 items-center">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Filter className="mx-auto w-12 h-12 mb-3 opacity-30" />
        <p>No {type === "testdrive" ? "test-drives" : "rentals"} found.</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-muted/30">
          <TableHead className="w-12"> </TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Car</TableHead>
          <TableHead className="hidden md:table-cell">Date & Time</TableHead>
          {type === "rental" && <TableHead>Price</TableHead>}
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((b) => (
          <BookingRow
            key={b.id}
            booking={b}
            type={type}
            updating={updating}
            cancelling={cancelling}
            onStatusChange={onStatusChange}
            onCancel={onCancel}
          />
        ))}
      </TableBody>
    </Table>
  );
}