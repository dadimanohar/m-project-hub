/**
 * Converts AVR Web Consulting React content (PageContent objects) into
 * WordPress Gutenberg block markup, emitted as PHP content-library files
 * for the block theme's idempotent importer.
 *
 * Run from project root: bun /tmp/convert-content.ts
 */
import { writeFileSync, mkdirSync } from "fs";
import type { PageContent, ContentBlock, PageSection } from "@/content/types";

import { seoPages } from "@/content/pages/seo";
import { companyPages } from "@/content/pages/company";
import { webDesignPages } from "@/content/pages/web-design";
import { advertisingPages } from "@/content/pages/advertising";
import { contentPages } from "@/content/pages/content-marketing";
import { developmentAutomationPages } from "@/content/pages/development-automation";
import {
  aiSeoHub, aeo, geoSeo, llmSeo, llmo, aiVisibility, aiOverviews,
  aiCitations, aiRetrievalSystems,
} from "@/content/pages/ai-seo";
import { blogPosts, blogHub } from "@/content/pages/blog";
import {
  homeAnswer, homeStats, homeServices, homeSeoServices, homeGrowthServices,
  homeProcess, homeAiServices, homeDevelopmentTechnologies, homeAutomationServices, homeFaqs,
} from "@/content/pages/home";
import { allFaqs, faqCategories, faqCountByCategory } from "@/content/faqs";
import { caseStudyPages, caseStudiesHub } from "@/content/pages/case-studies";
import { industryPages, industriesHub } from "@/content/pages/industries";
import { locationPages, locationsHub } from "@/content/pages/locations";

const OUT = "wordpress-theme/avr-web-consulting/inc/content";
mkdirSync(OUT, { recursive: true });

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Inline markup: allow simple emphasis, escape the rest. */
const inline = (s: string) => esc(s);

function blockParagraph(text: string, extraClass = ""): string {
  const cls = extraClass ? ` className="${extraClass}"` : "";
  const clsAttr = extraClass ? ` class="${extraClass}"` : "";
  return `<!-- wp:paragraph${cls ? ` {${cls.slice(0)}}` : ""} -->\n<p${clsAttr}>${inline(text)}</p>\n<!-- /wp:paragraph -->\n`;
}

function blockHeading(text: string, level = 2, anchor?: string): string {
  const attrs: string[] = [`"level":${level}`];
  if (anchor) attrs.push(`"anchor":"${anchor}"`);
  const idAttr = anchor ? ` id="${anchor}"` : "";
  return `<!-- wp:heading {${attrs.join(",")}} -->\n<h${level} class="wp-block-heading"${idAttr}>${inline(text)}</h${level}>\n<!-- /wp:heading -->\n`;
}

function blockList(items: string[], title?: string): string {
  let out = "";
  if (title) out += blockHeading(title, 3);
  const lis = items.map((i) => `<li>${inline(i)}</li>`).join("");
  out += `<!-- wp:list -->\n<ul class="wp-block-list">${lis}</ul>\n<!-- /wp:list -->\n`;
  return out;
}

function blockSteps(title: string | undefined, items: { title: string; text: string }[]): string {
  let out = title ? blockHeading(title, 3) : "";
  const lis = items
    .map((i) => `<li><strong>${inline(i.title)}</strong> — ${inline(i.text)}</li>`)
    .join("");
  out += `<!-- wp:list {"ordered":true} -->\n<ol class="wp-block-list">${lis}</ol>\n<!-- /wp:list -->\n`;
  return out;
}

function blockTable(head: string[], rows: string[][], title?: string): string {
  let out = title ? blockHeading(title, 3) : "";
  const headCells = head.map((h) => `<th>${inline(h)}</th>`).join("");
  const bodyRows = rows
    .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
    .join("");
  out += `<!-- wp:table {"className":"is-style-stripes"} -->\n<figure class="wp-block-table is-style-stripes"><table><thead><tr>${headCells}</tr></thead><tbody>${bodyRows}</tbody></table></figure>\n<!-- /wp:table -->\n`;
  return out;
}

