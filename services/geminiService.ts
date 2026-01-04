import { GoogleGenAI, Type } from "@google/genai";
import { SubjectType, QuizQuestion, Language } from "../types";

// Note: process.env.API_KEY is handled externally and accessed directly when needed.

/**
 * Gets a response from the AI tutor based on chat history and language.
 */
export const getGlobalTutorResponse = async (history: { role: 'user' | 'model', text: string }[], lang: Language = Language.ZH) => {
  // Always initialize GoogleGenAI with a fresh instance inside the service function using a named parameter for apiKey.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are "The Big Family Tutor", the official AI assistant of "Big Family Education Center". 
      Expert in: Chinese, Science, Mathematics, Geography, History, and RBT (Design and Technology).
      Your core duties:
      1. Help students with academic queries in these six subjects.
      2. Tone: Friendly, professional, positive, and warm (like a big family).
      3. Use real-life examples to make knowledge easy to grasp.
      4. Crucial: ALWAYS communicate in the language with code: ${lang}. 
      5. You are an all-rounder serving students of all backgrounds globally.`,
    }
  });

  const lastMessage = history[history.length - 1];
  const response = await chat.sendMessage({ message: lastMessage.text });
  // Correctly access the .text property (not a method).
  return response.text;
};

/**
 * Generates a quiz with 5 multiple-choice questions for a specific subject.
 */
export const generateQuiz = async (subject: SubjectType, lang: Language = Language.ZH): Promise<QuizQuestion[]> => {
  // Always initialize GoogleGenAI with a fresh instance inside the service function using a named parameter for apiKey.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  const prompt = `Generate 5 high-quality multiple-choice questions for ${subject}. 
  Difficulty: Secondary school level. 
  Language: ${lang}. 
  Each question must have: a question string, 4 options, correctAnswer index (0-3), and a detailed explanation.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            correctAnswer: { type: Type.INTEGER },
            explanation: { type: Type.STRING }
          },
          required: ["question", "options", "correctAnswer", "explanation"]
        }
      }
    }
  });

  // Correctly access the .text property (not a method).
  const result = JSON.parse(response.text || '[]');
  return result;
};