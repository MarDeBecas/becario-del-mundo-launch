import HeroSection from "@/components/landing/HeroSection";
import AudienceSection from "@/components/landing/AudienceSection";
import ObjectivesSection from "@/components/landing/ObjectivesSection";
import MethodologySection from "@/components/landing/MethodologySection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ModulesSection from "@/components/landing/ModulesSection";
import TeamSection from "@/components/landing/TeamSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import AliadosSection from "@/components/landing/AliadosSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AudienceSection />
      <ObjectivesSection />
      <MethodologySection />
      <BenefitsSection />
      <ModulesSection />
      <TeamSection />
      <PricingSection />
      <TestimonialsSection />
      <AliadosSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
