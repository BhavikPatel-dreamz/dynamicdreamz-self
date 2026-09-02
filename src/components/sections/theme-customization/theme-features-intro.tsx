import { SectionIntro } from "@/components/ui/section-intro";
import { formatBrText } from "@/lib/text-formatting";

export type ThemeFeaturesIntroProps = {
  title: string;
  subtitle: string;
};

export function ThemeFeaturesIntro({
  title,
  subtitle,
}: ThemeFeaturesIntroProps) {
  return (
    <SectionIntro
      className="theme-features-sec title-with-text mb-[50px] max-[767px]:mb-[30px]"
      description={formatBrText(subtitle, "max-[1199px]:hidden")}
      descriptionClassName="theme-features mx-auto mt-6 max-w-[800px]"
      descriptionTextClassName="font-montserrat text-sm font-normal max-[992px]:text-sm max-[991px]:leading-[24px]"
      heading={formatBrText(title, "max-[1199px]:hidden")}
    />
  );
}
