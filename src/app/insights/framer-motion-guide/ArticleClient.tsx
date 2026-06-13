"use client";

import React from "react";
import ArticleLayout from "@/components/layout/ArticleLayout";

export default function ArticleClient() {
  return (
    <ArticleLayout
      date="Jan 2026"
      readTime="10 min read"
      title="Why We Use Framer Motion for Production Animations"
      description="How SLIIQQUE leverages Framer Motion to create micro-interactions, page transitions, and gesture-based animations that delight users."
      heroImage="/images/insights/framer-motion.webp"
      heroAlt="Framer Motion animation sequences showing micro-interactions, gesture UI, and page transitions"
      ctaText="Want motion that tells your story?"
    >
      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Animation as a Design Discipline</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">At SLIIQQUE, we believe animation is not decoration, it&apos;s communication. A well-timed transition tells the user where content came from and where it&apos;s going. A subtle micro-interaction confirms an action without requiring a notification. A scroll-triggered parallax creates a sense of depth and narrative. Framer Motion is the tool we trust to deliver all of this in production. The studio&apos;s own site is built on it, and we&apos;ve shipped it for clients ranging from fintech dashboards to creative portfolios.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Why Framer Motion?</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">There are many animation libraries for React like react-spring, GSAP, and CSS transitions, but Framer Motion strikes the ideal balance between power and developer experience. Its declarative API integrates naturally with React&apos;s component model. Spring physics produce natural-feeling motion without manual easing curves. And features like AnimatePresence, layout animations, and gesture handling build on each other without friction.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Micro-Interactions That Delight</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">The smallest animations often have the biggest impact on perceived quality. A button that depresses on click, a toggle that slides with a spring, a card that lifts on hover. These signals make the interface feel responsive and crafted.</p>
      <CodeBlock code={BUTTON_SPRING_CODE} />
      <p className="text-base font-body text-white/60 leading-relaxed">Spring-based motion feels alive because it mimics natural physics. Unlike CSS cubic-bezier curves, springs respond dynamically: the duration adjusts based on the distance traveled. A small hover lift and a large modal entrance both feel consistent because the same spring parameters drive them.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">AnimatePresence for Mount/Unmount Transitions</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">One of React&apos;s longstanding challenges is animating elements as they leave the DOM. AnimatePresence solves this elegantly by keeping the exiting element in the tree until its exit animation completes.</p>
      <CodeBlock code={ANIMATE_PRESENCE_CODE} />
      <p className="text-base font-body text-white/60 leading-relaxed">The key prop is essential here. AnimatePresence uses it to track which elements are entering, exiting, or persisting. Every notification gets smooth enter and exit animations, and stacking new ones pushes existing items naturally.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Layout Animations for Smooth Repositioning</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">When list items reorder, or when a component changes size, the sudden jump is jarring. Framer Motion&apos;s layout prop automatically animates position and size changes by detecting the DOM rect delta.</p>
      <CodeBlock code={SORTABLE_LIST_CODE} />
      <p className="text-base font-body text-white/60 leading-relaxed">This is one of Framer Motion&apos;s most powerful features. Layout animations handle the hard part, calculating start and end positions, and animate the transition. We used this pattern in a client&apos;s Kanban board to create smooth card movement between columns.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Scroll-Triggered Animations with useInView</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Scroll-based reveals create narrative pacing. Elements fade, slide, or scale in as they enter the viewport. Framer Motion&apos;s useInView hook makes this trivial without Intersection Observer boilerplate.</p>
      <CodeBlock code={FADE_IN_SECTION_CODE} />
      <p className="text-base font-body text-white/60 leading-relaxed">The once: true option ensures the animation only fires once, avoiding distracting re-animations. The margin property lets you trigger the animation before the element fully enters the viewport, creating a more polished feel.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Stagger Children for Cascading Entrances</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">When multiple elements enter simultaneously, staggering their animation creates visual hierarchy and reduces cognitive load. Framer Motion&apos;s staggerChildren makes this trivial.</p>
      <CodeBlock code={STAGGER_CHILDREN_CODE} />
      <p className="text-base font-body text-white/60 leading-relaxed">We use staggerChildren across our own site&apos;s section entrances. The consistent rhythm of items appearing every 100ms creates a polished, deliberate feel without overwhelming the user.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Shared Layout Animations</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">The layoutId prop enables elements to morph between routes or states. When a card expands into a detail view, the shared layoutId creates a seamless transition that grounds the user in the interface.</p>
      <CodeBlock code={SHARED_LAYOUT_CODE} />
      <p className="text-base font-body text-white/60 leading-relaxed">This pattern is especially effective for image galleries, card-based layouts, and navigation transitions. The user&apos;s brain tracks the element across state changes, reducing disorientation and creating a feeling of continuity.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Gesture-Based Interactions</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Framer Motion&apos;s drag, hover, and tap gestures enable interaction patterns that feel native. A draggable carousel, a swipeable card, or a pull-to-refresh. All are achievable with a few lines of declarative motion markup.</p>
      <CodeBlock code={SWIPEABLE_CARD_CODE} />
      <p className="text-base font-body text-white/60 leading-relaxed">Gesture-driven interfaces feel more direct and responsive. We&apos;ve used drag interactions for mobile-first product cards, sortable lists, and interactive onboarding flows.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Performance Considerations</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">Framer Motion is performant because it uses CSS transforms and opacity for most animations. Those are properties the browser&apos;s compositor thread handles without triggering layout or paint. We follow a few rules: prefer transform and opacity over width, height, or top/left; keep animated layers isolated to minimize paint area; and use will-change: transform on animated elements. The result is 60fps animations even on mid-range devices.</p>

      <h2 className="font-display font-bold text-2xl tracking-tight uppercase mt-12 mb-6">Our Animation Philosophy</h2>
      <p className="text-base font-body text-white/60 leading-relaxed">At SLIIQQUE, every animation must answer: &ldquo;Does this help the user understand what&apos;s happening?&rdquo; If the answer is no, we remove it. Animation should reduce cognitive friction, not add it. A page transition that explains spatial relationships. A button press that confirms action. A loading skeleton that sets expectation. When animation serves understanding, it earns its place in the bundle.</p>

      <div className="bg-white/5 p-6 rounded-[2px]">
        <p className="text-sm font-body text-white/80">We build Framer Motion into every project we ship, from micro-interactions to page-wide narrative animations. If your product needs motion that communicates, we&apos;d love to show you what&apos;s possible.</p>
        <a href="/contact" className="text-orange-400 hover:underline mt-2 inline-block">Let&apos;s animate your product &rarr;</a>
      </div>
    </ArticleLayout>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-white/5 p-6 rounded-[2px] overflow-x-auto text-sm font-mono">
      <code className="text-white/80">{code}</code>
    </pre>
  );
}

