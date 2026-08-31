import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { hireShopifyServices } from "@/content/hire-shopify-developers";
import { formatBrText } from "@/lib/text-formatting";

export type ShopifyServicesSectionContent = {
  heading: string;
  description: string;
  items: readonly {
    title: string;
    description: string;
    icon: string;
    iconAlt: string;
    link?: string;
  }[];
};

export function ShopifyServicesSection({
  content = hireShopifyServices,
  preserveDesktopTypography = false,
  variant = "default",
}: {
  content?: ShopifyServicesSectionContent;
  preserveDesktopTypography?: boolean;
  variant?: "default" | "liveTheme";
}) {
  const isLiveTheme = variant === "liveTheme";

  return (
    <section className="shopify-services-sec pt-20 max-[992px]:pt-[50px]" id="shopify-services">
      <Container>
        <div className="mx-auto max-w-[780px] text-center">
          <h2 className="font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading, "")}
          </h2>
          <p className="shopify-services-desc mt-5 text-base leading-[34.5px] font-medium text-muted max-[992px]:text-base max-[992px]:leading-[25px]">
            {formatBrText(content.description, "max-[992px]:hidden")}
          </p>
        </div>

        <div className={`mt-[50px] grid gap-x-4 gap-y-6 max-[767px]:mt-[35px] ${
          isLiveTheme
            ? "grid-cols-3 max-[1199px]:grid-cols-2 max-[992px]:grid-cols-1"
            : "grid-cols-2 max-[992px]:grid-cols-1"
        }`}>
          {content.items.map((item) => {
            const cardContent = (
              <>
                <Image
                  className={isLiveTheme ? "object-contain object-left w-full h-full max-h-10" : "object-contain object-left w-full h-full max-h-10"}
                  src={item.icon}
                  alt={item.iconAlt}
                  width={isLiveTheme ? 32 : 66}
                  height={isLiveTheme ? 32 : 50}
                />
                <h3 className={isLiveTheme
                  ? "mt-[15px] mb-2.5 font-sans text-base leading-[27px] font-bold tracking-[0.32px] text-ink"
                  : "mt-[23px] mb-5 font-sans text-base leading-[27px] font-bold tracking-[0.32px] text-ink max-[1199px]:mt-[15px] max-[1199px]:mb-2.5"
                }>
                  {formatBrText(item.title, "max-[767px]:hidden")}
                </h3>
                <p className={`text-base leading-[27px] font-medium tracking-[0.32px] text-muted mt-2.5 ${preserveDesktopTypography ? "" : "max-[767px]:text-sm max-[767px]:leading-6"}`}>
                  {formatBrText(item.description, "max-[767px]:hidden")}
                </p>
              </>
            );

            return (
              <article
                className={isLiveTheme
                  ? "relative isolate min-h-[230px] rounded-[10px] border-1 border-[#d9d9d9] bg-transparent p-7.5 transition-all duration-300 ease-in-out before:absolute before:-inset-0.5 before:z-0 before:rounded-[12px] before:bg-gradient-to-r before:from-[#15c064] before:to-[#00d1ff] before:opacity-0 before:transition-opacity before:duration-300 before:ease-in-out before:content-[''] after:absolute after:inset-0 after:z-0 after:rounded-[8px] after:bg-white after:content-[''] [&>*]:relative [&>*]:z-10 hover:-translate-y-2.5 hover:border-transparent hover:before:opacity-100 focus-within:border-transparent focus-within:before:opacity-100 max-[1199px]:min-h-0 max-[1199px]:px-7.5 max-[1199px]:py-[30px]"
                  : "group relative z-0 min-h-[260px] rounded-[10px] border-[1.5px] border-[#d9d9d9] bg-white px-[35px] py-[42px] transition-transform duration-300 hover:-translate-y-2.5 hover:border-transparent max-[1199px]:min-h-0 max-[1199px]:p-[30px_20px] before:absolute before:-inset-[3px] before:-z-20 before:rounded-[10px] before:bg-gradient-to-r before:from-[#15c064] before:to-[#00d1ff] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 after:absolute after:inset-0 after:-z-10 after:rounded-[9px] after:bg-white"
                }
                key={item.title}
              >
                {item.link ? (
                  <Link href={item.link} className="block size-full">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
