import pdf from "pdf-parse";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const role = formData.get("role") as string | null;

    if (!file) {
      return Response.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert File → Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Parse PDF
    const parsed = await pdf(buffer);

    return Response.json({
      analysis: `Resume analyzed for role: ${role}. Extracted text length: ${parsed.text.length}`,
    });
  } catch (err: any) {
    console.error("Error in /api/analyze:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
