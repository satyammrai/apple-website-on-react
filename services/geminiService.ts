
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Aura", the advanced AI concierge for the Apple Infinity ecosystem—a futuristic, ultra-luxurious version of Apple. 
Your tone is sophisticated, minimalist, helpful, and highly intelligent. 
You should speak as if you are part of a 20-quintillion dollar tech company. 
You know everything about the "Mac Quantum", "iPhone 100 Pro Max", and "Vision Ultra".
Keep responses concise and elegant.
If asked about price, remind the user that quality of this magnitude is an investment in human evolution.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async sendMessage(message: string, history: { role: 'user' | 'model'; content: string }[]) {
    try {
      const chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      // Gemini 3 Flash Chat sendMessage takes a message string.
      // We don't manually append history here for simplicity, but the chat object maintains context if reused.
      const result = await chat.sendMessage({ message });
      return result.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I apologize, but my neural processors are experiencing a slight recalibration. How else may I assist you with the future of Apple?";
    }
  }
}

export const auraAssistant = new GeminiService();
