import { getDealerById } from "@/actions/dealers";
import { useSmoothRouter } from "@/app/hooks/use-smooth-router";
import { use, useEffect } from "react";

export default function NotificationDropdown({ notifications }: { notifications?: any[] }) {
    const router = useSmoothRouter()
    if (!notifications) return null;

    

    const routeActionNoti = (item: any) => {
        if (item.isUser) {
            return router.smoothPush(`/admin/chats?dealerId=${item.dealerId}&cid=${item.conversationId}`)
        } else {
            return router.smoothPush(`/cars/${item.carId}`)
        }
    }
    return (
        <div className="
      absolute right-0 mt-2
      w-80 bg-card border border-border rounded-xl shadow-lg
      p-3 z-50
    ">
            <h3 className="font-semibold mb-2 text-sm">Notification</h3>

            <div className="flex flex-col gap-2 max-h-80 overflow-y-auto">
                {notifications.length === 0 && (
                    <p className="text-xs text-muted-foreground py-6 text-center">
                        No new notifications
                    </p>
                )}

                {notifications.map((item, idx) => (
                    <div
                        onClick={() => routeActionNoti(item)}
                        key={idx}
                        // href={`/chat/${item.conversationId}`}
                        className="p-2 rounded-lg hover:bg-muted transition text-sm"
                    >
                        <div className="font-semibold">{item.senderName}</div>
                        <div className="text-muted-foreground text-xs">
                            {item.preview}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
