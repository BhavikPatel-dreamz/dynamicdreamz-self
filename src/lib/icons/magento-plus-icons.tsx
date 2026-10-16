import type { ReactNode } from "react";

export type MagentoPlusIconName =
  | "no-server-management"
  | "no-reindexing"
  | "no-security-issues"
  | "multiple-stores-feature"
  | "built-in-b2b-module"
  | "best-checkout-experience"
  | "ease-of-use"
  | "24-7-support"
  | "simplified-operations"
  | "scalability"
  | "advanced-features"
  | "cost-efficiency"
  | "products-categories"
  | "customer-data"
  | "orders-transactions"
  | "content"
  | "seo-settings"
  | "audit-plan"
  | "custom-design"
  | "development"
  | "data-migration"
  | "testing"
  | "launch"
;

export function MagentoPlusIcon({ name }: { name: MagentoPlusIconName }): ReactNode {
  switch (name) {
    case "no-server-management":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.2667 4H3.73333C2.77604 4 2 4.71634 2 5.6V8.4C2 9.28366 2.77604 10 3.73333 10H13.2667C14.224 10 15 9.28366 15 8.4V5.6C15 4.71634 14.224 4 13.2667 4Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M13.2667 14H3.73333C2.77604 14 2 14.7163 2 15.6V18.4C2 19.2837 2.77604 20 3.73333 20H13.2667C14.224 20 15 19.2837 15 18.4V15.6C15 14.7163 14.224 14 13.2667 14Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M5 7H5.01M5 17H5.01" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M19.5 4L19.5 19" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"></path>
        <path d="M18 18L19.5 19.5L21 18" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"></path>
        </svg>
      );
    case "no-reindexing":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.2 4H3.8C2.80589 4 2 4.80589 2 5.8V18.2C2 19.1941 2.80589 20 3.8 20H10.2C11.1941 20 12 19.1941 12 18.2V5.8C12 4.80589 11.1941 4 10.2 4Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M5 8H9M5 12H9M5 16H8" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M16.1464 8.14652C15.9512 8.3418 15.9512 8.65838 16.1465 8.85363C16.3417 9.04888 16.6583 9.04886 16.8536 8.85359L16.5 8.50006L16.1464 8.14652ZM19.0752 7.75075L19.0029 8.2455V8.2455L19.0752 7.75075ZM20.9938 8.58388L21.306 8.19328V8.19328L20.9938 8.58388ZM22.4446 12.3521L22.9381 12.4325V12.4325L22.4446 12.3521ZM17.7887 15.6455L17.8772 15.1534H17.8772L17.7887 15.6455ZM16.2232 14.3698C16.0133 14.1904 15.6977 14.2152 15.5183 14.4251C15.3389 14.6351 15.3637 14.9507 15.5737 15.1301L15.8984 14.7499L16.2232 14.3698ZM16.5 7C16.5 6.72386 16.2761 6.5 16 6.5C15.7239 6.5 15.5 6.72386 15.5 7H16H16.5ZM16 9H15.5V9.5H16V9ZM18 9.5C18.2761 9.5 18.5 9.27614 18.5 9C18.5 8.72386 18.2761 8.5 18 8.5V9V9.5ZM16.5 8.50006L16.8536 8.85359C17.0105 8.69665 17.3763 8.51206 17.8461 8.38102C18.3077 8.2523 18.7497 8.20848 19.0029 8.2455L19.0752 7.75075L19.1475 7.25601C18.6987 7.1904 18.103 7.27121 17.5775 7.41778C17.0603 7.56204 16.4895 7.8034 16.1464 8.14652L16.5 8.50006ZM19.0752 7.75075L19.0029 8.2455C19.6173 8.33529 20.1967 8.58689 20.6817 8.97448L20.9938 8.58388L21.306 8.19328C20.6823 7.69494 19.9374 7.37146 19.1475 7.25601L19.0752 7.75075ZM20.9938 8.58388L20.6817 8.97448C21.1667 9.36208 21.5399 9.87172 21.763 10.4511L22.2296 10.2715L22.6962 10.0918C22.4094 9.34686 21.9296 8.69161 21.306 8.19328L20.9938 8.58388ZM22.2296 10.2715L21.763 10.4511C21.9861 11.0305 22.051 11.6589 21.9512 12.2716L22.4446 12.3521L22.9381 12.4325C23.0665 11.6446 22.983 10.8368 22.6962 10.0918L22.2296 10.2715ZM22.4446 12.3521L21.9512 12.2716C21.8513 12.8844 21.5902 13.4596 21.1947 13.9382L21.5801 14.2567L21.9656 14.5752C22.4741 13.9599 22.8097 13.2204 22.9381 12.4325L22.4446 12.3521ZM21.5801 14.2567L21.1947 13.9382C20.7992 14.4168 20.2835 14.7816 19.7005 14.9952L19.8725 15.4647L20.0445 15.9342C20.794 15.6596 21.4571 15.1906 21.9656 14.5752L21.5801 14.2567ZM19.8725 15.4647L19.7005 14.9952C19.1175 15.2087 18.4882 15.2633 17.8772 15.1534L17.7887 15.6455L17.7002 16.1376C18.4858 16.2789 19.2949 16.2087 20.0445 15.9342L19.8725 15.4647ZM17.7887 15.6455L17.8772 15.1534C17.2661 15.0435 16.6953 14.7731 16.2232 14.3698L15.8984 14.7499L15.5737 15.1301C16.1806 15.6486 16.9145 15.9963 17.7002 16.1376L17.7887 15.6455ZM16 7H15.5V9H16H16.5V7H16ZM16 9V9.5H18V9V8.5H16V9Z" fill="#AD5151"></path>
        </svg>
      );
    case "no-security-issues":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3.5L19 6V11.4C19 15.6 16.4 18.7 12 20.5C7.6 18.7 5 15.6 5 11.4V6L12 3.5Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M9 12L11 14L15 10" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "multiple-stores-feature":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10H10V19H3V10Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M13 7H20V19H13V7Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M2.5 10L4 7H9L10.5 10" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M12.5 7L14 4H19L20.5 7" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M5.5 15H7.5" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M15.5 12H17.5" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "built-in-b2b-module":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6471 5H4.35294C3.05345 5 2 5.89543 2 7V17C2 18.1046 3.05345 19 4.35294 19H19.6471C20.9466 19 22 18.1046 22 17V7C22 5.89543 20.9466 5 19.6471 5Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M8.00078 11.6998C8.93967 11.6998 9.70078 10.9387 9.70078 9.9998C9.70078 9.06092 8.93967 8.2998 8.00078 8.2998C7.0619 8.2998 6.30078 9.06092 6.30078 9.9998C6.30078 10.9387 7.0619 11.6998 8.00078 11.6998Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M5.5 14.9999C6.3 13.1999 9.7 13.1999 10.5 14.9999" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"></path>
        <path d="M14 9H18M14 12H18M14 15H17" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "best-checkout-experience":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 5H5.5L7.3 14H17.1L19.1 8H6.2" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M9.00078 19.6998C9.66352 19.6998 10.2008 19.1625 10.2008 18.4998C10.2008 17.8371 9.66352 17.2998 9.00078 17.2998C8.33804 17.2998 7.80078 17.8371 7.80078 18.4998C7.80078 19.1625 8.33804 19.6998 9.00078 19.6998Z" fill="#AD5151"></path>
        <path d="M16.5008 19.6998C17.1635 19.6998 17.7008 19.1625 17.7008 18.4998C17.7008 17.8371 17.1635 17.2998 16.5008 17.2998C15.838 17.2998 15.3008 17.8371 15.3008 18.4998C15.3008 19.1625 15.838 19.6998 16.5008 19.6998Z" fill="#AD5151"></path>
        <path d="M10 4L11.5 5.5L15 2" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "ease-of-use":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5H19V19H5V5Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M8 9H16M8 13H13" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M15 15L16.5 16.5L22 11" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "24-7-support":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12C5 10.1435 5.7375 8.36301 7.05025 7.05025C8.36301 5.7375 10.1435 5 12 5C13.8565 5 15.637 5.7375 16.9497 7.05025C18.2625 8.36301 19 10.1435 19 12" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M5 12V16C5 16.5304 5.21071 17.0391 5.58579 17.4142C5.96086 17.7893 6.46957 18 7 18H8V12H7C6.46957 12 5.96086 12.2107 5.58579 12.5858C5.21071 12.9609 5 13.4696 5 14" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M19 12V16C19 16.5304 18.7893 17.0391 18.4142 17.4142C18.0391 17.7893 17.5304 18 17 18H16V12H17C17.5304 12 18.0391 12.2107 18.4142 12.5858C18.7893 12.9609 19 13.4696 19 14" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "simplified-operations":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5V19M12 5V19M19 5V19" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M4.99922 10.8002C5.99333 10.8002 6.79922 9.99431 6.79922 9.0002C6.79922 8.00608 5.99333 7.2002 4.99922 7.2002C4.00511 7.2002 3.19922 8.00608 3.19922 9.0002C3.19922 9.99431 4.00511 10.8002 4.99922 10.8002Z" fill="#AD5151"></path>
        <path d="M11.9992 15.8002C12.9933 15.8002 13.7992 14.9943 13.7992 14.0002C13.7992 13.0061 12.9933 12.2002 11.9992 12.2002C11.0051 12.2002 10.1992 13.0061 10.1992 14.0002C10.1992 14.9943 11.0051 15.8002 11.9992 15.8002Z" fill="#AD5151"></path>
        <path d="M18.9992 11.8002C19.9933 11.8002 20.7992 10.9943 20.7992 10.0002C20.7992 9.00608 19.9933 8.2002 18.9992 8.2002C18.0051 8.2002 17.1992 9.00608 17.1992 10.0002C17.1992 10.9943 18.0051 11.8002 18.9992 11.8002Z" fill="#AD5151"></path>
        </svg>
      );
    case "scalability":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 8H9.5C8.67157 8 8 8.67157 8 9.5V14.5C8 15.3284 8.67157 16 9.5 16H14.5C15.3284 16 16 15.3284 16 14.5V9.5C16 8.67157 15.3284 8 14.5 8Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M8 8L4.5 4.5M16 8L19.5 4.5M8 16L4.5 19.5M16 16L19.5 19.5" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M4.5 7V4.5H7M17 4.5H19.5V7M4.5 17V19.5H7M17 19.5H19.5V17" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "advanced-features":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.6 5H5.4C4.6268 5 4 5.6268 4 6.4V9.6C4 10.3732 4.6268 11 5.4 11H8.6C9.3732 11 10 10.3732 10 9.6V6.4C10 5.6268 9.3732 5 8.6 5Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M8.6 14H5.4C4.6268 14 4 14.6268 4 15.4V18.6C4 19.3732 4.6268 20 5.4 20H8.6C9.3732 20 10 19.3732 10 18.6V15.4C10 14.6268 9.3732 14 8.6 14Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M21.5 4V2M20.5 3H22.5" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M16.5 2.5L17.5 5L20 6L17.5 7L16.5 9.5L15.5 7L13 6L15.5 5L16.5 2.5Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      );
    case "cost-efficiency":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 19C11.866 19 15 15.866 15 12C15 8.13401 11.866 5 8 5C4.13401 5 1 8.13401 1 12C1 15.866 4.13401 19 8 19Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M7.986 7.5V16.0002M10.2718 9.14289C9.58604 8.45715 8.9003 8.11429 7.986 8.11429C6.72882 8.11429 5.70023 8.80002 5.70023 9.82862C5.70023 12.2287 10.2718 10.8572 10.2718 13.2573C10.2718 14.2859 9.24317 15.0859 7.986 15.0859C7.07169 15.0859 6.27167 14.743 5.58594 14.0573" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"></path>
        <path d="M18 8H23M18 12H22M18 16H21" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "products-categories":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5625 6.93755L12.0001 3L20.4377 6.93755L12.0001 10.8751L3.5625 6.93755Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"></path>
        <path d="M3.5625 6.9375V16.5001L12.0001 21.0002L20.4377 16.5001V6.9375" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"></path>
        <path d="M12 10.875V21.0001" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"></path>
        <path d="M7.5 5.0249L15.9376 8.96246" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"></path>
        <path d="M14.5 13.6875H17.875M16.1875 12V15.375" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"></path>
        </svg>
      );
    case "customer-data":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.39327 10.9037C10.3687 10.9037 11.9701 9.3023 11.9701 7.32686C11.9701 5.35141 10.3687 3.75 8.39327 3.75C6.41782 3.75 4.81641 5.35141 4.81641 7.32686C4.81641 9.3023 6.41782 10.9037 8.39327 10.9037Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M2.19531 19.2497C3.14914 15.5537 5.53371 13.646 8.3952 13.646C11.2567 13.646 13.6413 15.5537 14.5951 19.2497" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M20.9137 3.75H17.3368C16.6783 3.75 16.1445 4.2838 16.1445 4.94229V6.37303C16.1445 7.03151 16.6783 7.56532 17.3368 7.56532H20.9137C21.5722 7.56532 22.106 7.03151 22.106 6.37303V4.94229C22.106 4.2838 21.5722 3.75 20.9137 3.75Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M20.9137 10.3076H17.3368C16.6783 10.3076 16.1445 10.8414 16.1445 11.4999V12.9306C16.1445 13.5891 16.6783 14.1229 17.3368 14.1229H20.9137C21.5722 14.1229 22.106 13.5891 22.106 12.9306V11.4999C22.106 10.8414 21.5722 10.3076 20.9137 10.3076Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M17.9336 5.65771H20.3182M17.9336 12.2153H20.3182" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      );
    case "orders-transactions":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3.75H21V8.25H3V3.75Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M3 11.25H21V20.25H3V11.25Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M6 6H11" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M6 14H10M6 17H9" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M16.5008 17.6998C17.7158 17.6998 18.7008 16.7148 18.7008 15.4998C18.7008 14.2848 17.7158 13.2998 16.5008 13.2998C15.2858 13.2998 14.3008 14.2848 14.3008 15.4998C14.3008 16.7148 15.2858 17.6998 16.5008 17.6998Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M16.5 14.625V15.6998L17.25 16.125" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      );
    case "content":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.39453 2.89307H17.1087L20.7515 6.53588V21.1071H7.39453V2.89307Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M17.1094 2.89307V7.14301H20.7522" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M11.0352 10.7856H17.1065M11.0352 14.4285H17.1065M11.0352 18.0713H14.678" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M2 7.75H3.82141M2 11.9999H3.82141M2 16.2499H3.82141" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "seo-settings":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.41749 16.8521C12.8949 16.8521 15.7139 14.0331 15.7139 10.5557C15.7139 7.07827 12.8949 4.25928 9.41749 4.25928C5.94009 4.25928 3.12109 7.07827 3.12109 10.5557C3.12109 14.0331 5.94009 16.8521 9.41749 16.8521Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M13.8242 14.9629L18.8613 20" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M17.6016 4.88892H21.3794M19.4905 3V6.77784" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "audit-plan":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6H6" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M2 10H6" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M2 14H6" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M2 18H6" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M9.5 8H14.5" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M9.5 12H16" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M9.5 16H14" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "custom-design":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_380_878)">
        <path d="M10.6 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V10.6" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M14.3047 19.5299L15.2277 19.1479" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M15 3V10.6" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M15.2287 16.8522L14.3047 16.4692" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M16.8517 15.2282L16.4688 14.3052" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M16.8517 20.772L16.4688 21.696" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M19.1484 15.2282L19.5314 14.3052" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M19.5304 21.696L19.1484 20.772" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M20.7734 16.8522L21.6954 16.4692" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M20.7734 19.1479L21.6954 19.5309" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M9 3V21" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </g>
        <defs>
        <clipPath id="clip0_380_878">
        <rect fill="white" height="24" width="24"></rect>
        </clipPath>
        </defs>
        </svg>
      );
    case "development":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10.5L8 13L10 15.5" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M14 10.5L16 13L14 15.5" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M20 20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H12.1C11.7655 6.00328 11.4355 5.92261 11.1403 5.76538C10.8451 5.60815 10.594 5.37938 10.41 5.1L9.6 3.9C9.41789 3.62347 9.16997 3.39648 8.8785 3.2394C8.58702 3.08231 8.26111 3.00005 7.93 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "data-migration":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 19L18 21L22 17" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M21 13.127V5" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M3 12C3 12.7956 3.94821 13.5587 5.63604 14.1213C7.32387 14.6839 9.61305 15 12 15C14.3869 15 16.6761 14.6839 18.364 14.1213C20.0518 13.5587 21 12.7956 21 12" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M3 5V19C2.99985 19.4311 3.27848 19.8572 3.8169 20.2492C4.35531 20.6412 5.14088 20.9899 6.12007 21.2716C7.09926 21.5532 8.24908 21.7613 9.4912 21.8814C10.7333 22.0016 12.0386 22.0311 13.318 21.968" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "testing":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M9 12L11 14L15 10" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    case "launch":
      return (
        <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M2.5 21.4998C2.5 21.4998 3 17.7598 4.5 16.4998C4.91088 16.1536 5.43516 15.9712 5.97223 15.9879C6.50929 16.0045 7.02131 16.2188 7.41 16.5898C8.2 17.3698 8.21 18.6598 7.5 19.4998C6.24 20.9998 2.5 21.4998 2.5 21.4998Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M9 11.9998C9.53214 10.6192 10.2022 9.29582 11 8.04976C12.1652 6.18675 13.7876 4.65281 15.713 3.59385C17.6384 2.53489 19.8027 1.98613 22 1.99976C22 4.71976 21.22 9.49976 16 12.9998C14.7367 13.7982 13.3967 14.4682 12 14.9998L9 11.9998Z" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        <path d="M9 12.0001H4C4 12.0001 4.55 8.97009 6 8.00009C7.62 6.92009 11 8.05009 11 8.05009" stroke="#AD5151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      );
    default:
      return null;
  }
}
