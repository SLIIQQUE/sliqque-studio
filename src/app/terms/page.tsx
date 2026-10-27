import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { LegalPage } from "@/components/layout/LegalPage";
import { PageSchema } from "@/components/PageSchema";
import { termsOfService } from "@/data/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using the SLIIQQUE Studio website and engaging our services: pricing, payment, intellectual property, liability and governing law.",
  alternates: {
    canonical: "https://sliiqque.space/terms/",
  },
  openGraph: {
    url: "https://sliiqque.space/terms/",
    title: "Terms of Service | SLIIQQUE",
    description:
      "The terms for using the SLIIQQUE Studio website and engaging our services: pricing, payment, intellectual property, liability and governing law.",
    images: [
      {
        url: "https://sliiqque.space/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | SLIIQQUE",
    description: "The terms for using the SLIIQQUE Studio website and engaging our services.",
    images: ["https://sliiqque.space/og-image.jpg"],
  },
};

export default function TermsPage() {
  return (
    <PageLayout>
      <PageSchema path="/terms/" />
      <LegalPage doc={termsOfService} />
    </PageLayout>
  );
}
