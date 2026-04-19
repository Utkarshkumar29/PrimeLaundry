import FranchiseSection from "@/components/landingPage/FranchiseSection";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import AboutSection from "@/components/aboutPage/AboutSection";

export default function FranchisePage() {
  return (
    <main className="bg-navy min-h-screen overflow-x-hidden">
      <Header />
      <AboutSection />
      <Footer />
    </main>
  );
}