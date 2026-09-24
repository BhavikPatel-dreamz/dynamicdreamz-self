import type { ReactNode } from "react";

export type MagentoMigrationIconName =
  | "clock-unsupported"
  | "reduce-costs"
  | "store-performance"
  | "easy-to-manage"
  | "scalable-growth"
  | "enhanced-security";

export function MagentoMigrationIcon({
  name,
}: {
  name: MagentoMigrationIconName;
}): ReactNode {
  switch (name) {
    case "clock-unsupported":
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 7V12L15 14"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M7 17L17 7"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "reduce-costs":
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 19C11.866 19 15 15.866 15 12C15 8.13401 11.866 5 8 5C4.13401 5 1 8.13401 1 12C1 15.866 4.13401 19 8 19Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M7.986 7.5V16.0002M10.2718 9.14289C9.58604 8.45715 8.9003 8.11429 7.986 8.11429C6.72882 8.11429 5.70023 8.80002 5.70023 9.82862C5.70023 12.2287 10.2718 10.8572 10.2718 13.2573C10.2718 14.2859 9.24317 15.0859 7.986 15.0859C7.07169 15.0859 6.27167 14.743 5.58594 14.0573"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.3"
          />
          <path
            d="M18 8H23M18 12H22M18 16H21"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "store-performance":
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 16.9998C6.8 12.2998 10.2 9.1998 15.2 7.7998"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M14 5H18V9"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M6 19H18"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M15 11L16.4 12.4L19 9.5"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "easy-to-manage":
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.21484 5H17.2148V19H3.21484V5Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.3125"
          />
          <path
            d="M6.21484 9H14.2148M6.21484 13H11.2148"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.3125"
          />
          <path
            d="M13.2148 15L14.7148 16.5L20.2148 11"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.3125"
          />
        </svg>
      );
    case "scalable-growth":
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 8H9.5C8.67157 8 8 8.67157 8 9.5V14.5C8 15.3284 8.67157 16 9.5 16H14.5C15.3284 16 16 15.3284 16 14.5V9.5C16 8.67157 15.3284 8 14.5 8Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M8 8L4.5 4.5M16 8L19.5 4.5M8 16L4.5 19.5M16 16L19.5 19.5"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M4.5 7V4.5H7M17 4.5H19.5V7M4.5 17V19.5H7M17 19.5H19.5V17"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "enhanced-security":
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3008 13.1484C20.3008 18.1484 16.8008 20.6484 12.6408 22.0984C12.4229 22.1722 12.1863 22.1687 11.9708 22.0884C7.80078 20.6484 4.30078 18.1484 4.30078 13.1484V6.1484C4.30078 5.88318 4.40614 5.62883 4.59367 5.44129C4.78121 5.25376 5.03556 5.1484 5.30078 5.1484C7.30078 5.1484 9.80078 3.9484 11.5408 2.4284C11.7526 2.2474 12.0221 2.14795 12.3008 2.14795C12.5794 2.14795 12.8489 2.2474 13.0608 2.4284C14.8108 3.9584 17.3008 5.1484 19.3008 5.1484C19.566 5.1484 19.8204 5.25376 20.0079 5.44129C20.1954 5.62883 20.3008 5.88318 20.3008 6.1484V13.1484Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M9.30078 12.1484L11.3008 14.1484L15.3008 10.1484"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );
  }
}