function blockCallout(title: string, text: string): string {
  return `<!-- wp:group {"className":"avr-callout","layout":{"type":"constrained"}} -->\n<div class="wp-block-group avr-callout"><!-- wp:heading {"level":3} -->\n<h3 class="wp-block-heading">${inline(title)}</h3>\n<!-- /wp:heading -->\n<!-- wp:paragraph -->\n<p>${inline(text)}</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:group -->\n`;
}

function blockDetails(question: string, answer: string): string {
  // Native WordPress Details block: accessible, no JS required, editable in Gutenberg.
  return `<!-- wp:details -->\n<details class="wp-block-details"><summary>${inline(question)}</summary><!-- wp:paragraph -->\n<p>${inline(answer)}</p>\n<!-- /wp:paragraph --></details>\n<!-- /wp:details -->\n`;
}

function sectionToBlocks(section: PageSection): string {
  let out = blockHeading(section.heading, 2, section.id);
  for (const b of section.blocks as ContentBlock[]) {
    switch (b.kind) {
      case "paragraph":
        out += blockParagraph(b.text);
        break;
      case "list":
        out += blockList(b.items, b.title);
        break;
      case "steps":
        out += blockSteps(b.title, b.items);
        break;
      case "table":
        out += blockTable(b.head, b.rows, b.title);
        break;
      case "callout":
        out += blockCallout(b.title, b.text);
        break;
      case "social":
        break; // social links live in the footer template part
    }
  }
  return out;
}

function pageToBlocks(p: PageContent): string {
  let out = "";
  if (p.eyebrow) {
    out += `<!-- wp:paragraph {"className":"avr-eyebrow"} -->\n<p class="avr-eyebrow">${inline(p.eyebrow)}</p>\n<!-- /wp:paragraph -->\n`;
  }
  out += blockHeading(p.h1, 1);
  // "Quick answer" callout — a signature of the approved design.
  out += blockCallout("Quick answer", p.answer);
  if (p.hero?.image) {
    const alt = p.hero.imageAlt ?? p.h1;
    out += `<!-- wp:image {"sizeSlug":"large"} -->\n<figure class="wp-block-image size-large"><img src="${p.hero.image}" alt="${esc(alt)}"/></figure>\n<!-- /wp:image -->\n`;
  }
  if (p.highlights?.length) {
    const cells = p.highlights
      .map(
        (h) =>
          `<!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph {"className":"avr-highlight-label"} -->\n<p class="avr-highlight-label">${inline(h.label)}</p>\n<!-- /wp:paragraph -->\n<!-- wp:paragraph {"className":"avr-highlight-value"} -->\n<p class="avr-highlight-value">${inline(h.value)}</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->`
      )
      .join("\n");
    out += `<!-- wp:columns {"className":"avr-highlights"} -->\n<div class="wp-block-columns avr-highlights">\n${cells}\n</div>\n<!-- /wp:columns -->\n`;
  }
  for (const s of p.sections) out += sectionToBlocks(s);
  if (p.faqs?.length) {
    out += blockHeading("Frequently asked questions", 2, "faqs");
    for (const f of p.faqs) out += blockDetails(f.question, f.answer);
  }
  if (p.related?.length) {
    out += blockHeading("Related services and resources", 2);
    const lis = p.related
      .map((r) => `<li><a href="${esc(r.to)}">${inline(r.label)}</a></li>`)
      .join("");
    out += `<!-- wp:list -->\n<ul class="wp-block-list">${lis}</ul>\n<!-- /wp:list -->\n`;
  }
  // CTA — matches approved design.
  out += `<!-- wp:group {"className":"avr-cta","layout":{"type":"constrained"}} -->\n<div class="wp-block-group avr-cta"><!-- wp:heading -->\n<h2 class="wp-block-heading">Ready to grow your business?</h2>\n<!-- /wp:heading -->\n<!-- wp:paragraph -->\n<p>Tell us about your goals and we will recommend the most practical next steps for your website, visibility, and lead generation.</p>\n<!-- /wp:paragraph -->\n<!-- wp:buttons -->\n<div class="wp-block-buttons"><!-- wp:button -->\n<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="/contact">Request a digital audit</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons --></div>\n<!-- /wp:group -->\n`;
  return out;
}

