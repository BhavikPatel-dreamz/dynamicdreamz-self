import Image from "next/image";
import Link from "next/link";

import { ExpertiseAccordion } from "@/components/sections/expertise-accordion";
import styles from "@/components/sections/home-page.module.css";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  clientLogos,
  companyStats,
  insights,
  integrationLogoRows,
  mobileClientLogoRows,
  projects,
  proofLogos,
  showcaseImages,
  type ImageItem,
  type Project,
} from "@/content/home";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";

function DiagonalArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16">
      <path
        d="M3 13 13 3M6 3h7v7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ClientLogo({ logo, decorative = false }: { logo: ImageItem; decorative?: boolean }) {
  return <Image src={logo.src} alt={decorative ? "" : logo.alt} width={logo.width} height={logo.height} />;
}

const showcaseItemClass =
  "flex shrink-0 overflow-hidden rounded-2xl shadow-[6px_6px_16px_rgb(0_0_0/6%)] max-[991px]:h-[227px] max-[991px]:rounded-[10px] max-[767px]:h-52 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-top";

function ShowcaseSet({ decorative = false }: { decorative?: boolean }) {
  return (
    <div
      className={cn(
        "mt-6 flex flex-col gap-6 max-[991px]:mt-0 max-[991px]:flex-row max-[991px]:gap-4 max-[991px]:pr-6",
        styles.showcaseMotion,
      )}
      aria-hidden={decorative || undefined}
    >
      <div className={cn(showcaseItemClass, "max-[991px]:w-[342px]")}>
        <Image
          src={showcaseImages[0].src}
          alt={decorative ? "" : showcaseImages[0].alt}
          width={showcaseImages[0].width}
          height={showcaseImages[0].height}
          sizes="(max-width: 767px) 362px, 548px"
        />
      </div>
      <div className="flex shrink-0 justify-between gap-[17px] overflow-visible max-[991px]:h-[227px] max-[991px]:w-[227px] max-[767px]:h-52">
        {[showcaseImages[1], showcaseImages[2]].map((image) => (
          <span className="flex flex-1 overflow-hidden rounded-2xl shadow-[6px_6px_16px_rgb(0_0_0/6%)] max-[991px]:w-[105px] max-[991px]:shrink-0 max-[991px]:basis-[105px] max-[991px]:rounded-[10px] [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-top" key={image.src}>
            <Image
              src={image.src}
              alt={decorative ? "" : image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 767px) 105px, 266px"
            />
          </span>
        ))}
      </div>
      {showcaseImages.slice(3).map((image) => (
        <div className={cn(showcaseItemClass, "max-[991px]:w-[342px]")} key={image.src}>
          <Image
            src={image.src}
            alt={decorative ? "" : image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 767px) 362px, 548px"
          />
        </div>
      ))}
    </div>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  const mediaClass =
    "absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover/project:scale-[1.06]";

  if (project.media.type === "video") {
    return (
      <video className={mediaClass} autoPlay muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1}>
        <source src={project.media.src} type="video/mp4" media="(min-width: 768px)" />
      </video>
    );
  }

  return (
    <Image
      className={cn(mediaClass, "scale-[1.01]")}
      src={project.media.src}
      alt={project.media.alt}
      width={668}
      height={469}
      sizes="(max-width: 767px) calc(100vw - 50px), 50vw"
    />
  );
}

