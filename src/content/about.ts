import { companyFacts } from "@/data/company";

export const aboutSectionCopy = {
  counterDigitPlaceholder: "8",
  deliveryTitle: "A Team that always delivers",
  foundersEyebrow: "Our Team",
  foundersTitle: "The People Behind Dynamic Dreamz",
  foundersDescription: [
    "Leaders who drive creativity and technical excellence.",
    "Turning every project into a smooth, successful digital experience.",
  ],
  timelineTitle: "How we started",
  timelineDescription:
    "From three engineers building websites in 2006 to a 150+ expert technology team serving clients worldwide, Dynamic Dreamz has grown through long-term relationships, continuous learning and expansion across ecommerce, web and mobile development.",
  valuesTitle: "Our Core Values",
  valuesDescription:
    "Integrity, adaptability, transparency, client focus, user-centred thinking and quality guide how we work with clients and with each other.",
} as const;

export type AboutPerson = {
  name: string;
  role: string;
  image: string;
  alt: string;
  biography?: string;
  linkedIn?: string;
};

export const aboutHero = {
  title: "Agile. Adept. Accurate.",
  description:
    "Dynamic Dreamz is a team of 150+ designers, developers, project managers and QA specialists helping businesses and digital agencies build ecommerce stores, websites, mobile apps and custom platforms. Since 2006, we have combined design, development and technology expertise to deliver reliable digital solutions for clients worldwide.",
  statistics: [
    { label: "Years of Experience", value: companyFacts.yearsOfExperience.display },
    { label: "Projects", value: companyFacts.projectsCompleted.display },
    { label: "Experts", value: companyFacts.experts.display },
  ],
} as const;

export const aboutStory = {
  title: "Hey, We Are Dynamic Dreamz",
  description:
    "We are a 150+ strong team of designers, developers, project managers and QA specialists working together to turn digital ideas into reliable websites, ecommerce experiences, mobile apps and custom solutions.",
  caption: "Inside Dynamic Dreamz — a look at our office, team and everyday work.",
  videoId: "0GEJ928rBnM",
  videoTitle: "Meet the team at Dynamic Dreamz",
} as const;

export const milestones = [
  {
    year: "2006",
    description:
      "Three young engineers started developing websites for an overseas client out of sheer passion. With no formal workplace at the beginning, that first project became the foundation of Dynamic Dreamz.",
    image: "/assets/about/timeline/established-2006.webp",
    alt: "Three engineers establishing Dynamic Dreamz in 2006",
    width: 312,
    height: 232,
  },
  {
    year: "2008",
    description:
      "As the work gained recognition and more clients came on board, Dynamic Dreamz hired its first two employees and moved into a small office in Surat, India.",
    image: "/assets/about/timeline/growth-2008.webp",
    alt: "Dynamic Dreamz team growth and first Surat office in 2008",
    width: 285,
    height: 190,
  },
  {
    year: "2012",
    description:
      "The company continued to grow across projects, clients and team size, and Dynamic Dreamz collaborated with OneIT in Australia.",
    image: "/assets/about/timeline/collaboration-2012.webp",
    alt: "Dynamic Dreamz collaboration with OneIT Australia in 2012",
    width: 324,
    height: 172,
  },
  {
    year: "2015",
    description:
      "Dynamic Dreamz moved into a more spacious office in central Surat as its international client base expanded across the USA, Canada, Europe and Australia.",
    image: "/assets/about/timeline/surat-office-2015.webp",
    alt: "Dynamic Dreamz moving to a larger Surat office in 2015",
    width: 264,
    height: 190,
  },
  {
    year: "2020",
    description:
      "Dynamic Dreamz established an additional development centre in Ahmedabad, India, expanding its development capacity and team footprint.",
    image: "/assets/about/timeline/ahmedabad-office-2020.svg",
    alt: "Dynamic Dreamz Ahmedabad development center established in 2020",
    width: 337,
    height: 193,
  },
  {
    year: "2023",
    description:
      "Dynamic Dreamz was recognized as one of the Top 10 Shopify developers on Upwork, adding another milestone to its long-standing global freelance and agency presence.",
    image: "/assets/about/timeline/top-shopify-developer-2023.webp",
    alt: "Dynamic Dreamz recognized as a top Shopify developer in 2023",
    width: 201,
    height: 170,
  },
  {
    year: "2024",
    description:
      "Dynamic Dreamz proudly reached a major company milestone with a 150+ strong expert team driving innovation and client success. In the same year, Dynamic Dreamz also became a <strong>Shopify Plus Partner</strong>.",
    image: "/assets/about/timeline/expert-team-2024.svg",
    alt: "Dynamic Dreamz team growing to more than 150 experts in 2024",
    width: 421,
    height: 219,
  },
  {
    year: "2025",
    description:
      "Dynamic Dreamz advanced to <strong>Shopify Premier Partner</strong> status, marking another step in the company’s ecommerce journey while continuing to grow its wider web, mobile and technology capabilities.",
    image: "/assets/about/timeline/shopify-partner-2025.svg",
    alt: "Dynamic Dreamz becoming a Shopify Premier Partner in 2025",
    width: 421,
    height: 219,
  },
  {
    year: "2026",
    description:
      "Dynamic Dreamz became a <strong>Shopify Platinum Partner</strong>, while expanding its capabilities across ecommerce, WordPress and WooCommerce, mobile apps, full-stack development, AI solutions and white-label agency partnerships.",
    image: "/assets/about/timeline/shopify-partner-2025.svg",
    alt: "Dynamic Dreamz becoming a Shopify Platinum Partner in 2026",
    width: 421,
    height: 219,
  },
  {
    year: "",
    description: "",
    image: "/assets/about/timeline/more-milestones-ahead.webp",
    alt: "Dynamic Dreamz journey toward future milestones",
    width: 424,
    height: 158,
  },
] as const;

