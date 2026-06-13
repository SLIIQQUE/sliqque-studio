"use client";
import React from "react";
import ArticleLayout from "@/components/layout/ArticleLayout";

export default function ArticleClient() {
  return (
    <ArticleLayout
      date="Dec 2025"
      readTime="9 min read"
      title="Building a Design System from Scratch"
      description="How SLIIQQUE architects design systems for clients: tokens, component architecture, accessibility, and team adoption strategies."
      heroImage="/images/insights/design-system.webp"
      heroAlt="Design system component architecture with design tokens, UI components, and accessibility standards"
    >
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Why Every Product Needs a Design System
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        A design system is not a component library. It&apos;s a shared language between designers and developers that scales the product without scaling the team. At SLIIQQUE, we&apos;ve built design systems for early-stage startups and enterprise products alike. The investment pays for itself within months: design-to-development handoff becomes faster, UI inconsistencies disappear, and new features ship with pre-audited components.               The alternative, every team building their own buttons, modals, and form fields, is technical debt disguised as speed.
      </p>
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Phase 1: Design Tokens
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Design tokens are the atomic units of a design system: colors, typography scales, spacing units, shadows, and border radii. Every component references tokens rather than hard-coded values. This creates a single source of truth that can be updated globally.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`// tailwind.config.ts: theme tokens as the foundation
const config: Config = {
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0a0a0a",
          raised: "#141414",
          overlay: "#1e1e1e",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
        text: {
          primary: "#fafafa",
          secondary: "#a1a1aa",
          muted: "#71717a",
        },
      },
      spacing: {
        "4xs": "2px",
        "3xs": "4px",
        "2xs": "8px",
        xs: "12px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "48px",
        "2xl": "64px",
      },
      fontFamily: {
        display: ["Cabinet Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
}`}
        </code>
      </pre>
      <p className="text-base font-body text-white/60 leading-relaxed">
        We define tokens in Tailwind&apos;s config and export them as CSS custom properties for runtime access.               This dual approach means components can use Tailwind utilities during development while CSS variables power dynamic theming. This enables dark mode, high-contrast mode, or client-specific branding with zero code changes.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`/* CSS variables: the runtime layer for dynamic theming */
:root {
  --color-surface: #0a0a0a;
  --color-surface-raised: #141414;
  --color-accent: #f97316;
  --color-text-primary: #fafafa;
}

[data-theme="light"] {
  --color-surface: #ffffff;
  --color-surface-raised: #f5f5f5;
  --color-accent: #ea580c;
  --color-text-primary: #0a0a0a;
}

/* Toggle theme with a single attribute swap */
function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg"
      style={{
        backgroundColor: "var(--color-surface-raised)",
        color: "var(--color-text-primary)",
      }}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  )
}`}
        </code>
      </pre>
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Phase 2: Component Architecture with cva
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Every component in the system needs defined variants, sizes, and states. Class Variance Authority (cva) provides a type-safe API for managing component variants without the complexity of a full styling framework.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"

const buttonVariants = cva(
  // Base styles, applied to every variant
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700",
        secondary: "bg-surface-raised text-text-primary hover:bg-white/10",
        ghost: "hover:bg-white/5 text-text-secondary hover:text-text-primary",
        destructive: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}`}
        </code>
      </pre>
      <p className="text-base font-body text-white/60 leading-relaxed">
        This pattern ensures that the Button component accepts only valid variant and size combinations. TypeScript enforces it, cva generates the classes, and clsx composes them with any custom classes. Every component in the system follows this same architecture.
      </p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Phase 3: Accessible Primitives with Radix UI
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Accessibility is not optional. WCAG 2.2 AA compliance is our baseline for every component.               We build on Radix UI primitives because they implement ARIA patterns correctly: keyboard navigation, focus management, and screen reader announcements, so we don&apos;t have to reinvent accessible interaction patterns.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`import * as Dialog from "@radix-ui/react-dialog"
import { clsx } from "clsx"

