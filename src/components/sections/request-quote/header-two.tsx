import Image from "next/image";
import Link from "next/link";

import { GoBackButton } from "@/components/sections/request-quote/go-back-button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function HeaderTwo() {
  return (
    <header className="header-two relative z-10 w-full py-[34.5px] max-[991px]:py-[26.5px]">
      <Container className="min-[1300px]:!max-w-[1360px] min-[1300px]:!px-10">
        <div className="flex items-center justify-between">
          <Link
            className="inline-flex shrink-0 -translate-y-[2.5px] max-[991px]:translate-y-0"
            href="/"
            aria-label="Dynamic Dreamz home"
          >
            <Image
              className="h-auto w-[225px] max-[1199px]:w-[180px] max-[991px]:w-[225px] max-[767px]:w-[170px] max-[379px]:w-[150px]"
              src={siteConfig.logo}
              alt="Dynamic Dreamz - Shopify Platinum Partner"
              width={257}
              height={39}
              priority
            />
          </Link>
          <div className="go-back-btn">
            <GoBackButton />
          </div>
        </div>
      </Container>
    </header>
  );
}
