import type { PageContent } from "@/content/types";
import seoConcept from "@/assets/seo-concept.jpg.asset.json";
import entrepreneur from "@/assets/entrepreneur.jpg.asset.json";
import laptopWork from "@/assets/laptop-work.jpg.asset.json";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import aiSearch from "@/assets/ai-search.jpg.asset.json";

const crumb = (label: string, to: string) => ({ label, to });
const base = [crumb("Home", "/"), crumb("SEO Services", "/seo-services")];

export const seoServicesHub: PageContent = {
  slug: "/seo-services",
  title: "SEO Services for Business Websites | AVR Web Consulting",
  h1: "SEO services that earn rankings in Google and citations in AI answers",
  description:
    "Improve your rankings with SEO services from AVR Web Consulting: audits, on-page optimization, technical fixes and backlinks. Request a free audit.",
  keywords:
    "search engine optimization service, search optimization services, seo optimization companies",
  eyebrow: "SEO Services",
  serviceName: "Search Engine Optimization",
  answer:
    "AVR Web Consulting provides four core SEO services: global SEO for multi-country organic growth, local SEO for map and near-me visibility, technical SEO for crawlability and Core Web Vitals, and GEO targeting for city-level rankings. Packages start at $200 per month with manual, penalty-safe execution.",
  hero: {
    image: "/images/seo-typing-laptop.webp",
    imageAlt: "SEO Services — Global, Local, Technical & GEO | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Starting price", value: "$200/mo" },
    { label: "Citations live in", value: "3 days" },
    { label: "Technical fixes", value: "1 week" },
    { label: "Markets served", value: "India + Global" },
  ],
  breadcrumb: [crumb("Home", "/"), crumb("SEO Services", "/seo-services")],
  related: [
    { label: "Dental SEO services", to: "/seo-services/dental-seo-services" },
    { label: "Locksmith SEO", to: "/seo-services/locksmith-seo" },
    { label: "Car dealership SEO", to: "/seo-services/car-dealership-seo" },
    { label: "Real estate SEO", to: "/seo-services/real-estate-seo-services" },
    { label: "AI SEO services", to: "/ai-seo" },
    { label: "Pricing", to: "/pricing" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for SEO Services — Global, Local, Technical & GEO",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "what-you-get",
      heading: "What our SEO services include",
      blocks: [
        {
          kind: "paragraph",
          text: "Every engagement starts with a full technical and content audit, then moves into a prioritised roadmap. We do not sell traffic for its own sake — the goal is qualified visibility: the queries that produce enquiries, calls and orders for your business, in the countries and cities where you actually sell.",
        },
        {
          kind: "list",
          title: "Included in every SEO retainer",
          items: [
            "Technical audit covering crawlability, indexation, site speed and Core Web Vitals",
            "Keyword and intent mapping across informational, commercial and transactional queries",
            "On-page optimisation: titles, meta descriptions, headings, internal links, schema markup",
            "Content briefs and answer-first content production for priority pages",
            "Manual link building and citation placement — no PBNs, no automated spam",
            "Monthly reporting with rankings, traffic, conversions and AI-answer visibility tracking",
          ],
        },
        {
          kind: "callout",
          title: "Hybrid by default",
          text: "Every SEO retainer now includes baseline AEO and LLM optimisation — schema, answer blocks and entity consistency — because a growing share of searches ends in an AI summary rather than a blue link.",
        },
      ],
    },
    {
      id: "service-lines",
      heading: "Choose the SEO service that matches your goal",
      blocks: [
        {
          kind: "table",
          head: ["Service", "Best for", "Primary outcome"],
          rows: [
            [
              "Global SEO",
              "SaaS, e-commerce and exporters selling in multiple countries",
              "Organic revenue across US, UK, UAE and Europe",
            ],
            [
              "Local SEO",
              "Clinics, showrooms, service providers with a service area",
              "Map pack rankings, calls and direction requests",
            ],
            [
              "Technical SEO",
              "Large or legacy sites with crawl and speed problems",
              "Clean indexation and faster page experience",
            ],
            [
              "GEO Targeting SEO",
              "Multi-city operators in Indian metros",
              "City-level ranking for 'service + city' queries",
            ],
            [
              "Dental SEO",
              "Dental clinics, practices, orthodontists and cosmetic dentists",
              "Local patient appointment bookings & procedure visibility",
            ],
            [
              "Locksmith SEO",
              "Emergency locksmiths and mobile lock technicians",
              "Immediate high-urgency call enquiries & local map visibility",
            ],
            [
              "Car Dealership SEO",
              "New & used car dealers and automotive retailers",
              "VDP inventory search rankings & test-drive leads",
            ],
            [
              "Real Estate SEO",
              "Real estate agents, brokerages and property developers",
              "Hyperlocal organic search traffic & buyer/seller enquiries",
            ],
          ],
        },
        {
          kind: "paragraph",
          text: "Most clients combine two: technical SEO to remove the ceiling, then either local or global depending on where revenue comes from. If you are unsure, our audit tells you which lever moves first.",
        },
      ],
    },
    {
      id: "process",
      heading: "Our SEO process",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Audit (week 1)",
              text: "Technical crawl, content inventory, backlink review, competitor gap analysis and AI-answer baseline.",
            },
            {
              title: "Roadmap (week 1–2)",
              text: "A prioritised list ranked by impact and effort, with owners and dates. You approve before work starts.",
            },
            {
              title: "Fix and optimise (week 2–4)",
              text: "Technical fixes shipped, priority pages rewritten answer-first, schema deployed, internal links rebuilt.",
            },
            {
              title: "Build authority (ongoing)",
              text: "Manual citations, guest posts and digital PR that earn real editorial links and AI-citable mentions.",
            },
            {
              title: "Measure and iterate (monthly)",
              text: "Rankings, organic sessions, conversions and AI visibility reviewed monthly; the roadmap is re-prioritised each cycle.",
            },
          ],
        },
      ],
    },
    {
      id: "why-avr",
      heading: "Why businesses choose AVR Web Consulting",
      blocks: [
        {
          kind: "list",
          items: [
            "Affordable, transparent pricing — SEO from $200/month, local SEO from $100/month, guest posts from $20",
            "Fast delivery: citations live in 3 days, technical fixes shipped within a week",
            "100% manual work — every citation, link and guest post is placed by a human",
            "Hybrid expertise: classic SEO plus AEO, GEO, LLM SEO and LLMO under one roof",
            "Global plus local: teams experienced with US, UK, UAE, European and Indian search markets",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much do your SEO services cost?",
      answer:
        "SEO retainers start at $200 per month for global SEO and $100 per month for local SEO. Guest posts start at $20 per placement. Final pricing depends on the number of target keywords, languages and markets; you get a fixed monthly figure before work begins.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "Technical fixes and on-page improvements often move rankings within 4–8 weeks. Competitive commercial keywords typically take 4–6 months of consistent content and link building. Local SEO and citation work usually shows movement in the map pack within 30–60 days.",
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer:
        "No credible agency can guarantee a specific position, because ranking systems are controlled by Google and AI engines. We guarantee deliverables, timelines and transparent reporting, and we track ranking, traffic and conversion trends so progress is measurable.",
    },
    {
      question: "Which countries do you provide SEO services in?",
      answer:
        "We serve clients globally, with focus markets in the United States, United Kingdom, United Arab Emirates and Europe, plus national coverage across India including Delhi, Mumbai, Chennai, Bangalore, Hyderabad and Visakhapatnam.",
    },
    {
      question: "Is your link building safe?",
      answer:
        "Yes. All links and citations are placed manually on real, indexed sites with genuine traffic. We do not use private blog networks, automated tools or link farms, which is why our clients avoid manual actions and algorithmic penalties.",
    },
    {
      question: "Do you work with small businesses and startups?",
      answer:
        "Yes. A large part of our client base is small businesses, local service providers and early-stage startups. Local SEO from $100 per month is designed specifically for businesses that need enquiries rather than vanity traffic.",
    },
    {
      question: "What reporting do you provide?",
      answer:
        "You receive a monthly report covering keyword rankings, organic sessions, conversions, links and citations built, technical health and AI-answer visibility, along with a short written summary of what changed and what happens next.",
    },
    {
      question: "Can you fix an existing site or do you need to rebuild it?",
      answer:
        "In most cases we optimise the existing site. Rebuilds are only recommended when the platform blocks indexation, speed or schema — and we will tell you plainly if that is the case rather than selling a redesign by default.",
    },
    {
      question: "Do your SEO packages include content writing?",
      answer:
        "Yes. Content briefs and answer-first article production are included in all standard retainers. Volume depends on the package; additional articles and landing pages can be added at any time.",
    },
    {
      question: "How is SEO different from AI SEO?",
      answer:
        "Classic SEO optimises for ranked links in Google and Bing. AI SEO — AEO, GEO, LLM SEO and LLMO — optimises for being quoted inside AI answers from ChatGPT, Gemini, Perplexity, Copilot and Google AI Overviews. We run both together because users now move between them.",
    },
  ],
};

export const globalSeo: PageContent = {
  slug: "/seo-services/global-seo",
  title: "Organic SEO Agency and Consultant | AVR Web Consulting",
  h1: "Global SEO services for multi-country organic growth",
  description:
    "Build steady, long-term search visibility without paid ads. Our organic SEO agency focuses on content, on-page work and quality backlinks. Get a free audit.",
  keywords: "organic seo agency, organic seo consultant",
  eyebrow: "SEO Services",
  serviceName: "Global SEO",
  answer:
    "Global SEO makes one website rank in several countries at once. AVR Web Consulting builds the country and language architecture, hreflang tags, localised keyword sets and market-specific links required for a single domain to compete in US, UK, UAE and European search results.",
  hero: {
    image: "/images/digital-marketing.webp",
    imageAlt: "Global SEO Services for US, UK, UAE & Europe | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "From", value: "$200/mo" },
    { label: "Markets", value: "US · UK · UAE · EU" },
    { label: "Audit delivery", value: "5 days" },
    { label: "Work type", value: "100% manual" },
  ],
  breadcrumb: [...base, crumb("Global SEO", "/seo-services/global-seo")],
  related: [
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "LLM SEO", to: "/ai-seo/llm-seo" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Global SEO Services for US, UK, UAE & Europe",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "definition",
      heading: "What is global SEO?",
      blocks: [
        {
          kind: "paragraph",
          text: "Global SEO — also called international SEO — is the practice of structuring and optimising a website so it can rank in more than one country or language. It combines a technical layer (URL structure, hreflang, indexing rules), a content layer (localised keywords, currency, spelling, examples) and an authority layer (links and mentions from each target market).",
        },
        {
          kind: "paragraph",
          text: "The mistake most brands make is translating pages and hoping Google sorts it out. Search intent differs by market: a UK buyer searches 'SEO agency pricing', a US buyer searches 'SEO agency cost', and a UAE buyer often searches in English but expects local currency and WhatsApp contact. Global SEO is intent research repeated per market.",
        },
      ],
    },
    {
      id: "architecture",
      heading: "Choosing the right international architecture",
      blocks: [
        {
          kind: "table",
          head: ["Structure", "Example", "When we recommend it"],
          rows: [
            [
              "ccTLD",
              "example.co.uk",
              "Strong local trust needed, budget for separate authority building",
            ],
            [
              "Subdirectory",
              "example.com/uk/",
              "Most clients — consolidates authority, cheapest to maintain",
            ],
            ["Subdomain", "uk.example.com", "Separate tech stacks or regional teams"],
            ["Parameter", "example.com?loc=uk", "Not recommended — weak signals and crawl waste"],
          ],
        },
        {
          kind: "callout",
          title: "Our default recommendation",
          text: "Subdirectories with correct hreflang and a clear canonical policy. It concentrates link equity, is cheapest to run, and is the fastest structure to get indexed correctly.",
        },
      ],
    },
    {
      id: "deliverables",
      heading: "What is included in a global SEO engagement",
      blocks: [
        {
          kind: "list",
          items: [
            "Market prioritisation based on demand, competition and your fulfilment capacity",
            "Country and language keyword research with local search volume and intent labels",
            "hreflang implementation and validation, including x-default handling",
            "Localised on-page optimisation: titles, meta, headings, currency, spelling, units",
            "Duplicate-content control across similar English variants (US/UK/AU)",
            "Country-specific link building and digital PR",
            "Geo-targeted schema, Organization data and consistent NAP across markets",
            "Search Console property setup and per-country performance reporting",
          ],
        },
      ],
    },
    {
      id: "ai-layer",
      heading: "Global SEO in the age of AI answers",
      blocks: [
        {
          kind: "paragraph",
          text: "AI assistants answer country-specific questions using region-aware retrieval. If your UK page has no pricing in GBP, no UK entity signals and no UK citations, an LLM will summarise a competitor instead. We add answer blocks, localised FAQ schema and per-market entity consistency so your pages are retrievable in every market you serve.",
        },
        {
          kind: "list",
          title: "AI signals we add per market",
          items: [
            "Answer-first summary paragraphs in local phrasing",
            "FAQPage schema with market-specific questions",
            "Consistent brand, address and service naming across all locales",
            "Citable statistics and clearly attributed claims",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the difference between global SEO and local SEO?",
      answer:
        "Global SEO targets audiences in multiple countries through language and country signals, while local SEO targets buyers near a physical location through Google Business Profile, citations and map-pack signals. Many clients run both: local for their home city and global for export markets.",
    },
    {
      question: "Do I need separate websites for each country?",
      answer:
        "Usually not. For most businesses a single domain with country subdirectories and correct hreflang performs better than several weak websites, because all links and authority accumulate on one domain.",
    },
    {
      question: "How does hreflang work?",
      answer:
        "Hreflang tags tell search engines which language and regional version of a page to show. Each version must reference every other version, including itself, and pair with a self-referencing canonical. Incorrect or one-way hreflang is one of the most common international SEO faults we fix.",
    },
    {
      question: "How long does global SEO take?",
      answer:
        "Architecture and technical work is typically complete in 3–6 weeks. Ranking traction in a new country usually appears from month three, and compounds from month six as market-specific links and content accumulate.",
    },
    {
      question: "Can you handle non-English markets?",
      answer:
        "Yes. We manage localisation with native reviewers for major European languages and Arabic, and we always localise intent and examples rather than machine-translating existing pages.",
    },
    {
      question: "How much does global SEO cost?",
      answer:
        "Global SEO retainers start at $200 per month for a single market and scale with the number of countries, languages and pages. You receive a fixed monthly price after the audit, with no long lock-in contracts.",
    },
    {
      question: "Will duplicate English pages hurt my rankings?",
      answer:
        "Not if handled correctly. Near-duplicate US, UK and AU pages need hreflang plus meaningful localisation — pricing, spelling, examples and contact details — so each version is genuinely useful for its market.",
    },
    {
      question: "Do you build links in each target country?",
      answer:
        "Yes. Local relevance matters, so we place manual guest posts, listings and digital PR mentions on sites based in or read by each target market rather than relying on generic global directories.",
    },
    {
      question: "How do you measure global SEO performance?",
      answer:
        "We segment Search Console and analytics by country, then report impressions, clicks, average position, conversions and AI-answer citations per market so you can see which country is paying back its investment.",
    },
    {
      question: "Can global SEO work for a small business?",
      answer:
        "Yes, if you focus. We usually start with one or two priority countries and a tight keyword set rather than launching ten locales at once, which keeps costs low and produces measurable wins faster.",
    },
  ],
};

export const localSeo: PageContent = {
  slug: "/seo-services/local-seo",
  title: "Local SEO Agency for Small Businesses | AVR Web Consulting",
  h1: "Local SEO services that fill the map pack with your business",
  description:
    "Get found by nearby customers with local SEO from AVR Web Consulting: keyword research, on-page fixes, GMB setup and citations. Request a free audit.",
  keywords:
    "local seo agency, best local seo agency, best local search engine optimization companies, local business seo services, local seo for small businesses, search engine optimization for local business",
  eyebrow: "SEO Services",
  serviceName: "Local SEO",
  answer:
    "Local SEO makes your business appear when nearby customers search. AVR Web Consulting optimises your Google Business Profile, builds manually verified local citations within three days, fixes NAP consistency, and targets 'near me' and 'service + city' keywords from $100 per month.",
  hero: {
    image: "/images/local-seo-hero.jpg",
    imageAlt: "Local SEO Services from $100/month | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "From", value: "$100/mo" },
    { label: "Citations live", value: "3 days" },
    { label: "GMB posts", value: "Weekly" },
    { label: "Review support", value: "Included" },
  ],
  breadcrumb: [...base, crumb("Local SEO", "/seo-services/local-seo")],
  related: [
    { label: "Dental SEO services", to: "/seo-services/dental-seo-services" },
    { label: "Locksmith SEO", to: "/seo-services/locksmith-seo" },
    { label: "Local citations & GMB", to: "/seo-services/local-citations-gmb" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "Locations we serve", to: "/locations" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Local SEO Services from $100/month",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How local ranking actually works",
      blocks: [
        {
          kind: "paragraph",
          text: "Google ranks local results on three factors: relevance (does your profile and site match the query), distance (how close you are to the searcher) and prominence (how well known and well cited your business is). You cannot change distance, so local SEO is the discipline of maximising relevance and prominence.",
        },
        {
          kind: "list",
          title: "The levers we pull",
          items: [
            "Google Business Profile categories, services, attributes and description",
            "Consistent name, address and phone number across every directory",
            "Location and service landing pages with genuine local content",
            "Review volume, recency and keyword-rich review responses",
            "Local links from chambers, associations, sponsorships and regional media",
            "Geo and LocalBusiness schema on the website",
          ],
        },
      ],
    },
    {
      id: "citations",
      heading: "Manual citations delivered in three days",
      blocks: [
        {
          kind: "paragraph",
          text: "Citations are mentions of your business name, address and phone number on directories and industry sites. Their value comes from consistency: a single wrong suite number or old phone line can suppress map rankings. We build every citation by hand, then send a live URL sheet you can verify.",
        },
        {
          kind: "table",
          head: ["Package", "Citations", "Turnaround"],
          rows: [
            ["Starter", "30 manual citations", "3 days"],
            ["Growth", "60 manual citations + cleanup", "5 days"],
            ["Multi-location", "30 per location", "5–7 days"],
          ],
        },
      ],
    },
    {
      id: "content",
      heading: "Location pages that rank without duplication",
      blocks: [
        {
          kind: "paragraph",
          text: "Spun city pages no longer rank. Each location page we build carries a distinct opening answer, local proof (projects, reviews, landmarks, service radius), local FAQs and its own LocalBusiness schema with correct coordinates — which also makes the page usable by AI assistants answering 'best X near me' questions.",
        },
        {
          kind: "steps",
          items: [
            {
              title: "Research",
              text: "Local intent keywords, competitor map pack analysis and review gap review.",
            },
            {
              title: "Build",
              text: "One optimised page per genuine service area with unique copy and schema.",
            },
            {
              title: "Prove",
              text: "Add local reviews, case snippets and photos to establish real presence.",
            },
            {
              title: "Promote",
              text: "Local citations, GMB posts and regional links pointing at the location page.",
            },
          ],
        },
      ],
    },
    {
      id: "ai-local",
      heading: "Local visibility inside AI assistants",
      blocks: [
        {
          kind: "paragraph",
          text: "AI assistants increasingly answer local queries by summarising directory data, reviews and structured markup rather than a map. Businesses with consistent NAP, rich LocalBusiness schema and quotable review content get named in those answers; businesses with conflicting listings simply disappear.",
        },
        {
          kind: "callout",
          title: "Included in every local retainer",
          text: "LocalBusiness schema, 10 local FAQs with FAQPage markup, and entity consistency checks across Google, Bing Places, Apple Maps and the top directories in your market.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much does local SEO cost?",
      answer:
        "Local SEO starts at $100 per month per location. That includes Google Business Profile optimisation, weekly posts, citation maintenance, review guidance and on-page work for your location pages.",
    },
    {
      question: "How fast will I appear in the map pack?",
      answer:
        "Most single-location businesses see map pack movement in 30–60 days once citations are consistent and the profile is fully completed. Competitive metro categories such as dentistry or real estate usually take three to four months.",
    },
    {
      question: "What is a citation and why does it matter?",
      answer:
        "A citation is any online mention of your business name, address and phone number. Search engines use the consistency of those mentions to verify that your business is real and located where you claim, which directly affects map rankings.",
    },
    {
      question: "Do you manage Google Business Profile posts and photos?",
      answer:
        "Yes. We publish weekly posts, add geo-tagged photos, keep services and hours accurate, answer Q&A entries and monitor for unauthorised profile edits or suspensions.",
    },
    {
      question: "Can you help with reviews?",
      answer:
        "We provide a compliant review generation system — request templates, QR cards and follow-up sequences — plus response writing. We never buy or fabricate reviews, which risks profile suspension.",
    },
    {
      question: "Do I need a physical address for local SEO?",
      answer:
        "You need either a physical address or a defined service area. Service-area businesses can hide the address and still rank, provided the profile, citations and website all describe the same service radius.",
    },
    {
      question: "Can you rank one business in multiple cities?",
      answer:
        "Yes, through a combination of genuine service-area pages, city-specific content and, where you have real premises, additional verified Google Business Profiles. We never create fake listings — they get removed and can suspend the main profile.",
    },
    {
      question: "How do you report local SEO results?",
      answer:
        "You receive monthly grid rank tracking around your location, Google Business Profile insights (calls, direction requests, website clicks), citation status and organic conversions from location pages.",
    },
    {
      question: "What is NAP consistency?",
      answer:
        "NAP stands for name, address and phone number. Consistency means every listing uses the exact same format everywhere. Variations such as 'Ste 4' versus 'Suite 4' weaken the trust signal and can hold back map rankings.",
    },
    {
      question: "Does local SEO help with AI search?",
      answer:
        "Yes. Assistants like ChatGPT and Gemini pull from directories, reviews and structured data. Clean NAP, LocalBusiness schema and answer-formatted content make your business far more likely to be named when someone asks an AI for a local recommendation.",
    },
  ],
};

export const technicalSeo: PageContent = {
  slug: "/seo-services/technical-seo",
  title: "SEO Website Optimization Services | AVR Web Consulting",
  h1: "Technical SEO that removes the ceiling on your rankings",
  description:
    "Improve an existing website's rankings with SEO website optimization: page speed, on-page fixes and technical clean-up. Request a free website audit.",
  keywords: "seo website optimization services",
  eyebrow: "SEO Services",
  serviceName: "Technical SEO",
  answer:
    "Technical SEO ensures search engines and AI crawlers can find, render, understand and index every important page. AVR Web Consulting audits crawlability, indexation, speed, structured data and rendering, then ships the critical fixes within one week of approval.",
  hero: {
    image: "/images/analytics-yearly-growth-2025.webp",
    imageAlt: "Technical SEO Services & Site Audits | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Audit delivery", value: "5 days" },
    { label: "Critical fixes", value: "1 week" },
    { label: "Checks run", value: "180+" },
    { label: "Includes", value: "Schema + CWV" },
  ],
  breadcrumb: [...base, crumb("Technical SEO", "/seo-services/technical-seo")],
  related: [
    { label: "Car dealership SEO", to: "/seo-services/car-dealership-seo" },
    { label: "Global SEO", to: "/seo-services/global-seo" },
    { label: "AI retrieval systems", to: "/ai-seo/ai-retrieval-systems" },
    { label: "Web design & development", to: "/web-design-development" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Technical SEO Services & Site Audits",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "audit",
      heading: "What our technical audit covers",
      blocks: [
        {
          kind: "list",
          items: [
            "Crawl analysis: orphan pages, redirect chains, crawl traps, faceted URL bloat",
            "Indexation review: coverage reports, canonical conflicts, noindex accidents, duplicate clusters",
            "Rendering: JavaScript dependency, hydration issues, server-side vs client-side content parity",
            "Core Web Vitals: LCP, INP and CLS diagnosis at template level, not just page level",
            "Structured data: coverage, validity and opportunity mapping across page types",
            "Internal linking: depth, anchor distribution and hub-and-spoke integrity",
            "Log file review for large sites: what crawlers actually request versus what you publish",
            "Security and hygiene: HTTPS, mixed content, status codes, robots.txt and sitemap accuracy",
          ],
        },
      ],
    },
    {
      id: "common-issues",
      heading: "The technical problems we find most often",
      blocks: [
        {
          kind: "table",
          head: ["Issue", "Typical impact", "Usual fix time"],
          rows: [
            [
              "Client-side rendered content",
              "Key copy invisible to some crawlers",
              "1–3 weeks (dev)",
            ],
            ["Missing or invalid schema", "No rich results, weak AI retrieval", "2–4 days"],
            ["Slow LCP on templates", "Ranking and conversion loss on mobile", "1–2 weeks"],
            ["Canonical conflicts", "Wrong URL indexed, split authority", "1–3 days"],
            ["Broken internal link depth", "Important pages crawled rarely", "3–5 days"],
          ],
        },
        {
          kind: "paragraph",
          text: "We separate findings into three buckets — critical (blocking indexation or revenue), high (measurable ranking drag) and hygiene — so your developers know exactly what to do first. Where you have no development capacity, our team implements the fixes directly.",
        },
      ],
    },
    {
      id: "ai-crawlers",
      heading: "Technical SEO for AI crawlers",
      blocks: [
        {
          kind: "paragraph",
          text: "AI answer engines run their own crawlers — GPTBot, ClaudeBot, PerplexityBot, Google-Extended — and most of them execute little or no JavaScript. If your content only exists after hydration, you are invisible to them even if Google renders you fine.",
        },
        {
          kind: "list",
          title: "What we implement",
          items: [
            "Server-rendered HTML for all indexable content",
            "robots.txt rules that deliberately allow the AI crawlers you want",
            "Clean semantic HTML: one H1, real headings, tables and definition lists",
            "Complete JSON-LD entity graph linking Organization, Service, Article and FAQ",
            "An llms.txt summary file describing the site for LLM retrieval",
          ],
        },
      ],
    },
    {
      id: "deliverable",
      heading: "What you receive",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Findings document",
              text: "Every issue with evidence, affected URLs, business impact and a recommended fix.",
            },
            {
              title: "Prioritised backlog",
              text: "Ticket-ready items your developers can pick up, ordered by impact and effort.",
            },
            {
              title: "Implementation",
              text: "We ship the fixes ourselves where you prefer, then re-test each item.",
            },
            {
              title: "Verification",
              text: "Post-fix crawl, Search Console monitoring and a written confirmation of what changed.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does a technical SEO audit take?",
      answer:
        "A standard audit is delivered within five working days. Enterprise sites with log-file analysis and multiple templates take up to ten working days.",
    },
    {
      question: "Do you implement fixes or only recommend them?",
      answer:
        "Both. Many clients hand the prioritised backlog to their own developers; others ask us to implement directly. We are comfortable working in WordPress, Shopify and custom stacks.",
    },
    {
      question: "What are Core Web Vitals and do they still matter?",
      answer:
        "Core Web Vitals measure loading (LCP), responsiveness (INP) and visual stability (CLS). They are a real but modest ranking factor, and a large conversion factor — slow mobile pages lose revenue regardless of rankings.",
    },
    {
      question: "Will technical SEO alone increase my traffic?",
      answer:
        "Technical SEO removes constraints; content and authority create growth. When a site has serious crawl, index or rendering issues, fixing them can produce immediate gains. On a technically healthy site, the returns come from content and links instead.",
    },
    {
      question: "How do you handle JavaScript-heavy websites?",
      answer:
        "We test rendered versus raw HTML, identify content that only appears after hydration, and recommend server-side rendering, static generation or prerendering for critical pages so both Google and AI crawlers see complete content.",
    },
    {
      question: "What schema markup should my site have?",
      answer:
        "At minimum Organization and WebSite sitewide, Service on service pages, Article on posts, FAQPage where you answer questions, LocalBusiness for physical locations and BreadcrumbList on deep pages. We map schema per template rather than page by page.",
    },
    {
      question: "How often should a technical audit be repeated?",
      answer:
        "A full audit annually, with quarterly health checks. Any time you migrate platforms, redesign or change URL structure, run an audit before and after launch.",
    },
    {
      question: "Can technical SEO recover a traffic drop?",
      answer:
        "Often yes, when the drop came from an accidental noindex, a broken migration, canonical errors or a server performance regression. We start by matching the drop date against deployments, Search Console coverage and algorithm updates.",
    },
    {
      question: "Do you do site migrations?",
      answer:
        "Yes. We plan URL mapping, redirect rules, schema parity and staging QA, then monitor coverage and rankings daily for the first four weeks after launch.",
    },
    {
      question: "Does technical SEO affect AI visibility?",
      answer:
        "Significantly. Most AI crawlers do not render JavaScript and rely heavily on structured data and clean semantics, so a technically sound site is a precondition for being cited in AI answers.",
    },
  ],
};

export const geoTargetingSeo: PageContent = {
  slug: "/seo-services/geo-targeting-seo",
  title: "Multi Location SEO for Growing Brands | AVR Web Consulting",
  h1: "GEO targeting SEO for city-level search dominance",
  description:
    "Help every branch rank in its own city. Our multi location SEO covers location pages, local listings and city-level keywords. Talk to AVR Web Consulting.",
  keywords: "multi location seo",
  eyebrow: "SEO Services",
  serviceName: "GEO Targeting SEO",
  answer:
    "GEO targeting SEO wins searches that include a place name, such as 'SEO agency Delhi' or 'web design Bangalore'. AVR Web Consulting builds unique city landing pages with local proof, geo schema and city-specific links so each metro ranks independently rather than competing with itself.",
  hero: {
    image: "/images/glowing-ai-brain.webp",
    imageAlt: "GEO Targeting SEO for Indian Metro Cities | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Cities covered", value: "8 metros" },
    { label: "Page build", value: "5–7 days" },
    { label: "Includes", value: "Geo schema" },
    { label: "Also serves", value: "US · UK · UAE" },
  ],
  breadcrumb: [...base, crumb("GEO Targeting SEO", "/seo-services/geo-targeting-seo")],
  related: [
    { label: "Car dealership SEO", to: "/seo-services/car-dealership-seo" },
    { label: "Real estate SEO", to: "/seo-services/real-estate-seo-services" },
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "GEO SEO for AI engines", to: "/ai-seo/geo-seo" },
    { label: "Locations we serve", to: "/locations" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for GEO Targeting SEO for Indian Metro Cities",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "what",
      heading: "What GEO targeting means in search",
      blocks: [
        {
          kind: "paragraph",
          text: "GEO targeting is optimisation for queries that carry an explicit location. These queries convert far better than generic ones because the searcher has already decided where they want the service delivered. In Indian metros, 'service + city' searches often account for the majority of commercial volume in a category.",
        },
        {
          kind: "callout",
          title: "Two meanings of GEO",
          text: "In classic SEO, GEO means geographic targeting. In AI search, GEO also stands for Generative Engine Optimisation. We run both — see our GEO SEO page for the generative side.",
        },
      ],
    },
    {
      id: "pages",
      heading: "How we build city pages that actually rank",
      blocks: [
        {
          kind: "list",
          items: [
            "A unique 40–60 word answer paragraph naming the city and service",
            "Locally researched keywords, including regional-language transliterations where relevant",
            "Genuine local proof: clients served, neighbourhoods covered, delivery timelines",
            "City-specific FAQs with FAQPage schema — ten per page",
            "LocalBusiness or Service schema with correct coordinates and area served",
            "Internal links from the national service hub and related city pages",
            "City-relevant links: local media, business associations, regional directories",
          ],
        },
        {
          kind: "paragraph",
          text: "The failure mode is templating: replacing the city name in an identical block of text. Search engines cluster those pages as duplicates and rank none of them. Every page we produce has a different first paragraph, different proof and different questions.",
        },
      ],
    },
    {
      id: "coverage",
      heading: "Cities and markets we cover",
      blocks: [
        {
          kind: "table",
          head: ["Market", "Cities", "Typical competition"],
          rows: [
            ["India — tier 1", "Delhi, Mumbai, Bangalore, Hyderabad, Chennai", "High"],
            ["India — tier 2", "Pune, Kolkata, Visakhapatnam", "Medium"],
            ["Gulf", "Dubai, Abu Dhabi, Sharjah", "High"],
            ["Western", "London, New York, Manchester, Berlin", "Very high"],
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is GEO targeting in SEO?",
      answer:
        "GEO targeting is optimising pages for searches that include a location, such as 'SEO services Hyderabad'. It combines city-specific content, geographic schema and locally relevant links so the page ranks in and for that place.",
    },
    {
      question: "How is GEO targeting different from local SEO?",
      answer:
        "Local SEO focuses on map pack visibility around a physical location and relies heavily on Google Business Profile. GEO targeting is about organic pages ranking for location keywords, which works even in cities where you have no office.",
    },
    {
      question: "Can I rank in a city where I have no office?",
      answer:
        "Yes, in organic results. You can build a service-area page for that city with genuine local content and links. You cannot legitimately appear in the map pack there without a verified address in that city.",
    },
    {
      question: "How many city pages should I create?",
      answer:
        "Only as many as you can make genuinely different and genuinely serve. Ten strong city pages outperform a hundred templated ones, which risk being classified as doorway pages.",
    },
    {
      question: "Do city pages count as doorway pages?",
      answer:
        "They do if they offer no unique value. Pages with distinct copy, real local proof, unique FAQs and clear service information are legitimate and rank well.",
    },
    {
      question: "How long do city pages take to rank?",
      answer:
        "Tier-2 city pages often rank within 6–10 weeks. Tier-1 metros with entrenched competitors typically need four to six months of supporting links and content.",
    },
    {
      question: "Do you handle regional languages?",
      answer:
        "We handle English plus transliterated regional terms that people actually search, and can arrange native-language content for Hindi, Telugu and Tamil where the demand justifies it.",
    },
    {
      question: "What schema do city pages need?",
      answer:
        "Service or LocalBusiness schema with areaServed and geo coordinates, plus BreadcrumbList and FAQPage. This combination is also what AI engines use when answering location-based questions.",
    },
    {
      question: "Can GEO targeting work internationally?",
      answer:
        "Yes. The same approach applies to Dubai, London or New York, with the addition of hreflang and currency localisation when multiple countries are in play.",
    },
    {
      question: "How do you measure GEO targeting success?",
      answer:
        "We track rankings by city keyword group, organic sessions and conversions filtered by landing page, and grid-based local rank where a Google Business Profile exists in that city.",
    },
  ],
};

export const localCitationsGmb: PageContent = {
  slug: "/seo-services/local-citations-gmb",
  title: "Google My Business SEO Services | AVR Web Consulting",
  h1: "Local citations and GMB optimisation, delivered in three days",
  description:
    "Set up and optimize your Google My Business profile so local searchers can find, call and visit you. See how AVR Web Consulting can help your listing.",
  keywords: "google my business and seo, google my business seo services",
  eyebrow: "SEO Services",
  serviceName: "Local Citations and GMB Optimisation",
  answer:
    "Local citations are consistent listings of your business name, address and phone number across directories. AVR Web Consulting builds 30–60 manual citations within three days, cleans conflicting listings, and fully optimises your Google Business Profile for categories, services, posts and reviews.",
  hero: {
    image: "/images/online-learning-video-call.webp",
    imageAlt: "Local Citations & Google Business Profile Optimisation | AVR illustration",
  },
  highlights: [
    { label: "Turnaround", value: "3 days" },
    { label: "Placement", value: "100% manual" },
    { label: "Report", value: "Live URLs" },
    { label: "Cleanup", value: "Included" },
  ],
  breadcrumb: [...base, crumb("Local Citations & GMB", "/seo-services/local-citations-gmb")],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "Pricing", to: "/pricing" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Expert strategies tailored for Local Citations & Google Business Profile Optimisation",
            "Data-driven approach without relying on guesswork",
            "Focus on sustainable, long-term search visibility",
            "Fully aligned with modern Answer Engine and AI search requirements",
          ],
        },
      ],
    },
    {
      id: "why",
      heading: "Why citations still matter",
      blocks: [
        {
          kind: "paragraph",
          text: "Citations are the verification layer of local search. When your name, address and phone number appear identically across dozens of trusted sources, search engines and AI assistants gain confidence that the business exists as described. When those details conflict, confidence drops and so do rankings.",
        },
        {
          kind: "list",
          title: "Where we list you",
          items: [
            "Global directories: Google, Bing Places, Apple Business Connect, Yelp, Foursquare",
            "Indian directories: JustDial, Sulekha, IndiaMART, TradeIndia and regional portals",
            "Industry directories relevant to your vertical",
            "Data aggregators that feed dozens of downstream listings",
          ],
        },
      ],
    },
    {
      id: "gmb",
      heading: "Google Business Profile optimisation checklist",
      blocks: [
        {
          kind: "list",
          items: [
            "Primary and secondary category selection based on competitor analysis",
            "Complete service list with individual descriptions",
            "Keyword-informed business description within Google's guidelines",
            "Product and service photos, geo-tagged, refreshed monthly",
            "Weekly Google posts: offers, updates and event announcements",
            "Q&A seeding and moderation",
            "Review response templates and reputation monitoring",
            "Booking, messaging and UTM-tagged website links",
          ],
        },
      ],
    },
    {
      id: "cleanup",
      heading: "Duplicate and conflict cleanup",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Discovery",
              text: "We scan directories and aggregators for every version of your listing, including old addresses and closed profiles.",
            },
            {
              title: "Decision",
              text: "We agree one canonical NAP format with you — exact spelling, suite formatting and phone number.",
            },
            {
              title: "Correction",
              text: "Duplicates are claimed and merged or suppressed; incorrect data is edited at the source.",
            },
            {
              title: "Verification",
              text: "You receive a spreadsheet of every listing with its live URL and current status.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How many citations does my business need?",
      answer:
        "Most single-location businesses need 30–60 quality citations. Beyond that, accuracy matters far more than volume — one conflicting listing can do more damage than ten extra directories add value.",
    },
    {
      question: "How fast are citations delivered?",
      answer:
        "Standard packages of 30 manual citations are delivered within three working days, with a report of live URLs and login details for each submission.",
    },
    {
      question: "Are the citations manual or automated?",
      answer:
        "Every citation is created manually by a team member. We do not use automated submission tools, which frequently produce broken or duplicate listings that later require cleanup.",
    },
    {
      question: "What happens if my address changes?",
      answer:
        "We run a full NAP update across every listing we control, prioritising Google, Bing, Apple and the aggregators that feed other directories, then verify each change.",
    },
    {
      question: "Do citations help if I have no physical storefront?",
      answer:
        "Yes. Service-area businesses still benefit from consistent listings; we simply hide the street address where the directory allows and emphasise the service radius.",
    },
    {
      question: "Can you fix a suspended Google Business Profile?",
      answer:
        "We can prepare and submit a reinstatement request with supporting documentation, and correct the underlying issue — most often address mismatch, keyword stuffing in the name or ineligible virtual offices.",
    },
    {
      question: "Do you manage multi-location businesses?",
      answer:
        "Yes. We manage bulk uploads, per-location profiles, location-specific posts and reporting, with 30 citations per location as standard.",
    },
    {
      question: "Will citations alone put me in the map pack?",
      answer:
        "Citations remove a barrier rather than guarantee a position. Combined with a fully optimised profile, review velocity, local content and proximity, they are one of the fastest levers available.",
    },
    {
      question: "Do AI assistants use citation data?",
      answer:
        "Yes. Assistants frequently synthesise directory and review data when answering local questions, so consistent citations improve the odds of being named in an AI recommendation.",
    },
    {
      question: "What information do you need from me?",
      answer:
        "Exact business name, address, phone, website, hours, categories, service list, a short description, logo and a few photos. We handle everything else and share access details afterwards.",
    },
  ],
};

