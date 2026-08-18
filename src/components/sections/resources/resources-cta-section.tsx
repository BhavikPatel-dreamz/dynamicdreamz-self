import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function ResourcesCtaSection() {
  return (
    <section className="request-banner flex min-h-[119px] items-center bg-[linear-gradient(97.18deg,#15c064_28.5%,#00d1ff_91.82%)] py-[35px]" aria-labelledby="resources-quote-title">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-8 text-center max-[1199px]:gap-5">
          <h2 id="resources-quote-title" className="text-[30px] leading-[43.2px] font-bold tracking-[-0.6px] text-white max-[1199px]:text-[26px] max-[1199px]:leading-9">Want us to help you with your online store?</h2>
          <ButtonLink href={siteConfig.quotePath} variant="light" className="min-h-[42px] px-6 py-3 text-[13px] text-[#121212]">Request a quote</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
