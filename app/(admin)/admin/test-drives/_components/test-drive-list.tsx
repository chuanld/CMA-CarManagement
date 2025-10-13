"use client";

import { useState, useEffect } from "react";
import { getAdminTestDrives, updateTestDriveStatus } from "@/actions/admin";
import { cancelTestDrive } from "@/actions/test-drive";
import useFetch from "@/app/hooks/use-fetch";
import { TestDriveCard } from "@/components/test-drive-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { ApiResponse } from "@/types/api";
import { TestDriveBooking } from "@/types/user";
import { Button } from "@/components/ui/button";
import { CalendarRange, Loader2, Search, X } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// TypeScript interfaces for clarity
interface FilterParams {
  searchTerm: string;
  status: string;
}

const TestDriveList = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [filterCount, setFilterCount] = useState<number>(0);

  const {
    loading: gettingAdmin,
    fetchData: fnGetAdminTestDrives,
    data: resultAdminTestDrive,
    error: errorAdminTestDrive,
  } = useFetch<ApiResponse<TestDriveBooking[]>>(getAdminTestDrives);

  const {
    loading: updatingStatus,
    fetchData: fnUpdateDriverStatus,
    data: resultDriverStatus,
    error: errorUpdateStatus,
  } = useFetch<ApiResponse<any>>(updateTestDriveStatus);

  const {
    loading: cancellingStatus,
    fetchData: fnCancelTestDrive,
    data: resultCancelTestDrive,
    error: errorCancelTestDrive,
  } = useFetch<ApiResponse<any>>(cancelTestDrive);

  // Debounced search effect
  useEffect(() => {
    const handler = setTimeout(() => {
      fnGetAdminTestDrives({ searchTerm, status: statusFilter });
    }, 400);

    return () => clearTimeout(handler);
  }, [searchTerm, statusFilter, fnGetAdminTestDrives]);

  // Update filter count
  useEffect(() => {
    let count = 0;
    if (searchTerm) count++;
    if (statusFilter !== "all") count++;
    setFilterCount(count);
  }, [searchTerm, statusFilter]);

  // Handle success
  useEffect(() => {
    if (resultDriverStatus?.success) {
      toast.success("Test drive status updated successfully");
      fnGetAdminTestDrives({ searchTerm, status: statusFilter });
    }
    if (resultCancelTestDrive?.success) {
      toast.success("Test drive cancelled successfully");
      fnGetAdminTestDrives({ searchTerm, status: statusFilter });
    }
  }, [resultDriverStatus, resultCancelTestDrive, searchTerm, statusFilter, fnGetAdminTestDrives]);

  // Handle errors
  useEffect(() => {
    if (errorAdminTestDrive) {
      console.error("Error fetching admin test drives:", errorAdminTestDrive);
      toast.error("Error fetching test drives");
    }
    if (errorUpdateStatus) {
      console.error("Error updating test drive status:", errorUpdateStatus);
      toast.error("Error updating test drive status");
    }
    if (errorCancelTestDrive) {
      console.error("Error cancelling test drive:", errorCancelTestDrive);
      toast.error("Error cancelling test drive");
    }
  }, [errorAdminTestDrive, errorUpdateStatus, errorCancelTestDrive]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fnGetAdminTestDrives({ searchTerm, status: statusFilter });
  };

  const handleUpdateStatus = async ({
    bookingId,
    newStatus,
  }: {
    bookingId: string;
    newStatus: string;
  }) => {
    if (
      !["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED", "NO_SHOW"].includes(
        newStatus
      )
    ) {
      console.error("Invalid status:", newStatus);
      toast.error("Invalid status selected");
      return;
    }
    await fnUpdateDriverStatus({ bookingId, newStatus });
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
  };

  // Status options for the filter
  const statusOptions = [
    { value: "all", label: "All Statuses" },
    { value: "PENDING", label: "Pending" },
    { value: "CONFIRMED", label: "Confirmed" },
    { value: "COMPLETED", label: "Completed" },
    { value: "NO_SHOW", label: "No Show" },
    { value: "CANCELLED", label: "Cancelled" },
  ];

  return (
    <TooltipProvider>
      <div className="space-y-6 p-4 sm:p-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
        {/* Header */}
        <div className="flex justify-end items-right">
          
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Updated: {new Date().toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </span>
        </div>

        {/* Filters */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Tooltip>
              <TooltipTrigger asChild>
                <Select
                  value={statusFilter}
                  onValueChange={setStatusFilter}
                  aria-label="Filter by test drive status"
                >
                  <SelectTrigger className="w-full sm:w-48 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="start">
                Filter test drives by their status
              </TooltipContent>
            </Tooltip>
            {filterCount > 0 && (
              <span className="inline-flex items-center px-2.5 py-1 text-sm font-medium text-white bg-primary rounded-full">
                {filterCount} {filterCount === 1 ? "Filter" : "Filters"} Active
              </span>
            )}
          </div>

          <form onSubmit={handleSearchSubmit} className="flex w-full sm:w-auto">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative w-full">
                  <Search className="absolute top-1/2 -translate-y-1/2 left-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search by car or customer..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
                    aria-label="Search test drives"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="start">
                e.g., Tesla Model 3, John Doe
              </TooltipContent>
            </Tooltip>
            {filterCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearFilters}
                className="ml-2 text-primary hover:text-primary-dark"
                aria-label="Clear all filters"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </form>
        </div>

        {/* Test Drives Card */}
        <Card className="bg-white dark:bg-gray-800 border-none shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100">
              <CalendarRange className="inline mr-2 h-5 w-5 text-primary" />
              Test Drives
            </CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Manage all test drive bookings
            </CardDescription>
          </CardHeader>
          <CardContent>
            {gettingAdmin && !resultAdminTestDrive ? (
              <div className="flex justify-center items-center h-32">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : resultAdminTestDrive?.data?.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 py-6">
                No test drives found. Try adjusting your filters.
              </div>
            ) : (
              <div className="space-y-4">
                {resultAdminTestDrive?.data?.map((testDrive: TestDriveBooking) => (
                  <div
                    key={testDrive.id}
                    className="relative animate-in fade-in duration-300"
                  >
                    <TestDriveCard
                      booking={testDrive}
                      onCancel={() => fnCancelTestDrive({ id: testDrive.id })}
                      showActions={["PENDING", "CONFIRMED"].includes(testDrive.status)}
                      isAdmin={true}
                      isCancelling={cancellingStatus}
                      renderStatusSelector={() => (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2 text-sm">
                              <Select
                                value={testDrive.status}
                                onValueChange={(value) =>
                                  handleUpdateStatus({
                                    bookingId: testDrive.id,
                                    newStatus: value,
                                  })
                                }
                                disabled={updatingStatus}
                                aria-label={`Update status for test drive ${testDrive.id}`}
                              >
                                <SelectTrigger className="border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary">
                                  <SelectValue placeholder="Update Status" />
                                </SelectTrigger>
                                <SelectContent>
                                  {["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED", "NO_SHOW"].map(
                                    (status) => (
                                      <SelectItem key={status} value={status}>
                                        {status}
                                      </SelectItem>
                                    )
                                  )}
                                </SelectContent>
                              </Select>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="bottom" align="start">
                            Update the status of this test drive
                          </TooltipContent>
                        </Tooltip>
                      )}
                    />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default TestDriveList;