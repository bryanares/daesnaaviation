/**
 * components/Footer.tsx
 * Compact single-band footer.
 *
 * PLACEHOLDERS: [PHONENUMBER_DISPLAY], [PHONENUMBER], [EMAIL]
 */

import Link from "next/link";

const PHONE_DISPLAY = "[PHONENUMBER_DISPLAY]";
const PHONE_WA = "[PHONENUMBER]";
const EMAIL = "[EMAIL]";

const QUICK_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Drone Academy", href: "/#drone-academy" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer
      className="bg-brand-navy section-px py-5 border-t border-white/10"
      role="contentinfo"
    >
      <div className="container-site flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-6 md:gap-y-2">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 min-w-0">
          <Link
            href="/"
            className="text-sm font-bold text-white shrink-0 hover:text-brand-pale transition-colors duration-200"
          >
            DAESNA Engineering
          </Link>
          <span className="text-brand-pale/40 hidden sm:inline" aria-hidden="true">
            ·
          </span>
          <p className="text-brand-pale/55 text-xs leading-snug">
            Engineering the Future of Flight
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs"
        >
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-pale/60 hover:text-brand-sky transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-brand-pale/55">
          <a
            href={`https://wa.me/${PHONE_WA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-sky transition-colors duration-200"
          >
            WhatsApp
          </a>
          <a
            href={`tel:+${PHONE_WA.replace(/^\+/, "")}`}
            className="hover:text-brand-sky transition-colors duration-200"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="hover:text-brand-sky transition-colors duration-200 break-all"
          >
            {EMAIL}
          </a>
          <span className="text-brand-pale/40">Nairobi</span>
          <span className="text-brand-pale/35">© 2025 DAESNA Engineering</span>
        </div>
      </div>
    </footer>
  );
}
