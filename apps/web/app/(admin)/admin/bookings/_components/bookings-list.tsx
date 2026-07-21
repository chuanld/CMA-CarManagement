'use client';
import { useState, useEffect, useMemo, use } from "react";
import { Search, X, Filter, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import useFetch from "@/app/hooks/use-fetch";
import { getAdminRentals, getAdminTestDrives, updateRentalStatus, updateTestDriveStatus } from "@/actions/admin";
import { cancelBooking } from "@/actions/bookings";
import BookingTable from "./booking-table";
import { ApiResponse } from "@/types/api";

export default function AdminBookingDashboard() {
  const [activeTab, setActiveTab] = useState<"testdrive" | "rental">("testdrive");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Test-Drives
  const { loading: loadingTD, fetchData: fetchTD, data: tdData, error: tdError } = useFetch<ApiResponse<any>>(getAdminTestDrives);
  const { loading: updatingTD, fetchData: updateTD, data: resultUpdateTD } = useFetch<ApiResponse<any>>(updateTestDriveStatus);

  // Rentals
  const { loading: loadingRent, fetchData: fetchRent, data: rentData, error: rentError } = useFetch<ApiResponse<any>>(getAdminRentals);
  const { loading: updatingRent, fetchData: updateRent, data: resultUpdateRent } = useFetch<ApiResponse<any>>(updateRentalStatus);

  // Cancel
  const { loading: cancelling, fetchData: cancel } = useFetch(cancelBooking);

  // Fetch on filter change
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = { searchTerm: searchTerm || undefined, status: statusFilter === "all" ? undefined : statusFilter };
      if (activeTab === "testdrive") fetchTD(params);
      else fetchRent(params);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, statusFilter, activeTab]);

  useEffect(() => {
    if (resultUpdateTD && resultUpdateTD?.message) {
      const params = { searchTerm: searchTerm || undefined, status: statusFilter === "all" ? undefined : statusFilter };
      if (activeTab === "testdrive") fetchTD(params);
      else fetchRent(params);
    }
    if (resultUpdateRent && resultUpdateRent?.message) {
      const params = { searchTerm: searchTerm || undefined, status: statusFilter === "all" ? undefined : statusFilter };
      if (activeTab === "testdrive") fetchTD(params);
      else fetchRent(params);
    }
  }, [resultUpdateRent, resultUpdateTD]);

  // Toast
  useEffect(() => {
    if (tdError) toast.error("Failed to load test-drives");
    if (rentError) toast.error("Failed to load rentals");
  }, [tdError, rentError]);

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
  };

  const activeFilters = useMemo(() => {
    const f: string[] = [];
    if (searchTerm) f.push(`"${searchTerm}"`);
    if (statusFilter !== "all") f.push(statusFilter);
    return f;
  }, [searchTerm, statusFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
          <Calendar className="w-8 h-8 text-primary" />
          Booking Management
        </h1>
        <Badge variant="outline" className="text-xs" suppressHydrationWarning>
          {new Date().toLocaleString()}
        </Badge>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-20 mb-6 bg-card/80 backdrop-blur-md border border-border rounded-xl p-4 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search car, customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background/70"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {activeFilters.map((f, i) => (
              <Badge key={i} variant="secondary">
                {f}
                <button onClick={clearFilters} className="ml-1 hover:text-destructive">
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

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-2 bg-card/80 backdrop-blur">
          <TabsTrigger value="testdrive" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Test-Drives
          </TabsTrigger>
          <TabsTrigger value="rental" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Rentals
          </TabsTrigger>
        </TabsList>

        <TabsContent value="testdrive" className="mt-0">
          <Card className="overflow-hidden shadow-xl border-none">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardTitle>Test-Drive Bookings</CardTitle>
              <CardDescription>{tdData?.data?.length ?? 0} bookings</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <BookingTable
                type="testdrive"
                data={tdData?.data}
                loading={loadingTD}
                updating={updatingTD}
                cancelling={cancelling}
                onStatusChange={(id, status) => updateTD({ bookingId: id, newStatus: status })}
                onCancel={cancel}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rental" className="mt-0">
          <Card className="overflow-hidden shadow-xl border-none">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardTitle>Rental Bookings</CardTitle>
              <CardDescription>{rentData?.data?.length ?? 0} bookings</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <BookingTable
                type="rental"
                data={rentData?.data}
                loading={loadingRent}
                updating={updatingRent}
                cancelling={cancelling}
                onStatusChange={(id, status) => updateRent({ bookingId: id, newStatus: status })}
                onCancel={cancel}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}