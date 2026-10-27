import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Why We Use Framer Motion in Production",
  description:
    "A practical look at building production-grade animations with Framer Motion, from micro-interactions and gesture UI to page transitions and layout animations.",
  alternates: {
    canonical: "https://sliiqque.space/insights/framer-motion-guide/",
  },
  openGraph: {
    url: "https://sliiqque.space/insights/framer-motion-guide/",
    type: "article",
    title: "Why We Use Framer Motion in Production | SLIIQQUE",
    description:
      "A practical look at building production-grade animations with Framer Motion, from micro-interactions and gesture UI to page transitions and layout animations.",
    images: [
      {
        url: "https://sliiqque.space/images/insights/framer-motion.jpg",
        width: 1920,
        height: 1280,
        alt: "Why We Use Framer Motion in Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why We Use Framer Motion in Production | SLIIQQUE",
    description:
      "Production-grade animations with Framer Motion, from micro-interactions to page transitions.",
    images: ["https://sliiqque.space/images/insights/framer-motion.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <PageLayout>
      <PageSchema path="/insights/framer-motion-guide/" />
      <ArticleClient />
    </PageLayout>
  );
}
