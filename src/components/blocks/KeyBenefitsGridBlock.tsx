import Image from "next/image";
import React, { type ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";
import { CityWhyChooseBoxesSection } from "@/components/sections/city-why-choose-boxes-section";

export type KeyBenefitItem = {
  subtitle?: string;
  title: string | readonly string[];
  description?: string | readonly string[];
  icon?: string | ReactNode;
  iconAlt?: string;
  iconNode?: ReactNode;
  [key: string]: any;
};

export type ThemeWhyChooseItem = KeyBenefitItem;
export type CityWhyChooseBoxItem = KeyBenefitItem;

export type KeyBenefitsGridContent = {
  eyebrow?: string;
  title?: string | readonly string[];
  heading?: string | readonly string[];
  subtitle?: string | readonly string[];
  description?: string | readonly string[];
  items?: readonly any[];
  boxes?: readonly any[];
  [key: string]: any;
};

export type CityWhyChooseBoxesContent = KeyBenefitsGridContent;

export type KeyBenefitsGridBlockProps = {
  content?: KeyBenefitsGridContent;
  heading?: string | readonly string[];
  title?: string | readonly string[];
  subheading?: string | readonly string[];
  description?: string | readonly string[];
  paragraphs?: readonly string[];
  listItems?: readonly string[];
  items?: readonly any[];
  boxes?: readonly any[];
  backgroundVariant?: "gradient" | "white" | "light" | "dark" | "warm" | string;
  theme?: "light" | "dark" | "white" | "warm" | "green" | "yellow" | string;
  id?: string;
  columns?: 2 | 3 | 4 | 5;
  eyebrowVariant?: "pill" | "dash";
  variant?: "grid-border" | "boxes" | "left-icon" | "top-icon" | "top-icon-mobile" | "themeWhyChoose" | string;
  className?: string;
  layout?: string;
  carouselFullBleed?: boolean;
  [key: string]: any;
};

export type ThemeWhyChooseSectionProps = KeyBenefitsGridBlockProps;
export type CityWhyChooseBoxesSectionProps = KeyBenefitsGridBlockProps;


export function KeyBenefitsGridBlock({
  content: propContent,
  heading,
  title,
  subheading,
  paragraphs,
  listItems,
  items,
  boxes,
  backgroundVariant,
  theme,
  id = "why-choose",
  columns,
  variant,
  className,
  ...rest
}: KeyBenefitsGridBlockProps) {
  const content = propContent ?? {
    heading: heading ?? title,
    title: title ?? heading,
    subheading,
    paragraphs,
    listItems,
    items: items ?? boxes ?? [],
    boxes: boxes ?? items ?? [],
    ...rest,
  };
  const resolvedHeading = content.heading ?? content.title ?? "";
  const resolvedDesc = content.description ?? content.subtitle;
  const rawItems = content.items ?? content.boxes ?? [];
  const isBoxesLayout = variant === "boxes" || (columns && columns >= 3) || theme !== undefined;

  if (isBoxesLayout) {
    const activeTheme = (theme ?? backgroundVariant ?? "light") as "light" | "dark" | "white" | "warm";

    return (
      <CityWhyChooseBoxesSection
        id={id}
        columns={(columns as 3 | 4 | 5) ?? 5}
        theme={activeTheme}
        className={className}
        content={{
          eyebrow: content.eyebrow,
          heading: resolvedHeading,
          description: resolvedDesc,
          items: rawItems.map((item: any) => ({
            subtitle: item.subtitle,
            title: item.title ?? item.heading ?? "",
            description: item.description ?? item.content ?? item.text ?? "",
            icon: typeof item.icon === "string" ? item.icon : undefined,
            iconAlt: item.iconAlt ?? item.alt,
            iconNode: item.iconNode || (typeof item.icon !== "string" ? item.icon : undefined),
          })),
        }}
      />
    );
  }

  // 2-column grid layout (theme-why-choose style)
  const isGradient = backgroundVariant !== "white";
  const sectionClass = isGradient
    ? "why_dynamic_dreamz_sec dev two-column-icon-text-bg mb-12.5 py-12.5 bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] lg:mb-20 lg:py-20"
    : "why_dynamic_dreamz_sec dev two-column-icon-text-bg bg-white py-12.5 lg:py-20";

  return (
    <section className={sectionClass} id={id}>
      <Container>
        <div className="heading-text mx-auto max-w-[920px] text-center" data-aos="fade-up">
          <h2 className="font-montreal-medium text-[35px] font-normal leading-[1.3] text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl">
            {formatBrText(resolvedHeading, "max-[1199px]:hidden")}
          </h2>
          {resolvedDesc && (
            <p className="mt-2.5 text-base font-medium leading-[27px] text-[#535353] max-[767px]:text-sm">
              {formatBrText(resolvedDesc, "max-[1199px]:hidden")}
            </p>
          )}
        </div>

        <div className="why_dynamic_dreamz_main mt-[60px] max-[992px]:mt-5" data-aos="fade-up">
          <ul className="why_dynamic_dreamz-grid m-0 grid list-none grid-cols-2 p-0 max-[992px]:grid-cols-1">
            {rawItems.map((item, index) => {
              const isEvenCol = index % 2 === 0;
              const isLastRow = index >= rawItems.length - 2;
              const isLastItem = index === rawItems.length - 1;

              return (
                <li
                  className={`why-choose-box flex items-start border-black/5 p-[51px] max-[1199px]:p-8 max-[992px]:px-5 max-[992px]:py-7.5 ${
                    isEvenCol ? "border-r max-[992px]:border-r-0" : ""
                  } ${!isLastRow ? "border-b" : "max-[992px]:border-b"} ${
                    isLastItem ? "max-[992px]:border-b-0" : ""
                  }`}
                  data-aos="fade-up"
                  key={typeof item.title === "string" ? item.title : item.title.join(" ")}
                >
                  {item.icon ? (
                    <span className="icon mr-5 flex shrink-0 items-center justify-start max-[767px]:mr-3.5">
                      <Image
                        alt={item.iconAlt ?? ""}
                        className="object-contain"
                        height={50}
                        src={item.icon}
                        width={50}
                      />
                    </span>
                  ) : item.iconNode ? (
                    <span className="icon mr-5 flex shrink-0 items-center justify-start max-[767px]:mr-3.5">
                      {item.iconNode}
                    </span>
                  ) : null}
                  <div className="text flex-1">
                    <h3 className="mb-[5px] font-montreal-medium text-[18px] font-medium leading-[30.6px] tracking-[0.36px] text-[#020202]">
                      {formatBrText(item.title, "max-[767px]:hidden")}
                    </h3>
                    <p className="text-base font-medium leading-[27.2px] tracking-[0.32px] text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
                      {formatBrText(item.description, "max-[767px]:hidden")}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export {
  KeyBenefitsGridBlock as ThemeWhyChooseSection,
  CityWhyChooseBoxesSection,
  KeyBenefitsGridBlock as ShopifyReasonsSection,
  KeyBenefitsGridBlock as ShopifyAppBenefitsSection,
  KeyBenefitsGridBlock as TextBoxSection,
};
