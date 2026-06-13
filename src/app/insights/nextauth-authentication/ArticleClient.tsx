"use client";
import React from "react";
import ArticleLayout from "@/components/layout/ArticleLayout";
export default function ArticleClient() {
  return (
    <ArticleLayout
      date="Feb 2026"
      readTime="12 min read"
      title="Building an Authentication System with NextAuth.js"
      description="Everything you need to know about implementing authentication in your Next.js application. From basic setup to handling edge cases like session management, OAuth, and route protection."
      heroImage="/images/insights/nextauth-auth.webp"
      heroAlt="NextAuth.js authentication flow diagram with OAuth providers and session management"
      ctaText="Building a SaaS product?"
    >
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Introduction</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Authentication is the entry point for most SaaS applications. NextAuth.js (now Auth.js) is the dominant choice for Next.js apps, with a million weekly npm downloads. Getting this integration right is crucial for user onboarding and security.</p>
      <p className="text-base font-body text-white/60 leading-relaxed">In this guide, we&apos;ll cover:</p>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li>Setting up NextAuth.js with multiple providers</li>
        <li>Creating a reusable sign-in button and user menu</li>
        <li>Handling session management and JWT tokens</li>
        <li>Protecting routes with middleware</li>
        <li>Best practices for production applications</li>
      </ul>
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Project Setup</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">We&apos;ll use NextAuth.js v5 (Auth.js) with Prisma as our database adapter. This combination provides type-safe session management and excellent developer experience.</p>
      <CodeBlock code={INSTALL_CODE} />
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Configuring NextAuth.js</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">First, we set up the auth configuration with our providers and database adapter.</p>
      <CodeBlock code={AUTH_CONFIG_CODE} />
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">The Auth Provider Component</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Next, wrap your application with the SessionProvider to make the session available throughout your component tree.</p>
      <CodeBlock code={PROVIDERS_CODE} />
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">The Auth Button Component</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Here&apos;s a production-ready auth button that handles loading, signed-in, and signed-out states elegantly.</p>
      <CodeBlock code={AUTH_BUTTON_CODE} />
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Route Protection with Middleware</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Protect routes at the middleware level so unauthenticated users never reach protected pages.</p>
      <CodeBlock code={MIDDLEWARE_CODE} />
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Server-Side Session Access</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Access the session in server components for personalized content and server-side data fetching.</p>
      <CodeBlock code={SESSION_CODE} />
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Production Considerations</h2>
      <ul className="list-disc list-inside text-base font-body text-white/60 leading-relaxed space-y-2">
        <li><strong>Always show loading states</strong>. Session checks can be async.</li>
        <li><strong>Handle sign-in rejection gracefully</strong>. Users may cancel OAuth popups.</li>
        <li><strong>Use secure HTTP-only cookies</strong>. Never expose JWT to client JavaScript.</li>
        <li><strong>Implement rate limiting</strong>. Protect sign-in endpoints from brute force.</li>
        <li><strong>Provide a &ldquo;magic link&rdquo; option</strong>. Reduces friction for email-only users.</li>
      </ul>
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Conclusion</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Authentication is more than just sign-in buttons. It requires handling edge cases, providing clear feedback, and respecting user experience at every step. The patterns above have served us well across dozens of SaaS projects.</p>
      <p className="text-base font-body text-white/60 leading-relaxed">Need help implementing authentication in your product? We&apos;re experienced with NextAuth.js across React, Next.js, and TypeScript applications.</p>
    </ArticleLayout>
  );
}

// --- Code examples ---

const INSTALL_CODE = `npm install next-auth@beta @auth/prisma-adapter
npm install @prisma/client prisma --save-dev

# For credentials provider (email/password)
npm install bcryptjs
npm install -D @types/bcryptjs`;

const AUTH_CONFIG_CODE = `// lib/auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma"
import { compare } from "bcryptjs"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  providers: [
    GitHub,
    Google,
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        })

        if (!user || !user.password) return null

        const isValid = await compare(
          credentials.password as string,
          user.password
        )

        if (!isValid) return null

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        }
      },
    }),
  ],
})`;

const PROVIDERS_CODE = `// app/providers.tsx
"use client"

import { SessionProvider } from "next-auth/react"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

// app/layout.tsx
import { Providers } from "./providers"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}`;

const AUTH_BUTTON_CODE = `"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react"
import Image from "next/image"

export function AuthButton() {
  const [showDropdown, setShowDropdown] = useState(false)
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="w-10 h-10 bg-white/10 rounded-full animate-pulse" />
    )
  }

  if (session?.user) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm"
        >
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || ""}
              width={24}
              height={24}
              className="rounded-full"
            />
          ) : (
            <div className="w-6 h-6 bg-white/20 rounded-full" />
          )}
          <span>{session.user.name || session.user.email}</span>
        </button>
        {showDropdown && (
          <div className="absolute top-full right-0 mt-2 bg-black border border-white/10 rounded-lg p-2 min-w-[180px]">
            <div className="px-4 py-2 text-xs text-white/40 border-b border-white/10 mb-2">
              {session.user.email}
            </div>
            <button
              onClick={() => signOut()}
              className="w-full text-left px-4 py-2 hover:bg-white/5 rounded text-sm"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => signIn("github")}
        className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
      >
        Sign in with GitHub
      </button>
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
      >
        Sign in with Google
      </button>
    </div>
  )
}`;

const MIDDLEWARE_CODE = `// middleware.ts
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // Add custom logic per route
    const path = req.nextUrl.pathname

    // Redirect authenticated users away from auth pages
    if (path.startsWith("/auth") && req.nextauth.token) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname

        // Public routes, always allow
        if (["/", "/about", "/pricing"].includes(path)) {
          return true
        }

        // Auth routes, allow even without token
        if (path.startsWith("/auth")) {
          return true
        }

        // API routes, let handlers decide
        if (path.startsWith("/api")) {
          return true
        }

        // Everything else requires authentication
        return !!token
      },
    },
  }
)

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|fonts).*)",
  ],
}`;

const SESSION_CODE = `// app/dashboard/page.tsx (Server Component)
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/auth/signin")
  }

  // Fetch user-specific data
  const projects = await getUserProjects(session.user.id)

  return (
    <div>
      <h1>Welcome back, {session.user.name}</h1>
      <div className="grid gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}`;

function CodeBlock({ code }: { code: string }) {
  return <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono"><code className="text-white/80">{code}</code></pre>;
}
