import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageSchema } from "@/components/PageSchema";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "ZINID: Africa's Fraud Prevention Infrastructure",
  description:
    "Earlier work by our founder, from before SLIIQQUE: ZINID, Africa's shared fraud prevention platform for digital identity and real-time risk scoring.",
  openGraph: {
    url: "https://sliiqque.space/work/zinid/",
    title: "ZINID: Earlier Work | SLIIQQUE",
    description:
      "Earlier work by our founder, from before SLIIQQUE: Africa's fraud prevention infrastructure with digital identity and real-time risk scoring.",
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
    title: "ZINID: Earlier Work | SLIIQQUE",
    description:
      "Earlier work by our founder, from before SLIIQQUE: Africa's shared fraud prevention infrastructure.",
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
