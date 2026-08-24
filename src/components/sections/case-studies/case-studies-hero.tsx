import { OurWorkHeroSection } from "@/components/sections/our-work/our-work-hero-section";
import { caseStudiesContent } from "@/content/case-studies";

export function CaseStudiesHero() {
  return <OurWorkHeroSection content={caseStudiesContent.hero} />;
}

