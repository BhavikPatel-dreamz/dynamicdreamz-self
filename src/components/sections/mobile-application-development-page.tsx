import { FaqSection } from "@/components/sections/faq-section";
import { IndustryBrandsSection } from "@/components/sections/industry/industry-brands-section";
import { AppTransitionSection } from "@/components/sections/mobile-application/app-transition-section";
import { ClosingMessageSection } from "@/components/sections/mobile-application/closing-message-section";
import { ImageListSection } from "@/components/sections/mobile-application/image-list-section";
import { QuestionQuoteSection } from "@/components/sections/mobile-application/question-quote-section";
import { WebsiteQuoteHeroSection } from "@/components/sections/mobile-application/website-quote-hero-section";
import { ProofCounterSection } from "@/components/sections/proof-counter-section";
import {
  mobileApplicationBenefits,
  mobileApplicationClosingMessage,
  mobileApplicationDevelopmentBrands,
  mobileApplicationDevelopmentFaqs,
  mobileApplicationDevelopmentHero,
  mobileApplicationLeverage,
  mobileApplicationNeed,
  mobileApplicationProof,
  mobileApplicationQuestions,
  mobileApplicationTransition,
} from "@/content/mobile-application-development";

export function MobileApplicationDevelopmentPage() {
  return (
    <div className="font-sans leading-[30px]">
      <WebsiteQuoteHeroSection content={mobileApplicationDevelopmentHero} />
      <IndustryBrandsSection
        className="!bg-white"
        content={{
          slug: "mobile-application-development",
        }}
        items={mobileApplicationDevelopmentBrands}
        showHeading={false}
        sliderAutoplayStartDelayMs={3000}
        sliderSlides={{ desktop: 5, laptop: 4, tablet: 3, mobile: 2 }}
      />
      <ImageListSection
        content={mobileApplicationNeed}
        id="why-mobile-application"
      />
      <ImageListSection
        content={mobileApplicationBenefits}
        id="mobile-application-benefits"
        variant="reversed"
      />
      <ImageListSection
        content={mobileApplicationLeverage}
        id="mobile-application-leverage"
        variant="panel"
      />
      <AppTransitionSection content={mobileApplicationTransition} />
      <ProofCounterSection content={mobileApplicationProof} />
      <QuestionQuoteSection content={mobileApplicationQuestions} />
      <FaqSection
        className="faq-sec pt-0 pb-20 max-[767px]:pb-[60px]"
        idPrefix="mobile-application-development-faq"
        items={mobileApplicationDevelopmentFaqs}
        titleClassName="font-sans text-[32px] leading-[42px] font-bold tracking-[-0.7px] text-ink max-[1199px]:text-[27px] max-[1199px]:leading-[38px] max-[575px]:text-[22px] max-[575px]:leading-8"
      />
      <ClosingMessageSection content={mobileApplicationClosingMessage} />
    </div>
  );
}
