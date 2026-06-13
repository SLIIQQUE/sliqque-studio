"use client";

import React from "react";
import ArticleLayout from "@/components/layout/ArticleLayout";

export default function ArticleClient() {
  return (
    <ArticleLayout
      date="Mar 2026"
      readTime="8 min read"
      title="How to Build a Real-Time Analytics Dashboard with Next.js"
      description="A complete guide to building a real-time analytics dashboard using Next.js App Router, Server-Sent Events, and React Query. We'll cover data fetching, state management, and creating a smooth user experience."
      heroImage="/images/insights/dashboard-analytics.webp"
      heroAlt="Real-time analytics dashboard interface showing charts, metrics, and data visualizations"
    >
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Introduction
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Real-time analytics dashboards are one of the most common frontend
        challenges. They aggregate data from multiple sources, display live
        metrics, and help users make informed decisions. Building
        one well requires careful attention to data freshness, performance,
        and user experience.
      </p>
      <p className="text-base font-body text-white/60 leading-relaxed">
        In this guide, we&apos;ll build a complete analytics dashboard using:
      </p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li>Next.js with App Router</li>
        <li>Server-Sent Events for real-time data</li>
        <li>React Query for server state management</li>
        <li>Recharts for interactive charts</li>
      </ul>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Setting Up the Project
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        First, let&apos;s set up a new Next.js project with the required
        dependencies.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`npx create-next-app@latest analytics-dashboard --typescript --tailwind
cd analytics-dashboard
npm install @tanstack/react-query recharts date-fns`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Setting Up React Query
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        React Query provides composable hooks for server state. Let&apos;s configure it
        with a provider and client that handles auto-refetching.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// app/providers.tsx
"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30 * 1000, // 30 seconds
            refetchInterval: 60 * 1000, // Auto-refresh every minute
            retry: 2,
            refetchOnWindowFocus: true,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Building the Metrics Dashboard
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Here&apos;s how we structure the main dashboard with parallel data fetching
        using React Query, reactive chart updates, and proper loading states.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// hooks/useAnalytics.ts
import { useQuery } from "@tanstack/react-query"

async function fetchMetrics() {
  const res = await fetch("/api/metrics")
  if (!res.ok) throw new Error("Failed to fetch metrics")
  return res.json()
}

export function useMetrics() {
  return useQuery({
    queryKey: ["metrics"],
    queryFn: fetchMetrics,
  })
}

export function useRevenueData(timeframe: "7d" | "30d" | "90d") {
  return useQuery({
    queryKey: ["revenue", timeframe],
    queryFn: async () => {
      const res = await fetch(\`/api/revenue?timeframe=\${timeframe}\`)
      return res.json()
    },
  })
}

export function useUserGrowth() {
  return useQuery({
    queryKey: ["user-growth"],
    queryFn: async () => {
      const res = await fetch("/api/users/growth")
      return res.json()
    },
  })
}`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Server-Sent Events for Live Data
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        For truly real-time metrics, SSE is simpler than WebSockets and
        works over standard HTTP. Here&apos;s our approach:
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// app/api/metrics/stream/route.ts
export async function GET(req: Request) {
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    start(controller) {
      // Send initial data
      const sendMetrics = async () => {
        const metrics = await getLatestMetrics()
        const data = \`data: \${JSON.stringify(metrics)}\\n\\n\`
        controller.enqueue(encoder.encode(data))
      }

      sendMetrics()

      // Push updates every 5 seconds
      const interval = setInterval(sendMetrics, 5000)

      req.signal.addEventListener("abort", () => {
        clearInterval(interval)
        controller.close()
      })
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}

// hooks/useSSE.ts: React hook for consuming SSE
export function useSSEMetrics() {
  const [data, setData] = useState<Metrics | null>(null)

  useEffect(() => {
    const eventSource = new EventSource("/api/metrics/stream")

    eventSource.onmessage = (event) => {
      const parsed = JSON.parse(event.data)
      setData(parsed)
    }

    eventSource.onerror = () => {
      // Reconnect logic: EventSource reconnects automatically
      console.warn("SSE connection error, retrying...")
    }

    return () => eventSource.close()
  }, [])

  return data
}`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        The Dashboard Layout
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Putting it all together into a responsive dashboard with stat cards,
        charts, and a data table.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// app/dashboard/page.tsx
import { Suspense } from "react"
import { StatsGrid } from "./StatsGrid"
import { RevenueChart } from "./RevenueChart"
import { UserGrowthChart } from "./UserGrowthChart"
import { RecentActivity } from "./RecentActivity"

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <p className="text-white/60">
          Real-time metrics for your business
        </p>
      </div>

      <Suspense fallback={<StatsGridSkeleton />}>
        <StatsGrid />
      </Suspense>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Suspense fallback={<ChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<ChartSkeleton />}>
          <UserGrowthChart />
        </Suspense>
      </div>

      <Suspense fallback={<TableSkeleton />}>
        <RecentActivity />
      </Suspense>
    </div>
  )
}`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Handling Real-Time Updates
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        The key challenge with real-time data is preventing unnecessary
        re-renders. Here&apos;s how we approach it:
      </p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li><strong>React Query for polling</strong>: Set refetchInterval for metrics that change slowly</li>
        <li><strong>SSE for live streams</strong>: Event counts, active users, revenue ticks</li>
        <li><strong>Optimistic updates</strong>: Update charts immediately and reconcile with server</li>
        <li><strong>Memoized selectors</strong>: Prevent chart re-renders when unrelated data changes</li>
      </ul>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Performance Optimizations
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Analytics dashboards can be expensive to render. These optimizations
        made the biggest difference for us:
      </p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li>Virtualized data tables for large datasets (&gt;1000 rows)</li>
        <li>Throttled chart updates (max 1 update per second regardless of SSE frequency)</li>
        <li>Code-split charting libraries so you only load Recharts on dashboard pages</li>
        <li>Server Components for non-interactive stat cards, resulting in zero client JS</li>
        <li>React.memo on chart components with deep comparison selectors</li>
      </ul>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Conclusion
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Building a production analytics dashboard requires balancing data
        freshness, performance, and UX. By using React Query for server
        state, SSE for live data, and thoughtful component splitting between
        server and client, we can create a responsive, maintainable application.
      </p>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Working on a data-heavy frontend? We&apos;d love to hear about your project.
      </p>
    </ArticleLayout>
  );
}
