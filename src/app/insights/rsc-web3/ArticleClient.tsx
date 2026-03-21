"use client";

import React from "react";
import Image from "next/image";
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
                Jan 2026
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
                7 min read
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-8">
              React Server Components in a Web3 App
            </h1>

            <p className="text-lg font-body text-white/60 leading-relaxed">
              How we're using React Server Components to reduce client-side
              JavaScript and improve the initial load experience for data-heavy
              Web3 applications.
            </p>

            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
              <div className="w-10 h-10 bg-white/10 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                  alt="Gabriel Njoabozia"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
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
              Web3 applications are notoriously heavy. Wallet SDKs, ethers.js or
              viem, React Query, and on-chain data transforms all add
              significant JavaScript to your bundle. React Server Components
              (RSC) offer a compelling solution: move data fetching and static
              content to the server, ship less JavaScript to the client.
            </p>
            <p className="text-base font-body text-white/60 leading-relaxed">
              We've been using RSC in production for six months. Here's what
              we've learned.
            </p>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              The Problem with Client-Heavy Web3 Apps
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Traditional Web3 apps fetch data on the client. This means:
            </p>
            <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
              <li>Loading spinners while data fetches</li>
              <li>Large JavaScript bundles including wallet SDKs</li>
              <li>Poor SEO for public data (token prices, NFT metadata)</li>
              <li>Hydration mismatches between server and client state</li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Server Components for On-Chain Data
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              The key insight: most Web3 data is public. Token balances, NFT
              metadata, protocol stats—none of this requires client-side
              JavaScript to fetch. With RSC, we can fetch this data on the
              server.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`// app/dashboard/page.tsx (Server Component)
import { getServerTokenBalances } from '@/lib/contracts'

export default async function Dashboard() {
  const balances = await getServerTokenBalances()
  
  return (
    <div>
      {balances.map(token => (
        <TokenBalance key={token.address} {...token} />
      ))}
    </div>
  )
}`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              The "use client" Boundary
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Only hydrate what needs hydration. Our pattern:
            </p>
            <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
              <li>
                <strong>Server:</strong> Token lists, price feeds, NFT metadata,
                static pools
              </li>
              <li>
                <strong>Client:</strong> Wallet connect button, transaction
                forms, live price updates
              </li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Results
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              After migrating our dashboard to RSC:
            </p>
            <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
              <li>Client bundle reduced by 45%</li>
              <li>First Contentful Paint improved by 1.2s</li>
              <li>SEO traffic increased 30% for public pages</li>
              <li>Wallet SDK only loads when user clicks "Connect"</li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Conclusion
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              RSC isn't a silver bullet, but for public Web3 data, it's
              transformative. By moving data fetching to the server, you reduce
              JavaScript, improve performance, and get better SEO—without
              sacrificing the interactive wallet experience users expect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-white/5"
          >
            <p className="text-sm font-body text-muted">
              Building a data-heavy Web3 product?{" "}
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