export const founders: AboutPerson[] = [
  {
    name: "Virag Shah",
    role: "Co-Founder & CEO",
    biography:
      "A marketing maverick. Virag is growth hungry. He never settles down but always looks for the next.",
    image: "/assets/about/team/virag-shah.jpg",
    alt: "Virag Shah, Co-Founder and CEO of Dynamic Dreamz",
    linkedIn: "https://in.linkedin.com/in/virag-shah-950b9b102",
  },
  {
    name: "Gaurav Shah",
    role: "Co-Founder & CEO",
    biography:
      "A razor sharp analytic. Gaurav is spot-on in assessing business intricacy and comes up with unique solutions.",
    image: "/assets/about/team/gaurav-shah.jpg",
    alt: "Gaurav Shah, Co-Founder and CEO of Dynamic Dreamz",
    linkedIn: "https://in.linkedin.com/in/dynamicdreamz?trk=org-employees",
  },
  {
    name: "Sanjay Patel",
    role: "Co-Founder & CTO",
    biography:
      "A die hard techie. Sanjay is passionate to embrace latest technology to transform clients’ business.",
    image: "/assets/about/team/sanjay-patel.jpg",
    alt: "Sanjay Patel, Co-Founder and CTO of Dynamic Dreamz",
    linkedIn: "https://www.linkedin.com/in/sanjay-patel-799272137/",
  },
];

export const keyManagers: AboutPerson[] = [
  {
    name: "Mr. Tejal Parekh",
    role: "Operational Manager",
    image: "/assets/about/team/tejal-parekh.jpg",
    alt: "Tejal Parekh, Operational Manager at Dynamic Dreamz",
  },
  {
    name: "Mr. Rishabh Shah",
    role: "Project Manager",
    image: "/assets/about/team/rishabh-shah.jpg",
    alt: "Rishabh Shah, Project Manager at Dynamic Dreamz",
  },
  {
    name: "Ms. Mahima Vyas",
    role: "HR Manager",
    image: "/assets/about/team/mahima-vyas.jpg",
    alt: "Mahima Vyas, HR Manager at Dynamic Dreamz",
  },
  {
    name: "Mr. Ravindra Chauhan",
    role: "DevOps & Systems Manager",
    image: "/assets/about/team/ravindra-chauhan.jpg",
    alt: "Ravindra Chauhan, DevOps and Systems Manager at Dynamic Dreamz",
  },
];

