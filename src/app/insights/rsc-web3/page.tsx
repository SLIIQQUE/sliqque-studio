import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ArticleClient from "./ArticleClient";

export const metadata: Metadata = {
  title: "React Server Components in a Web3 App",
  description:
    "How we use React Server Components to reduce client-side JavaScript and improve load times for data-heavy Web3 applications — with real results.",
  openGraph: {
    title: "React Server Components in a Web3 App | SLIIQQUE",
    description:
      "How we use React Server Components to reduce client-side JavaScript and improve load times for data-heavy Web3 applications.",
    images: [
      {
        url: "https://sliiqque.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "React Server Components in a Web3 App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Server Components in a Web3 App | SLIIQQUE",
    description:
      "How we use React Server Components to reduce client-side JavaScript in Web3 apps.",
    images: ["https://sliiqque.studio/og-image.png"],
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
