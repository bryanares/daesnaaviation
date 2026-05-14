"use client";

/**
 * components/ContactSection.tsx
 * ─────────────────────────────────────────────────────────────
 * Full contact section including:
 *  - Three contact method cards (WhatsApp, Email, Form)
 *  - Inline contact form (client component for state)
 *  - Formspree-ready — swap FORMSPREE_ENDPOINT placeholder to activate
 *
 * PLACEHOLDERS TO REPLACE:
 *  - [PHONENUMBER]  → e.g. 254712345678
 *  - [EMAIL]        → e.g. info@daesnaengineering.com
 *  - FORMSPREE_ENDPOINT → https://formspree.io/f/YOUR_FORM_ID
 */

import { useState, FormEvent } from "react";

// ── TODO: Replace with your Formspree endpoint before going live ──────
// Example: https://formspree.io/f/xxxxxxxx
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
const FORMSPREE_DEMO =
  FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID");

// ── TODO: Replace with real phone (digits only, no + or spaces) ───────
const WHATSAPP_NUMBER = "[PHONENUMBER]";

// ── TODO: Replace with real email address ─────────────────────────────
const EMAIL_ADDRESS = "[EMAIL]";

const SUBJECTS = [
  "UAV Survey",
  "Aviation Consulting",
  "Drone Photography",
  "Aircraft Consultancy",
  "Drone Academy",
  "Other",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

// ── Contact method card ───────────────────────────────────────
function ContactMethodCard({
  icon,
  title,
  detail,
  href,
  label,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex flex-col items-center text-center p-4 rounded-xl
                 bg-white border border-brand-blue/10 card-hover
                 transition-colors duration-200 group"
      aria-label={label}
    >
      <div
        className="w-11 h-11 bg-brand-frost text-brand-blue rounded-lg
                   flex items-center justify-center mb-3
                   group-hover:bg-brand-sky group-hover:text-white
                   transition-colors duration-200"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h4 className="text-brand-navy mb-0.5 text-sm">{title}</h4>
      <p className="text-brand-navy/55 text-xs">{detail}</p>
    </a>
  );
}

// ── Main component ────────────────────────────────────────────
export default function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    if (FORMSPREE_DEMO) {
      await new Promise((r) => setTimeout(r, 450));
      setStatus("success");
      setForm(INITIAL_FORM);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Shared input class
  const inputCls =
    "w-full border border-brand-blue/20 bg-brand-offwhite " +
    "px-3 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/35 " +
    "rounded-lg " +
    "focus:outline-none focus:border-brand-sky " +
    "transition-colors duration-200";

  return (
    <section
      id="contact"
      className="bg-brand-white section-px py-10 md:py-12 scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="container-site">
        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-brand-sky" aria-hidden="true" />
          <span className="text-brand-sky text-xs font-semibold uppercase tracking-[0.2em]">
            Contact
          </span>
        </div>

        <div className="mb-8">
          <h2 id="contact-heading" className="text-brand-navy mb-2">
            Get In Touch
          </h2>
          <p className="text-brand-navy/60 max-w-xl text-xs leading-relaxed">
            Have a project in mind? Need a quote? Reach out via WhatsApp, email,
            or fill in the form below — we typically respond within 24 hours.
          </p>
        </div>

        {/* ── Contact method cards ────────────────────────────────── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
          role="list"
          aria-label="Contact methods"
        >
          <div role="listitem">
            <ContactMethodCard
              icon={
                // WhatsApp icon
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              }
              title="WhatsApp"
              detail="Chat with us"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              label="Chat with DAESNA Engineering on WhatsApp"
            />
          </div>

          <div role="listitem">
            <ContactMethodCard
              icon={
                // Mail icon
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
              title="Email"
              detail="Send an email"
              href={`mailto:${EMAIL_ADDRESS}`}
              label={`Send an email to DAESNA Engineering at ${EMAIL_ADDRESS}`}
            />
          </div>

          <div role="listitem">
            <ContactMethodCard
              icon={
                // Form / document icon
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="13" y2="17" />
                </svg>
              }
              title="Contact Form"
              detail="Fill in the form below"
              href="#contact-form"
              label="Jump to the contact form below"
            />
          </div>
        </div>

        {/* ── Inline contact form ─────────────────────────────────── */}
        <div
          id="contact-form"
          className="bg-brand-offwhite border border-brand-blue/10 rounded-xl
                     p-5 md:p-6 max-w-2xl"
        >
          <h3 className="text-brand-navy mb-5 text-base">Send Us a Message</h3>

          {status === "success" ? (
            // Success state
            <div
              className="flex flex-col items-center text-center py-10 gap-4"
              role="alert"
              aria-live="polite"
            >
              <div
                className="w-16 h-16 bg-brand-frost
                           flex items-center justify-center"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                  viewBox="0 0 24 24" fill="none" stroke="#3B82F6"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4 className="text-brand-navy">Message Sent!</h4>
              <p className="text-brand-navy/60 text-sm max-w-xs">
                Thank you for reaching out. We&apos;ll get back to you within
                24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 px-6 py-2.5 bg-brand-sky text-white
                           text-sm font-semibold hover:bg-brand-blue
                           transition-colors duration-200"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              {/* Error banner */}
              {status === "error" && (
                <div
                  role="alert"
                  className="mb-6 px-4 py-3 bg-red-50
                             border border-red-200 text-red-700 text-sm"
                >
                  Something went wrong. Please try again or contact us directly
                  via WhatsApp or email.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-brand-navy/70 uppercase tracking-wider"
                  >
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Wambui"
                    className={inputCls}
                    aria-required="true"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-brand-navy/70 uppercase tracking-wider"
                  >
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={inputCls}
                    aria-required="true"
                  />
                </div>

                {/* Phone (optional) */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold text-brand-navy/70 uppercase tracking-wider"
                  >
                    Phone{" "}
                    <span className="normal-case text-brand-navy/40 font-normal tracking-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    className={inputCls}
                  />
                </div>

                {/* Subject dropdown */}
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold text-brand-navy/70 uppercase tracking-wider"
                  >
                    Subject <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={`${inputCls} cursor-pointer`}
                    aria-required="true"
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-brand-navy/70 uppercase tracking-wider"
                  >
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or enquiry…"
                    className={`${inputCls} resize-none`}
                    aria-required="true"
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center
                               justify-center gap-2
                               px-8 py-4
                               bg-brand-sky text-white font-semibold text-sm
                               hover:bg-brand-blue
                               disabled:opacity-60 disabled:cursor-not-allowed
                               transition-colors duration-200"
                    aria-label="Submit contact form"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg
                          className="animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
