<?php
/**
 * AVR Web Consulting — SEO metadata and structured data.
 *
 * Outputs meta descriptions (stored per page by the importer, editable via
 * the excerpt field or the _avr_meta_description meta), canonical URLs,
 * Open Graph tags, and JSON-LD structured data limited to what the visible
 * content supports (Organization, WebSite, BreadcrumbList, FAQPage).
 *
 * If a dedicated SEO plugin (Yoast, Rank Math) is later installed, it takes
 * over automatically because it filters the same hooks; this file only adds
 * output when running standalone.
 *
 * @package AVR_Web_Consulting
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Meta description: per-page stored value, else excerpt, else site tagline.
 */
function avr_meta_description() {
    if (!is_singular()) {
        if (is_front_page()) {
            $front_id = (int) get_option('page_on_front');
            $desc = $front_id ? get_post_meta($front_id, '_avr_meta_description', true) : '';
            if ($desc) {
                echo '<meta name="description" content="' . esc_attr($desc) . '">' . "\n";
            }
        }
        return;
    }
    $post = get_queried_object();
    if (!$post instanceof WP_Post) {
        return;
    }
    $desc = get_post_meta($post->ID, '_avr_meta_description', true);
    if (!$desc && has_excerpt($post)) {
        $desc = get_the_excerpt($post);
    }
    if ($desc) {
        echo '<meta name="description" content="' . esc_attr(wp_strip_all_tags($desc)) . '">' . "\n";
    }
}
add_action('wp_head', 'avr_meta_description', 1);

/**
 * Canonical URL for singular content.
 */
function avr_canonical() {
    if (is_singular()) {
        echo '<link rel="canonical" href="' . esc_url(get_permalink()) . '">' . "\n";
    } elseif (is_front_page()) {
        echo '<link rel="canonical" href="' . esc_url(home_url('/')) . '">' . "\n";
    }
}
add_action('wp_head', 'avr_canonical', 1);

/**
 * Open Graph / Twitter tags.
 */
function avr_open_graph() {
    $title = wp_get_document_title();
    $url   = is_singular() ? get_permalink() : home_url(add_query_arg(null, null));
    echo '<meta property="og:type" content="website">' . "\n";
    echo '<meta property="og:site_name" content="AVR Web Consulting">' . "\n";
    echo '<meta property="og:title" content="' . esc_attr($title) . '">' . "\n";
    echo '<meta property="og:url" content="' . esc_url($url) . '">' . "\n";
    echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
    if (is_singular()) {
        $desc = get_post_meta(get_the_ID(), '_avr_meta_description', true);
        if ($desc) {
            echo '<meta property="og:description" content="' . esc_attr(wp_strip_all_tags($desc)) . '">' . "\n";
        }
    }
}
add_action('wp_head', 'avr_open_graph', 1);

/**
 * JSON-LD structured data.
 */
function avr_structured_data() {
    $schemas = array();

    if (is_front_page()) {
        $schemas[] = array(
            '@context' => 'https://schema.org',
            '@type'    => 'Organization',
            'name'     => 'AVR Web Consulting',
            'url'      => home_url('/'),
            'logo'     => get_template_directory_uri() . '/assets/images/logo.webp',
            'email'    => 'info@avrwebconsulting.com',
            'telephone' => '+91-9182543249',
            'address'  => array(
                '@type'           => 'PostalAddress',
                'streetAddress'   => 'Hero Showroom Lane, D No: 43-18-16, Venkatarajunagar, TSN Colony, Dondaparthy',
                'addressLocality' => 'Visakhapatnam',
                'addressRegion'   => 'Andhra Pradesh',
                'postalCode'      => '530016',
                'addressCountry'  => 'IN',
            ),
            'sameAs'   => array(
                'https://www.linkedin.com/company/avr-webconsulting/',
                'https://x.com/avrwebconsult',
                'https://www.instagram.com/avrwebconsulting/',
                'https://www.facebook.com/avrwebconsulting',
            ),
        );
        $schemas[] = array(
            '@context' => 'https://schema.org',
            '@type'    => 'WebSite',
            'name'     => 'AVR Web Consulting',
            'url'      => home_url('/'),
        );
    }

    if (is_singular() && !is_front_page()) {
        $post = get_queried_object();
        if ($post instanceof WP_Post) {
            // Breadcrumbs from the page hierarchy.
            $items   = array();
            $items[] = array(
                '@type'    => 'ListItem',
                'position' => 1,
                'name'     => 'Home',
                'item'     => home_url('/'),
            );
            $ancestors = array_reverse(get_post_ancestors($post));
            $position  = 2;
            foreach ($ancestors as $ancestor_id) {
                $items[] = array(
                    '@type'    => 'ListItem',
                    'position' => $position++,
                    'name'     => get_the_title($ancestor_id),
                    'item'     => get_permalink($ancestor_id),
                );
            }
            $items[] = array(
                '@type'    => 'ListItem',
                'position' => $position,
                'name'     => get_the_title($post),
                'item'     => get_permalink($post),
            );
            $schemas[] = array(
                '@context'        => 'https://schema.org',
                '@type'           => 'BreadcrumbList',
                'itemListElement' => $items,
            );

            // FAQPage only when the visible content actually contains FAQs
            // (native Details blocks).
            if (has_blocks($post->post_content) && false !== strpos($post->post_content, 'wp:details')) {
                $faq_items = array();
                if (preg_match_all('/<summary>(.*?)<\/summary>.*?<p>(.*?)<\/p>/s', $post->post_content, $matches, PREG_SET_ORDER)) {
                    foreach (array_slice($matches, 0, 30) as $m) {
                        $faq_items[] = array(
                            '@type'          => 'Question',
                            'name'           => wp_strip_all_tags(html_entity_decode($m[1])),
                            'acceptedAnswer' => array(
                                '@type' => 'Answer',
                                'text'  => wp_strip_all_tags(html_entity_decode($m[2])),
                            ),
                        );
                    }
                }
                if ($faq_items) {
                    $schemas[] = array(
                        '@context'   => 'https://schema.org',
                        '@type'      => 'FAQPage',
                        'mainEntity' => $faq_items,
                    );
                }
            }
        }
    }

    foreach ($schemas as $schema) {
        echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . '</script>' . "\n";
    }
}
add_action('wp_head', 'avr_structured_data', 5);
