import express from 'express';
import { z } from 'zod';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error("❌ Missing OPENAI_API_KEY in .env");
}

// In-memory chat history (replace with DB in production)
const chatHistory: Array<{
  sessionId: string;
  botType: string;
  userMessage: string;
  botResponse: string;
  timestamp: string;
  userId?: string;
  mood?: string;
  error?: string;
}> = [];

// Validation
const ChatMessageSchema = z.object({
  message: z.string().min(1).max(2000),
  botType: z.enum(['mindful', 'medbot']),
  userId: z.string().optional(),
  sessionId: z.string(),
  mood: z.string().optional()
});

// System prompts for LLM
const SYSTEM_PROMPTS = {
  medbot: `
You are MedBot, a helpful medical assistant.
Provide evidence-based, non-diagnostic health advice.
Always include this disclaimer at the end:
"I am not a doctor. Please consult a medical professional for any medical concerns."
Keep answers concise and professional.`,
  mindful: `
You are MindfulBot, a compassionate mental wellness assistant.
Listen actively, validate feelings, and suggest coping strategies without making diagnoses.
If the user expresses suicidal thoughts, provide crisis helpline numbers immediately.
Avoid judgment and keep a warm tone.`
};

// POST /api/chat
router.post('/', async (req, res) => {
  try {
    const parseResult = ChatMessageSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ error: "Invalid input", details: parseResult.error.errors });
    }

    const { message, botType, userId, sessionId, mood } = parseResult.data;
    const systemPrompt = SYSTEM_PROMPTS[botType];

    // Call OpenAI API
    const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ]
      })
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error("LLM API error:", errorText);
      return res.status(500).json({ error: "Failed to fetch AI response" });
    }

    const data = await aiResponse.json();
    const botReply = data.choices?.[0]?.message?.content?.trim() || "I'm sorry, I couldn't process that.";

    // Save to history
    chatHistory.push({
      sessionId,
      botType,
      userMessage: message,
      botResponse: botReply,
      timestamp: new Date().toISOString(),
      userId,
      mood
    });

    res.json({ reply: botReply });

  } catch (err) {
    console.error("Error in chat route:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
