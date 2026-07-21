"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { use, useEffect, useState } from "react";
import { getDealerConversations } from "@/actions/chat";
import useFetch from "@/app/hooks/use-fetch";
import { ApiResponse } from "@/types/api";
import { Dealer } from "@/types/dealer";
import DealerTabs from "./dealer-tab";
import ChatShell from "./chat-shell";

export default function ChatContainer({ dealers, searchParams }: { dealers: Dealer[]; searchParams: { dealerId?: string, cid?: string } }) {
  const router = useRouter();
 
  const dealerId = searchParams.dealerId || dealers[0]?.id;
  const currentCid = searchParams.cid || null;

  const [conversations, setConversations] = useState([]);

  const {loading: loadingConversations, data: conversationsData, fetchData: fnGetConversation, error: errorConversations} = useFetch<ApiResponse<any>>(getDealerConversations)

  // load conversations for current dealer
  useEffect(() => {
    if (!dealerId) return;
    fnGetConversation(dealerId);
  }, [dealerId]);

  useEffect(() => {
    if (conversationsData && conversationsData.success) {
      setConversations(conversationsData.data);
    }   
    }, [conversationsData]);

  const handleChangeDealer = (id: string) => {
    router.push(`/admin/chats?dealerId=${id}`);
  };

  return (
    <div className="flex flex-col h-full">
      
      {/* Dealer Tabs */}
      <DealerTabs
        dealers={dealers}
        currentDealerId={dealerId}
        onChange={handleChangeDealer}
      />

      {/* Layout 3 columns (Sidebar - ChatBox - InfoPanel) */}
      <ChatShell
        dealerId={dealerId}
        conversations={conversations}
        currentCid={currentCid}
      />
    </div>
  );
}
