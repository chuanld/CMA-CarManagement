'use client';
import { set, z } from "zod";
import { CarStatus, SaleStatus } from "@prisma/client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useTransition } from "react";
import { CarEditSchema } from "../../schemas/carEditSchema";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Check, Loader2, LucideTicketX, Trash2, Upload, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { use, useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/app/hooks/use-fetch";
import { adminUpdateCarById } from "@/actions/cars";
import {  bodyTypes, carTypes, fuelTypes, saleStatuses, transmissionTypes } from "../../../helper/types";
import { parseCarUpdatePayload } from "../../../helper/serializeData";
import { Separator } from "@/components/ui/separator";
import { ApiResponse } from "@/types/api";



export default function CarEditForm({ carId, defaultValues, updateCar }: any) {

    const [activeTab, setActiveTab] = useState<string>('ai');
    const [imageError, setImageError] = useState<string | null>(null);
    const [uploadedImages, setUploadedImages] = useState<string[]>(defaultValues.images || []);




    const {
        loading: updatingCar,
        fetchData: fnUpdateCar,
        data: resultUpdate,
        error: errorUpdate,
    } = useFetch<ApiResponse<unknown>>(adminUpdateCarById);

    const { register, setValue, getValues, watch, handleSubmit, formState: { errors } } = useForm<z.infer<typeof CarEditSchema>>({
        resolver: zodResolver(CarEditSchema) as any,
        defaultValues: {
            ...defaultValues,
            year: defaultValues.year?.toString() || '',
            mileage: defaultValues.mileage?.toString() || '',
            seats: defaultValues.seats?.toString() || '',
            saleInfo: {
                price: defaultValues.saleInfo?.price ? defaultValues.saleInfo.price.toString() : '',
                negotiable: defaultValues.saleInfo?.negotiable || false,
                status: defaultValues.saleInfo?.status as SaleStatus || 'AVAILABLE',
            },
            rentInfo: {
                hourlyPrice: defaultValues.rentInfo?.hourlyPrice ? defaultValues.rentInfo.hourlyPrice.toString() : '',
                dailyPrice: defaultValues.rentInfo?.dailyPrice ? defaultValues.rentInfo.dailyPrice.toString() : '',
                deposit: defaultValues.rentInfo?.deposit ? defaultValues.rentInfo.deposit.toString() : '',
                available: defaultValues.rentInfo?.available || true,
            },
            images: defaultValues.images || [],
        },
    });



    const onMultiImagesDrop = useCallback((acceptedFiles: File[]) => {
        const validFiles = acceptedFiles.filter((file) => {
            if (file.size > 5 * 1024 * 1024) {
                toast.error(`${file.name} exceeds the 5MB size limit.`);
                return false;
            }
            return true;
        });

        if (validFiles.length === 0) return;

        const newImages: any[] = [];

        validFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    newImages.push(e.target.result);
                }
                if (newImages.length === validFiles.length) {
                    setUploadedImages((prev) => [...prev, ...newImages]);
                    toast.success(`Successfully uploaded ${newImages.length} images!`);
                }
            };
            reader.readAsDataURL(file);
        });
    }, []);
    const { getRootProps: GetMultiImageRootProps, getInputProps: GetMultiImageInputProps } = useDropzone({
        onDrop: onMultiImagesDrop,
        accept: { 'image/*': [".jpeg", ".png", ".jpg"] },
        multiple: true,
    })

    const handleRemoveImage = (index: number) => {
        setUploadedImages(prev => prev.filter((_, i) => i !== index));
    };

    useEffect(() => {
        if(resultUpdate && resultUpdate?.success) {
            toast.success("Car details updated successfully");

            window.location.href = `/admin/cars/${carId}`;
        }
    },[resultUpdate, carId]);

    const onSubmit = async (data: z.infer<typeof CarEditSchema>) => {
        try {
            if (!uploadedImages || uploadedImages.length === 0) {
                toast.error("Please upload at least one image.");
                return;
            }
            if (!data) return;

            const updateData = parseCarUpdatePayload(data, uploadedImages);
            await fnUpdateCar(carId, updateData);


        } catch (err) {
            toast.error("An unexpected error occurred");
        } finally {
        }
    };



    return (

        <Card>
            <CardHeader>
                <CardTitle>Car Details</CardTitle>
                <CardDescription>Fill the details of the car you want to add</CardDescription>
                {!!watch('confidence') && (
                    <div className="mt-4">
                        <Label htmlFor="confidence">Confidence Level</Label>
                        <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-blue-500"
                                style={{ width: `${Math.min(100, parseFloat(watch('confidence') || '0') * 100)}%` }}
                            ></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                            {Math.min(100, parseFloat(watch('confidence') || '0') * 100)}% confidence
                        </p>
                    </div>
                )}
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className='space-y-2'>
                            <Label htmlFor='make'>Make</Label>
                            <Input
                                id='make'
                                {...register('make')}
                                placeholder='e.g., Toyota, Ford, BMW'
                                className={errors.make ? 'border-red-600' : ''}
                            />
                            {errors.make && <p className='text-sm text-red-600'>{errors.make.message}</p>}
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='model'>Model</Label>
                            <Input
                                id='model'
                                {...register('model')}
                                placeholder='e.g., Camry, Mustang, X5'
                                className={errors.model ? 'border-red-600' : ''}
                            />
                            {errors.model && <p className='text-sm text-red-600'>{errors.model.message}</p>}
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='year'>Year</Label>
                            <Input
                                id='year'
                                {...register('year')}
                                placeholder='e.g., 2020'
                                className={errors.year ? 'border-red-600' : ''}
                            />
                            {errors.year && <p className='text-sm text-red-600'>{errors.year.message}</p>}
                        </div>





                        





                        <div className='space-y-2'>
                            <Label htmlFor='mileage'>Mileage</Label>
                            <Input
                                id='mileage'
                                {...register('mileage')}
                                placeholder='e.g., 15000'
                                className={errors.mileage ? 'border-red-600' : ''}
                            />
                            {errors.mileage && <p className='text-sm text-red-600'>{errors.mileage.message}</p>}
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='color'>Color</Label>
                            <Input
                                id='color'
                                {...register('color')}
                                placeholder='e.g., Red, Blue, Black'
                                className={errors.color ? 'border-red-600' : ''}
                            />
                            {errors.color && <p className='text-sm text-red-600'>{errors.color.message}</p>}
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='fuelType'>Fuel Type</Label>
                            <Select onValueChange={(value) => setValue('fuelType',
                                value as typeof fuelTypes[number])}
                                defaultValue={getValues('fuelType')}
                            >
                                <SelectTrigger className={`${errors.fuelType ? 'border-red-600' : ''} w-full`} >
                                    <SelectValue placeholder="Select Fuel Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {fuelTypes.map((type) => (
                                        <SelectItem key={type} value={type}>{type}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.fuelType && <p className='text-sm text-red-600'>{errors.fuelType.message}</p>}
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='transmission'>Transmission</Label>
                            <Select onValueChange={(value) => setValue('transmission',
                                value as typeof transmissionTypes[number])}
                                defaultValue={getValues('transmission')}
                            >
                                <SelectTrigger className={`${errors.transmission ? 'border-red-600' : ''} w-full`} >
                                    <SelectValue placeholder="Select Transmission Type" defaultValue={getValues('transmission')} />
                                </SelectTrigger>
                                <SelectContent>
                                    {transmissionTypes.map((type) => (
                                        <SelectItem key={type} value={type}>{type}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.transmission && <p className='text-sm text-red-600'>{errors.transmission.message}</p>}
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='bodyType'>Select Body Types</Label>
                            <Select onValueChange={(value) => setValue('bodyType',
                                value as typeof bodyTypes[number])}
                                defaultValue={getValues('bodyType')}
                            >
                                <SelectTrigger className={`${errors.bodyType ? 'border-red-600' : ''} w-full`} >
                                    <SelectValue placeholder="Select Body Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {bodyTypes.map((type) => (
                                        <SelectItem key={type} value={type}>{type}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.bodyType && <p className='text-sm text-red-600'>{errors.bodyType.message}</p>}
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='seats'>Number of seats <span className='text-sm text-gray-500'>(Optional)</span></Label>
                            <Input
                                id='seats'
                                {...register('seats')}
                                placeholder='e.g., 5'
                                className={errors.seats ? 'border-red-600' : ''}
                            />
                            {errors.seats && <p className='text-sm text-red-600'>{errors.seats.message}</p>}
                        </div>
                        {errors.year && <p className='text-sm text-red-600'>{errors.year.message}</p>}



                    </div>
                    <div className="space-y-4 w-full ">
                        <Label>Bussiness</Label>
                        <div className="flex gap-4">
                            {carTypes.map((type) => (
                                <label key={type} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value={type}
                                        {...register("carType")}
                                    />
                                    {type === "SALE" ? "For Sale" : type === "RENT" ? "For Rent" : "Sale & Rent"}
                                </label>
                            ))}
                        </div>
                    </div>
                    
                    {(watch("carType") === "SALE" || watch("carType") === "BOTH") && (
                        <div>
                            <Separator className="my-4 h-[3px] bg-primary/60 rounded-full" orientation="horizontal" />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                            <div className='space-y-2'>
                                <Label htmlFor='saleInfo.price'>Sale Price</Label>
                                <Input
                                    id='saleInfo.price'
                                    {...register('saleInfo.price')}
                                    placeholder='e.g., 30000'
                                    className={errors.saleInfo?.price ? 'border-red-600' : ''}
                                />
                                {errors.saleInfo?.price && <p className='text-sm text-red-600'>{errors.saleInfo.price.message}</p>}
                            </div>

                            <div className='flex items-center gap-2'>
                                <Checkbox
                                    id='negotiable'
                                    checked={watch('saleInfo.negotiable')}
                                    onCheckedChange={(checked) => setValue('saleInfo.negotiable', !!checked)}
                                />
                                <Label htmlFor='negotiable'>Negotiable</Label>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor='saleInfo.status'>Sale Status</Label>
                                <Select onValueChange={(value: any) => setValue('saleInfo.status', value)}
                                    defaultValue={getValues('saleInfo.status')}>
                                    <SelectTrigger className={`${errors.saleInfo?.status ? 'border-red-600' : ''} w-full`} >
                                        <SelectValue placeholder="Select Sale Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {saleStatuses.map((value, i) => (
                                            <SelectItem key={i} value={value}>{value && value.toUpperCase()}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.saleInfo?.status && <p className='text-sm text-red-600'>{errors.saleInfo.status.message}</p>}

                            </div>

                           
                        </div>
                        </div>
                        
                    )}

                    {(watch("carType") === "RENT" || watch("carType") === "BOTH") && (
                        <div>
                            <Separator className="my-4 h-[3px] bg-primary/60 rounded-full" orientation="horizontal" />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                                <div className='space-y-2'>
                                    <Label htmlFor='rentHourlyPrice'>Hourly Price</Label>
                                    <Input
                                        id='rentHourlyPrice'
                                        {...register('rentInfo.hourlyPrice')}
                                        placeholder='e.g., 10'
                                        className={errors.rentInfo?.hourlyPrice ? 'border-red-600' : ''}
                                    />
                                    {errors.rentInfo?.hourlyPrice && <p className='text-sm text-red-600'>{errors.rentInfo.hourlyPrice.message}</p>}
                                </div>

                                <div className='space-y-2'>
                                    <Label htmlFor='rentDailyPrice'>Daily Price</Label>
                                    <Input
                                        id='rentDailyPrice'
                                        {...register('rentInfo.dailyPrice')}
                                        placeholder='e.g., 50'
                                        className={errors.rentInfo?.dailyPrice ? 'border-red-600' : ''}
                                    />
                                    {errors.rentInfo?.dailyPrice && <p className='text-sm text-red-600'>{errors.rentInfo.dailyPrice.message}</p>}
                                </div>

                                <div className='space-y-2'>
                                    <Label htmlFor='deposit'>Deposit</Label>
                                    <Input
                                        id='deposit'
                                        {...register('rentInfo.deposit')}
                                        placeholder='e.g., 100'
                                        className={errors.rentInfo?.deposit ? 'border-red-600' : ''}
                                    />
                                    {errors.rentInfo?.deposit && <p className='text-sm text-red-600'>{errors.rentInfo.deposit.message}</p>}
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Checkbox
                                        id='rentInfoAvailable'
                                        checked={watch('rentInfo.available')}
                                        onCheckedChange={(checked) => setValue('rentInfo.available', !!checked)}
                                    />
                                    <Label htmlFor='rentInfoAvailable'>Available</Label>
                                </div>
                            </div>
                        </div>
                            
                        )}


                    <div className='space-y-2'>
                        <Label htmlFor='description'>Description</Label>
                        <Textarea
                            id='description'
                            {...register('description')}
                            placeholder='Enter a brief description'
                            className={`${errors.description ? 'border-red-600' : ''} min-h-32`}
                        />
                        {errors.description && <p className='text-sm text-red-600'>{errors.description.message}</p>}
                    </div>

                    <div className='flex items-start space-x-3 space-y-0 rounded-md border p-4'>
                        <Checkbox
                            id='featured'
                            checked={watch('featured')}
                            onCheckedChange={(checked) => setValue('featured', !!checked)}
                        />
                        <div className='space-y-1 leading-none'>
                            <Label htmlFor='featured' >Feature this car on homepage</Label>
                            <p className='text-sm text-gray-700 italic'>*Featured cars appear on the homepage</p>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor='images'
                            className={imageError ? 'text-red-600' : ''}>
                            Upload Images
                            {imageError && <span className='text-red-500'>*</span>}
                        </Label>
                        <div {...GetMultiImageRootProps()}
                            className={`border-2 border-dashed border-gray-300 p-6 rounded-lg cursor-pointer hover:border-gray-400 transition-colors ${imageError ? 'border-red-600' : ''}`}>
                            <input {...GetMultiImageInputProps()} />
                            <div className="flex flex-col items-center">
                                <Upload className='m-auto text-gray-400 cursor-pointer' size={25} />

                                <p className='text-gray-600 mb-2'>Drag & Drop or Click to upload mutliple images</p>
                                <p className="text-gray-400 text-sm">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                        {imageError && <p className='text-sm text-red-600'>File type not accepted, sorry!</p>}
                    </div>

                    {uploadedImages.length > 0 && (
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
                            {uploadedImages.map((image, index) => (
                                <div key={index} className='relative h-28 w-full rounded-md overflow-hidden'>
                                    <Image
                                        src={image}
                                        alt={`Car image ${index + 1}`}
                                        fill
                                        className="h-28 w-full object-cover rounded-md"
                                        quality={90}
                                        priority
                                    />
                                    <button type='button' className='absolute top-2 right-2 text-red-600 hover:text-red-500' onClick={() => handleRemoveImage(index)}>
                                        <LucideTicketX className='w-4 h-4 cursor-pointer' />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <Button type='submit' className='mt-4 w-fit' disabled={updatingCar}>
                        Update
                        {updatingCar && (<Loader2 className='ml-2 h-4 w-4 animate-spin' />)}
                    </Button>

                </form>
            </CardContent>
        </Card>
    );
}