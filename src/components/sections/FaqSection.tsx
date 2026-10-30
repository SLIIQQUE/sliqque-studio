import Link from "next/link";
import { Plus } from "lucide-react";
import { homeFaqs, type FaqItem } from "@/data";
import { slugify } from "@/lib/seo";

const focusRing =
  "focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none";

interface FaqSectionProps {
  /** Defaults to the short list shown on the home page. */
  items?: FaqItem[];
  intro?: string;
  /** The quieter second link in the "Still have a question?" box. */
  secondaryLink?: { label: string; href: string };
}

/** The one FAQ design for the whole site. Uses native <details>, so every answer is in the initial
 * HTML for crawlers and answer engines and the accordion needs no JavaScript. The shared `name`
 * makes the browser close the open item when another opens, so only one is ever open. Each page emits the
 * same questions as FAQPage JSON-LD through PageSchema. */
export default function FaqSection({
  items = homeFaqs,
  intro = "What SLIIQQUE builds, what it costs, and how a project runs, before you write to us.",
  secondaryLink = { label: "Full pricing", href: "/services" },
}: FaqSectionProps = {}) {
  return (
    <section aria-labelledby="faq-heading" className="relative py-24 px-6 md:px-10 overflow-hidden border-t border-white/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-orange-500/10 via-purple-500/5 to-transparent blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <span className="flex items-center gap-3 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/50 mb-5">
              <span className="h-px w-8 bg-gradient-to-r from-orange-500 to-purple-500" aria-hidden="true" />
              FAQ
            </span>
            <h2
              id="faq-heading"
              className="font-display font-bold text-5xl md:text-6xl tracking-tight uppercase leading-[0.9] mb-6"
            >
              Straight
              <br />
              answers
            </h2>
            <p className="text-base font-body text-white/50 leading-relaxed max-w-sm mb-10">
              {intro}
            </p>

            <div className="border border-white/10 bg-white/[0.02] p-6 max-w-sm">
              <p className="font-display font-bold text-lg tracking-tight mb-2">Still have a question?</p>
              <p className="text-sm font-body text-white/50 leading-relaxed mb-5">
                Tell us what you are building and we will tell you if it is a fit.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/contact"
                  className={`text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white underline underline-offset-4 hover:no-underline ${focusRing}`}
                >
                  Start a project
                </Link>
                <Link
                  href={secondaryLink.href}
                  className={`text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/55 hover:text-white transition-colors ${focusRing}`}
                >
                  {secondaryLink.label}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border-t border-white/10">
            {items.map((faq, i) => (
              <details
                key={faq.question}
                name="faq"
                open={i === 0}
                className="group relative border-b border-white/10"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b from-orange-500 via-blue-500 to-purple-500 transition-transform duration-300 group-open:scale-y-100"
                />
                <summary
                  className={`flex cursor-pointer list-none items-start gap-5 py-7 pl-5 pr-2 [&::-webkit-details-marker]:hidden ${focusRing}`}
                >
                  <span className="mt-1.5 font-mono text-[11px] text-white/30 transition-colors group-open:text-orange-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    id={slugify(faq.question)}
                    className="flex-1 font-display font-bold text-xl md:text-2xl tracking-tight leading-snug text-white/80 transition-colors group-hover:text-white group-open:text-white"
                  >
                    {faq.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-300 group-hover:border-white/40 group-open:rotate-45 group-open:border-orange-500/60 group-open:text-orange-400"
                  >
                    <Plus size={14} />
                  </span>
                </summary>
                <p
                  data-speakable
                  className="pb-8 pl-[3.75rem] pr-12 text-base font-body text-white/60 leading-relaxed max-w-2xl"
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
