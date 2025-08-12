import express from 'express';
import { z } from 'zod';

const router = express.Router();

// Environment variables for LLM integration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const DEVELOPER_WEBHOOK_URL = process.env.DEVELOPER_WEBHOOK_URL;
const DEVELOPER_EMAIL = process.env.DEVELOPER_EMAIL || 'developer@medbot.com';

// Validation schemas
const ChatMessageSchema = z.object({
  message: z.string().min(1).max(2000),
  botType: z.enum(['mindful', 'medbot']),
  userId: z.string().optional(),
  sessionId: z.string(),
  mood: z.string().optional(),
  context: z.object({
    previousMessages: z.array(z.object({
      role: z.enum(['user', 'assistant']),
      content: z.string(),
      timestamp: z.string()
    })).optional(),
    userProfile: z.object({
      age: z.number().optional(),
      conditions: z.array(z.string()).optional(),
      preferences: z.array(z.string()).optional()
    }).optional()
  }).optional()
});

// LLM Integration function
async function callLLM(prompt: string, botType: 'mindful' | 'medbot', context?: any) {
  const systemPrompts = {
    mindful: `You are MindfulBot, a compassionate AI mental health companion. You provide emotional support, mindfulness guidance, and coping strategies. Always be empathetic, non-judgmental, and supportive. If someone expresses suicidal thoughts or crisis situations, immediately provide crisis resources:
    
    🆘 National Suicide Prevention Lifeline: 988
    🆘 Crisis Text Line: Text HOME to 741741
    🆘 Emergency Services: 911
    
    Keep responses warm, conversational, and under 200 words unless explaining a technique.`,
    
    medbot: `You are MedBot, a helpful medical information assistant. You provide general health information, medication reminders, and wellness guidance. Always emphasize that you're not a replacement for professional medical advice and encourage users to consult healthcare providers for serious concerns.
    
    IMPORTANT: Never diagnose, prescribe medication, or provide emergency medical advice. For emergencies, direct users to call 911 or emergency services.
    
    Keep responses informative but accessible, under 200 words unless explaining health concepts.`
  };

  if (!OPENAI_API_KEY) {
    // Fallback responses if no API key
    const fallbackResponses = {
      mindful: [
        "I'm here to listen and support you. Can you tell me more about how you're feeling?",
        "Thank you for sharing with me. That sounds challenging. Would you like to try some breathing exercises?",
        "It's okay to feel this way. You're not alone. What would help you feel better right now?",
        "I hear you. Sometimes just talking about our feelings can help. How can I support you today?"
      ],
      medbot: [
        "I'm here to help with your health questions. What would you like to know about today?",
        "Thank you for reaching out. For specific medical concerns, I recommend consulting with your healthcare provider.",
        "I can provide general health information. What topic would you like to learn about?",
        "Health and wellness are important. How can I assist you with your health goals today?"
      ]
    };
    
    return fallbackResponses[botType][Math.floor(Math.random() * fallbackResponses[botType].length)];
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompts[botType] },
          ...(context?.previousMessages || []),
          { role: 'user', content: prompt }
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`LLM API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "I'm here to help, but I'm having trouble responding right now. Please try again.";
    
  } catch (error) {
    console.error('LLM API Error:', error);
    return "I'm experiencing some technical difficulties. Please try again in a moment.";
  }
}

// Function to notify developer
async function notifyDeveloper(data: {
  botType: string;
  userMessage: string;
  botResponse: string;
  sessionId: string;
  timestamp: string;
  userId?: string;
  mood?: string;
}) {
  try {
    // Email notification (if configured)
    if (DEVELOPER_EMAIL) {
      console.log('📧 Developer Notification:', {
        to: DEVELOPER_EMAIL,
        subject: `${data.botType.toUpperCase()} Chat Activity`,
        message: `New chat interaction:
        
Bot: ${data.botType}
Session: ${data.sessionId}
User ID: ${data.userId || 'Anonymous'}
Mood: ${data.mood || 'Not specified'}
Time: ${data.timestamp}

User Message: ${data.userMessage}
Bot Response: ${data.botResponse}
        `
      });
    }

    // Webhook notification (if configured)
    if (DEVELOPER_WEBHOOK_URL) {
      await fetch(DEVELOPER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'chat_interaction',
          ...data
        }),
      });
    }

    // Log to console for development
    console.log('🤖 Chat Interaction Logged:', {
      botType: data.botType,
      sessionId: data.sessionId,
      timestamp: data.timestamp,
      userMessageLength: data.userMessage.length,
      mood: data.mood
    });

  } catch (error) {
    console.error('Failed to notify developer:', error);
  }
}

// Chat endpoint
router.post('/chat', async (req, res) => {
  try {
    const validatedData = ChatMessageSchema.parse(req.body);
    const { message, botType, userId, sessionId, mood, context } = validatedData;

    // Generate LLM response
    const botResponse = await callLLM(message, botType, context);

    // Notify developer
    await notifyDeveloper({
      botType,
      userMessage: message,
      botResponse,
      sessionId,
      timestamp: new Date().toISOString(),
      userId,
      mood
    });

    // Determine if response should show special actions
    const showCalmingActions = botType === 'mindful' && (
      message.toLowerCase().includes('anxious') || 
      message.toLowerCase().includes('stressed') ||
      message.toLowerCase().includes('overwhelmed') ||
      botResponse.toLowerCase().includes('breathing') ||
      botResponse.toLowerCase().includes('calm')
    );

    const showMoodCheck = botType === 'mindful' && (
      botResponse.toLowerCase().includes('how are you feeling') ||
      botResponse.toLowerCase().includes('mood') ||
      !mood
    );

    res.json({
      success: true,
      response: {
        message: botResponse,
        showCalmingActions,
        showMoodCheck,
        timestamp: new Date().toISOString(),
        sessionId
      }
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Invalid request data',
        details: error.errors
      });
    }

    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Sorry, I\'m having trouble responding right now. Please try again.'
    });
  }
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    llmConfigured: !!OPENAI_API_KEY,
    notificationsConfigured: !!(DEVELOPER_WEBHOOK_URL || DEVELOPER_EMAIL)
  });
});

// Get chat history endpoint
router.get('/history/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  
  // In a real app, you'd fetch from database
  // For now, return empty array
  res.json({
    success: true,
    history: [],
    sessionId
  });
});

export default router;
