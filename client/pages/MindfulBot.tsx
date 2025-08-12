import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Plus, Send, Camera, Mic, Brain, Wifi, WifiOff } from "lucide-react";
import { useState } from "react";
import { useChat } from "@/hooks/use-chat";
import { Link } from "react-router-dom";

export default function MindfulBot() {
  const [inputMessage, setInputMessage] = useState("");
  
  const {
    messages,
    isTyping,
    error,
    sessionId,
    currentMood,
    messagesEndRef,
    sendMessage,
    handleQuickAction,
    handleMoodSelection,
    handleCalmingAction,
    clearChat
  } = useChat({
    botType: 'mindful',
    initialGreeting: "Hello! I'm MindfulBot, your AI mental health companion. 🤗\n\nI'm here to provide support, listen without judgment, and help you explore coping strategies. How are you feeling today?"
  });

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

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const message = inputMessage;
    setInputMessage("");
    await sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
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
              <Link to="/medbot/mental-health">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">MindfulBot</h1>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-gray-600">AI Mental Health Companion • Session: {sessionId.slice(-8)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {error ? (
                  <div className="flex items-center gap-1 text-red-600">
                    <WifiOff className="w-4 h-4" />
                    <span className="text-sm">Connection Error</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-green-600">
                    <Wifi className="w-4 h-4" />
                    <span className="text-sm">Connected</span>
                  </div>
                )}
                <Button 
                  onClick={clearChat}
                  variant="outline" 
                  size="sm"
                  className="text-gray-600 hover:text-gray-800"
                >
                  New Chat
                </Button>
              </div>
            </div>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2">
                <WifiOff className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-red-800 font-medium">Connection Issue</p>
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              </div>
            </div>
          )}

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
                                  disabled={isTyping}
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
                                  disabled={isTyping}
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
                                  disabled={isTyping}
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
                      <span className="text-gray-600 text-sm ml-2">MindfulBot is thinking...</span>
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
                  disabled={isTyping}
                />
              </div>

              <Button
                onClick={handleSendMessage}
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
                disabled={isTyping}
              >
                🧘 Start Meditation
              </Button>
              <Button
                onClick={() => handleQuickAction("I need a mood check")}
                variant="outline"
                size="sm"
                className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 rounded-full"
                disabled={isTyping}
              >
                🌱 Mood Check
              </Button>
              <Button
                onClick={() => handleQuickAction("I want to journal")}
                variant="outline"
                size="sm"
                className="bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 rounded-full"
                disabled={isTyping}
              >
                📝 Journal Entry
              </Button>
              <Button
                onClick={() => handleQuickAction("I need crisis support")}
                variant="outline"
                size="sm"
                className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100 rounded-full"
                disabled={isTyping}
              >
                🆘 Crisis Support
              </Button>
            </div>

            {/* Connection Status */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                {isTyping ? "MindfulBot is responding..." : 
                 error ? "Reconnecting..." : 
                 `Connected • Session ${sessionId.slice(-8)}`}
                {currentMood && ` • Mood: ${currentMood}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
