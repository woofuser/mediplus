import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Plus, Send, Camera, Mic, Brain, Heart, Music, FileText, Smile, Frown, Meh } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  type: "bot" | "user";
  message: string;
  timestamp: Date;
  isGreeting?: boolean;
  showQuickActions?: boolean;
  showCalmingActions?: boolean;
  showMoodCheck?: boolean;
}

interface BotResponse {
  message: string;
  delay?: number;
  showQuickActions?: boolean;
  showCalmingActions?: boolean;
  showMoodCheck?: boolean;
}

export default function MindfulBot() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMood, setCurrentMood] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    "I'm feeling anxious",
    "I need breathing exercises", 
    "I want to meditate",
    "Crisis support needed"
  ];

  const calmingActions = [
    "Start 5-minute breathing exercise",
    "Play calming music",
    "Write in mindfulness journal",
    "Try progressive muscle relaxation"
  ];

  const moodOptions = [
    { emoji: "😊", label: "Great", value: "great", color: "bg-green-100 border-green-300" },
    { emoji: "🙂", label: "Good", value: "good", color: "bg-blue-100 border-blue-300" },
    { emoji: "😐", label: "Okay", value: "okay", color: "bg-yellow-100 border-yellow-300" },
    { emoji: "😟", label: "Not great", value: "bad", color: "bg-orange-100 border-orange-300" },
    { emoji: "😢", label: "Struggling", value: "struggling", color: "bg-red-100 border-red-300" }
  ];

  // Bot response logic based on user input
  const getBotResponse = (userMessage: string, userMood?: string): BotResponse => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Mood-based responses
    if (userMood) {
      switch (userMood) {
        case "great":
          return {
            message: "That's wonderful to hear! 🌟 It's great when we're feeling positive. Would you like to explore some activities to maintain this good mood, or perhaps help others who might be struggling?",
            showCalmingActions: true
          };
        case "good":
          return {
            message: "I'm glad you're doing well! 😊 Maintaining good mental health is important. Would you like some suggestions for keeping up this positive momentum?",
            showCalmingActions: true
          };
        case "okay":
          return {
            message: "Thank you for being honest. 'Okay' is perfectly valid - we don't always have to feel amazing. Sometimes we're just getting through the day, and that's enough. Is there anything specific on your mind?",
            delay: 1000
          };
        case "bad":
          return {
            message: "I'm sorry you're not feeling great right now. 💙 That takes courage to acknowledge. Remember that difficult feelings are temporary, even when they don't feel like it. Would you like to try something that might help you feel a bit better?",
            showCalmingActions: true,
            delay: 1500
          };
        case "struggling":
          return {
            message: "I hear you, and I want you to know that you're not alone in this. 💜 Reaching out takes strength. Your feelings are valid, and it's okay to not be okay. Would you like to talk about what's going on, or would you prefer to try some coping techniques?",
            showCalmingActions: true,
            delay: 2000
          };
      }
    }

    // Keyword-based responses
    if (lowerMessage.includes("anxious") || lowerMessage.includes("anxiety")) {
      return {
        message: "I understand that anxiety can feel overwhelming. Let's try to ground you in the present moment. Can you name 5 things you can see around you right now? This is called the 5-4-3-2-1 grounding technique.",
        showCalmingActions: true,
        delay: 1000
      };
    }

    if (lowerMessage.includes("sad") || lowerMessage.includes("depressed") || lowerMessage.includes("down")) {
      return {
        message: "I'm really sorry you're feeling this way. Depression can make everything feel heavy and difficult. Please remember that these feelings, while very real and valid, are not permanent. Have you been able to do any small self-care activities today?",
        showCalmingActions: true,
        delay: 1500
      };
    }

    if (lowerMessage.includes("stress") || lowerMessage.includes("overwhelmed")) {
      return {
        message: "Stress and feeling overwhelmed are very common experiences. Let's take this one step at a time. Sometimes when everything feels like too much, focusing on just breathing can help create some space. Would you like to try a quick breathing exercise?",
        showCalmingActions: true,
        delay: 1000
      };
    }

    if (lowerMessage.includes("sleep") || lowerMessage.includes("tired") || lowerMessage.includes("insomnia")) {
      return {
        message: "Sleep issues can really affect how we feel during the day. Good sleep hygiene is so important for mental health. Have you been having trouble falling asleep, staying asleep, or both?",
        delay: 800
      };
    }

    if (lowerMessage.includes("work") || lowerMessage.includes("job")) {
      return {
        message: "Work-related stress is very common. It's important to find ways to create boundaries between work and personal time. What aspect of work has been most challenging for you lately?",
        delay: 800
      };
    }

    if (lowerMessage.includes("thank") || lowerMessage.includes("grateful")) {
      return {
        message: "You're very welcome! 😊 I'm here to support you whenever you need. Practicing gratitude, like you just did, is actually a powerful tool for mental wellness. How are you feeling right now?",
        showMoodCheck: true,
        delay: 800
      };
    }

    if (lowerMessage.includes("help") || lowerMessage.includes("crisis") || lowerMessage.includes("emergency")) {
      return {
        message: "If you're experiencing a mental health crisis, please reach out for immediate help:\n\n🆘 National Suicide Prevention Lifeline: 988\n🆘 Crisis Text Line: Text HOME to 741741\n🆘 Emergency Services: 911\n\nYou deserve support and care. Please don't hesitate to reach out.",
        delay: 1000
      };
    }

    // Default responses for general conversation
    const defaultResponses = [
      {
        message: "I'm here to listen and support you. Can you tell me a bit more about how you're feeling today?",
        showMoodCheck: true,
        delay: 800
      },
      {
        message: "Thank you for sharing with me. It sounds like you have a lot on your mind. Would you like to explore some coping strategies that might help?",
        showCalmingActions: true,
        delay: 1000
      },
      {
        message: "I appreciate you opening up. Mental health is a journey, and every step matters. What would feel most helpful for you right now?",
        showQuickActions: true,
        delay: 800
      },
      {
        message: "That's a valid way to feel. Sometimes just acknowledging our emotions can be the first step toward feeling better. How would you rate your mood today?",
        showMoodCheck: true,
        delay: 1000
      }
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  // Initialize with greeting
  useEffect(() => {
    const greeting: Message = {
      id: "greeting",
      type: "bot",
      message: "Hello! I'm MindfulBot, your AI mental health companion. 🤗\n\nI'm here to provide support, listen without judgment, and help you explore coping strategies. How are you feeling today?",
      timestamp: new Date(),
      isGreeting: true,
      showMoodCheck: true
    };
    setMessages([greeting]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: "user",
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Get bot response
    const response = getBotResponse(inputMessage, currentMood || undefined);
    
    // Simulate typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: "bot",
        message: response.message,
        timestamp: new Date(),
        showQuickActions: response.showQuickActions,
        showCalmingActions: response.showCalmingActions,
        showMoodCheck: response.showMoodCheck
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, response.delay || 1500);
  };

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
    setTimeout(() => sendMessage(), 100);
  };

  const handleCalmingAction = (action: string) => {
    const responses = {
      "Start 5-minute breathing exercise": "Let's begin a breathing exercise. Breathe in slowly for 4 counts... hold for 4... breathe out for 6. Focus only on your breath. You're doing great! 🌸",
      "Play calming music": "🎵 I've started a calming playlist for you. Close your eyes and let the music wash over you. Music can be incredibly healing for the mind and soul.",
      "Write in mindfulness journal": "📝 Journaling is wonderful for mental health! Try writing about: What am I feeling right now? What am I grateful for today? What do I need in this moment?",
      "Try progressive muscle relaxation": "Let's try progressive muscle relaxation. Start by tensing your toes for 5 seconds, then release. Feel the tension leave your body. Now move to your calves..."
    };

    const botMessage: Message = {
      id: `bot-${Date.now()}`,
      type: "bot",
      message: responses[action as keyof typeof responses] || "That's a great choice for self-care! 💜",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const handleMoodSelection = (mood: string, label: string) => {
    setCurrentMood(mood);
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: "user",
      message: `I'm feeling ${label.toLowerCase()} today.`,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Get mood-based response
    const response = getBotResponse("", mood);
    
    setTimeout(() => {
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: "bot",
        message: response.message,
        timestamp: new Date(),
        showCalmingActions: response.showCalmingActions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, response.delay || 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

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
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">MindfulBot</h1>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-gray-600">Online • AI Mental Health Companion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Container */}
          <div className="bg-gradient-to-b from-purple-50 to-white rounded-2xl border border-purple-200 shadow-lg p-6 mb-6">
            
            {/* Messages */}
            <div className="space-y-6 min-h-[500px] max-h-[600px] overflow-y-auto pr-2">
              {messages.map((message) => (
                <div key={message.id} className="flex flex-col">
                  {message.type === "bot" ? (
                    <div className="max-w-md md:max-w-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-3xl rounded-tl-lg p-6 shadow-md border border-orange-300">
                          <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-line">
                            {message.message}
                          </p>
                          <div className="text-xs text-gray-500 mt-2">
                            {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </div>
                        </div>
                      </div>
                      
                      {/* Quick Actions */}
                      {(message.isGreeting || message.showQuickActions) && (
                        <div className="ml-11 mb-4">
                          <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl p-4 shadow-md border border-orange-300">
                            <h3 className="text-gray-800 text-sm font-bold mb-3">Quick Actions</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {quickActions.map((action, actionIndex) => (
                                <Button
                                  key={actionIndex}
                                  onClick={() => handleQuickAction(action)}
                                  variant="outline"
                                  size="sm"
                                  className="bg-white/80 border-purple-300 text-gray-700 text-xs hover:bg-purple-50 rounded-full transition-all duration-200 hover:scale-105"
                                >
                                  {action}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Mood Check */}
                      {message.showMoodCheck && (
                        <div className="ml-11 mb-4">
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-4 shadow-md border border-blue-200">
                            <h3 className="text-gray-800 text-sm font-bold mb-3">How are you feeling?</h3>
                            <div className="grid grid-cols-5 gap-2">
                              {moodOptions.map((mood) => (
                                <Button
                                  key={mood.value}
                                  onClick={() => handleMoodSelection(mood.value, mood.label)}
                                  variant="outline"
                                  className={`${mood.color} text-gray-700 text-xs hover:scale-110 transition-all duration-200 flex flex-col items-center p-3 h-auto`}
                                >
                                  <span className="text-lg mb-1">{mood.emoji}</span>
                                  <span>{mood.label}</span>
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Calming Actions */}
                      {message.showCalmingActions && (
                        <div className="ml-11 mb-4">
                          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-4 shadow-md border border-green-200">
                            <h3 className="text-gray-800 text-sm font-bold mb-3">Try these activities</h3>
                            <div className="space-y-2">
                              {calmingActions.map((action, actionIndex) => (
                                <Button
                                  key={actionIndex}
                                  onClick={() => handleCalmingAction(action)}
                                  variant="outline"
                                  size="sm"
                                  className="w-full bg-white/80 border-green-300 text-gray-700 text-xs hover:bg-green-50 rounded-full transition-all duration-200 hover:scale-105"
                                >
                                  {action}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="max-w-md md:max-w-lg ml-auto">
                      <div className="flex items-start gap-3 justify-end">
                        <div className="bg-gradient-to-r from-purple-200 to-purple-300 rounded-3xl rounded-tr-lg p-4 shadow-md border border-purple-400">
                          <p className="text-gray-800 text-sm">
                            {message.message}
                          </p>
                          <div className="text-xs text-gray-600 mt-2 text-right">
                            {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">U</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-3xl rounded-tl-lg p-4 shadow-md border border-orange-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                      <span className="text-gray-600 text-sm ml-2">MindfulBot is typing...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat Input Section */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-4">
            <div className="flex items-end gap-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                <Plus className="w-5 h-5" />
              </Button>
              
              <div className="flex-1 bg-gray-50 rounded-2xl px-6 py-3 border border-gray-200 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-200">
                <textarea
                  placeholder="Type your message here... (Press Enter to send)"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full text-gray-800 text-sm placeholder:text-gray-500 outline-none bg-transparent resize-none min-h-[20px] max-h-[100px]"
                  rows={1}
                />
              </div>

              <Button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Chat Features */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                onClick={() => handleQuickAction("I want to meditate")}
                variant="outline"
                size="sm"
                className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 rounded-full"
              >
                🧘 Start Meditation
              </Button>
              <Button
                onClick={() => handleQuickAction("I need a mood check")}
                variant="outline"
                size="sm"
                className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 rounded-full"
              >
                🌱 Mood Check
              </Button>
              <Button
                onClick={() => handleQuickAction("I want to journal")}
                variant="outline"
                size="sm"
                className="bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 rounded-full"
              >
                📝 Journal Entry
              </Button>
              <Button
                onClick={() => handleQuickAction("I need crisis support")}
                variant="outline"
                size="sm"
                className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100 rounded-full"
              >
                🆘 Crisis Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
