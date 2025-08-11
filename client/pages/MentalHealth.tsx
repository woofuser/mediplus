import { MobileStatusBar } from "@/components/ui/mobile-status-bar";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Brain, Heart, Hand, BookOpen, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { Link } from "react-router-dom";

export default function MentalHealth() {
  const moodEmojis = [
    { emoji: "😃", color: "bg-yellow-400" },
    { emoji: "😊", color: "bg-yellow-200" },
    { emoji: "😌", color: "bg-orange-200" },
    { emoji: "😞", color: "bg-blue-300" },
    { emoji: "😭", color: "bg-blue-500" },
    { emoji: "😐", color: "bg-gray-400" },
    { emoji: "😒", color: "bg-gray-600" },
    { emoji: "🤢", color: "bg-purple-300" },
    { emoji: "😱", color: "bg-gray-700" },
    { emoji: "😟", color: "bg-purple-400" },
    { emoji: "😠", color: "bg-orange-500" },
    { emoji: "😡", color: "bg-red-500" },
  ];

  const progressColors = [
    "bg-teal-300", "bg-pink-300", "bg-gray-500", "bg-purple-400", "bg-gray-600", "bg-orange-500",
    "bg-cyan-400", "bg-purple-300", "bg-yellow-300", "bg-blue-400", "bg-yellow-200", "bg-red-500",
    "bg-yellow-400", "bg-cyan-300", "bg-red-600"
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col max-w-md mx-auto">
      <MobileStatusBar />
      
      {/* Header */}
      <div className="bg-pink-200 px-6 py-4 flex items-center gap-3">
        <Link to="/medbot">
          <Button size="icon" variant="ghost" className="text-black">
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </Link>
        <Brain className="w-6 h-6 text-black" />
        <h1 className="text-xl font-bold text-black">Mental Health</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-6 overflow-y-auto pb-24">
        {/* Greeting and Reflection */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-black text-lg">Hi Bella,</p>
              <p className="text-black text-lg font-medium">How are you feeling today?</p>
            </div>
            <div className="relative">
              <Heart className="w-16 h-16 text-purple-400 fill-purple-400" />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                  <div className="w-6 h-3 bg-blue-300 rounded-full"></div>
                  <div className="w-6 h-3 bg-blue-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-black font-semibold">
              Take a moment to reflect and share what's on your mind.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Your reflection..."
                className="w-full px-4 py-3 border-2 border-black rounded-full bg-pink-100 placeholder-gray-500 text-black"
              />
              <Button size="icon" variant="ghost" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Daily Mood Log */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-black">Daily Mood Log</h2>
          <div className="grid grid-cols-6 gap-3">
            {moodEmojis.map((mood, index) => (
              <button
                key={index}
                className={`w-12 h-12 rounded-full ${mood.color} flex items-center justify-center text-lg border-2 border-black`}
              >
                {mood.emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Daily Affirmations */}
        <div className="bg-purple-200 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M20 50 Q30 30, 40 50 T60 50 Q70 30, 80 50" stroke="black" strokeWidth="2" fill="none"/>
                <path d="M25 60 Q35 70, 45 60 T65 60" stroke="black" strokeWidth="1" fill="none"/>
                <circle cx="30" cy="40" r="2" fill="black"/>
                <circle cx="70" cy="40" r="2" fill="black"/>
                <path d="M40 75 Q50 85, 60 75" stroke="black" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-black mb-2">Daily Affirmations</h3>
              <p className="text-black text-sm leading-relaxed">
                "You are not weak for struggling; you are strong for facing your battles head-on"
              </p>
            </div>
          </div>

          {/* Music Player */}
          <div className="bg-white rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-orange-400 rounded-lg"></div>
              <div className="flex-1">
                <p className="font-semibold text-black text-sm">Marconi Union - Weightless</p>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                  <div className="bg-gray-400 h-1 rounded-full w-2/3"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>03:45</span>
                  <span>06:30</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6">
              <SkipBack className="w-5 h-5 text-gray-600" />
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <SkipForward className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button className="bg-purple-200 hover:bg-purple-300 text-black rounded-2xl py-8 flex flex-col items-center gap-2 border border-gray-300">
            <Hand className="w-8 h-8" />
            <span className="font-semibold">MindfulBot</span>
          </Button>
          <Button className="bg-purple-200 hover:bg-purple-300 text-black rounded-2xl py-8 flex flex-col items-center gap-2 border border-gray-300">
            <BookOpen className="w-8 h-8" />
            <span className="font-semibold">Resources</span>
          </Button>
        </div>

        {/* Mood Progress */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-black">July Mood Progress Bar</h3>
            <Button className="bg-white border border-gray-300 text-black text-sm px-4 py-2 rounded-full">
              Mental Health Overview
            </Button>
          </div>
          <div className="flex gap-1 h-20">
            {progressColors.map((color, index) => (
              <div key={index} className={`flex-1 ${color} rounded-t-sm`}></div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
