import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import InsightsPageClient from "./InsightsPageClient";

export const metadata: Metadata = {
  title: "Insights: Web Dev, AI Agents & Automation Articles",
  description:
    "Technical articles and thought leadership on website development, AI bots and agents, workflow automation, frontend engineering, and SaaS architecture, written by the team at SLIIQQUE Studio.",
  alternates: {
    canonical: "https://sliiqque.space/insights",
  },
  openGraph: {
    title: "Insights: Web Dev, AI Agents & Automation Articles | SLIIQQUE",
    description:
      "Technical articles and thought leadership on website development, AI bots and agents, workflow automation, frontend engineering, and SaaS architecture, written by the team at SLIIQQUE Studio.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights: Web Dev, AI Agents & Automation | SLIIQQUE",
    description:
      "Technical articles on web development, AI agents, automation, and frontend engineering from the SLIIQQUE team.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function InsightsPage() {
  return (
    <PageLayout>
      <InsightsPageClient />
    </PageLayout>
  );
}
