<!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.webp'); ?>" type="image/webp">
  
  <?php if (is_front_page()) : ?>
  <!-- Early Preload for LCP Hero Poster Image (High Fetch Priority) -->
  <link rel="preload" as="image" href="<?php echo esc_url(get_template_directory_uri() . '/assets/images/home-hero-poster.webp'); ?>" type="image/webp" fetchpriority="high">
  <?php endif; ?>

  <?php wp_head(); ?>
</head>
<body <?php body_class('bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-foreground'); ?>>
<?php wp_body_open(); ?>

<div class="flex min-h-screen flex-col bg-background font-sans text-foreground">
  <!-- Sticky Header Navigation -->
  <header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 font-sans backdrop-blur supports-[backdrop-filter]:bg-background/80">
    <div class="container-page flex h-16 items-center justify-between gap-3 sm:gap-4 lg:h-20">
      
      <!-- Company Branding Unit -->
      <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-2.5 sm:gap-3.5 min-w-0 shrink-0 group py-1" aria-label="AVR Web Consulting home">
        <picture>
          <source srcset="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.webp'); ?>" type="image/webp">
          <img
            src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.png'); ?>"
            alt="AVR Web Consulting logo"
            width="48"
            height="41"
            fetchpriority="high"
            decoding="async"
            class="h-9 w-auto object-contain sm:h-11 md:h-12 shrink-0 transition-transform duration-200 group-hover:scale-105"
          >
        </picture>
        <span class="flex flex-col justify-center min-w-0">
          <span class="whitespace-nowrap text-base font-bold tracking-tight text-foreground sm:text-lg lg:text-xl leading-tight">AVR Web Consulting</span>
          <span class="mt-0.5 whitespace-nowrap text-[8.5px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-[10px] lg:text-[11px] leading-tight">FUTURE-PROOF SEO. AI-VISIBLE RESULTS.</span>
        </span>
      </a>

      <!-- Desktop Navigation - 7 categories with Dropdowns -->
      <nav aria-label="Primary" class="hidden items-center gap-1 xl:flex shrink-0">
        <!-- SEO Services Dropdown with all subservices + 4 dedicated industry pages -->
        <div class="group relative avr-nav-group">
          <a href="<?php echo esc_url(home_url('/seo-services')); ?>" class="avr-nav-link flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground xl:px-3" aria-expanded="false">
            <span>SEO Services</span>
            <svg class="avr-chevron h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
          </a>
          <div class="avr-nav-dropdown invisible absolute left-0 top-full w-[24rem] translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <ul class="rounded-2xl border border-border bg-popover p-2 shadow-xl max-h-[28rem] overflow-y-auto">
              <li><a href="<?php echo esc_url(home_url('/seo-services/local-seo')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Local SEO Services</span><span class="block text-xs text-muted-foreground">Local visibility, citations & Google Business Profile</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/seo-services/traditional-seo')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Traditional Organic SEO</span><span class="block text-xs text-muted-foreground">Technical health, architecture, on-page optimization</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/seo-services/enterprise-seo')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Enterprise SEO</span><span class="block text-xs text-muted-foreground">Scalable organic growth for complex websites</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/seo-services/e-commerce-seo')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">E-Commerce SEO</span><span class="block text-xs text-muted-foreground">Category structure, product schema & transactional intent</span></a></li>
              <!-- Dedicated Industry SEO Pages -->
              <li class="border-t border-border/60 my-1 pt-1">
                <span class="px-3 py-1 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Industry Solutions</span>
              </li>
              <li><a href="<?php echo esc_url(home_url('/seo-services/dental-seo-services')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold text-primary">Dental SEO Services</span><span class="block text-xs text-muted-foreground">Local visibility & appointment enquiries for dental clinics</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/seo-services/locksmith-seo')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold text-primary">Locksmith SEO</span><span class="block text-xs text-muted-foreground">High-intent emergency calls & service-area rankings</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/seo-services/car-dealership-seo')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold text-primary">Car Dealership SEO</span><span class="block text-xs text-muted-foreground">Inventory optimization, make & model search visibility</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/seo-services/real-estate-seo-services')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold text-primary">Real Estate SEO Services</span><span class="block text-xs text-muted-foreground">Property listings, neighborhood landing pages & buyer leads</span></a></li>
            </ul>
          </div>
        </div>

        <!-- AI SEO Dropdown -->
        <div class="group relative avr-nav-group">
          <a href="<?php echo esc_url(home_url('/ai-seo')); ?>" class="avr-nav-link flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground xl:px-3" aria-expanded="false">
            <span>AI SEO</span>
            <svg class="avr-chevron h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
          </a>
          <div class="avr-nav-dropdown invisible absolute left-0 top-full w-[22rem] translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <ul class="rounded-2xl border border-border bg-popover p-2 shadow-xl">
              <li><a href="<?php echo esc_url(home_url('/ai-seo/generative-engine-optimization-geo')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Generative Engine Optimization (GEO)</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/ai-seo/answer-engine-optimization-aeo')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Answer Engine Optimization (AEO)</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/ai-seo/large-language-model-optimization-llmo')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Large Language Model Optimization (LLMO)</span></a></li>
            </ul>
          </div>
        </div>

        <!-- Paid Ads Dropdown -->
        <div class="group relative avr-nav-group">
          <a href="<?php echo esc_url(home_url('/paid-advertising')); ?>" class="avr-nav-link flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground xl:px-3" aria-expanded="false">
            <span>Paid Ads</span>
            <svg class="avr-chevron h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
          </a>
          <div class="avr-nav-dropdown invisible absolute left-0 top-full w-[22rem] translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <ul class="rounded-2xl border border-border bg-popover p-2 shadow-xl">
              <li><a href="<?php echo esc_url(home_url('/paid-advertising/google-ads')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Google Ads Management</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/paid-advertising/social-media-ads')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Social Media Advertising</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/paid-advertising/meta-ads')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Meta Ads</span></a></li>
            </ul>
          </div>
        </div>

        <!-- Content & Social Dropdown -->
        <div class="group relative avr-nav-group">
          <a href="<?php echo esc_url(home_url('/content-social')); ?>" class="avr-nav-link flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground xl:px-3" aria-expanded="false">
            <span>Content & Social</span>
            <svg class="avr-chevron h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
          </a>
          <div class="avr-nav-dropdown invisible absolute left-0 top-full w-[22rem] translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <ul class="rounded-2xl border border-border bg-popover p-2 shadow-xl">
              <li><a href="<?php echo esc_url(home_url('/content-social/content-marketing')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Content Marketing</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/content-social/social-media-management')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Social Media Management</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/content-social/website-copywriting')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Website Copywriting</span></a></li>
            </ul>
          </div>
        </div>

        <!-- Web & Dev Dropdown -->
        <div class="group relative avr-nav-group">
          <a href="<?php echo esc_url(home_url('/web-design-development')); ?>" class="avr-nav-link flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground xl:px-3" aria-expanded="false">
            <span>Web & Dev</span>
            <svg class="avr-chevron h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
          </a>
          <div class="avr-nav-dropdown invisible absolute left-0 top-full w-[22rem] translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <ul class="rounded-2xl border border-border bg-popover p-2 shadow-xl">
              <li><a href="<?php echo esc_url(home_url('/web-design-development/wordpress-development')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">WordPress Development</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/web-design-development/custom-web-design')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Custom Web Design</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/web-design-development/full-stack-web-development')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Full-Stack Development</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/web-design-development/vibe-coding-ai-assisted-development')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Vibe Coding & AI-Assisted Dev</span></a></li>
            </ul>
          </div>
        </div>

        <!-- AI & Automation Dropdown -->
        <div class="group relative avr-nav-group">
          <a href="<?php echo esc_url(home_url('/ai-business-automation')); ?>" class="avr-nav-link flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground xl:px-3" aria-expanded="false">
            <span>AI & Automation</span>
            <svg class="avr-chevron h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
          </a>
          <div class="avr-nav-dropdown invisible absolute left-0 top-full w-[22rem] translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <ul class="rounded-2xl border border-border bg-popover p-2 shadow-xl">
              <li><a href="<?php echo esc_url(home_url('/ai-business-automation/ai-agent-development')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">AI Agent Development</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/ai-business-automation/workflow-automation')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Workflow Automation</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/ai-business-automation/customer-support-automation')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Customer Support Automation</span></a></li>
            </ul>
          </div>
        </div>

        <!-- Agency / Company Dropdown -->
        <div class="group relative avr-nav-group">
          <a href="<?php echo esc_url(home_url('/about')); ?>" class="avr-nav-link flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground xl:px-3" aria-expanded="false">
            <span>Agency</span>
            <svg class="avr-chevron h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
          </a>
          <div class="avr-nav-dropdown invisible absolute left-0 top-full w-[22rem] translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
            <ul class="rounded-2xl border border-border bg-popover p-2 shadow-xl">
              <li><a href="<?php echo esc_url(home_url('/about')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">About AVR Web Consulting</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/pricing')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Transparent Pricing</span></a></li>
              <li><a href="<?php echo esc_url(home_url('/contact')); ?>" class="block rounded-xl px-3 py-2 transition-colors hover:bg-mist"><span class="block text-sm font-semibold">Contact & Consultations</span></a></li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Desktop Contact Button -->
      <div class="hidden xl:flex items-center gap-3">
        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors">
          Request Audit
        </a>
      </div>

      <!-- Mobile & Tablet Menu Trigger -->
      <div class="flex items-center xl:hidden shrink-0">
        <button
          type="button"
          id="avr-mobile-menu-btn"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background p-2 text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="avr-mobile-drawer"
        >
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12"></line><line x1="4" x2="20" y1="6"></line><line x1="4" x2="20" y1="18"></line></svg>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Navigation Overlay & Drawer (Accessible Dialog) -->
  <div id="avr-mobile-overlay" class="fixed inset-0 z-50 bg-black/60 opacity-0 pointer-events-none transition-opacity duration-300" aria-hidden="true"></div>

  <aside
    id="avr-mobile-drawer"
    class="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-background shadow-2xl transition-transform duration-300 ease-out translate-x-full pointer-events-none"
    role="dialog"
    aria-modal="true"
    aria-label="Mobile Navigation"
  >
    <!-- Drawer Header -->
    <div class="flex items-center justify-between border-b border-border p-4">
      <span class="font-sans text-lg font-bold text-foreground">AVR Web Consulting</span>
      <button
        type="button"
        id="avr-mobile-drawer-close"
        class="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-foreground cursor-pointer"
        aria-label="Close menu"
      >
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
      </button>
    </div>

    <!-- Drawer Navigation Content -->
    <div class="flex-1 overflow-y-auto px-4 py-6">
      <div class="space-y-4">
        <div>
          <a href="<?php echo esc_url(home_url('/seo-services')); ?>" class="block font-sans text-base font-bold text-primary mb-2">SEO Services</a>
          <ul class="space-y-1.5 pl-3 border-l-2 border-border/60 text-sm">
            <li><a href="<?php echo esc_url(home_url('/seo-services/local-seo')); ?>" class="text-foreground/80 hover:text-primary">Local SEO Services</a></li>
            <li><a href="<?php echo esc_url(home_url('/seo-services/traditional-seo')); ?>" class="text-foreground/80 hover:text-primary">Traditional Organic SEO</a></li>
            <li><a href="<?php echo esc_url(home_url('/seo-services/enterprise-seo')); ?>" class="text-foreground/80 hover:text-primary">Enterprise SEO</a></li>
            <li><a href="<?php echo esc_url(home_url('/seo-services/e-commerce-seo')); ?>" class="text-foreground/80 hover:text-primary">E-Commerce SEO</a></li>
            <li><a href="<?php echo esc_url(home_url('/seo-services/dental-seo-services')); ?>" class="font-semibold text-primary">Dental SEO Services</a></li>
            <li><a href="<?php echo esc_url(home_url('/seo-services/locksmith-seo')); ?>" class="font-semibold text-primary">Locksmith SEO</a></li>
            <li><a href="<?php echo esc_url(home_url('/seo-services/car-dealership-seo')); ?>" class="font-semibold text-primary">Car Dealership SEO</a></li>
            <li><a href="<?php echo esc_url(home_url('/seo-services/real-estate-seo-services')); ?>" class="font-semibold text-primary">Real Estate SEO Services</a></li>
          </ul>
        </div>

        <div class="pt-3 border-t border-border">
          <a href="<?php echo esc_url(home_url('/ai-seo')); ?>" class="block font-sans text-base font-bold text-foreground mb-2">AI SEO</a>
          <ul class="space-y-1.5 pl-3 border-l-2 border-border/60 text-sm">
            <li><a href="<?php echo esc_url(home_url('/ai-seo/generative-engine-optimization-geo')); ?>" class="text-foreground/80 hover:text-primary">Generative Engine Optimization (GEO)</a></li>
            <li><a href="<?php echo esc_url(home_url('/ai-seo/answer-engine-optimization-aeo')); ?>" class="text-foreground/80 hover:text-primary">Answer Engine Optimization (AEO)</a></li>
            <li><a href="<?php echo esc_url(home_url('/ai-seo/large-language-model-optimization-llmo')); ?>" class="text-foreground/80 hover:text-primary">LLM Optimization (LLMO)</a></li>
          </ul>
        </div>

        <div class="pt-3 border-t border-border">
          <a href="<?php echo esc_url(home_url('/paid-advertising')); ?>" class="block font-sans text-base font-bold text-foreground mb-2">Paid Ads</a>
          <ul class="space-y-1.5 pl-3 border-l-2 border-border/60 text-sm">
            <li><a href="<?php echo esc_url(home_url('/paid-advertising/google-ads')); ?>" class="text-foreground/80 hover:text-primary">Google Ads</a></li>
            <li><a href="<?php echo esc_url(home_url('/paid-advertising/social-media-ads')); ?>" class="text-foreground/80 hover:text-primary">Social Media Ads</a></li>
            <li><a href="<?php echo esc_url(home_url('/paid-advertising/meta-ads')); ?>" class="text-foreground/80 hover:text-primary">Meta Ads</a></li>
          </ul>
        </div>

        <div class="pt-3 border-t border-border">
          <a href="<?php echo esc_url(home_url('/web-design-development')); ?>" class="block font-sans text-base font-bold text-foreground mb-2">Web Design & Dev</a>
          <ul class="space-y-1.5 pl-3 border-l-2 border-border/60 text-sm">
            <li><a href="<?php echo esc_url(home_url('/web-design-development/wordpress-development')); ?>" class="text-foreground/80 hover:text-primary">WordPress Development</a></li>
            <li><a href="<?php echo esc_url(home_url('/web-design-development/custom-web-design')); ?>" class="text-foreground/80 hover:text-primary">Custom Web Design</a></li>
            <li><a href="<?php echo esc_url(home_url('/web-design-development/full-stack-web-development')); ?>" class="text-foreground/80 hover:text-primary">Full-Stack Development</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-border">
        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="block w-full text-center rounded-full bg-primary py-3 font-semibold text-primary-foreground shadow hover:bg-primary/90">
          Request a Digital Audit
        </a>
      </div>
    </div>
  </aside>

  <main class="flex-1">
