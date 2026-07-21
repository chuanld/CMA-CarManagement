"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getMessagesByConversation, sendMessage } from "@/actions/chat";
import { getPusherClient } from "@/utils/pusher-client";
import { v4 as uuidv4 } from "uuid";

export default function ChatLayout({
  carId,
  dealerId,
  conversationId,
  currentUserId,
}: {
  carId: string;
  dealerId: string;
  conversationId: string;
  currentUserId: string;
}) {
  const [messages, setMessages] = useState<any[]>([]);
  const [content, setContent] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const pusher = getPusherClient();
  console.log("🚀 Pusher client instance:", messages);

  // 🔹 Load messages on mount
  useEffect(() => {
    async function loadMessages() {
      const res = await getMessagesByConversation(conversationId);
      if (res.success && res.data) setMessages(res.data);
    }
    loadMessages();
  }, [conversationId]);

  // 🔹 Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔹 Listen for realtime messages (Pusher)
  useEffect(() => {
    const channelName = `conversation-${conversationId}`;
    const channel = pusher.subscribe(channelName);

    console.log("📡 Subscribed to:", channelName);

    channel.bind("new-message", (message: any) => {
      console.log("💬 Received new message:", message);
      setMessages((prev) => {
        if (prev.some((m) => m.id === message.id)) return prev;
        return [...prev, { ...message }];
      });
    });

    return () => {
      pusher.unsubscribe(channelName);
      console.log("🔌 Unsubscribed from:", channelName);
    };
  }, [conversationId, pusher]);

  // 🔹 Handle send message
  const handleSend = async () => {
    if (!content.trim()) return;

    const tempId = uuidv4() + "-local";

    const tempMessage = {
      id: tempId,
      content,
      senderId: currentUserId,
      receiverId: null,
      createdAt: new Date().toISOString(),
      isUser: true,
      isSending: true,
    };

    setMessages((prev) => [...prev, tempMessage]);
    setContent("");
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    try {
      const res = await sendMessage({
        conversationId,
        content,
        carId,
      });

      if (res.success && res.data) {
        setMessages((prev) =>
          prev.map((m) => (m.id === tempId ? res.data : m))
        );
      } else {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === tempId ? { ...m, isError: true } : m
          )
        );
      }
    } catch (err) {
      console.error("Send message error:", err);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === tempId ? { ...m, isError: true } : m
        )
      );
    }
  };

  return (
    <div className="flex flex-col h-[80vh] border rounded-2xl shadow-md bg-card">
      {/* HEADER */}
      <div className="p-4 border-b flex items-center justify-between bg-secondary rounded-t-2xl">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={`/api/dealer/${dealerId}/avatar`} />
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">Dealer #{dealerId}</p>
            <p className="text-sm text-muted-foreground">Car ID: {carId}</p>
          </div>
        </div>
      </div>

      {/* MESSAGE LIST */}
      <ScrollArea className="flex-1 p-4 overflow-y-auto">
        {messages.length > 0 ? (
          messages.map((msg) => {
            const isOwn = msg.senderId === currentUserId; // 👈 xác định người gửi hiện tại
            return (
              <div
                key={msg.id}
                className={`mb-3 flex ${isOwn ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] px-4 py-2 rounded-2xl ${isOwn
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-muted-foreground mt-10">
            No messages yet. Start chatting!
          </p>
        )}
        <div ref={bottomRef} />
      </ScrollArea>

      {/* INPUT AREA */}
      <div className="p-4 border-t flex gap-3">
        <Input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend} className="btn-primary">
          Send
        </Button>
      </div>
    </div>
  );
}
