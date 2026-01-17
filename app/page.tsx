"use client";
import MainPage from "@/app/components/mainpage";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 py-8 text-center text-white">
        <h1 className="text-3xl font-bold mb-2">AI Interview Analyzer</h1>
        <p className="text-lg">
          Upload your interview. Get actionable feedback powered by AI.
        </p>
      </header>
      <div className="max-w-xl mx-auto">
        <MainPage />
      </div>
      <footer className="fixed bottom-0 left-0 w-full bg-blue-700 py-2 text-center text-xs text-white opacity-999 ">
        Thankyou! for working with us
      </footer>
    </div>
  );
}
