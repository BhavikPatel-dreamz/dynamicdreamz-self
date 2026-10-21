import type { CityWhyChooseBoxItem } from "@/components/sections/city-why-choose-boxes-section";
import type { EvaluationFrameworkItem } from "@/components/sections/shopify-plus-agency/evaluation-framework-section";
import type { ThemeCustomizationBox } from "@/components/sections/theme-customization-services-section";
import type { TeamBoxItem } from "@/components/sections/shopify-team-boxes-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export type AiServiceCardItem = {
  label: string;
  title: string;
  description: string;
  useCasesHeading: string;
  useCases: string;
};

export const aiServicesHero = {
  eyebrow: "AI Development Services",
  title: "AI Solutions That Make Your Business Smarter and More Efficient",
  subtitle:
    "We build practical AI tools that help your team answer faster, find information, automate repetitive work and improve customer experiences.",
  paragraphs: [
    "Dynamic Dreamz helps businesses, ecommerce brands and digital agencies add AI to the systems they already use. We can build customer assistants, internal knowledge tools, workflow automation, content tools and intelligent search, then connect them with your website, mobile app, ecommerce store or internal software.",
  ] as const,
  cta: "Discuss Your AI Use Case",
  ctaHref: "/book-a-discovery-call",
  secondaryCta: {
    label: "Explore AI Services",
    href: "#our_ai_services",
  },
  badges: [
    {
      name: "Shopify Platinum Partner",
      src: "/assets/proof/shopify-platinum-partner.svg",
      href: "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
      alt: "Dynamic Dreamz - Shopify Platinum Partner",
      width: 136,
      height: 44,
    },
    {
      name: "Clutch",
      src: "/assets/proof/clutch-rating.svg",
      href: "https://clutch.co/profile/dynamic-dreamz",
      alt: "Dynamic Dreamz on Clutch — 4.9 rating",
      width: 111,
      height: 44,
    },
    {
      name: "Trustpilot",
      src: "/assets/proof/trustpilot-rating.svg",
      href: "https://www.trustpilot.com/review/dynamicdreamz.com",
      alt: "Dynamic Dreamz on Trustpilot — 4.9 TrustScore",
      width: 148,
      height: 50,
    },
    {
      name: "Upwork",
      src: "/assets/proof/upwork-top-rated-plus.svg",
      href: "https://www.upwork.com/ag/dynamicdreamz/",
      alt: "Dynamic Dreamz — Upwork Top Rated Plus",
      width: 126,
      height: 54,
    },
  ] as const,
  image: {
    src: "/assets/services/ai-services/ai-development-services-hero.webp",
    alt: "AI Development Services Image",
    width: 1140,
    height: 940,
    className: "mix-blend-darken",
  },
};

export const aiServicesBrands = {
  heading: "Trusted by Leading Brands",
  slug: "ai-services",
  ariaLabel: "Trusted by Leading Brands",
};

export const aiServicesWhatWeBuild = {
  eyebrow: "What We Can Build",
  heading: "AI Tools Built around Real Business Needs",
  description:
    "You do not need to know which AI technology to choose. Tell us the problem you want to solve, and our team can recommend and build the right approach.",
  boxes: [
    {
      number: "01",
      title: "AI Assistants & Copilots",
      description:
        "Build assistants for customers or internal teams that can answer questions, summarize information, prepare drafts and guide users using approved business context.",
    },
    {
      number: "02",
      title: "RAG Knowledge Search",
      description:
        "Create retrieval-augmented generation (RAG) experiences that search documents, product information, SOPs, knowledge bases or other approved data before generating an answer.",
    },
    {
      number: "03",
      title: "AI Agents & Workflow Automation",
      description:
        "Develop AI agents that can interpret a request, use approved tools or APIs, maintain context and complete defined workflow steps with the right permissions and human checkpoints.",
    },
    {
      number: "04",
      title: "AI Content Workflows",
      description:
        "Create structured content generation pipelines for drafting, summarizing, rewriting, categorizing or preparing content while keeping review and approval under human control.",
    },
    {
      number: "05",
      title: "AI for Ecommerce & Product Discovery",
      description:
        "Help shoppers or teams find relevant products, compare options, understand product information or automate selected merchandising and support workflows.",
    },
    {
      number: "06",
      title: "Text & Document Intelligence",
      description:
        "Use natural language processing to summarize, classify, extract entities, detect sentiment or organize large volumes of text for faster business processing.",
    },
  ] satisfies readonly ThemeCustomizationBox[],
};

