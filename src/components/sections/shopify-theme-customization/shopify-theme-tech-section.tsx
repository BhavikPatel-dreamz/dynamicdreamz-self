import Image from "next/image";

import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

const TECH_GRADIENTS: Record<string, string> = {
  Liquid: "linear-gradient(180deg, rgba(146, 0, 59, 0.06) 0%, rgba(255, 255, 255, 0) 100%)",
  PHP: "linear-gradient(180deg, rgba(146, 0, 59, 0.06) 0%, rgba(255, 255, 255, 0) 100%)",
  HTML5: "linear-gradient(180deg, rgba(228, 77, 38, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  CSS3: "linear-gradient(180deg, rgba(41, 101, 241, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  Javascript: "linear-gradient(180deg, rgba(240, 190, 37, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  JavaScript: "linear-gradient(180deg, rgba(240, 190, 37, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  jQuery: "linear-gradient(180deg, rgba(8, 104, 172, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  Ajax: "linear-gradient(180deg, rgba(0, 93, 166, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  MySQL: "linear-gradient(180deg, rgba(0, 93, 166, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  Bootstrap: "linear-gradient(180deg, rgba(113, 44, 242, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  React: "linear-gradient(180deg, rgba(0, 216, 255, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  WooCommerce: "linear-gradient(180deg, rgba(150, 88, 138, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  Elementor: "linear-gradient(180deg, rgba(211, 46, 95, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  WPBakery: "linear-gradient(180deg, rgba(46, 126, 211, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
  "Divi Builder": "linear-gradient(180deg, rgba(130, 46, 211, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
};

export type ThemeCustomizationTechItem = {
  title?: string;
  name?: string;
  icon?: string;
  image?: string;
  alt?: string;
};

export type ShopifyThemeTechSectionProps = {
  content: {
    title: string;
    subtitle: string;
    items: readonly ThemeCustomizationTechItem[];
  };
};

export function ShopifyThemeTechSection({ content }: ShopifyThemeTechSectionProps) {
  return (
    <section
      className="wordpress-page-builders_sec pt-0 pb-20 max-[767px]:pb-10"
      id="technologies"
    >
      <Container>
        <div className="mx-auto max-w-[850px] text-center">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.title, "max-[1199px]:hidden")}
          </h2>
          <p className="mt-2.5 text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
            {formatBrText(content.subtitle, "max-[1199px]:hidden")}
          </p>
        </div>

        <div className="mx-auto mt-[50px] flex max-w-[900px] flex-wrap justify-center max-[767px]:mt-[35px]">
          {content.items.map((tech) => {
            const title = tech.title ?? tech.name ?? "";
            const icon = tech.icon ?? tech.image ?? "";
            const alt = tech.alt ?? `${title} Logo`;

            return (
              <div
                className="w-1/3 px-2.5 pb-[30px] text-center max-[767px]:w-1/2"
                key={title}
              >
                <div className="builder-block transition-transform duration-300 hover:-translate-y-2.5">
                  <div
                    className="mx-auto mb-4 flex size-[100px] items-center justify-center rounded-[15px] p-4 max-[767px]:size-[80px]"
                    style={{
                      background:
                        TECH_GRADIENTS[title] ??
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                  >
                    <Image
                      alt={alt}
                      className="max-h-[60px] max-w-[60px] object-contain max-[767px]:max-h-[48px] max-[767px]:max-w-[48px]"
                      height={60}
                      src={icon}
                      width={60}
                    />
                  </div>
                  <h3 className="font-sans text-[18px] font-bold leading-[30.6px] tracking-[0.36px] text-ink max-[767px]:text-base">
                    {title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
