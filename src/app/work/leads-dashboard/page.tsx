import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Leads Dashboard Case Study: Internal Sales Desk",
  description:
    "Case study: SLIIQQUE's internal, login-gated sales desk for importing prospect sheets, removing duplicates, sending pitches and tracking every lead.",
  openGraph: {
    url: "https://sliiqque.space/work/leads-dashboard/",
    title: "Leads Dashboard Case Study | SLIIQQUE",
    description:
      "An internal sales desk with CSV import, duplicate review, email and WhatsApp outreach, a suppression list and a lead pipeline.",
    images: [
      {
        url: "https://sliiqque.space/images/leads-dashboard-leads.jpg",
        width: 1600,
        height: 1000,
        alt: "Leads Dashboard lead list with grade, signal score, contact path and stage, shown with fictional demo data",
      },
    ],
  },
  alternates: {
    canonical: "https://sliiqque.space/work/leads-dashboard/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leads Dashboard Case Study | SLIIQQUE",
    description:
      "How SLIIQQUE built its own gated sales desk, from CSV import and dedup to outreach and pipeline tracking.",
    images: ["https://sliiqque.space/images/leads-dashboard-leads.jpg"],
  },
};

export default function LeadsDashboardPage() {
  return (
    <PageLayout>
      <PageSchema path="/work/leads-dashboard/" />
      <CaseStudyClient />
    </PageLayout>
  );
}
