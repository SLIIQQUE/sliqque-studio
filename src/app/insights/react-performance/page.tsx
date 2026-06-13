import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Performance Optimization in React",
  description:
    "Practical techniques for profiling React apps, identifying rendering bottlenecks, and optimizing component performance for real-world production scenarios.",
  alternates: {
    canonical: "https://sliiqque.space/insights/react-performance",
  },
  openGraph: {
    type: "article",
    title: "Performance Optimization in React | SLIIQQUE",
    description:
      "Practical techniques for profiling React apps, identifying rendering bottlenecks, and optimizing component performance for real-world production scenarios.",
    images: [
      {
        url: "https://sliiqque.space/images/insights/react-performance.jpg",
        width: 1920,
        height: 1280,
        alt: "Performance Optimization in React",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Optimization in React | SLIIQQUE",
    description:
      "Practical techniques for profiling and optimizing React applications.",
    images: ["https://sliiqque.space/images/insights/react-performance.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <PageLayout>
      <ArticleClient />
    </PageLayout>
  );
}
