import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Lumia | Electricity Payment Platform",
  description:
    "A case study on building Nigeria's electricity payment platform with prepaid and postpaid meters, multi-DisCo support, and instant token delivery.",
  openGraph: {
    url: "https://sliiqque.space/work/lumia/",
    title: "Lumia Case Study | SLIIQQUE",
    description:
      "A case study on building Nigeria's electricity payment platform with prepaid and postpaid meters, multi-DisCo support, and instant token delivery.",
    images: [
      {
        url: "https://sliiqque.space/images/lumia-screenshot.jpg",
        width: 1280,
        height: 800,
        alt: "Lumia electricity payment platform interface",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/work/lumia/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumia Case Study | SLIIQQUE",
    description:
      "Building Nigeria's electricity payment platform with prepaid and postpaid meters, multi-DisCo support, and instant token delivery.",
    images: ["https://sliiqque.space/images/lumia-screenshot.jpg"],
  },
};

export default function LumiaPage() {
  return (
    <PageLayout>
      <PageSchema path="/work/lumia/" />
      <CaseStudyClient />
    </PageLayout>
  );
}
