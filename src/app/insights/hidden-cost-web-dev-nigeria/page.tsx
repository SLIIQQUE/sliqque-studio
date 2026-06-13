import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title:
    "The Hidden Cost of Cheap Web Development for Nigerian Businesses",
  description:
    "Why that ₦50,000 Wix site could end up costing your Lagos business ten times more in lost revenue, security vulnerabilities, and missed growth opportunities.",
  openGraph: {
    type: "article",
    title:
      "The Hidden Cost of Cheap Web Development for Nigerian Businesses | SLIIQQUE",
    description:
      "Why that ₦50,000 Wix site could end up costing your Lagos business ten times more in lost revenue, security vulnerabilities, and missed growth opportunities.",
    images: [
      {
        url: "https://sliiqque.space/images/insights/nigeria-web-dev.jpg",
        width: 1920,
        height: 1280,
        alt: "The Hidden Cost of Cheap Web Development for Nigerian Businesses",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/insights/hidden-cost-web-dev-nigeria",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Hidden Cost of Cheap Web Development for Nigerian Businesses | SLIIQQUE",
    description:
      "Why that ₦50,000 Wix site could end up costing your Lagos business ten times more in lost revenue, security issues, and missed opportunities.",
    images: ["https://sliiqque.space/images/insights/nigeria-web-dev.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <PageLayout>
      <ArticleClient />
    </PageLayout>
  );
}