export const aiServicesDetailedGrid = {
  id: "our_ai_services",
  eyebrow: "Our AI Services",
  heading: "From customer-facing AI to internal business automation.",
  description:
    "We focus on useful business outcomes first. The technical architecture is selected based on your data, systems, users and the level of automation required.",
  items: [
    {
      label: "AI Service",
      title: "AI Assistants & Content Tools",
      description:
        "Help customers or teams ask questions, prepare drafts, summarize information and work faster using AI.",
      useCasesHeading: "Typical use cases",
      useCases:
        "Examples: customer assistants, internal copilots, content drafting, summaries and structured content workflows.",
    },
    {
      label: "AI Service",
      title: "AI Knowledge Search",
      description:
        "Let users search company documents, product information, policies or internal knowledge using natural-language questions.",
      useCasesHeading: "Typical use cases",
      useCases:
        "Useful for internal knowledge bases, support teams, documentation-heavy businesses and product information.",
    },
    {
      label: "AI Service",
      title: "AI Workflow Automation",
      description:
        "Automate repeatable business steps by letting AI understand a request, prepare information and work with approved tools or APIs.",
      useCasesHeading: "Typical use cases",
      useCases:
        "Useful for operational workflows, data preparation, task routing and controlled multi-step processes.",
    },
    {
      label: "AI Service",
      title: "Chatbots & Text Intelligence",
      description:
        "Create chat experiences and text-processing tools that can understand intent, summarize information, classify content and identify useful details.",
      useCasesHeading: "Typical use cases",
      useCases:
        "Useful for customer support, lead qualification, document processing and internal operations.",
    },
    {
      label: "AI Service",
      title: "AI Integration With Existing Systems",
      description:
        "Add AI to your current website, mobile app, ecommerce platform or internal software instead of rebuilding your entire system.",
      useCasesHeading: "Typical use cases",
      useCases:
        "We can connect AI with approved APIs, databases, business systems and ecommerce platforms where the required access is available.",
    },
    {
      label: "AI Service",
      title: "AI Quality, Safety & Cost Control",
      description:
        "Test how the AI behaves before launch and add the right limits, permissions, fallbacks and usage controls.",
      useCasesHeading: "Typical use cases",
      useCases:
        "Important for customer-facing AI, business-critical workflows and any feature that can take actions or access sensitive business information.",
    },
  ] satisfies readonly AiServiceCardItem[],
};

export const aiServicesShopifyEcommerce = {
  eyebrow: "AI for Shopify & Ecommerce",
  heading:
    "Use AI where it genuinely Improves the Shopping or Store Experience",
  description:
    "Dynamic Dreamz can add selected AI features to Shopify stores and ecommerce systems, especially where AI can improve product discovery, customer support, content work or internal store operations.",
  items: [
    {
      title: "AI Shopping & Product Assistants",
      description:
        "Let customers describe what they need in natural language and guide them toward relevant products, comparisons or supporting information.",
    },
    {
      title: "AI Support Using Store Knowledge",
      description:
        "Use approved product data, FAQs, policies and knowledge sources to answer common questions with escalation to a human where needed.",
    },
    {
      title: "AI Content & Merchandising Workflows",
      description:
        "Support product-copy preparation, summarization, categorization and campaign content while keeping review before publication.",
    },
    {
      title: "Custom Shopify App + AI Workflows",
      description:
        "Where the APIs allow it, connect AI to a custom Shopify app or supporting service for narrowly scoped store-management or customer-facing workflows.",
    },
  ] satisfies readonly TeamBoxItem[],
};

