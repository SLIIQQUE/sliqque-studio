import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact | Start Your Website, AI Bot or Automation Project",
  description:
    "Ready to build something exceptional? Tell us about your website, AI bot, workflow automation, or SaaS project. SLIIQQUE takes on only 2–3 new projects per quarter.",
  alternates: {
    canonical: "https://sliiqque.space/contact",
  },
  openGraph: {
    title: "Contact | Start Your Website, AI Bot or Automation Project | SLIIQQUE",
    description:
      "Ready to build something exceptional? Tell us about your website, AI bot, workflow automation, or SaaS project. SLIIQQUE takes on only 2–3 new projects per quarter.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact SLIIQQUE for Web, AI & Automation Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Web, AI Bot & Automation Projects | SLIIQQUE",
    description:
      "Ready to build? Tell us about your website, AI bot, automation, or SaaS project. SLIIQQUE takes on only 2–3 new projects per quarter.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactPageClient />
    </PageLayout>
  );
}
