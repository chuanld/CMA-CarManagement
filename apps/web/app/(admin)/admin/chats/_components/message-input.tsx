// MessageInput.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function MessageInput({ value, onChange, onSubmit }: any) {
  return (
    <form onSubmit={onSubmit} className="p-4 border-t bg-card">
      <div className="flex gap-3 max-w-4xl mx-auto">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 h-12 rounded-xl bg-muted/50 border-0 focus-visible:ring-primary"
        />
        <Button
          type="submit"
          size="icon"
          className="h-12 w-12 rounded-xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-glow transition-all"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </form>
  );
}