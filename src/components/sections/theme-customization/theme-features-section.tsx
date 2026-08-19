import Image from "next/image";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type ThemeFeatureItem = {
  title: string;
  icon: string;
  iconAlt: string;
};

export type ThemeFeaturesSectionProps = {
  content: {
    title: string;
    subtitle: string;
    items: readonly ThemeFeatureItem[];
  };
  className?: string;
  id?: string;
};

export function ThemeFeaturesSection({
  content,
  className = "three_col_icon_sec py-20 max-[991px]:py-16 max-[767px]:py-12",
  id = "theme-features",
}: ThemeFeaturesSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="title-with-text mb-[50px] text-center max-[767px]:mb-[30px]">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.title, "max-[1199px]:hidden")}
          </h2>
          <p className="mx-auto mt-2.5 max-w-[800px] text-base font-normal leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
            {formatBrText(content.subtitle, "max-[1199px]:hidden")}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {content.items.map((item) => (
            <article
              className="theme-box flex h-full flex-col items-center justify-start rounded-[15px] border border-[#efefef] bg-white p-[30px_20px] text-center transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              key={item.title}
            >
              <div className="icon mb-[30px] flex size-[55px] items-center justify-center">
                <Image
                  alt={item.iconAlt}
                  className="size-[55px] object-contain"
                  height={55}
                  src={item.icon}
                  width={55}
                />
              </div>
              <h3 className="font-sans text-[18px] font-semibold leading-[28px] text-ink">
                {formatBrText(item.title, "max-[767px]:hidden")}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
