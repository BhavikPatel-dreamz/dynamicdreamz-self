import Image from "next/image";

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
  }[];
};

export function ShopifyServicesSection({
  content = hireShopifyServices,
}: {
  content?: ShopifyServicesSectionContent;
}) {
  return (
    <section className="pb-20 max-[991px]:pb-[50px]" id="shopify-services">
      <Container>
        <div className="mx-auto max-w-[780px] text-center">
          <h2 className="font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading, "max-[1199px]:hidden")}
          </h2>
          <p className="mt-2.5 text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
            {formatBrText(content.description, "max-[1199px]:hidden")}
          </p>
        </div>

        <div className="mt-[50px] grid grid-cols-2 gap-x-4 gap-y-6 max-[991px]:grid-cols-1 max-[767px]:mt-[35px]">
          {content.items.map((item) => (
            <article
              className="group relative z-0 min-h-[260px] rounded-[10px] border-[1.5px] border-[#d9d9d9] bg-white px-[35px] py-[42px] transition-transform duration-300 hover:-translate-y-2.5 hover:border-transparent max-[1199px]:min-h-0 max-[1199px]:p-[30px_20px] before:absolute before:-inset-[3px] before:-z-20 before:rounded-[10px] before:bg-gradient-to-r before:from-[#15c064] before:to-[#00d1ff] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 after:absolute after:inset-0 after:-z-10 after:rounded-[9px] after:bg-white"
              key={item.title}
            >
              <Image className="h-[50px] w-[66px] object-contain object-left" src={item.icon} alt={item.iconAlt} width={66} height={50} />
              <h3 className="mt-[23px] mb-5 font-sans text-base leading-[27px] font-bold tracking-[0.32px] text-ink max-[1199px]:mt-[15px] max-[1199px]:mb-2.5">
                {formatBrText(item.title, "max-[767px]:hidden")}
              </h3>
              <p className="text-base leading-[27px] font-medium tracking-[0.32px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
                {formatBrText(item.description, "max-[767px]:hidden")}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
