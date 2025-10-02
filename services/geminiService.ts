import { GoogleGenAI } from "@google/genai";
import type { TarotCard, SpreadPosition } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getTarotInterpretation = async (card: TarotCard, position: SpreadPosition, isReversed: boolean, question: string): Promise<string> => {
  const orientation = isReversed ? 'Reversed' : 'Upright';
  const keywords = isReversed ? (card.reversedKeywords || []) : card.keywords;

  const prompt = `You are an expert, mystical, and insightful tarot reader, grounding your interpretations in ancient wisdom while speaking to a modern audience.
The person has asked the following specific question: "${question || 'What do I need to know right now?'}"
With this question in mind, interpret the card I have drawn.

I have drawn the '${card.name}' card (${orientation}) for the position of '${position.title}'.
This position represents: ${position.prompt}.
The ancient key themes for this card in this orientation are: ${keywords.join(', ')}.

Based on all of this context—the user's question, the card's position, and its traditional meanings—provide a beautiful, flowing prose interpretation that directly addresses the user's question.
The interpretation should be about 3-4 sentences long.
Focus on empowerment, self-reflection, and positive guidance, even for challenging cards.
Do not start with "This card represents..." or "The ${card.name} means...". Dive straight into the meaning as if speaking to someone directly.`;

  const maxRetries = 2;
  const initialDelay = 2000; // 2 seconds

  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            temperature: 0.7,
            topP: 0.9,
            topK: 40,
          }
      });
      return response.text;
    } catch (error) {
      console.error(`Error fetching tarot interpretation (Attempt ${i + 1}/${maxRetries}):`, error);
      const errorMessage = (error as any)?.message || '';
      // Only retry on rate limit errors
      if (errorMessage.includes('429') && i < maxRetries - 1) {
        const delay = initialDelay * Math.pow(2, i); // Exponential backoff
        console.log(`Rate limit exceeded. Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else if (errorMessage.includes('429')) {
         return "The celestial energies are flowing too quickly. Please wait a moment.";
      } else {
        // For other errors, fail immediately
        return "The stars are cloudy at the moment. Please try again later.";
      }
    }
  }
  
  // This should only be reached if all retries fail, but we return a message from the loop.
  return "The connection to the ethereal plane was lost after several attempts. Please try again.";
};