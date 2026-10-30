import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import StudioPageClient from "./StudioPageClient";

export const metadata: Metadata = {
  title: "About the Studio: Websites, AI & Automation",
  description:
    "SLIIQQUE is a Lagos-based boutique studio building websites, AI bots and agents, workflow automation and SaaS platforms. Founded December 2025.",
  alternates: {
    canonical: "https://sliiqque.space/studio/",
  },
  openGraph: {
    url: "https://sliiqque.space/studio/",
    title: "About the Studio: Websites, AI & Automation | SLIIQQUE",
    description:
    "SLIIQQUE is a Lagos-based boutique software studio building high-performance websites, AI bots and agents, workflow automation systems, and SaaS platforms, founded by engineers who ship.",
    images: [
      {
        url: "https://sliiqque.space/images/gabriel-ai-avatar.jpg",
        width: 640,
        height: 640,
        alt: "Gabriel Njoabozia, founder and lead engineer at SLIIQQUE"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About the Studio: Websites, AI & Automation | SLIIQQUE",
    description:
      "Lagos-based boutique software studio building high-performance websites, AI bots, automation systems, and SaaS platforms.",
    images: ["https://sliiqque.space/images/gabriel-ai-avatar.jpg"],
  },
};

export default function StudioPage() {
  return (
    <PageLayout>
      <PageSchema path="/studio/" meta={metadata} />
      <StudioPageClient />
    </PageLayout>
  );
}
