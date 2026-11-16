import type { ReactNode } from "react";

import {
  AstraBenefitIcon,
  AstraFeatureIcon,
} from "@/components/sections/astra-theme-customization/astra-icons";
import {
  BlocksyBenefitIcon,
  BlocksyFeatureIcon,
} from "@/components/sections/blocksy-theme-customization/blocksy-icons";
import {
  BloghashBenefitIcon,
  BloghashFeatureIcon,
} from "@/components/sections/bloghash-theme-customization/bloghash-icons";
import {
  ExtendableBenefitIcon,
  ExtendableFeatureIcon,
} from "@/components/sections/extendable-theme-customization/extendable-icons";
import {
  GeneratepressBenefitIcon,
  GeneratepressFeatureIcon,
} from "@/components/sections/generatepress-theme-customization/generatepress-icons";
import {
  GoBenefitIcon,
  GoFeatureIcon,
} from "@/components/sections/go-theme-customization/go-icons";
import {
  HelloBizBenefitIcon,
  HelloBizFeatureIcon,
} from "@/components/sections/hello-biz-theme-customization/hello-biz-icons";
import {
  HelloElementorBenefitIcon,
  HelloElementorFeatureIcon,
} from "@/components/sections/hello-elementor-theme-customization/hello-elementor-icons";
import {
  InspiroBenefitIcon,
  InspiroFeatureIcon,
} from "@/components/sections/inspiro-theme-customization/inspiro-icons";
import {
  KadenceBenefitIcon,
  KadenceFeatureIcon,
} from "@/components/sections/kadence-theme-customization/kadence-icons";
import {
  KubioBenefitIcon,
  KubioFeatureIcon,
} from "@/components/sections/kubio-theme-customization/kubio-icons";
import {
  NeveBenefitIcon,
  NeveFeatureIcon,
} from "@/components/sections/neve-theme-customization/neve-icons";
import {
  NewsbloggerBenefitIcon,
  NewsbloggerFeatureIcon,
} from "@/components/sections/newsblogger-theme-customization/newsblogger-icons";
import {
  OceanwpBenefitIcon,
  OceanwpFeatureIcon,
} from "@/components/sections/oceanwp-theme-customization/oceanwp-icons";
import {
  PopularfxBenefitIcon,
  PopularfxFeatureIcon,
} from "@/components/sections/popularfx-theme-customization/popularfx-icons";
import {
  RoyalElementorKitBenefitIcon,
  RoyalElementorKitFeatureIcon,
} from "@/components/sections/royal-elementor-kit-theme-customization/royal-elementor-kit-icons";
import {
  YithWonderBenefitIcon,
  YithWonderFeatureIcon,
} from "@/components/sections/yith-wonder-theme-customization/yith-wonder-icons";
import { ThemeServiceIcon } from "@/components/ui/theme-service-icons";

