import { Battery, Signal, Wifi } from "lucide-react";

export function MobileStatusBar() {
  return (
    <div className="flex items-center justify-between px-6 py-2 bg-background text-foreground text-sm font-medium">
      <div className="flex items-center">
        <span>9:41</span>
      </div>
      <div className="flex items-center gap-1">
        <Signal className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <Battery className="w-4 h-4" />
      </div>
    </div>
  );
}
