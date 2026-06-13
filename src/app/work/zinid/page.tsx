import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "ZINID | Africa's Fraud Prevention Infrastructure",
  description:
    "A case study on building Africa's shared fraud prevention platform with digital identity, real-time risk scoring, and cross-platform AML compliance for the Nigerian fintech ecosystem.",
  openGraph: {
    title: "ZINID Case Study | SLIIQQUE",
    description:
      "Africa's fraud prevention infrastructure with digital identity, real-time risk scoring, and shared intelligence across the Nigerian fintech ecosystem.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZINID Case Study | SLIIQQUE",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/work/zinid",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZINID Case Study | SLIIQQUE",
    description:
      "Building Africa's shared fraud prevention infrastructure for the Nigerian fintech ecosystem.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function ZinidPage() {
  return (
    <PageLayout>
      <CaseStudyClient />
    </PageLayout>
  );
}