export function resolveThemeIconDirect(
  slug: string,
  kind: "feature" | "benefit" | "service",
  name: string,
): ReactNode | null {
  if (kind === "service") {
    return <ThemeServiceIcon name={name} />;
  }

  const clean = slug.replace(/-theme-customization$/, "");

  switch (clean) {
    case "astra":
      return kind === "feature" ? (
        <AstraFeatureIcon name={name as Parameters<typeof AstraFeatureIcon>[0]["name"]} />
      ) : (
        <AstraBenefitIcon name={name as Parameters<typeof AstraBenefitIcon>[0]["name"]} />
      );
    case "blocksy":
      return kind === "feature" ? (
        <BlocksyFeatureIcon name={name as Parameters<typeof BlocksyFeatureIcon>[0]["name"]} />
      ) : (
        <BlocksyBenefitIcon name={name as Parameters<typeof BlocksyBenefitIcon>[0]["name"]} />
      );
    case "bloghash":
      return kind === "feature" ? (
        <BloghashFeatureIcon name={name as Parameters<typeof BloghashFeatureIcon>[0]["name"]} />
      ) : (
        <BloghashBenefitIcon name={name as Parameters<typeof BloghashBenefitIcon>[0]["name"]} />
      );
    case "extendable":
      return kind === "feature" ? (
        <ExtendableFeatureIcon name={name as Parameters<typeof ExtendableFeatureIcon>[0]["name"]} />
      ) : (
        <ExtendableBenefitIcon name={name as Parameters<typeof ExtendableBenefitIcon>[0]["name"]} />
      );
    case "generatepress":
      return kind === "feature" ? (
        <GeneratepressFeatureIcon name={name as Parameters<typeof GeneratepressFeatureIcon>[0]["name"]} />
      ) : (
        <GeneratepressBenefitIcon name={name as Parameters<typeof GeneratepressBenefitIcon>[0]["name"]} />
      );
    case "go":
      return kind === "feature" ? (
        <GoFeatureIcon name={name as Parameters<typeof GoFeatureIcon>[0]["name"]} />
      ) : (
        <GoBenefitIcon name={name as Parameters<typeof GoBenefitIcon>[0]["name"]} />
      );
    case "hello-biz":
      return kind === "feature" ? (
        <HelloBizFeatureIcon name={name as Parameters<typeof HelloBizFeatureIcon>[0]["name"]} />
      ) : (
        <HelloBizBenefitIcon name={name as Parameters<typeof HelloBizBenefitIcon>[0]["name"]} />
      );
    case "hello-elementor":
      return kind === "feature" ? (
        <HelloElementorFeatureIcon name={name as Parameters<typeof HelloElementorFeatureIcon>[0]["name"]} />
      ) : (
        <HelloElementorBenefitIcon name={name as Parameters<typeof HelloElementorBenefitIcon>[0]["name"]} />
      );
    case "inspiro":
      return kind === "feature" ? (
        <InspiroFeatureIcon name={name as Parameters<typeof InspiroFeatureIcon>[0]["name"]} />
      ) : (
        <InspiroBenefitIcon name={name as Parameters<typeof InspiroBenefitIcon>[0]["name"]} />
      );
    case "kadence":
      return kind === "feature" ? (
        <KadenceFeatureIcon name={name as Parameters<typeof KadenceFeatureIcon>[0]["name"]} />
      ) : (
        <KadenceBenefitIcon name={name as Parameters<typeof KadenceBenefitIcon>[0]["name"]} />
      );
    case "kubio":
      return kind === "feature" ? (
        <KubioFeatureIcon name={name as Parameters<typeof KubioFeatureIcon>[0]["name"]} />
      ) : (
        <KubioBenefitIcon name={name as Parameters<typeof KubioBenefitIcon>[0]["name"]} />
      );
    case "neve":
      return kind === "feature" ? (
        <NeveFeatureIcon name={name as Parameters<typeof NeveFeatureIcon>[0]["name"]} />
      ) : (
        <NeveBenefitIcon name={name as Parameters<typeof NeveBenefitIcon>[0]["name"]} />
      );
    case "newsblogger":
      return kind === "feature" ? (
        <NewsbloggerFeatureIcon name={name as Parameters<typeof NewsbloggerFeatureIcon>[0]["name"]} />
      ) : (
        <NewsbloggerBenefitIcon name={name as Parameters<typeof NewsbloggerBenefitIcon>[0]["name"]} />
      );
    case "oceanwp":
      return kind === "feature" ? (
        <OceanwpFeatureIcon name={name as Parameters<typeof OceanwpFeatureIcon>[0]["name"]} />
      ) : (
        <OceanwpBenefitIcon name={name as Parameters<typeof OceanwpBenefitIcon>[0]["name"]} />
      );
    case "popularfx":
      return kind === "feature" ? (
        <PopularfxFeatureIcon name={name as Parameters<typeof PopularfxFeatureIcon>[0]["name"]} />
      ) : (
        <PopularfxBenefitIcon name={name as Parameters<typeof PopularfxBenefitIcon>[0]["name"]} />
      );
    case "royal-elementor-kit":
      return kind === "feature" ? (
        <RoyalElementorKitFeatureIcon name={name as Parameters<typeof RoyalElementorKitFeatureIcon>[0]["name"]} />
      ) : (
        <RoyalElementorKitBenefitIcon name={name as Parameters<typeof RoyalElementorKitBenefitIcon>[0]["name"]} />
      );
    case "yith-wonder":
      return kind === "feature" ? (
        <YithWonderFeatureIcon name={name as Parameters<typeof YithWonderFeatureIcon>[0]["name"]} />
      ) : (
        <YithWonderBenefitIcon name={name as Parameters<typeof YithWonderBenefitIcon>[0]["name"]} />
      );
    default:
      return null;
  }
}

export function resolveThemeIcon(
  iconName?: string | null,
  themeSlug?: string | null,
  kind?: "feature" | "benefit" | "service" | null,
): ReactNode | null {
  if (!iconName) return null;

  if (iconName.startsWith("theme:")) {
    const parts = iconName.split(":");
    if (parts.length >= 4) {
      const slug = parts[1];
      const k = parts[2] as "feature" | "benefit" | "service";
      const name = parts[3];
      return resolveThemeIconDirect(slug, k, name);
    }
  }

  if (themeSlug && kind) {
    const cleanSlug = themeSlug.replace(/-theme-customization$/, "");
    return resolveThemeIconDirect(cleanSlug, kind, iconName);
  }

  if (kind === "service") {
    return <ThemeServiceIcon name={iconName} />;
  }

  return null;
}
