import Image from "next/image";

import { Container } from "@/components/ui/container";
import { lifeHero } from "@/content/life-dynamicdreamz";

import styles from "./life-hero-section.module.css";

function TeamworkUnderline() {
  return (
    <svg
      aria-hidden="true"
      className="absolute top-full left-0 w-full"
      viewBox="0 0 281 16"
      width="281"
      height="16"
    >
      <defs>
        <linearGradient
          id="life-teamwork-gradient"
          x1="-2.21043"
          y1="3.40919"
          x2="29.2086"
          y2="97.2837"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.285" stopColor="#15c064" />
          <stop offset="0.9182" stopColor="#00d1ff" />
        </linearGradient>
      </defs>
      <path
        className={styles.underlinePath}
        data-life="teamwork-line"
        d="M2 13.6808C47 4.18073 160 -3.81953 279 7.68093"
        fill="none"
        stroke="url(#life-teamwork-gradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export type LifeHeroSectionProps = {
  titleBeforeTeamwork?: string;
  teamwork?: string;
  titleAfterTeamwork?: string;
  lead?: string;
  description?: string;
  image?: { url?: string | null; alt?: string | null } | string | null;
  imageAlt?: string;
};

export function LifeHeroSection({
  titleBeforeTeamwork = lifeHero.titleBeforeTeamwork,
  teamwork = lifeHero.teamwork,
  titleAfterTeamwork = lifeHero.titleAfterTeamwork,
  lead = lifeHero.lead,
  description = lifeHero.description,
  image,
  imageAlt,
}: LifeHeroSectionProps = {}) {
  const imageUrl =
    (typeof image === "object" && image?.url) ||
    (typeof image === "string" ? image : lifeHero.image.src);
  const altText =
    imageAlt ||
    (typeof image === "object" && image?.alt ? image.alt : lifeHero.image.alt);

  return (
    <section
      className="overflow-hidden bg-white pt-[230px] pb-0 max-[992px]:pt-[140px]"
      data-life="hero"
    >
      <Container>
        <div className="mx-auto max-w-[900px] text-center">
          <h1 className="mb-6 inline-block text-[50px] leading-[60px] font-normal tracking-normal text-ink max-[992px]:text-[40px] max-[992px]:leading-[60px] max-[767px]:text-[30px]">
            {titleBeforeTeamwork}{" "}
            <span className="relative whitespace-nowrap">
              {teamwork}
              <TeamworkUnderline />
            </span>{" "}
            {titleAfterTeamwork}{" "}
            <span className="relative whitespace-nowrap">
              {lead}
              <Image
                aria-hidden="true"
                alt=""
                className={`${styles.leaf} absolute top-[-23px] right-[-19px] h-[38px] w-[31px] max-[767px]:top-[-11px] max-[767px]:right-[-9px] max-[767px]:h-[22px] max-[767px]:w-[14px]`}
                src="/assets/life-dynamicdreamz/teamwork-leaf.svg"
                width={31}
                height={38}
              />
            </span>
          </h1>
          <p className="text-[16px] leading-[28px] font-medium text-muted max-[992px]:text-base max-[992px]:leading-[30.4px]">
            {description}
          </p>
        </div>

        <div
          className="mt-[50px] pb-[5px] max-[992px]:pb-[10.4px]"
          data-life="team-image"
        >
          <Image
            className="h-auto w-full rounded-[15px]"
            src={imageUrl}
            alt={altText}
            width={lifeHero.image.width}
            height={lifeHero.image.height}
            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 991px) 680px, (max-width: 1399px) 1140px, 1320px"
            preload
          />
        </div>
      </Container>
    </section>
  );
}
