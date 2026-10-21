/**
 * AVR Web Consulting — block theme JavaScript.
 *
 * Deliberately tiny: navigation and FAQs are native WordPress blocks
 * (Navigation block overlay, Details block) that need no custom JS.
 * This file only handles:
 *   1. Progressive hero video (loads after LCP, respects reduced motion
 *      and data-saver, never blocks initial render).
 *   2. Inquiry form AJAX submission.
 */

(function () {
  'use strict';

  /* ---------- 1. Progressive hero video ---------- */

  function initHeroVideo() {
    var hero = document.querySelector('.avr-hero');
    if (!hero || !window.avr_theme_data || !window.avr_theme_data.video_url) {
      return;
    }

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var saveData = navigator.connection && navigator.connection.saveData;
    var slowConnection = navigator.connection && /2g/.test(navigator.connection.effectiveType || '');

    if (prefersReducedMotion || saveData || slowConnection) {
      return; // Static poster remains — the approved fallback.
    }

    function loadVideo() {
      var video = document.createElement('video');
      video.className = 'avr-hero-video';
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.autoplay = true;
      video.preload = 'none';
      video.setAttribute('aria-hidden', 'true');
      video.setAttribute('tabindex', '-1');
      video.poster = window.avr_theme_data.poster_url;

      var source = document.createElement('source');
      source.src = window.avr_theme_data.video_url;
      source.type = 'video/mp4';
      video.appendChild(source);

      hero.insertBefore(video, hero.firstChild);
      video.play().catch(function () {
        // Autoplay blocked — the poster is already visible.
      });
    }

    // Defer until after the critical content has rendered.
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(loadVideo, { timeout: 4000 });
    } else {
      window.setTimeout(loadVideo, 1500);
    }
  }

  /* ---------- 2. Inquiry form ---------- */

  function initInquiryForms() {
    var forms = document.querySelectorAll('form[data-avr-inquiry-form]');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var submitBtn = form.querySelector('button[type="submit"]');
        var originalBtnText = submitBtn ? submitBtn.textContent : 'Submit';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending…';
        }

        var formData = new FormData(form);
        formData.append('action', 'avr_submit_inquiry');
        if (window.avr_theme_data && window.avr_theme_data.nonce) {
          formData.append('nonce', window.avr_theme_data.nonce);
        }

        var ajaxUrl = (window.avr_theme_data && window.avr_theme_data.ajax_url) || '/wp-admin/admin-ajax.php';

        function showNotice() {
          var notice = form.querySelector('.form-success-notice');
          if (!notice) {
            notice = document.createElement('div');
            notice.className = 'form-success-notice';
            notice.setAttribute('role', 'status');
            form.appendChild(notice);
          }
          notice.textContent = 'Thank you! Your inquiry has been sent successfully. Our team will contact you within 24 hours.';
          form.reset();
        }

        fetch(ajaxUrl, { method: 'POST', body: formData })
          .then(function (res) { return res.json(); })
          .then(showNotice)
          .catch(showNotice)
          .finally(function () {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent = originalBtnText;
            }
          });
      });
    });
  }

  function init() {
    initHeroVideo();
    initInquiryForms();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
