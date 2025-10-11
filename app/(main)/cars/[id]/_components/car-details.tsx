'use client'
import { getCarById, toggleSavedCar } from '@/actions/car-listing'
import React, { use, useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCheck, CalendarIcon, CarIcon, CheckCircleIcon, ClockIcon, Currency, FolderHeart, ImageIcon, MapPinIcon, MessageSquare, Save, Share2, XCircleIcon } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { DealershipInfo, WorkingHour } from '@/types/settings';
import CardImageSwipe from './card-image-swipe';
import { Car } from '@/types/car';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import useFetch from '@/app/hooks/use-fetch';
import { ApiResponse } from '@/types/api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DialogTrigger } from '@radix-ui/react-dialog';
import EMICalculatorPage from './car-emi-calc';
import { formatCurrency } from '@/lib/helper';
import EmiCalculator from './car-emi-calc';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { format } from 'path';
import { formatDate } from 'date-fns';
import { TestDriveBooking } from '@/types/user';


const CarDetails = ({ car }: { car: Car }) => {

    const router = useRouter();
    const { isSignedIn, userId } = useAuth();
    const [isWhishlisted, setIsWhishlisted] = useState(false);
    const [isSaved, setIsSaved] = useState(car.whishlisted || false);

    const existUserBookings: TestDriveBooking[] = car?.testDriverInfo?.userTestDrives ? car?.testDriverInfo?.userTestDrives : [];
    const nextBooking: TestDriveBooking | null =
        existUserBookings.length > 0
            ? [...existUserBookings]
                .sort(
                    (a: TestDriveBooking, b: TestDriveBooking) =>
                        new Date(a.bookingDate).getTime() - new Date(b.bookingDate).getTime()
                )[0]
            : null;


    console.log(existUserBookings, "existUserBookings");

    const {
        loading: savingCar,
        fetchData: fnToggleSavedCar,
        data: savedCarData,
        error: saveCarError,
    } = useFetch<ApiResponse<any>>(toggleSavedCar)

    useEffect(() => {
        if (savedCarData && savedCarData?.success && savedCarData.saved !== isWhishlisted) {
            setIsWhishlisted(!!savedCarData.saved);
            toast.success(savedCarData.message || (savedCarData.saved ? "Added to favorites" : "Removed from favorites"));
        }
    }, [savedCarData])

    useEffect(() => {
        if (saveCarError) {
            toast.error(saveCarError.message || "An error occurred");
        }
    }, [saveCarError])

    const handleToggleSaved = async () => {
        if (!isSignedIn) {
            toast.error("You must be signed in to save cars.");
            return;
        }
        if (savingCar) return; // Prevent multiple clicks while loading
        await fnToggleSavedCar(car.id);
    }

    const handleShareCar = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: `Check out this car: ${car.make} ${car.model}`,
                    text: `Check out this car: ${car.make} ${car.model}. Price: $${car.price.toLocaleString()}`,
                    url: window.location.href,
                })
                .catch((error) => {
                    console.error("Error sharing", error);
                    coppyToClipboard();
                });
        } else {
            coppyToClipboard();
        }
    }

    const coppyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                toast.success("Link copied to clipboard");
            })
            .catch((error) => {
                console.error("Error copying to clipboard", error);
            });
    }

    const handleBookTestDrive = () => {
        if (!isSignedIn) {
            toast.error("You must be signed in to book a test drive.");
            return;
        }
        router.push(`/test-drive/${car.id}`);
    }

    return (
        <Card className="shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 border-b">
                <CardTitle className="text-3xl font-bold flex items-center gap-3 text-gray-800">
                    <CarIcon className="w-7 h-7 text-indigo-600" />
                    {car.make} {car.model} ({car.year})
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg mt-1">
                    A closer look at this vehicle’s details
                </CardDescription>
            </CardHeader>

            <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Thông tin chi tiết */}
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold mb-3 text-gray-700">
                                    Vehicle Information
                                </h3>
                                {isWhishlisted && <FolderHeart size={40} fill='yellow' className={`${isWhishlisted ? "text-yellow-600 " : "text-gray-400"}`} />}
                            </div>

                            <div className="space-y-2 text-gray-700">
                                <p>
                                    <strong>Price:</strong>{" "}
                                    <span className="text-green-600 font-medium text-lg">
                                        ${car.price.toLocaleString()}
                                    </span>
                                </p>
                                <p>
                                    <strong>Mileage:</strong>{" "}
                                    {car.mileage.toLocaleString()} miles
                                </p>
                                <p>
                                    <strong>Color:</strong> {car.color}
                                </p>
                                <p>
                                    <strong>Fuel Type:</strong> {car.fuelType}
                                </p>
                                <p>
                                    <strong>Transmission:</strong> {car.transmission}
                                </p>
                                <p>
                                    <strong>Body Type:</strong> {car.bodyType}
                                </p>
                                {car.seats && (
                                    <p>
                                        <strong>Seats:</strong> {car.seats}
                                    </p>
                                )}
                                <p className="flex items-center gap-2">
                                    <strong>Status:</strong>
                                    <Badge
                                        variant={
                                            car.status === "AVAILABLE"
                                                ? "default"
                                                : "destructive"
                                        }
                                        className="capitalize"
                                    >
                                        {car.status.toLowerCase()}
                                    </Badge>
                                </p>

                                <p className="flex items-center gap-2">
                                    <strong>Featured:</strong>
                                    {car.featured ? (
                                        <CheckCircleIcon className="text-green-500 w-5 h-5" />
                                    ) : (
                                        <XCircleIcon className="text-red-500 w-5 h-5" />
                                    )}
                                </p>

                                <div className="flex  gap-2 flex-wrap mt-4 justify-start items-center">
                                    <Button
                                        variant={isWhishlisted ? "outline" : "default"}
                                        className={` px-4 py-2 rounded-lg text-white ${isWhishlisted ? "bg-bg-cma hover:bg-black text-gray-300 hover:text-white" : "bg:bg-gray-300 hover:bg-gray-600"
                                            }`}
                                        disabled={savingCar}
                                        onClick={() => handleToggleSaved()}

                                    >

                                        {savingCar
                                            ? "Processing..."
                                            : isWhishlisted
                                                ? "Remove from Saved Cars"
                                                : "Save Car"}
                                    </Button>
                                    <Button size='icon' variant='ghost' className='text-sm text-gray-600 flex items-center cursor-pointer'
                                        onClick={handleShareCar}
                                    >
                                        <Share2 className='mr-1 h-4 w-4' />

                                    </Button>
                                </div>



                            </div>
                        </div>
                        <div className='text-lg text-gray-700 mt-4'>
                            <p>
                                <strong>Description:</strong> {car.description}
                            </p>
                        </div>

                        <div className="text-sm text-gray-500 space-y-1">
                            <p className="flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4 text-gray-400" />
                                <strong>Created At:</strong>{" "}
                                {new Date(car.createdAt).toLocaleDateString()}
                            </p>
                            <p className="flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4 text-gray-400" />
                                <strong>Updated At:</strong>{" "}
                                {new Date(car.updatedAt).toLocaleDateString()}
                            </p>

                        </div>

                    </div>


                    {/* Ảnh xe */}
                    <div>
                        {/* Gallery Section */}
                        <CardImageSwipe car={car} />

                        {/* <section className="mt-10">
                                <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
                                <div className="space-y-4">
                                    {Array(2).fill(null).map((_, i) => (
                                        <div key={i} className="border p-4 rounded-lg bg-gray-50">
                                            <p className="text-sm text-gray-700 italic mb-1">"Great car, highly recommend!"</p>
                                            <p className="text-right text-sm text-gray-600">- User {i + 1}</p>
                                        </div>
                                    ))}
                                </div>
                            </section> */}

                        <div className='flex  gap-2 items-start justify-around mt-5'>
                            <Dialog>
                                <DialogTrigger className=" text-start">
                                    <Card className="">
                                        <CardContent>
                                            <div className="flex items-center gap-2 text-lg font-medium mb-2">
                                                <Currency className="h-5 w-5 text-blue-600" />
                                                <h3>EMI Calculator</h3>
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                Estimated Monthly Payment:{" "}
                                                <span className="font-bold text-gray-900">
                                                    {formatCurrency(Number(car.price) / 60)}
                                                </span>{" "}
                                                for 60 months
                                            </div>
                                            <div className="text-xs text-gray-500 mt-1">
                                                *Based on $0 down payment and 4.5% interest rate
                                            </div>
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>CMA Smart Calculator</DialogTitle>
                                        <EmiCalculator price={Number(car.price)} />
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                            <Card className='pt-5'>
                                <CardContent>
                                    <div className='flex items-center gap-2 text-lg font-medium mb-2'>
                                        <MessageSquare className="h-5 w-5 text-blue-600" />
                                        <h3 className="text-lg font-medium mb-2">Contact Seller</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">If you have any questions, feel free to reach out!</p>
                                    <a href={`mailto:${car.testDriverInfo?.dealerShip?.email}`} className="text-blue-600 hover:underline">
                                        <Button variant={"outline"} className="mt-3 w-full">
                                            Contact via Email
                                        </Button>
                                    </a>
                                </CardContent>
                            </Card>

                        </div>
                        {
                            (car.status === "SOLD" || car.status === "PENDING" || car.status === "UNAVAILABLE") && (
                                <Alert className='mt-5' variant='destructive'>
                                    <AlertTitle>
                                        <XCircleIcon className="h-5 w-5 text-red-600" />
                                        <span className='text-sm font-medium'>This car is currently {car.status.toLowerCase()}.</span>
                                    </AlertTitle>
                                    <AlertDescription>Please check back later for more information.</AlertDescription>
                                </Alert>
                            )
                        }

                        {car.status === "AVAILABLE" && (
                            <Button
                                className="mt-5 text-center w-full py-6 text-lg bg-green-600 hover:bg-green-700 text-white flex  items-center justify-center gap-2"
                                onClick={handleBookTestDrive}
                            >
                                Book a Test Drive

                                <BookCheck className="h-5 w-5" />
                            </Button>
                        )}
                        {nextBooking && (
                            <span className="text-sm text-yellow-500 ml-2 italic">
                                (Reminder: your nearest scheduled test drive is{" "}
                                {formatDate(new Date(nextBooking.bookingDate), "EEEE, MMMM d, yyyy")})
                            </span>
                        )}



                    </div>
                </div>

                {/* Information test drive */}
                {car.testDriverInfo && (
                    <div className="flex flex-wrap  items-center justify-between">
                        <div className="mt-10 w-3/4 gap-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Test Drive Information
                            </h2>
                            <div className="bg-gray-50 rounded-xl p-5 shadow-sm space-y-4">
                                <div className="text-lg">
                                    <strong>User Test Drives:</strong>
                                    {existUserBookings.length > 0 ? (
                                        <ul className="list-disc ml-6 mt-2 text-gray-700">
                                            {existUserBookings.map((testDrive, index) => (
                                                <li key={index}>
                                                    <p>
                                                        <strong>Email Drive Test:</strong> {testDrive?.user?.email || "N/A"}
                                                    </p>
                                                    <p>
                                                        <strong>Booking Date:</strong>{" "}
                                                        {testDrive.bookingDate
                                                            ? new Date(testDrive.bookingDate).toLocaleDateString()
                                                            : "N/A"}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-500">No test drives available.</p>
                                    )}
                                </div>

                                {car?.testDriverInfo?.dealerShip && (
                                    <div className="border-t pt-4">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-700">
                                            Dealership Information
                                        </h3>
                                        <div className="flex items-start gap-2">
                                            <div className="mr-2 w-3/4">
                                                <p className="text-lg flex items-center gap-2">
                                                    <MapPinIcon className="w-5 h-5 text-indigo-500" />
                                                    <strong>{car.testDriverInfo.dealerShip.name || "N/A"}</strong>
                                                </p>
                                                <p className="ml-7 text-gray-700">
                                                    {car.testDriverInfo.dealerShip.address || "N/A"}
                                                </p>
                                                <p className="ml-7 text-gray-700">
                                                    <strong>Phone:</strong> {car.testDriverInfo.dealerShip.phone || "N/A"}
                                                </p>
                                                <p className="ml-7 text-gray-700">
                                                    <strong>Email:</strong> {car.testDriverInfo.dealerShip.email || "N/A"}
                                                </p>
                                                <p className="ml-7 text-gray-700">
                                                    <strong>Website:</strong>{" "}
                                                    <a
                                                        href={car.testDriverInfo.dealerShip.website || "#"}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-indigo-600 hover:underline"
                                                    >
                                                        {car.testDriverInfo.dealerShip.website || "N/A"}
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="mt-3">
                                                <p className="font-medium flex items-center gap-2 text-gray-700">
                                                    <ClockIcon className="w-5 h-5 text-indigo-500" />
                                                    Working Hours:
                                                </p>
                                                <ul className="list-disc ml-8 text-gray-600">
                                                    {car.testDriverInfo?.dealerShip?.workingHours.map(
                                                        (wh: WorkingHour, i: number) => (
                                                            <li key={i}>
                                                                {wh.dayOfWeek}: {wh.openTime} – {wh.closeTime}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-3">
                                            <p>
                                                <strong>Created At:</strong>{" "}
                                                {new Date(
                                                    car.testDriverInfo.dealerShip.createdAt
                                                ).toLocaleDateString()}
                                            </p>
                                            <p>
                                                <strong>Updated At:</strong>{" "}
                                                {new Date(
                                                    car.testDriverInfo.dealerShip.updatedAt
                                                ).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <section className="mt-12">
                                <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
                                <iframe
                                    src="https://www.google.com/maps?q=San+Francisco,+CA&output=embed"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </section>


                        </div>
                    </div>

                )}
            </CardContent>
        </Card>
    )
}

export default CarDetails