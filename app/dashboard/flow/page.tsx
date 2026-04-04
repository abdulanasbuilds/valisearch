"use client";

import { UserFlowSection } from "@/components/dashboard/sections/UserFlowSection";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

export default function FlowPage() {
  return (
    <DashboardContent>
      <UserFlowSection />
    </DashboardContent>
  );
}
