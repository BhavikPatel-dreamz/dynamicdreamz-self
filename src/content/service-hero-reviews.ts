export const serviceHeroReviewLogos = {
  Clutch: {
    src: "/assets/reviews/clutch-wordmark.svg",
    width: 57,
    height: 19,
  },
  Upwork: {
    src: "/assets/reviews/upwork-wordmark.svg",
    width: 64,
    height: 19,
  },
  GoodFirms: {
    src: "/assets/reviews/goodfirms_review_services.svg",
    width: 86,
    height: 19,
  },
} as const;

export type ServiceHeroReviewPlatform = keyof typeof serviceHeroReviewLogos;
