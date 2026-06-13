import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Building a Design System from Scratch",
  description:
    "A practical guide to architecting a design system from scratch covering design tokens, component libraries, accessibility standards, and team adoption.",
  alternates: {
    canonical: "https://sliiqque.space/insights/design-system-guide",
  },
  openGraph: {
    type: "article",
    title: "Building a Design System from Scratch | SLIIQQUE",
    description:
      "A practical guide to architecting a design system from scratch covering design tokens, component libraries, accessibility standards, and team adoption.",
    images: [
      {
        url: "https://sliiqque.space/images/insights/design-system.jpg",
        width: 1920,
        height: 1280,
        alt: "Building a Design System from Scratch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building a Design System from Scratch | SLIIQQUE",
    description:
      "Architecting a design system covering design tokens, component libraries, accessibility, and team adoption.",
    images: ["https://sliiqque.space/images/insights/design-system.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <PageLayout>
      <ArticleClient />
    </PageLayout>
  );
}
