
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ManagementSupportLeadSection from "@/components/supportPage/ManagementSupportLeadSection";

export default function FranchisePage() {
  return (
    <main className="bg-navy min-h-screen overflow-x-hidden">
      <Header />
      <ManagementSupportLeadSection/>
      <Footer />
    </main>
  );
}