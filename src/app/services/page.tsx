import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Website Development, AI Agents & Automation Services",
  description:
    "We build high-performance websites, custom AI bots and agents, workflow automation systems, and SaaS interfaces. SLIIQQUE takes on only 2–3 new projects per quarter to guarantee quality and attention.",
  alternates: {
    canonical: "https://sliiqque.space/services",
  },
  openGraph: {
    title: "Website Development, AI Agents & Automation Services | SLIIQQUE",
    description:
      "We build high-performance websites, custom AI bots and agents, workflow automation systems, and SaaS interfaces. SLIIQQUE takes on only 2–3 new projects per quarter to guarantee quality and attention.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Web Dev, AI & Automation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development, AI Agents & Automation Services | SLIIQQUE",
    description:
      "High-performance websites, custom AI bots and agents, workflow automation, and SaaS interfaces, built by SLIIQQUE.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <ServicesPageClient />
    </PageLayout>
  );
}
