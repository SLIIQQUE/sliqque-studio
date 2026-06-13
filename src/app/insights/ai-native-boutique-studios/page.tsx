import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "Why AI Natives Are Choosing Boutique Studios Over Freelance Platforms",
  description:
    "AI-native founders are leaving freelance platforms for boutique studios and getting higher quality, real accountability, and long-term value for their builds.",
  openGraph: {
    type: "article",
    title:
      "Why AI Natives Are Choosing Boutique Studios Over Freelance Platforms | SLIIQQUE",
    description:
      "AI-native founders are leaving freelance platforms for boutique studios and getting higher quality, real accountability, and long-term value for their builds.",
    images: [
      {
        url: "https://sliiqque.space/images/insights/ai-boutique.jpg",
        width: 1920,
        height: 1280,
        alt: "Why AI Natives Are Choosing Boutique Studios Over Freelance Platforms",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/insights/ai-native-boutique-studios",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Why AI Natives Are Choosing Boutique Studios Over Freelance Platforms | SLIIQQUE",
    description:
      "Why AI-native founders are ditching Upwork and Fiverr for boutique software studios, and what that means for your next build.",
    images: ["https://sliiqque.space/images/insights/ai-boutique.jpg"],
  },
};

export default function ArticlePage() {
  return (
    <PageLayout>
      <ArticleClient />
    </PageLayout>
  );
}
