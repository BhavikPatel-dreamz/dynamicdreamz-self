import type { WhiteLabelReview } from "@/types/white-label-service";

export const whiteLabelReviewProfiles: readonly WhiteLabelReview[] = [
  {
    name: "Clutch",
    href: "https://clutch.co/profile/dynamic-dreamz",
    image: "/assets/reviews/clutch-4-9-rating.svg",
    alt: "Dynamic Dreamz on Clutch — 4.9 rating",
    width: 140,
    height: 49,
  },
  {
    name: "Trustpilot",
    href: "https://www.trustpilot.com/review/dynamicdreamz.com",
    image: "/assets/reviews/trustpilot-4-9-trustscore.svg",
    alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
    width: 190,
    height: 61,
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/ag/dynamicdreamz/",
    image: "/assets/reviews/upwork-top-rated-plus.svg",
    alt: "Dynamic Dreamz — Upwork Top Rated Plus",
    width: 127,
    height: 54,
  },
] as const;
