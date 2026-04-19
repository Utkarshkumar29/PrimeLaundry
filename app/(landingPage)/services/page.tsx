
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ServiceSection from "@/components/servicePage/ServiceSection";

export default function FranchisePage() {
  return (
    <main className="bg-navy min-h-screen overflow-x-hidden">
      <Header />
      <ServiceSection/>
      <Footer />
    </main>
  );
}