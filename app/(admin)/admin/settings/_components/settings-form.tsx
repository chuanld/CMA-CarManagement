'use client'
import { deleteUser, getDealerShipInfo, getUsers, saveWorkingHours, updateUserRole } from '@/actions/settings'
import useFetch from '@/app/hooks/use-fetch'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DAYS } from '@/lib/data'
import { ApiResponse } from '@/types/api'
import { DealershipInfo, WorkingHour } from '@/types/settings'
import { Clock, Loader2, Save, Search, Shield, User, UserX } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const SettingsForm = () => {
    const [workingHours, setWorkingHours] = useState<any[]>(
        DAYS.map(day => ({
            dayOfWeek: day.value, openTime: '09:00', closeTime: '17:00', isOpen: day.value !== 'SUNDAY'
        }))
    )
    const [userSearch, setUserSearch] = useState<string>('')
    const [activeTab, setActiveTab] = useState<'hours' | 'admins'>('hours')




    const { loading: loadingDealerShipInfo, fetchData: fetchDealerShipInfo, data: dealerShipInfo, error: errorDealerShipInfo } = useFetch<ApiResponse<any>>(getDealerShipInfo)

    const { loading: loadingWorkingHours, fetchData: fnSaveWorkingHours, data: resultWorkingHours, error: errorWorkingHours } = useFetch<ApiResponse<any>>(saveWorkingHours)

    const { loading: loadingUsers, fetchData: fetchUsers, data: users, error: errorUsers } = useFetch<ApiResponse<any>>(getUsers)

    const { loading: loadingUserUpdateRole, fetchData: fetchUserUpdateRole, data: userUpdateRole, error: errorUserUpdateRole } = useFetch<ApiResponse<any>>(updateUserRole)

    const { loading: loadingUserDeleteUser, fetchData: delUser, data: userDeleteUser, error: errorUserDeleteUser } = useFetch<ApiResponse<any>>(deleteUser)

    useEffect(() => {
        fetchDealerShipInfo()
        // fnSaveWorkingHours()
        fetchUsers()
    }, [])

    const handleWorkingHoursChange = (index: number, field: string, value: string | boolean) => {
        const updatedHours = [...workingHours];
        updatedHours[index] = { ...updatedHours[index], [field]: value };
        setWorkingHours(updatedHours);
    }

    const handleSaveWorkingHours = async () => {
        await fnSaveWorkingHours(workingHours)
    }


    useEffect(() => {
        if (dealerShipInfo?.success && dealerShipInfo.data) {
            const dealerShip = dealerShipInfo.data;
            if (dealerShip.workingHours.length > 0) {
                const mappedHours = DAYS.map((day: any) => {
                    const hourData = dealerShip.workingHours.find((wh: WorkingHour) => wh.dayOfWeek === day.value);

                    if (hourData) {
                        return {
                            dayOfWeek: hourData.dayOfWeek,
                            openTime: hourData.openTime,
                            closeTime: hourData.closeTime,
                            isOpen: hourData.isOpen,
                        };
                    }
                    return {
                        dayOfWeek: day.value,
                        openTime: '09:00',
                        closeTime: '18:00',
                        isOpen: day.value !== 'SUNDAY'
                    };
                });

                setWorkingHours(mappedHours);
            }
        }

        if (resultWorkingHours?.success) {
            toast.success('Working hours updated successfully')
            // fetchDealerShipInfo()
        }
        if (userUpdateRole?.success) {
            toast.success('User role updated successfully')
            fetchUsers()
        }
    }, [dealerShipInfo, userUpdateRole, resultWorkingHours])


    useEffect(() => {
        if (errorWorkingHours) {
            toast.error('Error saving working hours')
        }
        if (errorUsers) {
            toast.error('Error fetching users')
        }
        if (errorUserUpdateRole) {
            toast.error('Error updating user role')
        }
        if (errorUserDeleteUser) {
            toast.error('Error deleting user')
        }
        if (errorDealerShipInfo) {
            toast.error('Error fetching dealership info')
        }
    }, [errorWorkingHours, errorUsers, errorUserUpdateRole, errorUserDeleteUser, errorDealerShipInfo])

    const handleUserRoleChange = async (userId: string, previllege: string) => {
        await fetchUserUpdateRole(userId, previllege)
    }

    // Users Management
    const filteredUsers = users?.success ?
        users.data.filter((user: any) =>
            user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
            user.email.toLowerCase().includes(userSearch.toLowerCase())
        ) : []


    const handleRemoveAdmin = async (user: any) => {
        await handleUserRoleChange(user.id, "USER" as string)
    }
    const handleMakeAnAdmin = async (user: any) => {
        if (confirm(`Are you sure you want to make ${user.name || user.email} an admin?`)) {
            await handleUserRoleChange(user.id, "ADMIN" as string)
        }
    }
    const handleDeleteUser = async (user: any) => {
        await delUser(user.id)
    }
    return (
        <div className='space-y-4'>
            <Tabs defaultValue='hours'>
                <TabsList>
                    <TabsTrigger value='hours'>
                        <Clock className='h-4 w-4' />
                        Working hours
                    </TabsTrigger>
                    <TabsTrigger value='admins'>
                        <Shield className='h-4 w-4' />
                        Admin users
                    </TabsTrigger>
                </TabsList>
                <TabsContent value='hours' className='mt-6 space-y-6'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Working Hours</CardTitle>
                            <CardDescription>Set the working hours for each day of the week.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {workingHours && workingHours.map((day, index) => {
                                    return (
                                        <div key={index} className="grid grid-cols-12 gap-4 items-center py-2    px-4 rounded-lg hover:bg-slate-50 w-full">
                                            <div className="col-span-3 md:col-span-2 ">
                                                <div className='font-medium'>{day.dayOfWeek}</div>
                                            </div>

                                            <div className="col-span-9 md:col-span-2 flex items-center gap-2">
                                                <Checkbox
                                                    id={`isOpen-${day.value}`}
                                                    checked={workingHours[index]?.isOpen}
                                                    onCheckedChange={(checked) => handleWorkingHoursChange(index, 'isOpen', checked)} />
                                                <Label htmlFor={`isOpen-${day.value}`}>{workingHours[index]?.isOpen ? 'Open' : 'Closed'}</Label>
                                            </div>

                                            {workingHours[index]?.isOpen ? (
                                                <>
                                                    <div className='col-span-6 md:col-span-2 flex items-center gap-2'>
                                                        <div className='flex items-center gap-2'>
                                                            <Clock className='h-4 w-4 text-gray-500' />
                                                            <Input
                                                                type='time'
                                                                className='w-full md:w-32 text-sm'
                                                                value={workingHours[index]?.openTime}
                                                                onChange={(e) => handleWorkingHoursChange(index, 'openTime', e.target.value)} />
                                                        </div>
                                                    </div>

                                                    <div className='text-center col-span-1'>to</div>

                                                    <div className='col-span-6 md:col-span-2 flex items-center gap-2'>
                                                        <div className='flex items-center gap-2'>
                                                            <Clock className='h-4 w-4 text-gray-500' />
                                                            <Input
                                                                type='time'
                                                                className='w-full md:w-32 text-sm'
                                                                value={workingHours[index]?.closeTime}
                                                                onChange={(e) => handleWorkingHoursChange(index, 'closeTime', e.target.value)} />
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (<>
                                                <div className='col-span-6 md:col-span-2 flex items-center gap-2'><span className='font-light italic text-red-400'>Closed all day</span></div>
                                            </>)}


                                        </div>
                                    )
                                })}
                            </div>

                            <div className='mt-6 flex justify-end'>
                                <Button onClick={handleSaveWorkingHours} disabled={loadingWorkingHours}>
                                    {loadingWorkingHours ? (
                                        <>
                                            <Loader2 className='h-4 w-4 animate-spin mr-2' /> Saving...
                                        </>
                                    ) : (
                                        <>
                                            <Save className='h-4 w-4 mr-2' /> Save Working Hours
                                        </>
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value='admins'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Admin Users</CardTitle>
                            <CardDescription>Manage admin users and their roles</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className='mb-6 relative'>
                                <Search className='h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                                <Input
                                    value={userSearch}
                                    type='search'
                                    onChange={(e) => setUserSearch(e.target.value)}
                                    placeholder='Search admin users...'
                                    className='pl-9 w-full'
                                />
                            </div>
                            {loadingUsers ? (
                                <div className="py-12 flex justify-center">
                                    <Loader2 className='h-4 w-4 animate-spin mr-2' />
                                </div>
                            ) : (
                                users?.success && filteredUsers.length > 0 ? (
                                    <div>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>User</TableHead>
                                                    <TableHead>Email</TableHead>

                                                    <TableHead>Role</TableHead>
                                                    <TableHead className='text-right'>Actions</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {filteredUsers.map((user: any) => {
                                                    return (
                                                        <TableRow key={user.id}>

                                                            <TableCell key={user.id} className='font-medium'>
                                                                <div className='flex items-center gap-2'>
                                                                    <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden relative'>
                                                                        {user.imageUrl ? (
                                                                            <img src={user.imageUrl} alt={user.name || "User"} className='w-full h-full object-cover' />
                                                                        ) : (
                                                                            <User className='w-4 h-4 text-gray-500' />
                                                                        )}

                                                                    </div>
                                                                    <span>{user.name || "Unnamed User"}</span>
                                                                </div>
                                                            </TableCell>
                                                            <TableCell>{user.email}</TableCell>
                                                            <TableCell>
                                                                <Badge className={user.role === 'ADMIN' ? 'bg-green-800' : ' bg-gray-800'}>
                                                                    {user.role}
                                                                </Badge>
                                                            </TableCell>
                                                            <TableCell className='text-right'>
                                                                {user.role === 'ADMIN' ? (
                                                                    <Button
                                                                        variant={'outline'}
                                                                        size='sm'
                                                                        className='text-red-600'
                                                                        onClick={() => handleRemoveAdmin(user)}
                                                                        disabled={loadingUserUpdateRole}
                                                                    >
                                                                        <UserX className='h-4 w-4 mr-2' />
                                                                        Disable
                                                                    </Button>
                                                                ) : (
                                                                    <Button
                                                                        variant={'outline'}
                                                                        size='sm'
                                                                        className='text-green-600'
                                                                        onClick={() => handleMakeAnAdmin(user)}
                                                                        disabled={loadingUserUpdateRole}
                                                                    >
                                                                        <Shield className='h-4 w-4 mr-2' />
                                                                        Make Admin
                                                                    </Button>
                                                                )}
                                                            </TableCell>

                                                        </TableRow>
                                                    )
                                                })}
                                            </TableBody>
                                        </Table>
                                    </div>
                                ) : (

                                    <div className='py-12 text-center'>
                                        <User className='h-6 w-6 mx-auto mb-2 text-gray-400' />
                                        <h3 className="text-lg font-medium text-gray-900 mb-1">No Users found</h3>
                                        <p className="text-gray-500">
                                            {userSearch ? 'No users match your search criteria.' : 'There are currently no users available.'}
                                        </p>
                                    </div>

                                )
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default SettingsForm