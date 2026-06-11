import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesSection from "@/components/home/ServicesSection";
import DomainMiniSection from "@/components/home/DomainMiniSection";
import HostingPreview from "@/components/home/HostingPreview";
import CyberHighlight from "@/components/home/CyberHighlight";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <DomainMiniSection />
      <HostingPreview />
      <CyberHighlight />
      <TestimonialsSection />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
