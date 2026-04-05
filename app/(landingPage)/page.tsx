
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
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-navy min-h-screen overflow-x-hidden">
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <VisionMissionSection/>
      <ServicesSection/>
      <HowItWorksSection/>
      <WhyChooseSection/>
      <PricingSection/>
      <StatsSection/>
      <TestimonialsSection/>
      <PromiseSection/>
      <CTASection/>
      <Footer/>
    </main>
  );
}
