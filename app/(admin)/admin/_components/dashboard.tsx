"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Car,
  Calendar,
  TrendingUp,
  Info,
  CheckCircle,
  Clock,
  XCircle,
  Star,
  DollarSign,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// TypeScript interface for data
interface DashboardData {
  success: boolean;
  data: {
    cars: {
      total: number;
      available: number;
      sold: number;
    };
    testDrives: {
      total: number;
      pending: number;
      confirmed: number;
      completed: number;
      cancelled: number;
      noShow: number;
      conversionRate: number;
    };
  };
}

export function Dashboard({ initialData }: { initialData: DashboardData }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(!initialData);

  // Simulate loading state for initial data
  useEffect(() => {
    if (initialData) {
      setIsLoading(false);
    }
  }, [initialData]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Show error if data fetch failed
  if (!initialData || !initialData.success) {
    return (
      <Alert variant="destructive" className="max-w-md mx-auto">
        <Info className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load dashboard data</AlertDescription>
      </Alert>
    );
  }

  const { cars, testDrives } = initialData.data;

  // KPI cards configuration
  const overviewKpis = [
    {
      title: "Total Cars",
      value: cars.total,
      subtext: `${cars.available} available, ${cars.sold} sold`,
      icon: <Car className="h-5 w-5 text-primary" />,
      tooltip: "Total vehicles in inventory",
    },
    {
      title: "Test Drives",
      value: testDrives.total,
      subtext: `${testDrives.pending} pending, ${testDrives.confirmed} confirmed`,
      icon: <Calendar className="h-5 w-5 text-primary" />,
      tooltip: "Total test drive bookings",
    },
    {
      title: "Conversion Rate",
      value: `${testDrives.conversionRate}%`,
      subtext: "From test drives to sales",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      tooltip: "Percentage of test drives resulting in sales",
    },
    {
      title: "Cars Sold",
      value: cars.sold,
      subtext: `${((cars.sold / (cars.total || 1)) * 100).toFixed(1)}% of inventory`,
      icon: <DollarSign className="h-5 w-5 text-primary" />,
      tooltip: "Total vehicles sold",
    },
  ];

  const testDriveKpis = [
    {
      title: "Total Bookings",
      value: testDrives.total,
      subtext: "",
      icon: <Calendar className="h-5 w-5 text-primary" />,
      tooltip: "Total test drive bookings",
    },
    {
      title: "Pending",
      value: testDrives.pending,
      subtext: `${((testDrives.pending / (testDrives.total || 1)) * 100).toFixed(1)}% of bookings`,
      icon: <Clock className="h-5 w-5 text-amber-500" />,
      tooltip: "Test drives awaiting confirmation",
    },
    {
      title: "Confirmed",
      value: testDrives.confirmed,
      subtext: `${((testDrives.confirmed / (testDrives.total || 1)) * 100).toFixed(1)}% of bookings`,
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      tooltip: "Test drives confirmed",
    },
    {
      title: "Completed",
      value: testDrives.completed,
      subtext: `${((testDrives.completed / (testDrives.total || 1)) * 100).toFixed(1)}% of bookings`,
      icon: <CheckCircle className="h-5 w-5 text-blue-500" />,
      tooltip: "Test drives successfully completed",
    },
    {
      title: "Cancelled",
      value: testDrives.cancelled,
      subtext: `${((testDrives.cancelled / (testDrives.total || 1)) * 100).toFixed(1)}% of bookings`,
      icon: <XCircle className="h-5 w-5 text-red-500" />,
      tooltip: "Test drives cancelled",
    },
  ];

  return (
    <div className="space-y-6 p-4 pt-0 sm:p-6 sm:pt-2 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Welcome Header */}
      <div className="flex justify-between items-center">
        
        
      </div>

      <Tabs
        defaultValue="overview"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
        <TabsList className="sticky top-0 z-10 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-1">
          <TabsTrigger
            value="overview"
            className="px-4 py-2 text-sm font-medium rounded-md data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
            aria-label="View dashboard overview"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="test-drives"
            className="px-4 py-2 text-sm font-medium rounded-md data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
            aria-label="View test drive statistics"
          >
            Test Drives
          </TabsTrigger>


        </TabsList>

                  <span className="text-sm text-gray-500 dark:text-gray-400">
          Updated: {new Date().toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </span>
        </div>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* KPI Summary Cards */}
          <TooltipProvider>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {overviewKpis.map((kpi, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Card
                      className={cn(
                        "hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-none",
                        index % 2 === 0 ? "bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800" : "bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-800"
                      )}
                    >
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {kpi.title}
                        </CardTitle>
                        {kpi.icon}
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {kpi.value}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {kpi.subtext}
                        </p>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>{kpi.tooltip}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>

          {/* Dealership Summary */}
          <Card className="bg-white dark:bg-gray-800 border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Dealership Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium text-sm mb-2 text-gray-700 dark:text-gray-200">
                      Car Inventory
                    </h3>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-500 to-green-700 h-3 rounded-full transition-all duration-500"
                          style={{
                            width: `${(cars.available / (cars.total || 1)) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-200">
                        {((cars.available / (cars.total || 1)) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Available inventory capacity
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg shadow-sm">
                    <h3 className="font-medium text-sm mb-2 text-gray-700 dark:text-gray-200">
                      Test Drive Success
                    </h3>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full transition-all duration-500"
                          style={{
                            width: `${(testDrives.completed / (testDrives.total || 1)) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-200">
                        {((testDrives.completed / (testDrives.total || 1)) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Completed test drives
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 mt-6">
                  {[
                    {
                      value: cars.sold,
                      label: "Cars Sold",
                      color: "text-blue-600",
                    },
                    {
                      value: testDrives.pending + testDrives.confirmed,
                      label: "Upcoming Test Drives",
                      color: "text-amber-600",
                    },
                    {
                      value: ((cars.available / (cars.total || 1)) * 100).toFixed(0),
                      label: "Inventory Utilization",
                      color: "text-green-600",
                      suffix: "%",
                    },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <span className={cn("text-3xl font-bold", stat.color)}>
                        {stat.value}
                        {stat.suffix || ""}
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Test Drives Tab */}
        <TabsContent value="test-drives" className="space-y-6">
          <TooltipProvider>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {testDriveKpis.map((kpi, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Card
                      className={cn(
                        "hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-none",
                        index % 2 === 0 ? "bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800" : "bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-800"
                      )}
                    >
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {kpi.title}
                        </CardTitle>
                        {kpi.icon}
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {kpi.value}
                        </div>
                        {kpi.subtext && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {kpi.subtext}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>{kpi.tooltip}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>

          {/* Test Drive Statistics */}
          <Card className="bg-white dark:bg-gray-800 border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Test Drive Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Conversion Rate
                    </h3>
                    <div className="text-3xl font-bold text-blue-600">
                      {testDrives.conversionRate}%
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Test drives resulting in car purchases
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                      Completion Rate
                    </h3>
                    <div className="text-3xl font-bold text-green-600">
                      {testDrives.total
                        ? ((testDrives.completed / testDrives.total) * 100).toFixed(1)
                        : 0}
                      %
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Test drives successfully completed
                    </p>
                  </div>
                </div>
                <div className="space-y-4 mt-4">
                  <h3 className="font-medium text-gray-700 dark:text-gray-200">
                    Booking Status Breakdown
                  </h3>
                  {[
                    {
                      label: "Pending",
                      value: testDrives.pending,
                      color: "bg-gradient-to-r from-amber-500 to-amber-700",
                      percentage: ((testDrives.pending / (testDrives.total || 1)) * 100).toFixed(1),
                    },
                    {
                      label: "Confirmed",
                      value: testDrives.confirmed,
                      color: "bg-gradient-to-r from-green-500 to-green-700",
                      percentage: ((testDrives.confirmed / (testDrives.total || 1)) * 100).toFixed(1),
                    },
                    {
                      label: "Completed",
                      value: testDrives.completed,
                      color: "bg-gradient-to-r from-blue-500 to-blue-700",
                      percentage: ((testDrives.completed / (testDrives.total || 1)) * 100).toFixed(1),
                    },
                    {
                      label: "Cancelled",
                      value: testDrives.cancelled,
                      color: "bg-gradient-to-r from-red-500 to-red-700",
                      percentage: ((testDrives.cancelled / (testDrives.total || 1)) * 100).toFixed(1),
                    },
                    {
                      label: "No Show",
                      value: testDrives.noShow,
                      color: "bg-gradient-to-r from-gray-500 to-gray-700",
                      percentage: ((testDrives.noShow / (testDrives.total || 1)) * 100).toFixed(1),
                    },
                  ].map((status, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200">
                        <span>{status.label}</span>
                        <span className="font-medium">
                          {status.value} ({status.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                        <div
                          className={cn(status.color, "h-3 rounded-full transition-all duration-500")}
                          style={{ width: `${status.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}