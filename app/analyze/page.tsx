"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAnalysisStore } from "@/store/useAnalysisStore";

export default function AnalyzePage() {
  const router = useRouter();
  const { analysis, isAnalyzing } = useAnalysisStore();

  useEffect(() => {
    if (analysis && !isAnalyzing) {
      router.push("/dashboard/overview");
    }
  }, [analysis, isAnalyzing, router]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Analyzing your idea...
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            Our AI is researching the market, competitors, and potential for your startup idea.
          </p>
        </div>
      </div>
    </div>
  );
}
