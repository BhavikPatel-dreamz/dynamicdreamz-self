import type { ReactNode } from "react";
import {
  AstraBenefitIcon,
  type AstraBenefitIconName,
  AstraFeatureIcon,
  AstraServiceIcon,
  type AstraServiceIconName,
} from "@/lib/icons/astra-icons";
import { BlocksyFeatureIcon } from "@/lib/icons/blocksy-icons";

export { AstraBenefitIcon as KubioBenefitIcon, AstraServiceIcon as KubioServiceIcon };
export type { AstraBenefitIconName as KubioBenefitIconName, AstraServiceIconName as KubioServiceIconName };

export type KubioFeatureIconName =
  | "dragAndDrop"
  | "responsive"
  | "woocommerce"
  | "seo"
  | "templates"
  | "fontsAndColors"
  | "lightning";

export function KubioFeatureIcon({
  name,
}: {
  name: KubioFeatureIconName;
}): ReactNode {
  if (name === "dragAndDrop") {
    return <AstraFeatureIcon name="customizable" />;
  }

  if (name === "responsive") {
    return <BlocksyFeatureIcon name="mobileFriendly" />;
  }

  if (name === "woocommerce") {
    return <AstraFeatureIcon name="woocommerce" />;
  }

  if (name === "seo") {
    return <AstraFeatureIcon name="seo" />;
  }

  if (name === "templates") {
    return <AstraFeatureIcon name="templates" />;
  }

  if (name === "fontsAndColors") {
    return <BlocksyFeatureIcon name="globalColorPalette" />;
  }

  if (name === "lightning") {
    return <AstraFeatureIcon name="lightning" />;
  }

  return null;
}
