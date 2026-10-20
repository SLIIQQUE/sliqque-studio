import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Realty Starter Case Study",
  description:
    "Case study: a reusable, bilingual Canadian-realtor website template with a built-in CMS, Canadian mortgage and land-transfer-tax calculators, and searchable listings, live at realty.sliiqque.space.",
  openGraph: {
    title: "Realty Starter Case Study | SLIIQQUE",
    description:
      "A bilingual Canadian-realtor website template with a built-in CMS, Canadian calculators, and searchable listings, managed from one admin panel.",
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
      "Building a bilingual, CMS-powered Canadian-realtor website template the team manages without code changes.",
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
