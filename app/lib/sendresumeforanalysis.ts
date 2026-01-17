export async function sendResumeForAnalysis(file: File, role: string) {
  const formData = new FormData();
  formData.append("resume", file);
  formData.append("role", role);

  const res = await fetch("/api/analyze", {
    method: "POST",
    body: formData,
  });

  // Read once; handle HTML error pages gracefully
  const raw = await res.text();

  if (!res.ok) {
    try {
      const data = JSON.parse(raw);
      throw new Error(data?.error || res.statusText);
    } catch {
      throw new Error(raw);
    }
  }

  // Success path
  try {
    const data = JSON.parse(raw);
    // If you used structured JSON in the API, `data.analysis` may be an object
    return data.analysis;
  } catch {
    // Fallback if server returned plain text
    return raw;
  }
}
