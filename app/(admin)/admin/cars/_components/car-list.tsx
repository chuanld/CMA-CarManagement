"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";

import usePagination from "@/app/hooks/use-pagination";

import { getCars, deleteCar, updateCarStatus } from "@/actions/cars";
import useFetch from "@/app/hooks/use-fetch";
import { Car } from "@/types/car";
import { formatCurrencyVND } from "@/lib/helper";

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

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ApiResponse } from "@/types/api";
import { cn } from "@/lib/utils";
import { CarFilters } from "../../_components/car-filter";
import PaginationToolbar from "../../_components/pagination";
import { Badge } from "@/components/ui/badge";
import { useSmoothRouter } from "@/app/hooks/use-smooth-router";

type SortOptions = "createdAt" | "price" | "year";
type OrderBy = "asc" | "desc";

export default function CarList() {
    const router = useRouter();
    const { smoothPush, isPending } = useSmoothRouter();
    const searchParams = useSearchParams();


    const [carToDelete, setCarToDelete] = useState<Car | null>(null);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [filters, setFilters] = useState<Record<string, any>>({});
    const [sortBy, setSortBy] = useState<SortOptions|undefined>(undefined);
    const [sortOrder, setSortOrder] = useState<OrderBy|undefined>(undefined);

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

    const { loading: loadingCars, fetchData: fetchCars, data: carsRes, error: carsErr } =
        useFetch<ApiResponse<any>>(getCars);

    const { loading: deleting, fetchData: delCar, data: delCarRes } = useFetch<ApiResponse<any>>(deleteCar);
    const { loading: updating, fetchData: updCar, data: updCarRes } = useFetch<ApiResponse<any>>(updateCarStatus);


    const buildPayload = () => {
        const p = Object.fromEntries(searchParams.entries());

        const pageNum = Number(p.page) || 1;
        const limitNum = Number(p.limit) || 5;
        setPage(pageNum);
        setLimit(limitNum);

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
        setSortBy(sb);
        setSortOrder(so);

        return {
            pagination: { page: pageNum, limit: limitNum },
            sortBy: sb,
            sortOrder: so,
            filters: cleanFilters,
            search: p.search ?? "",
        };
    };

    useEffect(() => {
        fetchCars(buildPayload());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);


    useEffect(() => {
        if (carsRes?.success && carsRes.pagination?.total) {
            setTotal(carsRes.pagination.total);
        }
    }, [carsRes, setTotal]);


    useEffect(() => {
        if (carsErr) toast.error(carsErr.message);
    }, [carsErr]);

    const handleDelete = async () => {
        if (!carToDelete) return;
        await delCar(carToDelete.id);
        setDeleteOpen(false);
        setCarToDelete(null);
    };

    useEffect(() => {
        if (delCarRes?.success) {
            toast.success("Car deleted");
            fetchCars(buildPayload());
        }
    }, [delCarRes]);


    const toggleFeatured = async (car: Car) => {
        await updCar(car.id, { featured: !car.featured });
    };

    const setStatus = async (car: Car, status: string) => {
        if (car.status === status) return;
        await updCar(car.id, { status });
    };

    useEffect(() => {
        if (updCarRes?.success) {
            toast.success("Car updated");
            fetchCars(buildPayload());
        }
    }, [updCarRes]);

    const handleFilterChange = (newVals: Record<string, any>) => {
        setPage(1);
        const sp = new URLSearchParams();
        Object.entries(newVals).forEach(([k, v]) => {
            if (v === undefined || v === "" || v === false) return;
            if (k === "status" && v === "ALL") return;
            sp.set(k, String(v));
        });
        sp.set("page", "1");
        sp.set("limit", String(limit));
        router.replace(`?${sp.toString()}`, { scroll: false });
    };


    const getStatusBadge = (status: string) => {
        const map: Record<string, string> = {
            AVAILABLE: "badge-success",
            RESERVED: "badge-warning",
            SOLD: "badge-secondary",
            RENTED: "badge-info",
            PENDING: "badge-destructive",
        };
        const cls = map[status] ?? "badge-secondary";
        return <span className={cn("badge-primary px-2 py-0.5 text-xs font-medium rounded-full", cls)}>{status}</span>;
    };

    const getCarPrice = (car: Car): number => {
        if (car.saleInfo?.price) return Number(car.saleInfo.price);
        if (car.rentInfo?.hourlyPrice) return Number(car.rentInfo.hourlyPrice);
        return 0;
    };

    return (
        <div className="min-h-screen p-2 md:p-4 lg:p-6 bg-card">

            <div className="flex items-center justify-between mb-6 card-header">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
                    <CarIcon className="w-8 h-8 text-primary dark:text-accent" />
                    Car Management
                </h1>
                <Badge variant="outline" className="text-xs">
                    {new Date().toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                    })}
                </Badge>
            </div>
            {/* Add button */}
            <Button
                onClick={() => smoothPush("/admin/cars/create")}
                className="flex items-center gap-2"
            >
                <Plus className="h-4 w-4" /> Add New Car
            </Button>

            {/* Filters */}
            <CarFilters onChange={handleFilterChange} />

            {/* Table */}
            <Card className="bg-card border-border mt-4">
                <CardContent className="p-0">
                    {loadingCars && !carsRes ? (
                        <div className="flex justify-center py-12">
                            <Loader2 className="animate-spin h-8 w-8 text-muted-foreground" />
                        </div>
                    ) : carsRes?.success && carsRes.data.length ? (
                        <div className="overflow-x-auto">
                            <Table className="border-none">
                                <TableHeader className="table-header">
                                    <TableRow className="border-border ">
                                        <TableHead className="w-20" />
                                        <TableHead>Make & Model</TableHead>
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
                                            className="cursor-pointer hover:bg-muted/50 border-border"
                                            onClick={(e) => {
                                                // prevent row click when clicking inside dropdown
                                                if ((e.target as HTMLElement).closest("button")) return;
                                                smoothPush(`/admin/cars/${car.id}`);
                                            }}
                                            aria-disabled={isPending}
                                        
                                        >
                                            {/* Image */}
                                            <TableCell className="">
                                                {car.images?.[0] ? (
                                                    <Image
                                                        src={car.images[0]}
                                                        alt={`${car.make} ${car.model}`}
                                                        width={56}
                                                        height={56}
                                                        className="object-cover rounded-md"
                                                    />
                                                ) : (
                                                    <div className="flex h-14 w-14 items-center justify-center bg-muted rounded-md">
                                                        <CarIcon className="h-8 w-8 text-muted-foreground" />
                                                    </div>
                                                )}
                                            </TableCell>

                                            {/* Make / Model */}
                                            <TableCell className="font-medium">
                                                {car.make} {car.model}
                                            </TableCell>

                                            {/* Year */}
                                            <TableCell>{car.year}</TableCell>

                                            {/* Price */}
                                            <TableCell>{formatCurrencyVND(getCarPrice(car))}</TableCell>

                                            {/* Status badge */}
                                            <TableCell>{getStatusBadge(car.status)}</TableCell>

                                            {/* Featured */}
                                            <TableCell>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleFeatured(car);
                                                    }}
                                                    disabled={updating || isPending}
                                                >
                                                    {car.featured ? (
                                                        <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                                                    ) : (
                                                        <StarOff className="h-5 w-5 text-muted-foreground" />
                                                    )}
                                                </Button>
                                            </TableCell>

                                            {/* Actions */}
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <MoreHorizontal className="h-5 w-5" />
                                                        </Button>
                                                    </DropdownMenuTrigger>

                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Manage</DropdownMenuLabel>
                                                        <DropdownMenuSeparator />

                                                        <DropdownMenuItem
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                smoothPush(`/cars/${car.id}`);
                                                            }}
                                                        >
                                                            <Eye className="mr-2 h-4 w-4" /> View
                                                        </DropdownMenuItem>

                                                        <DropdownMenuLabel>Status</DropdownMenuLabel>
                                                        {["AVAILABLE", "RESERVED", "RENTED", "PENDING", "SOLD"].map((s) => (
                                                            <DropdownMenuItem
                                                                key={s}
                                                                disabled={car.status === s || updating || isPending}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setStatus(car, s);
                                                                }}
                                                            >
                                                                {s === "AVAILABLE" && <Check className="mr-2 h-4 w-4" />}
                                                                {s === "RESERVED" && <SparklesIcon className="mr-2 h-4 w-4" />}
                                                                {s === "RENTED" && <SparklesIcon className="mr-2 h-4 w-4" />}
                                                                {s === "PENDING" && <WatchIcon className="mr-2 h-4 w-4" />}
                                                                {s === "SOLD" && <SparklesIcon className="mr-2 h-4 w-4" />}
                                                                Set {s[0] + s.slice(1).toLowerCase()}
                                                            </DropdownMenuItem>
                                                        ))}

                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem
                                                            className="text-destructive"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setCarToDelete(car);
                                                                setDeleteOpen(true);
                                                            }}
                                                        >
                                                            <Trash className="mr-2 h-4 w-4" /> Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>

                                {/* Pagination inside table footer */}
                                {totalPages > 1 && (
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell colSpan={7} className="p-0">
                                                <PaginationToolbar
                                                    pagination={{ page, limit, total: totalItems, totalPages }}
                                                    onPageChange={handlePageChange}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </TableFooter>
                                )}
                            </Table>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                            <CarIcon className="h-12 w-12 mb-3" />
                            <p className="text-lg font-medium">No cars found.</p>
                            <Button
                                className="mt-4"
                                onClick={() => smoothPush("/admin/cars/create")}
                            >
                                Add Car
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Delete confirmation */}
            <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Car</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete <strong>{carToDelete?.make} {carToDelete?.model}</strong>? This cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setDeleteOpen(false)} disabled={deleting || isPending}>
                            Cancel
                        </Button>
                        <Button variant="destructive" onClick={handleDelete} disabled={deleting || isPending}>
                            {deleting ? "Deleting…" : "Delete"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}