export const dentalSeo: PageContent = {
  slug: "/seo-services/dental-seo-services",
  title: "Dental SEO Services for Practices & Clinics | AVR Web Consulting",
  h1: "Dental SEO services to attract local patients and grow appointment bookings",
  description:
    "Attract new dental patients with dental SEO from AVR Web Consulting: local Google Maps optimization, procedure keyword targeting, and appointment conversion.",
  keywords:
    "dental seo services, seo for dentists, dental practice seo, dentist local seo, dental clinic search engine optimization",
  eyebrow: "SEO Services",
  serviceName: "Dental SEO Services",
  answer:
    "Dental SEO helps dental practices, dentists, and orthodontists rank in local Google Maps and organic search when patients search for local dental care. AVR Web Consulting optimizes your Google Business Profile, builds procedure-specific landing pages, improves clinic website performance, and turns local searchers into confirmed patient appointments.",
  hero: {
    image: "/images/lead-generation-phone-laptop.webp",
    imageAlt: "Dental SEO Services for Clinics and Dentists | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Target audience", value: "Clinics & Dentists" },
    { label: "Map pack", value: "Local 3-Pack focus" },
    { label: "Procedures", value: "High-intent care" },
    { label: "Execution", value: "100% manual work" },
  ],
  breadcrumb: [...base, crumb("Dental SEO Services", "/seo-services/dental-seo-services")],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "Local citations & GMB", to: "/seo-services/local-citations-gmb" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Tailored search strategies for general dental clinics, orthodontists, cosmetic dentists, and oral surgeons",
            "Local 3-Pack and Google Maps prominence across targeted suburban and city service areas",
            "Dedicated, procedure-level landing pages for high-value treatments like dental implants, Invisalign, and emergency care",
            "Frictionless mobile experience and streamlined appointment inquiry workflows to convert local searchers into patients",
          ],
        },
      ],
    },
    {
      id: "dental-challenges",
      heading: "SEO challenges facing dental practices",
      blocks: [
        {
          kind: "paragraph",
          text: "Dental practices operate in hyper-competitive local micro-markets. Within a 3- to 5-mile radius of any clinic, dozens of practices compete for the exact same patient queries. Many clinics struggle with organic visibility because their digital presence suffers from common structural limitations:",
        },
        {
          kind: "list",
          title: "Common dental SEO hurdles",
          items: [
            "Single-page service bundling: Grouping root canals, cosmetic whitening, and pediatric care onto one generic page rather than individual procedure pages with dedicated search intent.",
            "Under-optimized Google Business Profiles: Incomplete secondary categories, unlisted specialized services, outdated clinic hours, and infrequent patient review generation.",
            "Suburban visibility blind spots: Failing to rank in affluent adjacent neighborhoods or fast-growing bedroom communities located just beyond the clinic's physical street address.",
            "Slow mobile speeds and clunky booking: Patients searching on smartphones during dental emergencies bouncing due to slow load times or cumbersome appointment contact forms.",
          ],
        },
        {
          kind: "callout",
          title: "Patient intent matters",
          text: "Dental searches divide sharply between high-urgency distress queries ('emergency dentist open now') and considered elective research ('dental implants cost and financing'). Your SEO architecture must serve both distinctly.",
        },
      ],
    },
    {
      id: "dental-solutions",
      heading: "Our dental SEO services and solutions",
      blocks: [
        {
          kind: "paragraph",
          text: "We build a multi-layered SEO framework engineered around how real patients find, evaluate, and choose a dental healthcare provider.",
        },
        {
          kind: "table",
          head: ["SEO Focus Area", "Specific Dental Deliverable", "Practice Benefit"],
          rows: [
            [
              "Google Business Profile",
              "Category refinement, photo updates, weekly posts, review response templates",
              "Top-3 map pack visibility for 'dentist near me' queries",
            ],
            [
              "Procedure Landing Pages",
              "Individual pages for implants, veneers, Invisalign, root canals, dentures",
              "Captures high-value elective treatment searches",
            ],
            [
              "Local Suburb Pages",
              "Location-specific landing pages for surrounding suburbs and towns",
              "Expands patient catchment radius beyond your immediate street",
            ],
            [
              "Technical Optimization",
              "Core Web Vitals acceleration, schema markup, mobile booking improvements",
              "Fewer bounces and higher confirmed appointment requests",
            ],
          ],
        },
        {
          kind: "list",
          title: "Core elements included in every dental campaign",
          items: [
            "In-depth local competitor keyword research covering treatment types, insurance queries, and symptoms",
            "Dentist and MedicalBusiness JSON-LD schema implementation with precise opening hours and consultation details",
            "Manual citations on reputable healthcare and local business directories with 100% NAP consistency",
            "Answer-first FAQ content targeting voice search and AI search assistants like ChatGPT and Google AI Overviews",
            "Conversion rate optimization for mobile click-to-call links and online appointment reservation buttons",
          ],
        },
      ],
    },
    {
      id: "how-avr-helps",
      heading: "How AVR Web Consulting can help your practice",
      blocks: [
        {
          kind: "paragraph",
          text: "AVR Web Consulting approaches dental SEO with a focus on patient acquisition rather than vanity traffic metrics. Ranking for national informational terms does not fill your hygiene chairs — dominating local high-intent treatment searches does.",
        },
        {
          kind: "list",
          items: [
            "100% manual, penalty-safe execution with no automated spam or low-quality private blog networks",
            "Experience structuring healthcare websites for clean indexing, mobile speed, and patient trust",
            "Transparent monthly reporting tracking local map positions, organic inquiries, and phone call clicks",
            "Full integration of traditional local SEO with modern AI overview and answer engine optimization (AEO)",
          ],
        },
      ],
    },
    {
      id: "dental-process",
      heading: "Our dental SEO process",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Step 1: Practice & Local Competitor Audit",
              text: "We analyze your website architecture, current keyword rankings, local map pack presence, citation health, and local dental competitors within your target radius.",
            },
            {
              title: "Step 2: Strategy & Keyword Architecture",
              text: "We map out high-value procedure keywords, emergency terms, and surrounding suburb landing pages required to expand your patient acquisition footprint.",
            },
            {
              title: "Step 3: On-Page Optimization & Technical Fixes",
              text: "We write original, informative copy for individual treatments, deploy Dentist and FAQ schema, optimize page titles and headings, and resolve mobile speed bottlenecks.",
            },
            {
              title: "Step 4: Local Citations & Authority Building",
              text: "We submit accurate, manually verified listings across trusted healthcare portals, regional directories, and local business platforms with consistent NAP details.",
            },
            {
              title: "Step 5: Review Guidance & Ongoing Optimization",
              text: "We provide compliant patient review generation workflows, monitor Google Business Profile performance, and continuously optimize underperforming procedure pages.",
            },
          ],
        },
      ],
    },
    {
      id: "dental-benefits",
      heading: "Benefits and expected practice outcomes",
      blocks: [
        {
          kind: "paragraph",
          text: "Investing in dedicated dental SEO builds an appreciating digital asset that generates ongoing patient inquiries without paying for every single ad click. While search engines do not allow anyone to guarantee specific ranking positions, our structured methodology is designed to produce measurable progress:",
        },
        {
          kind: "list",
          items: [
            "Consistent discovery when local families and professionals search for dental care in your community",
            "Higher proportion of high-margin restorative and cosmetic treatment consultations",
            "Enhanced credibility and trust through an informative, fast-loading, professional practice website",
            "Reduced reliance on expensive pay-per-click ads that stop delivering the moment ad spend pauses",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does dental SEO take to show results?",
      answer:
        "Most dental practices begin noticing initial improvements in local map visibility and local keyword rankings within 60 to 90 days. Competitive treatment terms like dental implants or orthodontics in dense urban areas typically compound over 4 to 6 months of steady optimization.",
    },
    {
      question: "What is the difference between general local SEO and dental SEO?",
      answer:
        "Dental SEO specifically targets the clinical and elective nuances of patient search behavior. This includes procedure-level intent (implants, Invisalign, root canals), emergency dental queries, health-related schema markup, and compliance with healthcare advertising guidelines.",
    },
    {
      question: "How do you optimize a dental clinic's Google Business Profile?",
      answer:
        "We ensure accurate primary and secondary categories (e.g., Dentist, Cosmetic Dentist, Orthodontist), publish complete procedure descriptions with transparent details, upload geo-tagged clinic photos, maintain regular business updates, and configure direct appointment booking links.",
    },
    {
      question: "What dental keywords should our clinic target?",
      answer:
        "We prioritize a balanced keyword portfolio: geo-modified head terms ('dentist near me', 'family dental clinic in [City]'), high-value elective procedures ('Invisalign provider [City]', 'dental implants cost'), and urgent terms ('emergency dentist open Saturday').",
    },
    {
      question: "Do you write the clinical content for our procedure pages?",
      answer:
        "Yes. Our team writes informative, patient-friendly copy explaining treatment benefits, candidacy, what to expect during visits, and common questions. You have final approval over all published copy to ensure clinical accuracy.",
    },
    {
      question: "Can dental SEO help our practice compete against large corporate dental chains?",
      answer:
        "Yes. Corporate dental chains often rely on rigid, centralized websites that lack genuine community depth. An independent practice with authentic doctor biographies, patient reviews, community involvement, and localized content can outrank national chains in local search.",
    },
    {
      question: "How do patient reviews influence our dental search rankings?",
      answer:
        "Review quantity, velocity, average rating, and keyword-rich patient feedback are major ranking factors in Google's local map algorithm. A steady stream of authentic reviews also reassures prospective patients evaluating your practice.",
    },
    {
      question: "How do you track patient appointment conversions?",
      answer:
        "We configure conversion tracking for phone call clicks, completed online appointment request forms, and click-to-map directions, providing clear monthly reporting on how search visibility translates into patient leads.",
    },
    {
      question: "Can you help multi-location dental groups?",
      answer:
        "Yes. We manage multi-clinic dental groups with dedicated location pages, separate Google Business Profiles for each clinic, location-specific schema, and distinct local citation profiles.",
    },
    {
      question: "Do you guarantee first-page Google rankings for our dental practice?",
      answer:
        "No reputable agency can guarantee specific positions because search algorithms and local competitor actions are outside any third party's direct control. We guarantee transparent deliverables, proven technical best practices, and detailed performance reporting.",
    },
  ],
};

export const locksmithSeo: PageContent = {
  slug: "/seo-services/locksmith-seo",
  title: "Locksmith SEO Services for Emergency & Local Pros | AVR Web Consulting",
  h1: "Locksmith SEO services to capture emergency searches and local service calls",
  description:
    "Grow your locksmith business with specialized locksmith SEO from AVR Web Consulting: emergency search targeting, service-area optimization, and Google Maps visibility.",
  keywords:
    "locksmith seo, seo for locksmiths, local locksmith marketing, emergency locksmith seo, locksmith google business profile optimization",
  eyebrow: "SEO Services",
  serviceName: "Locksmith SEO Services",
  answer:
    "Locksmith SEO helps residential, commercial, and emergency mobile locksmiths capture high-urgency local searches when customers are locked out or need urgent security assistance. AVR Web Consulting optimizes your Service Area Google Business Profile, builds location-targeted emergency pages, improves mobile tap-to-call conversion, and ensures compliance with search engine verification standards.",
  hero: {
    image: "/images/google-maps-citation.webp",
    imageAlt:
      "Locksmith SEO Services for Emergency and Local Pros | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Search intent", value: "Emergency & Local" },
    { label: "Target model", value: "Service Area / SAB" },
    { label: "User experience", value: "Mobile & Call-First" },
    { label: "Compliance", value: "GBP verification safe" },
  ],
  breadcrumb: [...base, crumb("Locksmith SEO", "/seo-services/locksmith-seo")],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "Local citations & GMB", to: "/seo-services/local-citations-gmb" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Engineered for high-urgency mobile searches when locked-out customers need immediate assistance",
            "Service Area Business (SAB) configuration to dominate local service territories without compromising home address privacy",
            "Comprehensive keyword coverage spanning emergency lockouts, rekeying, car key programming, and commercial access systems",
            "Strict adherence to Google Business Profile verification guidelines to protect your listing against industry spam and suspensions",
          ],
        },
      ],
    },
    {
      id: "locksmith-challenges",
      heading: "SEO challenges facing locksmith businesses",
      blocks: [
        {
          kind: "paragraph",
          text: "The locksmith vertical is one of the most demanding local search environments on the web. Locksmith business owners face aggressive competition, stringent verification checks, and unique customer behavioral patterns:",
        },
        {
          kind: "list",
          title: "Major obstacles in locksmith search marketing",
          items: [
            "Proliferation of lead-generation middlemen: Call centers and fake listings often attempt to crowd Google Maps with illegitimate addresses, stealing calls from legitimate technicians.",
            "Extreme customer urgency: A locked-out car owner on a busy roadside will not browse multiple pages; they search on mobile and immediately tap the first credible phone number they see.",
            "High suspension sensitivity: Because Google monitors the locksmith sector closely for spam, even minor unverified edits to a business name, address, or service radius can trigger profile suspensions.",
            "Balancing 24/7 emergency calls with planned commercial installations: A successful locksmith needs late-night lockout calls as well as lucrative, scheduled commercial access control and master key contracts.",
          ],
        },
        {
          kind: "callout",
          title: "Call-first conversion",
          text: "Emergency locksmith traffic converts almost entirely via instant phone calls. Every millisecond of mobile page speed and every tap-to-call button placement directly impacts your daily booking volume.",
        },
      ],
    },
    {
      id: "locksmith-solutions",
      heading: "Our locksmith SEO services and solutions",
      blocks: [
        {
          kind: "paragraph",
          text: "We implement a specialized search marketing system built around verified service areas, lightning-fast mobile pages, and clean directory citations.",
        },
        {
          kind: "table",
          head: ["Service Component", "What We Implement", "Direct Business Value"],
          rows: [
            [
              "Service Area Business (SAB) Setup",
              "Correct service radius configuration, hiding residential address where needed, verified categories",
              "Safe, compliant map pack presence across all served suburbs",
            ],
            [
              "Emergency Mobile Pages",
              "Streamlined, fast-loading pages for '24/7 locksmith in [City]' with tap-to-call buttons",
              "Immediate capture of high-urgency lockout phone calls",
            ],
            [
              "Service-Specific Silos",
              "Dedicated pages for rekeying, transponder car keys, smart locks, and safe cracking",
              "Ranks for high-value scheduled residential and commercial work",
            ],
            [
              "Manual Directory Citations",
              "Consistent NAP citations across navigation platforms, trade directories, and aggregators",
              "Solidifies geographic authority and prevents profile suspension",
            ],
          ],
        },
        {
          kind: "list",
          title: "Technical and on-page locksmith deliverables",
          items: [
            "Locksmith structured data (JSON-LD schema) with defined areaServed, openingHours, and telephone properties",
            "Emergency-focused callout assets highlighting fast dispatch times, licensed technicians, and transparent pricing",
            "Location-specific landing pages for secondary towns and suburbs without duplicate content penalties",
            "Mobile optimization ensuring core phone numbers and service details load in under two seconds",
          ],
        },
      ],
    },
    {
      id: "how-avr-helps",
      heading: "How AVR Web Consulting can help your locksmith business",
      blocks: [
        {
          kind: "paragraph",
          text: "AVR Web Consulting helps legitimate locksmith professionals build sustainable local search visibility that withstands algorithm shifts and aggressive spam competitors.",
        },
        {
          kind: "list",
          items: [
            "Suspension prevention: Strict compliance with Google Business Profile policies regarding physical shops versus mobile service-area operators.",
            "100% human-placed citations: Every directory listing is created manually with identical business details and live verification links.",
            "Clear call tracking: Transparent tracking of phone call inquiries, map direction requests, and organic landing page visits.",
            "Full integration with our local SEO, citation building, and technical website optimization services.",
          ],
        },
      ],
    },
    {
      id: "locksmith-process",
      heading: "Our locksmith SEO process",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Step 1: Listing Audit & Service Territory Mapping",
              text: "We audit your existing Google Business Profile, review profile verification health, inspect competitor map rankings, and establish your primary target service radius.",
            },
            {
              title: "Step 2: Profile Optimization & Compliance Check",
              text: "We configure primary and secondary categories, align service lists, verify business documentation, and set up appropriate emergency operational hours.",
            },
            {
              title: "Step 3: High-Speed Mobile Landing Page Creation",
              text: "We develop fast, clean emergency service pages and dedicated commercial lock service pages optimized for mobile devices with instant tap-to-call functionality.",
            },
            {
              title: "Step 4: Manual Citation Deployment",
              text: "We submit your accurate business profile to top regional, automotive, and trade directories, ensuring consistent NAP across all platforms.",
            },
            {
              title: "Step 5: Call Performance Review & Radius Refinement",
              text: "We monitor incoming call volume, track search query trends, and expand service-area content into neighboring high-demand communities.",
            },
          ],
        },
      ],
    },
    {
      id: "locksmith-benefits",
      heading: "Benefits and expected business outcomes",
      blocks: [
        {
          kind: "paragraph",
          text: "By establishing genuine local authority, a professional locksmith can capture consistent service calls without paying extortionate fees to third-party lead brokers. Expected outcomes include:",
        },
        {
          kind: "list",
          items: [
            "Higher organic call volume from drivers and homeowners in urgent need of assistance",
            "Increased visibility in Google Maps across your entire contracted service territory",
            "More profitable scheduled commercial jobs, such as master key installations and smart lock upgrades",
            "A durable, compliant online presence protected against unfair competitor spam tactics",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Why is mobile SEO especially critical for locksmiths?",
      answer:
        "Over 85% of emergency lockout searches happen on mobile devices when customers are stranded outside their home, office, or vehicle. Mobile pages must load instantly and feature clear, prominent tap-to-call buttons so the user can connect with you immediately.",
    },
    {
      question: "Can a mobile locksmith rank in Google Maps without a storefront address?",
      answer:
        "Yes. Google supports Service Area Businesses (SABs). You can hide your residential address from public view and specify the cities, postal codes, and radius you serve. Your business will still rank in the local map pack for relevant queries within that zone.",
    },
    {
      question: "Why do locksmith Google Business Profiles get suspended so easily?",
      answer:
        "Google aggressively polices the locksmith sector due to widespread lead-generation spam. Profiles often trigger suspensions when owners use keyword-stuffed business names, fake commercial addresses, or make rapid, unverified edits. We ensure complete compliance to minimize this risk.",
    },
    {
      question: "What keywords generate the most valuable locksmith jobs?",
      answer:
        "Valuable queries include high-urgency emergency terms ('emergency locksmith near me', 'locked out of house'), automotive terms ('car key replacement', 'transponder key programming'), and high-ticket commercial queries ('commercial access control installer', 'rekey office locks').",
    },
    {
      question: "How do you target multiple neighboring towns and suburbs?",
      answer:
        "We build dedicated, unique service-area landing pages for each key city or suburb within your coverage zone. Each page features unique copy, local landmarks, customer FAQs, and schema markup indicating that you provide mobile dispatch to that area.",
    },
    {
      question: "Does Google Local Services Ads (Google Guaranteed) replace organic SEO?",
      answer:
        "No. Local Services Ads and organic SEO complement each other. Many users scroll past sponsored ads directly to the organic Local 3-Pack and top organic websites. Strong organic rankings provide continuous calls without pay-per-lead charges.",
    },
    {
      question: "How do you track leads for locksmith clients?",
      answer:
        "We track phone call clicks from mobile pages, Google Business Profile direct calls, contact form inquiries, and track keyword ranking shifts across your service radius using local grid tracking.",
    },
    {
      question: "How do you handle automotive locksmith queries?",
      answer:
        "We create specific pages for vehicle lockouts, key fob replacement, ignition repair, and transponder key programming, targeting make-specific and urgent automotive queries in your service area.",
    },
    {
      question: "Can SEO help me win more commercial locksmith contracts?",
      answer:
        "Yes. By creating dedicated content for commercial access control, master key systems, panic bar installation, and safe servicing, we help you attract property managers, business owners, and facilities directors looking for scheduled security work.",
    },
    {
      question: "How long does it take for a locksmith website to rank?",
      answer:
        "Local citation cleanup and Google Business Profile optimization often start generating increased map pack visibility within 30 to 60 days. Organic rankings for competitive suburban and regional keywords typically develop over 3 to 5 months.",
    },
  ],
};

export const carDealershipSeo: PageContent = {
  slug: "/seo-services/car-dealership-seo",
  title: "Car Dealership SEO Services | Automotive Dealer Search Marketing | AVR",
  h1: "Car dealership SEO services to drive qualified showroom visits and vehicle sales",
  description:
    "Drive qualified car buyers to your showroom with car dealership SEO from AVR Web Consulting: vehicle inventory optimization, make-and-model search, and local automotive SEO.",
  keywords:
    "car dealership seo, automotive seo services, auto dealer seo, used car dealership seo, vehicle inventory seo optimization",
  eyebrow: "SEO Services",
  serviceName: "Car Dealership SEO Services",
  answer:
    "Car dealership SEO helps new and used automotive retailers rank when car buyers search for specific makes, models, body styles, and local inventory. AVR Web Consulting optimizes your Search Results Pages (SRP) and Vehicle Detail Pages (VDP), manages dynamic inventory turnover without broken URLs, implements automotive schema, and captures high-intent regional automotive searches.",
  hero: {
    image: "/images/analytics-yearly-growth-2025.webp",
    imageAlt:
      "Car Dealership SEO Services for Automotive Retailers | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Target retailers", value: "New & Used Dealers" },
    { label: "Inventory focus", value: "SRP & VDP architecture" },
    { label: "Structured data", value: "AutoDealer & Vehicle schema" },
    { label: "Market scope", value: "Regional & Metro trade areas" },
  ],
  breadcrumb: [...base, crumb("Car Dealership SEO", "/seo-services/car-dealership-seo")],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "Local citations & GMB", to: "/seo-services/local-citations-gmb" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Inventory-driven search architecture optimizing both Vehicle Detail Pages (VDPs) and Search Results Pages (SRPs)",
            "Technical solutions to manage rapid vehicle turnover, preventing crawl waste, 404 errors, and lost page authority",
            "Comprehensive make, model, trim, and body-style keyword targeting to capture in-market car shoppers",
            "Multi-department optimization ensuring sales, parts, service, and collision centers each gain dedicated search visibility",
          ],
        },
      ],
    },
    {
      id: "dealership-challenges",
      heading: "SEO challenges facing car dealerships",
      blocks: [
        {
          kind: "paragraph",
          text: "Automotive retail websites manage thousands of changing inventory assets, face competition from national vehicle aggregators, and must coordinate multiple revenue streams:",
        },
        {
          kind: "list",
          title: "Critical automotive search challenges",
          items: [
            "High inventory turnover: When vehicles sell, their individual VDP URLs often get deleted, generating hundreds of 404 errors and discarding accumulated search engine equity.",
            "Aggregator domination: National car portals (AutoTrader, Cars.com, CarGurus) often outrank individual dealerships on broad model queries unless regional SEO is tightly executed.",
            "Faceted navigation crawl traps: Inventory filters for year, mileage, transmission, color, and price can generate millions of thin, duplicate URL permutations that confuse search crawlers.",
            "Departmental fragmentation: Dealerships must rank not just for car sales, but also for routine maintenance (oil changes, brake service), certified pre-owned warranties, and OEM parts.",
          ],
        },
        {
          kind: "callout",
          title: "Evergreen model hubs",
          text: "Individual vehicle listings come and go, but demand for 'used Ford F-150 near me' or 'new Toyota RAV4 hybrid in [City]' is permanent. We build evergreen model hubs that continually accrue ranking authority.",
        },
      ],
    },
    {
      id: "dealership-solutions",
      heading: "Our automotive dealership SEO solutions",
      blocks: [
        {
          kind: "paragraph",
          text: "We provide an end-to-end automotive SEO program tailored to the mechanics of modern dealership management software (DMS) and inventory feeds.",
        },
        {
          kind: "table",
          head: ["Dealership SEO Strategy", "Implementation Details", "Commercial Outcome"],
          rows: [
            [
              "Evergreen SRP Model Hubs",
              "Permanent category landing pages for top makes, models, and body types",
              "Ranks consistently for buyer queries regardless of daily stock changes",
            ],
            [
              "VDP Optimization",
              "Clean VIN-level details, optimized image galleries, clear pricing & finance CTAs",
              "Drives direct phone inquiries and test-drive appointment bookings",
            ],
            [
              "Automotive Schema Markup",
              "AutoDealer, Vehicle, and Offer structured data with live pricing and mileage",
              "Enables rich snippets in Google search results with vehicle specs",
            ],
            [
              "Service Department SEO",
              "Dedicated landing pages for oil change, brake repair, tire replacement, battery service",
              "Fills high-margin service bay repair appointments consistently",
            ],
          ],
        },
        {
          kind: "list",
          title: "Technical dealership optimizations we deliver",
          items: [
            "Intelligent redirection rules for sold vehicles pointing prospective buyers to similar active stock rather than broken 404 pages",
            "Robots.txt and canonical tag management to prevent faceted inventory filter parameters from bloating your crawl budget",
            "Multi-location and regional showroom targeting covering surrounding towns across your primary market area (PMA)",
            "Optimization of secondary Google Business Profile department listings for Service and Parts departments",
          ],
        },
      ],
    },
    {
      id: "how-avr-helps",
      heading: "How AVR Web Consulting drives automotive retail growth",
      blocks: [
        {
          kind: "paragraph",
          text: "AVR Web Consulting helps franchised new-car dealerships and independent used-car lots generate direct showroom inquiries, reducing dependence on expensive third-party lead generation platforms.",
        },
        {
          kind: "list",
          items: [
            "Familiarity with major automotive website platforms including Dealer.com, CDK Global, DealerOn, DealerSocket, and custom React architectures",
            "100% manual on-page optimization, content creation, and local citation management",
            "Transparent monthly reporting tracking organic showroom visits, VDP views, phone calls, and test-drive form submissions",
            "Future-proof optimization for AI vehicle recommendations and conversational search queries",
          ],
        },
      ],
    },
    {
      id: "dealership-process",
      heading: "Our car dealership SEO process",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Step 1: Inventory Architecture & Platform Audit",
              text: "We evaluate your automotive CMS platform, inspect crawl health, analyze how sold vehicles are handled, and audit canonical tag implementation across inventory filters.",
            },
            {
              title: "Step 2: Make, Model & Regional Keyword Mapping",
              text: "We map high-converting keywords across popular local vehicle segments (trucks, SUVs, hybrids, commercial vans) and surrounding regional cities.",
            },
            {
              title: "Step 3: Technical Cleanup & Schema Implementation",
              text: "We implement AutoDealer and Vehicle schema, configure smart redirects for out-of-stock inventory, and resolve mobile speed bottlenecks.",
            },
            {
              title: "Step 4: Evergreen Model Pages & Service Content",
              text: "We build authoritative model comparison guides, trim reviews, and dedicated service bay repair pages optimized for local search.",
            },
            {
              title: "Step 5: Lead Tracking & Continuous Optimization",
              text: "We track VDP engagement, finance application clicks, test drive bookings, and local map pack performance, refining targets each monthly cycle.",
            },
          ],
        },
      ],
    },
    {
      id: "dealership-benefits",
      heading: "Benefits and expected automotive business outcomes",
      blocks: [
        {
          kind: "paragraph",
          text: "A well-optimized automotive website turns search engines into an organic showroom, attracting buyers when they are actively ready to test-drive and purchase. Expected business outcomes include:",
        },
        {
          kind: "list",
          items: [
            "Increased direct organic traffic to your website rather than paying fees for third-party marketplace leads",
            "Stronger map pack visibility for 'car dealership near me' and brand-specific search queries in your primary market area",
            "Higher inventory turnover through well-ranked Vehicle Detail Pages with rich snippet pricing",
            "Steady, recurring revenue for your service and parts department through maintenance search rankings",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How does car dealership SEO differ from general local business SEO?",
      answer:
        "Dealership SEO must account for dynamic vehicle inventory that changes daily, faceted search navigation, VIN-level detail pages, automotive-specific schema markup, and distinct department listings for Sales, Service, and Parts.",
    },
    {
      question: "What happens to a Vehicle Detail Page (VDP) when a car is sold?",
      answer:
        "Instead of deleting the page and triggering a 404 error, we set up smart redirects or display an 'Out of Stock' banner that suggests similar in-stock vehicles with matching make, model, or price, preserving accumulated SEO authority.",
    },
    {
      question:
        "Can an independent used car dealership compete with national portals like AutoTrader?",
      answer:
        "Yes. National portals have generic content and cannot match the hyperlocal relevance of an independent dealer. By optimizing for regional long-tail queries ('used pickup trucks with low mileage in [City]') and dominating the local map pack, independent dealers regularly capture motivated local buyers.",
    },
    {
      question: "What structured data should an automotive dealership website use?",
      answer:
        "A dealership should implement AutoDealer schema for the business, AutomotiveBusiness for service departments, Vehicle and Car schema for individual listings with price, mileage, VIN, fuel type, and BreadcrumbList for navigation clarity.",
    },
    {
      question: "Should our Service and Parts departments have separate Google Business Profiles?",
      answer:
        "Yes. Google explicitly allows auto dealerships to maintain nested department listings for Service, Parts, and Collision centers. This allows each department to rank for its own category queries (e.g., 'oil change near me' or 'OEM brake parts') without diluting the main dealership profile.",
    },
    {
      question: "How do you optimize Search Results Pages (SRP) versus Vehicle Detail Pages (VDP)?",
      answer:
        "SRPs target broader category queries ('used SUVs for sale in [City]') and should feature original buying advice, internal links, and category schema. VDPs target specific VINs, trims, and specs with high-resolution photos, payment calculators, and clear lead capture forms.",
    },
    {
      question: "How do you target buyers in surrounding cities and rural areas?",
      answer:
        "We build dedicated regional landing pages highlighting your inventory, trade-in programs, and delivery options for neighboring towns within your dealership's primary market area (PMA).",
    },
    {
      question: "Can dealership SEO help with hybrid and electric vehicle (EV) sales?",
      answer:
        "Yes. We create specialized content hubs addressing EV charging ranges, local and federal tax credits, home charging installations, and hybrid model comparisons to capture the surging interest in alternative fuel vehicles.",
    },
    {
      question: "How do you track leads generated from car dealership SEO?",
      answer:
        "We track phone call clicks, test drive request forms, trade-in valuation submissions, pre-qualification finance applications, and physical showroom direction clicks generated through organic search.",
    },
    {
      question: "How long does it take for a dealership to see SEO results?",
      answer:
        "Technical improvements and Google Business Profile optimizations often show positive movement within 60 days. Substantial organic traffic growth to evergreen model hubs and regional landing pages typically builds over 4 to 6 months.",
    },
  ],
};

export const realEstateSeo: PageContent = {
  slug: "/seo-services/real-estate-seo-services",
  title: "Real Estate SEO Services for Agents & Agencies | AVR Web Consulting",
  h1: "Real estate SEO services to dominate neighborhood searches and generate qualified property inquiries",
  description:
    "Attract serious buyers, sellers, and property investors with real estate SEO from AVR Web Consulting: neighborhood guides, IDX listing optimization, and local agency search.",
  keywords:
    "real estate seo services, real estate seo, seo for real estate agents, realtor seo, property listing seo, real estate agency search engine optimization",
  eyebrow: "SEO Services",
  serviceName: "Real Estate SEO Services",
  answer:
    "Real Estate SEO helps real estate agents, brokerages, and property developers capture high-intent property buyers and sellers searching for homes in specific cities and neighborhoods. AVR Web Consulting optimizes IDX and MLS property feeds, builds authoritative neighborhood and community guides, implements real estate schema, and converts organic property searchers into exclusive client leads.",
  hero: {
    image: "/images/digital-marketing.webp",
    imageAlt: "Real Estate SEO Services for Agents and Agencies | AVR Web Consulting illustration",
  },
  highlights: [
    { label: "Target professionals", value: "Agents & Agencies" },
    { label: "Core strategy", value: "Hyperlocal community guides" },
    { label: "Technical capability", value: "IDX / MLS feed optimization" },
    { label: "Lead generation", value: "Buyer & seller inquiries" },
  ],
  breadcrumb: [
    ...base,
    crumb("Real Estate SEO Services", "/seo-services/real-estate-seo-services"),
  ],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
    { label: "Local citations & GMB", to: "/seo-services/local-citations-gmb" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Hyperlocal content architecture focusing on neighborhood, school district, and master-planned community searches",
            "Technical optimization of dynamic IDX/MLS property listing feeds to avoid duplicate content flags and crawl waste",
            "Dual-funnel strategy targeting both active property buyers and lucrative home seller listing appointments",
            "RealEstateAgent and RealEstateListing schema markup giving search engines structured property data and geographic context",
          ],
        },
      ],
    },
    {
      id: "real-estate-challenges",
      heading: "SEO challenges in the real estate sector",
      blocks: [
        {
          kind: "paragraph",
          text: "Real estate professionals compete in an arena dominated by multi-billion-dollar portal aggregators. Standing out requires moving beyond syndicated MLS data to establish authentic hyperlocal authority:",
        },
        {
          kind: "list",
          title: "Major real estate search hurdles",
          items: [
            "Aggregator dominance: National portals like Zillow, Realtor.com, and Redfin command massive authority for generic terms like 'homes for sale in [City]'.",
            "Duplicate MLS listing descriptions: When an agent's website simply mirrors the exact same property text syndicated to thousands of competing sites, search engines see zero unique value.",
            "Short property lifecycles: Homes sell quickly, and removing listing pages creates broken URLs and wasted search engine crawl budget.",
            "Iframe and JavaScript IDX limitations: Many real estate websites embed property searches inside iframes that search engine crawlers cannot index or understand.",
          ],
        },
        {
          kind: "callout",
          title: "Win where aggregators are weak",
          text: "National property portals cannot write authentic, lived-in guides about individual school districts, local parks, neighborhood vibes, or upcoming zoning changes. Hyperlocal community content is your competitive advantage.",
        },
      ],
    },
    {
      id: "real-estate-solutions",
      heading: "Our real estate SEO services and solutions",
      blocks: [
        {
          kind: "paragraph",
          text: "We implement a comprehensive real estate search engine optimization strategy that combines indexable MLS feeds with rich community storytelling.",
        },
        {
          kind: "table",
          head: ["SEO Focus Area", "Specific Real Estate Deliverable", "Business Benefit"],
          rows: [
            [
              "Hyperlocal Community Guides",
              "In-depth guides for specific neighborhoods, subdivisions, and condo buildings",
              "Outranks national aggregators for specific community searches",
            ],
            [
              "IDX / MLS Feed Optimization",
              "Crawlable URL architecture, category canonicalization, and indexable listing data",
              "Ensures property listings contribute to organic domain authority",
            ],
            [
              "Seller-Focused Content",
              "'How to sell your home in [City]', home valuation pages, and local market reports",
              "Generates high-commission exclusive seller listing leads",
            ],
            [
              "Structured Data Markup",
              "RealEstateAgent, SingleFamilyResidence, and Place schema deployment",
              "Enhances local search presence and aids AI search recommendation",
            ],
          ],
        },
        {
          kind: "list",
          title: "Included real estate SEO deliverables",
          items: [
            "Targeted keyword research across property types (waterfront homes, luxury condos, golf communities, starter homes)",
            "Optimized Google Business Profile for real estate brokerages and individual licensed agents",
            "Sold property page retention strategies that preserve URL equity and display historical sales proof",
            "Fast mobile page experience ensuring high-resolution property imagery loads quickly on smartphones",
          ],
        },
      ],
    },
    {
      id: "how-avr-helps",
      heading: "How AVR Web Consulting elevates real estate professionals",
      blocks: [
        {
          kind: "paragraph",
          text: "AVR Web Consulting helps independent brokers, boutique agencies, and top-producing agents build long-term organic assets that generate exclusive client relationships without paying recurring portal fees.",
        },
        {
          kind: "list",
          items: [
            "Experience with major real estate platforms including WordPress (with IDX Broker, Showcase IDX), Real Geeks, BoomTown, Sierra Interactive, and custom stacks",
            "100% human-crafted neighborhood guides and property marketing copy — no automated scraping or generic filler",
            "Transparent monthly reporting tracking organic impressions, keyword rankings, viewing requests, and valuation inquiries",
            "Optimization for modern AI answer engines like ChatGPT, Gemini, and Perplexity when users ask for local neighborhood advice",
          ],
        },
      ],
    },
    {
      id: "real-estate-process",
      heading: "Our real estate SEO process",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              title: "Step 1: Website & IDX Integration Audit",
              text: "We evaluate your website CMS, analyze how your IDX feed renders property data, check mobile speed, and identify crawl issues or duplicate pages.",
            },
            {
              title: "Step 2: Hyperlocal Keyword & Community Mapping",
              text: "We map out target neighborhoods, school districts, condo developments, and property types with strong local search demand and low portal competition.",
            },
            {
              title: "Step 3: Technical Fixes & Structured Data Deployment",
              text: "We configure canonical tags for MLS parameters, optimize image delivery, and implement RealEstateAgent and RealEstateListing schema.",
            },
            {
              title: "Step 4: Community Guide Development & On-Page Work",
              text: "We write original, engaging guides for priority neighborhoods featuring local amenities, commute times, photos, and current active listings.",
            },
            {
              title: "Step 5: Ongoing Lead Tracking & Authority Expansion",
              text: "We monitor property viewing inquiries, home valuation requests, and local map rankings, expanding content into adjacent growing communities each month.",
            },
          ],
        },
      ],
    },
    {
      id: "real-estate-benefits",
      heading: "Benefits and expected real estate business outcomes",
      blocks: [
        {
          kind: "paragraph",
          text: "Real estate SEO builds sustainable digital presence that compounds over time. Expected outcomes from a well-structured campaign include:",
        },
        {
          kind: "list",
          items: [
            "Consistent discovery by serious home buyers and sellers researching specific local neighborhoods",
            "Direct, exclusive client inquiries that avoid the competitive bidding of portal-shared leads",
            "Established status as the recognized local real estate authority in your chosen geographic farm",
            "An enduring digital asset that continues attracting prospective clients year after year",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Can an independent real estate agent outrank portals like Zillow or Realtor.com?",
      answer:
        "Yes, on hyperlocal and niche searches. While national portals dominate broad city terms, they have thin, templated content for specific subdivisions, historic neighborhoods, condo complexes, and school zones. A detailed, locally knowledgeable community guide can easily outrank them.",
    },
    {
      question: "How do you optimize an IDX property feed for SEO?",
      answer:
        "We ensure the IDX solution generates crawlable static URLs rather than dynamic iframes, add custom intro text and FAQs to saved search pages, canonicalize filtered search results to avoid duplicate content, and keep sold listings active with historical data.",
    },
    {
      question: "Why are neighborhood and community guides so important?",
      answer:
        "Neighborhood guides answer the real questions home buyers have about lifestyle, school ratings, walkability, dining, and parks. They capture buyers early in their search journey and establish your authority as a local community expert.",
    },
    {
      question: "How does real estate SEO generate seller leads, not just buyers?",
      answer:
        "We create dedicated content for homeowners, including neighborhood market trend reports, 'How to sell your home in [City]' guides, and home valuation landing pages that encourage prospective sellers to request a comparative market analysis (CMA).",
    },
    {
      question: "What should happen to a listing page once the property is sold?",
      answer:
        "Rather than deleting the page and creating a 404 error, we keep the page online with a 'Recently Sold' badge, historical sale price (where compliant with local MLS rules), neighborhood details, and links to active nearby homes. This retains search authority and demonstrates your sales track record.",
    },
    {
      question: "Should individual real estate agents have their own Google Business Profile?",
      answer:
        "Yes. Google allows licensed real estate agents to maintain individual Google Business Profiles even if they operate within a larger brokerage, provided the business name follows specific naming guidelines (e.g., '[Agent Name] - [Brokerage Name]').",
    },
    {
      question: "What schema markup is needed for a real estate website?",
      answer:
        "We implement RealEstateAgent schema for the agency, PostalAddress and GeoCoordinates for local positioning, RealEstateListing and SingleFamilyResidence on properties, BreadcrumbList for navigation, and FAQPage schema on community guides.",
    },
    {
      question: "How does mobile performance affect real estate website conversions?",
      answer:
        "Over 70% of home searches occur on mobile devices while buyers are driving through neighborhoods or touring properties. Fast load times, responsive photo galleries, and clear contact buttons are essential to keep mobile visitors engaged.",
    },
    {
      question: "How do you track return on investment from real estate SEO?",
      answer:
        "We track home valuation requests, property viewing requests, click-to-call phone inquiries, contact form submissions, and organic keyword growth across your target geographic zones.",
    },
    {
      question: "How long does real estate SEO take to generate results?",
      answer:
        "Local map pack and niche neighborhood guide traction typically becomes visible within 90 days. Ranking for competitive citywide real estate terms generally requires 4 to 6 months of consistent content and link building.",
    },
  ],
};

export const seoPages = [
  seoServicesHub,
  globalSeo,
  localSeo,
  technicalSeo,
  geoTargetingSeo,
  localCitationsGmb,
  dentalSeo,
  locksmithSeo,
  carDealershipSeo,
  realEstateSeo,
];
