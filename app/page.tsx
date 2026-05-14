/**
 * app/page.tsx
 * ─────────────────────────────────────────────────────────────
 * Home page — assembles every section in order.
 * Has its own metadata for the root route.
 */

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesGrid from "@/components/ServicesGrid";
import DroneAcademy from "@/components/DroneAcademy";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  // Absolute title avoids duplicating "| DAESNA Engineering" from the root template
  title: {
    absolute: "DAESNA Engineering | Engineering the Future of Flight",
  },
  description:
    "DAESNA Engineering offers UAV survey & mapping, aviation consulting, drone " +
    "photography, aircraft systems design, and a drone academy for Kenyan schools.",
  openGraph: {
    title: "DAESNA Engineering | Engineering the Future of Flight",
    description:
      "Professional UAV operations, aerial surveys, aviation consulting, " +
      "and drone education in Kenya and East Africa.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAESNA Engineering | Engineering the Future of Flight",
    description:
      "Professional UAV operations, aerial surveys, aviation consulting, " +
      "and drone education in Kenya and East Africa.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Each section has an id matching the navbar anchor links */}
      <Hero />
      <About />
      <ServicesGrid />
      <DroneAcademy />
      <ContactSection />
    </>
  );
}
