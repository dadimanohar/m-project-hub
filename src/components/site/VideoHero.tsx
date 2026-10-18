import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { business } from "@/content/site";

import { useEffect, useRef, useState } from "react";

export function VideoHero({
  eyebrow,
  title,
  subtitle,
  secondary,
  videoSrc = "/avr.mp4",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  secondary?: string;
  videoSrc?: string;
}) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Defer video loading slightly to prioritize critical page rendering and LCP
    const timer = setTimeout(() => setShouldLoadVideo(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Sources are inserted after mount, so restart resource selection explicitly.
    if (shouldLoadVideo) videoRef.current?.load();
  }, [shouldLoadVideo]);

  return (
    <section className="relative isolate min-h-[38rem] overflow-hidden bg-ink text-ink-foreground lg:min-h-[44rem]">
      <picture>
        <source srcSet="/images/home-hero-poster.webp" type="image/webp" />
        <img
          src="/images/home-hero-poster.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          width={1280}
          height={720}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        poster="/images/home-hero-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload={shouldLoadVideo ? "auto" : "none"}
        aria-hidden="true"
        tabIndex={-1}
      >
        {shouldLoadVideo && <source src={videoSrc} type="video/mp4" />}
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/50"
        aria-hidden="true"
      />

      <div className="container-page relative flex min-h-[38rem] flex-col justify-center py-20 lg:min-h-[44rem]">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-ink-foreground/25 bg-ink-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/90 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-balance-pretty text-lg text-ink-foreground/80 lg:text-xl">
          {subtitle}
        </p>
        {secondary && (
          <p className="mt-3 max-w-2xl text-sm font-medium text-ink-foreground/70 lg:text-base">
            {secondary}
          </p>
        )}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">
              Request a digital audit
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
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
    </section>
  );
}
