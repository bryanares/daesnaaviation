/**
 * components/ServicesGrid.tsx
 * ─────────────────────────────────────────────────────────────
 * Services section rendered on the home page.
 * Displays all services in a responsive 2-column grid.
 * Uses lib/services.ts as the data source.
 */

import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="bg-brand-offwhite section-px py-10 md:py-12 scroll-mt-20"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-brand-sky" aria-hidden="true" />
          <span className="text-brand-sky text-xs font-semibold uppercase tracking-[0.2em]">
            Services
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
          <h2 id="services-heading" className="text-brand-navy max-w-md">
            What We Offer
          </h2>
          <p className="text-brand-navy/60 max-w-sm text-xs leading-relaxed">
            Four core engineering and aviation services, each delivered with
            precision and full regulatory compliance.
          </p>
        </div>

        {/* ── 2-column grid (1 column on mobile) ─────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          role="list"
          aria-label="DAESNA Engineering services"
        >
          {services.map((service) => (
            <div key={service.slug} role="listitem">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
