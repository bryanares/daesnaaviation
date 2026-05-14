/**
 * components/Hero.tsx
 * ─────────────────────────────────────────────────────────────
 * Hero — solid #0A2342 background, white copy, two CTAs.
 */

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[78svh] flex items-center justify-center
                 bg-brand-navy overflow-hidden scroll-mt-16 pt-14"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-brand-sky"
        aria-hidden="true"
      />

      <div className="relative z-10 container-site section-px text-center py-12 md:py-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="block w-8 h-px bg-brand-sky" aria-hidden="true" />
          <span className="text-brand-pale text-xs font-semibold uppercase tracking-[0.2em]">
            Nairobi, Kenya · East Africa
          </span>
          <span className="block w-8 h-px bg-brand-sky" aria-hidden="true" />
        </div>

        <h1
          id="hero-heading"
          className="text-white mb-4 max-w-4xl mx-auto"
        >
          Engineering the{" "}
          <span className="text-brand-sky">Future</span>{" "}
          of Flight
        </h1>

        <p className="text-brand-pale text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          Licensed remote UAV operations and aeronautical engineering — precision
          aerial surveys, regulatory-compliant flight programmes, and technical
          aviation consultancy across Kenya and East Africa.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/#services"
            className="inline-flex items-center justify-center gap-2
                       px-6 py-3 rounded-lg text-sm font-semibold
                       bg-brand-sky text-white
                       hover:bg-brand-blue transition-colors duration-200"
          >
            View Services
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

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center
                       px-6 py-3 rounded-lg text-sm font-semibold
                       border-2 border-white/30 text-white
                       hover:border-white hover:bg-white/10
                       transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        <div
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto
                     border-t border-white/10 pt-8"
          role="list"
          aria-label="Key facts"
        >
          {[
            { value: "KCAA", label: "Licensed & Compliant" },
            { value: "4", label: "Core Services" },
            { value: "UAV", label: "Survey & Photography" },
            { value: "STEM", label: "Education Programme" },
          ].map((stat) => (
            <div key={stat.label} role="listitem" className="text-center">
              <div className="text-xl font-bold text-brand-sky mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-brand-pale/70 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
