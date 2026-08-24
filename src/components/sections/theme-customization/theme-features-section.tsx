import Image from "next/image";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type ThemeFeatureItem = {
  title: string;
  description?: string;
  icon: string;
  iconAlt: string;
};

export type ThemeFeatureHighlightItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
};

export type ThemeFeaturesSectionProps = {
  content: {
    title: string;
    subtitle: string;
    highlightItems?: readonly ThemeFeatureHighlightItem[];
    items: readonly ThemeFeatureItem[];
  };
  className?: string;
  id?: string;
};

export function ThemeFeaturesSection({
  content,
  className = "three_col_icon_sec py-20 max-[991px]:py-12.5",
  id = "theme-features",
}: ThemeFeaturesSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="theme-features-sec title-with-text mb-[50px] text-center max-[767px]:mb-[30px]">
          <h2 className="theme-features-title font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.title, "max-[1199px]:hidden")}
          </h2>
          <p className="theme-features mx-auto mt-6 max-w-[800px] text-base font-medium leading-[34.2px] text-muted max-[991px]:text-base max-[767px]:leading-[25px]">
            {formatBrText(content.subtitle, "max-[1199px]:hidden")}
          </p>
        </div>

        {content.highlightItems && content.highlightItems.length > 0 && (
          <div className="three_col_features_section mb-8 max-[767px]:mb-4">
            <div className="flex flex-wrap -mx-3 -mb-6 justify-center">
              {content.highlightItems.map((item) => (
                <div
                  className="w-1/3 px-3 mb-6 max-[991px]:w-1/2 max-[767px]:w-full"
                  key={item.title}
                >
                  <article className="features_inner flex h-full flex-col items-center justify-start rounded-[15px] border border-[#efefef] bg-white p-5 text-center transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                    <div className="features_inner_img mb-5 w-full overflow-hidden rounded-[10px]">
                      <Image
                        alt={item.imageAlt}
                        className="w-full h-auto object-cover rounded-[10px]"
                        height={item.imageHeight ?? 260}
                        src={item.image}
                        width={item.imageWidth ?? 369}
                      />
                    </div>
                    <h3 className="font-sans text-[20px] font-bold leading-[28px] text-ink mb-2">
                      {formatBrText(item.title, "max-[767px]:hidden")}
                    </h3>
                    <p className="text-sm font-normal leading-[24px] text-muted">
                      {formatBrText(item.description, "max-[767px]:hidden")}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap -mx-3 -mb-6 justify-center">
          {content.items.map((item) => (
            <div
              className="w-1/3 px-3 mb-6 max-[991px]:w-1/2 max-[767px]:w-full"
              key={item.title}
            >
              <article
                className="theme-box flex h-full flex-col items-center justify-start rounded-[15px] border border-[#efefef] bg-white p-[30px_20px] text-center transition-all duration-300"
              >
                <div className="icon mb-[35px] flex size-[55px] items-center justify-center">
                  <Image
                    alt={item.iconAlt}
                    className="size-[55px] object-contain"
                    height={55}
                    src={item.icon}
                    width={55}
                  />
                </div>
                <h3 className="font-sans text-[18px] font-semibold leading-[28.8px] text-ink">
                  {formatBrText(item.title, "max-[767px]:hidden")}
                </h3>
                {item.description && (
                  <p className="mt-2 text-sm font-normal leading-[24px] text-muted">
                    {formatBrText(item.description, "max-[767px]:hidden")}
                  </p>
                )}
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