function phpString(s: string): string {
  return "'" + s.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
}

type PageDef = {
  slug: string; // e.g. /seo-services/local-seo
  title: string;
  description: string;
  content: string;
  type: "page" | "post";
};

const defs: PageDef[] = [];
const seen = new Set<string>();

function addPage(p: PageContent, type: "page" | "post" = "page") {
  const slug = p.slug.replace(/\/+$/, "") || "/";
  if (seen.has(slug)) return;
  seen.add(slug);
  defs.push({ slug, title: p.title, description: p.description, content: pageToBlocks(p), type });
}

const aiSeoPages = [aiSeoHub, aeo, geoSeo, llmSeo, llmo, aiVisibility, aiOverviews, aiCitations, aiRetrievalSystems];

[
  ...seoPages, ...companyPages, ...webDesignPages, ...advertisingPages,
  ...contentPages, ...developmentAutomationPages, ...aiSeoPages,
  caseStudiesHub, industriesHub, locationsHub, blogHub,
].forEach((p) => addPage(p));
caseStudyPages.forEach((p) => addPage(p));
industryPages.forEach((p) => addPage(p));
locationPages.forEach((p) => addPage(p));
blogPosts.forEach((p) => addPage(p, "post"));

// ---- Homepage (from home.ts) ----
function cardGrid(items: { title: string; text: string; to: string }[], cols = 3): string {
  const cards = items
    .map(
      (c) => `<!-- wp:group {"className":"avr-card","layout":{"type":"constrained"}} -->\n<div class="wp-block-group avr-card"><!-- wp:heading {"level":3} -->\n<h3 class="wp-block-heading"><a href="${esc(c.to)}">${inline(c.title)}</a></h3>\n<!-- /wp:heading -->\n<!-- wp:paragraph -->\n<p>${inline(c.text)}</p>\n<!-- /wp:paragraph -->\n<!-- wp:paragraph {"className":"avr-explore"} -->\n<p class="avr-explore"><a href="${esc(c.to)}">Explore →</a></p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:group -->`
    )
    .join("\n");
  return `<!-- wp:group {"className":"avr-card-grid avr-cols-${cols}","layout":{"type":"constrained"}} -->\n<div class="wp-block-group avr-card-grid avr-cols-${cols}">\n${cards}\n</div>\n<!-- /wp:group -->\n`;
}

