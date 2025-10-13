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
import * as Tooltip from '@radix-ui/react-tooltip'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const SettingsForm = () => {
    const [workingHours, setWorkingHours] = useState<any[]>(
        DAYS.map((day) => ({
            dayOfWeek: day.value,
            openTime: '09:00',
            closeTime: '17:00',
            isOpen: day.value !== 'SUNDAY',
        }))
    )
    const [userSearch, setUserSearch] = useState<string>('')
    const [selectedTab, setSelectedTab] = useState<string>('hours')

    const { loading: loadingDealerShipInfo, fetchData: fetchDealerShipInfo, data: dealerShipInfo, error: errorDealerShipInfo } = useFetch<ApiResponse<any>>(getDealerShipInfo)
    const { loading: loadingWorkingHours, fetchData: fnSaveWorkingHours, data: resultWorkingHours, error: errorWorkingHours } = useFetch<ApiResponse<any>>(saveWorkingHours)
    const { loading: loadingUsers, fetchData: fetchUsers, data: users, error: errorUsers } = useFetch<ApiResponse<any>>(getUsers)
    const { loading: loadingUserUpdateRole, fetchData: fetchUserUpdateRole, data: userUpdateRole, error: errorUserUpdateRole } = useFetch<ApiResponse<any>>(updateUserRole)
    const { loading: loadingUserDeleteUser, fetchData: delUser, data: userDeleteUser, error: errorUserDeleteUser } = useFetch<ApiResponse<any>>(deleteUser)

    useEffect(() => {
        fetchDealerShipInfo()
        fetchUsers()
    }, [])

    const handleWorkingHoursChange = (index: number, field: string, value: string | boolean) => {
        const updatedHours = [...workingHours]
        updatedHours[index] = { ...updatedHours[index], [field]: value }
        setWorkingHours(updatedHours)
    }

    const handleSaveWorkingHours = async () => {
        await fnSaveWorkingHours(workingHours)
    }

    useEffect(() => {
        if (dealerShipInfo?.success && dealerShipInfo.data) {
            const dealerShip = dealerShipInfo.data
            if (dealerShip.workingHours.length > 0) {
                const mappedHours = DAYS.map((day: any) => {
                    const hourData = dealerShip.workingHours.find((wh: WorkingHour) => wh.dayOfWeek === day.value)
                    return hourData
                        ? {
                            dayOfWeek: hourData.dayOfWeek,
                            openTime: hourData.openTime,
                            closeTime: hourData.closeTime,
                            isOpen: hourData.isOpen,
                        }
                        : {
                            dayOfWeek: day.value,
                            openTime: '09:00',
                            closeTime: '18:00',
                            isOpen: day.value !== 'SUNDAY',
                        }
                })
                setWorkingHours(mappedHours)
            }
        }


        if (userUpdateRole?.success) {
            toast.success('User role updated successfully')
            fetchUsers()
        }
    }, [dealerShipInfo, userUpdateRole])

    useEffect(()=>{
        if (resultWorkingHours?.success) {
            toast.success('Working hours saved successfully')
            fetchDealerShipInfo()
        }
    }, [resultWorkingHours])

    useEffect(() => {
        if (errorWorkingHours) toast.error('Error saving working hours')
        if (errorUsers) toast.error('Error fetching users')
        if (errorUserUpdateRole) toast.error('Error updating user role')
        if (errorUserDeleteUser) toast.error('Error deleting user')
        if (errorDealerShipInfo) toast.error('Error fetching dealership info')
    }, [errorWorkingHours, errorUsers, errorUserUpdateRole, errorUserDeleteUser, errorDealerShipInfo])

    const handleUserRoleChange = async (userId: string, privilege: string) => {
        await fetchUserUpdateRole(userId, privilege)
    }

    const filteredUsers = users?.success
        ? users.data.filter(
            (user: any) =>
                user.name?.toLowerCase().includes(userSearch.toLowerCase()) ||
                user.email.toLowerCase().includes(userSearch.toLowerCase())
        )
        : []

    const handleRemoveAdmin = async (user: any) => {
        await handleUserRoleChange(user.id, 'USER')
    }

    const handleMakeAnAdmin = async (user: any) => {
        if (confirm(`Are you sure you want to make ${user.name || user.email} an admin?`)) {
            await handleUserRoleChange(user.id, 'ADMIN')
        }
    }

    const handleDeleteUser = async (user: any) => {
        if (confirm(`Are you sure you want to delete ${user.name || user.email}?`)) {
            await delUser(user.id)
        }
    }

    return (
        <div className="space-y-6 p-4 sm:p-6 max-w-4xl mx-auto">
            <Tabs defaultValue="hours" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-lg p-1">
                    <TabsTrigger
                        onClick={() => setSelectedTab('hours')}
                        value="hours"
                        className="flex items-center gap-2 rounded-md py-2 px-4 transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm"
                    >
                        <Clock className="h-4 w-4" />
                        Working Hours
                    </TabsTrigger>
                    <TabsTrigger
                        onClick={() => setSelectedTab('admins')}
                        value="admins"
                        className="flex items-center gap-2 rounded-md py-2 px-4 transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm"
                    >
                        <Shield className="h-4 w-4" />
                        Admin Users
                    </TabsTrigger>
                </TabsList>

                <AnimatePresence mode="wait">
                    {selectedTab === 'hours' && (
                        <TabsContent value="hours" asChild>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="mt-6 shadow-xl bg-gradient-to-br from-white to-blue-50 border border-gray-100 rounded-xl">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-2xl font-bold text-gray-800">Working Hours</CardTitle>
                                        <CardDescription className="text-gray-600 text-sm">
                                            Set your dealership's operating hours with ease.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="space-y-3">
                                            {workingHours.map((day, index) => (
                                                <motion.div
                                                    key={day.dayOfWeek}
                                                    className="grid grid-cols-12 gap-4 items-center py-4 px-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                                >
                                                    <div className="col-span-3 md:col-span-2 font-semibold text-gray-800 text-base capitalize">
                                                        {day.dayOfWeek.toLowerCase()}
                                                    </div>
                                                    <div className="col-span-9 md:col-span-3 flex items-center gap-3">
                                                        <Checkbox
                                                            id={`isOpen-${day.dayOfWeek}`}
                                                            checked={day.isOpen}
                                                            onCheckedChange={(checked) => handleWorkingHoursChange(index, 'isOpen', checked)}
                                                            className="h-5 w-5 border-2 border-gray-300 rounded-md data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                                                            aria-label={`Toggle ${day.dayOfWeek} open/closed`}
                                                        />
                                                        <Label
                                                            htmlFor={`isOpen-${day.dayOfWeek}`}
                                                            className="text-sm font-medium text-gray-700"
                                                        >
                                                            {day.isOpen ? 'Open' : 'Closed'}
                                                        </Label>
                                                    </div>
                                                    {day.isOpen ? (
                                                        <>
                                                            <div className="col-span-6 md:col-span-3">
                                                                <Tooltip.Provider>
                                                                    <Tooltip.Root>
                                                                        <Tooltip.Trigger asChild>
                                                                            <div className="flex items-center gap-3">
                                                                                <Clock className="h-5 w-5 text-blue-500" />
                                                                                <Input
                                                                                    type="time"
                                                                                    className="w-full md:w-36 text-sm border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md py-2 transition-all"
                                                                                    value={day.openTime}
                                                                                    onChange={(e) => handleWorkingHoursChange(index, 'openTime', e.target.value)}
                                                                                    aria-label={`Set opening time for ${day.dayOfWeek}`}
                                                                                />
                                                                            </div>
                                                                        </Tooltip.Trigger>
                                                                        <Tooltip.Content
                                                                            className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20"
                                                                            sideOffset={5}
                                                                        >
                                                                            Set opening time for {day.dayOfWeek.toLowerCase()}
                                                                            <Tooltip.Arrow className="fill-gray-900" />
                                                                        </Tooltip.Content>
                                                                    </Tooltip.Root>
                                                                </Tooltip.Provider>
                                                            </div>
                                                            <div className="col-span-1 text-center text-gray-500 text-sm font-medium">to</div>
                                                            <div className="col-span-6 md:col-span-3">
                                                                <Tooltip.Provider>
                                                                    <Tooltip.Root>
                                                                        <Tooltip.Trigger asChild>
                                                                            <div className="flex items-center gap-3">
                                                                                <Clock className="h-5 w-5 text-blue-500" />
                                                                                <Input
                                                                                    type="time"
                                                                                    className="w-full md:w-36 text-sm border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md py-2 transition-all"
                                                                                    value={day.closeTime}
                                                                                    onChange={(e) => handleWorkingHoursChange(index, 'closeTime', e.target.value)}
                                                                                    aria-label={`Set closing time for ${day.dayOfWeek}`}
                                                                                />
                                                                            </div>
                                                                        </Tooltip.Trigger>
                                                                        <Tooltip.Content
                                                                            className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20"
                                                                            sideOffset={5}
                                                                        >
                                                                            Set closing time for {day.dayOfWeek.toLowerCase()}
                                                                            <Tooltip.Arrow className="fill-gray-900" />
                                                                        </Tooltip.Content>
                                                                    </Tooltip.Root>
                                                                </Tooltip.Provider>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="col-span-6 md:col-span-7">
                                                            <span className="text-sm italic text-red-500 font-medium">Closed all day</span>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="mt-8 flex justify-end">
                                            <Tooltip.Provider>
                                                <Tooltip.Root>
                                                    <Tooltip.Trigger asChild>
                                                        <Button
                                                            onClick={handleSaveWorkingHours}
                                                            disabled={loadingWorkingHours}
                                                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
                                                        >
                                                            {loadingWorkingHours ? (
                                                                <>
                                                                    <Loader2 className="h-5 w-5 animate-spin mr-2 text-white" /> Saving...
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Save className="h-5 w-5 mr-2" /> Save Working Hours
                                                                </>
                                                            )}
                                                        </Button>
                                                    </Tooltip.Trigger>
                                                    <Tooltip.Content
                                                        className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl border border-blue-200/20"
                                                        sideOffset={5}
                                                    >
                                                        Save your working hours configuration
                                                        <Tooltip.Arrow className="fill-gray-900" />
                                                    </Tooltip.Content>
                                                </Tooltip.Root>
                                            </Tooltip.Provider>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </TabsContent>
                    )}

                    {selectedTab === 'admins' && (
                        <TabsContent value="admins" asChild>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="mt-6 shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="text-xl font-semibold">Admin Users</CardTitle>
                                        <CardDescription className="text-gray-500">
                                            Manage user roles and permissions for your dealership.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-6 relative">
                                            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <Input
                                                value={userSearch}
                                                type="search"
                                                onChange={(e) => setUserSearch(e.target.value)}
                                                placeholder="Search users by name or email..."
                                                className="pl-9 w-full border-gray-300 focus:ring-2 focus:ring-blue-500"
                                                aria-label="Search users"
                                            />
                                        </div>
                                        {loadingUsers ? (
                                            <div className="py-12 flex justify-center">
                                                <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
                                            </div>
                                        ) : users?.success && filteredUsers.length > 0 ? (
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>User</TableHead>
                                                        <TableHead>Email</TableHead>
                                                        <TableHead>Role</TableHead>
                                                        <TableHead className="text-right">Actions</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {filteredUsers.map((user: any) => (
                                                        <TableRow key={user.id}>
                                                            <TableCell className="font-medium">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden relative">
                                                                        {user.imageUrl ? (
                                                                            <img
                                                                                src={user.imageUrl}
                                                                                alt={user.name || 'User'}
                                                                                className="w-full h-full object-cover"
                                                                            />
                                                                        ) : (
                                                                            <User className="w-5 h-5 text-gray-500" />
                                                                        )}
                                                                    </div>
                                                                    <span>{user.name || 'Unnamed User'}</span>
                                                                </div>
                                                            </TableCell>
                                                            <TableCell>{user.email}</TableCell>
                                                            <TableCell>
                                                                <Badge
                                                                    className={`px-2 py-1 ${user.role === 'ADMIN' ? 'bg-green-600' : 'bg-gray-600'
                                                                        } text-white`}
                                                                >
                                                                    {user.role}
                                                                </Badge>
                                                            </TableCell>
                                                            <TableCell className="text-right space-x-2">
                                                                <Tooltip.Provider>
                                                                    <Tooltip.Root>
                                                                        <Tooltip.Trigger asChild>
                                                                            {user.role === 'ADMIN' ? (
                                                                                <Button
                                                                                    variant="outline"
                                                                                    size="sm"
                                                                                    className="text-red-600 border-red-300 hover:bg-red-50"
                                                                                    onClick={() => handleRemoveAdmin(user)}
                                                                                    disabled={loadingUserUpdateRole}
                                                                                >
                                                                                    <UserX className="h-4 w-4 mr-2" />
                                                                                    Remove Admin
                                                                                </Button>
                                                                            ) : (
                                                                                <Button
                                                                                    variant="outline"
                                                                                    size="sm"
                                                                                    className="text-green-600 border-green-300 hover:bg-green-50"
                                                                                    onClick={() => handleMakeAnAdmin(user)}
                                                                                    disabled={loadingUserUpdateRole}
                                                                                >
                                                                                    <Shield className="h-4 w-4 mr-2" />
                                                                                    Make Admin
                                                                                </Button>
                                                                            )}
                                                                        </Tooltip.Trigger>
                                                                        <Tooltip.Content className="bg-gray-800 text-white text-xs rounded-md p-2 shadow-lg">
                                                                            {user.role === 'ADMIN'
                                                                                ? `Remove admin privileges for ${user.name || user.email}`
                                                                                : `Grant admin privileges to ${user.name || user.email}`}
                                                                        </Tooltip.Content>
                                                                    </Tooltip.Root>
                                                                </Tooltip.Provider>
                                                                <Tooltip.Provider>
                                                                    <Tooltip.Root>
                                                                        <Tooltip.Trigger asChild>
                                                                            <Button
                                                                                variant="outline"
                                                                                size="sm"
                                                                                className="text-red-600 border-red-300 hover:bg-red-50"
                                                                                onClick={() => handleDeleteUser(user)}
                                                                                disabled={loadingUserDeleteUser}
                                                                            >
                                                                                <UserX className="h-4 w-4 mr-2" />
                                                                                Delete
                                                                            </Button>
                                                                        </Tooltip.Trigger>
                                                                        <Tooltip.Content className="bg-gray-800 text-white text-xs rounded-md p-2 shadow-lg">
                                                                            Permanently delete {user.name || user.email}
                                                                        </Tooltip.Content>
                                                                    </Tooltip.Root>
                                                                </Tooltip.Provider>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        ) : (
                                            <div className="py-12 text-center">
                                                <User className="h-8 w-8 mx-auto mb-3 text-gray-400" />
                                                <h3 className="text-lg font-medium text-gray-900">No Users Found</h3>
                                                <p className="text-sm text-gray-500">
                                                    {userSearch ? 'No users match your search.' : 'No users are currently available.'}
                                                </p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </TabsContent>
                    )}

                </AnimatePresence>
            </Tabs>
        </div>
    )
}

export default SettingsForm