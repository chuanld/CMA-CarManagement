'use client'

import { useEffect, useState, useTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
    Badge,
} from '@/components/ui/badge'
import {
    Archive,
    ArchiveX,
    MoreHorizontal,
    Star,
    User,
    Mail,
    Phone,
    MapPin,
    Car,
    Trash2,
    Search,
    Loader2,
    FastForward,
    Forward
} from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { deleteDealer, getDealers, toggleDealerArchive } from '@/actions/dealers'
import useFetch from '@/app/hooks/use-fetch'
import { ApiResponse } from '@/types/api'
import { cn } from '@/lib/utils'
import { AddDealerDialog } from './add-dealer-dialog'
import Image from 'next/image'
import { DealerActionDialog } from './dialog-action'
import { EditDealerDialog } from './edit-dealer-dialog'
import { toast } from 'sonner'
import { Dealer } from '@/types/dealer'
import { useRouter } from 'next/navigation'
import { useSmoothRouter } from '@/app/hooks/use-smooth-router'



export default function DealerList() {
    const { smoothPush, isPending } = useSmoothRouter();
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState<'name' | 'createdAt' | 'avgRating'>('createdAt')
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
    const [showArchived, setShowArchived] = useState(false)
    const [refetchFlag, setRefetchFlag] = useState(false)
    const [isOpenAlert, setIsOpenAlert] = useState(false)
    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [actionType, setActionType] = useState<'toggle' | 'delete' | null>(null)
    const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null)
    const router = useRouter()

    //   const debouncedSearch = searchDebounce(search, 300)
    const { loading: loadingDealers, fetchData: fnGetDealers, data: resultDealers, error: errorDealers } = useFetch<ApiResponse<any[]>>(getDealers)
    const archivedDealers = resultDealers?.data?.filter(dealer => dealer.archived) || []
    const { loading: loadingToggle, fetchData: fnToggleDealerArchive, data: resultToggle, error: errorToggle } = useFetch(toggleDealerArchive)
    const { loading: loadingDelete, fetchData: fnDeleteDealer, data: resultDelete, error: errorDelete } = useFetch(deleteDealer)

    // Fetch dealers on mount and search changes
    useEffect(() => {

        fnGetDealers()
    }, [refetchFlag])



    const handleAction = (dealer: Dealer, type: 'toggle' | 'delete') => {
        setSelectedDealer(dealer)
        setIsOpenAlert(true)
        setActionType(type)
    }


    const getStatusBadge = (archived: boolean) =>
        archived ? 'secondary' : 'default'

    const formatDate = (date: Date) =>
        new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })

    const getOwnerDisplay = (owner: Dealer['owner'] | null) =>
        owner?.name || owner?.email || 'N/A'

    return (
        <>

            <div className="space-y-6 p-6">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 card-header"
                >
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Dealers Management</h1>
                        <p className="text-muted">
                            Manage and monitor all registered dealers
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant={showArchived ? 'default' : 'outline'}
                            onClick={() => setShowArchived(!showArchived)}
                            size="sm"
                        >
                            {showArchived ? (
                                <ArchiveX className="w-4 h-4 mr-2" />
                            ) : (
                                <Archive className="w-4 h-4 mr-2" />
                            )}
                            {showArchived ? 'Hide' : 'Show'} Archived
                        </Button>
                        <AddDealerDialog onSuccess={() => { setRefetchFlag(prev => !prev) }} />
                    </div>




                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col sm:flex-row gap-4 bg-card p-4 rounded-lg border-border"
                >
                    <div className="flex-1">
                        <Input
                            placeholder="Search dealers by name or email..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="max-w-sm border-border"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
                        <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                            <SelectTrigger className="w-[140px] border-border">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className='bg-card'>
                                <SelectItem value="name">Name</SelectItem>
                                <SelectItem value="avgRating">Rating</SelectItem>
                                <SelectItem value="createdAt">Created</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={sortOrder} onValueChange={(value: any) => setSortOrder(value)}>
                            <SelectTrigger className="w-[80px] border-border">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className='bg-card'>
                                <SelectItem value="asc">ASC</SelectItem>
                                <SelectItem value="desc">DESC</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </motion.div>

                {/* Dealers Table */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-md border bg-card border-none"
                >
                    <Table className=''>
                        <TableHeader className=''>
                            <TableRow className='border-border bg-card'>
                                <TableHead className="w-[40px]">Logo</TableHead>
                                <TableHead>Name</TableHead>
                                {/* <TableHead>Owner</TableHead> */}
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>    
                                <TableHead>Address</TableHead>
                                <TableHead className="text-center">
                                    <Car className="w-4 h-4 mx-auto" />
                                </TableHead>
                                <TableHead className="text-center">Rating</TableHead>
                                <TableHead className="text-center">Reviews</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Created</TableHead>
                                <TableHead>Updated</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className='min-h-[800px]'>
                            <AnimatePresence mode="wait">
                                {((showArchived && archivedDealers) || resultDealers?.data)?.map((dealer, index) => (
                                    <motion.tr
                                        key={dealer.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            backgroundColor: dealer.archived ? 'hsl(var(--muted)/0.5)' : 'transparent'
                                        }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.05
                                        }}
                                        layout
                                        className={cn(
                                            "hover:bg-gray-50 h-12",
                                            dealer.archived && "opacity-50"
                                        )}
                                    >

                                        <TableCell>
                                            {!!dealer.logoUrl ? (
                                                <div>
                                                    <img
                                                        src={dealer.logoUrl}
                                                        alt={dealer.name}
                                                        className="w-8 h-8 rounded-full object-cover"

                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                                                    <User className="w-4 h-4 text-primary" />
                                                </div>
                                            )}
                                        </TableCell>

                                        <TableCell className="font-medium">

                                            <TooltipProvider >

                                                <Tooltip>
                                                    <TooltipTrigger className="hover:underline cursor-pointer">
                                                        <EditDealerDialog
                                                            dealerId={dealer.id}
                                                            // isOpen={isOpenEdit}
                                                            onSuccess={() => {
                                                                setRefetchFlag(prev => !prev);
                                                            }}
                                                        >
                                                                                                                    <span className="hover:underline cursor-pointer">{dealer.name}</span>

                                                        </EditDealerDialog>
                                                    </TooltipTrigger>
                                                    <TooltipContent className='flex flex-nowrap gap-2'>
                                                        <p className='hover:text-lg cursor-pointer'
                                                        >Quick edit?</p>




                                                    </TooltipContent>

                                                </Tooltip>
                                            </TooltipProvider>
                                        </TableCell>


                                        {/* <TableCell>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger className="truncate max-w-[150px]">
                                                        {getOwnerDisplay(dealer.owner)}
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{getOwnerDisplay(dealer.owner)}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </TableCell> */}

                                        < TableCell className="truncate max-w-[200px]" >
                                            <div className="flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-muted-foreground" />
                                                <span className="truncate">{dealer.email}</span>
                                            </div>
                                        </TableCell>

                                        <TableCell>
                                            {dealer.phone ? (
                                                <div className="flex items-center gap-2">
                                                    <Phone className="w-4 h-4 text-muted-foreground" />
                                                    <span>{dealer.phone}</span>
                                                </div>
                                            ) : (
                                                'N/A'
                                            )}
                                        </TableCell>

                                        <TableCell className="max-w-[200px]">
                                            {dealer.address ? (
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-muted-foreground" />
                                                    <span className="truncate">{dealer.address}</span>
                                                </div>
                                            ) : (
                                                'N/A'
                                            )}
                                        </TableCell>

                                        <TableCell className="text-center">
                                            <Badge variant="outline">{dealer.cars?.length || 0}</Badge>
                                        </TableCell>

                                        <TableCell className="text-center">
                                            <div className="flex items-center justify-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={cn(
                                                            "w-3 h-3 transition-colors",
                                                            i < Math.floor(dealer.avgRating || 0)
                                                                ? 'fill-yellow-400 text-yellow-400'
                                                                : 'text-muted-foreground'
                                                        )}
                                                    />
                                                ))}
                                                <span className="text-xs text-muted-foreground ml-1">
                                                    {(dealer.avgRating || 0).toFixed(1)}
                                                </span>
                                            </div>
                                        </TableCell>

                                        <TableCell className="text-center">
                                            <Badge variant="secondary">{dealer.reviewCount || 0}</Badge>
                                        </TableCell>

                                        <TableCell>
                                            <Badge
                                                variant={getStatusBadge(dealer.archived)}
                                                className={dealer.archived ? 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200' : ''}
                                            >
                                                {dealer.archived ? 'Archived' : 'Active'}
                                            </Badge>
                                        </TableCell>

                                        <TableCell className="text-xs text-muted-foreground">
                                            {formatDate(dealer.createdAt)}
                                        </TableCell>

                                        <TableCell className="text-xs text-muted-foreground">
                                            {formatDate(dealer.updatedAt)}
                                        </TableCell>


                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Open menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">

                                                    <DropdownMenuItem
                                                        disabled={loadingDealers || isPending}
                                                        className="cursor-pointer"
                                                        onClick={() => smoothPush(`/admin/dealers/${dealer.id}`)}
                                                    >
                                                        <Forward className="w-4 h-4 mr-2" />
                                                        Go details
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() => handleAction(dealer, 'toggle')}
                                                        disabled={loadingDealers || isPending}
                                                        className="cursor-pointer"
                                                    >
                                                        <Archive className="w-4 h-4 mr-2" />
                                                        {dealer.archived ? 'Unarchive' : 'Archive'} Dealer
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() => handleAction(dealer, 'delete')}
                                                        className="text-destructive focus:text-destructive cursor-pointer"
                                                        disabled={loadingDealers || isPending}
                                                    >
                                                        <Trash2 className="w-4 h-4 mr-2" />
                                                        Delete Dealer
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                                <DealerActionDialog
                                                    dealerId={selectedDealer?.id}
                                                    dealerName={selectedDealer?.name}
                                                    currentStatus={dealer.archived}
                                                    isOpen={isOpenAlert}
                                                    onClose={() => setIsOpenAlert(false)}
                                                    actionType={actionType}
                                                    onSuccess={() => setRefetchFlag(prev => !prev)}
                                                />
                                            </DropdownMenu>
                                        </TableCell>

                                    </motion.tr>

                                ))}
                                {loadingDealers && (
                                    <motion.tr
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-24"
                                    >
                                        <TableCell colSpan={13} className="text-center">
                                            <Loader2 className="mx-auto h-8 w-8 animate-spin text-muted-foreground" />
                                        </TableCell>
                                    </motion.tr>
                                )}
                            </AnimatePresence>

                            {((!resultDealers?.data || resultDealers.data.length === 0) && !loadingDealers) && (
                                <TableRow>
                                    <TableCell colSpan={13} className="h-24 text-center">
                                        <div className="text-center">
                                            <Search className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                                            <p className="text-sm text-muted-foreground">
                                                {showArchived
                                                    ? 'No dealers found matching your criteria.'
                                                    : 'No dealers available. Create your first dealer to get started.'
                                                }
                                            </p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}


                            {resultDealers?.data && resultDealers?.data.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={13} className="h-24 text-center">
                                        No dealers found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </motion.div >


                {/* Stats Cards */}
                < motion.div
                    initial={{ opacity: 0, y: 10 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4"
                >
                    <div className="bg-card border-muted-foreground rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Dealers</p>
                                <p className="text-2xl font-bold">{resultDealers?.data && resultDealers?.data.length}</p>
                            </div>
                            <Car className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <div className="bg-card border-muted-foreground rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Active</p>
                                <p className="text-2xl font-bold">
                                    {resultDealers?.data && resultDealers?.data.filter(d => !d.archived).length}
                                </p>
                            </div>
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 text-sm font-bold">✓</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card border-muted-foreground rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Archived</p>
                                <p className="text-2xl font-bold">
                                    {resultDealers?.data && resultDealers?.data.filter(d => d.archived).length}
                                </p>
                            </div>
                            <Archive className="w-8 h-8 text-muted-foreground" />
                        </div>
                    </div>
                    <div className="bg-card border-muted-foreground rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Avg Rating</p>
                                <p className="text-2xl font-bold">
                                    {resultDealers?.data && resultDealers?.data.length > 0
                                        ? (resultDealers.data.reduce((sum, d) => sum + d.avgRating, 0) / resultDealers.data.length).toFixed(1)
                                        : '0.0'}
                                </p>
                            </div>
                            <Star className="w-8 h-8 text-yellow-500" />
                        </div>
                    </div>
                </motion.div >

            </div >

        </>

    )
}