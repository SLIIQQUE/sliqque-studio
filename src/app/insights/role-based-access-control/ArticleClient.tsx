"use client";

import React from "react";
import ArticleLayout from "@/components/layout/ArticleLayout";

export default function ArticleClient() {
  return (
    <ArticleLayout
      date="Dec 2025"
      readTime="9 min read"
      title="Building Role-Based Access Control with Next.js"
      description="Step-by-step guide to implementing role-based access control in your Next.js application using middleware, session-based auth, and composable protection patterns."
      heroImage="/images/insights/rbac-access-control.webp"
      heroAlt="Role-based access control hierarchy diagram illustrating user roles, permissions, and route protection layers"
    >
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Introduction
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Role-based access control (RBAC) is one of the most essential patterns
        in modern web applications. Instead of manually checking user roles
        everywhere, you build a reusable system that protects routes, components,
        and API endpoints based on user permissions. In this guide, we&apos;ll build
        a complete RBAC system using Next.js middleware and NextAuth.js.
      </p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        The Auth Hook
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        First, we need a hook that checks the current user&apos;s role and exposes
        their permissions. NextAuth.js makes this straightforward with its
        session callback.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// lib/auth.ts: NextAuth configuration with role support
import NextAuth, { DefaultSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: "admin" | "editor" | "viewer"
    } & DefaultSession["user"]
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
        session.user.id = token.id as string
      }
      return session
    },
  },
  providers: [
    // Configure your providers here
  ],
})`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        The Protect Component
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Now we build a reusable component that conditionally renders content
        based on the user&apos;s role.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`"use client"

import { useSession } from "next-auth/react"

type Role = "admin" | "editor" | "viewer"

interface ProtectProps {
  roles: Role[]
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function Protect({ roles, children, fallback }: ProtectProps) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div className="animate-pulse h-32 bg-white/5 rounded-lg" />
  }

  if (!session?.user || !roles.includes(session.user.role as Role)) {
    return fallback ?? (
      <div className="p-8 bg-white/5 rounded-xl text-center">
        <p className="text-white/60">
          You don't have permission to access this content.
        </p>
      </div>
    )
  }

  return <>{children}</>
}`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Middleware Route Protection
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        For server-side route protection, Next.js middleware is the right tool.
        It runs before the request reaches your page, so unauthorized users
        never see protected content.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// middleware.ts
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const path = req.nextUrl.pathname

    // Admin-only routes
    if (path.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    // Editor+ routes
    if (
      path.startsWith("/dashboard/settings") &&
      !["admin", "editor"].includes(token?.role as string)
    ) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
}`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Usage Example
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Here&apos;s how you&apos;d use the Protect component in a page. Notice how the
        admin panel content is only rendered for users with the admin role.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// app/dashboard/page.tsx
import { Protect } from "@/components/Protect"
import { AdminPanel } from "@/components/AdminPanel"

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Protect
        roles={["admin"]}
        fallback={<p>Contact an admin for access</p>}
      >
        <AdminPanel />
      </Protect>
    </div>
  )
}`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        API Route Protection
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Server-side API routes need protection too. Here&apos;s how to check roles
        in API handlers.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// app/api/admin/users/route.ts
import { auth } from "@/lib/auth"

export async function GET() {
  const session = await auth()

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (session.user.role !== "admin") {
    return Response.json(
      { error: "Insufficient permissions" },
      { status: 403 }
    )
  }

  // Proceed with admin-only logic
  const users = await getUsers()
  return Response.json(users)
}`}
        </code>
      </pre>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Conclusion
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Role-based access control with Next.js and NextAuth.js is
        straightforward once you understand the three-layer approach:
        middleware for route protection, the session object for server-side
        checks, and the Protect component for client-side rendering. The key
        is keeping each layer small and composable so you can reuse
        permission logic across your entire application.
      </p>
    </ArticleLayout>
  );
}
