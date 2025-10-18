export const DealerLoadingSkeleton = () => (
    <div className="space-y-4 animate-pulse">
        <div className="h-8 bg-muted rounded w-3/4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-10 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-1/3"></div>
                <div className="h-10 bg-muted rounded"></div>
            </div>
            <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-20 bg-muted rounded"></div>
            </div>
        </div>
    </div>
)

export const WorkingHoursSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="space-y-2 p-3 border rounded-md bg-muted animate-pulse">
                <div className="h-4 bg-muted/50 rounded w-16 mx-auto"></div>
                <div className="h-5 bg-muted/50 rounded w-12 mx-auto"></div>
                <div className="flex gap-2 opacity-0">
                    <div className="h-8 bg-muted/30 rounded flex-1"></div>
                    <div className="h-8 bg-muted/30 rounded flex-1"></div>
                </div>
            </div>
        ))}
    </div>
)