function Modal({ open, onOpenChange, title, children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={clsx(
            "fixed inset-0 bg-black/60 backdrop-blur-sm",
            "data-[state=open]:animate-in data-[state=closed]:animate-out"
          )}
        />
        <Dialog.Content
          className={clsx(
            "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
            "bg-surface-raised border border-white/10 rounded-xl p-6",
            "w-[90vw] max-w-md max-h-[85vh] overflow-y-auto",
            "data-[state=open]:animate-in data-[state=closed]:animate-out"
          )}
        >
          <Dialog.Title className="font-display text-lg font-bold">
            {title}
          </Dialog.Title>
          {children}
          <Dialog.Close className="absolute top-4 right-4 text-muted hover:text-white">
            <X size={16} aria-hidden="true" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}`}
        </code>
      </pre>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Every Radix primitive handles focus trapping, escape key dismissal, and ARIA attributes. We layer our design tokens and animation patterns on top, and the result is an accessible component that works with keyboards, screen readers, and voice control.
      </p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Phase 4: Responsive Patterns with Container Queries
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Media queries respond to the viewport, but components live in layouts.               Container queries let a component respond to its own container&apos;s size, which is critical for reusable components that appear in sidebars, modals, and full-width sections.
      </p>
      <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
        <code className="text-white/80">
{`/* ProductCard responds to its container, not the viewport */
.product-card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .product-card {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1rem;
  }
  .product-card__image {
    aspect-ratio: 1;
  }
}

@container card (max-width: 399px) {
  .product-card {
    display: flex;
    flex-direction: column;
  }
  .product-card__image {
    aspect-ratio: 16/9;
  }
}

// The component doesn't know or care where it's rendered
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card-container">
      <div className="product-card p-4 bg-surface-raised rounded-xl">
        <img className="product-card__image object-cover rounded-lg" src={product.image} alt={product.name} />
        <div>
          <h3 className="font-display font-bold">{product.name}</h3>
          <p className="text-text-secondary">{product.description}</p>
        </div>
      </div>
    </div>
  )
}`}
        </code>
      </pre>
      <p className="text-base font-body text-white/60 leading-relaxed">
        Container queries are the future of responsive design. They let you build truly independent components that adapt to their surroundings. We use them for cards, navigation bars, data tables, and form layouts.
      </p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Phase 5: Documentation and Workflow
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        A design system without documentation is just a component library. We use Storybook to catalog every component with its variants, states, and usage guidelines. Each story includes a code example, accessibility notes, and the design rationale.
      </p>
      <p className="text-base font-body text-white/60 leading-relaxed">
        For versioning, we follow semantic versioning (semver) for the design system package. Breaking changes to component APIs or token names trigger a major version. Adding variants or new components is a minor version. Bug fixes are patches. This discipline lets consuming teams upgrade on their schedule without fear of breaking changes.
      </p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Phase 6: Team Adoption
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        The best design system fails if teams don&apos;t adopt it. We&apos;ve found that adoption requires three things: easy installation (a single npm command), clear contribution guidelines, and a low-friction feedback loop. We set up a process where any developer can propose a new component or variant via a pull request, the design team reviews it against the system&apos;s principles,               and changes are published within days, not quarters.
      </p>
      <p className="text-base font-body text-white/60 leading-relaxed">
        We also run regular &ldquo;design system syncs&rdquo; where designers and engineers review recent additions, discuss friction points, and plan upcoming needs. These sessions keep the system alive and evolving rather than stagnating as a static library.
      </p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">
        Measurable Outcomes
      </h2>
      <p className="text-base font-body text-white/60 leading-relaxed">
        After six months with a mature design system, teams typically see: 50% faster feature development, 80% fewer UI inconsistencies in user-facing interfaces, and significantly faster onboarding for new engineers. One client we worked with reduced their design-to-development handoff time from two weeks to two days after implementing a shared token system and component library.
      </p>
    </ArticleLayout>
  );
}
