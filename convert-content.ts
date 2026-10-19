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
