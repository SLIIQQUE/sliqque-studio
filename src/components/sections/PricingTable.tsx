import Link from "next/link";
import { formatPrice, serviceDetails } from "@/data";

/** Comparison table built from service-details.ts, so prices here can never drift from the service pages. */
export default function PricingTable() {
  return (
    <section aria-labelledby="pricing-heading" className="py-10 px-6 md:px-10 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <span className="text-[10px] font-body font-bold uppercase tracking-[0.2em] text-white/50 block mb-4">
          Pricing
        </span>
        <h2 id="pricing-heading" className="font-display font-bold text-4xl md:text-5xl tracking-tight uppercase mb-6">
          Starting Prices Compared
        </h2>
        <p className="text-base font-body text-white/50 max-w-2xl mb-10">
          Every price is a starting price in USD. Optional add-ons on each service page raise the total.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[40rem] text-left text-sm font-body">
            <caption className="sr-only">SLIIQQUE services with starting price, what is included, and who each is for</caption>
            <thead>
              <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.2em] text-white/50">
                <th scope="col" className="py-3 pr-4 font-bold">Service</th>
                <th scope="col" className="py-3 pr-4 font-bold">Starting price</th>
                <th scope="col" className="py-3 pr-4 font-bold">What the price covers</th>
                <th scope="col" className="py-3 font-bold">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {serviceDetails.map((s) => (
                <tr key={s.slug} className="align-top">
                  <th scope="row" className="py-4 pr-4 font-display font-bold">
                    <Link href={`/services/${s.slug}`} className="underline-offset-2 hover:underline">
                      {s.title}
                    </Link>
                  </th>
                  <td className="py-4 pr-4 text-orange-400 font-bold whitespace-nowrap">{formatPrice(s.basePrice, s.unit)}</td>
                  <td className="py-4 pr-4 text-white/60">{s.included.slice(0, 4).join(", ")}</td>
                  <td className="py-4 text-white/60">{s.idealFor[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
