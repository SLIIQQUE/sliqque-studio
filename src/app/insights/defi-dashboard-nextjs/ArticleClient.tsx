"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticleClient() {
  return (
    <div className="pt-[100px]">
      <section className="py-20 px-10 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted hover:text-white transition-colors mb-12"
            >
              <ArrowLeft size={12} />
              All Insights
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
                Mar 2026
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
                8 min read
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-8">
              How to Build a DeFi Dashboard with Next.js 14
            </h1>

            <p className="text-lg font-body text-white/60 leading-relaxed">
              A complete guide to building a real-time DeFi dashboard using
              Next.js 14 App Router, The Graph, and Wagmi. We'll cover data
              fetching, state management, and creating a smooth user experience.
            </p>

            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
              <div className="w-10 h-10 bg-white/10 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                  alt="Gabriel Njoabozia"
                  width={100}
                  height={100}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div>
                <span className="text-sm font-body font-medium block">
                  Gabriel Njoabozia
                </span>
                <span className="text-[10px] font-body text-muted uppercase tracking-[0.1em]">
                  Founder & Lead Engineer
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-10">
        <div className="max-w-3xl mx-auto prose">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Introduction
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              DeFi dashboards are one of the most common Web3 applications.
              They aggregate on-chain data, display portfolio positions, and
              help users make informed decisions about their assets. Building
              one well requires careful attention to data freshness, performance,
              and user experience.
            </p>
            <p className="text-base font-body text-white/60 leading-relaxed">
              In this guide, we'll build a complete DeFi dashboard using:
            </p>
            <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
              <li>Next.js 14 with App Router</li>
              <li>The Graph for on-chain data indexing</li>
              <li>Wagmi for Ethereum interactions</li>
              <li>React Query for server state management</li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Setting Up the Project
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              First, let's set up a new Next.js project with the required
              dependencies.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`npx create-next-app@latest defi-dashboard --typescript --tailwind
cd defi-dashboard
npm install wagmi viem @tanstack/react-query @apollo/client graphql`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Configuring Wagmi
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Wagmi provides composable hooks for Ethereum. Let's configure it
              with a provider and client.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`import { http, createConfig } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, polygon],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
})`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Fetching Data from The Graph
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              The Graph provides indexed data from Ethereum. We'll use it to
              fetch swap events, liquidity positions, and token balances.
            </p>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Conclusion
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Building a production DeFi dashboard requires balancing data
              freshness, performance, and UX. By using The Graph for indexed
              data, Wagmi for wallet interactions, and React Query for server
              state, we can create a responsive, maintainable application.
            </p>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Working on a DeFi product? We'd love to hear about it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-white/5"
          >
            <p className="text-sm font-body text-muted">
              Need help building your DeFi product?{" "}
              <Link href="/contact" className="text-white hover:underline">
                Let's talk →
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
