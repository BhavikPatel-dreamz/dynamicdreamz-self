import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export type AiDiscoveryItem = {
  title: string;
  description: string;
  icon: string;
  alt: string;
};

export type AiDiscoveryContent = {
  heading: string;
  description: string;
  items: readonly AiDiscoveryItem[];
  cta?: {
    text?: string;
    label: string;
    href: string;
  };
};

export type AiDiscoverySectionProps = {
  content: AiDiscoveryContent;
  variant?: "divided" | "cards";
  className?: string;
};

export function AiDiscoverySection({
  content,
  variant = "divided",
  className,
}: AiDiscoverySectionProps) {
  if (variant === "cards") {
    return (
      <section
        className={
          className ??
          "preparing-store pt-20 pb-0 max-[992px]:pt-[50px]"
        }
      >
        <Container>
          <div className="title mx-auto mb-16 max-w-[800px] text-center max-[992px]:mb-[50px] max-[767px]:mb-10">
            <h2 className="mb-4 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[1199px]:text-[28px] max-[767px]:text-[24px]">
              {content.heading}
            </h2>
            <p className="m-0 mx-auto max-w-[800px] font-sans text-base font-normal leading-[26px] text-muted">
              {content.description}
            </p>
          </div>

          <div className="ai-driven-wrapper -mx-[15px] -mb-[30px] flex flex-wrap justify-center">
            {content.items.map((item) => (
              <div
                key={item.title}
                className="ai-driven-col mb-[30px] w-1/4 px-[15px] max-[992px]:w-1/2 max-[767px]:w-full"
              >
                <div className="ai-driven-item flex h-full flex-col items-center rounded-[15px] border border-[#efefef] bg-[#F7F4E9] p-[40px_15px] text-center">
                  <div className="icon mx-auto mb-5 size-[50px]">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={50}
                      height={50}
                      className="size-full object-contain"
                    />
                  </div>
                  <div className="content">
                    <h3 className="mb-[18px] font-sans text-[18px] font-bold leading-6 text-ink">
                      {item.title}
                    </h3>
                    <p className="m-0 font-sans text-[15px] font-normal leading-6 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {content.cta ? (
            <div className="bottom-text mt-[50px] flex flex-col items-center justify-center gap-4 text-center">
              {content.cta.text ? (
                <p className="m-0 font-sans text-[18px] font-semibold text-ink max-[767px]:text-base">
                  {content.cta.text}
                </p>
              ) : null}
              <ButtonLink
                aria-label={`Dynamic Dreamz - ${content.cta.label}`}
                href={content.cta.href}
                variant="primary"
              >
                {content.cta.label}
              </ButtonLink>
            </div>
          ) : null}
        </Container>
      </section>
    );
  }

  return (
    <section
      className={
        className ?? "ai-driven-shopping py-20 max-[992px]:py-[50px]"
      }
    >
      <Container>
        <div className="title mx-auto mb-16 max-w-[900px] text-center max-[992px]:mb-10 max-[767px]:mb-[25px]">
          <h2 className="mb-4 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[1199px]:text-[28px] max-[767px]:text-[24px]">
            {content.heading}
          </h2>
          <p className="m-0 font-sans text-base font-normal leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-[26px]">
            {content.description}
          </p>
        </div>

        <div className="ai-driven-row flex flex-wrap">
          {content.items.map((item, idx) => {
            const isLastDesktop = (idx + 1) % 4 === 0;
            const isLastTablet = (idx + 1) % 2 === 0;
            const isLastMobile = idx === content.items.length - 1;

            return (
              <div
                key={item.title}
                className={`ai-driven-col w-1/4 px-5 max-[992px]:w-1/2 max-[992px]:border-b max-[992px]:border-[#2828281A] max-[992px]:py-5 max-[767px]:w-full max-[767px]:border-r-0 max-[767px]:px-0 max-[767px]:py-[30px] ${
                  !isLastDesktop
                    ? "min-[992px]:border-r min-[992px]:border-[#2828281A]"
                    : ""
                } ${
                  !isLastTablet
                    ? "max-[992px]:min-[768px]:border-r max-[992px]:min-[768px]:border-[#2828281A]"
                    : ""
                } ${
                  idx >= content.items.length - 2
                    ? "max-[992px]:min-[768px]:border-b-0"
                    : ""
                } ${
                  isLastMobile ? "max-[767px]:border-b-0 max-[767px]:pb-0" : ""
                }`}
              >
                <div className="ai-driven-item flex h-full flex-col items-center text-center">
                  <div className="icon mb-5 size-[50px]">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={50}
                      height={50}
                      className="size-full object-contain"
                    />
                  </div>
                  <h4 className="mb-[15px] font-sans text-[18px] font-bold leading-6 text-ink max-[767px]:text-[17px]">
                    {item.title}
                  </h4>
                  <p className="m-0 font-sans text-base font-normal leading-[26px] text-muted max-[767px]:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {content.cta ? (
          <div className="bottom-text mt-12 flex flex-col items-center justify-center gap-4 text-center max-[767px]:mt-8">
            {content.cta.text ? (
              <p className="m-0 font-sans text-lg font-semibold text-ink max-[767px]:text-base">
                {content.cta.text}
              </p>
            ) : null}
            <ButtonLink
              aria-label={`Dynamic Dreamz - ${content.cta.label}`}
              href={content.cta.href}
              variant="primary"
            >
              {content.cta.label}
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
