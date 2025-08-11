import { Bot } from "lucide-react";

export function MedBotAvatar() {
  return (
    <div className="relative w-16 h-16 rounded-full bg-teal-400 flex items-center justify-center">
      <Bot className="w-8 h-8 text-white" />
      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">+</span>
      </div>
    </div>
  );
}
