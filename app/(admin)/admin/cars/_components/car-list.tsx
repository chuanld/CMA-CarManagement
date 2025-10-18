'use client'
import { deleteCar, getCars, updateCarStatus } from '@/actions/cars'
import useFetch from '@/app/hooks/use-fetch'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { formatCurrency, searchDebounce } from '@/lib/helper'
import { ApiResponse, CarListApiResponse, FilterOptions } from '@/types/api'
import { Car, GETCARS } from '@/types/car'
import { CarIcon, Check, Eye, Loader, Loader2, MoreHorizontal, Plus, SparklesIcon, Star, StarOff, Trash, WatchIcon, X } from 'lucide-react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'
import PaginationToolbar from '../../_components/pagination'
import usePagination from '@/app/hooks/use-pagination'
import FiltersToolbar from '../../_components/filters-toolbar'
import { CarFilters } from '../../_components/car-filter'
import { buildCarPayload } from '@/utils/build-payload'
import { CarFilterSchema } from '@/schemas/carFilterSchema'
import { buildCarQueryParams } from '@/lib/buildCarQuery'
import { useFetch2v } from '@/app/hooks/use-fetch2'
import { ApiQueryPayload } from '@/types/payload'



interface PaginationPayload {
    page?: number;
    limit?: number;
}

type SortOptions = "newest" | "oldest" | "priceAsc" | "priceDesc" | "createdAt" | "price" | "year";
type OrderBy = "asc" | "desc";




