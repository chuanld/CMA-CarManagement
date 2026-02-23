// components/chat/chat-header.tsx
import { Car, Phone, User } from "lucide-react";

export default function ChatHeader({ conversation }: { conversation: any }) {
  if (!conversation) return null;
 

  return (
    <div className="border-b bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white text-xl font-bold">
            {conversation?.user?.name?.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-lg">{conversation.user.name}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Car className="w-4 h-4" />
              {conversation.car.make} {conversation.car.model} ({conversation.car.year})
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="p-3 rounded-xl bg-accent/50 hover:bg-accent transition-all">
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}