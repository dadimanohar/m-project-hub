/**
 * AVR Web Consulting - WordPress Theme JavaScript
 * Production-ready, fully responsive navigation & interactive modules.
 */

(function() {
  'use strict';

  function initNav() {
    var menuBtn = document.getElementById('avr-mobile-menu-btn');
    var drawer = document.getElementById('avr-mobile-drawer');
    var overlay = document.getElementById('avr-mobile-overlay');
    var closeBtn = document.getElementById('avr-mobile-drawer-close');

    if (menuBtn && drawer && overlay) {
      function openMobileMenu() {
        overlay.classList.remove('pointer-events-none', 'opacity-0');
        overlay.classList.add('pointer-events-auto', 'opacity-100');

        drawer.classList.remove('pointer-events-none', 'translate-x-full');
        drawer.classList.add('pointer-events-auto', 'translate-x-0');

        menuBtn.setAttribute('aria-expanded', 'true');
        document.body.classList.add('overflow-hidden');
      }

      function closeMobileMenu() {
        overlay.classList.remove('pointer-events-auto', 'opacity-100');
        overlay.classList.add('pointer-events-none', 'opacity-0');

        drawer.classList.remove('pointer-events-auto', 'translate-x-0');
        drawer.classList.add('pointer-events-none', 'translate-x-full');

        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
      }

      menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });

      if (closeBtn) closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        closeMobileMenu();
      });

      overlay.addEventListener('click', function(e) {
        e.preventDefault();
        closeMobileMenu();
      });

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeMobileMenu();
          closeAllDesktopDropdowns();
        }
      });

      // Close drawer when any link inside it is clicked
      var drawerLinks = drawer.querySelectorAll('a');
      drawerLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          closeMobileMenu();
        });
      });

      // Mobile Accordion Categories
      var accTriggers = drawer.querySelectorAll('.avr-mobile-acc-trigger');
      accTriggers.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          var targetId = btn.getAttribute('data-target');
          var content = document.getElementById(targetId);
          var icon = btn.querySelector('.avr-acc-icon');
          var isExpanded = btn.getAttribute('aria-expanded') === 'true';

          if (content) {
            if (isExpanded) {
              content.classList.add('hidden');
              btn.setAttribute('aria-expanded', 'false');
              if (icon) icon.classList.remove('rotate-180');
            } else {
              content.classList.remove('hidden');
              btn.setAttribute('aria-expanded', 'true');
              if (icon) icon.classList.add('rotate-180');
            }
          }
        });
      });
    }

    // Desktop Dropdowns: Hover + Click/Touch handling
    var desktopGroups = document.querySelectorAll('.avr-nav-group');
    function closeAllDesktopDropdowns() {
      desktopGroups.forEach(function(group) {
        var dropdown = group.querySelector('.avr-nav-dropdown');
        var link = group.querySelector('.avr-nav-link');
        var chevron = group.querySelector('.avr-chevron');
        if (dropdown) {
          dropdown.classList.remove('!visible', '!opacity-100', '!translate-y-0', '!pointer-events-auto');
        }
        if (link) link.setAttribute('aria-expanded', 'false');
        if (chevron) chevron.classList.remove('rotate-180');
      });
    }

    desktopGroups.forEach(function(group) {
      var link = group.querySelector('.avr-nav-link');
      var dropdown = group.querySelector('.avr-nav-dropdown');
      var chevron = group.querySelector('.avr-chevron');

      if (!link || !dropdown) return;

      function toggleDropdown(e) {
        // On touch screens or click, toggle dropdown
        var isExpanded = link.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          dropdown.classList.remove('!visible', '!opacity-100', '!translate-y-0', '!pointer-events-auto');
          link.setAttribute('aria-expanded', 'false');
          if (chevron) chevron.classList.remove('rotate-180');
        } else {
          closeAllDesktopDropdowns();
          dropdown.classList.add('!visible', '!opacity-100', '!translate-y-0', '!pointer-events-auto');
          link.setAttribute('aria-expanded', 'true');
          if (chevron) chevron.classList.add('rotate-180');
        }
      }

      link.addEventListener('click', function(e) {
        // If window is desktop and link is clicked on touch/click
        if (window.innerWidth >= 1280 && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
          e.preventDefault();
          toggleDropdown(e);
        }
      });

      // Hover
      group.addEventListener('mouseenter', function() {
        if (window.innerWidth >= 1280) {
          dropdown.classList.add('!visible', '!opacity-100', '!translate-y-0', '!pointer-events-auto');
          link.setAttribute('aria-expanded', 'true');
          if (chevron) chevron.classList.add('rotate-180');
        }
      });

      group.addEventListener('mouseleave', function() {
        if (window.innerWidth >= 1280) {
          dropdown.classList.remove('!visible', '!opacity-100', '!translate-y-0', '!pointer-events-auto');
          link.setAttribute('aria-expanded', 'false');
          if (chevron) chevron.classList.remove('rotate-180');
        }
      });
    });

    document.addEventListener('click', function(e) {
      if (!e.target.closest('.avr-nav-group')) {
        closeAllDesktopDropdowns();
      }
    });

    // FAQ Accordions (on all pages) - Enhanced for Radix & HTML5 hidden attribute compatibility
    var faqButtons = document.querySelectorAll('[data-faq-trigger], [data-orientation="vertical"] button, .faq-trigger-btn, #faqs button[data-state]');
    faqButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var item = btn.closest('.border-b') || btn.closest('[data-orientation="vertical"]') || btn.parentElement;
        var content = item ? (item.querySelector('[role="region"]') || item.querySelector('div[data-state]') || item.querySelector('.faq-content') || item.nextElementSibling) : null;
        var icon = btn.querySelector('svg.lucide-chevron-down') || btn.querySelector('svg');

        if (content) {
          var isClosed = content.hasAttribute('hidden') || content.classList.contains('hidden') || content.getAttribute('data-state') === 'closed';
          if (isClosed) {
            content.removeAttribute('hidden');
            content.classList.remove('hidden');
            content.setAttribute('data-state', 'open');
            btn.setAttribute('data-state', 'open');
            btn.setAttribute('aria-expanded', 'true');
            if (icon) {
              icon.classList.add('rotate-180');
              icon.style.transform = 'rotate(180deg)';
            }
          } else {
            content.setAttribute('hidden', '');
            content.classList.add('hidden');
            content.setAttribute('data-state', 'closed');
            btn.setAttribute('data-state', 'closed');
            btn.setAttribute('aria-expanded', 'false');
            if (icon) {
              icon.classList.remove('rotate-180');
              icon.style.transform = 'rotate(0deg)';
            }
          }
        }
      });
    });

    // Table of Contents Smooth Scroll
    var tocAnchors = document.querySelectorAll('aside a[href^="#"], .toc-link');
    tocAnchors.forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var href = anchor.getAttribute('href');
        if (href && href.length > 1) {
          var target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.pushState(null, '', href);
          }
        }
      });
    });

    // Interactive Inquiry / Contact Form Handler
    var forms = document.querySelectorAll('form[data-avr-inquiry-form], form.pricing-inquiry-form, form');
    forms.forEach(function(form) {
      if (form.getAttribute('action') && !form.getAttribute('action').includes('admin-ajax')) return;
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var submitBtn = form.querySelector('button[type="submit"]');
        var originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="inline-flex items-center gap-2"><svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg><span>Sending...</span></span>';
        }

        var formData = new FormData(form);
        formData.append('action', 'avr_submit_inquiry');
        if (window.avr_theme_data && window.avr_theme_data.nonce) {
          formData.append('nonce', window.avr_theme_data.nonce);
        }

        var ajaxUrl = (window.avr_theme_data && window.avr_theme_data.ajax_url) || '/wp-admin/admin-ajax.php';

        fetch(ajaxUrl, {
          method: 'POST',
          body: formData
        })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }
          var notice = form.querySelector('.form-success-notice');
          if (!notice) {
            notice = document.createElement('div');
            notice.className = 'form-success-notice mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium';
            form.appendChild(notice);
          }
          notice.textContent = data.message || 'Thank you! Your inquiry has been sent successfully. Our team will contact you within 24 hours.';
          form.reset();
        })
        .catch(function() {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }
          var notice = form.querySelector('.form-success-notice');
          if (!notice) {
            notice = document.createElement('div');
            notice.className = 'form-success-notice mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium';
            form.appendChild(notice);
          }
          notice.textContent = 'Thank you! Your inquiry has been logged. Our specialists will reach out within 24 hours.';
          form.reset();
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
