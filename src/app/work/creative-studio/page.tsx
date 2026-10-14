import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Creative Studio: Our Creative-Production Vertical",
  description:
    "Case study: our in-house creative-production platform for AI commercials, digital humans, product and fashion photography, and brand launch campaigns.",
  openGraph: {
    title: "Creative Studio Case Study | SLIIQQUE",
    description:
      "Our in-house creative-production vertical: AI commercials, digital humans, product and fashion photography, and brand launch campaigns, on its own platform.",
    images: [
      {
        url: "https://sliiqque.space/images/creative-studio-screenshot.jpg",
        width: 1280,
        height: 800,
        alt: "Creative Studio homepage",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/work/creative-studio/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Studio Case Study | SLIIQQUE",
    description:
      "Building our in-house creative-production vertical: AI commercials, digital humans, photography and brand campaigns.",
    images: ["https://sliiqque.space/images/creative-studio-screenshot.jpg"],
  },
};

export default function CreativeStudioPage() {
  return (
    <PageLayout>
      <PageSchema path="/work/creative-studio/" />
      <CaseStudyClient />
    </PageLayout>
  );
}
