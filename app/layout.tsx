import type { Metadata, Viewport } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "ValiSearch - AI-Powered Startup Validation",
  description:
    "Transform your startup idea into a validated business plan with AI-powered market analysis, competitor research, and actionable insights.",
  keywords: [
    "startup validation",
    "AI analysis",
    "market research",
    "competitor analysis",
    "business planning",
  ],
  authors: [{ name: "ValiSearch" }],
  openGraph: {
    title: "ValiSearch - AI-Powered Startup Validation",
    description:
      "Transform your startup idea into a validated business plan with AI-powered market analysis.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValiSearch - AI-Powered Startup Validation",
    description:
      "Transform your startup idea into a validated business plan with AI-powered market analysis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body className="font-sans antialiased">
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
