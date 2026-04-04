"use client";

import { KanbanSection } from "@/components/dashboard/sections/KanbanSection";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

export default function KanbanPage() {
  return (
    <DashboardContent>
      <KanbanSection />
    </DashboardContent>
  );
}
