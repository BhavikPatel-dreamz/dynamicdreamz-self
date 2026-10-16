import type { ReactElement } from "react";

export type InspiroFeatureIconName =
  | "full-screen-video-backgrounds"
  | "lightweight-and-fast-performance"
  | "multiple-gallery-layouts"
  | "gutenberg-and-elementor-compatibility"
  | "woocommerce-ready"
  | "mobile-and-seo-friendly"
  | "custom-widgets-and-sidebars"
  | "one-click-demo-import";

import {
  ThemeServiceIcon,
  type ThemeServiceIconName,
} from "@/lib/icons/theme-service-icons";

export type InspiroServiceIconName = ThemeServiceIconName;

export type InspiroBenefitIconName =
  | "fully-customizable-store"
  | "unique-brand-identity"
  | "improved-user-experience"
  | "multiple-third-party-plugins"
  | "higher-conversion-rates"
  | "safe-and-secure-payments"
  | "minimal-maintenance-cost";

export function InspiroFeatureIcon({
  name,
  className = "size-7 text-[#AD5151]",
}: {
  name: InspiroFeatureIconName;
  className?: string;
}): ReactElement | null {
  switch (name) {
    case "full-screen-video-backgrounds":
      return (
        <svg className={className} aria-hidden="true" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.2742 7H7.72581C5.6681 7 4 8.6681 4 10.7258V30.9516C4 33.0093 5.6681 34.6774 7.72581 34.6774H33.2742C35.3319 34.6774 37 33.0093 37 30.9516V10.7258C37 8.6681 35.3319 7 33.2742 7Z" stroke="#AD5151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 13L26.7742 20.4516L14 27.9032V13Z" fill="#AD5151"/>
<path d="M26.106 9.90039V11.4775H27.7231V9.90039H28.8491V14.1016H27.7231V12.4609H26.106V14.1016H24.98V9.90039H26.106ZM31.5142 9.90039C31.9616 9.90039 32.3608 9.98624 32.7085 10.1621H32.7075C33.0545 10.3336 33.3278 10.5761 33.5249 10.8896C33.7232 11.2053 33.8208 11.5775 33.8208 12.001C33.8208 12.4208 33.7237 12.7924 33.5259 13.1113H33.5249C33.328 13.4248 33.0552 13.6694 32.7085 13.8447L32.7075 13.8457C32.36 14.0174 31.9613 14.1016 31.5142 14.1016H29.5962V9.90039H31.5142ZM30.7222 13.1416H31.4683C31.7223 13.1416 31.9364 13.0941 32.1138 13.0039L32.2427 12.9258C32.3625 12.8411 32.4583 12.7353 32.5308 12.6084L32.5317 12.6074C32.6317 12.4385 32.6831 12.2374 32.6831 12.001C32.6831 11.7604 32.631 11.56 32.5317 11.3955L32.5308 11.3926C32.4342 11.2237 32.2966 11.0944 32.1157 11.0039L32.1138 11.0029C31.9366 10.9091 31.7222 10.8604 31.4683 10.8604H30.7222V13.1416Z" fill="#AD5151" stroke="#AD5151" strokeWidth="0.2"/>
</svg>
      );
    case "lightweight-and-fast-performance":
      return (
        <svg className={className} aria-hidden="true" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.34539 21C5.72809 17.5351 7.25388 14.2963 9.68189 11.795L12.3559 14.469L13.594 13.2309L10.9681 10.6059C13.5577 8.46145 16.7677 7.20567 20.125 7.02363V11.375H21.875V7.02363C25.2324 7.20505 28.4426 8.46091 31.0319 10.6059L28.5119 13.125L29.75 14.3622L32.3181 11.7941C34.7463 14.2957 36.2721 17.5348 36.6546 21H32.9735V22.75H36.75C36.7539 26.3997 35.4832 29.9361 33.1573 32.7486L30.1648 29.7561L28.9266 30.9934L31.9699 34.0357L31.9585 34.0462L33.1756 35.3036C34.862 33.6751 36.2026 31.7232 37.1174 29.5648C38.0322 27.4063 38.5025 25.0856 38.5 22.7412C38.5 13.0812 30.6644 5.25 21 5.25C11.3356 5.25 3.50001 13.0804 3.50001 22.7412C3.49446 27.3522 5.31616 31.7774 8.56626 35.0481L9.80876 33.817L9.79214 33.7995L12.4224 31.1701L11.1843 29.9329L8.63101 32.4861C6.43792 29.7151 5.24638 26.2839 5.25001 22.75H8.79639V21H5.34539Z" fill="#AD5151"/>
<path fillRule="evenodd" clipRule="evenodd" d="M31.0468 25.0448L18.8283 26.1727C18.4898 26.2364 18.1867 26.4227 17.9769 26.6959L16.5437 28.8222C16.3835 29.8835 16.4973 30.3062 17.1247 30.9922L19.4294 32.1157C19.7479 32.2469 20.1032 32.2557 20.4278 32.1437L31.5543 27.0057C33.2089 26.4308 32.7662 24.7158 31.045 25.0457M19.964 30.4304L27.0113 27.1754L19.2833 27.8885L18.2315 29.4478C18.2272 29.5187 18.2272 29.5615 18.2289 29.5834L19.964 30.4304Z" fill="#AD5151"/>
</svg>
      );
    case "multiple-gallery-layouts":
      return (
        <svg className={className} aria-hidden="true" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 28H8C6.34315 28 5 26.6569 5 25V11C5 9.34315 6.34315 8 8 8H25C26.6569 8 28 9.34315 28 11V13.5" stroke="#AD5151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33 14H16C14.3431 14 13 15.3431 13 17V31C13 32.6569 14.3431 34 16 34H33C34.6569 34 36 32.6569 36 31V17C36 15.3431 34.6569 14 33 14Z" stroke="#AD5151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 28L19.5 22L23.5 26L27.5 21L35.5 27.5" stroke="#AD5151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5002 19.7992C18.4943 19.7992 19.3002 18.9933 19.3002 17.9992C19.3002 17.0051 18.4943 16.1992 17.5002 16.1992C16.5061 16.1992 15.7002 17.0051 15.7002 17.9992C15.7002 18.9933 16.5061 19.7992 17.5002 19.7992Z" fill="#AD5151"/>
</svg>
      );
    case "gutenberg-and-elementor-compatibility":
      return (
        <svg className={className} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.18299 17.2118L2.37065 17.3996L2.37174 17.4007L3.06908 18.0981L3.25705 18.2859C3.37425 18.403 3.5332 18.4689 3.69892 18.4689C3.86465 18.4689 4.02359 18.403 4.1408 18.2859L8.92891 13.4978L10.2227 14.8016C10.3069 14.8865 10.4137 14.9455 10.5305 14.9715C10.6472 14.9975 10.7689 14.9894 10.8813 14.9483C10.9936 14.9072 11.0917 14.8347 11.1641 14.7394C11.2364 14.6442 11.2799 14.5302 11.2894 14.411L11.6853 9.45622C11.6922 9.37023 11.6812 9.28373 11.653 9.20219C11.6248 9.12065 11.5801 9.04583 11.5215 8.98244C11.463 8.91904 11.392 8.86845 11.313 8.83385C11.234 8.79924 11.1486 8.78138 11.0623 8.78137C11.0457 8.78137 11.029 8.78205 11.0123 8.7834L6.05845 9.18028C5.93928 9.18985 5.82536 9.23339 5.73019 9.30574C5.63502 9.3781 5.5626 9.47623 5.52152 9.5885C5.48043 9.70077 5.47241 9.82246 5.4984 9.93915C5.52438 10.0558 5.58329 10.1626 5.66814 10.2469L6.97095 11.5398L2.18299 16.328C2.06582 16.4452 2 16.6042 2 16.7699C2 16.9356 2.06582 17.0946 2.18299 17.2118ZM7.85641 11.5383L6.10861 9.80326L11.0623 9.40638L10.6664 14.3613L8.93047 12.6122L3.69908 17.844L3.51127 17.6562L2.81377 16.9587L2.62486 16.7699L7.85641 11.5383Z" fill="#AD5151" stroke="#AD5151" strokeWidth="0.5"/>
<path d="M3.69882 19.094C3.60014 19.0936 3.50186 19.0816 3.40601 19.0582V20.5002C3.40601 20.5831 3.43893 20.6626 3.49753 20.7212C3.55614 20.7798 3.63563 20.8127 3.7185 20.8127H20.281C20.3638 20.8127 20.4433 20.7798 20.5019 20.7212C20.5605 20.6626 20.5935 20.5831 20.5935 20.5002V9.59181L19.9685 10.2168V20.1877H4.031V19.0483C3.92283 19.0784 3.81109 19.0937 3.69882 19.094ZM20.3006 4.71877C20.3993 4.7191 20.4976 4.73111 20.5935 4.75455V3.3125C20.5935 3.22962 20.5605 3.15014 20.5019 3.09153C20.4433 3.03292 20.3638 3 20.281 3H3.7185C3.63563 3 3.55614 3.03292 3.49753 3.09153C3.43893 3.15014 3.40601 3.22962 3.40601 3.3125V14.2208L4.031 13.5958V3.62501H19.9685V4.7644C20.0766 4.73434 20.1884 4.71899 20.3006 4.71877Z" fill="#AD5151" stroke="#AD5151" strokeWidth="0.5"/>
<path d="M21.6292 6.41297L20.9319 5.71562L20.743 5.52687C20.6258 5.4097 20.4668 5.34387 20.3011 5.34387C20.1354 5.34387 19.9764 5.4097 19.8592 5.52687L15.0711 10.3149L13.7782 9.01207C13.6939 8.92722 13.5872 8.86831 13.4705 8.84232C13.3538 8.81634 13.2321 8.82436 13.1198 8.86545C13.0075 8.90653 12.9094 8.97895 12.8371 9.07412C12.7647 9.16929 12.7212 9.28322 12.7116 9.40239L12.3147 14.3565C12.3079 14.4425 12.3189 14.529 12.347 14.6105C12.3752 14.6921 12.42 14.7669 12.4785 14.8303C12.537 14.8937 12.608 14.9443 12.6871 14.9789C12.7661 15.0135 12.8514 15.0314 12.9377 15.0314C12.9543 15.0314 12.9709 15.0307 12.9875 15.0293L17.9422 14.6334C18.0614 14.6239 18.1754 14.5804 18.2706 14.508C18.3658 14.4357 18.4383 14.3376 18.4794 14.2253C18.5205 14.113 18.5286 13.9913 18.5026 13.8746C18.4766 13.7579 18.4177 13.6511 18.3328 13.5668L17.0291 12.2729L21.8171 7.4847C21.9342 7.3675 22 7.20855 22 7.04282C22 6.87709 21.9342 6.71815 21.8171 6.60094L21.6292 6.41297ZM16.1435 12.2746L17.8925 14.0104L12.9377 14.4064L13.3346 9.45239L15.0694 11.2005L20.3011 5.96875L20.4899 6.1575L21.1874 6.85501L21.3752 7.04282L16.1435 12.2746Z" fill="#AD5151" stroke="#AD5151" strokeWidth="0.5"/>
</svg>
      );
    case "woocommerce-ready":
      return (
        <svg className={className} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.05078 2.0498L3.14978 2.0218C3.38721 2.01582 3.61902 2.09453 3.80372 2.24386C3.98841 2.39319 4.11392 2.60338 4.15778 2.8368L6.84778 17.1838C6.89071 17.4131 7.01247 17.6202 7.19199 17.7692C7.3715 17.9183 7.59747 17.9998 7.83078 17.9998H18.0008" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M4.5625 5H20.9975C21.1463 4.9997 21.2933 5.03261 21.4278 5.09633C21.5622 5.16005 21.6808 5.25298 21.7748 5.36834C21.8688 5.4837 21.9358 5.61858 21.9711 5.76315C22.0063 5.90772 22.0089 6.05833 21.9785 6.204L20.9525 12.43C20.8532 12.8815 20.6006 13.2846 20.2376 13.5708C19.8746 13.8571 19.4237 14.0087 18.9615 14H6.2495" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
      );
    case "mobile-and-seo-friendly":
      return (
        <svg className={className} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3V20C12 20.2652 11.8946 20.5196 11.7071 20.7071C11.5196 20.8946 11.2652 21 11 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V11C21 11.2652 20.8946 11.5196 20.7071 11.7071C20.5196 11.8946 20.2652 12 20 12H3" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V16" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      );
    case "custom-widgets-and-sidebars":
      return (
        <svg className={className} aria-hidden="true" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33 6H9C7.067 6 5.5 7.567 5.5 9.5V32.5C5.5 34.433 7.067 36 9 36H33C34.933 36 36.5 34.433 36.5 32.5V9.5C36.5 7.567 34.933 6 33 6Z" stroke="#AD5151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 14H36.5" stroke="#AD5151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 14V36" stroke="#AD5151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10H22" stroke="#AD5151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      );
    case "one-click-demo-import":
      return (
        <svg className={className} aria-hidden="true" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.5 9H10.5C8.567 9 7 10.567 7 12.5V29.5C7 31.433 8.567 33 10.5 33H31.5C33.433 33 35 31.433 35 29.5V12.5C35 10.567 33.433 9 31.5 9Z" stroke="#AD5151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 16L28 21.7692L22.1667 24.0769L19.8333 31L14 16Z" fill="#AD5151"/>
<path d="M27.9998 11L29.1998 14L32.1998 15.2L29.1998 16.4L27.9998 19.4L26.7998 16.4L23.7998 15.2L26.7998 14L27.9998 11Z" fill="#AD5151"/>
</svg>
      );
    default:
      return null;
  }
}

export const InspiroServiceIcon = ThemeServiceIcon;

export function InspiroBenefitIcon({
  name,
  className = "size-7 text-[#AD5151]",
}: {
  name: InspiroBenefitIconName;
  className?: string;
}): ReactElement | null {
  switch (name) {
    case "fully-customizable-store":
      return (
        <svg className={className} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 22V7C10 6.73478 9.89464 6.48043 9.70711 6.29289C9.51957 6.10536 9.26522 6 9 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H16C16.5304 22 17.0391 21.7893 17.4142 21.4142C17.7893 21.0391 18 20.5304 18 20V15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14H2" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 2H15C14.4477 2 14 2.44772 14 3V9C14 9.55228 14.4477 10 15 10H21C21.5523 10 22 9.55228 22 9V3C22 2.44772 21.5523 2 21 2Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      );
    case "unique-brand-identity":
      return (
        <svg className={className} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_511_2756)">
<path d="M17.8306 12.6756C17.4272 12.276 17.4272 11.6399 17.8306 11.2394L18.4634 10.6122C18.7968 10.2814 18.8623 9.77732 18.6222 9.37865L17.6579 7.77191C17.4183 7.37282 16.9318 7.17501 16.467 7.28751L15.5849 7.50046C15.0231 7.63616 14.4501 7.3183 14.2918 6.78215L14.0434 5.94149C13.9116 5.49815 13.4904 5.19238 13.0118 5.19238H11.0818C10.6031 5.19238 10.1811 5.4982 10.0497 5.94149L9.80174 6.78215C9.64298 7.3183 9.07049 7.63616 8.50823 7.50046L7.62608 7.28751C7.16179 7.17501 6.67476 7.37277 6.43565 7.77191L5.47133 9.37865C5.23082 9.77732 5.2963 10.2814 5.62968 10.6122L6.26296 11.2394C6.66594 11.6399 6.66594 12.276 6.26296 12.6756L5.62968 13.3037C5.2963 13.6345 5.23087 14.1386 5.47133 14.5372L6.43565 16.144C6.67476 16.5431 7.16179 16.7409 7.62608 16.6283L8.50823 16.4149C9.07049 16.2796 9.64293 16.5975 9.80174 17.1337L10.0497 17.9744C10.1811 18.4176 10.6031 18.7235 11.0818 18.7235H13.0118C13.4905 18.7235 13.9116 18.4176 14.0434 17.9744L14.2918 17.1337C14.4501 16.5975 15.0231 16.2796 15.5849 16.4149L16.467 16.6283C16.9318 16.7408 17.4183 16.5431 17.6579 16.144L18.6222 14.5372C18.8623 14.1386 18.7968 13.6345 18.4634 13.3037L17.8306 12.6756Z" stroke="#AD5151" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M14.4869 10.01C13.9111 9.29345 13.032 8.81763 12.0466 8.81763C10.3122 8.81763 8.90625 10.2903 8.90625 11.958C8.90625 13.6257 10.3122 15.0983 12.0466 15.0983C13.0423 15.0983 13.9291 14.6124 14.5045 13.8834" stroke="#AD5151" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M10.7352 12.1033L11.5725 12.9406L13.247 11.266M13.7595 21.0746L12.7787 22.5481L14.2347 23.5077M9.36719 0.49231L10.7904 1.45076L9.76305 2.89226" stroke="#AD5151" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M1.58594 10.4722C2.24017 5.82665 5.91564 2.15114 10.5611 1.49695M13.5322 1.49695C18.1777 2.15114 21.8532 5.82665 22.5074 10.4722M10.5611 22.4184C5.91564 21.7642 2.24017 18.0887 1.58594 13.4432M22.5074 13.4432C21.8532 18.0887 18.1777 21.7642 13.5322 22.4184" stroke="#AD5151" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M2.94895 13.6894L1.47544 12.7086L0.46875 14.1646M23.5312 9.29712L22.5728 10.7203L21.0842 9.69298" stroke="#AD5151" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
</g>
<defs>
<clipPath id="clip0_511_2756">
<rect width="24" height="24" fill="white"></rect>
</clipPath>
</defs>
</svg>
      );
    case "improved-user-experience":
      return (
        <svg className={className} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10V9" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M16.4703 15C15.9076 15.629 15.2184 16.1322 14.4479 16.4767C13.6774 16.8212 12.8429 16.9993 11.9988 16.9993C11.1548 16.9993 10.3203 16.8212 9.54979 16.4767C8.77928 16.1322 8.09012 15.629 7.52734 15" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M9 10V9" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
      );
    case "multiple-third-party-plugins":
      return (
        <svg className={className} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3H4C3.44772 3 3 3.44772 3 4V15C3 15.5523 3.44772 16 4 16H9C9.55228 16 10 15.5523 10 15V4C10 3.44772 9.55228 3 9 3Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22L12 19L15 22" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 3H15C14.4477 3 14 3.44772 14 4V15C14 15.5523 14.4477 16 15 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      );
    case "higher-conversion-rates":
      return (
        <svg className={className} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M14 15H9V10" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M16 3H21V8" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M21 3L9 15" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
      );
    case "safe-and-secure-payments":
      return (
        <svg className={className} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V4C10 3.44772 9.55228 3 9 3Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
      );
    case "minimal-maintenance-cost":
      return (
        <svg className={className} aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 17H14V19C14 19.2652 14.1054 19.5196 14.2929 19.7071C14.4804 19.8946 14.7348 20 15 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V16C18.4658 15.8449 18.8891 15.5834 19.2363 15.2363C19.5834 14.8891 19.8449 14.4658 20 14H21C21.2652 14 21.5196 13.8946 21.7071 13.7071C21.8946 13.5196 22 13.2652 22 13V11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10H20C20 9.22377 19.8193 8.45821 19.4721 7.76393C19.125 7.06966 18.621 6.46574 18 6V3C17.379 3 16.7666 3.14458 16.2111 3.42229C15.6557 3.7 15.1726 4.10322 14.8 4.6L14.5 5H11C9.4087 5 7.88258 5.63214 6.75736 6.75736C5.63214 7.88258 5 9.4087 5 11V12C5 12.7762 5.18073 13.5418 5.52786 14.2361C5.875 14.9303 6.37902 15.5343 7 16V19C7 19.2652 7.10536 19.5196 7.29289 19.7071C7.48043 19.8946 7.73478 20 8 20H10C10.2652 20 10.5196 19.8946 10.7071 19.7071C10.8946 19.5196 11 19.2652 11 19V17Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M16 10H16.01" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M2 8V9C2 9.53043 2.21071 10.0391 2.58579 10.4142C2.96086 10.7893 3.46957 11 4 11H5" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
      );
    default:
      return null;
  }
}
