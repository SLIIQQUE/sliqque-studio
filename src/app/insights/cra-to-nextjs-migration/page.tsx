import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Migrating from Create React App to Next.js",
  description:
    "A practical look at migrating a production React app from Create React App to Next.js, covering DX improvements, performance wins, and lessons learned.",
  openGraph: {
    type: "article",
    title: "Migrating from Create React App to Next.js | SLIIQQUE",
    description:
      "A practical look at migrating a production React app from Create React App to Next.js, covering DX improvements, performance wins, and lessons learned.",
    images: [
      {
        url: "https://sliiqque.space/images/insights/cra-migration.jpg",
        width: 1920,
        height: 1280,
        alt: "Migrating from Create React App to Next.js",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/insights/cra-to-nextjs-migration",
  },
  twitter: {
    card: "summary_large_image",
    title: "Migrating from Create React App to Next.js | SLIIQQUE",
    description:
      "A practical look at migrating a production React app from Create React App to Next.js.",
    images: ["https://sliiqque.space/images/insights/cra-migration.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <PageLayout>
      <ArticleClient />
    </PageLayout>
  );
}
