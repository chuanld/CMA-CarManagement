"use client";
import ChatBox from "./chat-box";
import InfoPanel from "./info-panel";
import { useSearchParams } from "next/navigation";
import SidebarConversations from "./sidebar-conversation";

export default function ChatShell({ dealerId, conversations, currentCid }: { dealerId: string; conversations: any[]; currentCid: string | null }) {
  const params = useSearchParams();
  const cid = params.get("cid");

  return (
    <div className="flex flex-1 overflow-hidden ">

      <div className="w-[300px] border-r overflow-hidden">
        <SidebarConversations dealerId={dealerId} conversations={conversations} cid={cid} />
      </div>

      <div className="flex-1 overflow-hidden border-r">
        <ChatBox dealerId={dealerId} cid={cid} conversation={conversations.find(c => c.id === cid)} />
      </div>

      <div className="w-[320px] hidden xl:block overflow-y-auto">
        <InfoPanel cid={cid} />
      </div>

    </div>
  );
}
