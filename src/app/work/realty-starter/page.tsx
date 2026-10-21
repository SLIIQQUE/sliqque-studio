import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Realty Starter Case Study",
  description:
    "The website Canadian realtors switch to: bilingual, REALTOR®-compliant, and built to convert; built-in CMS, Canadian mortgage and land-transfer-tax calculators, and searchable listings, live at realty.sliiqque.space.",
  openGraph: {
    title: "Realty Starter Case Study | SLIIQQUE",
    description:
      "The website Canadian realtors switch to: bilingual, compliant, and built to convert, with Canadian calculators and searchable listings, managed from one admin panel.",
    images: [
      {
        url: "https://sliiqque.space/images/realty-starter-screenshot.jpg",
        width: 1280,
        height: 800,
        alt: "Realty Starter homepage with Toronto and GTA property search",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/work/realty-starter/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Realty Starter Case Study | SLIIQQUE",
    description:
      "The bilingual, REALTOR®-compliant website Canadian realtors switch to: live listings, Canadian calculators, managed without code changes.",
    images: ["https://sliiqque.space/images/realty-starter-screenshot.jpg"],
  },
};

export default function RealtyStarterPage() {
  return (
    <PageLayout>
      <PageSchema path="/work/realty-starter/" />
      <CaseStudyClient />
    </PageLayout>
  );
}
