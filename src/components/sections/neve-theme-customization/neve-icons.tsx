import type { ReactNode } from "react";
import {
  AstraBenefitIcon,
  type AstraBenefitIconName,
  AstraFeatureIcon,
  AstraServiceIcon,
  type AstraServiceIconName,
} from "@/components/sections/astra-theme-customization/astra-icons";

export { AstraBenefitIcon as NeveBenefitIcon, AstraServiceIcon as NeveServiceIcon };
export type { AstraBenefitIconName as NeveBenefitIconName, AstraServiceIconName as NeveServiceIconName };

export type NeveFeatureIconName =
  | "lightning"
  | "mobileOptimized"
  | "customizableHeaderFooter"
  | "woocommerce"
  | "pageBuilder"
  | "seo";

export function NeveFeatureIcon({
  name,
}: {
  name: NeveFeatureIconName;
}): ReactNode {
  if (name === "lightning") {
    return <AstraFeatureIcon name="lightning" />;
  }

  if (name === "mobileOptimized") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V20C12 20.2652 11.8946 20.5196 11.7071 20.7071C11.5196 20.8946 11.2652 21 11 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V11C21 11.2652 20.8946 11.5196 20.7071 11.7071C20.5196 11.8946 20.2652 12 20 12H3" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 19H22" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 22V16" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (name === "customizableHeaderFooter") {
    return <AstraFeatureIcon name="templates" />;
  }

  if (name === "woocommerce") {
    return <AstraFeatureIcon name="woocommerce" />;
  }

  if (name === "pageBuilder") {
    return <AstraFeatureIcon name="customizable" />;
  }

  if (name === "seo") {
    return <AstraFeatureIcon name="seo" />;
  }

  return null;
}
