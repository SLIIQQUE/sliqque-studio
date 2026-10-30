import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import ExpertisePageClient from "./ExpertisePageClient";

export const metadata: Metadata = {
  title: "SaaS, FinTech, AI Agents & Automation Expertise",
  description:
    "Full-stack SaaS, FinTech payments, fraud prevention and AI bots, backed by our own builds and our founder's earlier work.",
  alternates: {
    canonical: "https://sliiqque.space/expertise/",
  },
  openGraph: {
    url: "https://sliiqque.space/expertise/",
    title: "SaaS Platforms, FinTech, AI Agents & Automation | SLIIQQUE Expertise",
    description:
      "We build full-stack React/Next.js platforms, FinTech payment infrastructure, AI bots, and interactive frontends. Backed by our own builds and our founder's earlier work.",
    images: [
      {
        url: "https://sliiqque.space/og-image.jpg",
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
      "Full-stack platforms, FinTech systems, AI bots, and interactive frontends, from SLIIQQUE and its founder's earlier work.",
    images: ["https://sliiqque.space/og-image.jpg"],
  },
};

export default function ExpertisePage() {
  return (
    <PageLayout>
      <PageSchema path="/expertise/" meta={metadata} />
      <ExpertisePageClient />
    </PageLayout>
  );
}
