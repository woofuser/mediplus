import { useState, useCallback, useRef, useEffect } from 'react';

export interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  message: string;
  timestamp: Date;
  isGreeting?: boolean;
  showQuickActions?: boolean;
  showCalmingActions?: boolean;
  showMoodCheck?: boolean;
}

export interface ChatHookOptions {
  botType: 'mindful' | 'medbot';
  userId?: string;
  initialGreeting?: string;
}

export interface ChatContext {
  previousMessages: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
  }>;
  userProfile?: {
    age?: number;
    conditions?: string[];
    preferences?: string[];
  };
}

export function useChat({ botType, userId, initialGreeting }: ChatHookOptions) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [currentMood, setCurrentMood] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize with greeting
  useEffect(() => {
    if (initialGreeting && messages.length === 0) {
      const greeting: ChatMessage = {
        id: 'greeting',
        type: 'bot',
        message: initialGreeting,
        timestamp: new Date(),
        isGreeting: true,
        showMoodCheck: botType === 'mindful'
      };
      setMessages([greeting]);
    }
  }, [initialGreeting, botType, messages.length]);

  // Build context from recent messages
  const buildContext = useCallback((): ChatContext => {
    const recentMessages = messages.slice(-10).map(msg => ({
      role: msg.type === 'user' ? 'user' as const : 'assistant' as const,
      content: msg.message,
      timestamp: msg.timestamp.toISOString()
    }));

    return {
      previousMessages: recentMessages,
      userProfile: {
        // Add any user profile data here
      }
    };
  }, [messages]);

  // Send message to AI
  const sendMessage = useCallback(async (message: string, mood?: string) => {
    if (!message.trim()) return;

    setError(null);
    
    // Add user message
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      message: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    if (mood) {
      setCurrentMood(mood);
    }

    try {
      const context = buildContext();
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          botType,
          userId,
          sessionId,
          mood: mood || currentMood,
          context
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to get response');
      }

      // Add bot response
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        message: data.response.message,
        timestamp: new Date(),
        showCalmingActions: data.response.showCalmingActions,
        showMoodCheck: data.response.showMoodCheck
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Chat error:', error);
      setError('Sorry, I\'m having trouble responding right now. Please try again.');
      
      // Add error message
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        type: 'bot',
        message: 'I apologize, but I\'m experiencing some technical difficulties. Please try again in a moment.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [botType, userId, sessionId, currentMood, buildContext]);

  // Quick action handler
  const handleQuickAction = useCallback((action: string) => {
    sendMessage(action);
  }, [sendMessage]);

  // Mood selection handler
  const handleMoodSelection = useCallback((mood: string, label: string) => {
    const moodMessage = `I'm feeling ${label.toLowerCase()} today.`;
    sendMessage(moodMessage, mood);
  }, [sendMessage]);

  // Calming action handler
  const handleCalmingAction = useCallback((action: string) => {
    const responses = {
      "Start 5-minute breathing exercise": "I'd like to do a breathing exercise",
      "Play calming music": "Can you help me with calming music?",
      "Write in mindfulness journal": "I want to do some journaling",
      "Try progressive muscle relaxation": "I'd like to try muscle relaxation"
    };

    const message = responses[action as keyof typeof responses] || action;
    sendMessage(message);
  }, [sendMessage]);

  // Clear chat
  const clearChat = useCallback(() => {
    setMessages([]);
    setCurrentMood(null);
    setError(null);
    
    if (initialGreeting) {
      const greeting: ChatMessage = {
        id: 'greeting-new',
        type: 'bot',
        message: initialGreeting,
        timestamp: new Date(),
        isGreeting: true,
        showMoodCheck: botType === 'mindful'
      };
      setMessages([greeting]);
    }
  }, [initialGreeting, botType]);

  return {
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
    clearChat,
    setCurrentMood
  };
}
