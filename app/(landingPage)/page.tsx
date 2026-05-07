import type { Metadata } from "next";

import AboutSection from "@/components/landingPage/AboutSection";
import CTASection from "@/components/landingPage/CTASection";
import HeroSection from "@/components/landingPage/HeroSection";
import HowItWorksSection from "@/components/landingPage/HowItWorksSection";
import PricingSection from "@/components/landingPage/PricingSection";
import PromiseSection from "@/components/landingPage/PromiseSection";
import ServicesSection from "@/components/landingPage/ServicesSection";
import StatsSection from "@/components/landingPage/StatsSection";
import TestimonialsSection from "@/components/landingPage/TestimonialsSection";
import VisionMissionSection from "@/components/landingPage/VisionMissionSection";
import WhyChooseSection from "@/components/landingPage/WhyChooseSection";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────
  title: {
    default: "Prime Laundry – Premium Dry Cleaning & Laundry Service in India",
    template: "%s | Prime Laundry",
  },
  description:
    "India's #1 warehouse-based laundry & dry cleaning franchise. Professional fabric care, doorstep pickup & delivery across India. FOCO model. Starting ₹28 Lakhs.",

  // ── Canonical URL ─────────────────────────────────────────────
  metadataBase: new URL("https://www.primelaundry.in"),
  alternates: {
    canonical: "/",
  },

  // ── Favicon / Icons ───────────────────────────────────────────
  // icon.png should be 512×512 px for best results
  // Google picks up the favicon from here AND from <link rel="icon"> in <head>
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.png", type: "image/png", sizes: "32x32"   },
      { url: "/icon.png", type: "image/png", sizes: "16x16"   },
    ],
    shortcut: "/icon.png",
    apple:    "/icon.png",      // iOS home screen icon
  },

  // ── Open Graph (Facebook / WhatsApp / LinkedIn previews) ──────
  // IMPORTANT: OG image should be 1200×630 px
  // Create a proper OG image at /public/og-image.png
  // For now using icon.png as fallback — replace asap
  openGraph: {
    title:       "Prime Laundry – Premium Dry Cleaning & Laundry Franchise",
    description:
      "India's first warehouse-based laundry franchise. Doorstep pickup & delivery, confirmed orders from Day 1. Join 500+ partners by 2029.",
    url:         "https://www.primelaundry.in",
    siteName:    "Prime Laundry",
    locale:      "en_IN",          // ← changed to en_IN for India
    type:        "website",
    images: [
      {
        // TODO: replace with a proper 1200×630 banner image
        // e.g. /public/og-image.png — a branded hero banner
        url:    "/og-image.png",
        width:  1200,
        height: 630,
        alt:    "Prime Laundry – Premium Dry Cleaning & Laundry Service",
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    title:       "Prime Laundry – Premium Dry Cleaning & Laundry Franchise",
    description:
      "India's first warehouse-based laundry franchise. Doorstep pickup & delivery. Join 500+ partners by 2029.",
    images:      ["/og-image.png"],
    // site:     "@primelaundry",   // ← add your Twitter handle if you have one
  },

  // ── Google / Robots ───────────────────────────────────────────
  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:             true,
      follow:            true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":     -1,
    },
  },

  // ── Keywords (minor signal but still useful) ──────────────────
  keywords: [
    "prime laundry",
    "laundry service india",
    "dry cleaning india",
    "laundry franchise india",
    "doorstep laundry pickup",
    "laundry franchise opportunity",
    "FOCO franchise india",
    "premium laundry service",
    "dry cleaning franchise",
    "laundry service delhi",
    "laundry service noida",
    "primelaundry.in",
  ],

  // ── Verification (add your codes from Google Search Console) ──
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  // },

  // ── App / PWA ─────────────────────────────────────────────────
  applicationName: "Prime Laundry",
  authors:         [{ name: "Prime Laundry", url: "https://www.primelaundry.in" }],
  category:        "business",
};

export default function Home() {
  return (
    <main className="bg-navy min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <PricingSection />
      <StatsSection />
      <TestimonialsSection />
      <PromiseSection />
      <CTASection />
      <Footer />
    </main>
  );
}