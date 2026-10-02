import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { LegalPage } from "@/components/layout/LegalPage";
import { privacyPolicy } from "@/data/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SLIIQQUE Studio collects, uses, stores and protects your personal information, your rights under NDPA and GDPR, and how to contact us.",
  alternates: {
    canonical: "https://sliiqque.space/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <PageLayout>
      <LegalPage doc={privacyPolicy} />
    </PageLayout>
  );
}
