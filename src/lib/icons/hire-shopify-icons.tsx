import type { SVGProps } from "react";

export type HireShopifyIconName =
  | "experience"
  | "verticals"
  | "talent-pool"
  | "fair-hiring"
  | "cost-savings"
  | "integrity"
  | "hr-needs"
  | "timezone"
  | "post-production-support"
  | "store-setup"
  | "app-integration"
  | "migration"
  | "maintenance-support";

export function HireShopifyIcon({
  name,
  className,
  ...props
}: {
  name: HireShopifyIconName;
} & SVGProps<SVGSVGElement>) {
  switch (name) {
    case "experience":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M11.0522 7.61584C11.1183 7.41317 11.2474 7.23692 11.4207 7.1128C11.594 6.98868 11.8024 6.92318 12.0155 6.92586C12.2287 6.92854 12.4354 6.99926 12.6055 7.1277C12.7756 7.25614 12.9003 7.43557 12.9612 7.63984L13.6982 9.09184C13.7699 9.23299 13.8741 9.35509 14.0023 9.4481C14.1304 9.54111 14.2788 9.60237 14.4352 9.62684L16.0692 9.88284C16.2796 9.88366 16.4844 9.95083 16.6544 10.0748C16.8244 10.1987 16.951 10.3732 17.0162 10.5732C17.0813 10.7733 17.0817 10.9888 17.0172 11.1891C16.9528 11.3894 16.8268 11.5643 16.6572 11.6888L15.4852 12.8568C15.373 12.9686 15.2889 13.1053 15.2399 13.2559C15.1909 13.4064 15.1783 13.5665 15.2032 13.7228L15.4622 15.3358C15.5335 15.538 15.5379 15.7577 15.4748 15.9626C15.4117 16.1674 15.2844 16.3466 15.1118 16.4737C14.9391 16.6007 14.7302 16.6689 14.5159 16.6682C14.3015 16.6675 14.093 16.598 13.9212 16.4698L12.4562 15.7198C12.3151 15.6475 12.1588 15.6098 12.0002 15.6098C11.8416 15.6098 11.6853 15.6475 11.5442 15.7198L10.0792 16.4698C9.90739 16.5969 9.69937 16.6656 9.48565 16.6659C9.27194 16.6661 9.06377 16.5979 8.89166 16.4712C8.71955 16.3445 8.59257 16.166 8.52932 15.9618C8.46607 15.7577 8.46988 15.5386 8.5402 15.3368L8.7982 13.7238C8.82328 13.5673 8.81079 13.4071 8.76176 13.2563C8.71273 13.1056 8.62856 12.9687 8.5162 12.8568L7.3602 11.7048C7.18486 11.5834 7.05296 11.409 6.98376 11.2072C6.91457 11.0054 6.91171 10.7868 6.9756 10.5833C7.03949 10.3798 7.16679 10.202 7.33889 10.076C7.511 9.94999 7.71889 9.8823 7.9322 9.88284L9.5652 9.62684C9.72163 9.60237 9.87001 9.54111 9.99814 9.4481C10.1263 9.35509 10.2305 9.23299 10.3022 9.09184L11.0522 7.61584Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "verticals":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M10 10.5L8 13L10 15.5"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M14 10.5L16 13L14 15.5"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M20 20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H12.1C11.7655 6.00328 11.4355 5.92261 11.1403 5.76538C10.8451 5.60815 10.594 5.37938 10.41 5.1L9.6 3.9C9.41789 3.62347 9.16997 3.39648 8.8785 3.2394C8.58702 3.08231 8.26111 3.00005 7.93 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "talent-pool":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M17 21C17 19.6739 16.4732 18.4021 15.5355 17.4645C14.5979 16.5268 13.3261 16 12 16C10.6739 16 9.40215 16.5268 8.46447 17.4645C7.52678 18.4021 7 19.6739 7 21"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            d="M21.9992 10.5001C21.9993 9.85983 21.8238 9.23178 21.4917 8.68433C21.1596 8.13688 20.6837 7.69101 20.1159 7.39526C19.548 7.09951 18.9098 6.9652 18.2709 7.00697C17.632 7.04873 17.0167 7.26496 16.4922 7.63212"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            d="M7.507 7.63212C6.98244 7.26496 6.36721 7.04873 5.72829 7.00697C5.08936 6.9652 4.45122 7.09951 3.88333 7.39526C3.31544 7.69101 2.83956 8.13688 2.50749 8.68433C2.17542 9.23178 1.99989 9.85983 2 10.5001"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            d="M18.5 7C19.8807 7 21 5.88071 21 4.5C21 3.11929 19.8807 2 18.5 2C17.1193 2 16 3.11929 16 4.5C16 5.88071 17.1193 7 18.5 7Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            d="M5.5 7C6.88071 7 8 5.88071 8 4.5C8 3.11929 8 2 5.5 2C4.11929 2 3 3.11929 3 4.5C3 5.88071 4.11929 7 5.5 7Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "fair-hiring":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M13.5 8H10.5"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M15 2L14 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6C5 5.46957 5.21071 4.96086 5.58579 4.58579C5.96086 4.21071 6.46957 4 7 4H10"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M16 22C16 20.9391 15.5786 19.9217 14.8284 19.1716C14.0783 18.4214 13.0609 18 12 18C10.9391 18 9.92172 18.4214 9.17157 19.1716C8.42143 19.9217 8 20.9391 8 22"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M9 2L12 8"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "cost-savings":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M19.78 4.22L19.79 4.21C21.91 6.33 22.04 9.68 20.19 11.95L18.47 14.06C18.23 14.36 18.1 14.73 18.1 15.12V18.1C18.1 18.6304 17.8893 19.1391 17.5142 19.5142C17.1391 19.8893 16.6304 20.1 16.1 20.1H7.9C7.36957 20.1 6.86086 19.8893 6.48579 19.5142C6.11071 19.1391 5.9 18.6304 5.9 18.1V15.12C5.9 14.73 5.77 14.36 5.53 14.06L3.81 11.95C1.96 9.68 2.09 6.33 4.21 4.21C6.33 2.09 9.68 1.96 11.95 3.81L12 3.85L12.05 3.81C14.32 1.96 17.67 2.09 19.79 4.21"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M9 22H15"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M10 11H14"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 9V15"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "integrity":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M12 22S19 18 19 12V5L12 2L5 5V12C5 18 12 22 12 22Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "hr-needs":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M3.08569 17.5092C3.17147 17.1195 3.13873 16.7131 2.99169 16.3422C1.96846 14.2191 1.72795 11.8029 2.31258 9.51982C2.89722 7.23672 4.26944 5.23348 6.18713 3.86352C8.10483 2.49356 10.4448 1.84494 12.7941 2.03208C15.1434 2.21922 17.3511 3.23011 19.0278 4.88638C20.7044 6.54265 21.7422 8.73787 21.958 11.0847C22.1738 13.4316 21.5538 15.7793 20.2074 17.7136C18.861 19.6478 16.8746 21.0444 14.5988 21.6569C12.3231 22.2694 9.90408 22.0584 7.76869 21.0612C7.41822 20.9281 7.03741 20.8962 6.66969 20.9692L3.25669 21.9672C3.09205 22.0109 2.91898 22.0118 2.75389 21.9698C2.5888 21.9279 2.43716 21.8444 2.31336 21.7275C2.18955 21.6105 2.09769 21.4638 2.04647 21.3013C1.99525 21.1389 1.98638 20.966 2.02069 20.7992L3.08569 17.5092Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M16 9L10.5 14.5L8 12"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "timezone":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M21.9499 13.0002C22.1573 10.936 21.7176 8.85842 20.6917 7.05528C19.6657 5.25214 18.1044 3.81271 16.224 2.93641C14.3436 2.06011 12.2372 1.79033 10.1967 2.16444C8.15611 2.53856 6.28242 3.53805 4.83519 5.02444C3.38796 6.51083 2.43884 8.41053 2.11933 10.4603C1.79981 12.5102 2.12572 14.6086 3.0519 16.4649C3.97808 18.3213 5.45867 19.8436 7.28856 20.8211C9.11844 21.7985 11.207 22.1826 13.2649 21.9202"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12 6V12L16 14"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M16 19L18 21L22 17"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "post-production-support":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M3 11H6C6.53043 11 7.03914 11.2107 7.41421 11.5858C7.78929 11.9609 8 12.4696 8 13V16C8 16.5304 7.78929 17.0391 7.41421 17.4142C7.03914 17.7893 6.53043 18 6 18H5C4.46957 18 3.96086 17.7893 3.58579 17.4142C3.21071 17.0391 3 16.5304 3 16V11ZM3 11C3 9.8181 3.23279 8.64778 3.68508 7.55585C4.13738 6.46392 4.80031 5.47177 5.63604 4.63604C6.47177 3.80031 7.46392 3.13738 8.55585 2.68508C9.64778 2.23279 10.8181 2 12 2C13.1819 2 14.3522 2.23279 15.4442 2.68508C16.5361 3.13738 17.5282 3.80031 18.364 4.63604C19.1997 5.47177 19.8626 6.46392 20.3149 7.55585C20.7672 8.64778 21 9.8181 21 11M21 11V16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18H18C17.4696 18 16.9609 17.7893 16.5858 17.4142C16.2107 17.0391 16 16.5304 16 16V13C16 12.4696 16.2107 11.9609 16.5858 11.5858C16.9609 11.2107 17.4696 11 18 11H21Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M21 16V18C21 19.0609 20.5786 20.0783 19.8284 20.8284C19.0783 21.5786 18.0609 22 17 22H12"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "store-setup":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="28"
          viewBox="0 0 26 28"
          width="26"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M15.7525 26.5277V6.55859M15.7525 6.55859L17.329 7.76515H19.0421L20.3779 16.5905C20.7972 19.3578 21.0074 22.1524 21.0074 24.9512L15.7525 26.5277L2.08984 23.9002L3.14082 10.2371L15.7525 6.55859Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M12.5975 7.47894C12.6048 5.35906 11.7956 3.68271 10.4955 3.43677C8.85496 3.12672 7.05359 5.21402 6.4724 8.09904C6.38972 8.51313 6.33577 8.91777 6.31055 9.31295"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M14.5574 6.90604C14.2484 5.6648 13.5968 4.78616 12.7098 4.61274C11.2563 4.32897 9.67246 6.04106 8.97461 8.5351"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M19 3.52344H24.5"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeWidth="1.57143"
          />
          <path
            d="M21.7598 0.785156V6.28516"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeWidth="1.57143"
          />
          <path
            d="M9.30473 14.75C9.36626 15.7641 12.0845 15.9839 12.2321 18.3542C12.3551 20.2235 11.2235 21.4941 9.5999 21.6041C7.64425 21.7262 6.57422 20.59 6.57422 20.59L6.99246 18.8673C6.99246 18.8673 8.0748 19.6736 8.93581 19.6126C9.50164 19.5759 9.69846 19.1239 9.68615 18.8062C9.6 17.4867 7.3984 17.5601 7.25082 15.3853C7.12784 13.5526 8.35767 11.7078 11.0514 11.5368C12.0846 11.4756 12.6258 11.7323 12.6258 11.7323L12.0107 14.0046C12.0107 14.0046 11.3219 13.6993 10.5101 13.7481C9.31703 13.8215 9.30473 14.5667 9.31703 14.75H9.30473Z"
            fill="#AD5151"
          />
        </svg>
      );

    case "app-integration":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M10 22V7C10 6.73478 9.89464 6.48043 9.70711 6.29289C9.51957 6.10536 9.26522 6 9 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H16C16.5304 22 17.0391 21.7893 17.4142 21.4142C17.7893 21.0391 18 20.5304 18 20V15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14H2"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M21 2H15C14.4477 2 14 2.44772 14 3V9C14 9.55228 14.4477 10 15 10H21C21.5523 10 22 9.55228 22 9V3C22 2.44772 21.5523 2 21 2Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      );

    case "migration":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M12 13V21"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M3.99936 14.9002C3.2564 14.1412 2.69593 13.223 2.3604 12.2152C2.02486 11.2074 1.92307 10.1365 2.06272 9.08354C2.20238 8.0306 2.57982 7.02324 3.16646 6.13778C3.7531 5.25231 4.53355 4.51196 5.44869 3.97279C6.36384 3.43363 7.38969 3.10979 8.44853 3.02582C9.50737 2.94184 10.5714 3.09993 11.5601 3.4881C12.5488 3.87627 13.4362 4.48435 14.1551 5.26628C14.874 6.0482 15.4055 6.98347 15.7094 8.00124H17.4994C18.4649 8.00113 19.4048 8.31156 20.1804 8.88668C20.9559 9.4618 21.5259 10.2711 21.8061 11.195C22.0864 12.119 22.062 13.1086 21.7367 14.0176C21.4113 14.9267 20.8022 15.707 19.9994 16.2432"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M8 17L12 13L16 17"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      );

    case "maintenance-support":
      return (
        <svg
          aria-hidden="true"
          className={className}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M14.7005 6.29979C14.5172 6.48671 14.4146 6.73803 14.4146 6.99979C14.4146 7.26154 14.5172 7.51286 14.7005 7.69979L16.3005 9.29979C16.4874 9.48301 16.7387 9.58564 17.0005 9.58564C17.2622 9.58564 17.5135 9.48301 17.7005 9.29979L20.8065 6.19479C21.1265 5.87279 21.6695 5.97479 21.7895 6.41279C22.0916 7.51166 22.0745 8.67385 21.7402 9.76338C21.406 10.8529 20.7683 11.8247 19.9019 12.565C19.0354 13.3054 17.9761 13.7836 16.8477 13.9439C15.7194 14.1041 14.5688 13.9396 13.5305 13.4698L5.62047 21.3798C5.22264 21.7775 4.68313 22.0008 4.12061 22.0008C3.5581 22.0007 3.01866 21.7771 2.62097 21.3793C2.22327 20.9815 1.99991 20.4419 2 19.8794C2.00009 19.3169 2.22364 18.7775 2.62147 18.3798L10.5315 10.4698C10.0616 9.4315 9.89717 8.28087 10.0574 7.15253C10.2176 6.0242 10.6959 4.96484 11.4362 4.0984C12.1766 3.23196 13.1484 2.5943 14.2379 2.26001C15.3274 1.92573 16.4896 1.90865 17.5885 2.21079C18.0265 2.33079 18.1285 2.87279 17.8075 3.19479L14.7005 6.29979Z"
            stroke="#AD5151"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      );

    default:
      return null;
  }
}
