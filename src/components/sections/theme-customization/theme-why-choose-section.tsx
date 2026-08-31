import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionDescription } from "@/components/ui/section-description";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatBrText } from "@/lib/text-formatting";

export type ThemeWhyChooseItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

export type ThemeWhyChooseSectionProps = {
  content: {
    title: string;
    subtitle: string;
    items: readonly ThemeWhyChooseItem[];
  };
  className?: string;
  id?: string;
  preserveDesktopTypography?: boolean;
  preserveLiveIconSize?: boolean;
  variant?: "left-icon" | "top-icon" | "top-icon-mobile";
};

export function ThemeWhyChooseSection({
  content,
  className = "why_dynamic_dreamz_sec dev mt-20 pb-20 pt-20 bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] two-column-icon-text-bg max-[992px]:mt-12.5 max-[992px]:py-14 max-[767px]:mt-10 max-[767px]:py-10",
  id = "why-choose-dynamic-dreamz",
  preserveDesktopTypography = false,
  preserveLiveIconSize = false,
  variant = "left-icon",
}: ThemeWhyChooseSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="heading-text mx-auto max-w-[920px] text-center">
          <SectionHeading>
            {formatBrText(content.title, "max-[1199px]:hidden")}
          </SectionHeading>
          <SectionDescription
            className="why_dynamic_dreamz_desc mt-2.5"
            textClassName="text-sm font-normal leading-[24px]"
          >
            {formatBrText(content.subtitle, "max-[1199px]:hidden")}
          </SectionDescription>
        </div>

        <div
          className={`why_dynamic_dreamz_main mt-[60px] max-[992px]:mt-5 ${
            variant === "top-icon" ? "mx-auto max-w-[920px]" : ""
          }`}
        >
          <ul className="why_dynamic_dreamz-grid grid grid-cols-2 max-[992px]:grid-cols-1 list-none p-0 m-0">
            {content.items.map((item, index) => {
              const isEvenCol = index % 2 === 0;
              const isLastRow = index >= content.items.length - 2;
              const isLastItem = index === content.items.length - 1;

              return (
                <li
                  className={`flex p-[51px] max-[1199px]:p-8 max-[992px]:py-7.5 max-[992px]:px-5 border-black/5 ${
                    variant === "top-icon"
                      ? "flex-col items-start"
                      : variant === "top-icon-mobile"
                        ? "items-start max-[767px]:flex-col max-[767px]:!px-0 max-[767px]:!py-5"
                        : "items-start"
                  } ${
                    isEvenCol ? "border-r max-[992px]:border-r-0" : ""
                  } ${!isLastRow ? "border-b" : "max-[992px]:border-b"} ${
                    isLastItem ? "max-[992px]:border-b-0" : ""
                  }`}
                  key={item.title}
                >
                  <span
                    className={`icon flex flex-shrink-0 items-center justify-start ${
                      preserveLiveIconSize
                        ? "w-[50px]"
                        : ""
                    } ${
                      variant === "top-icon"
                        ? "mb-2.5 max-[767px]:mb-3.5"
                        : variant === "top-icon-mobile"
                          ? "mr-5 max-[767px]:mr-0 max-[767px]:mb-0"
                          : "mr-5 max-[767px]:mr-3.5"
                    }`}
                  >
                    <Image
                      alt={item.iconAlt}
                      className={
                        preserveLiveIconSize
                          ? "object-contain"
                          : "object-contain"
                      }
                      height={preserveLiveIconSize ? 50 : 50}
                      src={item.icon}
                      width={50}
                    />
                  </span>
                  <div className="text flex-1">
                    <h3 className="mb-[5px] font-montreal-medium text-[18px] font-normal leading-[30.6px] tracking-[0.36px] text-[#020202]">
                      {formatBrText(item.title, "max-[767px]:hidden")}
                    </h3>
                    <p className={`text-base font-medium leading-[27.2px] tracking-[0.32px] text-[#535353] ${preserveDesktopTypography ? "" : "max-[767px]:text-sm max-[767px]:leading-6"}`}>
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
