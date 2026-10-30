import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Mo Touch: Interactive Makeup Artist Portfolio",
  description:
    "Earlier work by our founder, from before SLIIQQUE: an immersive, scroll-driven portfolio for a makeup artist, built with GSAP and Framer Motion.",
  openGraph: {
    url: "https://sliiqque.space/work/mo-touch/",
    title: "Mo Touch: Earlier Work | SLIIQQUE",
    description:
      "Earlier work by our founder, from before SLIIQQUE: an interactive portfolio for a makeup artist with scroll-driven animations.",
    images: [
      {
        url: "https://sliiqque.space/images/motouch-screenshot.jpg",
        width: 1280,
        height: 800,
        alt: "Mo Touch interactive portfolio interface",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/work/mo-touch/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mo Touch: Earlier Work | SLIIQQUE",
    description:
      "Earlier work by our founder, from before SLIIQQUE: an interactive portfolio for a makeup artist.",
    images: ["https://sliiqque.space/images/motouch-screenshot.jpg"],
  },
};

export default function MoTouchPage() {
  return (
    <PageLayout>
      <PageSchema path="/work/mo-touch/" meta={metadata} />
      <CaseStudyClient />
    </PageLayout>
  );
}
