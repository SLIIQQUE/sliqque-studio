import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Real Estate CMS Platform Case Study",
  description:
    "Case study: a property website with a built-in CMS for searchable listings, agent profiles, articles and enquiry capture.",
  openGraph: {
    title: "SLIIQQUE Real Estate Case Study | SLIIQQUE",
    description:
      "A property website with a built-in CMS for listings, agents, articles, and enquiries, managed from one admin panel.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE Real Estate Case Study | SLIIQQUE",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/work/real-estate/",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLIIQQUE Real Estate Case Study | SLIIQQUE",
    description:
      "Building a CMS-powered property website where the team manages everything without code changes.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function RealEstatePage() {
  return (
    <PageLayout>
      <CaseStudyClient />
    </PageLayout>
  );
}
