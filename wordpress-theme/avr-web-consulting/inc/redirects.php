<?php
/**
 * AVR Web Consulting — legacy URL redirects.
 *
 * The production site has used several URL generations (Lovable React routes,
 * the first WordPress conversion, and the current canonical structure).
 * These 301 redirects keep old links working without creating duplicate pages.
 *
 * Canonical structure (kept):
 *   /seo-services/local-seo/          (NOT /local-seo/)
 *   /automation-ai-agents/...         (NOT /ai-business-automation/...)
 *   /content-marketing/...            (NOT /content-social/...)
 *   /ai-seo/answer-engine-optimization (NOT ...-aeo)
 *
 * @package AVR_Web_Consulting
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Map of legacy path => canonical path (both without leading/trailing slashes).
 */
function avr_redirect_map() {
    return array(
        // Local SEO duplicate URL — the canonical page lives under /seo-services/.
        'local-seo' => 'seo-services/local-seo',

        // First WordPress conversion slugs.
        'ai-business-automation'                                  => 'automation-ai-agents/n8n-automation',
        'ai-business-automation/ai-agent-development'             => 'automation-ai-agents/ai-agent-development',
        'ai-business-automation/customer-support-automation'      => 'automation-ai-agents/n8n-automation',
        'ai-business-automation/workflow-automation'              => 'automation-ai-agents/n8n-automation',
        'ai-seo/answer-engine-optimization-aeo'                   => 'ai-seo/answer-engine-optimization',
        'ai-seo/generative-engine-optimization-geo'               => 'ai-seo/geo-seo',
        'ai-seo/large-language-model-optimization-llmo'           => 'ai-seo/llmo',
        'content-social'                                          => 'content-marketing',
        'content-social/content-marketing'                        => 'content-marketing',
        'content-social/social-media-management'                  => 'paid-advertising/social-media-marketing',
        'content-social/website-copywriting'                      => 'content-marketing/blogging-copywriting',
        'paid-advertising/meta-ads'                               => 'paid-advertising/social-media-ads',
        'seo-services/traditional-seo'                            => 'seo-services/global-seo',
        'seo-services/e-commerce-seo'                             => 'seo-services',
        'seo-services/enterprise-seo'                             => 'seo-services',
        'web-design-development/custom-web-design'                => 'web-design-development',
    );
}

/**
 * Issue 301 redirects for legacy paths before WordPress resolves a 404.
 */
function avr_legacy_redirects() {
    if (is_admin() || wp_doing_ajax()) {
        return;
    }
    $request_path = trim(wp_parse_url(add_query_arg(null, null), PHP_URL_PATH), '/');
    $home_path    = trim(wp_parse_url(home_url(), PHP_URL_PATH) ?? '', '/');
    if ($home_path && 0 === strpos($request_path, $home_path . '/')) {
        $request_path = substr($request_path, strlen($home_path) + 1);
    }
    $map = avr_redirect_map();
    if (isset($map[$request_path])) {
        $target = home_url('/' . $map[$request_path] . '/');
        // Guard against redirect loops.
        if (untrailingslashit($target) !== untrailingslashit(home_url(add_query_arg(null, null)))) {
            wp_safe_redirect($target, 301);
            exit;
        }
    }
}
add_action('template_redirect', 'avr_legacy_redirects', 1);
