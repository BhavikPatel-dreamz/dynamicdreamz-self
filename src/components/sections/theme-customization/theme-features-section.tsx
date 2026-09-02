import {
  ThemeFeatureCard,
  ThemeFeatureHighlightCard,
  type ThemeFeatureHighlightItem,
  type ThemeFeatureItem,
} from "@/components/sections/theme-customization/theme-feature-card";
import { ThemeFeaturesIntro } from "@/components/sections/theme-customization/theme-features-intro";
import { Container } from "@/components/ui/container";

export type {
  ThemeFeatureHighlightItem,
  ThemeFeatureItem,
} from "@/components/sections/theme-customization/theme-feature-card";

export type ThemeFeaturesContent = {
  title: string;
  subtitle: string;
  highlightItems?: readonly ThemeFeatureHighlightItem[];
  items: readonly ThemeFeatureItem[];
};

export type ThemeFeaturesSectionProps = {
  content: ThemeFeaturesContent;
  className?: string;
  id?: string;
};

export function ThemeFeaturesSection({
  content,
  className = "three_col_icon_sec py-20 max-[992px]:py-12.5",
  id = "theme-features",
}: ThemeFeaturesSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <ThemeFeaturesIntro
          subtitle={content.subtitle}
          title={content.title}
        />

        {content.highlightItems && content.highlightItems.length > 0 && (
          <div className="three_col_features_section mb-8 max-[767px]:mb-4">
            <div className="-mx-3 -mb-6 flex flex-wrap justify-center">
              {content.highlightItems.map((item) => (
                <div
                  className="mb-6 w-1/3 px-3 max-[992px]:w-1/2 max-[767px]:w-full"
                  key={item.title}
                >
                  <ThemeFeatureHighlightCard item={item} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="-mx-3 -mb-6 flex flex-wrap justify-center">
          {content.items.map((item) => (
            <div
              className="mb-6 w-1/3 px-3 max-[992px]:w-1/2 max-[767px]:w-full"
              key={item.title}
            >
              <ThemeFeatureCard item={item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
