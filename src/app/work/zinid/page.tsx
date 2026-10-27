import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "ZINID: Africa's Fraud Prevention Infrastructure",
  description:
    "Case study: ZINID, Africa's shared fraud prevention platform, with digital identity, real-time risk scoring, transaction monitoring and CBN-aligned AML compliance.",
  openGraph: {
    url: "https://sliiqque.space/work/zinid/",
    title: "ZINID Case Study | SLIIQQUE",
    description:
      "Africa's fraud prevention infrastructure with digital identity, real-time risk scoring, and shared intelligence across the Nigerian fintech ecosystem.",
    images: [
      {
        url: "https://sliiqque.space/images/zinid-screenshot.jpg",
        width: 1280,
        height: 800,
        alt: "ZINID fraud prevention platform interface",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/work/zinid/",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZINID Case Study | SLIIQQUE",
    description:
      "Building Africa's shared fraud prevention infrastructure for the Nigerian fintech ecosystem.",
    images: ["https://sliiqque.space/images/zinid-screenshot.jpg"],
  },
};

export default function ZinidPage() {
  return (
    <PageLayout>
      <PageSchema path="/work/zinid/" />
      <CaseStudyClient />
    </PageLayout>
  );
}
