# AVR Web Consulting — Editable WordPress Theme Rebuild

## What I already confirmed (evidence, not guesses)

- **Live site settings:** WordPress reports Home and Site address as `https://avrwebconsulting.com` (https, no www). The homepage is a static WordPress page. Yoast SEO and All-in-One WP Migration are installed. The `avr-web-consulting` theme is the active one.
- **Local SEO page:** the original site uses `/seo-services/local-seo`. The live domain sends that address to `/local-seo/` with a permanent redirect. So the WordPress page is a top-level page called `local-seo`, not a child of "SEO Services". Every internal link to `/seo-services/...` depends on WordPress guessing the redirect. The current theme also has only one generic page template, so the page looks right only if someone pasted the full page markup into its content.
- **FAQs:** the current theme's stylesheet expects FAQs to switch an open/closed marker the way the original React version did. The theme's script only handles the menus and has **no FAQ code at all**. FAQs can't open on any page. That is the root cause.
- **Editability:** the current theme puts the homepage, header and footer into PHP files as one long block of fixed markup (about 26 KB in the header alone). Almost nothing can be edited from the dashboard.

## Approach

Build a new theme version (v2.0) based on Gutenberg blocks with a small companion plugin. Every section of the original site becomes a block you can edit in the normal WordPress page editor. The design stays the same.

```text
Theme (looks)                     Companion plugin (editing)
- header/footer templates         - AVR blocks: Hero, Answer box, Stat band,
- design styles, Inter font         Content section, Card grid, Service cards,
- one small script for menus        FAQ group + FAQ item, CTA band, Related links,
  and FAQs                          Breadcrumbs, Inquiry form
- Settings page: phone, email,    - Page importer: creates/updates all ~60 pages
  WhatsApp, address, socials        with their original content as blocks
- Menus: Header + Footer          - FAQ schema output for search engines
```

The plugin is kept separate so your content keeps working even if the theme changes later. Both are free and need no Divi or Elementor.

## Steps

1. **Back up and list everything:** keep the current theme ZIP as `avr-web-consulting-v1-backup.zip`. Write a list of every page, its address, its FAQs and its forms (about 60 pages, taken from the original site's content files).
2. **Convert the content automatically:** a script reads the original site content (headings, paragraphs, images, alt text, FAQs, buttons, page titles and descriptions) and turns it into WordPress block content. Nothing is retyped by hand, so nothing is lost.
3. **Build the blocks:** each section type becomes an editable block with text, image, link and list fields. FAQs become an "FAQ group" holding "FAQ items" that you can add, delete and drag to reorder.
4. **Fix the FAQs everywhere:** use the browser's built-in open/close element plus a small script for the animation and the plus/minus icon. Answers stay readable even if the script fails to load. Mouse, keyboard and touch all work, several FAQ groups on one page work, and new FAQs need no code.
5. **Fix Local SEO and page addresses:** the importer creates parent pages ("SEO Services", "AI SEO", "Paid Advertising" and so on) with child pages, so `/seo-services/local-seo/` works directly again. A redirect keeps the current `/local-seo/` address working so its search ranking carries over. All internal links are rebuilt from WordPress's own page addresses, not fixed text.
6. **Header, footer and menus:** real WordPress menus (header with dropdowns, footer). Contact details and social links go on a simple "AVR Settings" page.
7. **Typography:** Inter for body text at normal and medium weight, with lighter headings. Line spacing gets more room. Colors, layout and spacing stay as they are.
8. **Divi independence:** the theme loads nothing from Divi. The importer warns about any existing page that still contains Divi codes and never deletes it. It only replaces page content when you choose to.
9. **SEO:** Yoast stays in charge of titles, descriptions and canonical addresses. The importer fills in Yoast's fields with the original titles and descriptions, and the theme won't add duplicate tags. FAQ data for search engines is generated from the FAQ blocks.
10. **Test in a real WordPress here:** install WordPress locally in my workspace, install the ZIPs and activate them. Then import pages, check every page address directly and after refresh, click through every FAQ on every page, test the mobile menu and form, and check for errors in the browser and PHP. Then run your editing test: change a heading, paragraph, image, FAQ and button link, publish, and check the result in a fresh browser session.
11. **Deliver:** theme ZIP, plugin ZIP, source code, and one PDF guide with the conversion summary, issues and fixes, file list, editing instructions for non-coders, install, staging and deploy steps, rollback steps, and the test report (local, staging and live results kept separate).

## Limitations (stated up front)

- I don't have your WordPress admin, hosting or database access. I won't install anything on the live domain, and I will mark staging and live tests as **BLOCKED**, not passed.
- Before installing on the live site, you'll need to take a backup with All-in-One WP Migration (the guide includes the exact steps). Then you install the two ZIPs and run the importer once, ideally on a staging copy first.
- The contact form will send email through WordPress. Whether that email actually arrives depends on your host's mail setup, which I can only test locally.

## Technical details

- New files: `wordpress-theme/avr-web-consulting/` (theme.json, templates/parts for header and footer, functions.php with menus, settings and assets, inc/redirects.php, assets/js/theme.js with the FAQ and menu code, rebuilt CSS) and `wordpress-plugin/avr-blocks/` (block.json for each block using server-side rendering through render.php, so the stored markup stays simple and survives edits; editor script with no build step; importer using `wp_insert_post` with parent IDs; Yoast meta through `update_post_meta`).
- A Bun export script (`scripts/export-wp-content.ts`) turns `src/content/**` into `pages.json`, which ships inside the plugin.
- Redirect: `template_redirect` sends old top-level slugs to the nested addresses with a 301, only when the nested page exists.
- Local test setup: PHP and WordPress with SQLite through nix, plus Playwright for click and keyboard FAQ tests at phone, tablet and desktop widths.
- The Lovable React app stays unchanged.
