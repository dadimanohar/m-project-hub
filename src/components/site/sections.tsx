import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

import type { ContentBlock, Faq, PageSection } from "@/content/types";
import { business } from "@/content/site";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/site/SocialLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "plain",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "plain" | "mist" | "ink";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 lg:py-24",
        tone === "mist" && "bg-mist",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <As className="text-3xl font-bold leading-tight lg:text-4xl">{title}</As>
      {intro && <p className="mt-4 text-balance-pretty text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

/** Answer-first block: the 40-60 word direct answer AI engines extract. */
export function AnswerBlock({ text, question }: { text: string; question?: string }) {
  return (
    <div className="rounded-2xl border border-primary/25 bg-accent/50 p-6 lg:p-8">
      <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        Quick answer
      </p>
      {question && <p className="mb-2 font-display text-lg font-semibold">{question}</p>}
      <p className="text-base leading-relaxed text-foreground lg:text-lg">{text}</p>
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { label: string; to: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((item, i) => (
          <li key={item.to} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === trail.length - 1 ? (
              <span className="text-foreground">{item.label}</span>
            ) : (
              <Link to={item.to} className="hover:text-primary">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function StatBand({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-6 lg:grid-cols-4 lg:p-8">
      {stats.map((s) => (
        <div key={s.label}>
          <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{s.label}</dt>
          <dd className="mt-1 font-display text-2xl font-bold text-foreground lg:text-3xl">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.kind === "paragraph")
          return (
            <p key={i} className="text-balance-pretty text-base leading-relaxed text-foreground/90">
              {block.text}
            </p>
          );

        if (block.kind === "list")
          return (
            <div key={i}>
              {block.title && <h3 className="mb-3 text-lg font-semibold">{block.title}</h3>}
              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );

        if (block.kind === "steps")
          return (
            <div key={i}>
              {block.title && <h3 className="mb-4 text-lg font-semibold">{block.title}</h3>}
              <ol className="space-y-4">
                {block.items.map((item, idx) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                      {idx + 1}
                    </span>
                    <span>
                      <span className="block font-semibold">{item.title}</span>
                      <span className="block text-foreground/80">{item.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          );

        if (block.kind === "table")
          return (
            <div key={i}>
              {block.title && <h3 className="mb-3 text-lg font-semibold">{block.title}</h3>}
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-mist">
                    <tr>
                      {block.head.map((h) => (
                        <th key={h} scope="col" className="px-4 py-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row.join("|")} className="border-t border-border">
                        {row.map((cell, ci) => {
                          const isEmail = cell === business.email;
                          const isPhone = cell === business.phone;
                          const isWhatsApp = isPhone && row[0]?.toLowerCase().includes("whatsapp");

                          return (
                            <td key={ci} className="px-4 py-3 align-top text-foreground/90">
                              {isEmail ? (
                                <a
                                  href={`mailto:${business.email}?subject=${encodeURIComponent(
                                    "Website Inquiry - AVR Web Consulting"
                                  )}`}
                                  className="text-primary hover:underline font-medium"
                                >
                                  {cell}
                                </a>
                              ) : isWhatsApp ? (
                                <a
                                  href={business.whatsapp}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline font-medium"
                                >
                                  {cell}
                                </a>
                              ) : isPhone ? (
                                <a
                                  href={business.phoneHref}
                                  className="text-primary hover:underline font-medium"
                                >
                                  {cell}
                                </a>
                              ) : (
                                cell
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );

        if (block.kind === "social")
          return (
            <div key={i} className="mt-4">
              <SocialLinks variant="dark" />
            </div>
          );

        return (
          <div key={i} className="rounded-xl border-l-4 border-amber bg-amber/10 p-5">
            <p className="font-display font-semibold">{block.title}</p>
            <p className="mt-1 text-foreground/90">{block.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export function ContentSections({ sections }: { sections: PageSection[] }) {
  return (
    <div className="space-y-14">
      {sections.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-28">
          <h2 className="mb-5 text-2xl font-bold lg:text-3xl">{s.heading}</h2>
          <Blocks blocks={s.blocks} />
        </section>
      ))}
    </div>
  );
}

export function TableOfContents({ sections }: { sections: PageSection[] }) {
  return (
    <nav aria-label="On this page" className="rounded-2xl border border-border bg-card p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        On this page
      </p>
      <ul className="space-y-2 text-sm">
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-foreground/80 hover:text-primary">
              {s.heading}
            </a>
          </li>
        ))}
        <li>
          <a href="#faqs" className="text-foreground/80 hover:text-primary">
            Frequently asked questions
          </a>
        </li>
      </ul>
    </nav>
  );
}

export function FaqAccordion({ faqs, heading }: { faqs: Faq[]; heading?: string }) {
  return (
    <div id="faqs" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold lg:text-3xl">
        {heading ?? "Frequently asked questions"}
      </h2>
      <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-5">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`faq-${i}`}>
            <AccordionTrigger className="text-left font-display text-base font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-foreground/85">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export function CTABand({
  title = "Get an AI visibility & SEO audit",
  text = "Tell us your target keywords and markets. We reply within one business day with findings, priorities and a tailored proposal.",
  ctaText = "Book consultation",
  showWhatsapp = false,
}: {
  title?: string;
  text?: string;
  ctaText?: string;
  showWhatsapp?: boolean;
}) {
  return (
    <Section tone="ink">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold lg:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-ink-foreground/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          {showWhatsapp && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
            >
              <a
                href={`${business.whatsapp}?text=Hello%20AVR%20Web%20Consulting,%20I%20would%20like%20to%20discuss%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          )}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
          >
            <a href={business.phoneHref}>Call {business.phone}</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function RelatedLinks({ links }: { links: { label: string; to: string }[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Related services
      </p>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-foreground/80 hover:text-primary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
