/**
 * app/layout.tsx
 * ─────────────────────────────────────────────────────────────
 * Root layout — wraps every page.
 * Responsibilities:
 *  - Load Inter via next/font (Google)
 *  - Global metadata (title template, description, OG, Twitter)
 *  - Render <Navbar> and <Footer> around page content
 *  - charset via <meta charSet>, viewport + theme-color via export
 */

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ── Site-wide metadata ────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "DAESNA Engineering | Engineering the Future of Flight",
    template: "%s | DAESNA Engineering",
  },
  description:
    "DAESNA Engineering — professional UAV survey & mapping, aviation consulting, " +
    "drone photography, aircraft systems design, and drone academy services in " +
    "Kenya and East Africa.",
  keywords: [
    "UAV survey Kenya",
    "drone mapping Kenya",
    "aviation consulting Nairobi",
    "drone photography Kenya",
    "aircraft engineering Kenya",
    "KCAA UAV permit",
    "drone academy Kenya",
    "DAESNA Engineering",
  ],
  authors: [{ name: "DAESNA Engineering" }],
  creator: "DAESNA Engineering",
  // TODO: Replace with production domain
  metadataBase: new URL("https://daesnaengineering.com"),
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://daesnaengineering.com",
    siteName: "DAESNA Engineering",
    title: "DAESNA Engineering | Engineering the Future of Flight",
    description:
      "Professional UAV operations, aerial surveys, aviation consulting, and " +
      "drone education in Kenya and East Africa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DAESNA Engineering — Engineering the Future of Flight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAESNA Engineering | Engineering the Future of Flight",
    description:
      "Professional UAV operations, aerial surveys, aviation consulting, and " +
      "drone education in Kenya and East Africa.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A2342",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        {/* viewport + theme-color are emitted from the viewport export above */}
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
                     focus:z-[100] focus:px-4 focus:py-2
                     focus:bg-brand-sky focus:text-white focus:font-semibold
                     focus:text-sm focus:rounded-xl"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
