export type WorkingHour = {
    dayOfWeek: string; // e.g., "Monday"
    openTime: string; // e.g., "09:00 AM"
    closeTime: string; // e.g., "05:00 PM"
    isOpen: boolean; // e.g., true if the dealership is open on that day
    createdAt: Date;
    updatedAt: Date;
};

export type DealershipInfo = {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    workingHours: WorkingHour[];
    website?: string;
};