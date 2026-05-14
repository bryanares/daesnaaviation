/**
 * components/About.tsx
 * ─────────────────────────────────────────────────────────────
 * Professional profile — bio, credentials pills, brand image via next/image.
 */

import Image from "next/image";

const CREDENTIALS = [
  "Aeronautical Engineering",
  "UAV / Drone Operations",
  "Aviation Consulting",
  "Airspace Regulation Compliance",
  "Aircraft Systems Design",
  "STEM Education & Training",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-brand-white section-px py-10 md:py-12 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="container-site">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-brand-sky" aria-hidden="true" />
          <span className="text-brand-sky text-xs font-semibold uppercase tracking-[0.2em]">
            About
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h2 id="about-heading" className="text-brand-navy mb-2">
              {/* Replace [Engineer&apos;s Name] before launch */}
              Davies Esbon
            </h2>

            <p className="text-brand-blue font-semibold text-sm mb-4 tracking-wide">
              Aeronautical Engineer | Licensed Remote UAV Pilot
            </p>

            <div className="space-y-3 text-brand-navy/70 text-sm leading-relaxed">
              <p>
                Davies combines formal training in aeronautical
                engineering with extensive field experience as a licensed remote UAV
                pilot — offering clients a disciplined blend of design rigour and
                safe, compliant flight operations.
              </p>
              <p>
                DAESNA Engineering supports projects across land surveying, real
                estate, agriculture, media production, and aviation compliance,
                with datasets and documentation aligned to international practice.
                Regulatory fluency with the Kenya Civil Aviation Authority (KCAA)
                and comparable frameworks helps teams secure permits, plan
                airspace, and operate with confidence.
              </p>
              <p>
                The practice is committed to advancing aviation capacity in Africa
                through technical consulting and the DAESNA Drone Academy, which
                introduces young learners to flight theory, safety culture, and
                STEM pathways linked to aerospace careers.
              </p>
            </div>

            <div
              className="mt-6 flex flex-wrap gap-1.5"
              role="list"
              aria-label="Skills and credentials"
            >
              {CREDENTIALS.map((cred) => (
                <span
                  key={cred}
                  role="listitem"
                  className="inline-flex items-center px-3 py-1 rounded-lg
                             bg-brand-frost border border-brand-blue/20
                             text-brand-blue text-[11px] font-semibold
                             tracking-wide"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="relative w-56 h-64 md:w-64 md:h-72 rounded-xl overflow-hidden
                           border border-brand-blue/20 bg-brand-offwhite"
              >
                <Image
                  src="/images/daesna-wing-mark.svg"
                  alt="DAESNA Engineering abstract aviation brand graphic — placeholder until a profile photo is added"
                  width={800}
                  height={960}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 288px, 320px"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-3 -right-3 -z-10
                           w-56 h-64 md:w-64 md:h-72 bg-brand-navy rounded-xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
