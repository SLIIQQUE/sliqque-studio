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
                Feb 2026
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
                6 min read
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-8">
              Web3 UX Patterns That Work
            </h1>

            <p className="text-lg font-body text-white/60 leading-relaxed">
              After building dozens of dApps, these are the interface patterns that consistently improve onboarding and reduce abandonment.
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
              The Web3 Onboarding Problem
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Web3 products lose 80-90% of users at the wallet connection step. 
              Not because users don't want to use your product — but because we 
              make it too complicated. After shipping dozens of dApps, we've 
              identified patterns that actually work.
            </p>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Pattern 1: Progressive Disclosure
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Don't front-load blockchain complexity. Let users explore your 
              product before requiring a wallet connection. Show preview content,
              allow browsing, and only ask for connection when they try to 
              interact with blockchain data.
            </p>
            <p className="text-base font-body text-white/60 leading-relaxed">
              <strong>What works:</strong> A dashboard that shows empty states 
              with "Connect wallet to view your positions" rather than blocking 
              the entire interface behind a connection modal.
            </p>

            <div className="bg-white/5 p-6 rounded-[2px] border-l-2 border-orange-500">
              <p className="text-sm font-body text-white/60 italic">
                "We increased completed transactions by 40% just by moving the 
                wallet connection from landing to after the user had spent 
                30 seconds exploring the product."
              </p>
            </div>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Pattern 2: Expectation Setting
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Every blockchain transaction has costs and wait times. Set 
              expectations <em>before</em> the user clicks, not after.
            </p>
            <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
              <li>Show gas estimate before confirmation</li>
              <li>Indicate expected wait time for confirmation</li>
              <li>Explain what will happen in plain language</li>
              <li>Never hide fees until the final step</li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Pattern 3: Human-Readable States
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Technical transaction hashes and block numbers mean nothing to 
              regular users. Translate them.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`// Instead of: "Transaction submitted: 0x7a8b..."
// Show: "Transaction submitted! Your NFT will arrive in ~30 seconds."`}
              </code>
            </pre>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Provide status updates that answer: What is happening? How long will 
              it take? What do I need to do (if anything)?
            </p>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Pattern 4: Graceful Error Recovery
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Users will encounter rejected transactions, failed connections, 
              and network issues. Don't leave them stranded.
            </p>
            <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
              <li>Detect common errors and suggest specific fixes</li>
              <li>Provide a "Try Again" button, not just an error message</li>
              <li>Offer alternative paths when the primary action fails</li>
              <li>Remember failed attempts so users don't lose their work</li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Pattern 5: Wallet-Aware Design
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Detect wallet presence and guide users accordingly:
            </p>
            <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
              <li>If no wallet detected → Show clear installation instructions</li>
              <li>If wallet locked → Prompt to unlock, not to connect</li>
              <li>If wrong network → Provide one-click switching</li>
              <li>If insufficient balance → Show exactly how much is needed</li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Pattern 6: Transaction Batching
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              If your product requires multiple transactions, batch them when 
              possible. Users hate signing 10 confirmations in a row. When 
              batching isn't possible, show progress clearly.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`Step 1 of 3: Approving token ✗
Step 2 of 3: Staking ETH ⏳
Step 3 of 3: Confirming position ✓`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Pattern 7: Read vs Write Clarity
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Make it obvious which actions are free (reading blockchain data) 
              and which cost gas (writing to blockchain). Users should never 
              accidentally trigger a transaction.
            </p>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              What We've Learned
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              The best Web3 UX doesn't feel like Web3. It feels like any 
              modern web app — fast, responsive, and forgiving. Users shouldn't 
              need to understand blockchain to use your product.
            </p>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Every friction point is an abandonment point. Audit your product 
              from the perspective of a non-technical user who just wants to 
              complete a task. Remove everything that doesn't serve that goal.
            </p>

            <div className="bg-white/5 p-6 rounded-[2px]">
              <p className="text-sm font-body text-white/80">
                Want help applying these patterns to your product? We specialize 
                in building Web3 interfaces that users actually want to use.
              </p>
              <Link href="/contact" className="text-orange-400 hover:underline mt-2 inline-block">
                Let's discuss your project →
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
              Building a dApp?{" "}
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
