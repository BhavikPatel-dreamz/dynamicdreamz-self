import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import type { IndustryPageContent, IndustryPortfolioItem } from "@/types/industry";

function PortfolioCard({ item }: { item: IndustryPortfolioItem }) {
  return (
    <article>
      <a
        className="group/project relative block w-full overflow-hidden pb-[115%] focus-visible:outline-offset-4"
        href={item.href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label={`View ${item.name} project`}
        data-industry-project
      >
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 575px) calc(100vw - 32px), (max-width: 991px) 330px, 370px"
        />
        <span
          className="pointer-events-none absolute inset-0 z-1 bg-black/40 opacity-0 transition-opacity duration-300 group-hover/project:opacity-100 group-focus-visible/project:opacity-100"
          data-project-overlay
        />
        <span
          className="absolute bottom-[-60px] left-1/2 z-2 flex -translate-x-1/2 items-center gap-2.5 text-lg leading-[25.2px] font-bold whitespace-nowrap text-white transition-[bottom] duration-500 ease-in-out group-hover/project:bottom-[30px] group-focus-visible/project:bottom-[30px]"
          data-project-link
        >
          View Project
          <Image
            aria-hidden="true"
            className="h-3 w-3"
            src="/assets/icons/diagonal-arrow-white.svg"
            alt=""
            width={12}
            height={12}
          />
        </span>
        <span
          className="absolute top-[25px] right-6 z-2 translate-y-2.5 opacity-0 transition-[opacity,transform] duration-500 ease-in-out group-hover/project:translate-y-0 group-hover/project:opacity-100 group-focus-visible/project:translate-y-0 group-focus-visible/project:opacity-100"
          data-project-platform
        >
          <Image
            src={item.platformLogo}
            alt={item.platformAlt}
            width={item.platformWidth}
            height={item.platformHeight}
          />
        </span>
      </a>
      <p className="mt-[23px] mb-2 text-sm leading-[19.6px] font-bold tracking-[1.12px] text-black/70 uppercase max-[991px]:mt-[36.8px]">
        {item.category}
      </p>
      <h3 className="text-lg leading-5 font-bold text-ink capitalize">
        <a
          className="transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red"
          href={item.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {item.name}
        </a>
      </h3>
    </article>
  );
}

type IndustryPortfolioSectionProps = {
  content: IndustryPageContent;
};

export function IndustryPortfolioSection({ content }: IndustryPortfolioSectionProps) {
  const { portfolio, slug } = content;

  return (
    <section
      className="pt-20 pb-[85px] max-[991px]:pt-[50px] max-[991px]:pb-[60.4px]"
      aria-labelledby={`${slug}-portfolio-title`}
      data-industry="portfolio"
    >
      <Container className="max-[575px]:px-4">
        <div className="text-center">
          <h2
            className="mb-2.5 text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
            id={`${slug}-portfolio-title`}
          >
            {portfolio.title}
          </h2>
          <p className="m-0 text-lg leading-[34.2px] font-medium text-muted max-[991px]:text-base max-[991px]:leading-[30.4px]">
            {portfolio.description}
          </p>
        </div>

        <div className="mt-[60px] flex flex-wrap gap-x-[15px] gap-y-[60px] max-[991px]:mt-[50px] max-[991px]:gap-y-[30px]">
          {portfolio.items.map((item) => (
            <div
              className="w-[calc(33.33%-10px)] max-[991px]:w-[calc(50%-10px)] max-[767px]:w-full"
              key={item.name}
            >
              <PortfolioCard item={item} />
            </div>
          ))}
        </div>

        <div className="mt-[51px] text-center">
          <ButtonLink
            className="min-h-[49px] px-6 py-[15px] text-base leading-[normal] max-[991px]:min-h-[42px] max-[991px]:py-3 max-[991px]:text-sm"
            href="/our-work"
            variant="primary"
          >
            View our work
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
