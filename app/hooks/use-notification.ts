import { useEffect, useState } from "react";
import { getPusherClient } from "@/utils/pusher-client";


export function useMessageNotification(channelKey: string) {
  const [unread, setUnread] = useState(0);
  const [notifications, setNotifications] = useState<any[]>([]);



  useEffect(() => {
    const pusher = getPusherClient();
    const channel = pusher.subscribe(channelKey);

    channel.bind("notification", (payload: any) => {
      setUnread((u) => u + 1);
      console.log('notification received', payload);

      setNotifications((prev) => [
      {
        conversationId: payload.conversationId,
        senderName: payload.message.sender.name,
        isUser: payload.message.isUser,
        preview: payload.message.content.slice(0, 40),
        type: payload.message.type,
        receiverId: payload.message.receiverId,
        senderId: payload.message.senderId,
        createdAt: payload.message.createdAt,
        carId: payload.message.carId,
        dealerId: payload.message.dealerId,
      },
      ...prev
    ]);

    });

    return () => {
      pusher.unsubscribe(channelKey);
    };
  }, [channelKey]);

  const resetUnread = () => setUnread(0);

  return { unread, resetUnread, notifications };
}
