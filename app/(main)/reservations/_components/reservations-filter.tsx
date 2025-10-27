'use client';

import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    Card, CardContent, CardHeader, CardTitle
} from '@/components/ui/card';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    CalendarIcon, Clock, Filter, Search, DollarSign, Car, Truck, CheckCircle, X
} from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { displayDateTime } from '../../bookings/helper/handle-bookings';
import { DateRange } from 'react-day-picker';
import { Label } from '@/components/ui/label';

const filterSchema = z.object({
    status: z.array(z.enum(['ALL', 'PENDING', 'CONFIRMED', 'ACTIVE', 'COMPLETED', 'CANCELLED'])).default(['ALL']),
    rentalType: z.array(z.enum(['ALL', 'HOURLY', 'DAILY'])).default(['ALL']),
    search: z.string().max(100).default(''),
    dateFrom: z.date().optional(),
    dateTo: z.date().optional(),
    priceMin: z.number().min(0).max(100000000).default(0),
    priceMax: z.number().min(0).max(100000000).default(10000000),
    sortBy: z.enum(['createdAt', 'bookingDate', 'totalPrice']).default('createdAt'),
    sortOrder: z.enum(['asc', 'desc']).default('desc'),
}).refine(
    (data) => !data.dateFrom || !data.dateTo || data.dateTo >= data.dateFrom,
    { message: "End date must be after start date", path: ["dateTo"] }
);

type FilterValues = z.infer<typeof filterSchema>;

const statusOptions = [
    { value: 'ALL', label: 'All', icon: Filter },
    { value: 'PENDING', label: 'Pending', icon: Clock },
    { value: 'CONFIRMED', label: 'Confirmed', icon: CheckCircle },
    { value: 'ACTIVE', label: 'Active', icon: Truck },
    { value: 'COMPLETED', label: 'Completed', icon: CheckCircle },
    { value: 'CANCELLED', label: 'Cancelled', icon: X },
] as const;

const rentalTypeOptions = [
    { value: 'ALL', label: 'All' },
    { value: 'HOURLY', label: 'Hourly' },
    { value: 'DAILY', label: 'Daily' },
] as const;

const sortOptions = [
    { value: 'createdAt', label: 'Newest First', order: 'desc' },
    { value: 'createdAt', label: 'Oldest First', order: 'asc' },
    { value: 'bookingDate', label: 'Earliest Date', order: 'asc' },
    { value: 'bookingDate', label: 'Latest Date', order: 'desc' },
    { value: 'totalPrice', label: 'Price: Low to High', order: 'asc' },
    { value: 'totalPrice', label: 'Price: High to Low', order: 'desc' },
] as const;

interface ReservationFiltersProps {
    onChangeForm: (values: Partial<FilterValues>) => void;
}

