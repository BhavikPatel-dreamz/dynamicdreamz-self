import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { proofLogos } from "@/content/home";
import { siteConfig } from "@/data/site";

export function HomeHeroSection() {
  return (
    <section className="min-h-[682.81px] overflow-hidden bg-[linear-gradient(180deg,#fbeed5_16.38%,rgb(251_238_213/0%)_100%)] min-[768px]:max-[991px]:min-h-[580px] max-[767px]:min-h-[745px]">
      <Container className="pt-[175px] text-center min-[768px]:max-[991px]:pt-[135px] max-[767px]:pt-[95px]">
        <p className="mx-auto mb-4 flex max-w-[1100px] items-center justify-center text-sm leading-none font-semibold text-muted min-[768px]:max-[991px]:text-[13px] min-[768px]:max-[991px]:leading-[13px] max-[767px]:text-[10px] max-[767px]:leading-[13px]">
          <span className="relative mr-2.5 inline-flex items-center pr-3 before:mr-3 before:h-0.5 before:w-[30px] before:bg-brand-red before:content-[''] after:absolute after:right-[-1px] after:h-[3px] after:w-[3px] after:rounded-full after:bg-muted after:content-[''] max-[767px]:before:mr-2 max-[767px]:before:w-6">
            EST. 2006
          </span>
          <span>Shopify Platinum Partner</span>
        </p>
        <h1 className="mx-auto mb-4 max-w-[1100px] text-[60px] leading-[1.14] font-medium text-ink min-[768px]:max-[991px]:text-[38px] min-[768px]:max-[991px]:leading-12 max-[767px]:max-w-[358px] max-[767px]:text-[27px] max-[767px]:leading-[37px]">
          Shopify Plus &amp; Complete Shopify Solutions for Global Brands and Agencies
        </h1>
        <p className="mx-auto mb-[26px] max-w-[1100px] text-lg leading-7 font-semibold text-muted/80 min-[768px]:max-[991px]:text-base min-[768px]:max-[991px]:leading-6 max-[767px]:mb-6 max-[767px]:max-w-[358px] max-[767px]:text-base max-[767px]:leading-6">
          Dynamic Dreamz helps DTC brands, B2B merchants and agencies build,
          migrate and scale on Shopify with expertise in custom development,
          B2B, checkout customization, integrations, CRO and ongoing support.
        </p>
        <div className="mx-auto flex max-w-[1100px] justify-center max-[767px]:flex-col max-[767px]:items-center max-[767px]:gap-3.5">
          <ButtonLink className="ml-[15px] px-6 py-[15px] text-base leading-[normal] normal-case max-[991px]:min-h-[42px] max-[991px]:px-6 max-[991px]:py-3 max-[991px]:text-sm max-[767px]:ml-0" variant="primary" href={siteConfig.quotePath}>
            Book a discovery call
          </ButtonLink>
          <ButtonLink className="ml-[15px] px-6 py-[15px] text-base leading-[normal] normal-case max-[991px]:min-h-[42px] max-[991px]:px-6 max-[991px]:py-3 max-[991px]:text-sm max-[767px]:ml-0" variant="outline" href="/our-work/">
            View our Shopify work
          </ButtonLink>
        </div>
        <div className="relative flex justify-center py-[70px] min-[768px]:max-[991px]:py-[60px] max-[767px]:-mb-10 max-[767px]:flex-wrap max-[767px]:pt-[60px] max-[767px]:pb-10 before:hidden max-[767px]:before:absolute max-[767px]:before:top-[calc(50%-20px)] max-[767px]:before:left-0 max-[767px]:before:block max-[767px]:before:h-px max-[767px]:before:w-full max-[767px]:before:bg-[#d9d9d9] max-[767px]:before:content-[''] after:hidden max-[767px]:after:absolute max-[767px]:after:top-10 max-[767px]:after:left-[calc(50%-1px)] max-[767px]:after:block max-[767px]:after:h-[calc(100%-120px)] max-[767px]:after:w-px max-[767px]:after:bg-[#d9d9d9] max-[767px]:after:content-['']" aria-label="Partnerships and independent review profiles">
          {proofLogos.map((logo) => (
            <a className="relative flex w-max items-center justify-center border-r border-[#d9d9d9] px-[35px] last:border-r-0 max-[767px]:mb-10 max-[767px]:w-1/2 max-[767px]:max-w-1/2 max-[767px]:border-r-0 max-[767px]:px-[15px]" key={logo.src} href={logo.href} target="_blank" rel="nofollow noopener noreferrer">
              <Image className="h-auto w-auto max-h-[54px] min-[768px]:max-[991px]:max-h-11 max-[767px]:max-h-11 max-[767px]:max-w-[126px]" src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
