import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title:
    "The Hidden Cost of Cheap Web Development for Nigerian Businesses",
  description:
    "Why that ₦50,000 Wix site could end up costing your Lagos business ten times more in lost revenue, security issues, and missed opportunities.",
  openGraph: {
    title:
      "The Hidden Cost of Cheap Web Development for Nigerian Businesses | SLIIQQUE",
    description:
      "Why that ₦50,000 Wix site could end up costing your Lagos business ten times more in lost revenue, security issues, and missed opportunities.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Hidden Cost of Cheap Web Development for Nigerian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Hidden Cost of Cheap Web Development for Nigerian Businesses | SLIIQQUE",
    description:
      "Why that ₦50,000 Wix site could end up costing your Lagos business ten times more in lost revenue, security issues, and missed opportunities.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function ArticlePage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <ArticleClient />
      <Footer />
    </main>
  );
}
