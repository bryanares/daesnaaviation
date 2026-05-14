"use client";

/**
 * components/Navbar.tsx
 * Sticky nav — border only, no shadow.
 */

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Drone Academy", href: "/#drone-academy" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-blue/10"
      role="banner"
    >
      <div className="container-site section-px">
        <nav className="flex items-center justify-between h-14" aria-label="Main">
          <Link
            href="/"
            className="text-sm font-bold text-brand-navy tracking-tight hover:text-brand-blue transition-colors duration-200"
            onClick={closeMobile}
          >
            DAESNA Engineering
          </Link>

          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-2.5 py-1.5 text-xs font-medium text-brand-navy/80
                             hover:text-brand-sky hover:bg-brand-frost rounded-lg
                             transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-xs font-semibold
                       bg-brand-sky text-white hover:bg-brand-blue transition-colors duration-200"
          >
            Get in Touch
          </Link>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-brand-frost transition-colors duration-200"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span
              className={`block w-5 h-0.5 bg-brand-navy rounded transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-brand-navy rounded my-1 transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-brand-navy rounded transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-t border-brand-blue/10 overflow-hidden
                    transition-all duration-300 ease-smooth ${
                      mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
        aria-hidden={!mobileOpen}
      >
        <ul className="section-px py-3 flex flex-col gap-0.5" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMobile}
                className="block px-3 py-2 text-sm font-medium rounded-lg
                           text-brand-navy hover:text-brand-sky hover:bg-brand-frost
                           transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-1">
            <Link
              href="/#contact"
              onClick={closeMobile}
              className="block text-center px-3 py-2.5 rounded-lg text-sm font-semibold
                         bg-brand-sky text-white hover:bg-brand-blue transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
