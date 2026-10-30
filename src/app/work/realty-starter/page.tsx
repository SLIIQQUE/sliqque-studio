import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Realty Starter Case Study",
  description:
    "Bilingual, REALTOR®-compliant realtor website with Toronto and GTA listings, Canadian calculators, five lead forms and a built-in CMS. Live at realty.sliiqque.space.",
  openGraph: {
    url: "https://sliiqque.space/work/realty-starter/",
    title: "Realty Starter Case Study | SLIIQQUE",
    description:
      "Bilingual, compliant realtor website with Canadian calculators, searchable listings and five lead forms, managed from one admin panel. Live at realty.sliiqque.space.",
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
      "Bilingual, REALTOR®-compliant realtor website with Canadian calculators, live listings and five lead forms, managed without code changes.",
    images: ["https://sliiqque.space/images/realty-starter-screenshot.jpg"],
  },
};

export default function RealtyStarterPage() {
  return (
    <PageLayout>
      <PageSchema path="/work/realty-starter/" meta={metadata} />
      <CaseStudyClient />
    </PageLayout>
  );
}
