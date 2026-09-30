import type { ReactNode } from "react";

export {
  AstraBenefitIcon as KadenceBenefitIcon,
  type AstraBenefitIconName as KadenceBenefitIconName,
  AstraServiceIcon as KadenceServiceIcon,
  type AstraServiceIconName as KadenceServiceIconName,
} from "@/components/sections/astra-theme-customization/astra-icons";

export type KadenceFeatureIconName =
  | "lightning"
  | "seo"
  | "responsive"
  | "builder"
  | "woocommerce"
  | "templates";

export function KadenceFeatureIcon({
  name,
}: {
  name: KadenceFeatureIconName;
}): ReactNode {
  if (name === "lightning") {
    return (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.8031 16.7992H29.4031V4.19922L15.4033 25.1992H23.8033V37.7992L37.8031 16.7992ZM20.6339 22.3991L26.603 13.4468V19.5994H32.5708L26.603 28.5512V22.3991H20.6339ZM4.20312 22.3991H12.6031V25.1992H4.20312V22.3991ZM7.00326 16.7992H16.8031V19.5994H7.00326V16.7992ZM12.6031 11.1994H19.6033V13.9995H12.6031V11.1994Z" fill="#AD5151"/>
<path d="M7 28H20.9999V30.7997H7V28Z" fill="#AD5151"/>
</svg>
    );
  }

  if (name === "seo") {
    return (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5981 30.869L10.1872 37.2959C8.86401 38.8675 6.47939 38.9696 5.02679 37.5168C3.57419 36.064 3.67628 33.679 5.24767 32.3557L11.6837 26.9355M6.9142 31.4788L11.1592 35.7244" stroke="#AD5151" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.8486 33.3885C31.963 33.3885 38.541 26.8097 38.541 18.6943C38.541 10.5788 31.963 4 23.8486 4C15.7342 4 9.15625 10.5788 9.15625 18.6943C9.15625 26.8097 15.7342 33.3885 23.8486 33.3885Z" stroke="#AD5151" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.1992 15.383H21.3285V22.197H24.1992M23.9876 18.7899H21.3285M17.5112 16.0585C17.5112 16.0585 16.2774 15.0212 14.8225 15.4596C13.4865 15.8621 13.2997 17.4027 14.2662 18.0329C14.2662 18.0329 15.2147 18.4561 16.2665 18.8441C18.7987 19.7783 17.708 22.2283 15.6695 22.2283C14.6487 22.2283 13.792 21.7812 13.2734 21.2089" stroke="#AD5151" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M31.0083 22.2284C32.907 22.2284 34.4462 20.6889 34.4462 18.79C34.4462 16.891 32.907 15.3516 31.0083 15.3516C29.1095 15.3516 27.5703 16.891 27.5703 18.79C27.5703 20.6889 29.1095 22.2284 31.0083 22.2284Z" stroke="#AD5151" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    );
  }

  if (name === "responsive") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 8.8035H9C10.2405 8.8035 11.25 7.794 11.25 6.5535V3.75C11.25 2.5095 10.2405 1.5 9 1.5H3.75C2.5095 1.5 1.5 2.5095 1.5 3.75V6.5535C1.5 7.794 2.5095 8.8035 3.75 8.8035ZM3 3.75C3 3.33675 3.336 3 3.75 3H9C9.414 3 9.75 3.33675 9.75 3.75V6.5535C9.75 6.96675 9.414 7.3035 9 7.3035H3.75C3.336 7.3035 3 6.96675 3 6.5535V3.75ZM11.25 20.25V12.2775C11.25 11.037 10.2405 10.0275 9 10.0275H3.75C2.5095 10.0275 1.5 11.037 1.5 12.2775V20.25C1.5 21.4905 2.5095 22.5 3.75 22.5H9C10.2405 22.5 11.25 21.4905 11.25 20.25ZM3 20.25V12.2775C3 11.8643 3.336 11.5275 3.75 11.5275H9C9.414 11.5275 9.75 11.8643 9.75 12.2775V20.25C9.75 20.6632 9.414 21 9 21H3.75C3.336 21 3 20.6632 3 20.25ZM20.25 15.1965H15C13.7595 15.1965 12.75 16.206 12.75 17.4465V20.25C12.75 21.4905 13.7595 22.5 15 22.5H20.25C21.4905 22.5 22.5 21.4905 22.5 20.25V17.4465C22.5 16.206 21.4905 15.1965 20.25 15.1965ZM21 20.25C21 20.6632 20.664 21 20.25 21H15C14.586 21 14.25 20.6632 14.25 20.25V17.4465C14.25 17.0332 14.586 16.6965 15 16.6965H20.25C20.664 16.6965 21 17.0332 21 17.4465V20.25ZM20.25 1.5H15C13.7595 1.5 12.75 2.5095 12.75 3.75V11.7225C12.75 12.963 13.7595 13.9725 15 13.9725H20.25C21.4905 13.9725 22.5 12.963 22.5 11.7225V3.75C22.5 2.5095 21.4905 1.5 20.25 1.5ZM21 11.7225C21 12.1358 20.664 12.4725 20.25 12.4725H15C14.586 12.4725 14.25 12.1358 14.25 11.7225V3.75C14.25 3.33675 14.586 3 15 3H20.25C20.664 3 21 3.33675 21 3.75V11.7225Z" fill="#AD5151"></path>
</svg>
    );
  }

  if (name === "builder") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 22V7C10 6.73478 9.89464 6.48043 9.70711 6.29289C9.51957 6.10536 9.26522 6 9 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H16C16.5304 22 17.0391 21.7893 17.4142 21.4142C17.7893 21.0391 18 20.5304 18 20V15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14H2" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M21 2H15C14.4477 2 14 2.44772 14 3V9C14 9.55228 14.4477 10 15 10H21C21.5523 10 22 9.55228 22 9V3C22 2.44772 21.5523 2 21 2Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
    );
  }

  if (name === "woocommerce") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.05078 2.0498L3.14978 2.0218C3.38721 2.01582 3.61902 2.09453 3.80372 2.24386C3.98841 2.39319 4.11392 2.60338 4.15778 2.8368L6.84778 17.1838C6.89071 17.4131 7.01247 17.6202 7.19199 17.7692C7.3715 17.9183 7.59747 17.9998 7.83078 17.9998H18.0008" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5625 5H20.9975C21.1463 4.9997 21.2933 5.03261 21.4278 5.09633C21.5622 5.16005 21.6808 5.25298 21.7748 5.36834C21.8688 5.4837 21.9358 5.61858 21.9711 5.76315C22.0063 5.90772 22.0089 6.05833 21.9785 6.204L20.9525 12.43C20.8532 12.8815 20.6006 13.2846 20.2376 13.5708C19.8746 13.8571 19.4237 14.0087 18.9615 14H6.2495" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    );
  }

  if (name === "templates") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.75H21V8.25H3V3.75Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M3 11.25H21V20.25H3V11.25Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M6 6H11" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M6 14H10M6 17H9" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M16.5008 17.6998C17.7158 17.6998 18.7008 16.7148 18.7008 15.4998C18.7008 14.2848 17.7158 13.2998 16.5008 13.2998C15.2858 13.2998 14.3008 14.2848 14.3008 15.4998C14.3008 16.7148 15.2858 17.6998 16.5008 17.6998Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M16.5 14.625V15.6998L17.25 16.125" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
    );
  }

  return null;
}
