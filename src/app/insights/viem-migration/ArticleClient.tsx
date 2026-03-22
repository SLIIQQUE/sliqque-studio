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
                10 min read
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-8">
              Why We Switched to Viem
            </h1>

            <p className="text-lg font-body text-white/60 leading-relaxed">
              A practical look at migrating our entire Web3 stack from Web3.js to Viem — what worked, what didn't, and whether we recommend it.
            </p>

            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
              <div className="w-10 h-10 bg-white/10 rounded-full overflow-hidden">
                <Image
                  src="/images/Gabriel.jpg"
                  alt="Gabriel Njoabozia"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
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
              Background
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              We've been building Web3 products since 2021. For most of that time,
              Web3.js was the default choice for Ethereum interactions. It worked,
              but it came with friction — large bundle sizes, TypeScript struggles,
              and an API that felt dated.
            </p>
            <p className="text-base font-body text-white/60 leading-relaxed">
              When Viem launched, we were skeptical. Another Ethereum library?
              But after hearing consistently positive feedback from the community
              and seeing Wagmi (which we were already using) adopt it as its core,
              we decided to evaluate it seriously.
            </p>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              The Migration Process
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Our migration took place over two weeks, affecting three production
              applications. Here's what we learned.
            </p>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Bundle Size: The Immediate Win
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              This was the first thing we noticed. Viem's tree-shakeable architecture
              means you only ship what you use.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`// Before: Web3.js
import Web3 from 'web3'
const web3 = new Web3(rpcUrl)
// Bundle: ~140KB gzipped

// After: Viem
import { createPublicClient, http } from 'viem'
const client = createPublicClient({ transport: http(rpcUrl) })
// Bundle: ~30KB gzipped`}
              </code>
            </pre>
            <p className="text-base font-body text-white/60 leading-relaxed">
              For our applications, this translated to ~45% reduction in Web3-related
              bundle size. Significant, especially on mobile.
            </p>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              TypeScript: Actually Works Now
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Web3.js TypeScript support was... optimistic at best. Viem was built
              with TypeScript from day one, and it shows.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`// TypeScript actually catches mistakes now
import { erc20Abi } from 'viem'

const balance = await client.readContract({
  address: tokenAddress,
  abi: erc20Abi, // Fully typed ABI
  functionName: 'balanceOf',
  args: [address], // TypeScript knows this needs an address
})

// Try passing a string to args that expects an array?
// TypeScript: "Type 'string' is not assignable to type 'Address'"`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              The API: Cleaner, More Predictable
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Viem's API follows a consistent pattern. Actions are grouped
              logically, and the naming is intuitive.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`// Web3.js - inconsistent methods
const balance = await contract.methods.balanceOf(address).call()
const tx = await web3.eth.sendTransaction({...})
const gas = await web3.eth.estimateGas({...})

// Viem - consistent pattern
const balance = await client.readContract({...})
const txHash = await client.sendTransaction({...})
const gas = await client.estimateGas({...})`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              What Was Tricky
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              No migration is painless. Here were our friction points:
            </p>
            <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
              <li><strong>Custom ABIs</strong> — We had complex custom ABIs that needed rewriting. Not hard, just tedious.</li>
              <li><strong>Event parsing</strong> — Viem's event decoding works differently. Took some adjustment.</li>
              <li><strong>Provider differences</strong> — Viem doesn't include a provider. You need wagmi or a separate provider setup.</li>
              <li><strong>Historical reads</strong> — Some patterns for fetching historical data needed rethinking.</li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Performance Improvements
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Beyond bundle size, we saw measurable performance improvements:
            </p>
            <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
              <li>~20% faster initial RPC calls due to optimized transport layer</li>
              <li>Better request batching with VIEM's public client</li>
              <li>More reliable reconnection handling</li>
              <li>Reduced memory footprint</li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Would We Recommend It?
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              <strong>Yes.</strong> If you're starting a new Web3 project, use Viem.
              If you're maintaining a Web3.js project, migrate when you have bandwidth.
            </p>
            <p className="text-base font-body text-white/60 leading-relaxed">
              The bundle size reduction alone justifies the switch. The TypeScript
              improvements alone justify the switch. Combined with better performance
              and a more maintainable codebase, it's not even close.
            </p>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Migration Checklist
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              If you're planning a migration:
            </p>
            <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
              <li>Set aside dedicated time (estimate 1-2 weeks for full migration)</li>
              <li>Write tests for critical transaction flows before starting</li>
              <li>Migrate one application at a time</li>
              <li>Use wagmi if you're using React — the integration is seamless</li>
              <li>Keep Web3.js around during transition for edge cases</li>
            </ul>

            <div className="bg-white/5 p-6 rounded-[2px]">
              <p className="text-sm font-body text-white/80">
                Building with Web3 and considering a stack change? We've migrated
                dozens of projects and can help you plan the transition.
              </p>
              <Link href="/contact" className="text-orange-400 hover:underline mt-2 inline-block">
                Let's discuss your architecture →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-white/5"
          >
            <p className="text-sm font-body text-muted">
              Building a Web3 product?{" "}
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
