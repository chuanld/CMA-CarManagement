"use client";

import { useRouter } from "next/navigation";

export default function SidebarConversations({ dealerId, conversations, cid }: { dealerId: string; conversations: any[], cid: string | null }) {
  const router = useRouter();

  const openChat = (cid: string) =>
    router.push(`/admin/chats?dealerId=${dealerId}&cid=${cid}`);

  return (
    <div className="p-2 space-y-2">
      {conversations.map((conv) => (
        <div
          key={conv.id}
          onClick={() => openChat(conv.id)}
          className={`p-3 rounded-xl cursor-pointer hover:bg-muted ${cid === conv.id ? "bg-muted" : ""}`}
        >
          <div className="font-semibold">{conv.user.name}</div>
          <div className="text-xs text-muted-foreground">{conv.car.name}</div>
        </div>
      ))}
    </div>
  );
}
