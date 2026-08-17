import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurWorkHeroSection } from "@/components/sections/our-work/our-work-hero-section";
import { OurWorkProjectsSection } from "@/components/sections/our-work/our-work-projects-section";

const brandSection = {
  slug: "our-work",
  brands: {
    ariaLabel: "Brands featured in the Dynamic Dreamz portfolio",
  },
} as const;

export function OurWorkPage() {
  return (
    <>
      <OurWorkHeroSection />
      <IndustryBrandsSection content={brandSection} mobileSpacing="spacious" />
      <OurWorkProjectsSection />
    </>
  );
}
