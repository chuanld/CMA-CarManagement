// components/chat/dealer-tabs.tsx
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2 } from "lucide-react";

export default function DealerTabs({
  dealers,
  currentDealerId,
  onChange,
}: {
  dealers: any[];
  currentDealerId: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="px-6 py-4">
        <Tabs value={currentDealerId} onValueChange={onChange}>
          <TabsList className="bg-transparent p-0 h-auto flex flex-wrap gap-2">
            {dealers.map((d) => (
              <TabsTrigger
                key={d.id}
                value={d.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground 
                         px-5 py-2.5 rounded-xl font-medium transition-all 
                         hover:bg-accent/70"
              >
                <Building2 className="w-4 h-4 mr-2" />
                {d.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}