import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for SLIIQQUE Studio.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <div className="pt-[100px]">
        <section className="py-20 px-10 border-b border-white/5">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted hover:text-white transition-colors mb-12"
            >
              <ArrowLeft size={12} />
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
                href="mailto:hello@sliiqque.studio"
                className="text-white hover:underline"
              >
                hello@sliiqque.studio
              </a>
              .
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