const BUTTON_SPRING_CODE = `// A button with spring-powered hover and tap feedback
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.97 }}
  transition={{
    type: "spring",
    stiffness: 400,
    damping: 17,
  }}
  className="px-6 py-3 bg-orange-500 text-white rounded-lg"
>
  Get Started
</motion.button>`;

const ANIMATE_PRESENCE_CODE = `import { AnimatePresence, motion } from "framer-motion"

function NotificationStack({ notifications }) {
  return (
    <div className="fixed top-4 right-4 space-y-2">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white/10 backdrop-blur-xl px-4 py-3 rounded-lg"
          >
            {n.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}`;

const SORTABLE_LIST_CODE = `// Items animate to new positions when the list is filtered or reordered
function SortableList({ items }: { items: Item[] }) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  
  const sorted = [...items].sort((a, b) =>
    sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  )
  
  return (
    <div className="space-y-2">
      {sorted.map((item) => (
        <motion.div
          key={item.id}
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="p-4 bg-white/5 rounded-lg"
        >
          {item.name}
        </motion.div>
      ))}
    </div>
  )
}`;

const FADE_IN_SECTION_CODE = `import { useInView, motion } from "framer-motion"

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

// Usage: any section automatically animates in when scrolled to
<FadeInSection>
  <h2>Our Services</h2>
  <p>Content that reveals as you scroll creates a natural reading rhythm.</p>
</FadeInSection>`;

const STAGGER_CHILDREN_CODE = `const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
}

function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 gap-6"
    >
      {features.map((f) => (
        <motion.div
          key={f.title}
          variants={itemVariants}
          className="p-6 bg-white/5 rounded-lg"
        >
          <h3>{f.title}</h3>
          <p>{f.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}`;

const SHARED_LAYOUT_CODE = `// Card grid: clicking a card morphs it into the detail view
function CardGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          layoutId={card.id}
          onClick={() => setSelectedId(card.id)}
          className="p-6 bg-white/5 rounded-lg cursor-pointer"
        >
          <h3>{card.title}</h3>
          {selectedId === card.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4"
            >
              <p>Detailed content with shared layout animation.</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}`;

const SWIPEABLE_CARD_CODE = `// Swipeable card: drag to dismiss
function SwipeableCard({ children, onDismiss }) {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 150) {
          onDismiss()
        }
      }}
      whileDrag={{ scale: 1.05, rotate: 3 }}
      className="p-6 bg-white/5 rounded-lg cursor-grab active:cursor-grabbing"
    >
      {children}
    </motion.div>
  )
}`;
