import { Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { OverviewSection } from "@/components/dashboard/sections/OverviewSection";
import { ValidationSection } from "@/components/dashboard/sections/ValidationSection";
import { MarketSection } from "@/components/dashboard/sections/MarketSection";
import { CompetitorsSection } from "@/components/dashboard/sections/CompetitorsSection";
import { ProductSection } from "@/components/dashboard/sections/ProductSection";
import { BrandingSection } from "@/components/dashboard/sections/BrandingSection";
import { MonetizationSection } from "@/components/dashboard/sections/MonetizationSection";
import { GoToMarketSection } from "@/components/dashboard/sections/GoToMarketSection";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center gap-3 border-b border-white/[0.06] px-4 shrink-0">
            <SidebarTrigger className="text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Startup Analysis</span>
          </header>
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <Routes>
              <Route index element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<OverviewSection />} />
              <Route path="validation" element={<ValidationSection />} />
              <Route path="market" element={<MarketSection />} />
              <Route path="competitors" element={<CompetitorsSection />} />
              <Route path="product" element={<ProductSection />} />
              <Route path="branding" element={<BrandingSection />} />
              <Route path="monetization" element={<MonetizationSection />} />
              <Route path="go-to-market" element={<GoToMarketSection />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
