"use client";

import { format } from "date-fns";
import { Loader2, Search, X, Filter, CheckCircle2, XCircle, Calendar, Car, User, Phone, Clock, AlertCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { toast } from "sonner";
import { cn } from "@/lib/utils";

import useFetch from "@/app/hooks/use-fetch";
import {
  getAdminTestDrives,
  updateTestDriveStatus,
} from "@/actions/admin";
import { cancelBooking } from "@/actions/bookings";

import { ApiResponse } from "@/types/api";
import { TestDriveBooking } from "@/types/user";
import { Booking } from "@/types/booking";
import { useEffect, useMemo, useState } from "react";

// ---------------------------------------------------------------------
//  Helpers
// ---------------------------------------------------------------------
const statusColors: Record<string, string> = {
  PENDING: "bg-secondary text-secondary-foreground",
  CONFIRMED: "bg-success text-success-foreground",
  COMPLETED: "bg-primary text-primary-foreground",
  CANCELLED: "bg-destructive text-destructive-foreground",
  NO_SHOW: "bg-muted text-muted-foreground",
};

const statusIcons: Record<string, React.ReactNode> = {
  PENDING: <Clock className="w-4 h-4" />,
  CONFIRMED: <CheckCircle2 className="w-4 h-4" />,
  COMPLETED: <CheckCircle2 className="w-4 h-4" />,
  CANCELLED: <XCircle className="w-4 h-4" />,
  NO_SHOW: <AlertCircle className="w-4 h-4" />,
};

// ---------------------------------------------------------------------
//  Main Component
// ---------------------------------------------------------------------
const TestDriveList = () => {
  // ---------- Filters ----------
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // ---------- Data ----------
  const {
    loading: loadingList,
    fetchData: fetchList,
    data: listResult,
    error: listError,
  } = useFetch<ApiResponse<TestDriveBooking[]>>(getAdminTestDrives);

  const {
    loading: updating,
    fetchData: updateStatus,
    data: updateResult,
    error: updateError,
  } = useFetch<ApiResponse<any>>(updateTestDriveStatus);

  const {
    loading: cancelling,
    fetchData: cancel,
    data: cancelResult,
    error: cancelError,
  } = useFetch<ApiResponse<any>>(cancelBooking);

  // ---------- Debounced fetch ----------
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchList({ searchTerm, status: statusFilter === "all" ? undefined : statusFilter });
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, statusFilter]);

  // ---------- Toast feedback ----------
  useEffect(() => {
    if (updateResult?.success) toast.success("Status updated");
    if (cancelResult?.success) toast.success("Booking cancelled");
  }, [updateResult, cancelResult]);

  useEffect(() => {
    if (listError) toast.error("Failed to load test drives");
    if (updateError) toast.error("Failed to update status");
    if (cancelError) toast.error("Failed to cancel booking");
  }, [listError, updateError, cancelError]);

  // ---------- Handlers ----------
  const handleStatusChange = async (bookingId: string, newStatus: string) => {
    await updateStatus({ bookingId, newStatus });
  };

  const handleCancel = async (id: string) => {
    await cancel({ id });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
  };

  // ---------- Computed ----------
  const bookings = useMemo(() => listResult?.data ?? [], [listResult]);
  const activeFilters = useMemo(() => {
    const f: string[] = [];
    if (searchTerm) f.push(`"${searchTerm}"`);
    if (statusFilter !== "all") f.push(statusFilter);
    return f;
  }, [searchTerm, statusFilter]);

  // -----------------------------------------------------------------
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
            <Calendar className="w-8 h-8 text-primary" />
            Test-Drive Management
          </h1>
          <Badge variant="outline" className="text-xs">
            {new Date().toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </Badge>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-0 z-20 mb-6 bg-card/80 backdrop-blur-md border border-border rounded-xl p-4 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Car, customer, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/70"
              />
            </div>

            {/* Status */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent className="bg-card">
                <SelectItem value="all">All statuses</SelectItem>
                {["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED", "NO_SHOW"].map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Active chips */}
            <div className="flex gap-2 flex-wrap">
              {activeFilters.map((f: string, i: number) => (
                <Badge key={i} variant="secondary" className="animate-in fade-in slide-in-from-left-2">
                  {f}
                  <button
                    onClick={clearFilters}
                    className="ml-1 hover:text-destructive"
                    aria-label="remove filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
              {activeFilters.length > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Table Card */}
        <Card className="overflow-hidden shadow-xl border-none">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle className="flex items-center gap-2">
              <Car className="w-5 h-5" />
              Test-Drive Bookings
            </CardTitle>
            <CardDescription>
              {loadingList ? "Loading…" : `${bookings.length} booking${bookings.length !== 1 ? "s" : ""}`}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            {loadingList ? (
              // Skeleton rows
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
            ) : bookings.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Filter className="mx-auto w-12 h-12 mb-3 opacity-30" />
                <p>No test-drives match your filters.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead className="w-12"> </TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Car</TableHead>
                    <TableHead className="hidden md:table-cell">Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {bookings.map((b: any) => (
                    <TableRow
                      key={b.id}
                      className=" transition-colors animate-in fade-in slide-in-from-top-2 duration-300 table-row-hover"
                    >
                      {/* Avatar */}
                      <TableCell>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {b.user.name?.[0] ?? "?"}
                        </div>
                      </TableCell>

                      {/* Customer */}
                      <TableCell>
                        <div className="font-medium">{b.user.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {b.user.phone}
                        </div>
                      </TableCell>

                      {/* Car */}
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Car className="w-4 h-4 text-primary" />
                          <span>
                            {b.car.year} {b.car.make} {b.car.model}
                          </span>
                        </div>
                      </TableCell>

                      {/* Date (desktop) */}
                      <TableCell className="hidden md:table-cell">
                        <div className="text-sm">
                          {format(new Date(b.bookingDate), "MMM dd, yyyy")}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {format(new Date(b.startTime), "HH:mm")} –{" "}
                          {format(new Date(b.endTime), "HH:mm")}
                        </div>
                      </TableCell>

                      {/* Status */}
                      <TableCell>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center gap-1">
                              {statusIcons[b.status]}
                              <Badge
                                className={cn(
                                  "capitalize",
                                  statusColors[b.status] ?? "bg-muted"
                                )}
                              >
                                {b.status.toLowerCase()}
                              </Badge>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>Current status</TooltipContent>
                        </Tooltip>
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="text-right space-x-2 items-center justify-end flex">
                        {/* Status selector */}
                        {["PENDING", "CONFIRMED"].includes(b.status) && (
                          <Select
                            value={b.status}
                            onValueChange={(v) => handleStatusChange(b.id, v)}
                            disabled={updating}
                          >
                            <SelectTrigger className="w-32 h-8 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-card">
                              {["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED", "NO_SHOW"].map(
                                (s) => (
                                  <SelectItem key={s} value={s}>
                                    {s}
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>
                        )}

                        {/* Cancel button */}
                        {["PENDING", "CONFIRMED"].includes(b.status) && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleCancel(b.id)}
                            disabled={cancelling}
                            className="h-8 w-8"
                          >
                            {cancelling ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <>
                              
                              <X className="w-4 h-4 text-destructive" />
                              </>
                              
                            )}
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default TestDriveList;