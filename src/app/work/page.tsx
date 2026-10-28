import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Our Work: Websites, AI Bots & SaaS Projects",
  description:
    "SLIIQQUE's own builds (Creative Studio, Realty Starter, our internal Leads Dashboard and Real Estate) and Mo Touch, earlier work by our founder from before SLIIQQUE was founded.",
  alternates: {
    canonical: "https://sliiqque.space/work/",
  },
  openGraph: {
    url: "https://sliiqque.space/work/",
    title: "Our Work | Websites, AI Bots & Automation Projects | SLIIQQUE",
    description:
    "Browse our portfolio of websites, AI bots and agents, workflow automation systems, and SaaS platforms, each project built with craft, precision, and measurable impact for founders and businesses worldwide.",
    images: [
      {
        url: "https://sliiqque.space/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Portfolio: Websites, Bots & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Websites, AI Bots & Automation Projects | SLIIQQUE",
    description:
      "Browse our portfolio: websites, AI bots, automation systems, and SaaS platforms built with craft and precision for global clients.",
    images: ["https://sliiqque.space/og-image.jpg"],
  },
};

export default function WorkPage() {
  return (
    <PageLayout>
      <PageSchema path="/work/" />
      <WorkPageClient />
    </PageLayout>
  );
}
