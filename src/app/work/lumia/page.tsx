import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Lumia | Electricity Payment Platform",
  description:
    "A case study on building Nigeria's electricity payment platform with prepaid and postpaid meters, multi-DisCo support, and instant token delivery.",
  openGraph: {
    title: "Lumia Case Study | SLIIQQUE",
    description:
      "A case study on building Nigeria's electricity payment platform with prepaid and postpaid meters, multi-DisCo support, and instant token delivery.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumia Case Study | SLIIQQUE",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/work/lumia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumia Case Study | SLIIQQUE",
    description:
      "Building Nigeria's electricity payment platform with prepaid and postpaid meters, multi-DisCo support, and instant token delivery.",
    images: ["https://sliiqque.space/og-image.png"],
  },
};

export default function LumiaPage() {
  return (
    <PageLayout>
      <CaseStudyClient />
    </PageLayout>
  );
}
