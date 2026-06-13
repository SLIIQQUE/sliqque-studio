import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Building a SaaS Dashboard with Next.js 14",
  description:
    "A complete guide to building a real-time analytics dashboard using Next.js 14 App Router, React Query, and Recharts from data fetching to live updates.",
  alternates: {
    canonical: "https://sliiqque.space/insights/analytics-dashboard-nextjs",
  },
  openGraph: {
    type: "article",
    title: "Building a SaaS Dashboard with Next.js 14 | SLIIQQUE",
    description:
      "A complete guide to building a real-time analytics dashboard using Next.js 14 App Router, React Query, and Recharts from data fetching to live updates.",
    images: [
      {
        url: "https://sliiqque.space/images/insights/dashboard-analytics.jpg",
        width: 1920,
        height: 1280,
        alt: "Building a SaaS Dashboard with Next.js 14",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building a SaaS Dashboard with Next.js 14 | SLIIQQUE",
    description:
      "A complete guide to building a real-time analytics dashboard with Next.js 14.",
    images: ["https://sliiqque.space/images/insights/dashboard-analytics.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <PageLayout>
      <ArticleClient />
    </PageLayout>
  );
}
