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
    <div className="font-sans [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans">
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
