import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Mo Touch | Interactive Makeup Artist Portfolio",
  description:
    "Premium interactive portfolio and digital experience for a makeup artist with immersive scroll-driven animations, touch-optimized interactions, and a digital-first showcase.",
  openGraph: {
    title: "Mo Touch Case Study | SLIIQQUE",
    description:
      "Premium interactive portfolio for a makeup artist with immersive scroll-driven animations and touch-optimized interactions.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mo Touch Case Study | SLIIQQUE",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/work/mo-touch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mo Touch Case Study | SLIIQQUE",
    description:
      "Premium interactive portfolio for a makeup artist with immersive scroll-driven animations.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function MoTouchPage() {
  return (
    <PageLayout>
      <CaseStudyClient />
    </PageLayout>
  );
}