export const departmentLeaders: AboutPerson[] = [
  { name: "Mr. Mukesh Patel", role: "Head of Marketing & Growth", image: "/assets/about/team/mukesh-patel.jpg", alt: "Mukesh Patel, Head of Marketing and Growth at Dynamic Dreamz" },
  { name: "Mr. Manish Patel", role: "Client Relationship Manager", image: "/assets/about/team/manish-patel.jpg", alt: "Manish Patel, Client Relationship Manager at Dynamic Dreamz" },
  { name: "Mr. Umesh Kanani", role: "Head of Shopify Development", image: "/assets/about/team/umesh-kanani.jpg", alt: "Umesh Kanani, Head of Shopify Development at Dynamic Dreamz" },
  { name: "Mr. Bhavik Patel", role: "Head of Full Stack Development", image: "/assets/about/team/bhavik-patel.jpg", alt: "Bhavik Patel, Head of Full Stack Development at Dynamic Dreamz" },
  { name: "Mr. Satish Khairnar", role: "Creative Head", image: "/assets/about/team/satish-khairnar.jpg", alt: "Satish Khairnar, Creative Head at Dynamic Dreamz" },
  { name: "Mr. Dilip Kaklotar", role: "Head of Mobile App Development", image: "/assets/about/team/dilip-kaklotar.jpg", alt: "Dilip Kaklotar, Head of Mobile App Development at Dynamic Dreamz" },
  { name: "Mr. Vijay Borad", role: "Head of PHP Development", image: "/assets/about/team/vijay-borad.jpg", alt: "Vijay Borad, Head of PHP Development at Dynamic Dreamz" },
  { name: "Mr. Jevin Amareliya", role: "Head of WordPress Development", image: "/assets/about/team/jevin-amareliya.jpg", alt: "Jevin Amareliya, Head of WordPress Development at Dynamic Dreamz" },
  { name: "Mr. Ashwin Karena", role: "Team Leader", image: "/assets/about/team/ashwin-karena.jpg", alt: "Ashwin Karena, Team Leader at Dynamic Dreamz" },
  { name: "Mr. Virag Patel", role: "Team Leader", image: "/assets/about/team/virag-patel.jpg", alt: "Virag Patel, Team Leader at Dynamic Dreamz" },
  { name: "Mr. Kevin Desai", role: "Team Leader", image: "/assets/about/team/kevin-desai.jpg", alt: "Kevin Desai, Team Leader at Dynamic Dreamz" },
  { name: "Mr. Taufik Taibani", role: "Team Leader", image: "/assets/about/team/taufik-taibani.jpg", alt: "Taufik Taibani, Team Leader at Dynamic Dreamz" },
  { name: "Ms. Arzoo Dhingani", role: "Team Leader", image: "/assets/about/team/arzoo-dhingani.jpg", alt: "Arzoo Dhingani, Team Leader at Dynamic Dreamz" },
  { name: "Mr. Bhaumil Mehta", role: "Team Leader", image: "/assets/about/team/bhaumil-mehta.jpg", alt: "Bhaumil Mehta, Team Leader at Dynamic Dreamz" },
  { name: "Mr. Vikas Gamit", role: "Magento Team Leader", image: "/assets/about/team/vikas-gamit.jpg", alt: "Vikas Gamit, Magento Team Leader at Dynamic Dreamz" },
  { name: "Ms. Hinal Tailor", role: "Quality Assurance Lead", image: "/assets/about/team/hinal-tailor.jpg", alt: "Hinal Tailor, Quality Assurance Lead at Dynamic Dreamz" },
];

export const coreValues = [
  {
    title: "Integrity",
    description:
      "Uphold unwavering ethics, ensuring transparency, honesty and accountability in all interactions.",
    iconName: "integrity",
    icon: "/assets/about/values/integrity.svg",
  },
  {
    title: "Adaptability",
    description:
      "Embrace change, follow industry trends and empower the team to deliver effective solutions.",
    iconName: "adaptability",
    icon: "/assets/about/values/adaptability.svg",
  },
  {
    title: "Transparency",
    description:
      "Maintain open communication internally and externally, providing clarity on processes and progress.",
    iconName: "transparency",
    icon: "/assets/about/values/transparency.svg",
  },
  {
    title: "Client Centric Approach",
    description:
      "Tailor solutions to client goals and prioritize satisfaction through practical, personalized experiences.",
    iconName: "client-centric-approach",
    icon: "/assets/about/values/client-centric-approach.svg",
  },
  {
    title: "User Centric Design",
    description:
      "Prioritize user experience through intuitive, user-friendly designs that create positive and seamless experiences.",
    iconName: "user-centric-design",
    icon: "/assets/about/values/user-centric-design.svg",
  },
  {
    title: "Quality Assurance",
    description:
      "Maintain high quality through structured testing focused on performance, security, reliability and consistent user experience.",
    iconName: "quality-assurance",
    icon: "/assets/about/values/quality-assurance.svg",
  },
] as const;
