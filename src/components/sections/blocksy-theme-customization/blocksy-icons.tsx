import type { ReactNode } from "react";
import {
  AstraBenefitIcon,
  type AstraBenefitIconName,
  AstraFeatureIcon,
  AstraServiceIcon,
  type AstraServiceIconName,
} from "@/components/sections/astra-theme-customization/astra-icons";

export { AstraBenefitIcon as BlocksyBenefitIcon, AstraServiceIcon as BlocksyServiceIcon };
export type { AstraBenefitIconName as BlocksyBenefitIconName, AstraServiceIconName as BlocksyServiceIconName };

export type BlocksyFeatureIconName =
  | "lightning"
  | "customizable"
  | "pageBuilder"
  | "woocommerce"
  | "headerFooterBuilder"
  | "globalColorPalette"
  | "seo"
  | "mobileFriendly";

export function BlocksyFeatureIcon({
  name,
}: {
  name: BlocksyFeatureIconName;
}): ReactNode {
  if (name === "lightning") {
    return <AstraFeatureIcon name="lightning" />;
  }

  if (name === "customizable" || name === "pageBuilder") {
    return <AstraFeatureIcon name="customizable" />;
  }

  if (name === "woocommerce") {
    return <AstraFeatureIcon name="woocommerce" />;
  }

  if (name === "headerFooterBuilder") {
    return <AstraFeatureIcon name="templates" />;
  }

  if (name === "globalColorPalette") {
    return (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 5.5C12.4 5.5 5.5 12.2 5.5 20.5C5.5 28.8 12.2 35.5 20.5 35.5H23C25 35.5 26.5 34 26.5 32.2C26.5 30.6 25.4 29.4 23.8 29.1C22.3 28.8 21.5 27.8 21.5 26.5C21.5 24.5 23.1 23 25.2 23H28.5C33.2 23 36.5 19.5 36.5 15.3C36.5 9.9 30.4 5.5 21 5.5Z" stroke="#AD5151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 17C15.1046 17 16 16.1046 16 15C16 13.8954 15.1046 13 14 13C12.8954 13 12 13.8954 12 15C12 16.1046 12.8954 17 14 17Z" fill="#AD5151"/>
        <path d="M20 13.5C21.1046 13.5 22 12.6046 22 11.5C22 10.3954 21.1046 9.5 20 9.5C18.8954 9.5 18 10.3954 18 11.5C18 12.6046 18.8954 13.5 20 13.5Z" fill="#AD5151"/>
        <path d="M26.5 14.8008C27.6046 14.8008 28.5 13.9054 28.5 12.8008C28.5 11.6962 27.6046 10.8008 26.5 10.8008C25.3954 10.8008 24.5 11.6962 24.5 12.8008C24.5 13.9054 25.3954 14.8008 26.5 14.8008Z" fill="#AD5151"/>
        <path d="M11.5 24C12.6046 24 13.5 23.1046 13.5 22C13.5 20.8954 12.6046 20 11.5 20C10.3954 20 9.5 20.8954 9.5 22C9.5 23.1046 10.3954 24 11.5 24Z" fill="#AD5151"/>
        <path d="M31.5 24L32.85 27.15L36 28.5L32.85 29.85L31.5 33L30.15 29.85L27 28.5L30.15 27.15L31.5 24Z" fill="#AD5151"/>
      </svg>
    );
  }

  if (name === "seo") {
    return <AstraFeatureIcon name="seo" />;
  }

  if (name === "mobileFriendly") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V20C12 20.2652 11.8946 20.5196 11.7071 20.7071C11.5196 20.8946 11.2652 21 11 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V11C21 11.2652 20.8946 11.5196 20.7071 11.7071C20.5196 11.8946 20.2652 12 20 12H3" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 19H22" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 22V16" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  return null;
}
