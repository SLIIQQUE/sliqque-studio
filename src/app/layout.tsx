import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MotionConfig } from "framer-motion";
import { SchemaOrg } from "@/components/SchemaOrg";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import CursorWrapper from "@/components/ui/CursorWrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-clash",
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sliiqque.space"),
  title: {
    default: "SLIIQQUE | Website Development, AI Agents & Workflow Automation Studio",
    template: "%s | SLIIQQUE",
  },
  description:
    "SLIIQQUE is a boutique software studio building high-performance websites, AI bots and agents, workflow automation systems, and SaaS platforms. We help founders and businesses automate, engage, and grow.",
  authors: [{ name: "SLIIQQUE Studio" }],
  creator: "SLIIQQUE Studio",
  publisher: "SLIIQQUE Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sliiqque.space",
    siteName: "SLIIQQUE",
    title: "SLIIQQUE | Website Development, AI Agents & Workflow Automation Studio",
    description:
      "We build high-performance websites, AI bots and agents, workflow automation, and SaaS platforms, from concept to deployment.",
    images: [
      {
        url: "https://sliiqque.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE | Website Development, AI Agents & Workflow Automation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sliiqque",
    creator: "@sliiqque",
    title: "SLIIQQUE | Website Development, AI Agents & Workflow Automation Studio",
    description: "We build websites, AI bots, and workflow automation.",
    images: ["https://sliiqque.space/og-image.png"],
  },
  alternates: {
    canonical: "https://sliiqque.space",
  },
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(plusJakartaSans.variable, syne.variable)}>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#050505" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />

        <meta name="description" content="SLIIQQUE is a boutique software studio building high-performance websites, AI bots and agents, workflow automation systems, and SaaS platforms. We help founders and businesses automate, engage, and grow." />
        <link rel="alternate" href="https://sliiqque.space" hrefLang="en" />
        <link rel="alternate" href="https://sliiqque.space" hrefLang="x-default" />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-white selection:text-black">
        <SchemaOrg />
        <header>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:text-sm focus:font-medium">
            Skip to content
          </a>
          <ScrollProgress />
        </header>
        <CursorWrapper />
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
