"use client";

import { useEffect, useState, useRef } from "react";
import { getMessagesByConversation, sendMessage } from "@/actions/chat";
import { getPusherClient } from "@/utils/pusher-client";
import ChatHeader from "./chat-header";
import MessageBubble from "./message-bubble";
import MessageInput from "./message-input";

export default function ChatBox({ dealerId, cid, conversation }: { dealerId: string; cid: string | null; conversation: any }) {
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cid) return;
    getMessagesByConversation(cid).then((res: any) => {
      if (res.success) {
        console.log(res.data,'message')
        setMessages(res.data);
      }
    });
  }, [cid]);

  useEffect(() => {
    if (!cid) return;
    const pusher = getPusherClient();
    const channel = pusher.subscribe(`conversation-${cid}`);

    channel.bind("new-message", (msg: any) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => pusher.unsubscribe(`conversation-${cid}`);
  }, [cid]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !cid) return;

    const res = await sendMessage({ conversationId: cid, content: text });
    if (res.success) setText("");
  };

  if (!cid) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Chọn một cuộc trò chuyện để bắt đầu
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(73vh)] bg-background ">
      <ChatHeader conversation={conversation} />

      <div className="flex-1 overflow-y-scroll p-6">
        {messages?.length > 0 && messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <MessageInput value={text} onChange={setText} onSubmit={handleSend} />
    </div>
  );
}