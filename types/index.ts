export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  uploadedAt: Date;
}

export interface IntervieweeFeedback {
  strengths: string[];
  improvements: string[];
  actionableTips: string[];
  overallScore: number;
  communicationScore: number;
  technicalScore: number;
  confidenceScore: number;
}

export interface RecruiterFeedback {
  missedAreas: string[];
  suggestedQuestions: string[];
  interviewQuality: number;
  recommendations: string[];
}

export interface AnalysisResult {
  id: string;
  fileId: string;
  fileName: string;
  duration: number;
  transcription: string;
  intervieweeFeedback: IntervieweeFeedback;
  recruiterFeedback: RecruiterFeedback;
  analyzedAt: Date;
  status: "pending" | "processing" | "completed" | "failed";
}

export interface UploadResponse {
  success: boolean;
  fileId: string;
  message: string;
}

export interface AnalysisResponse {
  success: boolean;
  analysisId: string;
  result?: AnalysisResult;
  message: string;
}