function homePageBlocks(): string {
  let out = "";
  // Hero: cover-style group with poster image; video is added progressively by theme JS.
  out += `<!-- wp:group {"className":"avr-hero","layout":{"type":"constrained"}} -->\n<div class="wp-block-group avr-hero"><!-- wp:paragraph {"className":"avr-eyebrow avr-eyebrow-light"} -->\n<p class="avr-eyebrow avr-eyebrow-light">Full-service digital marketing agency</p>\n<!-- /wp:paragraph -->\n<!-- wp:heading {"level":1} -->\n<h1 class="wp-block-heading">Grow Your Business With Smarter Digital Marketing</h1>\n<!-- /wp:heading -->\n<!-- wp:paragraph {"className":"avr-hero-lead"} -->\n<p class="avr-hero-lead">AVR Web Consulting helps businesses build stronger online visibility, attract qualified traffic, generate leads, and grow through SEO, advertising, content marketing, and web development.</p>\n<!-- /wp:paragraph -->\n<!-- wp:paragraph {"className":"avr-hero-sub"} -->\n<p class="avr-hero-sub">Now expanding into AI Search, Advanced Web Development &amp; Business Automation.</p>\n<!-- /wp:paragraph -->\n<!-- wp:buttons -->\n<div class="wp-block-buttons"><!-- wp:button -->\n<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="/contact">Request a digital audit</a></div>\n<!-- /wp:button -->\n<!-- wp:button {"className":"is-style-outline"} -->\n<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="https://wa.me/918121423455?text=Hello%20AVR%20Web%20Consulting%2C%20I%20would%20like%20to%20discuss%20your%20services.">WhatsApp</a></div>\n<!-- /wp:button -->\n<!-- wp:button {"className":"is-style-outline"} -->\n<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="tel:+918121423455">Call +91 81214 23455</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons --></div>\n<!-- /wp:group -->\n`;
  // Who we are
  out += blockParagraph("Who we are", "avr-eyebrow");
  out += blockHeading("A digital marketing agency focused on sustainable online growth", 2);
  out += blockParagraph("We help businesses improve their online presence, reach the right audience, and turn digital visibility into business growth through SEO, advertising, social media, content, and web development.");
  out += blockCallout("What is AVR Web Consulting?", homeAnswer);
  out += `<!-- wp:image {"sizeSlug":"large"} -->\n<figure class="wp-block-image size-large"><img src="/wp-content/themes/avr-web-consulting/assets/images/image1.webp" alt="AVR Web Consulting digital strategy team"/></figure>\n<!-- /wp:image -->\n`;
  // Stats
  const statCells = homeStats
    .map(
      (s) => `<!-- wp:column -->\n<div class="wp-block-column"><!-- wp:paragraph {"className":"avr-highlight-label"} -->\n<p class="avr-highlight-label">${inline(s.label)}</p>\n<!-- /wp:paragraph -->\n<!-- wp:paragraph {"className":"avr-highlight-value"} -->\n<p class="avr-highlight-value">${inline(s.value)}</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->`
    )
    .join("\n");
  out += `<!-- wp:columns {"className":"avr-highlights"} -->\n<div class="wp-block-columns avr-highlights">\n${statCells}\n</div>\n<!-- /wp:columns -->\n`;
  // Services
  out += blockHeading("Digital Marketing Services That Drive Growth", 2, "services");
  out += blockParagraph("From SEO and paid advertising to content marketing and web development, AVR Web Consulting provides the core digital services businesses need to build visibility, attract customers, and grow online.");
  out += cardGrid(homeServices, 4);
  // SEO services
  out += blockHeading("Build a Stronger Search Presence", 2);
  out += blockParagraph("Our SEO services improve technical website health, local and global discovery, geographic relevance, and the ability to attract useful organic traffic.");
  out += cardGrid(homeSeoServices, 3);
  // Growth
  out += blockHeading("Turn Visibility Into Meaningful Business Activity", 2);
  out += blockParagraph("Our advertising, content, and website services work together to reach audiences, communicate value, build trust, and support conversion.");
  out += cardGrid(homeGrowthServices, 3);
  // Process
  out += blockHeading("A Connected Journey From Discovery to Digital Progress", 2);
  out += blockSteps(undefined, homeProcess.map((p) => ({ title: p.title, text: p.text })));
  // AI SEO
  out += blockHeading("AI SEO & AI Search Visibility", 2);
  out += blockParagraph("Search is evolving beyond traditional search engines. Our AI SEO services help businesses structure and optimize their digital presence for emerging AI-driven discovery experiences.");
  out += cardGrid(homeAiServices, 3);
  out += `<!-- wp:image {"sizeSlug":"large"} -->\n<figure class="wp-block-image size-large"><img src="/wp-content/themes/avr-web-consulting/assets/images/image2.webp" alt="AI search platforms covered by AVR Web Consulting"/></figure>\n<!-- /wp:image -->\n`;
  // Development
  out += blockHeading("Advanced Full-Stack Web Development", 2);
  out += blockParagraph("When standard website solutions are not enough, we build custom digital experiences and web applications using modern development technologies, selected around the business outcome rather than the technology itself.");
  out += blockList(homeDevelopmentTechnologies);
  // Automation
  out += blockHeading("AI Agents & Business Automation", 2);
  out += blockParagraph("Automate repetitive processes, connect business tools, and build intelligent workflows that help businesses operate more efficiently.");
  out += cardGrid(homeAutomationServices, 3);
  // FAQs
  out += blockHeading("AVR Web Consulting — frequently asked questions", 2, "faqs");
  for (const f of homeFaqs) out += blockDetails(f.question, f.answer);
  return out;
}

