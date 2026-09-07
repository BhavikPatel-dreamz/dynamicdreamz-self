import { careerApplyNowContent } from "@/content/career-apply-now";

export function CareerApplyNowLeftColumn() {
  const { contact, heading } = careerApplyNowContent;

  return (
    <div className="left-col w-[31%] max-[1199px]:w-[40%] max-[991px]:mb-[60px] max-[991px]:w-full max-[767px]:mb-10">
      <h1 className="mb-8 border-b border-[#efefef] pb-8 text-[35px] font-bold leading-[46px] tracking-[-0.7px] text-[#090909] max-[1299px]:text-[30px] max-[1299px]:leading-[40px] max-[991px]:mb-5 max-[991px]:pb-5 max-[991px]:text-center max-[767px]:text-[27px] max-[767px]:leading-[38px] max-[320px]:text-[23px] max-[320px]:leading-[33px]">
        {heading}
      </h1>
      <div className="contact-us">
        <ul className="list-none p-0 max-[991px]:flex max-[991px]:flex-wrap max-[991px]:justify-center max-[991px]:gap-5 max-[767px]:mt-10">
          <li className="mb-12 flex items-center max-[991px]:mb-0 max-[767px]:min-w-[256px]">
            <span
              className="mr-4 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(97.18deg,#15c064_28.5%,#00d1ff_91.82%)] max-[991px]:mr-3.5 max-[991px]:h-[35px] max-[991px]:w-[35px]"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                className="h-auto w-[26px] max-[991px]:w-5"
                aria-hidden="true"
              >
                <g clipPath="url(#phone-clip-career)">
                  <path
                    d="M16.6364 15.5043L16.0684 16.0444C16.0684 16.0444 14.7164 17.3273 11.0275 13.8244C7.3386 10.3216 8.69057 9.03871 8.69057 9.03871L9.0476 8.69773C9.93019 7.86076 10.0138 6.5159 9.24359 5.53348L7.67067 3.5269C6.71692 2.3108 4.8756 2.14985 3.78329 3.18711L1.82337 5.04703C1.28283 5.56209 0.92081 6.22737 0.964503 6.96657C1.07685 8.85868 1.97317 12.9279 6.97159 17.6754C12.2734 22.7091 17.248 22.9094 19.2816 22.7282C19.9258 22.671 20.485 22.3586 20.9357 21.9294L22.7084 20.2459C23.9068 19.1097 23.5697 17.1604 22.0367 16.3651L19.6524 15.1264C18.6462 14.6042 17.4228 14.758 16.6364 15.5043Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="phone-clip-career">
                    <rect
                      width="25.875"
                      height="26.0129"
                      fill="white"
                      transform="translate(0.0625 0.116211)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="w-[calc(100%-62px)] max-[991px]:w-[calc(100%-51px)]">
              <span className="mb-[15px] block text-base font-semibold uppercase leading-normal text-[#090909] max-[991px]:mb-2.5 max-[991px]:text-sm">
                {contact.phone.label}
              </span>
              <a
                href={contact.phone.href}
                className="inline-block text-base font-medium leading-[23px] text-[#535353] transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red"
              >
                {contact.phone.number}
              </a>
            </span>
          </li>
          <li className="flex items-center max-[767px]:min-w-[256px]">
            <span
              className="mr-4 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(97.18deg,#15c064_28.5%,#00d1ff_91.82%)] max-[991px]:mr-3.5 max-[991px]:h-[35px] max-[991px]:w-[35px]"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                className="h-auto w-[26px] max-[991px]:w-5"
                aria-hidden="true"
              >
                <path
                  d="M1.07031 6.70667C1.07031 6.00005 1.34953 5.32237 1.84654 4.82272C2.34354 4.32306 3.01763 4.04236 3.7205 4.04236H22.2718C22.9747 4.04236 23.6488 4.32306 24.1458 4.82272C24.6428 5.32237 24.922 6.00005 24.922 6.70667V20.0282C24.922 20.7349 24.6428 21.4125 24.1458 21.9122C23.6488 22.4119 22.9747 22.6926 22.2718 22.6926H3.7205C3.01763 22.6926 2.34354 22.4119 1.84654 21.9122C1.34953 21.4125 1.07031 20.7349 1.07031 20.0282V6.70667Z"
                  fill="white"
                />
                <path d="M2 5.5L12.9991 13.3988L24 5.5" fill="white" />
                <path
                  d="M2 5.5L12.9991 13.3988L24 5.5"
                  stroke="url(#mail-gradient-career)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="mail-gradient-career"
                    x1="1.6656"
                    y1="6.45293"
                    x2="23.7214"
                    y2="14.1927"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.285" stopColor="#15C064" />
                    <stop offset="0.9182" stopColor="#00D1FF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="w-[calc(100%-62px)] max-[991px]:w-[calc(100%-51px)]">
              <span className="mb-[15px] block text-base font-semibold uppercase leading-normal text-[#090909] max-[991px]:mb-2.5 max-[991px]:text-sm">
                {contact.email.label}
              </span>
              <a
                href={contact.email.href}
                className="inline-block text-base font-medium leading-[23px] text-[#535353] transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red"
              >
                {contact.email.address}
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
