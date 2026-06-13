"use client";

import React from "react";
import ArticleLayout from "@/components/layout/ArticleLayout";

export default function ArticleClient() {
  return (
    <ArticleLayout
      date="Jan 2026"
      readTime="7 min read"
      title="React Server Components in Production"
      description="How we're using React Server Components to reduce client-side JavaScript and improve the initial load experience for data-heavy frontend applications."
      heroImage="/images/insights/react-server-components.webp"
      heroAlt="React Server Components architecture diagram showing server-client boundary and data flow"
    >
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Introduction
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Modern frontend applications are heavier than ever. Analytics dashboards,
        data tables, charting libraries, and state management all add
        significant JavaScript to your bundle. React Server Components
        (RSC) offer a compelling solution: move data fetching and static
        content to the server, ship less JavaScript to the client.
      </p>
      <p className="text-base font-body text-white/60 leading-relaxed">
        We&apos;ve been using RSC in production across multiple client projects
        for the past year. Here&apos;s what we&apos;ve learned.
      </p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        The Problem with Client-Heavy Apps
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Traditional React apps fetch data on the client. This means:
      </p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li>Loading spinners while data fetches complete</li>
        <li>Large JavaScript bundles including charting and table libraries</li>
        <li>Poor SEO for content that should be indexable</li>
        <li>Waterfall requests: component loads → fetches data → renders</li>
      </ul>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        RSC for Data-Heavy Pages
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        The key insight: most application data doesn&apos;t need client-side
        JavaScript to fetch. Dashboard stats, user profiles, blog content,
        product listings. None of this requires useEffect. With RSC,
        you fetch data on the server and send HTML to the client.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// app/dashboard/page.tsx (Server Component)
import { getDashboardStats } from '@/lib/stats'
import { DashboardCharts } from './DashboardCharts'

export default async function Dashboard() {
  const stats = await getDashboardStats()

  return (
    <div>
      <h1>Welcome back</h1>
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Users" value={stats.totalUsers} />
        <StatCard label="Revenue" value={stats.revenue} />
        <StatCard label="Conversion" value={stats.conversionRate} />
      </div>
      <DashboardCharts data={stats.charts} />
    </div>
  )
}

// Note: DashboardCharts needs "use client" for interactivity
// But StatCard is pure rendering, with zero client JS needed`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        The Server/Client Boundary Pattern
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        The art of RSC is deciding what goes where:
      </p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li>
          <strong>Server Components:</strong> Data fetching, static content,
          SEO-critical HTML, database queries, API calls
        </li>
        <li>
          <strong>Client Components:</strong> Interactive UI, event handlers,
          useEffect hooks, browser-only APIs, state management
        </li>
      </ul>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Real-World Data Fetching Patterns
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Here&apos;s how we structure data fetching in production, using parallel
        requests, proper error boundaries, and streaming.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// app/projects/[id]/page.tsx: Parallel data fetching
import { Suspense } from "react"
import { notFound } from "next/navigation"

async function ProjectHeader({ id }: { id: string }) {
  const project = await getProject(id) // 200ms
  if (!project) notFound()
  return <h1>{project.name}</h1>
}

async function ProjectMetrics({ id }: { id: string }) {
  const metrics = await getMetrics(id) // 300ms
  return <MetricsDisplay data={metrics} />
}

async function ProjectTeam({ id }: { id: string }) {
  const team = await getTeam(id) // 150ms
  return <TeamList members={team} />
}

export default function ProjectPage({ params }: Props) {
  // All three fetch in PARALLEL, not waterfall
  return (
    <div>
      <Suspense fallback={<HeaderSkeleton />}>
        <ProjectHeader id={params.id} />
      </Suspense>
      <Suspense fallback={<MetricsSkeleton />}>
        <ProjectMetrics id={params.id} />
      </Suspense>
      <Suspense fallback={<TeamSkeleton />}>
        <ProjectTeam id={params.id} />
      </Suspense>
    </div>
  )
}`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        SEO Benefits
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        One of the biggest wins with RSC is SEO. Since content is rendered
        on the server, search engines can crawl and index your pages
        without executing JavaScript.
      </p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li>All server-rendered content is immediately indexable</li>
        <li>Metadata (title, description, OG tags) can be dynamic from the server</li>
        <li>No more FOUC (Flash of Unstyled Content) for search crawlers</li>
        <li>Social sharing previews work reliably through server-side OG generation</li>
      </ul>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Performance Results
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        After migrating our analytics dashboard and content pages to RSC:
      </p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li>Client bundle reduced by 45% (from 180KB to 99KB)</li>
        <li>First Contentful Paint improved by 1.2s (from 2.8s to 1.6s)</li>
        <li>SEO traffic increased 30% for server-rendered pages</li>
        <li>Charting libraries only load on pages that actually use charts</li>
      </ul>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Common Pitfalls
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        RSC isn&apos;t magic. Here&apos;s what caught us:
      </p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li><strong>Context providers</strong>. RSC can&apos;t use React Context. Wrap interactive parts in client boundaries.</li>
        <li><strong>Event handlers</strong>. You can&apos;t pass onClick to server components. Keep interactivity in &quot;use client&quot; files.</li>
        <li><strong>Client-only libraries</strong>. Anything using window/document needs to be in a client component.</li>
        <li><strong>Over-splitting</strong>. Too many tiny client components defeat the purpose. Group interactive UI thoughtfully.</li>
      </ul>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Conclusion
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        RSC isn&apos;t a silver bullet, but for data-heavy frontend applications,
        it&apos;s transformative. By moving data fetching to the server, you reduce
        JavaScript, improve performance, and get better SEO without
        sacrificing the interactive experience users expect.
      </p>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Start with one page. Move data fetching to server components.
        Add Suspense boundaries. Watch your Lighthouse scores climb.
      </p>
    </ArticleLayout>
  );
}