export function ReservationFilters({ onChangeForm }: ReservationFiltersProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const form = useForm<FilterValues>({
        resolver: zodResolver(filterSchema) as any,
        defaultValues: {
            status: ['ALL'],
            rentalType: ['ALL'],
            search: '',
            dateFrom: undefined,
            dateTo: undefined,
            priceMin: 0,
            priceMax: 10000000,
            sortBy: 'createdAt',
            sortOrder: 'desc',
        },
    });

    const { 
        watch, 
        setValue, 
        reset, 
        formState: { errors } 
    } = form;

    const watchedValues = watch(); 

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries());
        
        const initialValues: Partial<FilterValues> = {
            status: params.status ? params.status.split(',') as any : ['ALL'],
            rentalType: params.rentalType ? params.rentalType.split(',') as any : ['ALL'],
            search: params.search || '',
            priceMin: Number(params.priceMin) || 0,
            priceMax: Number(params.priceMax) || 10000000,
            sortBy: params.sortBy as any || 'createdAt',
            sortOrder: params.sortOrder as any || 'desc',
            dateFrom: params.dateFrom ? new Date(params.dateFrom) : undefined,
            dateTo: params.dateTo ? new Date(params.dateTo) : undefined,
        };

        reset(initialValues);
        onChangeForm(initialValues);
    }, [searchParams]);

    useEffect(() => {
        const params = new URLSearchParams();
        
        Object.entries(watchedValues).forEach(([key, value]) => {
            if (Array.isArray(value) && value.length > 0) {
                if (value.length === 1 && value[0] === 'ALL') return;
                params.set(key, value.join(','));
            } else if (value && value !== '' && !Array.isArray(value)) {
                if(value === 'ALL') return;
                if (key === 'dateFrom' || key === 'dateTo') {
                    params.set(key, (value as Date).toISOString().split('T')[0]);
                } else {
                    params.set(key, String(value));
                }
            }
        });

        router.replace(`?${params.toString()}`, { scroll: false });
        onChangeForm(watchedValues);
    }, [ router]);

    const toggleArray = (field: keyof FilterValues, value: any) => {
        const current: any = watch(field) || [];
        const newArray = current.includes(value)
            ? current.filter((item: any) => item !== value)
            : [...current, value];
        setValue(field, newArray);
    };

    const handleStatusChange = (status: typeof statusOptions[number]['value']) => 
        toggleArray('status', status);

    const handleRentalTypeChange = (type: typeof rentalTypeOptions[number]['value']) => 
        toggleArray('rentalType', type);

    const handleSortChange = (value: string) => {
        const option = sortOptions.find(s => `${s.value}-${s.order}` === value);
        if (option) {
            setValue('sortBy', option.value);
            setValue('sortOrder', option.order);
        }
    };

    const handleDateRange = (range?: DateRange) => {
        setValue('dateFrom', range?.from || undefined);
        setValue('dateTo', range?.to || undefined);
    };

    const activeFilters = [
        ...watchedValues.status.filter(s => s !== 'ALL'),
        ...watchedValues.rentalType.filter(t => t !== 'ALL'),
        watchedValues.search,
        watchedValues.dateFrom,
        watchedValues.dateTo,
        watchedValues.priceMin > 0 ? 1 : 0,
        watchedValues.priceMax < 10000000 ? 1 : 0,
    ].filter(Boolean).length;

    const handleClear = () => {
        reset({
            status: ['ALL'],
            rentalType: ['ALL'],
            search: '',
            dateFrom: undefined,
            dateTo: undefined,
            priceMin: 0,
            priceMax: 10000000,
            sortBy: 'createdAt',
            sortOrder: 'desc',
        });
    };

    const getError = (field: keyof FilterValues) => errors[field]?.message;

    return (
        <Card className="w-full max-w-sm bg-card text-secondary-foreground border-primary shadow-lg backdrop-blur-sm">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2 ">
                        <Filter className="h-4 w-4 text-accent2" />
                        Filters
                    </CardTitle>
                    <Badge variant="outline" className={activeFilters > 0 ? "bg-accent2/70 text-accent2-foreground hover:bg-accent/80 border-accent2/50" : "bg-accent text-accent-foreground border-accent/50"}>
                        {activeFilters}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* ✅ SEARCH */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-accent2" />
                    <Input
                        {...form.register('search')}
                        placeholder="Search car model..."
                        className="pl-10 bg-secondary border-secondary/30 text-secondary-foreground placeholder:text-secondary-foreground"
                    />
                    {getError('search') && (
                        <p className="text-xs text-destructive mt-1">{getError('search')}</p>
                    )}
                </div>

                {/* ✅ STATUS */}
                <div>
                    <h3 className="font-medium text-sm mb-2 flex items-center gap-2 ">
                        <Clock className="h-4 w-4 text-accent2" />
                        Status
                    </h3>
                    <div className="space-y-2">
                        {statusOptions.map(({ value, label }) => (
                            <div key={value} className="flex items-center gap-2">
                                <Checkbox
                                    id={`status-${value}`}
                                    checked={watch('status').includes(value)}
                                    onCheckedChange={() => handleStatusChange(value)}
                                    className="border-accent dark.data-[state=checked]:bg-accent2 data-[state=checked]:bg-accent data-[state=checked]:border-accent2 data-[state=checked]:text-secondary-foreground"
                                />
                                <Label htmlFor={`status-${value}`} className="text-sm cursor-pointer text-secondary-foreground">
                                    {label}
                                </Label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ✅ RENTAL TYPE */}
                <div>
                    <h3 className="font-medium text-sm mb-2 flex items-center gap-2">
                        <Car className="h-4 w-4 text-accent2" />
                        Rental Type
                    </h3>
                    <div className="space-y-2">
                        {rentalTypeOptions.map(({ value, label }) => (
                            <div key={value} className="flex items-center gap-2">
                                <Checkbox
                                    id={`type-${value}`}
                                    checked={watch('rentalType').includes(value)}
                                    onCheckedChange={() => handleRentalTypeChange(value)}
                                    className="border-accent dark:data-[state=checked]:bg-accent2 data-[state=checked]:bg-accent data-[state=checked]:border-accent2 data-[state=checked]:text-secondary-foreground"
                                />
                                <Label htmlFor={`type-${value}`} className="text-sm cursor-pointer ">
                                    {label}
                                </Label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ✅ DATE RANGE */}
                <div>
                    <h3 className="font-medium text-sm mb-2 flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-accent2" />
                        Date Range
                    </h3>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className={cn(
                                    "w-full justify-start text-left font-normal  bg-secondary/10 border-secondary/30 text-secondary-foreground",
                                    !watch('dateFrom') && "text-secondary-foreground/50",
                                )}
                            >
                                { !!watch('dateFrom') ? (
                                    !!watch('dateTo') ? (
                                        `${displayDateTime(watch('dateFrom'))} - ${displayDateTime(watch('dateTo'))}`
                                    ) : (
                                        displayDateTime(watch('dateFrom'))
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 popvover-content bg-secondary border-secondary/30">
                            <Calendar
                                mode="range"
                                selected={{ from: watch('dateFrom'), to: watch('dateTo') }}
                                onSelect={handleDateRange}
                                numberOfMonths={2}
                                className=""
                            />
                        </PopoverContent>
                    </Popover>
                    {getError('dateTo') && (
                        <p className="text-xs text-destructive mt-1">{getError('dateTo')}</p>
                    )}
                </div>

                {/* ✅ PRICE RANGE */}
                <div>
                    <h3 className="font-medium text-sm mb-2 flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-accent2" />
                        Price Range
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                        <Input
                            type="number"
                            {...form.register('priceMin', { valueAsNumber: true })}
                            placeholder="Min"
                            className="text-sm bg-accent1/80 border-accent/30 text-accent-foreground placeholder:text-accent-foreground"
                        />
                        <Input
                            type="number"
                            {...form.register('priceMax', { valueAsNumber: true })}
                            placeholder="Max"
                            className="text-sm bg-accent1/80 border-accent/30 text-accent-foreground placeholder:text-accent-foreground"
                        />
                    </div>
                    {getError('priceMin') && (
                        <p className="text-xs text-destructive mt-1">{getError('priceMin')}</p>
                    )}
                    {getError('priceMax') && (
                        <p className="text-xs text-destructive mt-1">{getError('priceMax')}</p>
                    )}
                </div>

                {/* ✅ SORT */}
                <div>
                    <h3 className="font-medium text-sm mb-2">Sort By</h3>
                    <Controller
                        control={form.control}
                        name="sortBy"
                        render={({ field }) => (
                            <Select 
                                value={`${field.value}-${watch('sortOrder')}`}
                                onValueChange={handleSortChange}
                            >
                                <SelectTrigger className="text-sm bg-secondary border-secondary/30 text-secondary-foreground">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-secondary text-secondary-foreground border-secondary/30">
                                    {sortOptions.map(({ value, label, order }) => (
                                        <SelectItem key={`${value}-${order}`} value={`${value}-${order}`} className="">
                                            {label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>

                {/* ✅ ACTIONS */}
                <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 ">
                        Apply Filters
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleClear} className="bg-accent2/90 text-accent2-foreground border-accent2 hover:bg-accent2/80 hover:text-accent-foreground">
                        Clear
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}