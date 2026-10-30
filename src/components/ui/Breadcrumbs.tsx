import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  href?: string;
}

/** Visible breadcrumb trail; the matching BreadcrumbList JSON-LD comes from PageSchema. */
export function Breadcrumbs({ trail, className = "mb-12" }: { trail: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted">
        {trail.map((crumb, i) => (
          <li key={crumb.name} className="flex items-center gap-2">
            {i > 0 && <ChevronRight size={10} aria-hidden="true" />}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
              >
                {crumb.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-white/70 normal-case tracking-normal max-w-[60vw] truncate">
                {crumb.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
