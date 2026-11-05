import type { ReactElement } from "react";

export type ShopifyPlusServiceIconName =
  | "more-checkout-control"
  | "advanced-b2b-requirements"
  | "multiple-storefronts"
  | "complex-integrations"
  | "high-demand-events"
  | "enterprise-operations"
  | "plus-readiness-assessment"
  | "checkout-account-extensibility"
  | "advanced-b2b-implementation"
  | "expansion-stores-markets"
  | "apps-apis-integrations"
  | "ongoing-plus-development"
  | string;

export function ShopifyPlusServiceIcon({
  name,
}: {
  name: ShopifyPlusServiceIconName;
}): ReactElement | null {
  switch (name) {
    case "more-checkout-control":
      return (
        <svg aria-hidden="true" className="size-6 text-[#AD5151]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.05078 2.0498L3.14978 2.0218C3.38721 2.01582 3.61902 2.09453 3.80372 2.24386C3.98841 2.39319 4.11392 2.60338 4.15778 2.8368L6.84778 17.1838C6.89071 17.4131 7.01247 17.6202 7.19199 17.7692C7.3715 17.9183 7.59747 17.9998 7.83078 17.9998H18.0008" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5625 5H20.9975C21.1463 4.9997 21.2933 5.03261 21.4278 5.09633C21.5622 5.16005 21.6808 5.25298 21.7748 5.36834C21.8688 5.4837 21.9358 5.61858 21.9711 5.76315C22.0063 5.90772 22.0089 6.05833 21.9785 6.204L20.9525 12.43C20.8532 12.8815 20.6006 13.2846 20.2376 13.5708C19.8746 13.8571 19.4237 14.0087 18.9615 14H6.2495" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="#AD5151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      );

    case "advanced-b2b-requirements":
      return (
        <svg aria-hidden="true" className="size-6 text-[#AD5151]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.0509 8.06786V6.03393C7.0509 4.91064 7.96154 4 9.08483 4H11.1188C12.242 4 13.1527 4.91064 13.1527 6.03393V8.06786M20.0681 7.86447H23.9325C26.1792 7.86447 28.0004 9.6857 28.0004 11.9323M16.2036 14.1697C16.2036 15.2929 15.2929 16.2036 14.1697 16.2036H6.03393C4.91064 16.2036 4 15.2929 4 14.1697V10.1018C4 8.9785 4.91064 8.06786 6.03393 8.06786H14.1697C15.2929 8.06786 16.2036 8.9785 16.2036 10.1018V14.1697ZM25.9665 28.0004H17.8307C16.7074 28.0004 15.7968 27.0897 15.7968 25.9665V21.8986C15.7968 20.7753 16.7074 19.8647 17.8307 19.8647H25.9665C27.0897 19.8647 28.0004 20.7753 28.0004 21.8986V25.9665C28.0004 27.0897 27.0897 28.0004 25.9665 28.0004Z" stroke="#AD5151" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.5668 11.565L20.4096 9.40775C19.6153 8.61345 19.6153 7.32561 20.4096 6.53131L22.5668 4.37402M4 20.0641C4 22.3107 5.82123 24.1319 8.06786 24.1319H11.8815" stroke="#AD5151" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.13281 27.7965L11.2901 25.6392C12.0844 24.8449 12.0844 23.5571 11.2901 22.7628L9.13281 20.6055M18.8521 19.8642V17.8303C18.8521 16.707 19.7627 15.7963 20.886 15.7963H22.9199C24.0432 15.7963 24.9539 16.707 24.9539 17.8303V19.8642M10.1062 8.06738V10.1013M21.903 19.8642V21.8981" stroke="#AD5151" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      );

    case "multiple-storefronts":
      return (
        <svg aria-hidden="true" className="size-6 text-[#AD5151]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="fit_2_mask0_756_1754" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
<path d="M4 4.00009H27.9999V28H4V4.00009Z" fill="white"/>
</mask>
<g mask="url(#fit_2_mask0_756_1754)">
<path d="M23.0898 27.2969H25.1851C26.3513 27.2969 27.2968 26.3514 27.2968 25.1852V6.81492C27.2968 5.64867 26.3513 4.70321 25.1851 4.70321H6.81484C5.64859 4.70321 4.70312 5.64867 4.70312 6.81492V25.1852C4.70312 26.3514 5.64859 27.2969 6.81484 27.2969H8.91014H23.0898Z" stroke="#AD5151" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.70312 10.3281H27.2968" stroke="#AD5151" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.1406 7.51562H24.4843" stroke="#AD5151" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.21874 7.51563C8.21874 7.90394 7.90393 8.21875 7.51562 8.21875C7.12731 8.21875 6.8125 7.90394 6.8125 7.51563C6.8125 7.12732 7.12731 6.81251 7.51562 6.81251C7.90393 6.81251 8.21874 7.12732 8.21874 7.51563Z" fill="#AD5151"/>
<path d="M11.0312 7.51563C11.0312 7.90394 10.7164 8.21875 10.3281 8.21875C9.93981 8.21875 9.625 7.90394 9.625 7.51563C9.625 7.12732 9.93981 6.81251 10.3281 6.81251C10.7164 6.81251 11.0312 7.12732 11.0312 7.51563Z" fill="#AD5151"/>
<path d="M22.1365 17.8058L20.9028 21.6709H12.6221L11.1484 15.5857H20.5147C21.6676 15.5857 22.4871 16.7076 22.1365 17.8058Z" stroke="#AD5151" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.0117 23.0781C15.0117 23.8548 14.3821 24.4844 13.6055 24.4844C12.8288 24.4844 12.1992 23.8548 12.1992 23.0781C12.1992 22.3015 12.8288 21.6719 13.6055 21.6719C14.3821 21.6719 15.0117 22.3015 15.0117 23.0781Z" stroke="#AD5151" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.6211 23.0781C21.6211 23.8548 20.9915 24.4844 20.2148 24.4844C19.4382 24.4844 18.8086 23.8548 18.8086 23.0781C18.8086 22.3015 19.4382 21.6719 20.2148 21.6719C20.9915 21.6719 21.6211 22.3015 21.6211 23.0781Z" stroke="#AD5151" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.6259 17.5537L10.5703 13.1409" stroke="#AD5151" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5684 13.1406H7.91016" stroke="#AD5151" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
      );

    case "complex-integrations":
      return (
        <svg aria-hidden="true" className="size-6 text-[#AD5151]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9986 16.4855C18.084 16.4855 19.7745 14.7949 19.7745 12.7095C19.7745 10.6241 18.084 8.93359 15.9986 8.93359C13.9132 8.93359 12.2227 10.6241 12.2227 12.7095C12.2227 14.7949 13.9132 16.4855 15.9986 16.4855Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22.4189V25.7633" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0011 29.0002C16.8948 29.0002 17.6193 28.2757 17.6193 27.3819C17.6193 26.4882 16.8948 25.7637 16.0011 25.7637C15.1073 25.7637 14.3828 26.4882 14.3828 27.3819C14.3828 28.2757 15.1073 29.0002 16.0011 29.0002Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.297 26.5955L20.8568 24.6843V20.1992M7.70703 26.5955L11.1472 24.6843V20.1992" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25.7081 14.3278V11.0913L23.8064 10.6159C23.6217 9.92555 23.3506 9.27215 23.0008 8.66762L24.0085 6.98814L21.72 4.6996L20.0405 5.70729C19.4359 5.35753 18.7827 5.08647 18.0923 4.90172L17.6169 3H14.3803L13.905 4.90172C13.2146 5.08647 12.5613 5.35753 11.9568 5.70729L10.2773 4.6996L7.98872 6.98814L8.99646 8.66762C8.6467 9.27215 8.37564 9.92555 8.19084 10.6159L6.28906 11.0913V14.3278L8.19078 14.8032C8.37554 15.4935 8.64665 16.1469 8.99635 16.7514L7.98866 18.4309L10.2772 20.7195L11.9567 19.7117C12.5613 20.0614 13.2146 20.3326 13.905 20.5174L14.3803 22.4191H17.6169L18.0923 20.5174C18.7826 20.3326 19.4359 20.0614 20.0405 19.7117L21.72 20.7195L24.0085 18.4309L23.0009 16.7514C23.3506 16.1469 23.6217 15.4935 23.8064 14.8032L25.7081 14.3278Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25.7081 29.0002C26.6018 29.0002 27.3264 28.2757 27.3264 27.3819C27.3264 26.4882 26.6018 25.7637 25.7081 25.7637C24.8144 25.7637 24.0898 26.4882 24.0898 27.3819C24.0898 28.2757 24.8144 29.0002 25.7081 29.0002Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.29013 29.0002C7.18387 29.0002 7.90839 28.2757 7.90839 27.3819C7.90839 26.4882 7.18387 25.7637 6.29013 25.7637C5.39639 25.7637 4.67188 26.4882 4.67188 27.3819C4.67188 28.2757 5.39639 29.0002 6.29013 29.0002Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      );

    case "high-demand-events":
      return (
        <svg aria-hidden="true" className="size-6 text-[#AD5151]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="fit_4_mask0_756_1781" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="3" y="3" width="26" height="26">
<path d="M3 3.00009H28.9999V29H3V3.00009Z" fill="white"/>
</mask>
<g mask="url(#fit_4_mask0_756_1781)">
<path d="M24.1594 9.473H4.57813M24.1594 9.473V13.5524L19.2641 16V20.8953L24.1594 23.343V26.6065C24.1594 26.8208 24.1172 27.033 24.0352 27.2309C23.9531 27.4289 23.8329 27.6087 23.6814 27.7602C23.5299 27.9118 23.3501 28.0321 23.1521 28.1141C22.9541 28.1962 22.7419 28.2384 22.5276 28.2383H6.20992C5.99562 28.2383 5.7834 28.1962 5.58542 28.1141C5.38744 28.0321 5.20758 27.9118 5.05613 27.7602C4.90458 27.6087 4.78437 27.4289 4.70235 27.2309C4.62034 27.033 4.57812 26.8208 4.57813 26.6065V9.473M24.1594 9.473V7.02536C24.1594 6.81109 24.1172 6.59893 24.0352 6.40098C23.9531 6.20304 23.8329 6.02319 23.6814 5.87171C23.5299 5.72008 23.3501 5.5998 23.1521 5.51777C22.9541 5.43573 22.7419 5.39354 22.5276 5.39361H6.20992C5.99562 5.39354 5.7834 5.43574 5.58542 5.51778C5.38744 5.59981 5.20758 5.72009 5.05613 5.87171C4.90458 6.02318 4.78437 6.20303 4.70235 6.40098C4.62034 6.59892 4.57812 6.81109 4.57813 7.02536V9.473" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.83984 12.7363H8.65574" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9219 12.7363H12.7377" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12.7363H16.8158" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.65625 3.76183V6.20947" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0781 3.76183V6.20947" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0781 12.7363H20.894" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 20.895H19.2635V15.9997H16V20.895Z" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0018 15.9997H15.186C14.8645 15.9997 14.5463 16.063 14.2493 16.186C13.9523 16.309 13.6825 16.4893 13.4552 16.7166C13.2279 16.9439 13.0476 17.2137 12.9246 17.5107C12.8016 17.8077 12.7383 18.1259 12.7383 18.4474C12.7384 19.0966 12.9963 19.7192 13.4553 20.1783C13.9143 20.6372 14.5369 20.8951 15.186 20.895H16.0018V15.9997Z" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 24.9746H19.2635V20.8952H16V24.9746Z" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.2617 15.9999L27.4206 11.9205V24.9746L19.2617 20.8952V15.9999Z" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.83984 19.2637H8.65574" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9219 19.2637H12.7377" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.83984 16H8.65574" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9219 16H12.7377" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.83984 22.5269H8.65574" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9219 22.5269H12.7377" stroke="#AD5151" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
      );

    case "enterprise-operations":
      return (
        <svg aria-hidden="true" className="size-6 text-[#AD5151]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.87891 22.1629H9.40039L10.3284 21.2348C11.8834 19.6705 14.4757 19.651 16.0039 21.2228H20.8789C21.7763 21.2228 22.5039 21.9503 22.5039 22.8478C22.5039 23.7453 21.7764 24.4728 20.8789 24.4728H14.4841" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M22.5021 22.8478L26.2294 19.1211C26.8636 18.4868 27.8919 18.4868 28.5262 19.1211C29.1599 19.7548 29.1577 20.7828 28.5208 21.4134C26.3548 23.5574 24.1882 25.7008 22.0211 27.8437C21.2321 28.6321 20.039 29.0857 18.8922 28.9865L7.8771 28.1106M3 21.3074H7.87505V29H3V21.3074ZM23.7301 10.3125C23.7305 9.79433 23.665 9.27825 23.5351 8.77664L24.7703 8.06353L23.1453 5.24895L21.9086 5.96298C21.178 5.24344 20.2673 4.70672 19.25 4.42649V3H16V4.42649C14.9827 4.70672 14.0719 5.2435 13.3414 5.96298L12.1047 5.24895L10.4797 8.06353L11.7149 8.77664C11.5877 9.26735 11.5199 9.78201 11.5199 10.3125C11.5199 10.8429 11.5877 11.3576 11.7149 11.8483L10.4797 12.5614L12.1047 15.376L13.3414 14.662C14.072 15.3815 14.9827 15.9182 16 16.1985V17.6249H19.25V16.1985C20.2673 15.9183 21.1781 15.3815 21.9086 14.662L23.1453 15.3761L24.7703 12.5615L23.5351 11.8484C23.6649 11.3467 23.7304 10.8306 23.7301 10.3125Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M17.6249 13.0662C19.1458 13.0662 20.3787 11.8333 20.3787 10.3124C20.3787 8.79151 19.1458 7.55859 17.6249 7.55859C16.104 7.55859 14.8711 8.79151 14.8711 10.3124C14.8711 11.8333 16.104 13.0662 17.6249 13.0662Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10"/>
</svg>
      );

    case "plus-readiness-assessment":
      return (
        <svg aria-hidden="true" className="size-6 text-[#AD5151]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="svc_0_mask0_759_3255" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="2" y="2" width="28" height="28">
<path d="M29.25 29.25V2.75H2.75V29.25H29.25Z" fill="white" stroke="white" strokeWidth="1.5"/>
</mask>
<g mask="url(#svc_0_mask0_759_3255)">
<path d="M17.0938 5.28128H20.1562C21.3644 5.28128 22.3437 6.26067 22.3437 7.46877V13.5938" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square"/>
<path d="M16.5568 28.9062H5.28124C4.0732 28.9062 3.09375 27.9269 3.09375 26.7188V7.46882C3.09375 6.26073 4.0732 5.28133 5.28124 5.28133H8.34373" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square"/>
<path d="M17.0937 7.46875H8.34375V3.09376H17.0937V7.46875Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M25.4374 19.2502C27.1459 20.9587 27.1459 23.7288 25.4374 25.4373C23.7288 27.1459 20.9587 27.1459 19.2502 25.4373C17.5416 23.7288 17.5416 20.9587 19.2502 19.2502C20.9587 17.5416 23.7288 17.5416 25.4374 19.2502Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M24.6641 24.6638L29.1951 29.1948" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M9.4375 15.7813L11.625 17.9688L16 13.5938" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square"/>
</g>
</svg>
      );

    case "checkout-account-extensibility":
      return (
        <svg aria-hidden="true" className="size-6 text-[#AD5151]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.1279 4C21.7304 4.00025 22.2187 4.48829 22.2188 5.09082V7.27246H2.58203V5.09082C2.58208 4.48816 3.07019 4.00005 3.67285 4H21.1279ZM4.76367 5.09473C4.4625 5.09482 4.21875 5.33948 4.21875 5.64062C4.21896 5.94159 4.46263 6.18545 4.76367 6.18555C5.0648 6.18555 5.30936 5.9417 5.30957 5.64062C5.30957 5.33937 5.06493 5.09473 4.76367 5.09473ZM6.94531 5.09082C6.64422 5.09101 6.40039 5.33558 6.40039 5.63672C6.40058 5.93769 6.64434 6.18145 6.94531 6.18164C7.24645 6.18164 7.49102 5.93781 7.49121 5.63672C7.49121 5.33546 7.24657 5.09082 6.94531 5.09082ZM9.12793 5.09082C8.82668 5.09082 8.58203 5.33546 8.58203 5.63672C8.58222 5.93781 8.82679 6.18164 9.12793 6.18164C9.42886 6.1814 9.67266 5.93766 9.67285 5.63672C9.67285 5.33561 9.42898 5.09106 9.12793 5.09082Z" fill="#AD5151"/>
<path d="M21.1279 4C21.7304 4.00025 22.2187 4.48829 22.2188 5.09082V7.27246H2.58203V5.09082C2.58208 4.48816 3.07019 4.00005 3.67285 4H21.1279ZM4.76367 5.09473C4.4625 5.09482 4.21875 5.33948 4.21875 5.64062C4.21896 5.94159 4.46263 6.18545 4.76367 6.18555C5.0648 6.18555 5.30936 5.9417 5.30957 5.64062C5.30957 5.33937 5.06493 5.09473 4.76367 5.09473ZM6.94531 5.09082C6.64422 5.09101 6.40039 5.33558 6.40039 5.63672C6.40058 5.93769 6.64434 6.18145 6.94531 6.18164C7.24645 6.18164 7.49102 5.93781 7.49121 5.63672C7.49121 5.33546 7.24657 5.09082 6.94531 5.09082ZM9.12793 5.09082C8.82668 5.09082 8.58203 5.33546 8.58203 5.63672C8.58222 5.93781 8.82679 6.18164 9.12793 6.18164C9.42886 6.1814 9.67266 5.93766 9.67285 5.63672C9.67285 5.33561 9.42898 5.09106 9.12793 5.09082Z" stroke="#AD5151"/>
<path d="M16.9987 18.727L16.2195 13.2725H8.5831L7.49219 20.9088H15.674" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.4922 14.3636V11.9091C10.4922 10.8547 11.3469 10 12.4013 10C13.4556 10 14.3104 10.8547 14.3104 11.9091V14.3636" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.4002 23.6364H3.67294C3.07043 23.6364 2.58203 23.148 2.58203 22.5454V5.09091C2.58203 4.4884 3.07043 4 3.67294 4H21.1275C21.73 4 22.2184 4.4884 22.2184 5.09091V18.0727M2.58203 7.27273H22.2184" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.5067 19.8185L23.2093 18.521C22.7574 18.0692 22.0248 18.0692 21.5729 18.521C21.1211 18.9729 21.1211 19.7055 21.5729 20.1574M21.5729 20.1574L22.8704 21.4549M21.5729 20.1574C21.1211 19.7055 20.3884 19.7055 19.9365 20.1574C19.4847 20.6092 19.4847 21.3419 19.9365 21.7937L21.234 23.0912" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.2344 23.0912L17.2096 19.0664C16.7578 18.6146 16.0251 18.6146 15.5733 19.0664C15.1214 19.5183 15.1214 20.2509 15.5733 20.7028L20.6889 25.8184" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.6907 25.8181H18.5089C17.9064 25.8181 17.418 26.3065 17.418 26.909C17.418 27.5115 17.9064 27.9999 18.5089 27.9999H24.7896C27.3458 27.9999 29.418 25.9277 29.418 23.3716C29.418 22.7638 29.2983 22.1619 29.0657 21.6004C28.8331 21.0388 28.4921 20.5286 28.0623 20.0988L25.3932 17.4297C24.9414 16.9779 24.2087 16.9779 23.7569 17.4297C23.305 17.8816 23.305 18.6142 23.7569 19.0661L24.5089 19.8181" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      );

    case "advanced-b2b-implementation":
      return (
        <svg aria-hidden="true" className="size-6 text-[#AD5151]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="svc_2_mask0_759_3278" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="2" y="2" width="28" height="28">
<path d="M29.25 29.25V2.75H2.75V29.25H29.25Z" fill="white" stroke="white" strokeWidth="1.5"/>
</mask>
<g mask="url(#svc_2_mask0_759_3278)">
<path d="M18.2422 29.1797H29.1796" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29.1796 19.8828L23.7109 17.1485L18.2422 19.8828V22.0703H29.1796V19.8828Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.5391 29.1797V22.0703" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.7109 29.1797V22.0703" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.8828 29.1797V22.0703" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.82031 14.8516H13.7578" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.7578 5.55469L8.28904 2.82033L2.82031 5.55469V7.74219H13.7578V5.55469Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<path d="M12.1172 14.8516V7.74221" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.28906 14.8516V7.74221" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<mask id="svc_2_mask1_759_3278" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="2" y="2" width="28" height="28">
<path d="M29.25 29.25V2.75H2.75V29.25H29.25Z" fill="white" stroke="white" strokeWidth="1.5"/>
</mask>
<g mask="url(#svc_2_mask1_759_3278)">
<path d="M4.46094 14.8516V7.74221" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<path d="M17.1484 6.10158H23.7109V12.6641" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5234 10.4766L23.7109 12.6641L25.8984 10.4766" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8515 25.8984H8.28906V19.336" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.4765 21.5234L8.28906 19.3359L6.10156 21.5234" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      );

    case "expansion-stores-markets":
      return (
        <svg aria-hidden="true" className="size-6 text-[#AD5151]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1719 12.1719H19.8281V19.8281H12.1719V12.1719Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<mask id="svc_3_mask0_759_3303" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="2" y="2" width="28" height="28">
<path d="M29.25 29.25V2.75H2.75V29.25H29.25Z" fill="white" stroke="white" strokeWidth="1.5"/>
</mask>
<g mask="url(#svc_3_mask0_759_3303)">
<path d="M2.82031 2.82029L3.5937 9.78084L5.52717 7.84737L8.62072 10.9409L10.9409 8.6207L7.84739 5.52715L9.78086 3.59368L2.82031 2.82029Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29.1792 2.82029L28.4058 9.78084L26.4724 7.84737L23.3788 10.9409L21.0586 8.6207L24.1521 5.52715L22.2187 3.59368L29.1792 2.82029Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.82031 29.1797L3.5937 22.2191L5.52717 24.1526L8.62072 21.0591L10.9409 23.3793L7.84739 26.4728L9.78086 28.4063L2.82031 29.1797Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29.1792 29.1797L28.4058 22.2191L26.4724 24.1526L23.3788 21.0591L21.0586 23.3793L24.1521 26.4728L22.2187 28.4063L29.1792 29.1797Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>
      );

    case "apps-apis-integrations":
      return (
        <svg aria-hidden="true" className="size-6 text-[#AD5151]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20339 29C6.42029 29 7.40678 28.0136 7.40678 26.7967C7.40678 25.5798 6.42029 24.5933 5.20339 24.5933C3.98649 24.5933 3 25.5798 3 26.7967C3 28.0136 3.98649 29 5.20339 29Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.7971 29C28.014 29 29.0005 28.0136 29.0005 26.7967C29.0005 25.5798 28.014 24.5933 26.7971 24.5933C25.5802 24.5933 24.5938 25.5798 24.5938 26.7967C24.5938 28.0136 25.5802 29 26.7971 29Z" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5926 18.4238V23.4916C11.5926 24.5336 10.8693 25.4066 9.89753 25.6361L7.34766 26.2902" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.6517 26.2901L22.1018 25.636C21.13 25.4065 20.4068 24.5335 20.4068 23.4915V18.4237H24.5932C27.027 18.4237 29 16.4507 29 14.0169C29 11.583 27.2473 9.61017 24.8136 9.61017C24.8136 7.18639 22.8305 5.20339 20.4068 5.20339C19.878 5.20339 19.3932 5.29147 18.9306 5.4678C17.7406 3.96949 15.8898 3 13.7966 3C10.139 3 7.18644 5.95249 7.18644 9.61017C4.75269 9.61017 3 11.5832 3 14.0169C3 16.4507 4.97303 18.4237 7.40678 18.4237H16M16 22.3898V29" stroke="#AD5151" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      );

    case "ongoing-plus-development":
      return (
        <svg aria-hidden="true" className="size-6 text-[#AD5151]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.70703 28H30.29V3.99978H1.70703V28ZM3.38181 5.67451H28.6152V9.95452H3.38181V5.67451ZM3.38181 11.6293H28.6152V26.3252H3.38181V11.6293Z" fill="#AD5151"/>
<path d="M10.9564 6.97756H9.28165V8.65234H10.9564V6.97756ZM14.4567 6.97756H12.7819V8.65234H14.4567V6.97756ZM7.45603 6.97756H5.78125V8.65234H7.45603V6.97756Z" fill="#AD5151"/>
<path d="M13.1136 21.7542L10.3372 18.9778L13.1136 16.2014L11.9294 15.0172L7.96875 18.9778L11.9294 22.9385L13.1136 21.7542Z" fill="#AD5151"/>
<path d="M20.0749 22.9385L24.0355 18.9778L20.0749 15.0172L18.8906 16.2014L21.6671 18.9778L18.8906 21.7542L20.0749 22.9385Z" fill="#AD5151"/>
<path d="M18.009 13.8L16.3741 13.4366L13.9922 24.1552L15.6271 24.5186L18.009 13.8Z" fill="#AD5151"/>
</svg>
      );

    default:
      return null;
  }
}
