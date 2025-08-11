import { MobileStatusBar } from "@/components/ui/mobile-status-bar";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { MedBotAvatar } from "@/components/medbot-avatar";
import { Button } from "@/components/ui/button";
import { Plus, Send, Camera, Mic } from "lucide-react";
import { Link } from "react-router-dom";

export default function MedBot() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-w-md mx-auto">
      <MobileStatusBar />
      
      {/* Header */}
      <div className="bg-teal-200 px-6 py-4 flex items-center gap-3">
        <MedBotAvatar />
        <h1 className="text-2xl font-bold text-black">MedBot</h1>
      </div>

      {/* Chat Content */}
      <div className="flex-1 px-6 py-6 space-y-6">
        {/* Welcome Message */}
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-teal-400 text-xs font-bold">+</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[280px]">
            <p className="text-black font-medium">
              Hi! Welcome to MedBot. I'll be assisting you here today.
            </p>
          </div>
        </div>

        {/* Second Message */}
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-teal-400 text-xs font-bold">+</span>
            </div>
          </div>
          <div className="bg-pink-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[280px]">
            <p className="text-black font-medium">
              How can I help you today?
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Link to="/medbot/mental-health">
            <Button
              variant="outline"
              className="w-full py-4 rounded-full bg-pink-300 border-pink-300 text-black font-medium hover:bg-pink-400"
            >
              Mental Health
            </Button>
          </Link>
          <Link to="/medbot/check-in">
            <Button
              variant="outline"
              className="w-full py-4 rounded-full bg-pink-300 border-pink-300 text-black font-medium hover:bg-pink-400"
            >
              Check-In & Vitals
            </Button>
          </Link>
          <Link to="/medbot/questions">
            <Button
              variant="outline"
              className="w-full py-4 rounded-full bg-pink-300 border-pink-300 text-black font-medium hover:bg-pink-400"
            >
              Questions for Doctor
            </Button>
          </Link>
        </div>
      </div>

      {/* Input Area */}
      <div className="px-6 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <Button size="icon" variant="ghost" className="text-gray-500">
            <Plus className="w-6 h-6" />
          </Button>
          <div className="flex-1" />
          <Button size="icon" variant="ghost" className="text-gray-500">
            <Send className="w-6 h-6" />
          </Button>
          <Button size="icon" variant="ghost" className="text-gray-500">
            <Camera className="w-6 h-6" />
          </Button>
          <Button size="icon" variant="ghost" className="text-gray-500">
            <Mic className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
