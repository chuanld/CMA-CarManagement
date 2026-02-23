"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";

import { useQueryClient } from "@tanstack/react-query";

import usePagination from "@/app/hooks/use-pagination";
import { useServerQuery } from "@/app/hooks/use-server-query";
import useFetch from "@/app/hooks/use-fetch";

import { getCars, deleteCar, updateCarStatus } from "@/actions/cars";
import { Car } from "@/types/car";
import { ApiResponse } from "@/types/api";
import { formatCurrencyVND } from "@/lib/helper";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import {
  CarIcon,
  Loader2,
  MoreHorizontal,
  Plus,
  Star,
  StarOff,
  Check,
  WatchIcon,
  SparklesIcon,
  Trash,
  Eye,
} from "lucide-react";

import { CarFilters } from "../../_components/car-filter";
import PaginationToolbar from "../../_components/pagination";
import { useSmoothRouter } from "@/app/hooks/use-smooth-router";

type SortOptions = "createdAt" | "price" | "year";
type OrderBy = "asc" | "desc";

export default function CarList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const { smoothPush, isPending } = useSmoothRouter();

  const [carToDelete, setCarToDelete] = useState<Car | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOptions>();
  const [sortOrder, setSortOrder] = useState<OrderBy>();

  const {
    page,
    limit,
    setPage,
    setLimit,
    totalPages,
    totalItems,
    setTotal,
    handlePageChange,
  } = usePagination({
    initialPage: Number(searchParams.get("page")) || 1,
    initialLimit: Number(searchParams.get("limit")) || 5,
  });

  /* =======================
     BUILD PAYLOAD (PURE)
     ======================= */
  const payload = useMemo(() => {
    const p = Object.fromEntries(searchParams.entries());

    const pageNum = Number(p.page) || 1;
    const limitNum = Number(p.limit) || 5;

    const cleanFilters: Record<string, any> = {};
    for (const [k, v] of Object.entries(p)) {
      if (["page", "limit", "sortBy", "sortOrder"].includes(k)) continue;
      if (v === "true") cleanFilters[k] = true;
      else if (v === "false") cleanFilters[k] = false;
      else if (!isNaN(Number(v))) cleanFilters[k] = Number(v);
      else cleanFilters[k] = v;
    }

    const sb = (p.sortBy as SortOptions) ?? "createdAt";
    const so = (p.sortOrder as OrderBy) ?? "desc";

    return {
      pagination: { page: pageNum, limit: limitNum },
      sortBy: sb,
      sortOrder: so,
      filters: cleanFilters,
      search: p.search ?? "",
    };
  }, [searchParams]);

  /* =======================
     SYNC STATE (SIDE EFFECT)
     ======================= */
  useEffect(() => {
    setPage(payload.pagination.page);
    setLimit(payload.pagination.limit);
    setSortBy(payload.sortBy);
    setSortOrder(payload.sortOrder);
  }, [payload, setPage, setLimit]);

  /* =======================
     QUERY (CACHED)
     ======================= */
  const {
    data: carsRes,
    isLoading: loadingCars,
    error: carsErr,
  } = useServerQuery<any>({
    queryKey: ["admin-cars", payload],
    queryFn: () => getCars(payload),
  });

  useEffect(() => {
    if (carsRes?.success && carsRes.pagination?.total) {
      setTotal(carsRes.pagination.total);
    }
  }, [carsRes, setTotal]);

  useEffect(() => {
    if (carsErr) toast.error(carsErr.message);
  }, [carsErr]);

  /* =======================
     MUTATIONS
     ======================= */
  const { fetchData: delCar, loading: deleting } =
    useFetch<ApiResponse<any>>(deleteCar);

  const { fetchData: updCar, loading: updating } =
    useFetch<ApiResponse<any>>(updateCarStatus);

  const handleDelete = async () => {
    if (!carToDelete) return;
    await delCar(carToDelete.id);
    toast.success("Car deleted");
    setDeleteOpen(false);
    setCarToDelete(null);
    queryClient.invalidateQueries({ queryKey: ["admin-cars"] });
  };

  const toggleFeatured = async (car: Car) => {
    await updCar(car.id, { featured: !car.featured });
    toast.success("Car updated");
    queryClient.invalidateQueries({ queryKey: ["admin-cars"] });
  };

  const setStatus = async (car: Car, status: string) => {
    if (car.status === status) return;
    await updCar(car.id, { status });
    toast.success("Car updated");
    queryClient.invalidateQueries({ queryKey: ["admin-cars"] });
  };

  /* =======================
     HELPERS
     ======================= */
  const getCarPrice = (car: Car): number => {
    if (car.saleInfo?.price) return Number(car.saleInfo.price);
    if (car.rentInfo?.hourlyPrice) return Number(car.rentInfo.hourlyPrice);
    return 0;
  };

  const getStatusBadge = (status: string) => {
    const map: Record<string, string> = {
      AVAILABLE: "badge-success",
      RESERVED: "badge-warning",
      SOLD: "badge-secondary",
      RENTED: "badge-info",
      PENDING: "badge-destructive",
    };
    return (
      <span className={cn("badge-primary px-2 py-0.5 text-xs", map[status])}>
        {status}
      </span>
    );
  };

  /* =======================
     RENDER
     ======================= */
  return (
    <div className="min-h-screen p-4 bg-card">
      <div className="flex items-center justify-between mb-6 card-header">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <CarIcon /> Car Management
        </h1>
        <Badge variant="outline">
          {new Date().toLocaleString("en-US")}
        </Badge>
      </div>

      <Button onClick={() => smoothPush("/admin/cars/create")}>
        <Plus className="mr-2 h-4 w-4" /> Add New Car
      </Button>

      <CarFilters
        onChange={(vals) => {
          const sp = new URLSearchParams();
          Object.entries(vals).forEach(([k, v]) => {
            if (v && v !== "ALL") sp.set(k, String(v));
          });
          sp.set("page", "1");
          sp.set("limit", String(limit));
          router.replace(`?${sp.toString()}`, { scroll: false });
        }}
      />

      <Card className="mt-4">
        <CardContent className="p-0">
          {loadingCars ? (
            <div className="flex justify-center py-12">
              <Loader2 className="animate-spin" />
            </div>
          ) : carsRes?.data?.length ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead />
                  <TableHead>Car</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {carsRes.data.map((car: Car) => (
                  <TableRow
                    key={car.id}
                    onClick={() => smoothPush(`/admin/cars/${car.id}`)}
                    className="cursor-pointer"
                  >
                    <TableCell>
                      {car.images?.[0] ? (
                        <Image src={car.images[0]} alt="" width={56} height={56} />
                      ) : (
                        <CarIcon />
                      )}
                    </TableCell>
                    <TableCell>{car.make} {car.model}</TableCell>
                    <TableCell>{car.year}</TableCell>
                    <TableCell>{formatCurrencyVND(getCarPrice(car))}</TableCell>
                    <TableCell>{getStatusBadge(car.status)}</TableCell>
                    <TableCell>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFeatured(car);
                        }}
                      >
                        {car.featured ? <Star /> : <StarOff />}
                      </Button>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoreHorizontal />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              setCarToDelete(car);
                              setDeleteOpen(true);
                            }}
                            className="text-destructive"
                          >
                            <Trash className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

              {totalPages > 1 && (
                <TableFooter>
                    <tr className="w-full">
                  <PaginationToolbar
                    pagination={{ page, limit, total: totalItems, totalPages }}
                    onPageChange={handlePageChange}
                  />
                  </tr>
                </TableFooter>
              )}
            </Table>
          ) : (
            <div className="text-center py-12">No cars found</div>
          )}
        </CardContent>
      </Card>

      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete car</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{" "}
              <strong>{carToDelete?.make} {carToDelete?.model}</strong>?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
