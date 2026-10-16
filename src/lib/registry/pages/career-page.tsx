import { CareerBenefitIcon } from "@/lib/icons/career-benefit-icons";
import { CareerHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { CareerOpportunitiesSection } from "@/components/blocks/JobOpeningsListBlock";
import { ThemeCustomizationServicesSection } from "@/components/blocks/ServiceOfferingsGridBlock";
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
