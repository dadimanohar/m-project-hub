  </main>

  <!-- Global Footer -->
  <footer class="border-t border-border bg-card text-card-foreground">
    <div class="container-page py-14 lg:py-20">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        
        <div class="lg:col-span-2">
          <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-3">
            <picture>
              <source srcset="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.webp'); ?>" type="image/webp">
              <img
                src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.png'); ?>"
                alt="AVR Web Consulting logo"
                width="48"
                height="41"
                loading="lazy"
                decoding="async"
                class="h-10 w-auto object-contain"
              >
            </picture>
            <span class="font-display text-lg font-bold text-foreground">AVR Web Consulting</span>
          </a>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            AVR Web Consulting is an India-based digital marketing agency providing SEO, AI search optimization, paid advertising, web development, and business automation.
          </p>
          <div class="mt-6 text-sm text-foreground/85 space-y-1">
            <p><strong>Phone:</strong> <a href="tel:+918121423455" class="hover:text-primary">+91 81214 23455</a></p>
            <p><strong>Email:</strong> <a href="mailto:contact@avrwebconsulting.com" class="hover:text-primary">contact@avrwebconsulting.com</a></p>
            <p><strong>Address:</strong> D.No: 49-24-8/1, Madhuranagar, Visakhapatnam, AP, India - 530016</p>
          </div>
        </div>

        <div>
          <h3 class="font-display text-sm font-semibold uppercase tracking-wider text-foreground">SEO Services</h3>
          <ul class="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="<?php echo esc_url(home_url('/seo-services/local-seo')); ?>" class="hover:text-primary">Local SEO</a></li>
            <li><a href="<?php echo esc_url(home_url('/seo-services/traditional-seo')); ?>" class="hover:text-primary">Traditional SEO</a></li>
            <li><a href="<?php echo esc_url(home_url('/seo-services/dental-seo-services')); ?>" class="hover:text-primary font-medium text-primary">Dental SEO</a></li>
            <li><a href="<?php echo esc_url(home_url('/seo-services/locksmith-seo')); ?>" class="hover:text-primary font-medium text-primary">Locksmith SEO</a></li>
            <li><a href="<?php echo esc_url(home_url('/seo-services/car-dealership-seo')); ?>" class="hover:text-primary font-medium text-primary">Car Dealership SEO</a></li>
            <li><a href="<?php echo esc_url(home_url('/seo-services/real-estate-seo-services')); ?>" class="hover:text-primary font-medium text-primary">Real Estate SEO</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-display text-sm font-semibold uppercase tracking-wider text-foreground">AI & Search</h3>
          <ul class="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="<?php echo esc_url(home_url('/ai-seo/generative-engine-optimization-geo')); ?>" class="hover:text-primary">GEO Services</a></li>
            <li><a href="<?php echo esc_url(home_url('/ai-seo/answer-engine-optimization-aeo')); ?>" class="hover:text-primary">AEO Services</a></li>
            <li><a href="<?php echo esc_url(home_url('/ai-seo/large-language-model-optimization-llmo')); ?>" class="hover:text-primary">LLMO Services</a></li>
            <li><a href="<?php echo esc_url(home_url('/ai-business-automation/ai-agent-development')); ?>" class="hover:text-primary">AI Agents</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
          <ul class="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="<?php echo esc_url(home_url('/about')); ?>" class="hover:text-primary">About Us</a></li>
            <li><a href="<?php echo esc_url(home_url('/pricing')); ?>" class="hover:text-primary">Pricing Plans</a></li>
            <li><a href="<?php echo esc_url(home_url('/contact')); ?>" class="hover:text-primary">Contact</a></li>
          </ul>
        </div>

      </div>

      <div class="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
        <p>&copy; <?php echo date('Y'); ?> AVR Web Consulting. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Floating Contact Widget (WhatsApp & Call) -->
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 md:bottom-8 md:right-8">
    <a
      href="https://wa.me/918121423455?text=Hello%20AVR%20Web%20Consulting%2C%20I%20would%20like%20to%20discuss%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      class="flex h-[50px] w-[50px] md:h-[56px] md:w-[56px] items-center justify-center rounded-full bg-transparent transition-transform duration-300 hover:scale-[1.08] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      style="filter: drop-shadow(0 4px 8px rgba(0,0,0,0.25));"
    >
      <picture>
        <source srcset="<?php echo esc_url(get_template_directory_uri() . '/assets/images/whatsapp-logo.webp'); ?>" type="image/webp">
        <img
          src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/whatsapp-logo.png'); ?>"
          alt="Chat on WhatsApp"
          width="56"
          height="56"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-contain border-none p-0 bg-transparent"
        >
      </picture>
    </a>
    <a
      href="tel:+918121423455"
      aria-label="Call us"
      class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    </a>
  </div>

</div>

<?php wp_footer(); ?>
</body>
</html>
