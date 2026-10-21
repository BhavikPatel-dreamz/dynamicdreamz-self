import type { ReactNode } from "react";
import {
  AstraBenefitIcon,
  type AstraBenefitIconName,
  AstraFeatureIcon,
  AstraServiceIcon,
  type AstraServiceIconName,
} from "@/components/sections/astra-theme-customization/astra-icons";
import { BlocksyFeatureIcon } from "@/components/sections/blocksy-theme-customization/blocksy-icons";

export { AstraBenefitIcon as ExtendableBenefitIcon, AstraServiceIcon as ExtendableServiceIcon };
export type { AstraBenefitIconName as ExtendableBenefitIconName, AstraServiceIconName as ExtendableServiceIconName };

export type ExtendableFeatureIconName =
  | "lightning"
  | "dragAndDrop"
  | "woocommerce"
  | "responsive"
  | "seo"
  | "headerFooterStyles"
  | "colorTypography";

export function ExtendableFeatureIcon({
  name,
}: {
  name: ExtendableFeatureIconName;
}): ReactNode {
  if (name === "lightning") {
    return <AstraFeatureIcon name="lightning" />;
  }

  if (name === "dragAndDrop") {
    return <AstraFeatureIcon name="customizable" />;
  }

  if (name === "woocommerce") {
    return <AstraFeatureIcon name="woocommerce" />;
  }

  if (name === "responsive") {
    return <BlocksyFeatureIcon name="mobileFriendly" />;
  }

  if (name === "seo") {
    return <AstraFeatureIcon name="seo" />;
  }

  if (name === "headerFooterStyles") {
    return <AstraFeatureIcon name="templates" />;
  }

  if (name === "colorTypography") {
    return <BlocksyFeatureIcon name="globalColorPalette" />;
  }

  return null;
}
