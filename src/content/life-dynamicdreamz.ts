export type LifeCultureValue = {
  title: string;
  description: string;
  icon: string;
  alt: string;
};

export type LifeFaq = {
  question: string;
  answer: string;
};

export type LifeGalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const lifeHero = {
  titleBeforeTeamwork: "Where",
  teamwork: "Teamwork",
  titleAfterTeamwork: "Takes the",
  lead: "Lead",
  description:
    "Dynamic Dreamz gives ample of opportunities to amplify your potential and let you maintain work life balance. We are deeply committed to create an inclusive workplace irrespective of caste, creed and religion. We are an equal opportunity employer.",
  image: {
    src: "/assets/life-dynamicdreamz/dynamic-dreamz-team.webp",
    alt: "Dynamic Dreamz team gathered at a company event",
    width: 1140,
    height: 641,
  },
} as const;

export const workCulture = {
  title: "Our Work Culture",
  description:
    "The work culture @ Dynamic Dreamz symbolizes a culture of openness, collaboration and trust. Every individual with a quest for knowledge has a voice to add in Dynamic Dreamz.",
  values: [
    {
      title: "Inclusivity",
      description:
        "A culture that values diversity and inclusivity ensures that everyone feels respected",
      icon: "/assets/life-dynamicdreamz/culture/inclusivity.svg",
      alt: "Inclusivity",
    },
    {
      title: "Flexibility",
      description:
        "Offering flexible work arrangements or schedules can accommodate diverse needs.",
      icon: "/assets/life-dynamicdreamz/culture/flexibility.svg",
      alt: "Flexible working arrangements",
    },
    {
      title: "Teamwork",
      description:
        "Promoting teamwork and collaboration over competition can lead to problem solving",
      icon: "/assets/life-dynamicdreamz/culture/teamwork.svg",
      alt: "Team collaboration",
    },
    {
      title: "Adaptability",
      description:
        "A culture that values adaptability and embraces change can thrive in environments.",
      icon: "/assets/life-dynamicdreamz/culture/adaptability.svg",
      alt: "Adaptability",
    },
    {
      title: "Collaborative Environment",
      description: "Creating spaces and platforms that encourage collaboration.",
      icon: "/assets/life-dynamicdreamz/culture/collaborative-environment.svg",
      alt: "Collaborative work environment",
    },
    {
      title: "Social Connections",
      description:
        "Facilitating opportunities for social interaction, such as team outings or company events.",
      icon: "/assets/life-dynamicdreamz/culture/social-connections.svg",
      alt: "Social connections between colleagues",
    },
  ] satisfies LifeCultureValue[],
} as const;

export const hiringCallout = {
  title: "Build Your Future with Us",
  description:
    "Your future is full of possibilities, and at Dynamic Dreramz, we provide the tools and opportunities to explore them. Build your future with us, where professional growth is interwoven with personal development.",
  cta: "current openings",
  href: "/career/",
  image: {
    src: "/assets/life-dynamicdreamz/we-are-hiring-illustration.webp",
    alt: "Dynamic Dreamz hiring conversation illustration",
    width: 605,
    height: 322,
  },
} as const;

