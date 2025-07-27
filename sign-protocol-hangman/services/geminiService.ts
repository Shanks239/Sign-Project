import { GoogleGenAI, Type } from "@google/genai";
import { WordData } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. Using fallback words. For dynamic content, please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const wordSchema = {
    type: Type.OBJECT,
    properties: {
        word: {
            type: Type.STRING,
            description: "An uppercase English word or phrase between 5 and 25 characters total. It must be strictly related to the category and Sign Protocol. Phrases should use single spaces."
        },
        hint: {
            type: Type.STRING,
            description: "A concise, clever hint for the word, no longer than 15 words."
        }
    },
    required: ["word", "hint"]
};

export const generateWord = async (category: string): Promise<WordData | null> => {
    if (!API_KEY) {
        return null;
    }

    try {
        const prompt = `You are an expert on Sign Protocol (sign.global) and its documentation. Your task is to create a hangman word or phrase based on its specific terminology. Generate a word/phrase and a clever hint for the category: "${category}". The word/phrase must be an uppercase string. If it's a phrase, use single spaces.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: wordSchema,
                temperature: 1.2,
            }
        });

        const jsonString = response.text.trim();
        const generatedWordData = JSON.parse(jsonString);
        
        // Basic validation
        if (generatedWordData.word && generatedWordData.hint && /^[A-Z ]+$/.test(generatedWordData.word)) {
            return {
                word: generatedWordData.word.trim().replace(/\s+/g, ' '),
                hint: generatedWordData.hint,
            };
        } else {
            console.error("Gemini API returned invalid data format:", generatedWordData);
            return null;
        }

    } catch (error) {
        console.error("Error fetching word from Gemini API:", error);
        return null;
    }
};