import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LEGAL_EMAIL, type LegalDocument } from "@/data/legal/types";

const focusRing =
  "focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none";

/** Replaces `{email}` in copy with a mailto link. */
function withEmail(text: string): React.ReactNode {
  const parts = text.split("{email}");
  return parts.map((part, i) => (
    <React.Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href={`mailto:${LEGAL_EMAIL}`}
          className={`text-white underline underline-offset-2 hover:no-underline ${focusRing}`}
        >
          {LEGAL_EMAIL}
        </a>
      )}
    </React.Fragment>
  ));
}

const bodyText = "text-base font-body text-white/60 leading-relaxed";

export function LegalPage({ doc }: { doc: LegalDocument }) {
  return (
    <div className="pt-[100px]">
      <section className="py-8 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted hover:text-white transition-colors mb-12 ${focusRing}`}
          >
            <ArrowLeft size={12} aria-hidden="true" />
            Back to Home
          </Link>
          <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase mb-6">
            {doc.title}
          </h1>
          <p className="text-sm font-body text-muted mb-8">Last updated: {doc.updated}</p>
          <div className="space-y-4">
            {doc.intro.map((p) => (
              <p key={p} className={bodyText}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Contents" className="py-8 px-6 md:px-10 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted mb-5">
            Contents
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            {doc.sections.map((s, i) => (
              <li key={s.id} className="text-sm font-body">
                <a
                  href={`#${s.id}`}
                  className={`flex gap-3 text-white/60 hover:text-white transition-colors ${focusRing}`}
                >
                  <span className="font-mono text-white/30 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-8 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          {doc.sections.map((s, i) => (
            <article key={s.id} id={s.id} className="scroll-mt-28 mb-12 last:mb-0">
              <h2 className="font-display font-bold text-xl tracking-tight uppercase mb-4">
                <span className="font-mono text-sm text-white/30 mr-3">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <div className="space-y-4">
                {s.paragraphs?.map((p) => (
                  <p key={p} className={bodyText}>
                    {withEmail(p)}
                  </p>
                ))}
                {s.items && (
                  <ul className="space-y-3 pl-5 list-disc marker:text-orange-500/70">
                    {s.items.map((item) => (
                      <li key={item} className={bodyText}>
                        {withEmail(item)}
                      </li>
                    ))}
                  </ul>
                )}
                {s.after?.map((p) => (
                  <p key={p} className={bodyText}>
                    {withEmail(p)}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
