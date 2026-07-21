// components/chat/message-bubble.tsx
import { format } from "date-fns";

export default function MessageBubble({ message }: { message: any }) {
  const isDealer = !message.isUser;

  return (
    <div className={`flex ${isDealer ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`flex max-w-[70%] gap-3 ${isDealer ? "flex-row-reverse" : ""}`}>
        {!isDealer && (
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
            {message.sender.name[0]}
          </div>
        )}

        <div>
          <div
            className={`px-4 py-3 rounded-2xl shadow-sm ${
              isDealer
                ? "bg-gradient-to-r from-primary to-primary/90 text-white"
                : "bg-muted text-foreground"
            }`}
          >
            <p className="text-sm">{message.content}</p>
          </div>
          <p className="text-xs text-muted-foreground mt-1 px-1">
            {format(new Date(message.createdAt), "HH:mm")}
          </p>
        </div>
      </div>
    </div>
  );
}