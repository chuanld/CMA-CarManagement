'use client'
import { getAdminTestDrives, updateTestDriveStatus } from '@/actions/admin';
import { cancelTestDrive } from '@/actions/test-drive';
import useFetch from '@/app/hooks/use-fetch';
import { TestDriveCard } from '@/components/test-drive-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ApiResponse } from '@/types/api';
import { TestDriveBooking } from '@/types/user';
import { CalendarRange, Loader2, Search } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const TestDriveList = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<string>('all');



    const {loading:gettingAdmin,fetchData:fnGetAdminTestDrives,data:resultAdminTestDrive,error: errorAdminTestDrive} = useFetch<ApiResponse<any>>(getAdminTestDrives)

    const {loading:updatingStatus,fetchData:fnUpdateDriverStatus,data:resultDriverStatus,error:errorUpdateStatus} = useFetch<ApiResponse<any>>(updateTestDriveStatus)

    const {loading:cancellingStatus,fetchData:fnCancelTestDrive,data:resultCancelTestDrive,error:errorCancelTestDrive} = useFetch<ApiResponse<any>>(cancelTestDrive)

    //Fetchdata by search
    useEffect(() => {
        fnGetAdminTestDrives({searchTerm,status:statusFilter});
    },[searchTerm,statusFilter])

    // Handle success 
    useEffect(() => {
        if (resultDriverStatus && resultDriverStatus?.success) {
            toast.success("Test drive status updated successfully");
            fnGetAdminTestDrives({searchTerm,status:statusFilter});
        }
        if (resultCancelTestDrive && resultCancelTestDrive.success) {
            toast.success("Test drive cancelled successfully");
            fnGetAdminTestDrives({searchTerm,status:statusFilter});
        }
    },[resultDriverStatus,resultCancelTestDrive])

    //Handle errors
    useEffect(() => {
        if (errorAdminTestDrive) {
            console.error("Error fetching admin test drives:", errorAdminTestDrive);
            toast.error("Error fetching admin test drives:");
        }   
        if (errorUpdateStatus) {
            console.error("Error updating test drive status:", errorUpdateStatus);
            toast.error("Error updating test drive status:");
        }
        if (errorCancelTestDrive) {
            console.error("Error cancelling test drive:", errorCancelTestDrive);
            toast.error("Error cancelling test drive:");
        }
    },[errorAdminTestDrive,errorUpdateStatus,errorCancelTestDrive])

    const handleSearchSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        fnGetAdminTestDrives({searchTerm,status:statusFilter});
    }

    const handleUpdateStatus = async ({bookingId,newStatus}:{bookingId:string,newStatus:string}) => {
        if (!['PENDING','CONFIRMED','COMPLETED','CANCELLED','NO_SHOW'].includes(newStatus)) {
            console.error("Invalid status:", newStatus);
            return;
        }
        await fnUpdateDriverStatus({bookingId,newStatus});
    }
  return (
    <div className='space-y-6'>
        <div className='flex flex-col sm:flex-row gap-4 w-full items-start sm:items-center justify-between'>
            <Select
                value={statusFilter}
                onValueChange={setStatusFilter}
                
            >
                <SelectTrigger>
                    <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='all'>All Statuses</SelectItem>
                    <SelectItem value="PENDING">PENDING</SelectItem>
                    <SelectItem value="CONFIRMED">CONFIRMED</SelectItem>
                    <SelectItem value="COMPLETED">COMPLETED</SelectItem>
                    <SelectItem value="NO SHOW">NO SHOW</SelectItem>
                    <SelectItem value="CANCELLED">CANCELLED</SelectItem>
                </SelectContent>
            </Select>

            <form onSubmit={handleSearchSubmit} className='flex w-full'>
                <div className='relative w-full'>
                    <Search className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-400' />
                    <Input
                        type="search"
                        placeholder="Search by car or customer"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='pl-10'
                    />
                </div>
            </form>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>
                    <CalendarRange className='inline mr-2 mb-1' />
                    Test Drives
                </CardTitle>
                <CardDescription>
                    List of all test drives
                </CardDescription>
            </CardHeader>
            <CardContent>
                {gettingAdmin && !resultAdminTestDrive ? (
                    <div className="flex">
                        <Loader2 className="mr-2 h-4 w-4" />
                    </div>
                ):(
                    <div className="space-y-4">
                        {resultAdminTestDrive?.data?.map((testDrive:TestDriveBooking) => (
                            <div className='relative' key={testDrive.id}>
                                <TestDriveCard
                                    booking={testDrive}
                                    onCancel={() => fnCancelTestDrive({id:testDrive.id})}
                                    showActions={['PENDING','CONFIRMED'].includes(testDrive.status)}
                                    isAdmin={true}
                                    isCancelling={cancellingStatus}
                                    renderStatusSelector={() => (
                                        <div className='flex items-center space-x-2 text-sm p-0'>
                                        <Select
                                            value={testDrive.status}
                                            onValueChange={(value) => handleUpdateStatus({bookingId:testDrive.id,newStatus:value as any})}
                                            disabled={updatingStatus}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Update Status" />
                                            </SelectTrigger>
                                            <SelectContent className='text-sm'>
                                                {['PENDING','CONFIRMED','COMPLETED','CANCELLED','NO_SHOW'].map((status) => (
                                                    <SelectItem key={status} value={status}>{status}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        </div>
                                    )}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    </div>
  )
}

export default TestDriveList