export const aiServicesHowWeWork = {
  eyebrow: "How We Work",
  heading: "Start with One Useful Problem, Prove it Works, then Expand",
  items: [
    {
      title: "Understand the Problem",
      description:
        "Define the users, workflow, expected outcome, available data and the actions the AI should and should not perform.",
    },
    {
      title: "Plan Data & Integrations",
      description:
        "Identify documents, APIs, databases, ecommerce data, business systems, permissions and security constraints.",
    },
    {
      title: "Build the First Working Version",
      description:
        "Create a focused proof of concept or MVP around the highest-value workflow instead of overbuilding the first release.",
    },
    {
      title: "Evaluate & Add Guardrails",
      description:
        "Test realistic scenarios, failure cases and edge cases, then add controls, human approval, fallbacks and limits where appropriate.",
    },
    {
      title: "Integrate, Launch & Improve",
      description:
        "Connect the AI to the live product or workflow, monitor usage and continue improving quality, cost and reliability.",
    },
    {
      title: "Measure Real-World Results",
      description:
        "Track usage, output quality, time saved, conversion impact and other relevant metrics to understand whether the solution is delivering the expected value.",
    },
    {
      title: "Refine & Optimize",
      description:
        "Use real-world feedback and performance data to improve prompts, workflows, integrations and user experience while reducing unnecessary cost and complexity.",
    },
    {
      title: "Scale What Works",
      description:
        "Expand successful workflows to more users, teams or use cases with the right infrastructure, documentation and processes to maintain quality and reliability.",
    },
  ] satisfies readonly EvaluationFrameworkItem[],
};

export const aiServicesReliableAi = {
  eyebrow: "Reliable AI",
  heading: "AI should be useful, controlled and ready for real users.",
  description:
    "Before launch, we review how the system behaves, what it can access, when a person should approve an action and how usage and cost should be controlled.",
  items: [
    {
      title: "Evaluation",
      description:
        "Test against realistic questions, expected answers, edge cases and failure conditions instead of judging quality from a few demos.",
    },
    {
      title: "Permissions & Human Review",
      description:
        "Limit what the AI can access or change, and require confirmation for actions that should stay under human control.",
    },
    {
      title: "Safety & Guardrails",
      description:
        "Use validation, policy checks, controlled context, fallback responses and escalation paths that match the risk of the use case.",
    },
    {
      title: "Usage & Cost Control",
      description:
        "Choose models and architectures intentionally, then use budgets, rate limits, caching and monitoring to keep usage manageable.",
    },
  ] satisfies readonly CityWhyChooseBoxItem[],
};

export const aiServicesWhyChoose = {
  eyebrow: "Why Dynamic Dreamz",
  heading:
    "AI Combined with the Development Experience Needed to Make it Useful",
  description:
    "AI usually sits inside a larger website, ecommerce store, mobile app or internal system. Our wider team can handle the surrounding UI/UX, frontend, backend, APIs, integrations, QA and deployment as part of the same project.",
  items: [
    {
      subtitle: "20+ Years in Digital Development",
      title: "Product & Engineering Foundation",
      description:
        "AI projects still need strong software architecture, frontend, backend, APIs, databases, QA and deployment. Those capabilities already sit within our wider development team.",
    },
    {
      subtitle: "150+ Company Experts",
      title: "Cross-functional Delivery",
      description:
        "AI features can be coordinated with web, ecommerce, mobile, UI/UX, QA and project teams instead of being developed in isolation.",
    },
    {
      subtitle: "Integration First",
      title: "Work with your Existing Stack",
      description:
        "We can connect AI with existing applications, APIs, business data and ecommerce workflows where the systems and permissions allow it.",
    },
    {
      subtitle: "Long-Term Support",
      title: "Improve after Launch",
      description:
        "AI behavior, data, models and costs change over time. We can continue evaluating and refining the solution after the first release.",
    },
  ] satisfies readonly CityWhyChooseBoxItem[],
};

