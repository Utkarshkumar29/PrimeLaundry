import FranchiseSection from "@/components/landingPage/FranchiseSection";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function FranchisePage() {
  return (
    <main className="bg-navy min-h-screen overflow-x-hidden">
      <Header />
      <FranchiseSection />
      <Footer />
    </main>
  );
}