export const lifeFaqSection = {
  title: "Your FAQs answered",
  description:
    "Here, we have addressed your concerns and queries that you want to know.",
  items: [
    {
      question: "What is the work culture like at Dynamic Dreamz?",
      answer:
        "At Dynamic Dreamz, our work culture is centered around collaboration, innovation, and respect. We foster an environment where creativity thrives and ideas are valued. Our teams work closely together, encouraging each other to think outside the box and push boundaries. We believe in a healthy work life balance, ensuring our employees feel supported both professionally and personally. Diversity and inclusivity are at the core of our values, creating a welcoming atmosphere for all.",
    },
    {
      question: "Are there opportunities for professional development and growth?",
      answer:
        "There are ample of opportunities for the professional development and growth as we provide our services to clients across spectrum of industry verticals and we leverage cutting-edge technologies hence as an employee you will get an extensive exposure of different domain and technologies.",
    },
    {
      question: "What kind of projects will I get to work on?",
      answer:
        "You will work on variety of web development, eCommerce, CMS and App development projects for the clients across the globe. Each project demands a new approach and poses unforeseen challenges to your analytical thinking.",
    },
    {
      question: "What are the regular working hours, and is there flexibility?",
      answer:
        "We are a five-days a week organization. Our team works in day shift as per IST. However, depending upon the client’s requirement, sometimes work schedule may get stretched till late evening. We do not work in night shift.",
    },
    {
      question: "Do you provide work from home on permanent basis?",
      answer:
        "Generally, we don’t offer work from home on permanent basis. We believe that working together at one place boosts cohesiveness among employees and ultimately it results in more productivity. However, we do allow temporary work from home facility in special cases such as accident or pregnancy.",
    },
    {
      question: "How does Dynamic Dreamz support employee health and wellbeing?",
      answer:
        "At Dynamic Dreamz, we have setup a recreational zone. In this zone we have kept indoor games such as Carrom, Fuss ball, Dart, Cards etc. For health point of view an automatic treadmill has been placed in the zone. For the entertainment of our team, an Android TV is available. Our employees rejuvenate in this recreational zone.",
    },
  ] satisfies LifeFaq[],
} as const;

export const lifeGallery: LifeGalleryImage[] = [
  {
    src: "/assets/life-dynamicdreamz/gallery/formal-team-resort-group-three.webp",
    alt: "Dynamic Dreamz colleagues dressed for a team event at a resort",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/life-dynamicdreamz/gallery/formal-team-resort-group-four.webp",
    alt: "Dynamic Dreamz colleagues together during a formal team outing",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/life-dynamicdreamz/gallery/leadership-team-event.webp",
    alt: "Dynamic Dreamz leadership team at a company event",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/life-dynamicdreamz/gallery/lakeside-leadership-outing.webp",
    alt: "Dynamic Dreamz leaders together on a lakeside outing",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/life-dynamicdreamz/gallery/employee-recognition-ceremony.webp",
    alt: "Dynamic Dreamz colleagues receiving awards at an employee recognition ceremony",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/life-dynamicdreamz/gallery/formal-team-resort-group-one.webp",
    alt: "Dynamic Dreamz colleagues at a formal resort gathering",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/life-dynamicdreamz/gallery/formal-team-resort-group-two.webp",
    alt: "Dynamic Dreamz team members gathered outdoors at a resort",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/movie-auditorium-group.webp",
    alt: "Dynamic Dreamz team gathered in a movie auditorium",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/movie-day-team.webp",
    alt: "Dynamic Dreamz colleagues enjoying movie day together",
    width: 668,
    height: 812,
  },
  {
    src: "/assets/team/events/team-bus-trip.webp",
    alt: "Dynamic Dreamz colleagues taking a team bus trip",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/white-feather-resort-team.webp",
    alt: "Dynamic Dreamz team members at White Feather Tent Resort",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/diwali-office-celebration.webp",
    alt: "Dynamic Dreamz colleagues celebrating Diwali at the office",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/team-at-work.webp",
    alt: "Dynamic Dreamz colleagues working together in the office",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/poolside-team-activity.webp",
    alt: "Dynamic Dreamz colleagues taking part in a poolside team activity",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/holi-team-celebration.webp",
    alt: "Dynamic Dreamz team celebrating Holi",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/team-pool-day.webp",
    alt: "Dynamic Dreamz colleagues enjoying a team pool day",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/dgv-resort-team-outing.webp",
    alt: "Dynamic Dreamz colleagues on a team resort outing",
    width: 668,
    height: 812,
  },
  {
    src: "/assets/team/events/team-swimming-activity.webp",
    alt: "Dynamic Dreamz colleagues enjoying a swimming activity",
    width: 334,
    height: 406,
  },
  {
    src: "/assets/team/events/lakeside-team-outing.webp",
    alt: "Dynamic Dreamz colleagues together on a lakeside outing",
    width: 668,
    height: 812,
  },
];
