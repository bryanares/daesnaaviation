/**
 * lib/services.ts
 * Services shown on the home page grid (single-page site).
 */

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  iconName: "survey" | "consulting" | "photography" | "aircraft";
  priceFrom: string;
}

export const services: Service[] = [
  {
    slug: "uav-survey-mapping",
    title: "UAV Survey & Mapping",
    shortDescription:
      "Precision aerial surveys for land, construction, agriculture, and infrastructure using professional-grade drones and photogrammetry software.",
    iconName: "survey",
    priceFrom: "From KES 25,000",
  },
  {
    slug: "aviation-consulting",
    title: "Aviation Consulting",
    shortDescription:
      "Expert guidance for individuals, companies, and institutions navigating aviation regulations, airspace management, and UAV compliance in Kenya and East Africa.",
    iconName: "consulting",
    priceFrom: "From KES 15,000",
  },
  {
    slug: "drone-photography-videography",
    title: "Drone Photography & Videography",
    shortDescription:
      "High-resolution aerial photography and cinematic video for events, real estate, tourism, and media productions.",
    iconName: "photography",
    priceFrom: "From KES 10,000",
  },
  {
    slug: "aircraft-systems-design",
    title: "Aircraft Systems & Design Consultancy",
    shortDescription:
      "Technical consultancy on aircraft systems, component design, and engineering assessments for aviation businesses, startups, and research institutions.",
    iconName: "aircraft",
    priceFrom: "From KES 50,000",
  },
];
