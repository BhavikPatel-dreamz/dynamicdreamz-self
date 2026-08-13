import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { IndustryDeliverablesSection } from "@/components/sections/industry/industry-deliverables-section";
import { IndustryHeroSection } from "@/components/sections/industry/industry-hero-section";
import { IndustryPortfolioSection } from "@/components/sections/industry/industry-portfolio-section";
import { IndustrySolutionsSection } from "@/components/sections/industry/industry-solutions-section";
import type { IndustryPageContent } from "@/types/industry";

type IndustryPageProps = {
  content: IndustryPageContent;
};

export function IndustryPage({ content }: IndustryPageProps) {
  return (
    <div
      className="font-sans [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans"
      data-industry-page={content.slug}
    >
      <IndustryHeroSection content={content} />
      <IndustryBrandsSection content={content} />
      <IndustrySolutionsSection content={content} />
      <IndustryDeliverablesSection content={content} />
      <IndustryPortfolioSection content={content} />
    </div>
  );
}
