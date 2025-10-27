// src/components/admin/purchases/AdminPurchaseList.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";
import { Loader2, Search, X, Package, Phone, DollarSign, Calendar, CheckCircle2, XCircle, Clock, CurrencyIcon } from "lucide-react";

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
import { ApiResponse } from "@/types/api";
import { getAdminPurchases, updatePurchaseStatus } from "@/actions/admin";
import { formatCurrencyVND } from "@/lib/helper";

const statusColors: Record<string, string> = {
  PENDING: "bg-secondary text-secondary-foreground",
  CONFIRMED: "bg-success text-success-foreground",
  COMPLETED: "bg-primary text-primary-foreground",
  CANCELLED: "bg-destructive text-destructive-foreground",
};

const statusIcons: Record<string, React.ReactNode> = {
  PENDING: <Clock className="w-4 h-4" />,
  CONFIRMED: <CheckCircle2 className="w-4 h-4" />,
  COMPLETED: <CheckCircle2 className="w-4 h-4" />,
  CANCELLED: <XCircle className="w-4 h-4" />,
};

export default function AdminPurchaseList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const {
    loading: loadingList,
    fetchData: fetchList,
    data: listResult,
    error: listError,
  } = useFetch<ApiResponse<any>>(getAdminPurchases);

  const {
    loading: updating,
    fetchData: updateStatus,
    data: updateResult,
    error: updateError,
  } = useFetch<ApiResponse<any>>(updatePurchaseStatus);

  // Debounced fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchList({ searchTerm: searchTerm || undefined, status: statusFilter === "all" ? undefined : statusFilter });
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, statusFilter]);

  // Toast feedback
  useEffect(() => {
    if (updateResult?.success) toast.success("Purchase status updated");
  }, [updateResult]);

  useEffect(() => {
    if (listError) toast.error("Failed to load purchases");
    if (updateError) toast.error("Failed to update status");
  }, [listError, updateError]);

  const handleStatusChange = async (purchaseId: string, newStatus: string) => {
    await updateStatus({ purchaseId, newStatus });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
  };

  const purchases = useMemo(() => listResult?.data ?? [], [listResult]);
  const activeFilters = useMemo(() => {
    const f: string[] = [];
    if (searchTerm) f.push(`"${searchTerm}"`);
    if (statusFilter !== "all") f.push(statusFilter);
    return f;
  }, [searchTerm, statusFilter]);

  return (
    <TooltipProvider>
      <div className="min-h-screen p-2 md:p-4 lg:p-6 bg-card">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 card-header">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
            <Package className="w-8 h-8 text-primary dark:text-accent" />
            Purchase Management
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
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-accent2" />
              <Input
                placeholder="Car, customer, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/70"
              />
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent className="bg-card">
                <SelectItem value="all">All statuses</SelectItem>
                {["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"].map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex gap-2 flex-wrap">
              {activeFilters.map((f, i) => (
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
              <CurrencyIcon className="w-5 h-5 text-accent2" />
              Purchase Orders
            </CardTitle>
            <CardDescription>
              {loadingList ? "Loading…" : `${purchases.length} order${purchases.length !== 1 ? "s" : ""}`}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            {loadingList ? (
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
            ) : purchases.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Package className="mx-auto w-12 h-12 mb-3 opacity-30" />
                <p>No purchases match your filters.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead className="w-12"> </TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Car</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {purchases.map((p:any) => (
                    <TableRow
                      key={p.id}
                      className="hover:bg-accent/5 transition-colors animate-in fade-in slide-in-from-top-2 duration-300"
                    >
                      <TableCell>
                        <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-accent/10 border flex items-center justify-center text-primary dark:text-accent font-bold">
                          {p.user.name?.[0] ?? "?"}
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="font-medium">{p.user.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Phone className="w-3 h-3 text-accent2" />
                          {p.user.phone}
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-accent2" />
                          <span>
                            {p.car.year} {p.car.make} {p.car.model}
                          </span>
                        </div>
                      </TableCell>

                      <TableCell className="hidden md:table-cell">
                        <div className="text-sm">
                          {format(new Date(p.createdAt), "MMM dd, yyyy")}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {format(new Date(p.createdAt), "HH:mm")}
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="font-semibold text-primary dark:text-accent">
                          {formatCurrencyVND(p.price)}
                        </div>
                      </TableCell>

                      <TableCell>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center gap-1">
                              {statusIcons[p.status]}
                              <Badge
                                className={cn(
                                  "capitalize",
                                  statusColors[p.status] ?? "bg-muted"
                                )}
                              >
                                {p.status.toLowerCase()}
                              </Badge>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>Current status</TooltipContent>
                        </Tooltip>
                      </TableCell>

                      <TableCell className="text-right">
                        <Select
                          value={p.status}
                          onValueChange={(v) => handleStatusChange(p.id, v)}
                          disabled={updating}
                        >
                          <SelectTrigger className="w-32 h-8 text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-card">
                            {["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"].map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
}