import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Brain, Heart, Hand, BookOpen, Play, Pause, SkipBack, SkipForward, Send, Music, TrendingUp, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MentalHealth() {
  const [reflection, setReflection] = useState("");
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  const moodEmojis = [
    { emoji: "😃", color: "bg-yellow-400", label: "Excited", value: 9 },
    { emoji: "😊", color: "bg-yellow-200", label: "Happy", value: 8 },
    { emoji: "😌", color: "bg-orange-200", label: "Content", value: 7 },
    { emoji: "😐", color: "bg-gray-400", label: "Neutral", value: 6 },
    { emoji: "😞", color: "bg-blue-300", label: "Sad", value: 4 },
    { emoji: "😟", color: "bg-purple-400", label: "Worried", value: 3 },
    { emoji: "😠", color: "bg-orange-500", label: "Angry", value: 2 },
    { emoji: "😡", color: "bg-red-500", label: "Furious", value: 1 },
    { emoji: "😭", color: "bg-blue-500", label: "Crying", value: 2 },
    { emoji: "😒", color: "bg-gray-600", label: "Annoyed", value: 3 },
    { emoji: "🤢", color: "bg-purple-300", label: "Sick", value: 2 },
    { emoji: "😱", color: "bg-gray-700", label: "Shocked", value: 1 },
  ];

  const progressColors = [
    "bg-teal-300", "bg-pink-300", "bg-gray-500", "bg-purple-400", "bg-gray-600", "bg-orange-500",
    "bg-cyan-400", "bg-purple-300", "bg-yellow-300", "bg-blue-400", "bg-yellow-200", "bg-red-500",
    "bg-yellow-400", "bg-cyan-300", "bg-red-600"
  ];

  const handleMoodSelect = (index: number, mood: any) => {
    setSelectedMood(index);
    // Here you could add logic to save the mood selection
  };

  const handleReflectionSubmit = () => {
    if (reflection.trim()) {
      // Here you could add logic to save the reflection
      setReflection("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-gray-50">
      <WebsiteHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-4">
              <Link to="/medbot">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Mental Health Dashboard</h1>
                <p className="text-gray-600 mt-1">Track your emotional well-being and find support</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Greeting and Reflection */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-2xl text-gray-800">Hi Bella! 👋</p>
                    <p className="text-xl text-gray-700 font-medium mt-1">How are you feeling today?</p>
                  </div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center">
                      <Heart className="w-12 h-12 text-purple-600 fill-purple-200" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-gray-800 font-semibold mb-3">
                      Take a moment to reflect and share what's on your mind.
                    </p>
                    <div className="relative">
                      <textarea
                        placeholder="Share your thoughts, feelings, or what happened today..."
                        value={reflection}
                        onChange={(e) => setReflection(e.target.value)}
                        className="w-full px-6 py-4 border-2 border-purple-200 rounded-2xl bg-purple-50 placeholder-gray-500 text-gray-800 resize-none h-32 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                      />
                      <Button 
                        onClick={handleReflectionSubmit}
                        disabled={!reflection.trim()}
                        className="absolute bottom-3 right-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Daily Mood Log */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Daily Mood Log</h2>
                </div>
                
                <p className="text-gray-600 mb-6">Select the emoji that best represents how you're feeling right now:</p>
                
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 mb-6">
                  {moodEmojis.map((mood, index) => (
                    <button
                      key={index}
                      onClick={() => handleMoodSelect(index, mood)}
                      className={`group relative w-16 h-16 rounded-2xl ${mood.color} flex items-center justify-center text-2xl border-2 transition-all duration-200 hover:scale-110 ${
                        selectedMood === index 
                          ? 'border-purple-600 ring-4 ring-purple-200 scale-110' 
                          : 'border-gray-300 hover:border-purple-400'
                      }`}
                    >
                      {mood.emoji}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs text-gray-600 font-medium whitespace-nowrap">{mood.label}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {selectedMood !== null && (
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                    <p className="text-purple-800 font-medium">
                      You selected: {moodEmojis[selectedMood].emoji} {moodEmojis[selectedMood].label}
                    </p>
                    <p className="text-purple-600 text-sm mt-1">
                      Your mood has been logged for today. Keep tracking to see patterns!
                    </p>
                  </div>
                )}
              </div>

              {/* Mood Progress */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">July Mood Progress</h3>
                  </div>
                  <Link to="/medbot/mental-health-overview">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                      View Full Overview
                    </Button>
                  </Link>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-1 h-24 rounded-lg overflow-hidden border border-gray-200">
                    {progressColors.map((color, index) => (
                      <div key={index} className={`flex-1 ${color} hover:opacity-80 transition-opacity cursor-pointer`}></div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>July 1</span>
                    <span>July 15</span>
                    <span>July 31</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Each color represents your daily mood. Click "View Full Overview" for detailed insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              
              {/* Daily Affirmations */}
              <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex-shrink-0">
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                      <Star className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Daily Affirmations</h3>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      "You are not weak for struggling; you are strong for facing your battles head-on"
                    </p>
                  </div>
                </div>

                {/* Music Player */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-orange-400 rounded-lg flex items-center justify-center">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">Marconi Union - Weightless</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-purple-500 h-2 rounded-full w-2/3"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>03:45</span>
                        <span>06:30</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-6">
                    <Button variant="ghost" size="sm" className="p-2">
                      <SkipBack className="w-5 h-5 text-gray-600" />
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3">
                      <Play className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <SkipForward className="w-5 h-5 text-gray-600" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-6">
                <Link to="/medbot/mindful-bot" className="group">
                  <div className="relative overflow-hidden bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 h-full relative overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-purple-300"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-purple-400"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-purple-200"></div>
                      </div>

                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Hand className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 mb-2">MindfulBot</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">Chat with AI companion</p>

                        {/* Animated indicator */}
                        <div className="mt-4 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-gray-600 font-medium">Available 24/7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/medbot/mental-health-resources" className="group">
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 rounded-3xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 h-full relative overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-blue-300"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-cyan-400"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-200"></div>
                      </div>

                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                          <BookOpen className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 mb-2">Resources</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">Mental health tools & guides</p>

                        {/* Resource count indicator */}
                        <div className="mt-4 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-gray-600 font-medium">50+ Resources</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  This Week
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Mood logs</span>
                    <span className="font-semibold text-gray-900">5/7 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average mood</span>
                    <span className="font-semibold text-gray-900">😊 Good</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Reflections</span>
                    <span className="font-semibold text-gray-900">3 entries</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Bot chats</span>
                    <span className="font-semibold text-gray-900">2 sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
