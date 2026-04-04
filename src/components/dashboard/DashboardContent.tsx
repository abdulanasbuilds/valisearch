"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Download, ChevronDown, FileText, Braces, FileCode, FileImage } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";
import { Button } from "@/components/ui/button";
import { UpgradeModal } from "@/components/dashboard/UpgradeModal";
import { downloadReport, downloadReportJson, downloadReportMarkdown, downloadReportPdf } from "@/utils/exportPdf";
import { useAnalysisStore } from "@/store/useAnalysisStore";
import { useCreditStore } from "@/store/useCreditStore";
import { getMockAnalysis } from "@/services/analysis.service";

function ExportMenu({ onExport }: { onExport: (format: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex">
        <Button
          variant="outline"
          size="sm"
          className="h-7 text-[12px] gap-1.5 border-border/60 rounded-r-none border-r-0"
          onClick={() => onExport("txt")}
        >
          <Download className="h-3.5 w-3.5" />
          Export
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2 border-border/60 rounded-l-none"
          onClick={() => setOpen(!open)}
        >
          <ChevronDown className="h-3 w-3" />
        </Button>
      </div>
      {open && (
        <div
          className="absolute right-0 top-8 z-50 w-44 rounded-xl border border-white/[0.09] bg-[#111] shadow-xl overflow-hidden"
          onMouseLeave={() => setOpen(false)}
        >
          {[
            { label: "Text report (.txt)", icon: FileText, format: "txt" },
            { label: "JSON data (.json)", icon: Braces, format: "json" },
            { label: "Markdown (.md)", icon: FileCode, format: "md" },
            { label: "PDF report", icon: FileImage, format: "pdf" },
          ].map(({ label, icon: Icon, format }) => (
            <button
              key={format}
              onClick={() => {
                onExport(format);
                setOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[12.5px] text-white/55 hover:text-white/85 hover:bg-white/[0.06] transition-colors"
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function DashboardContent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { analysis, idea, setAnalysis, dataSource } = useAnalysisStore();
  const { showUpgradeModal, setShowUpgradeModal } = useCreditStore();

  useEffect(() => {
    if (!analysis) {
      setAnalysis(getMockAnalysis(idea || "AI-powered productivity tool"));
    }
  }, [analysis, idea, setAnalysis]);

  if (!analysis) {
    return (
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-12 flex items-center border-b border-border/40 px-4 shrink-0">
          <SidebarTrigger className="text-muted-foreground" />
          <span className="ml-3 text-[13px] font-medium text-muted-foreground">
            Loading...
          </span>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <DashboardSkeleton />
        </main>
      </div>
    );
  }

  const handleExport = (format: string) => {
    if (format === "json") return downloadReportJson(analysis);
    if (format === "md") return downloadReportMarkdown(analysis);
    if (format === "pdf") return downloadReportPdf(analysis);
    return downloadReport(analysis);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <header className="h-12 flex items-center justify-between gap-2 border-b border-border/40 px-3 sm:px-4 shrink-0 overflow-x-auto">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <SidebarTrigger className="text-muted-foreground shrink-0" />
          <span className="text-[13px] font-medium text-muted-foreground truncate hidden sm:inline">
            Startup Analysis
          </span>
          {dataSource && (
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium shrink-0 ${
                dataSource === "ai"
                  ? "bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]"
                  : "bg-accent text-muted-foreground"
              }`}
            >
              {dataSource === "ai" ? "AI" : "Demo"}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 min-w-[44px] text-[12px] text-muted-foreground hover:text-foreground px-2 sm:px-3"
            onClick={() => router.push("/")}
          >
            <span className="hidden sm:inline">+ New analysis</span>
            <span className="sm:hidden">+ New</span>
          </Button>
          <ExportMenu onExport={handleExport} />
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
      />
    </div>
  );
}