export const aiServicesTechKeywords = {
  eyebrow: "Technical AI Capabilities",
  heading: "For technical teams evaluating implementation options.",
  introText: "Depending on the project, our AI development work can include",
  highlightedText:
    "LLM application development, retrieval-augmented generation (RAG), vector database pipelines, prompt engineering & evals, content generation pipelines, safety & guardrail systems, single & multi-agent orchestration, tool calling & function execution, role-based agent orchestration, memory & state management, agent evaluation harnesses, cost & rate-limit controls, sentiment analysis, text summarization, named entity recognition, chatbots, intent & topic classification and conversational design.",
};

export const aiServicesTestimonials = {
  eyebrow: "Client Stories",
  heading: "Don't Just Take Our Word For It",
  description:
    "Hear directly from the clients who have worked with Dynamic Dreamz across Shopify, ecommerce and long-term development engagements.",
};

export const aiServicesFaqs = {
  eyebrow: "AI Development FAQ",
  heading: "Questions Clients Ask before Starting an AI Project",
  description:
    "Simple answers about AI assistants, automation, knowledge search, integrations, Shopify, reliability, cost and delivery.",
  items: [
    {
      question: "What kind of AI solutions can Dynamic Dreamz build?",
      answer:
        "We can build AI assistants, knowledge-search experiences, retrieval-augmented generation (RAG) systems, AI agents, chatbots, content workflows and natural-language processing features. The right solution depends on the business problem, available data, required integrations and level of automation.",
    },
    {
      question: "What is the difference between an AI chatbot and an AI agent?",
      answer:
        "A chatbot mainly answers or guides a user through conversation. An AI agent can go further by using approved tools or APIs to complete defined steps, such as looking up information, creating a draft, updating a workflow or handing an action to another system. The actions and permissions should be intentionally limited and tested.",
    },
    {
      question: "Can an AI assistant answer using our own company data?",
      answer:
        "Yes. A common approach is retrieval-augmented generation (RAG), where the assistant retrieves relevant information from approved sources such as documents, knowledge bases, product data or internal systems before generating an answer. Access rules, source quality and evaluation are important parts of the implementation.",
    },
    {
      question:
        "Can you integrate AI into an existing website, app or internal system?",
      answer:
        "Yes. AI does not always require a new product. We can add AI capabilities to an existing web application, mobile app, ecommerce store or internal tool when the required APIs, permissions and data are available.",
    },
    {
      question: "Can you add AI features to Shopify stores?",
      answer:
        "Yes, where the use case makes sense. Examples include product and support assistants, guided product discovery, content workflows, internal store knowledge tools and AI-enabled app workflows. The implementation depends on Shopify’s supported APIs, the store setup, permissions and the third-party AI services involved.",
    },
    {
      question: "What is RAG and when is it useful?",
      answer:
        "RAG stands for retrieval-augmented generation. It is useful when an AI application needs to answer from a controlled set of business information rather than relying only on a model’s general knowledge. It is commonly used for internal knowledge assistants, support systems, policy or documentation search and product-information experiences.",
    },
    {
      question: "How do you reduce inaccurate or unsafe AI responses?",
      answer:
        "We use a combination of clear instructions, controlled context, permissions, output validation, evaluation test cases, guardrails and human review where appropriate. No generative AI system should be treated as error-free, so the level of control should match the risk of the use case.",
    },
    {
      question: "How do you control AI usage and cost?",
      answer:
        "We can design around usage limits, model selection, caching, rate limits, token budgets, tool permissions and logging. Cost controls are planned according to expected traffic and the type of tasks the AI system performs.",
    },
    {
      question: "How long does an AI project take?",
      answer:
        "A focused proof of concept can often be validated faster than a production system. Production timelines depend on the data sources, integrations, user experience, evaluation requirements, security controls and deployment environment. We normally recommend validating one high-value use case before expanding the scope.",
    },
    {
      question: "Do we have to use one specific AI model or provider?",
      answer:
        "No. The model and infrastructure should be chosen around the use case, data requirements, latency, quality, cost and deployment constraints. Where practical, we design the application layer so the business is not unnecessarily locked into one model.",
    },
  ] satisfies readonly FaqAccordionItem[],
};