const CarList = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [carToDelete, setCarToDelete] = useState<Car | null>(null)
    const [deleteDialogOpen, setDeleteDialogOpen] = useState<Boolean>(false)
    const [sortBy, setSortBy] = useState<SortOptions>('newest')
    const [filters, setFilters] = useState<Partial<CarFilterSchema>>({})
    const [searchTerm, setSearchTerm] = useState<string>('')




    const { loading: loadingCars, fetchData: fetchCars, data: carsData, error: carsError } = useFetch<CarListApiResponse>(getCars);
    const {
        page,
        limit,
        totalItems,
        totalPages,
        setTotal,
        handlePageChange,
    } = usePagination({ initialPage: 1, initialLimit: 2 });

    //feature filter:
    const queryString = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);

    const buildPayload = (queryString: any) => {

        const { search = '', page: pageStr, limit: limitStr, sortBy = 'newest', sortOrder = 'desc', ...rest } = queryString;

        const parsedFilters = Object.entries(rest).reduce((acc, [key, value]) => {
            if (value === "true") acc[key] = true;
            else if (value === "false") acc[key] = false;
            else acc[key] = value;
            return acc;
        }, {} as Record<string, any>);

        const pageNum = parseInt(pageStr || "1", 10);
        const limitNum = parseInt(limitStr || "5", 10);

        setSearchTerm(search);
        setSortBy(sortBy as SortOptions);
        setFilters(parsedFilters);

        // handlePageChange(pageNum);
        // setTotal(limitNum)

        return {
            search,
            pagination: {
                page: pageNum,
                limit: limitNum,
            },
            sortBy: sortBy as SortOptions,
            sortOrder: sortOrder    as OrderBy,
            filters:{
                ...parsedFilters
            } as FilterOptions
        }
    }

    useEffect(() => {
    const { page: pageStr, limit: limitStr } = queryString;
    const pageNum = parseInt(pageStr || '1', 10);
    const limitNum = parseInt(limitStr || '5', 10);

    handlePageChange(pageNum); // set hook page
    setTotal(limitNum);        // set hook limit
}, []); // chỉ chạy 1 lần

    useEffect(() => {
        const payload = buildPayload(queryString);


        fetchCars(payload);
    }, [searchParams]);

    console.log(filters)


    useEffect(() => {
        if (carsData?.pagination?.total && carsData?.success) {
            setTotal(carsData.pagination.total); // update total cho usePagination
        }
    }, [carsData]);







    const { loading: deletingCar, fetchData: deleteByCar, data: deleteCarData, error: deleteCarError } = useFetch<ApiResponse<Car>>(deleteCar);



    const { loading: updatingCar, fetchData: updateStatusCar, data: updateCarData, error: updateCarError } = useFetch<ApiResponse<Car[]>>(updateCarStatus);

    //Handle side effects
    useEffect(() => {
        const payload = buildPayload(queryString);
        if (updateCarData?.success && !updateCarError) {
            toast.success('Car updated successfully')
            
            fetchCars(payload)
        }
        if (deleteCarData?.success && !deleteCarError) {
            toast.success('Car deleted successfully')
            fetchCars(payload)
        }
        if (carsData?.success && carsData.pagination?.total) {
            setTotal(carsData.pagination.total);
        }
    }, [updateCarData, updateCarError, deleteCarData, deleteCarError, page, limit])


    useEffect(() => {
        if (carsError) {
            toast.error(carsError.message)
        }
        if (updateCarError) {
            toast.error(updateCarError.message)
        }
        if (deleteCarError) {
            toast.error(deleteCarError.message)
        }
    }, [carsError, updateCarError, deleteCarError])


    const handleToggleFeatured = async (car: Car) => {
        await updateStatusCar(car.id, { featured: !car.featured });
    }
    const handleUpdateStatus = async (car: Car, status: string) => {
        if (car.status === status) return;
        await updateStatusCar(car.id, { status });
    }
    const handleDeleteCar = async () => {
        if (!carToDelete) return;
        await deleteByCar(carToDelete.id);
        setDeleteDialogOpen(false);
        setCarToDelete(null);

    }

    //Handle filter



    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'AVAILABLE':
                return <span className='bg-green-100 text-green-800 py-1 px-2 rounded'>Available</span>;
            case 'UNAVAILABLE':
                return <span className='bg-red-100 text-red-800 py-1 px-2 rounded'>Unavailable</span>;
            case 'SOLD':
                return <span className='bg-gray-100 text-gray-800 py-1 px-2 rounded'>Sold</span>;
            case 'PENDING':
                return <span className='bg-yellow-100 text-yellow-800 py-1 px-2 rounded'>Pending</span>;
            default:
                return null;
        }
    }


    //Filter section


    return (
        <div className='space-y-4'>
            <div>
                <Button onClick={() => router.push('/admin/cars/create')} className='mb-4 flex items-center'>
                    <Plus className='w-4 h-4 mr-2' /> Add New Car
                </Button>

                {/* <form onSubmit={handleSearchSubmit} className='flex items-center'>
                    <FiltersToolbar
                        onSearch={handleSearchChange}
                        onFilterChange={handleFilterChange}
                        onSortChange={handleSortChange}
                    />
                </form> */}
            </div>

            <CarFilters />


            {/* Cars Table  */}
            <Card>
                <CardContent>
                    {loadingCars && !carsData ? (
                        <div className="flex justify-center items-center py-12">
                            <Loader2 className="animate-spin h-6 w-6 text-gray-600" />
                        </div>
                    ) : carsData?.success && carsData.data.length > 0 ? (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='w-24'></TableHead>
                                        <TableHead>Make & Model</TableHead>
                                        <TableHead>Year</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Featured</TableHead>
                                        <TableHead className='text-right'>Actions</TableHead>

                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {carsData.data.map((car: Car) => {
                                        return (
                                            <TableRow key={car.id}>
                                                <TableCell className='w-15 h-auto overflow-hidden rounded'>
                                                    {car?.images && car.images.length > 0 ? (
                                                        <Image
                                                            src={car.images[0]}
                                                            alt={`Image of ${car.make} ${car.model}`}
                                                            width={50}
                                                            height={50}
                                                            className="h-full w-full object-cover"
                                                            priority
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gray-200" >
                                                            <CarIcon className="w-8 h-8 text-gray-400 m-auto" />
                                                        </div>
                                                    )}
                                                </TableCell>
                                                <TableCell>{car.make} {car.model}</TableCell>
                                                <TableCell>{car.year}</TableCell>
                                                <TableCell>{formatCurrency(car.price)}</TableCell>
                                                <TableCell>{getStatusBadge(car.status)}</TableCell>
                                                <TableCell>
                                                    <Button
                                                        variant="ghost"
                                                        size='sm'
                                                        className='p-0 h-9 w-9'
                                                        onClick={() => handleToggleFeatured(car)}
                                                        disabled={updatingCar}
                                                    >
                                                        {car.featured ? (
                                                            <Star className='h-5 w-5 text-amber-500 fill-amber-500' />
                                                        ) : (
                                                            <StarOff className='h-5 w-5 text-gray-400 fill-gray-400' />
                                                        )}
                                                    </Button>
                                                </TableCell>
                                                <TableCell className='text-right'>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" className='p-0 h-9 w-9'>
                                                                <MoreHorizontal className='h-5 w-5' />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent>
                                                            <DropdownMenuLabel className='font-bold'>Manage</DropdownMenuLabel>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem
                                                                onClick={() => router.push(`/cars/${car.id}`)}>
                                                                <Eye className='w-4 h-4 mr-2' />
                                                                View
                                                            </DropdownMenuItem>

                                                            <DropdownMenuLabel>Status</DropdownMenuLabel>
                                                            <DropdownMenuItem
                                                                onClick={() => handleUpdateStatus(car, 'AVAILABLE')}
                                                                disabled={(car.status === 'AVAILABLE') || (updatingCar)}>
                                                                <Check className='w-4 h-4 mr-2' />
                                                                Set Available
                                                            </DropdownMenuItem>
                                                            
                                                            <DropdownMenuItem
                                                                onClick={() => handleUpdateStatus(car, 'PENDING')}
                                                                disabled={(car.status === 'PENDING') || (updatingCar)}>
                                                                <WatchIcon className='w-4 h-4 mr-2' />
                                                                Set Pending
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem
                                                                onClick={() => handleUpdateStatus(car, 'SOLD')}
                                                                disabled={(car.status === 'SOLD') || (updatingCar)}>
                                                                <SparklesIcon className='w-4 h-4 mr-2' />
                                                                Set Sold
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem
                                                                className='text-red-600'
                                                                onClick={() => { setCarToDelete(car); setDeleteDialogOpen(true); }}
                                                            >
                                                                <Trash className='w-4 h-4 mr-2' />
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableBody>
                                {carsData?.pagination && carsData.pagination.totalPages > 1 && (
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell colSpan={7} className="px-0">
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
                        <div className="flex flex-col justify-center items-center py-12 text-gray-500">
                            <CarIcon className="w-12 h-12 mb-2" />
                            <h3 className="text-lg font-medium text-gray-900 mb-1">No cars found.</h3>
                            <p className="text-gray-500 mb-4">
                                {
                                    searchTerm ? `No cars match your search "${searchTerm}".` : "You haven't added any cars yet."
                                }
                            </p>
                            <Button onClick={() => router.push('/admin/cars/create')}>Add Car</Button>
                        </div>
                    )}
                </CardContent>
            </Card>

            <Dialog open={!!deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Car</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete {carToDelete?.make} ({carToDelete?.model})? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setDeleteDialogOpen(false)} disabled={deletingCar}>
                            Cancel
                        </Button>
                        <Button variant="destructive" onClick={() => {
                            if (carToDelete) {
                                handleDeleteCar()
                            }
                        }}
                            disabled={deletingCar}
                        >
                            {deletingCar ? (
                                <>
                                    <Loader2 className="animate-spin" /> Deleting...
                                </>
                            ) : (
                                <>Delete</>
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CarList