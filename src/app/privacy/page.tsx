import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | How We Handle Your Data",
  description:
    "SLIIQQUE Studio's privacy policy explains how we collect, use, store, and protect your personal information when you visit our website or use our services. Your privacy matters to us.",
  alternates: {
    canonical: "https://sliiqque.space/privacy",
  },
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sm font-body text-muted mb-8">
              Last updated: March 2026
            </p>
          </div>
        </section>
        <section className="py-20 px-10">
          <div className="max-w-3xl mx-auto prose">
            <h2 className="font-display font-bold text-xl tracking-tight uppercase mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed mb-6">
              We collect information you provide directly to us, such as when you
              fill out a contact form or otherwise communicate with us.
            </p>
            <h2 className="font-display font-bold text-xl tracking-tight uppercase mt-8 mb-4">
              How We Use Information
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed mb-6">
              We use the information we collect to respond to your inquiries,
              send you updates about our services, and improve our website and
              communications.
            </p>
            <h2 className="font-display font-bold text-xl tracking-tight uppercase mt-8 mb-4">
              Contact
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact
              us at{" "}
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
