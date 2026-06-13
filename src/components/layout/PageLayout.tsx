import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import LightLeaks from "@/components/ui/LightLeaks";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <main id="main-content" className="relative min-h-screen bg-background">
      <Navigation />
      <LightLeaks />
      {children}
      <Footer />
    </main>
  );
}
