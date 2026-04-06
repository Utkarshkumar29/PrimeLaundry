
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ManagementSupportSection from "../../../components/landingPage/ManagementSupportSection";

export default function FranchisePage() {
  return (
    <main className="bg-navy min-h-screen overflow-x-hidden">
      <Header />
      <ManagementSupportSection/>
      <Footer />
    </main>
  );
}