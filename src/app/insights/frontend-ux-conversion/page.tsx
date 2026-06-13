import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Frontend UX Patterns That Drive Conversion",
  description:
    "After building dozens of products, these interface patterns consistently improve onboarding, retention, and conversion rates for real SaaS and web applications.",
  alternates: {
    canonical: "https://sliiqque.space/insights/frontend-ux-conversion",
  },
  openGraph: {
    type: "article",
    title: "Frontend UX Patterns That Drive Conversion | SLIIQQUE",
    description:
      "After building dozens of products, these interface patterns consistently improve onboarding, retention, and conversion rates for real SaaS and web applications.",
    images: [
      {
        url: "https://sliiqque.space/images/insights/ux-conversion.jpg",
        width: 1920,
        height: 1280,
        alt: "Frontend UX Patterns That Drive Conversion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend UX Patterns That Drive Conversion | SLIIQQUE",
    description:
      "Interface patterns that consistently improve onboarding and retention.",
    images: ["https://sliiqque.space/images/insights/ux-conversion.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <PageLayout>
      <ArticleClient />
    </PageLayout>
  );
}
