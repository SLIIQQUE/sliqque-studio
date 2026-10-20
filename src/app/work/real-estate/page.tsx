import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Real Estate CMS Platform Case Study",
  description:
    "Case study: a property website with a built-in CMS for searchable listings, agent profiles, articles and enquiry capture.",
  openGraph: {
    title: "Real Estate Case Study | SLIIQQUE",
    description:
      "A property website with a built-in CMS for listings, agents, articles, and enquiries, managed from one admin panel.",
    images: [
      {
        url: "https://sliiqque.space/images/real-estate-screenshot.jpg",
        width: 1280,
        height: 800,
        alt: "Real Estate CMS platform interface",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/work/real-estate/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Case Study | SLIIQQUE",
    description:
      "Building a CMS-powered property website where the team manages everything without code changes.",
    images: ["https://sliiqque.space/images/real-estate-screenshot.jpg"],
  },
};

export default function RealEstatePage() {
  return (
    <PageLayout>
      <PageSchema path="/work/real-estate/" />
      <CaseStudyClient />
    </PageLayout>
  );
}
