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
  title: "Prime Laundry - Premium Laundry Service",
  description:
    "Professional laundry and dry cleaning services with pickup and delivery.",

  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },

  openGraph: {
    title: "Prime Laundry",
    description:
      "Professional laundry and dry cleaning services with pickup and delivery.",
    url: "https://yourdomain.com",
    siteName: "Prime Laundry",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Prime Laundry",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prime Laundry",
    description:
      "Professional laundry and dry cleaning services with pickup and delivery.",
    images: ["/logo.webp"],
  },
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