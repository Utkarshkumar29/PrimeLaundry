
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import OurProcessPage from "@/components/landingPage/OurProcess";

export default function FranchisePage() {
  return (
    <main className="bg-navy min-h-screen overflow-x-hidden">
      <Header />
      <OurProcessPage/>
      <Footer />
    </main>
  );
}