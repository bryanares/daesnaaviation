# DAESNA Engineering — Website

A minimal, production-ready marketing site built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**.

## Setup

```bash
cd daesna-engineering
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run production server
npm run lint    # ESLint
```

## Before going live — replace these placeholders

Search the repo for each token and replace with real values.

| Placeholder | Example | Where it appears |
|-------------|---------|------------------|
| `[Engineer's Name]` | Jane Doe | `components/About.tsx` |
| `[PHONENUMBER]` | `254712345678` (digits only, no `+` or spaces) | `components/ContactSection.tsx`, `components/Footer.tsx` (WhatsApp link) |
| `[PHONENUMBER_DISPLAY]` | `+254 712 345 678` | `components/Footer.tsx` (visible phone + `tel:` link — use a valid `tel:+254...` href when you set a real number) |
| `[EMAIL]` | `info@daesnaengineering.com` | `components/ContactSection.tsx`, `components/Footer.tsx` |
| `FORMSPREE_ENDPOINT` / `https://formspree.io/f/YOUR_FORM_ID` | Your Formspree URL | `components/ContactSection.tsx` — until set, the form shows success without sending (demo mode). |
| `https://daesnaengineering.com` | Your production URL | `app/layout.tsx` (`metadataBase`, `openGraph.url`), `app/sitemap.ts`, `app/robots.ts` |
| `/public/og-image.png` | 1200×630 branded image | Referenced in `app/layout.tsx` — add the file under `public/` |

## Project structure

- `app/` — App Router: `layout.tsx`, `page.tsx`, `globals.css`, `sitemap.ts`, `robots.ts` (single-page site)
- `components/` — Navbar, Hero, About, services grid, academy, contact, footer
- `lib/services.ts` — service cards copy for the home grid

## Notes

- No UI component libraries — Tailwind only.
- No backend; contact form can post to Formspree when configured.
- Brand palette: navy `#0A2342`, blue `#1E4D8C`, sky `#3B82F6`, pale `#BFDBFE`, white/off-white.
- Layout is compact with no box shadows; service cards link to the contact section.
