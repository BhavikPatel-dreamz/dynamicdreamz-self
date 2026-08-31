import Image from "next/image";

import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  whiteLabelWebsiteDesignAiCapabilities,
  whiteLabelWebsiteDesignAiDiscovery,
  whiteLabelWebsiteDesignFeatures,
  whiteLabelWebsiteDesignIndustries,
  whiteLabelWebsiteDesignProcess,
  whiteLabelWebsiteDesignTestimonials,
  whiteLabelWebsiteDesignSectionCopy,
} from "@/content/white-label-website-design";
import { cn } from "@/lib/class-names";

const sectionHeading = "font-sans text-[35px] leading-[1.38] font-bold text-ink max-[992px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[1.35]";

export function WhiteLabelDesignAiEnginesSection() {
  return (
    <section className="pt-20 max-[992px]:pt-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="mx-auto mb-16 text-center max-[992px]:mb-[50px] max-[767px]:mb-10">
          <h2 className={cn(sectionHeading, "mb-[15px]")}>{whiteLabelWebsiteDesignSectionCopy.aiEnginesTitle}</h2>
          <p className="text-base leading-[26px] font-medium text-muted max-[767px]:leading-[1.9] max-w-[800px] mx-auto">
            {whiteLabelWebsiteDesignSectionCopy.aiEnginesDescription}
          </p>
        </div>
        <div className="grid grid-cols-6 gap-[30px] max-[992px]:grid-cols-2 max-[992px]:gap-5 max-[767px]:grid-cols-1 max-[767px]:gap-7.5">
          {whiteLabelWebsiteDesignAiCapabilities.map((item, index) => (
            <article
              className={cn(
                "col-span-2 rounded-[15px] border border-[#efefef] bg-cream px-[25px] py-[50px] text-center max-[992px]:col-span-1 max-[767px]:py-10",
                index === 3 && "min-[992px]:col-start-2",
                index === whiteLabelWebsiteDesignAiCapabilities.length - 1 &&
                "max-[992px]:col-span-2 max-[992px]:mx-auto max-[992px]:w-[calc(50%-10px)] max-[767px]:col-span-1 max-[767px]:w-full",
              )}
              key={item.title}
            >
              <Image className="mx-auto mb-5 size-[50px] object-contain" src={item.icon} alt="" width={50} height={50} aria-hidden="true" />
              <h3 className="mb-[15px] font-sans text-lg leading-[1.3] font-bold text-ink">{item.title}</h3>
              <p className="text-base leading-6 font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[1.7]">{item.description}</p>
              {item.tools ? (
                <div className="mt-[15px] flex flex-wrap justify-center gap-2.5" aria-label={`${item.title} tools`}>
                  {item.tools.map((tool, toolIndex) => (
                    <span className="rounded-full bg-brand-red/10 px-3 py-1.5 text-sm leading-none font-medium text-ink" key={`${tool}-${toolIndex}`}>{tool}</span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhiteLabelDesignAiDiscoverySection() {
  return (
    <section className="mt-20 rounded-t-[50px] bg-pale-blue py-20 max-[992px]:mt-[50px] max-[992px]:rounded-t-[30px] max-[992px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="w-1/2 px-[15px] pr-5 max-[992px]:w-full max-[992px]:pr-[15px]">
            <div className="sticky top-[100px] max-[992px]:static">
              <h2 className={cn(sectionHeading, "mb-[15px] tracking-[-.7px]")}>{whiteLabelWebsiteDesignSectionCopy.aiDiscoveryTitle}</h2>
              <p className="mb-6 text-base leading-[26px] font-medium text-muted max-[767px]:leading-[1.8]">
                {whiteLabelWebsiteDesignSectionCopy.aiDiscoveryDescription}
              </p>
              <ButtonLink href="/request-quote" rel="nofollow" variant="primary">{whiteLabelWebsiteDesignSectionCopy.aiDiscoveryCta}</ButtonLink>
            </div>
          </div>
          <div className="w-1/2 px-[15px] pl-5 max-[992px]:mt-10 max-[992px]:w-full max-[992px]:pl-[15px]">
            <div className="space-y-[25px]">
              {whiteLabelWebsiteDesignAiDiscovery.map((item) => (
                <article className="rounded-[15px] bg-white p-[25px]" key={item.title}>
                  <h3 className="mb-[15px] font-sans text-lg leading-[1.3] font-bold text-ink">{item.title}</h3>
                  <p className="text-base leading-[26px] font-medium text-muted max-[767px]:leading-[1.8]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-[60px] max-w-[800px] text-center max-[992px]:mt-[50px]">
          <p className="mb-6 text-base leading-[26px] font-medium text-muted max-[767px]:leading-[1.8]">{whiteLabelWebsiteDesignSectionCopy.aiDiscoveryClosing}</p>
          <ButtonLink href="/schedule-your-consultation" rel="nofollow" variant="primary">{whiteLabelWebsiteDesignSectionCopy.aiDiscoveryClosingCta}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function WhiteLabelDesignProcessSection() {
  return (
    <section className="white_label_process_step_box_section py-20 max-[992px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="mx-auto mb-[50px] max-w-[1000px] text-center max-[767px]:mb-[30px]">
          <h2 className={cn(sectionHeading, "mb-2.5")}>{whiteLabelWebsiteDesignSectionCopy.processTitle}</h2>
          <p className="mx-auto max-w-[800px] text-base leading-[1.9] font-medium text-muted">{whiteLabelWebsiteDesignSectionCopy.processDescription}</p>
        </div>
        <div className="wrapper relative grid grid-cols-4 xl:gap-[50px] lg:gap-[10px] max-[992px]:gap-5 max-[767px]:ml-[5px] max-[767px]:grid-cols-1 max-[767px]:gap-[30px] max-[767px]:border-l-2 max-[767px]:border-brand-red max-[767px]:pl-5">
          {whiteLabelWebsiteDesignProcess.map((step, index) => (
            <article className="relative text-center max-[767px]:text-left before:max-[767px]:absolute before:max-[767px]:top-[30px] before:max-[767px]:left-[-26px] before:max-[767px]:size-2.5 before:max-[767px]:rounded-full before:max-[767px]:bg-brand-red" key={step.title}>
              <div className="relative z-1 mx-auto mb-[17px] size-[97px] max-[767px]:ml-0 max-[767px]:size-[70px]">
                <Image className="size-full object-contain" src={step.icon} alt="" width={97} height={97} aria-hidden="true" />
                {index < whiteLabelWebsiteDesignProcess.length - 1 ? (
                  <svg className="absolute top-1/2 left-full -z-1 h-[13px] w-[198px] -translate-y-1/2 overflow-visible max-[1199px]:w-[138px] max-[992px]:w-[78px] max-[767px]:hidden" viewBox="0 0 204 13" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 1 C68 12 136 12 204 1" fill="none" stroke="#ad5151" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                ) : null}
              </div>
              <h3 className="mb-2.5 font-sans text-lg leading-[1.28] font-bold text-ink">{step.title}</h3>
              <p className="text-sm leading-[1.9] font-medium text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhiteLabelDesignFeaturesSection() {
  return (
    <section className="rounded-t-[50px] bg-pale-blue py-20 max-[992px]:rounded-t-[30px] max-[992px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="mx-auto mb-10 text-center max-[767px]:mb-[30px]">
          <h2 className={cn(sectionHeading, "mb-[15px] tracking-[-.7px]")}>{whiteLabelWebsiteDesignSectionCopy.featuresTitle}</h2>
          <p className="max-w-[600px] mx-auto text-base leading-[1.9] font-medium text-muted">{whiteLabelWebsiteDesignSectionCopy.featuresDescription}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {whiteLabelWebsiteDesignFeatures.map((item) => (
            <article className="w-[calc(33.333%-8px)] rounded-[15px] bg-white px-10 py-[57px] text-center max-[992px]:w-[calc(50%-6px)] max-[767px]:w-full max-[767px]:px-5 max-[767px]:py-10" key={item.title}>
              <h3 className="mb-[15px] font-sans text-lg leading-[1.28] font-bold text-brand-red">{item.title}</h3>
              <p className="text-sm leading-[1.9] font-medium text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhiteLabelDesignPartnerAndIndustriesSections() {
  return (
    <>
      <section className="py-20 max-[992px]:py-[50px]">
        <Container className="max-[575px]:px-4">
          <div className="rounded-[30px] bg-brand-red/10 px-5 py-[86px] text-center max-[992px]:rounded-[20px] max-[992px]:py-10">
            <h2 className={cn(sectionHeading, "mb-[15px]")}>{whiteLabelWebsiteDesignSectionCopy.partnerTitle}</h2>
            <p className="mx-auto max-w-[890px] text-base leading-[1.9] font-medium text-muted">{whiteLabelWebsiteDesignSectionCopy.partnerDescription}</p>
          </div>
        </Container>
      </section>
      <section className="industries_we_have_served_box pb-20 max-[992px]:pb-[50px]">
        <Container className="max-[575px]:px-4">
          <div className="section-title mx-auto mb-20 max-w-[600px] text-center max-[992px]:mb-[50px] max-[767px]:mb-[30px]">
            <h2 className={cn(sectionHeading, "mb-[15px]")}>{whiteLabelWebsiteDesignSectionCopy.industriesTitle}</h2>
            <p className="text-base leading-[1.9] font-medium text-muted">{whiteLabelWebsiteDesignSectionCopy.industriesDescription}</p>
          </div>
          <div className="wrapper -mx-12 -mb-20 flex flex-wrap justify-center max-[1199px]:-mx-[30px] max-[1199px]:-mb-10 max-[767px]:m-0">
            {whiteLabelWebsiteDesignIndustries.map((item, index) => (
              <article
                className={cn(
                  "col relative mb-20 w-1/3 px-12 text-center max-[1199px]:mb-10 max-[1199px]:px-[30px] max-[992px]:w-1/2 max-[992px]:pb-10 max-[767px]:mb-[30px] max-[767px]:w-full max-[767px]:px-0 max-[767px]:pb-[30px]",
                  index < whiteLabelWebsiteDesignIndustries.length - 1 &&
                    "before:absolute before:top-full before:left-0 before:hidden before:h-px before:w-full before:bg-[linear-gradient(to_right,transparent,#333,transparent)] before:opacity-20 max-[992px]:before:block",
                  index !== whiteLabelWebsiteDesignIndustries.length - 1 &&
                    "after:absolute after:top-0 after:right-0 after:h-full after:w-px after:bg-[linear-gradient(to_bottom,transparent,#333,transparent)] after:opacity-20 max-[767px]:after:hidden",
                  (index === 1 || index === 3) && "max-[992px]:after:hidden",
                  index === 2 && "min-[992px]:after:hidden",
                  index === whiteLabelWebsiteDesignIndustries.length - 1 && "max-[767px]:mb-0 max-[767px]:pb-0",
                )}
                key={item.title}
              >
                <div className="is-box">
                  <div className="icon mx-auto mb-[30px] size-[74px] object-contain max-[767px]:mb-5 max-[767px]:size-[60px]">
                    <Image src={item.icon} alt="" width={74} height={74} aria-hidden="true" />
                  </div>
                  <h3 className="mb-5 font-sans text-base leading-[1.28] font-bold text-ink max-[767px]:mb-2.5">{item.title}</h3>
                  <p className="text-sm leading-[1.9] font-medium text-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export function WhiteLabelDesignTestimonialsSection() {
  return (
    <section className="bg-cream py-[60px] max-[767px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="mx-auto mb-[42px] max-w-[830px] text-center max-[767px]:mb-[30px]">
          <h2 className={cn(sectionHeading, "mb-[15px]")}>{whiteLabelWebsiteDesignSectionCopy.testimonialsTitle}</h2>
          <p className="text-base max-[767px]:text-sm leading-[1.9] font-medium text-muted">{whiteLabelWebsiteDesignSectionCopy.testimonialsDescription}</p>
        </div>
        <TestimonialCarousel items={whiteLabelWebsiteDesignTestimonials} />
      </Container>
    </section>
  );
}
