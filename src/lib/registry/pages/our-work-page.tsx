import { IndustryBrandsSection } from "@/components/blocks/ClientLogoMarqueeBlock";
import { OurWorkCaseStudiesSection } from "@/components/blocks/CaseStudySpotlightBlock";
import { OurWorkHeroSection } from "@/components/blocks/ServiceHeroBlock";
import { OurWorkProjectsSection } from "@/components/blocks/FullPortfolioFilterBlock";

const brandSection = {
  slug: "our-work",
  brands: {
  },
} as const;

export function OurWorkPage() {
  return (
    <>
      <OurWorkHeroSection
        fullBleedShowcaseAtTablet
        layout="ourWork"
        typography="liveMontserrat"
      />
      <IndustryBrandsSection content={brandSection} density="compact" mobileSpacing="standard" />
      <OurWorkProjectsSection />
      <OurWorkCaseStudiesSection />
    </>
  );
}
