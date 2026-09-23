import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { sharedUiCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";

export type ThemeCustomizationThemeItem = {
  title?: string;
  name?: string;
  image: string;
  alt?: string;
  href?: string;
  ctaText?: string;
};

export type ShopifyThemesGridContent = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  items: readonly ThemeCustomizationThemeItem[];
};

export type ShopifyThemesGridSectionProps = {
  content: ShopifyThemesGridContent;
  className?: string;
  id?: string;
  variant?: "white" | "pista";
};

export function ShopifyThemesGridSection({
  content,
  className,
  id,
  variant = "white",
}: ShopifyThemesGridSectionProps) {
  const isPista = variant === "pista";
  const sectionId = id ?? (isPista ? "customized-theme" : "themes");

  if (isPista) {
    return (
      <section
        className={cn(
          "shopify-themes-customize-section bg-[#eff4ef] py-20 max-[992px]:py-[50px]",
          className,
        )}
        id={sectionId}
      >
        <Container>
          <SplitSectionHeading
            className="mb-[50px] gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
            description={content.subtitle}
            eyebrow={content.eyebrow}
            heading={content.title}
            variant="left"
          />

          <div className="wrapper grid grid-cols-3 gap-[22px] max-[1199px]:grid-cols-2 max-[767px]:block max-[767px]:space-y-4">
            {content.items.map((theme) => {
              const title = theme.title ?? theme.name ?? "";
              const alt = theme.alt ?? `${title} Image`;
              const href = theme.href ?? siteConfig.quotePath;
              const ctaText = theme.ctaText ?? `${sharedUiCopy.learnMore} ${title.replace(" Theme", "")}`;

              return (
                <Link
                  className="shopify-theme-card group block rounded-[24px] border border-[rgba(40,40,40,0.11)] bg-white p-4 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_22px_50px_rgba(40,40,40,0.10)]"
                  href={href}
                  key={title}
                >
                  <div className="theme-img relative mb-5 w-full overflow-hidden rounded-[17px] border border-[#efefef] pb-[90.75%]">
                    <Image
                      alt={alt}
                      className="absolute inset-0 size-full object-cover object-top"
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                      src={theme.image}
                    />
                  </div>
                  <div className="text flex items-center justify-between">
                    <h3 className="mb-0 font-sans text-[20px] font-bold text-ink">
                      {title}
                    </h3>
                    <span className="learn_more flex items-center text-xs font-medium uppercase leading-none text-brand-red transition-colors group-hover:text-ink">
                      <span>{ctaText}</span>
                      <svg
                        aria-hidden="true"
                        className="ml-2.5 w-2 fill-brand-red transition-colors group-hover:fill-ink"
                        height="12"
                        viewBox="0 0 12 12"
                        width="12"
                      >
                        <path d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "shopify-themes-customize-section pt-0 pb-20 max-[767px]:pb-10",
        className,
      )}
      id={sectionId}
    >
      <Container>
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {content.title}
          </h2>
          <p className="mt-2.5 text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-[50px] grid grid-cols-3 gap-x-4 gap-y-8 max-[992px]:grid-cols-2 max-[767px]:mt-8 max-[767px]:grid-cols-1">
          {content.items.map((theme) => {
            const title = theme.title ?? theme.name ?? "";
            const alt = theme.alt ?? `${title} Image`;
            const href = theme.href ?? siteConfig.quotePath;

            return (
              <Link
                className="group relative block rounded-[15px] border border-[#efefef] bg-white p-[20px_20px_34px_20px] transition-all duration-300 hover:shadow-[0px_10px_50px_0px_rgba(94,94,94,0.08)] before:absolute before:-inset-[2px] before:-z-10 before:rounded-[15px] before:bg-gradient-to-r before:from-[#15c064] before:to-[#00d1ff] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                href={href}
                key={title}
              >
                <div className="relative mb-5 w-full overflow-hidden rounded-[10px] border border-[#efefef] pb-[90.75%]">
                  <Image
                    alt={alt}
                    className="absolute inset-0 size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                    src={theme.image}
                  />
                </div>
                <div className="text">
                  <h3 className="mb-2.5 font-sans text-[18px] font-bold leading-[30.6px] tracking-[0.36px] text-ink">
                    {title}
                  </h3>
                  <span className="inline-flex items-center font-sans text-sm font-bold uppercase tracking-[0.5px] text-[#D92128] underline">
                    {sharedUiCopy.learnMore}
                    <svg
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      height="12"
                      viewBox="0 0 12 12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.996094 5.25C0.58188 5.25 0.246094 5.58579 0.246094 6C0.246094 6.41421 0.58188 6.75 0.996094 6.75V5.25ZM11.5264 6.53033C11.8193 6.23744 11.8193 5.76256 11.5264 5.46967L6.75345 0.696699C6.46056 0.403806 5.98569 0.403806 5.69279 0.696699C5.3999 0.989593 5.3999 1.46447 5.69279 1.75736L9.93543 6L5.69279 10.2426C5.3999 10.5355 5.3999 11.0104 5.69279 11.3033C5.98569 11.5962 6.46056 11.5962 6.75345 11.3033L11.5264 6.53033ZM0.996094 6.75L10.9961 6.75V5.25L0.996094 5.25V6.75Z"
                        fill="#D92128"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
