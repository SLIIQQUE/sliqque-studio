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
                Dec 2025
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
                9 min read
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-8">
              Building a Token-Gated Interface with Wagmi
            </h1>

            <p className="text-lg font-body text-white/60 leading-relaxed">
              Step-by-step guide to implementing token-gated content in your
              Next.js application using Wagmi, including handling dynamic gated
              content and access states.
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
              Introduction
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Token gating is one of the most powerful patterns in Web3. Instead
              of email/password, you gate access based on NFT ownership or token
              balances. In this guide, we'll build a complete token-gated
              interface using Wagmi.
            </p>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              The Core Hook
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              First, we need a hook that checks if the connected address holds a
              specific token. Wagmi makes this straightforward with their
              readContract functionality.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`import { useAccount, useReadContract } from 'wagmi'
import { useMemo } from 'react'

const ERC20_ABI = [
  {
    name: 'balanceOf',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

export function useTokenGate(tokenAddress: \`0x\${string}\`, minBalance: bigint) {
  const { address } = useAccount()

  const { data: balance } = useReadContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: [address!],
    query: { enabled: !!address },
  })

  return useMemo(() => ({
    hasAccess: !!balance && balance >= minBalance,
    balance,
    isLoading: !address || balance === undefined,
  }), [balance, minBalance, address])
}`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              The Gate Component
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Now we wrap this in a component that shows different content based
              on access.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`"use client"

import { useTokenGate } from '@/hooks/useTokenGate'
import { ConnectButton } from './ConnectButton'

interface TokenGateProps {
  tokenAddress: \`0x\${string}\`
  minBalance: bigint
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function TokenGate({
  tokenAddress,
  minBalance,
  children,
  fallback,
}: TokenGateProps) {
  const { hasAccess, isLoading } = useTokenGate(tokenAddress, minBalance)

  if (isLoading) {
    return <div className="animate-pulse h-32 bg-white/5 rounded-lg" />
  }

  if (!hasAccess) {
    return fallback ?? (
      <div className="p-8 bg-white/5 rounded-xl text-center">
        <p className="text-white/60">You need more tokens to access this content.</p>
      </div>
    )
  }

  return <>{children}</>
}`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Usage Example
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Here's how you'd use it in a page. Notice how the premium content
              is only rendered when the user has sufficient tokens.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`// app/premium/page.tsx
import { TokenGate } from '@/components/TokenGate'

const PREMIUM_TOKEN = '0x1234...' as const
const ONE_TOKEN = 1_000_000_000_000_000_000n // 1 token with 18 decimals

export default function PremiumPage() {
  return (
    <div>
      <h1>Premium Content</h1>
      <TokenGate
        tokenAddress={PREMIUM_TOKEN}
        minBalance={ONE_TOKEN}
        fallback={<UpgradePrompt />}
      >
        <ExclusiveContent />
      </TokenGate>
    </div>
  )
}`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Handling Multiple Tokens
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              For DAO governance or multi-token gates, you can compose multiple
              hooks:
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`export function useMultiTokenGate(requirements: TokenRequirement[]) {
  const results = requirements.map(req => ({
    ...req,
    ...useTokenGate(req.tokenAddress, req.minBalance),
  }))

  return {
    hasAccess: results.every(r => r.hasAccess),
    requirements: results,
    isLoading: results.some(r => r.isLoading),
  }
}`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Conclusion
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Token gating with Wagmi is straightforward once you understand the
              pattern: read the balance on-chain, compare against a threshold,
              conditionally render content. The key is keeping the gate component
              small and composable so you can reuse it across your application.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-white/5"
          >
            <p className="text-sm font-body text-muted">
              Need token gating for your product?{" "}
              <Link href="/contact" className="text-white hover:underline">
                Let's build it together →
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
