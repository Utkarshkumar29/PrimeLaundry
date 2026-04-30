
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import PricingSection from "@/components/pricingPage/pricingSection";



export default function PricingPage() {
  return (
    <main className="bg-navy min-h-screen overflow-x-hidden">
      <Header />
      <PricingSection/>
      <Footer />
    </main>
  );
}