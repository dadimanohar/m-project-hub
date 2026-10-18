import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown, X } from "lucide-react";
import { useState } from "react";

import { navigation, business } from "@/content/site";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/site/SocialLinks";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 font-sans backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-page flex h-16 items-center justify-between gap-3 sm:gap-4 lg:h-20">
        {/* Company Branding Unit */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 shrink-0 group py-1"
          aria-label={`${business.name} home`}
        >
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img
              src="/1790648464804.png"
              alt="AVR Web Consulting logo"
              width={48}
              height={41}
              fetchPriority="high"
              decoding="async"
              className="h-9 w-auto object-contain sm:h-11 md:h-12 shrink-0 transition-transform duration-200 group-hover:scale-105"
            />
          </picture>
          <span className="flex flex-col justify-center min-w-0">
            <span className="whitespace-nowrap text-base font-bold tracking-tight text-foreground sm:text-lg lg:text-xl leading-tight">
              AVR Web Consulting
            </span>
            <span className="mt-0.5 whitespace-nowrap text-[8.5px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-[10px] lg:text-[11px] leading-tight">
              FUTURE-PROOF SEO. AI-VISIBLE RESULTS.
            </span>
          </span>
        </Link>

        {/* Desktop Navigation - 7 categories, clean and uncrowded */}
        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex shrink-0">
          {navigation.map((group) => (
            <div key={group.label} className="group relative">
              <Link
                to={group.to}
                className="flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground xl:px-3"
                activeProps={{ className: "bg-accent text-accent-foreground" }}
              >
                <span>{group.label}</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-0 top-full w-[22rem] translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <ul className="rounded-2xl border border-border bg-popover p-2 shadow-xl">
                  {group.children.map((child) => (
                    <li key={child.to}>
                      <Link
                        to={child.to}
                        className="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"
                      >
                        <span className="block text-sm font-semibold">{child.label}</span>
                        {child.blurb && (
                          <span className="block text-xs text-muted-foreground">{child.blurb}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>

        {/* Mobile & Tablet Navigation Trigger */}
        <div className="flex items-center xl:hidden shrink-0">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full shrink-0"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
              <SheetHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <SheetTitle className="font-sans text-lg font-bold">AVR Web Consulting</SheetTitle>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </SheetHeader>
              <div className="px-2 pb-10">
                <Accordion type="multiple" className="w-full">
                  {navigation.map((group) => (
                    <AccordionItem key={group.label} value={group.label}>
                      <AccordionTrigger className="font-sans text-base font-medium py-3">
                        {group.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-1 pl-2">
                          <li>
                            <Link
                              to={group.to}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-2.5 py-2 text-sm font-semibold text-primary hover:bg-mist"
                            >
                              {group.label} overview
                            </Link>
                          </li>
                          {group.children.map((child) => (
                            <li key={child.to}>
                              <Link
                                to={child.to}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg px-2.5 py-2 text-sm text-foreground/90 hover:bg-mist"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-6 border-t border-border pt-6">
                  <Button asChild className="w-full rounded-full font-semibold">
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-col items-center border-t border-border pt-8">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Follow Us
                  </h3>
                  <SocialLinks variant="dark" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
