import { Bell } from "lucide-react";
import { useState } from "react";
import NotificationDropdown from "./notification-dropdown";

export function NotificationBell({ unread, onOpen, notifications }: { unread: number; onOpen?: () => void; notifications?: any[] }) {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        const newState = !open;
        setOpen(newState);
        if (newState) onOpen?.(); // reset unread + mark read
    }

    return (
        <div className="relative">
            <Bell className="w-6 h-6" onClick={toggleOpen} />
            {unread > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white 
                         text-xs px-2 py-0.5 rounded-full">
                    {unread}
                </span>
            )}
            {open && (
                <NotificationDropdown notifications={notifications} />
            )}
        </div>
    );
}
