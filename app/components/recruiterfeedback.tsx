import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export default function Recruiterfeedback() {
  return (
    <Card className="border border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/20">
      <CardHeader>
        <CardTitle className="flex items-center text-purple-700 dark:text-purple-300">
          <MessageSquare className="w-5 h-5 mr-2" />
          Feedback for Recruiter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
            🎯 Areas You May Have Missed
          </h5>
          <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>
                Candidate's experience with remote team management wasn't fully
                explored
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>
                Could have dug deeper into their problem-solving process
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>
                Candidate mentioned budget management - this wasn't followed up
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">
            ❓ Questions You Could Have Asked
          </h5>
          <ul className="space-y-2 text-sm text-indigo-700 dark:text-indigo-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>
                "Can you walk me through a time when you had to make a difficult
                decision under pressure?"
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>
                "How do you handle conflicting priorities when managing multiple
                projects?"
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>
                "What specific metrics do you use to measure team success?"
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">
            📈 Recruitment Insights
          </h5>
          <ul className="space-y-2 text-sm text-teal-700 dark:text-teal-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>
                Consider more behavioral questions to assess cultural fit
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>
                Allow more time for candidate questions (only 8% of interview)
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Use more follow-up questions to get specific examples</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