// ---- FAQs page (from faqs.ts) ----
function faqsPageBlocks(): string {
  let out = blockHeading("Frequently asked questions", 1);
  out += blockParagraph("Answers to common questions about AVR Web Consulting's SEO, AI SEO, advertising, content marketing, web development, and automation services.");
  for (const cat of faqCategories) {
    out += blockHeading(`${cat} (${faqCountByCategory[cat] ?? 0})`, 2);
    for (const f of allFaqs.filter((x) => x.category === cat)) {
      out += blockDetails(f.question, f.answer);
    }
  }
  return out;
}

// ---- Contact page ----
function contactPageBlocks(): string {
  let out = blockHeading("Contact AVR Web Consulting", 1);
  out += blockParagraph("Tell us about your business goals and we will recommend practical next steps for your website, search visibility, and lead generation. We usually respond within one business day.");
  out += blockHeading("Send us a message", 2);
  out += `<!-- wp:shortcode -->\n[avr_contact_form]\n<!-- /wp:shortcode -->\n`;
  out += blockHeading("Other ways to reach us", 2);
  out += blockList([
    "Email: info@avrwebconsulting.com",
    "Phone: +91 91825 43249 (Mon–Sat, 09:30–19:00 IST)",
    "WhatsApp: chat with us at +91 91825 43249",
    "Address: Hero Showroom Lane, D No: 43-18-16, Venkatarajunagar, TSN Colony, Beside Sri Ram Insurance, Dondaparthy, Visakhapatnam – 530016, Andhra Pradesh, India",
  ]);
  return out;
}

defs.push(
  { slug: "/", title: "AVR Web Consulting | Digital Marketing & AI SEO Agency", description: "AVR Web Consulting is a full-service digital marketing agency in Visakhapatnam, India, offering SEO, AI SEO, advertising, content marketing, web development, and business automation.", content: homePageBlocks(), type: "page" },
  { slug: "/faqs", title: "FAQs | AVR Web Consulting", description: "Answers to common questions about AVR Web Consulting's SEO, AI SEO, advertising, content, web development, and automation services.", content: faqsPageBlocks(), type: "page" },
  { slug: "/contact", title: "Contact Us | AVR Web Consulting", description: "Contact AVR Web Consulting for SEO, AI SEO, advertising, content marketing, web development, and automation services. Request a free digital audit.", content: contactPageBlocks(), type: "page" },
);
seen.add("/"); seen.add("/faqs"); seen.add("/contact");

// Emit one PHP file per top-level section for maintainability.
const groups = new Map<string, PageDef[]>();
for (const d of defs) {
  const top = d.slug.split("/")[1] || "home";
  const key = d.type === "post" ? "blog" : top;
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key)!.push(d);
}

const manifest: { file: string; count: number }[] = [];
for (const [key, pages] of groups) {
  const file = `${key}.php`;
  const body = pages
    .map((d) => {
      const segments = d.slug.split("/").filter(Boolean);
      const slug = segments[segments.length - 1] ?? "home";
      const parent = segments.length > 1 ? segments[segments.length - 2] : "";
      return `  array(
    'slug' => ${phpString(slug)},
    'path' => ${phpString(d.slug)},
    'parent' => ${phpString(parent)},
    'type' => ${phpString(d.type)},
    'title' => ${phpString(d.title)},
    'description' => ${phpString(d.description)},
    'content' => ${phpString(d.content)},
  ),`;
    })
    .join("\n");
  writeFileSync(
    `${OUT}/${file}`,
    `<?php\n/**\n * AVR Web Consulting content library: ${key}\n * Generated from the approved website content. Editable after import via Gutenberg.\n *\n * @package AVR_Web_Consulting\n */\n\nif (!defined('ABSPATH')) {\n    exit;\n}\n\nreturn array(\n${body}\n);\n`
  );
  manifest.push({ file, count: pages.length });
}

writeFileSync(
  `${OUT}/manifest.php`,
  `<?php\n/**\n * Content library manifest.\n *\n * @package AVR_Web_Consulting\n */\n\nif (!defined('ABSPATH')) {\n    exit;\n}\n\nreturn array(\n${manifest.map((m) => `  ${phpString(m.file)} => ${m.count},`).join("\n")}\n);\n`
);

console.log(`Generated ${defs.length} content definitions in ${groups.size} files:`);
for (const m of manifest) console.log(`  ${m.file}: ${m.count}`);
