import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "BizEdge | Multi-module HRMS Platform",
  description:
    "A case study on building a comprehensive HRMS platform for SMEs with 11 modules, 2,000+ businesses, payroll compliance, and mobile apps.",
  openGraph: {
    title: "BizEdge Case Study | SLIIQQUE",
    description:
      "A case study on building a comprehensive HRMS platform for SMEs with 11 modules, 2,000+ businesses, payroll compliance, and mobile apps.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "BizEdge Case Study | SLIIQQUE",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/work/bizedge",
  },
  twitter: {
    card: "summary_large_image",
    title: "BizEdge Case Study | SLIIQQUE",
    description:
      "Building a comprehensive HRMS platform for SMEs with 11 modules, 2,000+ businesses, payroll compliance, and mobile apps.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function BizEdgePage() {
  return (
    <PageLayout>
      <CaseStudyClient />
    </PageLayout>
  );
}
