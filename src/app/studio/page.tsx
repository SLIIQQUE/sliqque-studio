import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import StudioPageClient from "./StudioPageClient";

export const metadata: Metadata = {
  title: "About SLIIQQUE | Website, AI & Automation Studio",
  description:
    "SLIIQQUE is a Lagos-based boutique software studio building high-performance websites, AI bots and agents, workflow automation systems, and SaaS platforms, founded by engineers who ship.",
  alternates: {
    canonical: "https://sliiqque.space/studio",
  },
  openGraph: {
    title: "About SLIIQQUE | Website, AI & Automation Studio | SLIIQQUE",
    description:
    "SLIIQQUE is a Lagos-based boutique software studio building high-performance websites, AI bots and agents, workflow automation systems, and SaaS platforms, founded by engineers who ship.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About SLIIQQUE | Website, AI & Automation Studio | SLIIQQUE",
    description:
      "Lagos-based boutique software studio building high-performance websites, AI bots, automation systems, and SaaS platforms.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function StudioPage() {
  return (
    <PageLayout>
      <StudioPageClient />
    </PageLayout>
  );
}
