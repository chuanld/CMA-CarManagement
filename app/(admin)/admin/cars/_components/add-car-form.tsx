'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useDropzone } from 'react-dropzone';
import { toast } from 'sonner';
import { Camera, Loader2, Upload, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import useFetch from '@/app/hooks/use-fetch';
import { addCar, processCarImageAI, uploadImageToSupabase } from '@/actions/cars';
import { useRouter } from 'next/navigation';
import * as z from "zod";
import { carDetailsFromAI } from '@/types/car';
import { ApiResponse } from '@/types/api';

const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Hydrogen', 'Plug-in Hybrid', 'Gasoline'] as const;
const transmissionTypes = ['Manual', 'Automatic', 'Semi-Automatic','CVT', 'Dual-Clutch'] as const;
const bodyTypes = ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Van', 'Truck'] as const;

const carStatuses = ['AVAILABLE', 'UNAVAILABLE', 'SOLD', 'PENDING'] as const;

// type UploadedImage = {
//   file: File;
//   preview: string;
// };
const carTypes = ["SALE", "RENT", "BOTH"] as const;

const AddCarForm = () => {
  const [activeTab, setActiveTab] = useState<string>('ai');
  const [imageError, setImageError] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  // For AI Tab
  const [imageAiPreview, setImageAiPreview] = useState<Blob | null>(null);
  const [uploadedImageAI, setUploadedImageAI] = useState<File | null>(null);

  const router = useRouter()

  const carFormSchema = z.object({
    make: z.string().min(1, "Make is required"),
    model: z.string().min(1, "Model is required"),
    year: z.string().refine((val) => {
      const year = parseInt(val);
      return !isNaN(year) && year >= 1900 && year <= new Date().getFullYear() + 1;
    }, "Valid year required"),
    // price: z.string().min(1, "Price is required"), refactor business logic later
    mileage: z.string().min(1, "Mileage is required"),
    color: z.string().min(1, "Color is required"),
    fuelType: z.string().min(1, "Fuel type is required"),
    transmission: z.string().min(1, "Transmission is required"),
    bodyType: z.string().min(1, "Body type is required"),
    seats: z.string().optional(),
    description: z.string().min(10, "Description must be at least 10 characters"),
    status: z.enum(["AVAILABLE", "SOLD", "MAINTENANCE", "PENDING"]).default("AVAILABLE"),
    featured: z.boolean().default(false),
    confidence: z.string().optional(),

    //v3 fields
    // --- New fields ---
    carType: z.enum(["SALE", "RENT", "BOTH"]).default("SALE"),
    negotiable: z.boolean().default(false),
    salePrice: z.string().optional().refine((val) => !val || parseFloat(val) >= 0, "Price must be >= 0"),
    rentHourlyPrice: z.string().optional().refine((val) => !val || parseFloat(val) >= 0, "Hourly price must be >= 0"),
    rentDailyPrice: z.string().optional().refine((val) => !val || parseFloat(val) >= 0, "Daily price must be >= 0"),
    deposit: z.string().optional().refine((val) => !val || parseFloat(val) >= 0, "Deposit must be >= 0"),
  })

  const { register, setValue, getValues, watch, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(carFormSchema),
    defaultValues: {
      make: '',
      model: '',
      year: '2025',
      mileage: '50',
      color: 'white',
      fuelType: 'Petrol',
      transmission: 'manual',
      seats: '4',
      description: 'Type Description here...',
      status: 'AVAILABLE',
      featured: false,
      bodyType: 'Sedan',
      confidence: '',

      //v3 fields
      carType: 'SALE',
      negotiable: false,
      salePrice: '',
      rentHourlyPrice: '',
      rentDailyPrice: '',
      deposit: '',
    }
  })

  const { data: addCarResult, loading: addingCar, error: addCarError, fetchData: addCarFn } = useFetch<ApiResponse<carDetailsFromAI>>(addCar);

  useEffect(() => {
    if (addCarResult && !addCarError) {
      toast.success('Car added successfully!');
      router.push('/admin/cars');
    }
  }, [addCarResult, addCarError, router])

  const onSubmit = async (data: z.infer<typeof carFormSchema>) => {
    if (!data) return;

    const carData = {
      ...data,
      year: parseInt(data.year),
      mileage: parseInt(data.mileage),
      seats: data.seats ? parseInt(data.seats) : null,
      //v3 fields
      carType: data.carType,
      negotiable: (data.carType === "SALE" || data.carType === "BOTH") ? data.negotiable : undefined,
      salePrice: (data.carType === "SALE" || data.carType === "BOTH") ? parseFloat(data.salePrice || "0") : undefined,
      rentHourlyPrice: (data.carType === "RENT" || data.carType === "BOTH") ? parseFloat(data.rentHourlyPrice || "0") : undefined,
      rentDailyPrice: (data.carType === "RENT" || data.carType === "BOTH") ? parseFloat(data.rentDailyPrice || "0") : undefined,
      deposit: (data.carType === "RENT" || data.carType === "BOTH") ? parseFloat(data.deposit || "0") : undefined,
    };

    await addCarFn({
      carData: {
        ...carData
      },
      images: uploadedImages
    })
  }

  const onMultiImagesDrop = useCallback((acceptedFiles: File[]) => {
    // lọc file hợp lệ
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
          // const mappedFiles = validFiles.map((file) => ({ file, preview: URL.createObjectURL(file) }));
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
  }

  // AI Tab

  const onAiDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    setUploadedImageAI(file);

    const reader = new FileReader();
    reader.onload = (e: any) => {
      setImageAiPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  }, [])

  const { getRootProps: getAiRootProps, getInputProps: getAiInputProps } = useDropzone({
    onDrop: onAiDrop,
    accept: { 'image/*': [".jpeg", ".png", ".jpg"] },
    maxFiles: 1,
    multiple: false,
  })


  const {
    loading: processImageAiLoading,
    fetchData: processImageFn,
    data: processImageResult,
    error: processImageError
  } = useFetch<carDetailsFromAI>(processCarImageAI);

  const processWithAi = async () => {
    if (!uploadedImageAI) {
      toast.error("Please upload an image first");
      return;
    };
    await processImageFn(uploadedImageAI);
  }

  useEffect(() => {
    if (processImageError) {
      setImageError(processImageError?.message || ' Error processing image');
      toast.error(' Error processing image: ');
    }
  }, [processImageError])



  useEffect(() => {
    if (processImageResult && processImageResult.success) {
      const carDetails = processImageResult.data;
      setValue('make', carDetails.make || '');
      setValue('model', carDetails.model || '');
      setValue('year', carDetails.year ? String(carDetails.year) : '');
      setValue('mileage', carDetails.mileage ? String(carDetails.mileage) : '');
      setValue('color', carDetails.color || '');
      setValue('fuelType', carDetails.fuelType || 'Petrol');
      setValue('transmission', carDetails.transmission || 'Manual');
      setValue('bodyType', carDetails.bodyType || 'Sedan');
      setValue('seats', carDetails.seats ? String(carDetails.seats) : '');
      setValue('description', carDetails.description || '');
      setValue('confidence', carDetails.confidence ? String(carDetails.confidence) : '');

      //v3 fields
      setValue('salePrice', carDetails.salePrice ? String(carDetails.salePrice) : '');
      setValue('rentHourlyPrice', carDetails.rentHourlyPrice ? String(carDetails.rentHourlyPrice) : '');
      setValue('rentDailyPrice', carDetails.rentDailyPrice ? String(carDetails.rentDailyPrice) : '');
      setValue('deposit', carDetails.deposit ? String(carDetails.deposit) : '');

      // Add the image to the uploaded images
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setUploadedImages((prev) => [...prev, e.target.result]);
      };
      reader.readAsDataURL(uploadedImageAI as Blob);

      toast.success("Successfully extracted car details", {
        description: `Detected ${carDetails.year} ${carDetails.make} ${carDetails.model
          } with ${Math.round(carDetails.confidence || 1 * 100)}% confidence`,
      });

      // Switch to manual tab for the user to review and fill in missing details
      setActiveTab("manual");
    }
  }, [processImageResult, setValue, uploadedImageAI]);



  return (
    <div>
      <Tabs defaultValue="ai" className='mt-6' value={activeTab} onValueChange={setActiveTab}>
        <TabsList className='grid grid-cols-2'>
          <TabsTrigger value="manual">Manual Entry</TabsTrigger>
          <TabsTrigger value="ai">AI Assistance</TabsTrigger>
        </TabsList>
        <TabsContent value="manual" className='mt-6'>
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

                  <div className="space-y-4">
                    <Label>Bussiness type</Label>
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
                    <>
                      <div className='space-y-2'>
                        <Label htmlFor='salePrice'>Sale Price</Label>
                        <Input
                          id='salePrice'
                          {...register('salePrice')}
                          placeholder='e.g., 30000'
                          className={errors.salePrice ? 'border-red-600' : ''}
                        />
                        {errors.salePrice && <p className='text-sm text-red-600'>{errors.salePrice.message}</p>}
                      </div>

                      <div className='flex items-center gap-2'>
                        <Checkbox
                          id='negotiable'
                          checked={watch('negotiable')}
                          onCheckedChange={(checked) => setValue('negotiable', !!checked)}
                        />
                        <Label htmlFor='negotiable'>Negotiable Price</Label>
                      </div>
                    </>
                  )}

                  {(watch("carType") === "RENT" || watch("carType") === "BOTH") && (
                    <>
                      <div className='space-y-2'>
                        <Label htmlFor='rentHourlyPrice'>Hourly Price</Label>
                        <Input
                          id='rentHourlyPrice'
                          {...register('rentHourlyPrice')}
                          placeholder='e.g., 10'
                          className={errors.rentHourlyPrice ? 'border-red-600' : ''}
                        />
                        {errors.rentHourlyPrice && <p className='text-sm text-red-600'>{errors.rentHourlyPrice.message}</p>}
                      </div>

                      <div className='space-y-2'>
                        <Label htmlFor='rentDailyPrice'>Daily Price</Label>
                        <Input
                          id='rentDailyPrice'
                          {...register('rentDailyPrice')}
                          placeholder='e.g., 50'
                          className={errors.rentDailyPrice ? 'border-red-600' : ''}
                        />
                        {errors.rentDailyPrice && <p className='text-sm text-red-600'>{errors.rentDailyPrice.message}</p>}
                      </div>

                      <div className='space-y-2'>
                        <Label htmlFor='deposit'>Deposit</Label>
                        <Input
                          id='deposit'
                          {...register('deposit')}
                          placeholder='e.g., 100'
                          className={errors.deposit ? 'border-red-600' : ''}
                        />
                        {errors.deposit && <p className='text-sm text-red-600'>{errors.deposit.message}</p>}
                      </div>
                    </>
                  )}





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


                  <div className='space-y-2'>
                    <Label htmlFor='status'>Select Status</Label>
                    <Select onValueChange={(value: any) => setValue('status', value)}
                      defaultValue={getValues('status')}
                    >
                      <SelectTrigger className={`${errors.status ? 'border-red-600' : ''} w-full`} >
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent>
                        {carStatuses.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.bodyType && <p className='text-sm text-red-600'>{errors.bodyType.message}</p>}
                  </div>
                </div>

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
                      <div key={index} className='relative'>
                        <Image
                          src={image}
                          alt={`Car image ${index + 1}`}
                          height={50}
                          width={50}
                          className="h-28 w-full object-cover rounded-md"
                          priority
                        />
                        <button type='button' className='absolute top-2 right-2 text-red-600 hover:text-red-500' onClick={() => handleRemoveImage(index)}>
                          <X className='w-4 h-4' />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <Button type='submit' className='mt-4 w-fit' disabled={addingCar}>
                  Add Car
                  {addingCar && (<Loader2 className='ml-2 h-4 w-4 animate-spin' />)}
                </Button>

              </form>
            </CardContent>
          </Card>
          Make changes to your account here
        </TabsContent>
        <TabsContent value="ai" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Car Details Extraction</CardTitle>
              <CardDescription>
                Upload an image of a car and let Gemini AI extract its details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  {imageAiPreview ? (
                    <div className="flex flex-col items-center">
                      <img
                        src={imageAiPreview}
                        alt="Car preview"
                        className="max-h-56 max-w-full object-contain mb-4"
                      />
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setImageAiPreview(null);
                            setUploadedImageAI(null);
                          }}
                        >
                          Remove
                        </Button>
                        <Button
                          onClick={processWithAi}
                          disabled={processImageAiLoading}
                          size="sm"
                        >
                          {processImageAiLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <Camera className="mr-2 h-4 w-4" />
                              Extract Details
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div
                      {...getAiRootProps()}
                      className="cursor-pointer hover:bg-gray-50 transition"
                    >
                      <input {...getAiInputProps()} />
                      <div className="flex flex-col items-center justify-center">
                        <Camera className="h-12 w-12 text-gray-400 mb-3" />
                        <span className="text-sm text-gray-600">
                          Drag & drop or click to upload a car image
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          (JPG, PNG, WebP, max 5MB)
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {processImageAiLoading && (
                  <div className="bg-blue-50 text-blue-700 p-4 rounded-md flex items-center">
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    <div>
                      <p className="font-medium">Analyzing image...</p>
                      <p className="text-sm">
                        Gemini AI is extracting car details
                      </p>
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">How it works</h3>
                  <ol className="space-y-2 text-sm text-gray-600 list-decimal pl-4">
                    <li>Upload a clear image of the car</li>
                    <li>Click "Extract Details" to analyze with Gemini AI</li>
                    <li>Review the extracted information</li>
                    <li>Fill in any missing details manually</li>
                    <li>Add the car to your inventory</li>
                  </ol>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h3 className="font-medium text-amber-800 mb-1">
                    Tips for best results
                  </h3>
                  <ul className="space-y-1 text-sm text-amber-700">
                    <li>• Use clear, well-lit images</li>
                    <li>• Try to capture the entire vehicle</li>
                    <li>• For difficult models, use multiple views</li>
                    <li>• Always verify AI-extracted information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div >
  )
}

export default AddCarForm