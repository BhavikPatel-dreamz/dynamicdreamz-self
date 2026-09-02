import Image from "next/image";

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

export type ThemeFeatureCardProps = {
  item: ThemeFeatureItem;
};

export function ThemeFeatureCard({ item }: ThemeFeatureCardProps) {
  return (
    <article className="theme-box flex h-full flex-col items-center justify-start rounded-[15px] border border-[#efefef] bg-white p-[30px_20px] text-center transition-all duration-300">
      <div className="icon mb-[35px] flex size-[55px] items-center justify-center">
        <Image
          alt={item.iconAlt}
          className="size-[55px] object-contain"
          height={55}
          src={item.icon}
          width={55}
        />
      </div>
      <h3 className="font-montreal-medium text-[18px] font-medium leading-[28.8px] text-ink">
        {formatBrText(item.title, "max-[767px]:hidden")}
      </h3>
      {item.description ? (
        <p className="mt-2 text-sm font-normal leading-[24px] text-muted">
          {formatBrText(item.description, "max-[767px]:hidden")}
        </p>
      ) : null}
    </article>
  );
}

export type ThemeFeatureHighlightCardProps = {
  item: ThemeFeatureHighlightItem;
};

export function ThemeFeatureHighlightCard({
  item,
}: ThemeFeatureHighlightCardProps) {
  return (
    <article className="features_inner flex h-full flex-col items-center justify-start rounded-[15px] border border-[#efefef] bg-white p-5 text-center transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
      <div className="features_inner_img mb-5 w-full overflow-hidden rounded-[10px]">
        <Image
          alt={item.imageAlt}
          className="h-auto w-full rounded-[10px] object-cover"
          height={item.imageHeight ?? 260}
          src={item.image}
          width={item.imageWidth ?? 369}
        />
      </div>
      <h3 className="mb-2 font-montreal-medium text-[20px] font-medium leading-[28px] text-ink">
        {formatBrText(item.title, "max-[767px]:hidden")}
      </h3>
      <p className="text-sm font-normal leading-[24px] text-muted">
        {formatBrText(item.description, "max-[767px]:hidden")}
      </p>
    </article>
  );
}
