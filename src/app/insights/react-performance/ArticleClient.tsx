"use client";

import React from "react";
import ArticleLayout from "@/components/layout/ArticleLayout";

function CodeBlock({ code }: { code: string }) {
  return <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono"><code className="text-white/80">{code}</code></pre>;
}

const code1 = `// Before: Every keystype in the input re-renders the entire list
function SearchPage() {
  const [query, setQuery] = useState("")
  const results = expensiveSearch(query)

  return (
    <div>
      <input onChange={e => setQuery(e.target.value)} />
      <SearchResults results={results} />
    </div>
  )
}

// After: Memoize the results, memoize the child component
function SearchPage() {
  const [query, setQuery] = useState("")

  const results = useMemo(
    () => expensiveSearch(query),
    [query]
  )

  return (
    <div>
      <input onChange={e => setQuery(e.target.value)} />
      <SearchResults results={results} />
    </div>
  )
}

const SearchResults = React.memo(function SearchResults({ results }: {
  results: SearchResult[]
}) {
  return results.map(r => <ResultItem key={r.id} {...r} />)
})`;

const code2 = `import { FixedSizeList } from "react-window"

function VirtualizedList({ items }: { items: Item[] }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={72}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <ListItem item={items[index]} />
        </div>
      )}
    </FixedSizeList>
  )
}`;

const code3 = `import dynamic from "next/dynamic"

// This component is lazy-loaded. Its code splits into a separate chunk
const ChartWidget = dynamic(
  () => import("@/components/ChartWidget"),
  {
    loading: () => <ChartSkeleton />,
    ssr: false, // Skip SSR for browser-only components
  }
)

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* ChartWidget only loads when this component mounts */}
      <ChartWidget />
    </div>
  )
}`;

const code4 = `import Image from "next/image"

<Image
  src="/hero-desktop.webp"
  alt="Product showcase"
  width={1200}
  height={675}
  priority // Above the fold, skip lazy loading
  sizes="(max-width: 768px) 100vw, 1200px"
  className="object-cover"
/>`;

const code5 = `// Report real user metrics to your analytics
import { onCLS, onFID, onLCP } from "web-vitals"

function reportWebVitals() {
  onCLS(metric => console.log("CLS:", metric.value))
  onFID(metric => console.log("FID:", metric.value))
  onLCP(metric => console.log("LCP:", metric.value))
}

// In Next.js, use the built-in reportWebVitals
export function reportWebVitals(metric: NextWebVitalsMetric) {
  analytics.track(metric.name, {
    value: metric.value,
    rating: metric.rating,
  })
}`;

