import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | SLIIQQUE Studio",
  description:
    "SLIIQQUE Studio's terms of service outline the conditions for using our website, engaging our services, and the legal agreements that govern our client relationships and project delivery.",
  alternates: {
    canonical: "https://sliiqque.space/terms",
  },
};

export default function TermsPage() {
  return (
    <PageLayout>
      <div className="pt-[100px]">
        <section className="py-20 px-10 border-b border-white/5">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted hover:text-white transition-colors mb-12 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
            >
              <ArrowLeft size={12} aria-hidden="true" />
              Back to Home
            </Link>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase mb-8">
              Terms of Service
            </h1>
            <p className="text-sm font-body text-muted mb-8">
              Last updated: March 2026
            </p>
          </div>
        </section>
        <section className="py-20 px-10">
          <div className="max-w-3xl mx-auto prose">
            <h2 className="font-display font-bold text-xl tracking-tight uppercase mt-8 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed mb-6">
              By accessing and using this website, you accept and agree to be
              bound by the terms and provisions of this agreement.
            </p>
            <h2 className="font-display font-bold text-xl tracking-tight uppercase mt-8 mb-4">
              Services
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed mb-6">
              SLIIQQUE provides software development and consulting services.
              All engagements are governed by separate service agreements.
            </p>
            <h2 className="font-display font-bold text-xl tracking-tight uppercase mt-8 mb-4">
              Intellectual Property
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed mb-6">
              All content on this website is the property of SLIIQQUE and is
              protected by applicable copyright laws.
            </p>
            <h2 className="font-display font-bold text-xl tracking-tight uppercase mt-8 mb-4">
              Contact
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:hello@sliiqque.space"
                className="text-white underline underline-offset-2 hover:no-underline"
              >
                hello@sliiqque.space
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
