import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Building Role-Based Access Control with Next.js",
  description:
    "Step-by-step guide to implementing role-based access control in Next.js with middleware, session auth, and composable security patterns for your applications.",
  openGraph: {
    type: "article",
    title: "Building Role-Based Access Control with Next.js | SLIIQQUE",
    description:
      "Step-by-step guide to implementing role-based access control in Next.js with middleware, session auth, and composable security patterns for your applications.",
    images: [
      {
        url: "https://sliiqque.space/images/insights/rbac-access-control.jpg",
        width: 1920,
        height: 1280,
        alt: "Building Role-Based Access Control with Next.js",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/insights/role-based-access-control",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Role-Based Access Control with Next.js | SLIIQQUE",
    description:
      "Step-by-step guide to implementing RBAC in your Next.js application.",
    images: ["https://sliiqque.space/images/insights/rbac-access-control.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <PageLayout>
      <ArticleClient />
    </PageLayout>
  );
}
