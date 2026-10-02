import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import { getServiceDetail, serviceDetails } from "@/data";
import ServiceDetailClient from "./ServiceDetailClient";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};
  const url = `https://sliiqque.space/services/${service.slug}/`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.metaTitle} | SLIIQQUE`,
      description: service.metaDescription,
      url,
      images: [{ url: "https://sliiqque.space/og-image.png", width: 1200, height: 630, alt: `${service.title} | SLIIQQUE` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle} | SLIIQQUE`,
      description: service.metaDescription,
      images: ["https://sliiqque.space/og-image.png"],
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();
  return (
    <PageLayout>
      <ServiceDetailClient service={service} />
    </PageLayout>
  );
}
