import { useState } from "react";
import FileDropzone from "./fledropzone";
import {
  FileText,
  Sparkles,
  BarChart3,
  Users,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Recruiterfeedback from "./recruiterfeedback";
import Interviewerfeedback from "./interviewerfeedback";

const MainPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedRole, setSelectedRole] = useState<
    "interviewee" | "recruiter" | null
  >(null);

  const handleFileSelected = async (file: File) => {
    if (!selectedRole) {
      alert("Please select a role before uploading the interview.");
      return;
    }
    setSelectedFile(file);
    setIsAnalyzing(true);

    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  const resetUpload = () => {
    setSelectedFile(null);
    setIsAnalyzing(false);
    setSelectedRole(null);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <FileText className="w-12 h-12 text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-blue-500">
            Interview Analyzer Pro
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your interview recording and get AI-powered feedback for both
            interviewees and recruiters
          </p>
        </div>

        {/* ROLE SELECTION */}
        <div className="max-w-md mx-auto mb-8 p-6 bg-white rounded-lg shadow-md text-center animate-fade-in">
          <h2 className="text-lg font-semibold mb-4">Select Your Role</h2>
          <div className="flex justify-center space-x-8">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="interviewee"
                checked={selectedRole === "interviewee"}
                onChange={() => setSelectedRole("interviewee")}
                className="accent-blue-500"
              />
              <span>Interviewee</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="recruiter"
                checked={selectedRole === "recruiter"}
                onChange={() => setSelectedRole("recruiter")}
                className="accent-blue-500"
              />
              <span>Recruiter</span>
            </label>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {!selectedFile ? (
            <>
              {/* Upload Section */}
              <div className="mb-12 animate-scale-in">
                <FileDropzone onFileSelected={handleFileSelected} />
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="border-dropzone-border/50 hover:border-dropzone-border transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Dual Perspective
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Get feedback for both interviewees and recruiters from the
                      same recording
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-dropzone-border/50 hover:border-dropzone-border transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Actionable Insights
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Receive specific tips and missed opportunities for
                      improvement
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-dropzone-border/50 hover:border-dropzone-border transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Performance Analysis
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Analyze communication patterns, question effectiveness,
                      and engagement
                    </p>
                  </CardContent>
                </Card>
              </div>
            </>
          ) : (
            /* Analysis Results */
            <div className="space-y-6 animate-fade-in">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="font-semibold text-lg">
                          Interview Analysis
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          File: {selectedFile.name}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border rounded-xl"
                      onClick={resetUpload}
                    >
                      Upload New Interview
                    </Button>
                  </div>

                  {isAnalyzing ? (
                    <div className="text-center py-12">
                      <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                      <h4 className="text-lg font-medium mb-2">
                        Analyzing Your Interview
                      </h4>
                      <p className="text-muted-foreground">
                        Processing audio/video content and generating
                        insights...
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {/* Overall Performance Summary */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-semibold mb-4 flex items-center">
                              <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                              Interview Score
                            </h4>
                            <div className="text-center">
                              <div className="text-4xl font-bold text-primary mb-2">
                                82/100
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Strong performance with improvement
                                opportunities
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-semibold mb-4 flex items-center">
                              <Sparkles className="w-5 h-5 mr-2 text-primary" />
                              Key Metrics
                            </h4>
                            <div className="space-y-3 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                  Duration:
                                </span>
                                <span className="font-medium">32 minutes</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                  Questions Asked:
                                </span>
                                <span className="font-medium">12</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                  Speaking Balance:
                                </span>
                                <span className="font-medium">65% / 35%</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <Separator />
                      {selectedRole === "interviewee" ? (
                        <Interviewerfeedback />
                      ) : (
                        <Recruiterfeedback />
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
