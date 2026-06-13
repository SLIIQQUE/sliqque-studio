"use client";

import React from "react";
import ArticleLayout from "@/components/layout/ArticleLayout";

export default function ArticleClient() {
  return (
    <ArticleLayout
      date="Jan 2026"
      readTime="10 min read"
      title="Migrating from Create React App to Next.js"
      description="A practical look at migrating a production React app from Create React App to Next.js. We cover what worked, what didn't, and whether we recommend it."
      heroImage="/images/insights/cra-migration.webp"
      heroAlt="Create React App to Next.js migration path showing architecture comparison and performance improvements"
    >
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Background
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        We&apos;ve been building React applications since 2019. For most of that time,
        Create React App (CRA) was the default choice for bootstrapping projects. It worked,
        but it came with friction: slow development builds, limited configuration control,
        and no built-in routing or SSR.
      </p>
      <p className="text-base font-body text-white/60 leading-relaxed">
        When Next.js matured with the App Router in version 13+, we were skeptical
        at first. Another framework migration? But after seeing the performance gains
        and DX improvements firsthand in client projects, we decided to migrate our
        own studio site and a few production client applications.
      </p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        The Migration Process
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Our migration took place over three weeks, affecting three production
        applications. Here&apos;s what we learned.
      </p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Bundle Size: The Immediate Win
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        This was the first thing we noticed. CRA ships a heavy runtime and all
        dependencies bundled together. Next.js uses tree-shaking and automatic
        code splitting by route.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// Before: CRA, entire bundle loaded upfront
// Initial JS: ~320KB gzipped
// All routes, all components, all at once

// After: Next.js, route-based code splitting
// Home page: ~45KB gzipped
// Dashboard page: ~60KB gzipped (loaded on demand)
// Admin panel: ~35KB gzipped (loaded on demand)`}
        </code>
      </pre>
      <p className="text-base font-body text-white/60 leading-relaxed">
        For our applications, this translated to an ~65% reduction in initial
        JavaScript payload. The difference was especially noticeable on mobile
        connections.
      </p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        File-Based Routing: A Game Changer
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        CRA left routing entirely to the developer. Every project had a different
        setup like React Router v5, v6, or a custom solution. Next.js gave us
        predictable file-based routing that every developer on our team understands
        instantly.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// CRA: manual routing setup
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

// Next.js: file-based routing
// app/page.tsx          → /
// app/dashboard/page.tsx → /dashboard
// app/dashboard/settings/page.tsx → /dashboard/settings
// app/blog/[slug]/page.tsx → /blog/:slug`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Server Components: Doing More on the Server
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        The biggest paradigm shift was embracing React Server Components.
        What used to require client-side data fetching, loading spinners, and
        useEffect chains can now be a simple async component.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// CRA: client-side data fetching
function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <Spinner />
  return <PostList posts={posts} />
}

// Next.js: server component, no client JS needed
async function BlogPage() {
  const posts = await fetchPosts() // Runs on server

  return <PostList posts={posts} /> // Zero client JS
}`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        What Was Tricky
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        No migration is painless. Here were our friction points:
      </p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li><strong>Window references</strong>: Any code referencing <code className="text-white/80">window</code>, <code className="text-white/80">document</code>, or <code className="text-white/80">localStorage</code> needs to be wrapped in client components or useEffect.</li>
        <li><strong>Third-party libraries</strong>: Some npm packages assume a browser environment. We had to audit each one and add &quot;use client&quot; boundaries or find alternatives.</li>
        <li><strong>CSS-in-JS</strong>: Emotion and styled-components required extra configuration. We recommend Tailwind CSS for new Next.js projects.</li>
        <li><strong>Image migration</strong>: CRA&apos;s <code className="text-white/80">public/</code> folder approach doesn&apos;t leverage optimization. Moving to the Next.js Image component required path changes.</li>
      </ul>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Performance Improvements
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        After migrating, we measured these improvements across our applications:
      </p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li>LCP improved by 40% (from 3.2s to 1.9s)</li>
        <li>Initial bundle size dropped from ~320KB to ~85KB</li>
        <li>Time to Interactive reduced by 55%</li>
        <li>SEO traffic increased 60% thanks to server-side rendering</li>
      </ul>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Would We Recommend It?
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        <strong>Yes.</strong> If you&apos;re starting a new React project, use Next.js.
        If you&apos;re maintaining a CRA project, start planning your migration now.
        CRA is officially in maintenance mode.
      </p>
      <p className="text-base font-body text-white/60 leading-relaxed">
        The performance improvements alone justify the switch. The developer
        experience with file-based routing, server components, and automatic code splitting
        makes your team more productive. Combined with better SEO and a more
        maintainable codebase, it&apos;s not even close.
      </p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Migration Checklist
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        If you&apos;re planning a migration:
      </p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li>Set aside dedicated time (estimate 2-3 weeks for a medium app)</li>
        <li>Start with a fresh Next.js project and move code over incrementally</li>
        <li>Use the incremental adoption guide so you can keep existing pages while migrating</li>
        <li>Audit all third-party dependencies for browser-only assumptions</li>
        <li>Switch to Tailwind CSS if you&apos;re using CSS-in-JS</li>
        <li>Configure the Next.js Image component early because it&apos;s not a drop-in replacement</li>
      </ul>
    </ArticleLayout>
  );
}
