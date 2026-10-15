import { CareerBenefitIcon } from "@/components/sections/career/career-benefit-icons";
import { CareerHeroSection } from "@/components/sections/career/career-hero-section";
import { CareerOpportunitiesSection } from "@/components/sections/career/career-opportunities-section";
import { ThemeCustomizationServicesSection } from "@/components/sections/theme-customization-services-section";
import { workplaceBenefits } from "@/content/career";

export function CareerPage() {
  const benefitsContent = {
    eyebrow: workplaceBenefits.eyebrow,
    heading: workplaceBenefits.heading,
    description: workplaceBenefits.description,
    boxes: workplaceBenefits.boxes.map((box) => ({
      title: box.title,
      icon: <CareerBenefitIcon name={box.iconName} />,
    })),
  };

  return (
    <div>
      <CareerHeroSection />
      <CareerOpportunitiesSection />
      <ThemeCustomizationServicesSection
        content={benefitsContent}
        id="workplace-benefits"
        variant="yellow"
      />
    </div>
  );
}
