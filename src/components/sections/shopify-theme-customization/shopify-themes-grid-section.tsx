import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { sharedUiCopy } from "@/content/common";

export type ThemeCustomizationThemeItem = {
  title?: string;
  name?: string;
  image: string;
  alt?: string;
  href?: string;
};

export type ShopifyThemesGridSectionProps = {
  content: {
    title: string;
    subtitle: string;
    items: readonly ThemeCustomizationThemeItem[];
  };
};

export function ShopifyThemesGridSection({ content }: ShopifyThemesGridSectionProps) {
  return (
    <section className="shopify-themes-customize-section pt-0 pb-20 max-[767px]:pb-10" id="themes">
      <Container>
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {content.title}
          </h2>
          <p className="mt-2.5 text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-[50px] grid grid-cols-3 gap-x-4 gap-y-8 max-[991px]:grid-cols-2 max-[767px]:mt-8 max-[767px]:grid-cols-1">
          {content.items.map((theme) => {
            const title = theme.title ?? theme.name ?? "";
            const alt = theme.alt ?? `${title} Image`;
            const href = theme.href ?? "/request-quote";

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
