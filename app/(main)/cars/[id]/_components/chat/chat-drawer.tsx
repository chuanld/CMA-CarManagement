"use client";

import { useState, useEffect, useRef, use } from "react";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getOrCreateConversation } from "@/actions/chat";
import { sendMessage, getMessages } from "@/actions/chat";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getPusherClient } from "@/utils/pusher-client";

export default function ChatDrawer({ dealerId, carId, children }: {
  dealerId: string;
  carId: string;
  children: React.ReactNode;
}) {
  const [conversation, setConversation] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if(!conversation?.id) return;

    const channelName = `conversation-${conversation.id}`;
    const pusher = getPusherClient();
    pusher.subscribe(channelName);

    const handleIncoming = (message: any) => {
      setMessages((prev) => [...prev, message]);
    }

    pusher.bind("new-message", handleIncoming);

    return () => {
      pusher.unsubscribe(channelName);
      pusher.unbind("new-message", handleIncoming);
    }
  },[conversation?.id]);

  const initConversation = async () => {
    const res:any = await getOrCreateConversation(dealerId, carId);
    if (res.success) {
      setConversation(res.data);

      const msgRes:any = await getMessages(res.data.id);
      if (msgRes.success) {
        setMessages(msgRes.data);
      }
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const optimistic = {
      id: Date.now(),
      body: input,
      senderRole: "USER",
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, optimistic]);

    setInput("");

    await sendMessage({
      conversationId: conversation.id,
      content: input,
      carId,
    });   
  };

  return (
    <Drawer onOpenChange={(open) => open && initConversation()}>
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerTitle></DrawerTitle>

      <DrawerContent className="p-0 h-[70vh] rounded-t-2xl">
        {/* Header */}
        <div className="p-4 border-b flex items-center gap-3 bg-secondary">
          <Avatar className="w-10 h-10">
            {/* <AvatarImage src="/dealer.png" /> */}
            <AvatarFallback>D</AvatarFallback>
          </Avatar>

          <div>
            <p className="font-semibold text-sm">Chat with Dealer</p>
            {conversation && (
              <p className="text-xs text-muted-foreground">
                Related to car #{conversation.carId}
              </p>
            )}
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 space-y-2 bg-background">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </div>

        {/* Input */}
        <div className="p-3 flex gap-2 border-t bg-card">
          <Input
            placeholder="Nhập tin nhắn..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-12"
          />
          <Button onClick={handleSend} className="h-12 px-5 btn-primary">
            Gửi
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function MessageBubble({ message }: { message: any }) {
  const isUser = message.isUser;

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-2xl px-4 py-2 max-w-[75%] text-sm shadow 
          ${isUser ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}
        `}
      >
        {message.content}
      </div>
    </div>
  );
}