export default function ArticleClient() {
  return (
    <ArticleLayout
      date="Feb 2026"
      readTime="12 min read"
      title="Performance Optimization in React: The Complete Guide"
      description="A practical guide to profiling React apps, identifying bottlenecks, and implementing optimizations that make applications feel instant."
      heroImage="/images/insights/react-performance.webp"
      heroAlt="React performance profiling tools showing component render timelines and optimization metrics"
      ctaText="Need help making your React app faster?"
    >
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Why Performance Matters</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Users expect apps to load in under two seconds and respond to interactions instantly. Every millisecond of delay costs conversions. Amazon found that every 100ms of latency cost them 1% in sales. At SLIIQQUE, we&apos;ve optimized React applications ranging from data-heavy dashboards to animation-rich marketing sites. The principles are consistent: measure first, optimize second, and never guess where the bottleneck is.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Step 1: Profiling Before Optimizing</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">The single biggest mistake teams make is optimizing without data. React DevTools Profiler, Chrome DevTools Performance tab, and Lighthouse are your first tools. Here&apos;s how we approach profiling:</p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li>Record interactions in the React Profiler and identify components that re-render unnecessarily</li>
        <li>Check the Flamegraph for components with high render duration</li>
        <li>Use &ldquo;Highlight updates when components render&rdquo; to spot visual churn</li>
        <li>Run Lighthouse CI to track Core Web Vitals across commits</li>
      </ul>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Step 2: Preventing Unnecessary Re-Renders</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">React re-renders a component when its state, props, or parent changes. Often this is wasted work. React.memo, useMemo, and useCallback help eliminate unnecessary renders, but they come with their own costs.</p>
      <CodeBlock code={code1} />
      <p className="text-base font-body text-white/60 leading-relaxed">Use React.memo when a component receives the same props frequently and renders expensive output. Use useMemo for expensive computations. Use useCallback to stabilize callback references passed to memoized children. Apply each judiciously. Premature memoization adds complexity without measurable benefit.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Step 3: Virtualization for Large Lists</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Rendering hundreds or thousands of DOM nodes kills performance. Virtualization renders only what&apos;s visible. We use react-window for its small footprint and straightforward API.</p>
      <CodeBlock code={code2} />
      <p className="text-base font-body text-white/60 leading-relaxed">For dynamic-sized items, use react-window&apos;s VariableSizeList or react-virtuoso, which handles auto-sizing out of the box. When we rebuilt a client&apos;s financial dashboard, virtualizing a 10,000-row transaction list dropped render time from 800ms to under 20ms.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Step 4: Code Splitting and Bundle Analysis</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">The average React bundle is over 500KB gzipped. Code splitting ensures users only download what they need for the current page. Next.js makes this trivial with next/dynamic.</p>
      <CodeBlock code={code3} />
      <p className="text-base font-body text-white/60 leading-relaxed">Use tools like @next/bundle-analyzer or webpack-bundle-analyzer to visualize your bundle. We&apos;ve found that three patterns consistently produce the biggest wins: splitting route-level chunks, deferring heavy third-party libraries, and lazy-loading below-the-fold images and components.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Step 5: Image Optimization</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Images account for 50%+ of page weight on most sites. Next.js&apos;s Image component handles responsive images, lazy loading, and WebP conversion automatically. But there are additional techniques:</p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li>Set explicit width and height to prevent Cumulative Layout Shift (CLS)</li>
        <li>Use priority for above-the-fold images to skip lazy loading</li>
        <li>Serve images at the correct resolution for each viewport</li>
        <li>Use blurDataURL for low-quality image placeholders (LQIP)</li>
      </ul>
      <CodeBlock code={code4} />

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Step 6: Core Web Vitals Monitoring</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Optimizing is meaningless without measurement. We integrate Core Web Vitals monitoring into every project we build. The three metrics that matter are LCP (Largest Contentful Paint), FID/INP (Interaction to Next Paint), and CLS (Cumulative Layout Shift).</p>
      <CodeBlock code={code5} />
      <p className="text-base font-body text-white/60 leading-relaxed">We set targets: LCP under 2.5s, INP under 200ms, CLS under 0.1. We then monitor these in production via RUM (Real User Monitoring) data and address regressions immediately. This discipline has helped clients maintain Lighthouse scores above 95 across every page.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Our Optimization Workflow</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">At SLIIQQUE, we follow a repeatable performance optimization workflow for every project:</p>
      <ol className="list-decimal list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li><strong>Audit:</strong> Run Lighthouse, capture a baseline trace, and profile key user flows</li>
        <li><strong>Identify:</strong> Use flamegraphs to pinpoint expensive renders and bundle analysis to find oversized dependencies</li>
        <li><strong>Prioritize:</strong> Focus on changes with the highest impact-to-effort ratio (usually code splitting and image optimization first)</li>
        <li><strong>Optimize:</strong> Apply targeted fixes like memoization, virtualization, and lazy loading while maintaining code readability</li>
        <li><strong>Verify:</strong> Re-run the same profiler traces and compare before/after metrics</li>
        <li><strong>Monitor:</strong> Set up CI thresholds and RUM alerts to catch regressions before users do</li>
      </ol>
      <p className="text-base font-body text-white/60 leading-relaxed">This workflow transforms performance from a one-time fix into a sustained discipline. The best teams don&apos;t just optimize once. They build performance into their development pipeline.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Common Pitfalls We&apos;ve Seen</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Over years of optimizing React apps, we&apos;ve seen the same mistakes repeated. Memoizing everything without profiling. Optimizing server-side code while shipping 2MB of client-side JavaScript. Perfecting the landing page while the authenticated dashboard loads for eight seconds. The antidote is always the same: measure before you act.</p>
      <p className="text-base font-body text-white/60 leading-relaxed">Another common trap is premature optimization. Using useMemo for trivial computations often costs more than it saves. We&apos;ve measured cases where a memoized value with a simple equality check was actually slower than just recomputing it. The JavaScript engine is fast; don&apos;t assume your memoization is free.</p>
    </ArticleLayout>
  );
}
