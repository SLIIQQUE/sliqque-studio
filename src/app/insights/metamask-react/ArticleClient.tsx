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
                12 min read
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-8">
              MetaMask Integration in React
            </h1>

            <p className="text-lg font-body text-white/60 leading-relaxed">
              Everything you need to know about connecting wallets to your React application.
              From basic setup to handling edge cases like network switching and account changes.
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
              Wallet connection is the entry point for most Web3 applications. 
              MetaMask remains the dominant choice, with over 30 million monthly active users.
              Getting this integration right is crucial for user onboarding.
            </p>
            <p className="text-base font-body text-white/60 leading-relaxed">
              In this guide, we'll cover:
            </p>
            <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
              <li>Setting up a React project with wagmi and viem</li>
              <li>Creating a reusable wallet connection button</li>
              <li>Handling network switching gracefully</li>
              <li>Managing account changes and disconnections</li>
              <li>Best practices for production applications</li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Project Setup
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              We'll use wagmi v2 with viem for Ethereum interactions. This combination
              provides type-safe hooks and excellent developer experience.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`npm install wagmi viem @tanstack/react-query

# For TypeScript, also install types
npm install -D @types/node`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Configuring the Wagmi Provider
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              First, we need to set up the WagmiProvider and QueryClientProvider.
              These should wrap your entire application.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`// app/providers.tsx
'use client'

import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from '@/lib/wagmi'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Wagmi Config
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Configure the chains and transports your app supports. Always include
              mainnet for broad compatibility.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`// lib/wagmi.ts
import { http, createConfig } from 'wagmi'
import { mainnet, polygon, optimism } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, polygon, optimism],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
  },
})`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              The Connect Button Component
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Here's a production-ready wallet button that handles loading, errors,
              and disconnected states elegantly.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useState } from 'react'

export function WalletButton() {
  const [showDropdown, setShowDropdown] = useState(false)
  const { address, isConnected, isConnecting } = useAccount()
  const { connect, connectors, isPending, error } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected && address) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="px-4 py-2 bg-white/10 rounded-full text-sm"
        >
          {address.slice(0, 6)}...{address.slice(-4)}
        </button>
        {showDropdown && (
          <div className="absolute top-full right-0 mt-2 bg-black border border-white/10 rounded-lg p-2">
            <button
              onClick={() => disconnect()}
              className="w-full text-left px-4 py-2 hover:bg-white/5 rounded text-sm"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        disabled={isConnecting}
        className="px-6 py-3 bg-white text-black rounded-full font-medium disabled:opacity-50"
      >
        {isConnecting ? 'Connecting...' : 'Connect Wallet'}
      </button>
      {showDropdown && (
        <div className="absolute top-full right-0 mt-2 bg-black border border-white/10 rounded-lg p-2 min-w-[200px]">
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              disabled={isPending}
              className="w-full text-left px-4 py-2 hover:bg-white/5 rounded text-sm disabled:opacity-50"
            >
              {connector.name}
            </button>
          ))}
          {error && (
            <p className="px-4 py-2 text-red-500 text-xs">
              {error.message}
            </p>
          )}
        </div>
      )}
    </div>
  )
}`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Handling Network Switching
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Users often need to switch networks. Always prompt them to add or switch
              when they try to use a feature on an unsupported chain.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`import { useSwitchChain } from 'wagmi'

export function NetworkSwitcher({ targetChainId }: { targetChainId: number }) {
  const { switchChain, isPending, error } = useSwitchChain()

  return (
    <button
      onClick={() => switchChain({ chainId: targetChainId })}
      disabled={isPending}
      className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm"
    >
      {isPending ? 'Switching...' : 'Switch to Polygon'}
    </button>
  )
}`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Listening for Account Changes
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              MetaMask can disconnect unexpectedly. Use the useAccount hook's
              listeners to handle these events gracefully.
            </p>
            <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
              <code className="text-white/80">
{`import { useAccount, useDisconnect } from 'wagmi'

export function AccountListener() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  // Handle account changes
  useEffect(() => {
    if (!address) {
      // Clear app state when disconnected externally
      localStorage.removeItem('user_session')
    }
  }, [address])

  // Handle disconnection from MetaMask popup
  window.ethereum?.on('accountsChanged', (accounts: string[]) => {
    if (accounts.length === 0) {
      disconnect()
    }
  })
}`}
              </code>
            </pre>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Production Considerations
            </h2>
            <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
              <li><strong>Always show loading states</strong> — Wallet connections take time</li>
              <li><strong>Handle rejection gracefully</strong> — Users can cancel at any point</li>
              <li><strong>Persist connection state</strong> — Use localStorage to remember recent connections</li>
              <li><strong>Support multiple wallets</strong> — Don't assume MetaMask is installed</li>
              <li><strong>Test on mobile</strong> — WalletConnect or Coinbase Wallet may be preferred</li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
              Conclusion
            </h2>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Wallet integration is more than just connecting. It requires handling
              edge cases, providing clear feedback, and respecting user experience at
              every step. The patterns above have served us well across dozens of
              Web3 projects.
            </p>
            <p className="text-base font-body text-white/60 leading-relaxed">
              Need help integrating wallets into your product? We're experienced with
              wallet connections across React, Vue, and vanilla JS applications.
            </p>
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
