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
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="bg-purple-100 rounded-t-none -mx-4 px-4 py-4 mb-0">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="w-11 h-11 bg-black rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-black">Mindful bot</h1>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-purple-100 -mx-4 px-4 pb-8 min-h-[600px] flex flex-col">
          
          {/* Conversation Flow */}
          <div className="space-y-4 flex-1">
            {conversationFlow.map((message, index) => (
              <div key={index} className="flex flex-col">
                {message.type === "bot" ? (
                  <div className={`max-w-xs ${message.isGreeting ? 'self-start' : 'self-start'}`}>
                    <div className="bg-orange-100 rounded-3xl p-4 shadow-sm border border-black/10">
                      <p className="text-black text-xs font-bold leading-relaxed whitespace-pre-line">
                        {message.message}
                      </p>
                    </div>
                    
                    {/* Quick Actions for greeting */}
                    {message.isGreeting && (
                      <div className="bg-orange-100 rounded-3xl p-4 mt-4 shadow-sm border border-black/10">
                        <h3 className="text-black text-xs font-bold mb-3">Quick Actions</h3>
                        <div className="space-y-2">
                          {quickActions.map((action, actionIndex) => (
                            <Button
                              key={actionIndex}
                              variant="outline"
                              size="sm"
                              className="w-full bg-red-200 border-black text-black text-xs font-bold hover:bg-red-300 rounded-full"
                            >
                              {action}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Calming Actions for final bot message */}
                    {message.showCalmingActions && (
                      <div className="flex flex-col items-center mt-4 space-y-2">
                        {calmingActions.map((action, actionIndex) => (
                          <Button
                            key={actionIndex}
                            variant="outline"
                            size="sm"
                            className="bg-red-200 border-black text-black text-xs font-bold hover:bg-red-300 rounded-full px-6"
                          >
                            {action}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="max-w-xs self-end">
                    <div className="bg-purple-200 rounded-3xl p-3 shadow-sm">
                      <p className="text-black text-xs font-bold">
                        {message.message}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            <div className="flex items-center gap-1 self-start">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-100"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>

        {/* Chat Input Section */}
        <div className="bg-purple-200 -mx-4 px-4 py-4 rounded-b-3xl">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="opacity-50">
              <Plus className="w-4 h-4" />
            </Button>
            
            <div className="flex-1 bg-white rounded-3xl px-4 py-2 flex items-center gap-3">
              <input
                type="text"
                placeholder="Type here ...."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 text-black text-sm font-bold placeholder:text-black placeholder:opacity-40 outline-none"
              />
            </div>

            <Button variant="ghost" size="sm" className="opacity-50">
              <Send className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="sm" className="opacity-50">
              <Camera className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="sm" className="opacity-50">
              <Mic className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
