// src/components/admin/dashboard/AdminDashboard.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";
import {
  Car, Calendar, DollarSign, Users, Store, TrendingUp, Package,
  Clock, CheckCircle2, XCircle, AlertCircle, Star, Loader2, ArrowUpRight,
  CurrencyIcon
} from "lucide-react";

import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tabs, TabsContent, TabsList, TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { cn } from "@/lib/utils";
import { DashboardStats } from "@/types/api";
import { formatCurrencyVND } from "@/lib/helper";
import { Booking } from "@/types/booking";
import RevenueChart from "./revenue-chart";
import ConversionChart from "./conversion-rate-chart";

interface DashboardProps {
  initialData?: DashboardStats | any;
}

export default function Dashboard({ initialData }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(!initialData);

  useEffect(() => {
    if (initialData) setIsLoading(false);
  }, [initialData]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!initialData) {
    return (
      <Alert variant="destructive" className="max-w-md mx-auto">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load dashboard data</AlertDescription>
      </Alert>
    );
  }

  const stats = initialData;

  // === KPI Cards ===
  const kpiCards = [
    {
      title: "Total Revenue",
      value: `${formatCurrencyVND(stats.revenue.total)}`,
      subtext: `+${((stats.revenue.fromPurchases / (stats.revenue.total || 1)) * 100).toFixed(0)}% from sales`,
      icon: <CurrencyIcon className="h-6 w-6 text-emerald-600" />,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Cars in Inventory",
      value: stats.cars.total,
      subtext: `${stats.cars.available} available • ${stats.cars.sold} sold`,
      icon: <Car className="h-6 w-6 text-blue-600" />,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Active Users",
      value: stats.users.total,
      subtext: `${stats.users.customers} customers • ${stats.users.admins} admins`,
      icon: <Users className="h-6 w-6 text-purple-600" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Dealerships",
      value: stats.dealers.total,
      subtext: "Partner locations",
      icon: <Store className="h-6 w-6 text-orange-600" />,
      color: "from-orange-500 to-red-600",
    },
  ];

  // === Recent Activity ===
  const recentActivity = useMemo(() => {
    const all = [
      ...stats.testDrives.recent.map((i:any) => ({ ...i, type: "testdrive" as const })),
      ...stats.rentals.recent.map((i:any) => ({ ...i, type: "rental" as const })),
      ...stats.purchases.recent.map((i:any) => ({ ...i, type: "purchase" as const, price: i.price })),
    ];
    return all.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 6);
  }, [stats]);

  return (
    <TooltipProvider>
      <div className=" p-4 md:p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 card-header">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <TrendingUp className="w-9 h-9 text-accent2" />
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">Real-time performance overview</p>
          </div>
          <Badge variant="outline" className="text-sm">
            Updated: {new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}
          </Badge>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-3xl grid-cols-4 bg-card/80 backdrop-blur-sm border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="test-drives">Test-Drives</TabsTrigger>
            <TabsTrigger value="rentals">Rentals</TabsTrigger>
            <TabsTrigger value="purchases">Purchases</TabsTrigger>
          </TabsList>

          {/* === OVERVIEW TAB === */}
          <TabsContent value="overview" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {kpiCards.map((kpi, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <Card className="group hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
                      <div className={cn("", kpi.color)} />
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-foreground/80">{kpi.title}</CardTitle>
                        {kpi.icon}
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
                        <p className="text-xs text-muted-foreground mt-1">{kpi.subtext}</p>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>{kpi.title}</TooltipContent>
                </Tooltip>
              ))}
            </div>

            <RevenueChart data={stats.revenue.revenueChart} />

            {/* Revenue & Conversion */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CurrencyIcon className="w-5 h-5 text-accent2" />
                    Revenue Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "From Purchases", value: stats.revenue.fromPurchases, color: "bg-accent" },
                    { label: "From Rentals", value: stats.revenue.fromRentals, color: "bg-accent2" },
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/80">{item.label}</span>
                        <span className="font-semibold">{formatCurrencyVND(item.value)}</span>
                      </div>
                      <Progress value={(item.value / stats.revenue.total) * 100} className="h-2">
                        <div className={cn("h-full rounded-full transition-all", item.color)} style={{ width: `${(item.value / stats.revenue.total) * 100}%` }} />
                      </Progress>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Conversion Funnel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary dark:text-accent">
                      {stats.testDrives.conversionToPurchaseRate}%
                    </div>
                    <p className="text-sm text-muted-foreground">Test Drive → Purchase</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <div className="font-semibold">{stats.testDrives.completed}</div>
                      <div className="text-muted-foreground">Completed</div>
                    </div>
                    <div className="text-primary">→</div>
                    <div>
                      <div className="font-semibold">{stats.purchases.completed}</div>
                      <div className="text-muted-foreground">Purchased</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest bookings and purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.length === 0 ? (
                    <p className="text-center text-muted-foreground py-6">No recent activity</p>
                  ) : (
                    recentActivity.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={item.user.imageUrl} />
                          <AvatarFallback>{item.user.name?.[0] || "?"}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium text-sm">
                            {item.user.name} • <span className="text-muted-foreground">{item.car.make} {item.car.model} ({item.car.year})</span>
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.type === "purchase" ? `Purchased for ${formatCurrencyVND(item.price)}` : `${item.type === "testdrive" ? "Test Drive" : "Rental"} booked`}
                          </p>
                        </div>
                        <Badge variant={item.status === "COMPLETED" ? "default" : "secondary"}>
                          {item.status}
                        </Badge>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* === TEST-DRIVES TAB === */}
          <TabsContent value="test-drives" className="space-y-6">
            <TestDriveTab stats={stats.testDrives} />
            <ConversionChart data={stats.testDrives?.conversionChart} />
          </TabsContent>

          {/* === RENTALS TAB === */}
          <TabsContent value="rentals" className="space-y-6">
            <RentalTab stats={stats.rentals} />
          </TabsContent>

          {/* === PURCHASES TAB === */}
          <TabsContent value="purchases" className="space-y-6">
            <PurchaseTab stats={stats.purchases} />
          </TabsContent>
        </Tabs>
      </div>
    </TooltipProvider>
  );
}