function ProjectList({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="flex w-1/2 shrink-0 basis-1/2 max-[767px]:w-auto max-[767px]:basis-auto max-[767px]:aria-hidden:hidden" aria-hidden={decorative || undefined}>
      {projects.map((project) => (
        <a
          className="group/project block w-1/5 shrink-0 basis-1/5 text-white max-[767px]:w-[calc(100cqw-50px)] max-[767px]:basis-[calc(100cqw-50px)] max-[767px]:snap-start"
          key={project.name}
          href={project.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          tabIndex={decorative ? -1 : undefined}
        >
          <span className="relative block w-full overflow-hidden pb-[68%] max-[767px]:pb-[70%]">
            <ProjectMedia project={project} />
          </span>
          <span className="flex min-h-[78px] items-center justify-between border border-[#45433d] border-l-0 px-[30px] py-5 font-display text-[30px] leading-[1.2] font-medium max-[767px]:min-h-14 max-[767px]:p-4 max-[767px]:text-lg max-[767px]:leading-[1.24] [&_svg]:ml-[25px] [&_svg]:h-5 [&_svg]:w-5 [&_svg]:shrink-0 max-[767px]:[&_svg]:h-[13px] max-[767px]:[&_svg]:w-[13px]">
            {project.name}
            <DiagonalArrowIcon />
          </span>
        </a>
      ))}
    </div>
  );
}

export function HomePage() {
  return (
    <>
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

      <section className="min-h-[640.78px] overflow-hidden py-20 pb-[84px] min-[768px]:max-[991px]:min-h-[614.78px] min-[768px]:max-[991px]:py-[50px] max-[767px]:min-h-[443.69px] max-[767px]:pt-10 max-[767px]:pb-[50px]">
        <Container>
          <div className="mb-[50px] flex items-center justify-between min-[768px]:max-[991px]:mb-[30px] min-[768px]:max-[991px]:flex-col min-[768px]:max-[991px]:items-start max-[767px]:mb-[55px] max-[767px]:flex-col max-[767px]:text-center">
            <h2 className="text-2xl leading-none font-medium min-[768px]:max-[991px]:mb-2.5 min-[768px]:max-[991px]:w-full max-[767px]:mb-2.5 max-[767px]:text-[23px] max-[767px]:leading-[1.24]">Partnering with Ambitious Brands</h2>
            <p className="max-w-[482px] text-left text-base leading-[1.9] font-semibold text-muted min-[768px]:max-[991px]:max-w-full max-[767px]:mx-auto max-[767px]:max-w-[350px] max-[767px]:text-center max-[767px]:text-sm">
              Selected brands our teams have supported across Shopify, Shopify Plus and digital commerce.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-y-[50px] min-[768px]:max-[991px]:mx-[-15px] min-[768px]:max-[991px]:h-[390px] min-[768px]:max-[991px]:grid-cols-4 min-[768px]:max-[991px]:content-between min-[768px]:max-[991px]:gap-y-[30px] max-[767px]:hidden">
            {clientLogos.map((logo) => (
              <div className="flex min-h-[50px] items-center justify-center px-[15px] min-[768px]:max-[991px]:mx-[15px] [&_img]:h-auto [&_img]:w-auto [&_img]:max-h-[50px] [&_img]:object-contain min-[768px]:max-[991px]:[&_img]:max-h-none" key={logo.src}>
                <ClientLogo logo={logo} />
              </div>
            ))}
          </div>
        </Container>
        <div className="hidden flex-col max-[767px]:flex" aria-hidden="true">
          {mobileClientLogoRows.map((row, index) => (
            <div className={cn("flex w-max items-center", index > 0 && "mt-2.5", index === 0 && "mb-5", index === 2 && "ml-[-25%]")} key={index}>
              {[0, 1, 2].map((set) => (
                <div className={cn("flex shrink-0 items-center", index === 1 ? styles.mobileClientRight : styles.mobileClientLeft)} key={set}>
                  {row.map((logo) => (
                    <span className="mx-[30px] flex w-[120px] min-w-[120px] shrink-0 items-center justify-center [&_img]:h-auto [&_img]:w-auto" key={`${set}-${logo.src}`}>
                      <ClientLogo logo={logo} decorative />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="min-h-[766.2px] min-[768px]:max-[991px]:min-h-[876.27px] max-[767px]:min-h-[860.72px]">
        <Container>
          <div className="flex h-[766.2px] justify-between overflow-hidden rounded-[30px] bg-pale-blue min-[768px]:max-[991px]:h-[876.27px] min-[768px]:max-[991px]:min-h-[876.27px] min-[768px]:max-[991px]:flex-col max-[767px]:h-[860.72px] max-[767px]:flex-col max-[767px]:rounded-[20px]">
            <div className="mx-[37px] ml-10 w-[492px] shrink-0 py-[105px] max-[1199px]:ml-5 max-[1199px]:w-[44%] max-[1199px]:basis-[44%] max-[991px]:m-0 max-[991px]:h-[599.27px] max-[991px]:w-full max-[991px]:basis-[599.27px] max-[991px]:px-[25px] max-[991px]:py-[50px] max-[767px]:h-[602.72px] max-[767px]:basis-[602.72px] max-[767px]:px-[17px] max-[767px]:pt-[35px] max-[767px]:pb-[63px]">
              <h2 className="mb-6 text-[35px] leading-[1.385] font-medium min-[768px]:max-[991px]:text-[30px] min-[768px]:max-[991px]:leading-10 min-[768px]:max-[991px]:tracking-[-0.7px] max-[767px]:text-2xl max-[767px]:leading-[1.24]">Globally Trusted Web &amp; App Development Agency</h2>
              <p className="text-base leading-[1.9] font-semibold text-muted max-[767px]:text-sm">
                With sharp custom design, smooth development, and long-term support, build a brand that scales worldwide.
              </p>
              <ul className="relative mt-[53px] -mb-[46px] grid grid-cols-2 list-none p-0 before:absolute before:top-[calc(50%-16px)] before:left-0 before:z-[2] before:h-px before:w-full before:bg-[linear-gradient(90deg,transparent,#282828,transparent)] before:opacity-20 before:content-[''] after:absolute after:top-0 after:left-1/2 after:z-[2] after:h-full after:w-px after:bg-[linear-gradient(0deg,transparent,#282828,transparent)] after:opacity-20 after:content-[''] min-[768px]:max-[991px]:mx-[-15px] min-[768px]:max-[991px]:h-[367.48px] max-[767px]:mt-6 max-[767px]:[&>li:nth-child(odd)]:pr-[18px] max-[767px]:[&>li:nth-child(even)]:pl-[23px] [&>li:nth-child(odd)]:pr-[42px] max-[1199px]:[&>li:nth-child(odd)]:pr-[22px] [&>li:nth-child(even)]:pl-[42px] max-[1199px]:[&>li:nth-child(even)]:pl-[22px] [&>li:nth-child(-n+2)]:pb-[23px] [&>li:nth-child(n+3)]:pt-6">
                {companyStats.map((stat) => (
                  <li className="flex min-h-[147px] flex-col items-start min-[768px]:max-[991px]:min-h-[183.74px] max-[767px]:min-h-[171px]" key={stat.label}>
                    <Image className="mb-3 h-[42px] w-[42px] max-[767px]:h-[35px] max-[767px]:w-[35px]" src={stat.icon} alt="" width={42} height={42} aria-hidden="true" />
                    <strong className="text-[40px] leading-[1.15] font-extrabold text-black max-[1199px]:text-[34px] min-[768px]:max-[991px]:text-[40px] max-[767px]:text-[32px]">{stat.value}</strong>
                    <span className="text-base leading-[1.24] font-semibold text-black max-[767px]:text-sm">{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-3/5 max-w-[731px] shrink-0 basis-3/5 overflow-hidden max-[991px]:h-[277px] max-[991px]:w-full max-[991px]:max-w-none max-[991px]:basis-[277px] max-[991px]:pb-[50px] max-[767px]:h-[258px] max-[767px]:basis-[258px]">
              <div className="absolute top-0 left-0 flex w-full flex-col px-[68px] max-[991px]:static max-[991px]:h-[227px] max-[991px]:w-max max-[991px]:flex-row max-[991px]:p-0 max-[767px]:h-52">
                <ShowcaseSet />
                <ShowcaseSet decorative />
                <ShowcaseSet decorative />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="min-h-[703.94px] pt-20 pb-[74px] min-[768px]:max-[991px]:min-h-[981.67px] min-[768px]:max-[991px]:py-[50px] max-[767px]:min-h-[1071.67px] max-[767px]:py-[50px]">
        <Container className="flex justify-between max-[991px]:flex-col max-[991px]:items-start">
          <div className="mr-[105px] w-[41%] max-[1199px]:mr-[60px] max-[991px]:mr-0 max-[991px]:w-full">
            <h2 className="text-[35px] leading-[1.385] font-medium min-[768px]:max-[991px]:mb-4 min-[768px]:max-[991px]:text-[30px] min-[768px]:max-[991px]:leading-10 min-[768px]:max-[991px]:tracking-[-0.7px] max-[767px]:mb-4 max-[767px]:text-2xl max-[767px]:leading-[1.2]">Our Expertise</h2>
            <p className="text-base leading-[1.9] font-semibold text-muted max-[767px]:text-sm">
              From strategy and design to development and long-term support, we help brands build, scale, and maintain high-performing digital products. Our expertise spans Shopify development, custom websites, and mobile applications, with a strong focus on performance, usability, and business growth.
            </p>
            <p className="mt-8 text-base leading-[1.9] font-semibold text-muted max-[767px]:mt-7 max-[767px]:text-sm">
              To accelerate delivery without compromising quality, our teams use modern AI-powered tools such as Cursor, ChatGPT, Claude, Lovable, Bolt, and n8n, alongside proven development processes.
            </p>
          </div>
          <ExpertiseAccordion />
        </Container>
      </section>

      <section className="min-h-[932.83px] overflow-hidden bg-dark-green pt-[60px] pb-[52px] text-white min-[768px]:max-[991px]:min-h-[774.81px] max-[767px]:min-h-[649.77px] max-[767px]:py-[30px]">
        <Container className="flex items-center justify-between max-[991px]:flex-col max-[991px]:items-start">
          <h2 className="mr-5 max-w-[600px] text-[40px] leading-[1.2] font-medium min-[768px]:max-[991px]:m-0 min-[768px]:max-[991px]:max-w-full min-[768px]:max-[991px]:text-[35px] min-[768px]:max-[991px]:leading-[48.475px] max-[767px]:m-0 max-[767px]:mb-4 max-[767px]:max-w-full max-[767px]:text-2xl max-[767px]:leading-[1.4]">Selected Shopify Plus &amp; Enterprise Ecommerce Work</h2>
          <p className="max-w-[580px] text-base leading-[1.9] font-semibold text-white/80 min-[768px]:max-[991px]:mt-2.5 min-[768px]:max-[991px]:max-w-full max-[767px]:max-w-full max-[767px]:text-sm">
            Explore Shopify and Shopify Plus projects across beauty, fashion, B2B, wholesale, international commerce and large-catalogue ecommerce.
          </p>
        </Container>
        <div className="w-full overflow-hidden py-[57px] pb-[51px] max-[767px]:overflow-x-auto max-[767px]:px-0 max-[767px]:pt-[34px] max-[767px]:pb-[30px] max-[767px]:[container-type:inline-size] max-[767px]:[scrollbar-width:none] max-[767px]:snap-x max-[767px]:snap-mandatory max-[767px]:[&::-webkit-scrollbar]:hidden" aria-label="Selected ecommerce work">
          <div className={cn("flex w-[calc(500%+5px)] max-[767px]:w-max", styles.projectMotion)}>
            <ProjectList />
            <ProjectList decorative />
          </div>
        </div>
        <div className="flex justify-center">
          <ButtonLink className="min-h-[49px] px-6 py-[15px] text-base leading-[normal] normal-case max-[991px]:min-h-[42px] max-[991px]:py-3 max-[991px]:text-sm" variant="light" href="/our-work/">View our work</ButtonLink>
        </div>
      </section>

      <section className="min-h-[907px] bg-cream py-[60px] min-[768px]:max-[991px]:min-h-[1217.34px] max-[767px]:min-h-[1179px] max-[767px]:py-[50px]">
        <Container>
          <div className="mb-[42px] max-w-[650px] max-[767px]:max-w-none">
            <h2 className="mb-6 text-[43px] leading-[normal] font-medium min-[768px]:max-[991px]:text-[43px] max-[767px]:mb-4 max-[767px]:text-2xl max-[767px]:leading-[1.2]">Brands That Have Grown With Us</h2>
            <p className="text-base leading-[1.9] font-semibold max-[767px]:text-sm">
              Hear from founders, ecommerce teams and agency partners who rely on Dynamic Dreamz for Shopify builds, migrations, mobile apps, ongoing development and long-term technical support.
            </p>
          </div>
          <TestimonialCarousel />
        </Container>
      </section>

      <section className="min-h-[445px] overflow-hidden bg-[#fafaf7] py-[55px] min-[768px]:max-[991px]:min-h-[433.7px] max-[767px]:min-h-[438.61px] max-[767px]:py-[50px]">
        <Container>
          <div className="mb-[57px] flex items-center justify-between min-[768px]:max-[991px]:mb-[30px] min-[768px]:max-[991px]:flex-col min-[768px]:max-[991px]:items-start max-[767px]:mb-[29px] max-[767px]:flex-col max-[767px]:items-start">
            <h2 className="max-w-[540px] text-[43px] leading-[1.2] font-medium min-[768px]:max-[991px]:mb-2.5 min-[768px]:max-[991px]:max-w-full min-[768px]:max-[991px]:text-[35px] min-[768px]:max-[991px]:leading-[48.475px] max-[767px]:mb-4 max-[767px]:max-w-full max-[767px]:text-2xl max-[767px]:leading-[1.2]">Platforms and Integrations We Work With</h2>
            <p className="max-w-[560px] text-lg leading-[1.9] font-medium text-muted min-[768px]:max-[991px]:max-w-full min-[768px]:max-[991px]:text-base max-[767px]:max-w-full max-[767px]:text-base">
              Our teams work across the Shopify ecosystem to implement subscriptions, reviews, retention, customer support, search, B2B, payments and operational integrations.
            </p>
          </div>
        </Container>
        <div className="space-y-[50px] max-[767px]:space-y-6" aria-label="Platforms and integrations">
          {integrationLogoRows.map((row, index) => (
            <div className="flex w-full items-center overflow-hidden" key={index}>
              {[0, 1, 2].map((set) => (
                <div className={cn("flex shrink-0 items-center", index === 0 ? styles.integrationLeft : styles.integrationRight)} key={set} aria-hidden={set > 0 || undefined}>
                  {row.map((logo) => (
                    <span className="mx-[45px] flex items-center justify-center max-[767px]:mx-6 [&_img]:h-auto [&_img]:w-auto [&_img]:object-contain max-[767px]:[&_img]:max-h-[30px] max-[767px]:[&_img]:max-w-[120px]" key={`${set}-${logo.src}`}>
                      <ClientLogo logo={logo} decorative={set > 0} />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="min-h-[883px] overflow-hidden bg-white pt-20 pb-[60px] min-[768px]:max-[991px]:min-h-[806.61px] min-[768px]:max-[991px]:py-[50px] max-[767px]:min-h-[722.33px] max-[767px]:py-[50px]">
        <Container>
          <div className="mx-auto mb-[47px] max-w-[700px] text-center">
            <h2 className="mb-6 text-[43px] leading-[1.2] font-medium max-[767px]:mb-4 max-[767px]:text-2xl">Featured Shopify Insights</h2>
            <p className="text-base leading-[1.9] font-semibold text-muted max-[767px]:text-sm">
              Practical guidance on Shopify Plus, migration, B2B, CRO, mobile commerce, performance and integrations from our in-house specialists.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[991px]:flex max-[991px]:flex-col max-[991px]:gap-0">
            {insights.map((insight, insightIndex) => (
              <article className={cn("group/insight min-w-0 max-[991px]:mb-6 max-[991px]:block max-[991px]:border-b max-[991px]:border-[#efefef] max-[991px]:pb-6", insightIndex === insights.length - 1 && "max-[991px]:mb-0 max-[991px]:border-b-0 max-[991px]:pb-0")} key={insight.href}>
                <div className="contents max-[991px]:flex max-[991px]:items-stretch max-[991px]:justify-between max-[991px]:gap-5">
                  <Link className="mb-5 block overflow-hidden rounded-[20px] max-[991px]:relative max-[991px]:m-0 max-[991px]:w-2/5 max-[991px]:flex-[1_1_40%] max-[991px]:rounded-[10px]" href={insight.href}>
                    <Image className="h-auto w-full object-cover transition-transform duration-300 [aspect-ratio:1504/1137] group-hover/insight:scale-[1.03] max-[991px]:absolute max-[991px]:inset-0 max-[991px]:h-full max-[991px]:[aspect-ratio:auto]" src={insight.image} alt={insight.title} width={1504} height={1137} sizes="(max-width: 991px) 40vw, 33vw" />
                  </Link>
                  <div className="max-[991px]:w-[calc(100%-110px)] max-[991px]:flex-[1_1_calc(100%-110px)]">
                    <div className="mb-[9px] flex flex-wrap gap-2 max-[767px]:mx-[-4px] max-[767px]:mb-[3px] max-[767px]:gap-0">
                      <Link className="inline-flex" href="/category/shopify/">
                        <span className="flex items-center rounded-[50px] border border-ink/15 px-4 py-2 text-sm leading-none font-medium hover:text-brand-red focus-visible:text-brand-red max-[767px]:mx-1 max-[767px]:mb-2 max-[767px]:px-[7.5px] max-[767px]:pt-[4.5px] max-[767px]:pb-[2.75px] max-[767px]:text-[10px] max-[767px]:tracking-[0.2px]">Shopify</span>
                      </Link>
                      <time className="flex items-center rounded-[50px] border border-ink/15 px-4 py-2 text-sm leading-none font-medium max-[767px]:mx-1 max-[767px]:mb-2 max-[767px]:px-[7.5px] max-[767px]:pt-[4.5px] max-[767px]:pb-[2.75px] max-[767px]:text-[10px] max-[767px]:tracking-[0.2px]" dateTime={insight.date}>{insight.displayDate}</time>
                    </div>
                    <h3 className="font-display text-xl leading-[30px] font-medium max-[767px]:text-base max-[767px]:leading-[normal]">
                      <Link className="hover:underline hover:underline-offset-2 focus-visible:underline focus-visible:underline-offset-2" href={insight.href}>{insight.title}</Link>
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-[50px] flex justify-center max-[767px]:mt-[22px]">
            <ButtonLink className="min-h-[49px] px-6 py-[15px] text-base leading-[normal] normal-case max-[991px]:min-h-[42px] max-[991px]:py-3 max-[991px]:text-sm" variant="dark" href="/blog/">View all blogs</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
