<?php
/**
 * AVR Web Consulting Theme Functions and Definitions
 *
 * @package AVR_Web_Consulting
 * @version 1.0.2
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function avr_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
}
add_action('after_setup_theme', 'avr_theme_setup');

/**
 * Enqueue scripts and styles without redundant/duplicate render-blocking requests.
 */
function avr_theme_scripts() {
    // 1. Google Fonts - Enqueued ONCE with swap display
    wp_enqueue_style(
        'avr-fonts',
        'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap',
        array(),
        null
    );

    // 2. Primary Theme CSS - Single, clean enqueue (no nested @import)
    wp_enqueue_style(
        'avr-theme-style',
        get_template_directory_uri() . '/assets/css/theme.css',
        array(),
        '1.0.2'
    );

    // 3. Theme JS - Defer execution to prevent blocking initial render
    wp_enqueue_script(
        'avr-theme-js',
        get_template_directory_uri() . '/assets/js/theme.js',
        array(),
        '1.0.2',
        array('strategy' => 'defer', 'in_footer' => true)
    );

    // Localize AJAX parameters for inquiry forms
    wp_localize_script('avr-theme-js', 'avr_theme_data', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('avr_inquiry_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'avr_theme_scripts');

/**
 * Preconnect to Google Fonts domains early in the <head>
 */
function avr_resource_hints($urls, $relation_type) {
    if ('preconnect' === $relation_type) {
        $urls[] = array(
            'href'        => 'https://fonts.googleapis.com',
            'crossorigin' => 'anonymous',
        );
        $urls[] = array(
            'href'        => 'https://fonts.gstatic.com',
            'crossorigin' => 'anonymous',
        );
    }
    return $urls;
}
add_filter('wp_resource_hints', 'avr_resource_hints', 10, 2);

/**
 * AJAX Handler for Inquiry and Contact Form Submissions
 */
function avr_submit_inquiry_handler() {
    check_ajax_referer('avr_inquiry_nonce', 'nonce');

    $name    = isset($_POST['name']) ? sanitize_text_field($_POST['name']) : '';
    $email   = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
    $phone   = isset($_POST['phone']) ? sanitize_text_field($_POST['phone']) : '';
    $service = isset($_POST['service']) ? sanitize_text_field($_POST['service']) : 'General Inquiry';
    $message = isset($_POST['message']) ? sanitize_textarea_field($_POST['message']) : '';

    $to      = get_option('admin_email', 'contact@avrwebconsulting.com');
    $subject = 'New Website Inquiry from ' . ($name ? $name : 'Potential Client');
    $body    = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\n\nMessage:\n$message";
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    if ($email) {
        $headers[] = 'Reply-To: ' . $email;
    }

    wp_mail($to, $subject, $body, $headers);

    wp_send_json_success(array(
        'message' => 'Thank you! Your inquiry has been received. Our team will contact you within 24 hours.'
    ));
}
add_action('wp_ajax_avr_submit_inquiry', 'avr_submit_inquiry_handler');
add_action('wp_ajax_nopriv_avr_submit_inquiry', 'avr_submit_inquiry_handler');
