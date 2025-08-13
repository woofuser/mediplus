import { WebsiteHeader } from "@/components/ui/website-header";
import { MedBotAvatar } from "@/components/medbot-avatar";
import { Button } from "@/components/ui/button";
import { Plus, Send, Camera, Mic } from "lucide-react";
import { Link } from "react-router-dom";

export default function MedBot() {
  return (
    <div className="min-h-screen bg-gray-50">
      <WebsiteHeader />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-teal-200 rounded-3xl px-8 py-6 flex items-center gap-4 mb-8">
          <MedBotAvatar />
          <h1 className="text-3xl font-bold text-black">MedBot</h1>
        </div>

        {/* Chat Content */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="space-y-6 mb-8">
            {/* Welcome Message */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-teal-400 text-xs font-bold">+</span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-6 py-4 shadow-sm max-w-2xl">
                <p className="text-black font-medium text-lg">
                  Hi! Welcome to MedBot. I'll be assisting you here today.
                </p>
              </div>
            </div>

            {/* Second Message */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-teal-400 text-xs font-bold">+</span>
                </div>
              </div>
              <div className="bg-pink-200 rounded-2xl rounded-tl-sm px-6 py-4 shadow-sm max-w-2xl">
                <p className="text-black font-medium text-lg">
                  How can I help you today?
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link to="/medbot/mental-health">
              <Button
                variant="outline"
                className="w-full py-6 rounded-2xl bg-pink-300 border-pink-300 text-black font-medium hover:bg-pink-400 text-lg"
              >
                Mental Health
              </Button>
            </Link>
            <Link to="/medbot/check-in">
              <Button
                variant="outline"
                className="w-full py-6 rounded-2xl bg-pink-300 border-pink-300 text-black font-medium hover:bg-pink-400 text-lg"
              >
                Check-In & Vitals
              </Button>
            </Link>
            <Link to="/medbot/questions">
              <Button
                variant="outline"
                className="w-full py-6 rounded-2xl bg-pink-300 border-pink-300 text-black font-medium hover:bg-pink-400 text-lg"
              >
                Questions for Doctor
              </Button>
            </Link>
          </div>

          {/* Input Area */}
          <div className="border-t pt-6">
            <div className="flex items-center gap-4">
              <Button size="icon" variant="ghost" className="text-gray-500">
                <Plus className="w-6 h-6" />
              </Button>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
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
        </div>
      </div>
    </div>
  );
}
