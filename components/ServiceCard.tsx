/**
 * components/ServiceCard.tsx
 * Card links to the contact section (single-page site).
 */

import Link from "next/link";
import type { Service } from "@/lib/services";

function ServiceIcon({ name }: { name: Service["iconName"] }) {
  const props = {
    xmlns: "http://www.w3.org/2000/svg" as const,
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "survey":
      return (
        <svg {...props}>
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
        </svg>
      );
    case "consulting":
      return (
        <svg {...props}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9" y1="16" x2="13" y2="16" />
        </svg>
      );
    case "photography":
      return (
        <svg {...props}>
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case "aircraft":
    default:
      return (
        <svg {...props}>
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4 17 4 16 6 14.5 7.5L11 11 2.8 9.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L6 14l-1 4.1L2.5 19.5l.7 2.5 2.5-.7L7 19l4.1-1 2.5 4.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.4-1.1z" />
        </svg>
      );
  }
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href="/#contact"
      className="group block h-full rounded-xl focus-visible:outline-offset-2"
      aria-label={`Contact us about ${service.title}`}
    >
      <article
        className="bg-white border border-brand-blue/10 card-hover
                   flex flex-col p-5 h-full rounded-xl
                   group-hover:border-brand-sky/50 transition-colors duration-200"
        aria-labelledby={`service-title-${service.slug}`}
      >
        <div
          className="inline-flex items-center justify-center rounded-lg
                     w-11 h-11 bg-brand-frost text-brand-blue mb-4
                     group-hover:bg-brand-sky group-hover:text-white
                     transition-colors duration-200"
          aria-hidden="true"
        >
          <ServiceIcon name={service.iconName} />
        </div>

        <h3
          id={`service-title-${service.slug}`}
          className="text-brand-navy mb-2 text-base md:text-lg group-hover:text-brand-blue transition-colors duration-200"
        >
          {service.title}
        </h3>

        <p className="text-brand-navy/60 text-xs md:text-sm leading-relaxed flex-1 mb-4">
          {service.shortDescription}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-lg
                       bg-brand-pale/60 text-brand-blue text-xs font-bold tracking-wide"
          >
            {service.priceFrom}
          </span>
        </div>

        <span
          className="inline-flex items-center justify-center gap-2
                     w-full py-2.5 px-3 rounded-lg text-sm font-semibold
                     border border-brand-blue/20 text-brand-blue
                     group-hover:bg-brand-sky group-hover:border-brand-sky group-hover:text-white
                     transition-colors duration-200"
        >
          Get in Touch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
        </span>
      </article>
    </Link>
  );
}
