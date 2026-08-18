import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { hireShopifyAdvantages, hireShopifyReasons } from "@/content/hire-shopify-developers";

const headingClassName = "font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]";

export type ProofSectionItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

export type ProofSectionContent = {
  heading: string;
  description: string;
  items: readonly ProofSectionItem[];
  ctaLabel?: string;
  ctaHref?: string;
  hideCta?: boolean;
};

const defaultReasonsContent: ProofSectionContent = {
  heading: "Why Choose Dynamic Dreamz for Shopify Development",
  description:
    "Our Shopify developers have the ideal balance of expertise in eCommerce business and Shopify technology. For your online business, we can act as a powerful catalyst.",
  items: hireShopifyReasons,
};

const defaultAdvantagesContent: ProofSectionContent = {
  heading: "Our Advantages of Choosing Dynamic Dreamz as a Shopify Developer",
  description: "Get connected with us, and you will witness the difference from day one!",
  items: hireShopifyAdvantages,
  ctaLabel: "inquire now",
  ctaHref: "/request-quote",
};

export function ShopifyReasonsSection({
  content = defaultReasonsContent,
}: {
  content?: ProofSectionContent;
}) {
  return (
    <section
      className="bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[767px]:py-[60px]"
      id="why-hire-shopify-developers"
    >
      <Container>
        <div className="mb-[50px] text-center max-[767px]:mb-[35px]">
          <h2 className={headingClassName}>{content.heading}</h2>
          <p className="mx-auto mt-2.5 max-w-[720px] text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {content.items.map((item) => (
            <article
              className="group relative z-0 min-h-[330px] rounded-[15px] bg-white px-[30px] pt-10 pb-[60px] before:absolute before:-inset-0.5 before:-z-20 before:rounded-[15px] before:bg-gradient-to-r before:from-[#15c064] before:to-[#00d1ff] before:opacity-0 before:transition-opacity hover:before:opacity-100 after:absolute after:inset-0 after:-z-10 after:rounded-[14px] after:bg-white"
              key={item.title}
            >
              <Image
                className="mb-5 size-[60px] object-contain"
                src={item.icon}
                alt={item.iconAlt}
                width={60}
                height={60}
              />
              <h3 className="mb-[5px] font-sans text-base leading-[26.72px] font-bold tracking-[0.32px] text-ink">
                {item.title}
              </h3>
              <p className="text-base leading-[27.2px] font-medium tracking-[0.32px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ShopifyAdvantagesSection({
  content = defaultAdvantagesContent,
  columns = 3,
  className = "py-20 max-[767px]:py-[60px]",
  id = "shopify-developer-advantages",
}: {
  content?: ProofSectionContent;
  columns?: 2 | 3;
  className?: string;
  id?: string;
}) {
  const isTwoCol = columns === 2;

  return (
    <section className={className} id={id}>
      <Container>
        <div className="mx-auto max-w-[850px] text-center">
          <h2 className={headingClassName}>{content.heading}</h2>
          <p className="mt-2.5 text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
            {content.description}
          </p>
        </div>

        <div
          className={`mt-[60px] grid max-[767px]:grid-cols-1 ${
            isTwoCol
              ? "grid-cols-2 max-[991px]:grid-cols-2"
              : "grid-cols-3 max-[991px]:grid-cols-2"
          } max-[991px]:mt-10`}
        >
          {content.items.map((item, index) => (
            <article
              className={`flex min-h-[250px] flex-col items-center border-[#efefef] px-8 py-[35px] text-center max-[1199px]:px-5 max-[767px]:min-h-0 max-[767px]:py-5 ${
                isTwoCol
                  ? `${index % 2 === 0 ? "border-r max-[767px]:border-r-0" : ""} ${
                      index < content.items.length - 2 ? "border-b" : ""
                    }`
                  : `${index % 3 !== 2 ? "border-r max-[991px]:border-r-0" : ""} ${
                      index < 3 ? "border-b" : ""
                    } ${index % 2 === 0 ? "max-[991px]:border-r" : ""} ${
                      index < 4 ? "max-[991px]:border-b" : ""
                    }`
              } ${
                index < content.items.length - 1
                  ? "max-[767px]:border-r-0 max-[767px]:border-b"
                  : "max-[767px]:border-r-0"
              }`}
              key={item.title}
            >
              <Image
                className="size-[58px] object-contain"
                src={item.icon}
                alt={item.iconAlt}
                width={58}
                height={58}
              />
              <h3 className="mt-5 mb-[15px] font-sans text-base leading-[26px] font-bold text-ink max-[767px]:mt-[15px] max-[767px]:mb-2.5">
                {item.title}
              </h3>
              <p className="text-base leading-[27.2px] font-medium tracking-[0.32px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {!content.hideCta && (
          <div className="mt-[46px] text-center">
            <ButtonLink href={content.ctaHref ?? "/request-quote"} variant="primary">
              {content.ctaLabel ?? "inquire now"}
            </ButtonLink>
          </div>
        )}
      </Container>
    </section>
  );
}
