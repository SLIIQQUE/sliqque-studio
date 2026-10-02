import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { LegalPage } from "@/components/layout/LegalPage";
import { termsOfService } from "@/data/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using the SLIIQQUE Studio website and engaging our services: pricing, payment, intellectual property, liability and governing law.",
  alternates: {
    canonical: "https://sliiqque.space/terms/",
  },
};

export default function TermsPage() {
  return (
    <PageLayout>
      <LegalPage doc={termsOfService} />
    </PageLayout>
  );
}
