import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Let's get you back on track.",
};

export default function NotFound() {
  return (
    <PageLayout>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-10 text-center">
        <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-6">
          Error 404
        </span>
        <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter uppercase mb-6">
          Page Not Found
        </h1>
        <p className="text-lg font-body text-white/60 max-w-md mb-12 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-body font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </PageLayout>
  );
}
