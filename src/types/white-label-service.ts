export type RichTextPart = {
  text: string;
  strong?: boolean;
};

export type RichText = string | readonly RichTextPart[];

export type WhiteLabelReview = {
  name: string;
  href: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

export type WhiteLabelHero = {
  title: string;
  accent?: string;
  lead: string;
  paragraphs: readonly RichText[];
  cta: string;
  illustration: string;
  illustrationAlt: string;
};

export type WhiteLabelStat = {
  value: string;
  label: string;
  icon: string;
};

export type WhiteLabelCard = {
  title: string;
  description: string;
};

export type WhiteLabelCapability = WhiteLabelCard & {
  icon: string;
  tools?: readonly string[];
};

export type WhiteLabelService = WhiteLabelCard & {
  icon: string;
};

export type WhiteLabelPlan = {
  name: string;
  price: string;
  bestFor: string;
};

export type WhiteLabelTool = {
  name: string;
  image: string;
};

export type WhiteLabelProcessStep = WhiteLabelCard;

export type WhiteLabelFaq = {
  question: string;
  answer: string;
  answerParts?: readonly RichTextPart[];
};

export type WhiteLabelFinalCta = {
  title: string;
  description: string;
  label: string;
};
