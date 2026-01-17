import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error(
    "GEMINI_API_KEY is missing. Add it to .env.local and restart dev server."
  );
}

const genAI = new GoogleGenerativeAI(apiKey);

// Use flash while developing (cheaper + higher quotas). Switch to pro later if you want.
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
