import { WebsiteHeader } from "@/components/ui/website-header";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Plus, Send, Camera, Mic, Heart, Wifi, WifiOff, Pill, Activity, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useChat } from "@/hooks/use-chat";
import { Link } from "react-router-dom";

export default function MedBotChat() {
  const [inputMessage, setInputMessage] = useState("");
  
  const {
    messages,
    isTyping,
    error,
    sessionId,
    messagesEndRef,
    sendMessage,
    handleQuickAction,
    clearChat
  } = useChat({
    botType: 'medbot',
    initialGreeting: "Hello! I'm MedBot, your medical information assistant. 🏥\n\nI can help with general health questions, medication information, and wellness guidance. Please remember that I'm not a replacement for professional medical advice.\n\nWhat health topic can I help you with today?"
  });

  const quickActions = [
    "Tell me about my medications",
    "What are healthy lifestyle tips?",
    "I have symptoms to discuss",
    "Blood pressure information",
    "Diabetes management help",
    "Exercise recommendations"
  ];

  const medicalTopics = [
    { icon: Pill, label: "Medications", action: "Tell me about medication management" },
    { icon: Activity, label: "Vital Signs", action: "Help me understand my vital signs" },
    { icon: Heart, label: "Heart Health", action: "I want to learn about heart health" },
    { icon: AlertCircle, label: "Symptoms", action: "I have some symptoms I'd like to discuss" }
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <WebsiteHeader />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-4">
              <Link to="/medbot">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">MedBot</h1>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-gray-600">AI Medical Assistant • Session: {sessionId.slice(-8)}</p>
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

          {/* Medical Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-800">Medical Disclaimer</h3>
                <p className="text-amber-700 text-sm mt-1">
                  This AI assistant provides general health information only. Always consult with healthcare professionals for medical advice, diagnosis, or treatment. In case of emergency, call 911 immediately.
                </p>
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
          <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl border border-blue-200 shadow-lg p-6 mb-6">
            
            {/* Messages */}
            <div className="space-y-6 min-h-[500px] max-h-[600px] overflow-y-auto pr-2">
              {messages.map((message) => (
                <div key={message.id} className="flex flex-col">
                  {message.type === "bot" ? (
                    <div className="max-w-md md:max-w-lg">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <Heart className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-3xl rounded-tl-lg p-6 shadow-md border border-blue-300">
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
                          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-4 shadow-md border border-blue-300">
                            <h3 className="text-gray-800 text-sm font-bold mb-3">How can I help you today?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {quickActions.map((action, actionIndex) => (
                                <Button
                                  key={actionIndex}
                                  onClick={() => handleQuickAction(action)}
                                  variant="outline"
                                  size="sm"
                                  className="bg-white/80 border-blue-300 text-gray-700 text-xs hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-105"
                                  disabled={isTyping}
                                >
                                  {action}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Medical Topics */}
                      {message.isGreeting && (
                        <div className="ml-11 mb-4">
                          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-4 shadow-md border border-green-200">
                            <h3 className="text-gray-800 text-sm font-bold mb-3">Popular Topics</h3>
                            <div className="grid grid-cols-2 gap-3">
                              {medicalTopics.map((topic, index) => (
                                <Button
                                  key={index}
                                  onClick={() => handleQuickAction(topic.action)}
                                  variant="outline"
                                  className="bg-white/80 border-green-300 text-gray-700 text-xs hover:bg-green-50 rounded-xl p-3 h-auto flex flex-col items-center gap-2"
                                  disabled={isTyping}
                                >
                                  <topic.icon className="w-5 h-5" />
                                  <span>{topic.label}</span>
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
                        <div className="bg-gradient-to-r from-green-200 to-green-300 rounded-3xl rounded-tr-lg p-4 shadow-md border border-green-400">
                          <p className="text-gray-800 text-sm">
                            {message.message}
                          </p>
                          <div className="text-xs text-gray-600 mt-2 text-right">
                            {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-3xl rounded-tl-lg p-4 shadow-md border border-blue-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                      <span className="text-gray-600 text-sm ml-2">MedBot is analyzing...</span>
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
              
              <div className="flex-1 bg-gray-50 rounded-2xl px-6 py-3 border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
                <textarea
                  placeholder="Ask me about medications, symptoms, or health information... (Press Enter to send)"
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
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Chat Features */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                onClick={() => handleQuickAction("What medications should I take for high blood pressure?")}
                variant="outline"
                size="sm"
                className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 rounded-full"
                disabled={isTyping}
              >
                💊 Medications
              </Button>
              <Button
                onClick={() => handleQuickAction("Tell me about healthy diet tips")}
                variant="outline"
                size="sm"
                className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 rounded-full"
                disabled={isTyping}
              >
                🥗 Nutrition
              </Button>
              <Button
                onClick={() => handleQuickAction("How can I improve my heart health?")}
                variant="outline"
                size="sm"
                className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100 rounded-full"
                disabled={isTyping}
              >
                ❤️ Heart Health
              </Button>
              <Button
                onClick={() => handleQuickAction("I need emergency medical information")}
                variant="outline"
                size="sm"
                className="bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100 rounded-full"
                disabled={isTyping}
              >
                🚨 Emergency Info
              </Button>
            </div>

            {/* Connection Status */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                {isTyping ? "MedBot is analyzing your question..." : 
                 error ? "Reconnecting..." : 
                 `Connected • Session ${sessionId.slice(-8)}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
