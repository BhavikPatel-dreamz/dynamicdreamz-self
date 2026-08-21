import Image from "next/image";
import { Container } from "@/components/ui/container";
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
  className = "why_dynamic_dreamz_sec dev mt-20 pb-20 pt-20 bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] two-column-icon-text-bg max-[991px]:mt-12.5 max-[991px]:py-14 max-[767px]:mt-10 max-[767px]:py-10",
  id = "why-choose-dynamic-dreamz",
  preserveDesktopTypography = false,
  preserveLiveIconSize = false,
  variant = "left-icon",
}: ThemeWhyChooseSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="heading-text mx-auto max-w-[850px] text-center">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.title, "max-[1199px]:hidden")}
          </h2>
          <p className="why_dynamic_dreamz_desc mt-2.5 text-base font-medium leading-[30.4px] text-muted max-[767px]:text-base max-[767px]:leading-[25px]">
            {formatBrText(content.subtitle, "max-[1199px]:hidden")}
          </p>
        </div>

        <div className="why_dynamic_dreamz_main mt-[60px] max-[991px]:mt-5">
          <ul className="why_dynamic_dreamz-grid grid grid-cols-2 max-[991px]:grid-cols-1 list-none p-0 m-0">
            {content.items.map((item, index) => {
              const isEvenCol = index % 2 === 0;
              const isLastRow = index >= content.items.length - 2;
              const isLastItem = index === content.items.length - 1;

              return (
                <li
                  className={`flex p-[51px] max-[1199px]:p-8 max-[767px]:py-5 max-[767px]:px-0 border-black/5 ${
                    variant === "top-icon"
                      ? "flex-col items-start"
                      : variant === "top-icon-mobile"
                        ? "items-start max-[767px]:flex-col"
                        : "items-start"
                  } ${
                    isEvenCol ? "border-r max-[991px]:border-r-0" : ""
                  } ${!isLastRow ? "border-b" : "max-[991px]:border-b"} ${
                    isLastItem ? "max-[991px]:border-b-0" : ""
                  }`}
                  key={item.title}
                >
                  <span
                    className={`icon flex flex-shrink-0 items-center justify-center ${
                      preserveLiveIconSize
                        ? "h-[70px] w-[66px]"
                        : "size-[66px] max-[767px]:size-[50px]"
                    } ${
                      variant === "top-icon"
                        ? "mb-5 max-[767px]:mb-3.5"
                        : variant === "top-icon-mobile"
                          ? "mr-5 max-[767px]:mr-0 max-[767px]:mb-3.5"
                          : "mr-5 max-[767px]:mr-3.5"
                    }`}
                  >
                    <Image
                      alt={item.iconAlt}
                      className={
                        preserveLiveIconSize
                          ? "h-[70px] w-[66px] object-contain"
                          : "size-[66px] object-contain max-[767px]:size-[50px]"
                      }
                      height={preserveLiveIconSize ? 70 : 66}
                      src={item.icon}
                      width={66}
                    />
                  </span>
                  <div className="text flex-1">
                    <h3 className="mb-[5px] font-sans text-[18px] font-bold leading-[30.6px] tracking-[0.36px] text-[#020202]">
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
