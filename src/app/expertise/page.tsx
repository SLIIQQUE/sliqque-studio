import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ExpertisePageClient from "./ExpertisePageClient";

export const metadata: Metadata = {
  title: "SaaS Platforms, FinTech, AI Agents & Automation | SLIIQQUE Expertise",
  description:
    "We build full-stack SaaS platforms, FinTech payment infrastructure, fraud prevention systems, AI bots, and interactive frontends. Backed by shipped products: BizEdge HRMS, Lumia payments, ZINID fraud prevention, Mo Touch interactive portfolio.",
  alternates: {
    canonical: "https://sliiqque.space/expertise",
  },
  openGraph: {
    title: "SaaS Platforms, FinTech, AI Agents & Automation | SLIIQQUE Expertise",
    description:
      "We build full-stack React/Next.js platforms, FinTech payment infrastructure, AI bots, and interactive frontends. Backed by shipped products serving real users.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Expertise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Platforms, FinTech, AI Agents & Automation | SLIIQQUE Expertise",
    description:
      "Full-stack platforms, FinTech systems, AI bots, and interactive frontends shipped by SLIIQQUE.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function ExpertisePage() {
  return (
    <PageLayout>
      <ExpertisePageClient />
    </PageLayout>
  );
}
