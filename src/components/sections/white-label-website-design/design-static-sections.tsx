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
} from "@/content/white-label-website-design";
import { cn } from "@/lib/class-names";

const sectionHeading = "font-sans text-[35px] leading-[1.38] font-bold text-ink max-[991px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[1.35]";

export function WhiteLabelDesignAiEnginesSection() {
  return (
    <section className="pt-20 max-[991px]:pt-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="mx-auto mb-16 max-w-[800px] text-center max-[991px]:mb-[50px] max-[767px]:mb-10">
          <h2 className={cn(sectionHeading, "mb-[15px]")}>Websites Built for Today&apos;s Visitors and Tomorrow&apos;s AI Engines</h2>
          <p className="text-base leading-[26px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[1.9]">
            Great design is only half the job. We help your clients&apos; websites perform better through AI-powered tools, smarter automation, and the technical foundations that AI search engines need to discover and recommend them.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-[30px] max-[991px]:grid-cols-2 max-[991px]:gap-5 max-[767px]:grid-cols-1 max-[767px]:gap-4">
          {whiteLabelWebsiteDesignAiCapabilities.map((item, index) => (
            <article className={cn("col-span-2 rounded-[15px] border border-[#efefef] bg-cream px-[25px] py-[50px] text-center max-[991px]:col-span-1 max-[767px]:py-10", index === 3 && "min-[992px]:col-start-2")} key={item.title}>
              <Image className="mx-auto mb-5 size-[50px] object-contain" src={item.icon} alt="" width={50} height={50} aria-hidden="true" />
              <h3 className="mb-[15px] font-sans text-lg leading-[1.3] font-bold text-ink">{item.title}</h3>
              <p className="text-base leading-6 font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[1.7]">{item.description}</p>
              {item.tools ? (
                <div className="mt-[15px] flex flex-wrap justify-center gap-2.5" aria-label={`${item.title} tools`}>
                  {item.tools.map((tool, toolIndex) => (
                    <span className="rounded-full bg-brand-red/10 px-3 py-1.5 text-xs leading-none font-medium text-ink" key={`${tool}-${toolIndex}`}>{tool}</span>
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
    <section className="mt-20 rounded-t-[50px] bg-pale-blue py-20 max-[991px]:mt-[50px] max-[991px]:rounded-t-[30px] max-[991px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="-mx-[15px] flex flex-wrap">
          <div className="w-1/2 px-[15px] pr-5 max-[991px]:w-full max-[991px]:pr-[15px]">
            <div className="sticky top-[100px] max-[991px]:static">
              <h2 className={cn(sectionHeading, "mb-[15px]")}>Designed to be found by AI, not just Google</h2>
              <p className="mb-6 text-base leading-[26px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[1.8]">
                Search is shifting. ChatGPT, Gemini, and Perplexity are now recommending businesses directly to users. We make sure the websites we build are readable, citable, and trusted by these AI engines from day one.
              </p>
              <ButtonLink href="/request-quote" rel="nofollow" variant="primary">Learn how we do it</ButtonLink>
            </div>
          </div>
          <div className="w-1/2 px-[15px] pl-5 max-[991px]:mt-10 max-[991px]:w-full max-[991px]:pl-[15px]">
            <div className="space-y-[25px]">
              {whiteLabelWebsiteDesignAiDiscovery.map((item) => (
                <article className="rounded-[15px] bg-white p-[25px]" key={item.title}>
                  <h3 className="mb-[15px] font-sans text-lg leading-[1.3] font-bold text-ink">{item.title}</h3>
                  <p className="text-base leading-[26px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[1.8]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-[60px] max-w-[800px] text-center max-[991px]:mt-[50px]">
          <p className="mb-6 text-base leading-[26px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[1.8]">Add AI-enhanced design to your agency&apos;s offering We handle the build and the tech. You keep the client relationship.</p>
          <ButtonLink href="/schedule-your-consultation" rel="nofollow" variant="primary">Talk to an expert</ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function WhiteLabelDesignProcessSection() {
  return (
    <section className="py-20 max-[991px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="mx-auto mb-[50px] max-w-[800px] text-center max-[767px]:mb-[30px]">
          <h2 className={cn(sectionHeading, "mb-2.5")}>Our White Label Web Development Process</h2>
          <p className="text-base leading-[1.9] font-medium text-muted max-[767px]:text-sm">We use a structured process to ensure that every white label website development project is delivered on time and fulfills your client&apos;s expectations.</p>
        </div>
        <div className="relative grid grid-cols-4 gap-[50px] before:absolute before:top-12 before:right-[12.5%] before:left-[12.5%] before:border-t before:border-dashed before:border-brand-red/70 max-[991px]:gap-5 max-[767px]:ml-[5px] max-[767px]:grid-cols-1 max-[767px]:gap-[30px] max-[767px]:border-l-2 max-[767px]:border-brand-red max-[767px]:pl-5 max-[767px]:before:hidden">
          {whiteLabelWebsiteDesignProcess.map((step) => (
            <article className="relative text-center max-[767px]:text-left before:max-[767px]:absolute before:max-[767px]:top-[30px] before:max-[767px]:left-[-26px] before:max-[767px]:size-2.5 before:max-[767px]:rounded-full before:max-[767px]:bg-brand-red" key={step.title}>
              <Image className="relative z-1 mx-auto mb-[17px] size-[97px] object-contain max-[767px]:ml-0 max-[767px]:size-[70px]" src={step.icon} alt="" width={97} height={97} aria-hidden="true" />
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
    <section className="rounded-t-[50px] bg-pale-blue py-20 max-[991px]:rounded-t-[30px] max-[991px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="mx-auto mb-10 max-w-[760px] text-center max-[767px]:mb-[30px]">
          <h2 className={cn(sectionHeading, "mb-[15px]")}>Features of White Label Web Design Services</h2>
          <p className="text-base leading-[1.9] font-medium text-muted max-[767px]:text-sm">Our White label web design services offer several features that make it an attractive option for agencies looking to expand their offerings.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {whiteLabelWebsiteDesignFeatures.map((item) => (
            <article className="w-[calc(33.333%-8px)] rounded-[15px] bg-white px-10 py-[57px] text-center max-[991px]:w-[calc(50%-6px)] max-[767px]:w-full max-[767px]:px-5 max-[767px]:py-10" key={item.title}>
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
      <section className="py-20 max-[991px]:py-[50px]">
        <Container className="max-[575px]:px-4">
          <div className="rounded-[30px] bg-brand-red/10 px-5 py-[86px] text-center max-[991px]:rounded-[20px] max-[991px]:py-10">
            <h2 className={cn(sectionHeading, "mb-[15px]")}>Choosing the Right White Label Web Design Partner </h2>
            <p className="mx-auto max-w-[890px] text-base leading-[1.9] font-medium text-muted max-[767px]:text-sm">Choosing the right white label website design partner is crucial for your company&apos;s success and growth. When you find a white label website design partner, consider a strong portfolio, proven track record, and effective communication. The perfect partner can offer quality work and help you grow and maintain long term client relationships.</p>
          </div>
        </Container>
      </section>
      <section className="pb-20 max-[991px]:pb-[50px]">
        <Container className="max-[575px]:px-4">
          <div className="mx-auto mb-20 max-w-[600px] text-center max-[991px]:mb-[50px] max-[767px]:mb-[30px]">
            <h2 className={cn(sectionHeading, "mb-[15px]")}>Industries We have Served</h2>
            <p className="text-base leading-[1.9] font-medium text-muted max-[767px]:text-sm">We offer white label web design services across various industries, guaranteeing we satisfy each client&apos;s unique requirements.</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {whiteLabelWebsiteDesignIndustries.map((item, index) => (
              <article className={cn("relative w-1/3 px-12 text-center max-[991px]:mb-10 max-[991px]:w-1/2 max-[991px]:px-8 max-[991px]:pb-10 max-[767px]:mb-[30px] max-[767px]:w-full max-[767px]:px-0 max-[767px]:pb-[30px]", index < 3 && "mb-20", index !== 2 && index !== 4 && "after:absolute after:top-0 after:right-0 after:h-full after:w-px after:bg-[linear-gradient(to_bottom,transparent,#333,transparent)] after:opacity-20 max-[767px]:after:hidden", index < whiteLabelWebsiteDesignIndustries.length - 1 && "max-[767px]:border-b max-[767px]:border-ink/10") } key={item.title}>
                <Image className="mx-auto mb-[30px] size-[74px] object-contain max-[767px]:mb-5 max-[767px]:size-[60px]" src={item.icon} alt="" width={74} height={74} aria-hidden="true" />
                <h3 className="mb-5 font-sans text-base leading-[1.28] font-bold text-ink max-[767px]:mb-2.5">{item.title}</h3>
                <p className="text-sm leading-[1.9] font-medium text-muted">{item.description}</p>
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
          <h2 className={cn(sectionHeading, "mb-[15px]")}>Case Studies & Success Stories</h2>
          <p className="text-base leading-[1.9] font-medium text-muted max-[767px]:text-sm">Many companies have used our white label website design services to help their clients get high quality website designs. We take pride in our portfolio, which consists of successful website design projects that show that we can fulfill deadlines and satisfy clients&apos; requirements. Check our case studies to learn how we have helped agencies grow their business by delivering excellent web design services with our white label services.</p>
        </div>
        <TestimonialCarousel items={whiteLabelWebsiteDesignTestimonials} />
      </Container>
    </section>
  );
}
