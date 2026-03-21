import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LightLeaks from "@/components/ui/LightLeaks";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with SLIIQQUE. We take on 2–3 new projects per quarter.",
  openGraph: {
    title: "Contact | SLIIQQUE",
    description:
      "Start a conversation with SLIIQQUE. We take on 2–3 new projects per quarter.",
    images: [
      {
        url: "https://sliiqque.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | SLIIQQUE",
    description:
      "Start a conversation with SLIIQQUE. We take on 2–3 new projects per quarter.",
    images: ["https://sliiqque.studio/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <LightLeaks />
      <ContactPageClient />
      <Footer />
    </main>
  );
}
