import Image from "next/image";
import { MIN_CLIENTS, permittedClients, type Client } from "@/data/clients";
import { foundersWebsitesDeployed } from "@/data/studio";

/**
 * "Worked with" strip: companies the founder has worked with, listed only with written permission
 * (see src/data/clients.ts). Hidden until there are at least MIN_CLIENTS permitted entries.
 * Four or more entries scroll as a marquee; fewer sit still in a centred row.
 */
const ClientMark = ({ client }: { client: Client }) => {
  const inner = client.logoSrc ? (
    <Image
      src={client.logoSrc}
      alt={client.name}
      width={160}
      height={48}
      unoptimized
      className="h-8 md:h-10 w-auto max-w-[160px] object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
    />
  ) : (
    <span className="font-display font-bold text-xl md:text-2xl tracking-tight uppercase text-white/60 group-hover:text-white transition-colors whitespace-nowrap">
      {client.name}
    </span>
  );
  return client.url ? (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${client.name} (opens in a new tab)`}
      className="group flex items-center focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] focus-visible:outline-none"
    >
      {inner}
    </a>
  ) : (
    <span className="group flex items-center">{inner}</span>
  );
};

export default function WorkedWithSection() {
  const clients = permittedClients();
  if (clients.length < MIN_CLIENTS) return null;
  const scrolling = clients.length >= 4;

  return (
    <section aria-labelledby="worked-with-heading" className="py-16 px-10 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-muted block mb-4">
            Experience
          </span>
          <h2
            id="worked-with-heading"
            className="font-display font-bold text-3xl md:text-4xl tracking-tight uppercase"
          >
            Companies our founder has worked with
          </h2>
          <p className="mt-4 text-sm font-body text-white/50 max-w-xl mx-auto leading-relaxed">
            Across {foundersWebsitesDeployed}+ websites deployed before and since SLIIQQUE was founded. Listed with
            permission; most of the work cannot be shown.
          </p>
        </div>

        {scrolling ? (
          <div className="marquee relative overflow-hidden">
            <ul aria-label="Companies our founder has worked with" className="marquee-track flex items-center w-max gap-16 py-2 pr-16">
              {clients.map((c) => (
                <li key={c.name} className="shrink-0">
                  <ClientMark client={c} />
                </li>
              ))}
              {clients.map((c) => (
                <li key={`${c.name}-copy`} aria-hidden="true" className="shrink-0 marquee-copy">
                  <ClientMark client={c} />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul aria-label="Companies our founder has worked with" className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
            {clients.map((c) => (
              <li key={c.name}>
                <ClientMark client={c} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
