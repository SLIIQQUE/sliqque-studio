import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { LegalPage } from "@/components/layout/LegalPage";
import { PageSchema } from "@/components/PageSchema";
import { privacyPolicy } from "@/data/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SLIIQQUE Studio collects, uses, stores and protects your personal information, your rights under NDPA and GDPR, and how to contact us.",
  alternates: {
    canonical: "https://sliiqque.space/privacy/",
  },
  openGraph: {
    url: "https://sliiqque.space/privacy/",
    title: "Privacy Policy | SLIIQQUE",
    description:
      "How SLIIQQUE Studio collects, uses, stores and protects your personal information, your rights under NDPA and GDPR, and how to contact us.",
    images: [
      {
        url: "https://sliiqque.space/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | SLIIQQUE",
    description: "How SLIIQQUE Studio handles your personal information and your rights under NDPA and GDPR.",
    images: ["https://sliiqque.space/og-image.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageSchema path="/privacy/" />
      <LegalPage doc={privacyPolicy} />
    </PageLayout>
  );
}
