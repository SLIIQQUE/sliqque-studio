"use client";

import React from "react";
import { motion } from "framer-motion";
import InsightCard from "@/components/ui/InsightCard";

const articles = [
  {
    title: "How to Build a DeFi Dashboard with Next.js 14",
    excerpt:
      "A complete guide to building a real-time DeFi dashboard using Next.js 14 App Router, The Graph, and Wagmi. We'll cover data fetching, state management, and creating a smooth user experience.",
    date: "Mar 2026",
    readingTime: "8 min read",
    href: "/insights/defi-dashboard-nextjs",
  },
  {
    title: "MetaMask Integration in React: The Complete Guide",
    excerpt:
      "Everything you need to know about connecting MetaMask and other wallets to your React application in 2026. From basic connection to handling network changes and signing transactions.",
    date: "Feb 2026",
    readingTime: "12 min read",
    href: "/insights/metamask-react",
  },
  {
    title: "Web3 UX Patterns That Actually Work",
    excerpt:
      "After building dozens of dApps, these are the interface patterns we've found consistently improve user onboarding and reduce drop-off at critical conversion points.",
    date: "Feb 2026",
    readingTime: "6 min read",
    href: "/insights/web3-ux-patterns",
  },
  {
    title: "Why We Switched from Web3.js to Viem",
    excerpt:
      "A practical look at why we migrated our entire Web3 stack from Web3.js to Viem — the performance gains, API improvements, and lessons learned along the way.",
    date: "Jan 2026",
    readingTime: "10 min read",
    href: "/insights/viem-migration",
  },
  {
    title: "React Server Components in a Web3 App",
    excerpt:
      "How we're using React Server Components to reduce client-side JavaScript and improve the initial load experience for data-heavy Web3 applications.",
    date: "Jan 2026",
    readingTime: "7 min read",
    href: "/insights/rsc-web3",
  },
  {
    title: "Building a Token-Gated Interface with Wagmi",
    excerpt:
      "Step-by-step guide to implementing token-gated content in your Next.js application using Wagmi, including handling dynamic gated content and access states.",
    date: "Dec 2025",
    readingTime: "9 min read",
    href: "/insights/token-gating",
  },
];

export default function InsightsPageClient() {
  return (
    <div className="pt-[100px]">
      <section className="py-32 px-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-4">
              From the Studio
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter uppercase leading-tight max-w-4xl">
              Insights
            </h1>
            <p className="mt-8 text-xl font-body text-white/60 max-w-2xl leading-relaxed">
              Technical articles, Web3 perspectives, and studio thinking.
              Written by engineers who build, for engineers who want to learn.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {articles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <InsightCard {...article} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
