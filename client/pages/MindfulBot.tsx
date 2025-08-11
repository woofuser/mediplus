import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Plus, Send, Camera, Mic, Brain } from "lucide-react";
import { useState } from "react";

export default function MindfulBot() {
  const [inputMessage, setInputMessage] = useState("");

  const quickActions = [
    "Breathing Exercises",
    "Quick Calm Music", 
    "Crisis Support – 1771"
  ];

  const calmingActions = [
    "Do a breathing exercise",
    "Play Quick Calm Music",
    "Write your thoughts down"
  ];

  const conversationFlow = [
    {
      type: "bot",
      message: "Hi, how are you feeling today?",
      isGreeting: true
    },
    {
      type: "user", 
      message: "I'm feeling really overwhelmed now."
    },
    {
      type: "bot",
      message: "I am really sorry you're feeling this way. You're not alone. Would you like to talk about it?\n\nIs there something that happened that might be weighing on you?"
    },
    {
      type: "user",
      message: "I don't know."
    },
    {
      type: "bot",
      message: "That is totally okay. Sometimes we just feel off, and it's hard to explain why.\n\nWould you like to try something calming while we sit with this feeling?",
      showCalmingActions: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-25 to-white">
      <WebsiteHeader />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">MindfulBot</h1>
                <p className="text-gray-600 mt-1">Your AI mental health companion</p>
              </div>
            </div>
          </div>

          {/* Chat Container */}
          <div className="bg-gradient-to-b from-purple-50 to-white rounded-2xl border border-purple-200 shadow-lg p-6 mb-6">

            {/* Conversation Flow */}
            <div className="space-y-6 min-h-[500px] max-h-[600px] overflow-y-auto">
            {conversationFlow.map((message, index) => (
              <div key={index} className="flex flex-col">
                {message.type === "bot" ? (
                  <div className="max-w-md md:max-w-lg">
                    <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-3xl p-6 shadow-md border border-orange-300">
                      <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-line">
                        {message.message}
                      </p>
                    </div>
                    
                    {/* Quick Actions for greeting */}
                    {message.isGreeting && (
                      <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-3xl p-6 mt-4 shadow-md border border-orange-300">
                        <h3 className="text-gray-800 text-sm font-bold mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                          {quickActions.map((action, actionIndex) => (
                            <Button
                              key={actionIndex}
                              variant="outline"
                              className="w-full bg-gradient-to-r from-red-200 to-red-300 border-red-400 text-gray-800 text-sm font-medium hover:from-red-300 hover:to-red-400 rounded-full py-3 transition-all duration-200 hover:scale-105"
                            >
                              {action}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Calming Actions for final bot message */}
                    {message.showCalmingActions && (
                      <div className="flex flex-col items-center mt-6 space-y-3">
                        {calmingActions.map((action, actionIndex) => (
                          <Button
                            key={actionIndex}
                            variant="outline"
                            className="bg-gradient-to-r from-red-200 to-red-300 border-red-400 text-gray-800 text-sm font-medium hover:from-red-300 hover:to-red-400 rounded-full px-8 py-3 transition-all duration-200 hover:scale-105 shadow-md"
                          >
                            {action}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="max-w-md md:max-w-lg ml-auto">
                    <div className="bg-gradient-to-r from-purple-200 to-purple-300 rounded-3xl p-4 shadow-md border border-purple-400">
                      <p className="text-gray-800 text-sm">
                        {message.message}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

              {/* Typing Indicator */}
              <div className="flex items-center gap-2 ml-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                <span className="text-gray-500 text-sm ml-2">MindfulBot is typing...</span>
              </div>
            </div>
          </div>

          {/* Chat Input Section */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                <Plus className="w-5 h-5" />
              </Button>

              <div className="flex-1 bg-gray-50 rounded-2xl px-6 py-3 flex items-center gap-3 border border-gray-200 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-200">
                <input
                  type="text"
                  placeholder="Type your message here..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 text-gray-800 text-sm placeholder:text-gray-500 outline-none bg-transparent"
                />
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-purple-600 hover:text-purple-800 hover:bg-purple-100"
              >
                <Send className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <Camera className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <Mic className="w-5 h-5" />
              </Button>
            </div>

            {/* Chat Features */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 rounded-full"
              >
                🧘 Start Meditation
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 rounded-full"
              >
                🌱 Mood Check
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 rounded-full"
              >
                📝 Journal Entry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
