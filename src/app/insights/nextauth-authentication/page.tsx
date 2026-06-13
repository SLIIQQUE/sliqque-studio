import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Building an Authentication System with NextAuth.js",
  description:
    "A practical guide to full authentication in Next.js with NextAuth.js, covering email, OAuth providers, session management, and middleware route protection.",
  openGraph: {
    type: "article",
    title: "Building an Authentication System with NextAuth.js | SLIIQQUE",
    description:
    "A practical guide to full authentication in Next.js with NextAuth.js, covering email, OAuth providers, session management, and middleware route protection.",
    images: [
      {
        url: "https://sliiqque.space/images/insights/nextauth-auth.jpg",
        width: 1920,
        height: 1280,
        alt: "Building an Authentication System with NextAuth.js",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/insights/nextauth-authentication",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building an Authentication System with NextAuth.js | SLIIQQUE",
    description:
      "A practical guide to implementing full authentication in Next.js with NextAuth.js.",
    images: ["https://sliiqque.space/images/insights/nextauth-auth.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <PageLayout>
      <ArticleClient />
    </PageLayout>
  );
}
