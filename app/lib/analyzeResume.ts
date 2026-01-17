// app/api/analyze/route.ts (Next.js 13+ with App Router)
import { NextResponse } from "next/server";
import { model } from "../../lib/gemini"; // your gemini.ts
import pdf from "pdf-parse";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume") as File;
    const role = formData.get("role") as string;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Read resume file
    const buffer = Buffer.from(await file.arrayBuffer());
    const pdfParse = await pdf(buffer);

    const resumeText = pdfParse.text;

    // Ask Gemini
    const prompt = `Analyze this resume for the role of ${role}. 
    Resume:
    ${resumeText}`;

    const result = await model.generateContent(prompt);

    // Extract AI text safely
    const aiResponse = result.response.text();

    return NextResponse.json({ analysis: aiResponse });
  } catch (err: any) {
    console.error("API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
