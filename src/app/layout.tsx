import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SchemaOrg } from "@/components/SchemaOrg";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import CursorWrapper from "@/components/ui/CursorWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-clash",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sliiqque.studio"),
  title: {
    default: "SLIIQQUE — Web3 & SaaS Software Studio",
    template: "%s | SLIIQQUE",
  },
  description:
    "SLIIQQUE is a boutique software studio building high-performance Web3 and SaaS products. We partner with founders to engineer interfaces that ship, scale, and convert.",
  keywords: [
    "web3 development studio",
    "saas frontend development",
    "defi interface engineering",
    "nextjs web3 studio",
    "react web3 agency",
    "web3 product design",
    "dapp development",
  ],
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
    url: "https://sliiqque.studio",
    siteName: "SLIIQQUE",
    title: "SLIIQQUE — Web3 & SaaS Software Studio",
    description:
      "We build high-performance Web3 and SaaS products. From interface to infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLIIQQUE — Web3 & SaaS Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sliiqque",
    creator: "@sliiqque",
    title: "SLIIQQUE — Web3 & SaaS Software Studio",
    description: "We build high-performance Web3 and SaaS products.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://sliiqque.studio",
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
    <html lang="en" className={cn(inter.variable, syne.variable)}>
      <head>
        <SchemaOrg />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-white selection:text-black">
        <ScrollProgress />
        <CursorWrapper />
        {children}
      </body>
    </html>
  );
}
