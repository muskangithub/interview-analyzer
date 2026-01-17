import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function Interviewerfeedback() {
  return (
    <Card className="border border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
      <CardHeader>
        <CardTitle className="flex items-center text-green-700 dark:text-green-300">
          <Users className="w-5 h-5 mr-2" />
          Feedback for Interviewee
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h5 className="font-semibold text-green-800 dark:text-green-200 mb-3">
            ✅ What Went Well
          </h5>
          <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>
                Clear and confident communication throughout the interview
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Provided specific examples with quantifiable results</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>
                Asked thoughtful questions about the role and company culture
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">
            🔍 Areas for Improvement
          </h5>
          <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>
                Some responses could be more concise and structured (STAR
                method)
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Pause and think before answering technical questions</span>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
            🚀 Actionable Tips
          </h5>
          <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Practice the STAR method for behavioral questions</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Prepare 2-3 thoughtful questions about team dynamics</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>
                Take 3-5 seconds to organize thoughts before complex answers
              </span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
