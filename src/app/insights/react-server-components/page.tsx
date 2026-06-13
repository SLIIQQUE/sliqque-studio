import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "React Server Components in Production",
  description:
    "How we use React Server Components to reduce client-side JavaScript and improve load times in data-heavy frontend applications, with real data from production.",
  openGraph: {
    type: "article",
    title: "React Server Components in Production | SLIIQQUE",
    description:
      "How we use React Server Components to reduce client-side JavaScript and improve load times in data-heavy frontend applications, with real data from production.",
    images: [
      {
        url: "https://sliiqque.space/images/insights/react-server-components.jpg",
        width: 1920,
        height: 1280,
        alt: "React Server Components in Production",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/insights/react-server-components",
  },
  twitter: {
    card: "summary_large_image",
    title: "React Server Components in Production | SLIIQQUE",
    description:
      "How we use React Server Components to reduce client-side JavaScript in production apps.",
    images: ["https://sliiqque.space/images/insights/react-server-components.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <PageLayout>
      <ArticleClient />
    </PageLayout>
  );
}
