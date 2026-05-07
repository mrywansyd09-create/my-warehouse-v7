import { GoogleGenAI } from "@google/genai";
import { Product } from "../data";

export async function analyzeInventory(products: Product[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  const prompt = `
    تۆ یاریدەدەرێکی پسپۆڕی کۆگایت. ئەوەی خوارەوە لیستێکی کەلوپەلەکانی ناو کۆگایە بە شێوەی JSON.
    تکایە کورتەیەک بدە لەسەر:
    ١. کام کەلوپەلانە پێویستیان بە داواکردنەوە هەیە؟
    ٢. ڕەوشی گشتی کۆگاکە چۆنە؟
    ٣. ئامۆژگاری بۆ باشترکردنی کۆگا.
    
    وەڵامەکەت با بە زمانی کوردی (سۆرانی) بێت و بە شێوەیەکی پرۆفیشناڵ بێت.
    
    Data: ${JSON.stringify(products)}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating insights:", error);
    return "ببورە، ناتوانرێت شیکردنەوەکە ئەنجام بدرێت لەم کاتەدا.";
  }
}