// === Sub-Tab Components ===
function TestDriveTab({ stats }: { stats: DashboardStats["testDrives"] }) {
  const statusData = [
    { label: "Pending", value: stats.pending, color: "bg-amber-500" },
    { label: "Confirmed", value: stats.confirmed, color: "bg-blue-500" },
    { label: "Completed", value: stats.completed, color: "bg-emerald-500" },
    { label: "Cancelled", value: stats.cancelled, color: "bg-red-500" },
    { label: "No Show", value: stats.noShow, color: "bg-gray-500" },
  ];

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {statusData.map((s, i) => (
          <Card key={i} className="border-none shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <div className={cn("w-3 h-3 rounded-full", s.color)} />
                {s.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{s.value}</div>
              <Progress value={(s.value / stats.total) * 100} className="mt-2 h-1" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Recent Test Drives</CardTitle>
        </CardHeader>
        <CardContent>
          {stats.recent.length === 0 ? (
            <p className="text-center text-muted-foreground py-6">No recent test drives</p>
          ) : (
            <div className="space-y-3">
              {stats.recent.map((td) => (
                <div key={td.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={td.user.imageUrl} />
                      <AvatarFallback>{td.user.name?.[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{td.user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {format(new Date(td.bookingDate), "MMM dd, yyyy")}
                      </p>
                    </div>
                  </div>
                  <Badge variant={td.status === "COMPLETED" ? "default" : "secondary"}>{td.status}</Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

// Inside AdminDashboard.tsx (replace the old RentalTab)
function RentalTab({ stats }: { stats: DashboardStats["rentals"] }) {
  const statusConfig = [
    { key: "pending", label: "Pending", color: "bg-amber-500", icon: <Clock className="w-4 h-4" /> },
    { key: "confirmed", label: "Confirmed", color: "bg-blue-500", icon: <CheckCircle2 className="w-4 h-4" /> },
    { key: "active", label: "Active", color: "bg-emerald-500", icon: <Car className="w-4 h-4" /> },
    { key: "completed", label: "Completed", color: "bg-primary", icon: <CheckCircle2 className="w-4 h-4" /> },
    { key: "cancelled", label: "Cancelled", color: "bg-red-500", icon: <XCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-6">
      {/* === KPI Grid === */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {statusConfig.map((s) => {
          const value = stats[s.key as keyof typeof stats] as number;
          const percentage = stats.total > 0 ? ((value / stats.total) * 100).toFixed(1) : 0;

          return (
            <Card key={s.key} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <div className={cn("w-3 h-3 rounded-full", s.color)} />
                    {s.label}
                  </CardTitle>
                  {s.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <Progress value={parseFloat(percentage.toString())} className="mt-2 h-1">
                  <div
                    className={cn("h-full rounded-full transition-all", s.color)}
                    style={{ width: `${percentage}%` }}
                  />
                </Progress>
                <p className="text-xs text-muted-foreground mt-1">{percentage}% of total</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* === Recent Rentals List === */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Recent Rentals
          </CardTitle>
          <CardDescription>
            {stats.recent.length} latest rental bookings
          </CardDescription>
        </CardHeader>
        <CardContent>
          {stats.recent.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground">
              <Package className="mx-auto w-12 h-12 mb-3 opacity-30" />
              <p>No recent rentals</p>
            </div>
          ) : (
            <div className="space-y-3">
              {stats.recent.map((rental: any) => {
                const start = format(new Date(rental.bookingDate), "MMM dd, yyyy");
                const time = `${format(new Date(rental.startTime), "HH:mm")} – ${format(new Date(rental.endTime), "HH:mm")}`;
                const totalPrice = rental.totalPrice ? Number(rental.totalPrice).toLocaleString() : "—";

                return (
                  <div
                    key={rental.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-muted/40 hover:bg-muted/60 transition-all duration-200 border border-border/50"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10 ring-2 ring-background">
                        <AvatarImage src={rental.user.imageUrl} alt={rental.user.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-bold">
                          {rental.user.name?.[0] || "?"}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="font-semibold text-sm">
                          {rental.user.name}
                          <span className="text-muted-foreground ml-2">• {rental.car.year} {rental.car.make} {rental.car.model}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {start} | {time}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="font-bold text-primary">${totalPrice}</p>
                        <p className="text-xs text-muted-foreground">Total</p>
                      </div>
                      <Badge
                        variant={
                          rental.status === "COMPLETED"
                            ? "default"
                            : rental.status === "ACTIVE"
                            ? "outline"
                            : "secondary"
                        }
                        className="capitalize"
                      >
                        {rental.status.toLowerCase()}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function PurchaseTab({ stats }: { stats: DashboardStats["purchases"] }) {
  return (
    <div className="space-y-6">
      {/* KPI Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["pending", "confirmed", "completed", "cancelled"].map((key) => {
          const value = stats[key as keyof typeof stats] as number;
          const label = key.charAt(0).toUpperCase() + key.slice(1);
          return (
            <Card key={key} className="border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Purchases */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CurrencyIcon className="w-5 h-5 text-accent2" />
            Recent Purchases
          </CardTitle>
        </CardHeader>
        <CardContent>
          {stats.recent.length === 0 ? (
            <p className="text-center text-muted-foreground py-6">No recent purchases</p>
          ) : (
            <div className="space-y-3">
              {stats.recent.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/40 hover:bg-muted/60 transition-all border"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={p.user.imageUrl} />
                      <AvatarFallback>{p.user.name?.[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">
                        {p.user.name} • {p.car.make} {p.car.model}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {format(new Date(p.createdAt), "MMM dd, yyyy HH:mm")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-primary dark:text-accent">{formatCurrencyVND(p.price)}</span>
                    <Badge variant={p.status === "COMPLETED" ? "default" : "secondary"}>
                      {p.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}