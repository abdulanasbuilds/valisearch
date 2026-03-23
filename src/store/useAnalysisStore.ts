/**
 * Global analysis state — Zustand store.
 * Manages the idea input, analysis results, and UI state.
 */

import { create } from "zustand";
import type { ValiSearchAnalysis } from "@/types/analysis";
import { analyzeIdea } from "@/services/api";

type AnalysisState = {
  /** The raw idea text the user submitted */
  idea: string;
  /** The structured analysis result */
  analysis: ValiSearchAnalysis | null;
  /** Whether an analysis is currently in progress */
  isAnalyzing: boolean;
  /** Current active dashboard section */
  activeSection: string;
  /** Whether the result came from AI or mock */
  dataSource: "ai" | "mock" | null;
  /** Error message if analysis failed */
  error: string | null;

  // Actions
  setIdea: (idea: string) => void;
  setAnalysis: (a: ValiSearchAnalysis | null) => void;
  setAnalyzing: (v: boolean) => void;
  setActiveSection: (id: string) => void;
  clearError: () => void;

  /** Run the full analysis pipeline */
  runAnalysis: (idea: string) => Promise<void>;
};

export const useAnalysisStore = create<AnalysisState>((set) => ({
  idea: "",
  analysis: null,
  isAnalyzing: false,
  activeSection: "overview",
  dataSource: null,
  error: null,

  setIdea: (idea) => set({ idea }),
  setAnalysis: (analysis) => set({ analysis }),
  setAnalyzing: (isAnalyzing) => set({ isAnalyzing }),
  setActiveSection: (activeSection) => set({ activeSection }),
  clearError: () => set({ error: null }),

  runAnalysis: async (idea: string) => {
    set({ idea, isAnalyzing: true, error: null, analysis: null, dataSource: null });

    try {
      const { result, source } = await analyzeIdea(idea);
      set({ analysis: result, dataSource: source, isAnalyzing: false });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Analysis failed";
      set({ error: message, isAnalyzing: false });
    }
  },
}));
