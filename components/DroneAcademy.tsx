/**
 * components/DroneAcademy.tsx
 * ─────────────────────────────────────────────────────────────
 * DAESNA Drone Academy section — highlighted with a light-blue
 * background (#EFF6FF / brand-frost) to visually separate it
 * from the services grid above.
 *
 * Displays two programme tiers as cards, plus a booking CTA.
 */

import Link from "next/link";

const PROGRAMMES = [
  {
    tier: "Junior Pilots",
    badge: "Primary School",
    ageRange: "Ages 8 – 13",
    duration: "1-Day Workshop",
    price: "KES 2,500",
    priceNote: "per student",
    highlights: [
      "Drone theory & safety basics",
      "Hands-on simulator practice",
      "Certificate of participation",
    ],
    accent: "bg-brand-sky",
  },
  {
    tier: "Future Aviators",
    badge: "Secondary School",
    ageRange: "Ages 14 – 18",
    duration: "2-Day Workshop",
    price: "KES 4,500",
    priceNote: "per student",
    highlights: [
      "Regulations overview (KCAA)",
      "Supervised outdoor flight",
      "Certificate of completion",
    ],
    accent: "bg-brand-blue",
  },
];

export default function DroneAcademy() {
  return (
    <section
      id="drone-academy"
      className="bg-brand-pale section-px py-10 md:py-12 scroll-mt-20"
      aria-labelledby="academy-heading"
    >
      <div className="container-site">
        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-brand-sky" aria-hidden="true" />
          <span className="text-brand-sky text-xs font-semibold uppercase tracking-[0.2em]">
            Drone Academy
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 items-end">
          <div>
            <h2 id="academy-heading" className="text-brand-navy mb-3">
              DAESNA Drone Academy
            </h2>
            <p className="text-brand-blue font-semibold text-sm">
              Bringing Aviation to the Classroom
            </p>
          </div>
          <p className="text-brand-navy/60 text-xs leading-relaxed">
            Our introductory drone training programme is designed specifically
            for primary and secondary school students. Through hands-on learning,
            young Kenyans explore drone theory, flight safety, basic operations,
            and core STEM concepts — sparking a passion for aviation and
            engineering from an early age.
          </p>
        </div>

        {/* ── Programme cards ─────────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          role="list"
          aria-label="Drone Academy programmes"
        >
          {PROGRAMMES.map((prog) => (
            <article
              key={prog.tier}
              role="listitem"
              className="bg-white border border-brand-blue/10 card-hover overflow-hidden rounded-xl"
              aria-labelledby={`prog-title-${prog.tier.replace(/\s/g, "-")}`}
            >
              {/* Coloured accent bar at top */}
              <div className={`h-1.5 ${prog.accent}`} aria-hidden="true" />

              <div className="p-5">
                {/* Badge */}
                <span
                  className="inline-flex items-center px-3 py-1
                             bg-brand-pale/60 text-brand-blue text-xs font-bold
                             tracking-wide mb-3 rounded-lg"
                >
                  {prog.badge}
                </span>

                {/* Title */}
                <h3
                  id={`prog-title-${prog.tier.replace(/\s/g, "-")}`}
                  className="text-brand-navy mb-1"
                >
                  {prog.tier}
                </h3>

                {/* Meta row */}
                <div className="flex flex-wrap gap-3 text-brand-navy/50 text-xs mb-4">
                  <span className="flex items-center gap-1.5">
                    {/* Age icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                    {prog.ageRange}
                  </span>
                  <span className="flex items-center gap-1.5">
                    {/* Calendar icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {prog.duration}
                  </span>
                </div>

                {/* Highlights list */}
                <ul className="space-y-1.5 mb-5" aria-label="Programme highlights">
                  {prog.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-brand-navy/65"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 pt-3 border-t border-brand-blue/10">
                  <span className="text-xl font-bold text-brand-navy">
                    {prog.price}
                  </span>
                  <span className="text-brand-navy/50 text-xs">
                    {prog.priceNote}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── School booking CTA ─────────────────────────────────── */}
        <div
          className="bg-brand-navy p-5 md:p-6 rounded-xl
                     flex flex-col md:flex-row items-center
                     justify-between gap-4"
        >
          <div>
            <h3 className="text-white mb-1 text-base">
              Ready to bring aviation to your school?
            </h3>
            <p className="text-brand-pale/70 text-xs max-w-md">
              We work directly with school administrations to schedule
              workshops, arrange transport logistics, and tailor the content
              to your curriculum.
            </p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 inline-flex items-center gap-2
                       px-5 py-2.5 rounded-lg text-sm font-semibold
                       bg-brand-sky text-white
                       hover:bg-brand-blue transition-colors duration-200
                       whitespace-nowrap"
          >
            Book for Your School
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
