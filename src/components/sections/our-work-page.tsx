import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { OurWorkCaseStudiesSection } from "@/components/sections/our-work/our-work-case-studies-section";
import { OurWorkHeroSection } from "@/components/sections/our-work/our-work-hero-section";
import { OurWorkProjectsSection } from "@/components/sections/our-work/our-work-projects-section";

const brandSection = {
  slug: "our-work",
  brands: {
  },
} as const;

export function OurWorkPage() {
  return (
    <>
      <OurWorkHeroSection />
      <IndustryBrandsSection content={brandSection} density="compact" mobileSpacing="standard" />
      <OurWorkProjectsSection />
      <OurWorkCaseStudiesSection />
    </>
  );
}
