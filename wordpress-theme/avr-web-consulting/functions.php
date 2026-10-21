<?php
/**
 * AVR Web Consulting — block theme functions.
 *
 * @package AVR_Web_Consulting
 * @version 2.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

define('AVR_THEME_VERSION', '2.0.0');

require_once get_template_directory() . '/inc/importer.php';
require_once get_template_directory() . '/inc/seo.php';
require_once get_template_directory() . '/inc/redirects.php';

/**
 * Theme setup.
 */
function avr_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');
    add_theme_support('editor-styles');
    add_editor_style('assets/css/avr-blocks.css');
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
 * Enqueue front-end assets. Each stylesheet/script is registered exactly
 * once — duplicate theme.css requests (with and without version query)
 * were a PageSpeed finding in the previous theme.
 */
function avr_theme_scripts() {
    // Google Fonts: single request, only the families/weights the design uses.
    wp_enqueue_style(
        'avr-fonts',
        'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap',
        array(),
        null
    );

    // Block theme stylesheet (versioned by filemtime for cache busting).
    $css_path = get_template_directory() . '/assets/css/avr-blocks.css';
    wp_enqueue_style(
        'avr-blocks',
        get_template_directory_uri() . '/assets/css/avr-blocks.css',
        array('avr-fonts'),
        file_exists($css_path) ? (string) filemtime($css_path) : AVR_THEME_VERSION
    );

    // Progressive hero video + small interactions. Deferred, tiny, no framework.
    $js_path = get_template_directory() . '/assets/js/theme.js';
    wp_enqueue_script(
        'avr-theme-js',
        get_template_directory_uri() . '/assets/js/theme.js',
        array(),
        file_exists($js_path) ? (string) filemtime($js_path) : AVR_THEME_VERSION,
        array('strategy' => 'defer', 'in_footer' => true)
    );

    wp_localize_script('avr-theme-js', 'avr_theme_data', array(
        'ajax_url'   => admin_url('admin-ajax.php'),
        'nonce'      => wp_create_nonce('avr_inquiry_nonce'),
        'video_url'  => get_template_directory_uri() . '/assets/video/avr.mp4',
        'poster_url' => get_template_directory_uri() . '/assets/images/home-hero-poster.webp',
    ));
}
add_action('wp_enqueue_scripts', 'avr_theme_scripts');

/**
 * Preconnect to Google Fonts early.
 */
function avr_resource_hints($urls, $relation_type) {
    if ('preconnect' === $relation_type) {
        $urls[] = array('href' => 'https://fonts.googleapis.com', 'crossorigin' => 'anonymous');
        $urls[] = array('href' => 'https://fonts.gstatic.com', 'crossorigin' => 'anonymous');
    }
    return $urls;
}
add_filter('wp_resource_hints', 'avr_resource_hints', 10, 2);

/**
 * Contact / inquiry form shortcode: [avr_contact_form]
 * Renders the approved inquiry form; submits via AJAX to avr_submit_inquiry.
 */
function avr_contact_form_shortcode() {
    ob_start();
    ?>
    <form class="avr-inquiry-form" data-avr-inquiry-form method="post" action="<?php echo esc_url(admin_url('admin-ajax.php')); ?>">
        <div class="avr-form-grid">
            <label>Full name
                <input type="text" name="name" required autocomplete="name">
            </label>
            <label>Email
                <input type="email" name="email" required autocomplete="email">
            </label>
            <label>Phone (optional)
                <input type="tel" name="phone" autocomplete="tel">
            </label>
            <label>Service of interest
                <select name="service">
                    <option>General Inquiry</option>
                    <option>SEO Services</option>
                    <option>AI SEO</option>
                    <option>Paid Advertising</option>
                    <option>Content Marketing</option>
                    <option>Web Design &amp; Development</option>
                    <option>Automation &amp; AI Agents</option>
                </select>
            </label>
            <label class="avr-form-full">Message
                <textarea name="message" rows="5" required></textarea>
            </label>
        </div>
        <button type="submit" class="wp-block-button__link wp-element-button">Send inquiry</button>
    </form>
    <?php
    return ob_get_clean();
}
add_shortcode('avr_contact_form', 'avr_contact_form_shortcode');

/**
 * AJAX handler for inquiry form submissions.
 */
function avr_submit_inquiry_handler() {
    check_ajax_referer('avr_inquiry_nonce', 'nonce');

    $name    = isset($_POST['name']) ? sanitize_text_field(wp_unslash($_POST['name'])) : '';
    $email   = isset($_POST['email']) ? sanitize_email(wp_unslash($_POST['email'])) : '';
    $phone   = isset($_POST['phone']) ? sanitize_text_field(wp_unslash($_POST['phone'])) : '';
    $service = isset($_POST['service']) ? sanitize_text_field(wp_unslash($_POST['service'])) : 'General Inquiry';
    $message = isset($_POST['message']) ? sanitize_textarea_field(wp_unslash($_POST['message'])) : '';

    $to      = get_option('admin_email', 'info@avrwebconsulting.com');
    $subject = 'New Website Inquiry from ' . ($name ? $name : 'Potential Client');
    $body    = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\n\nMessage:\n$message";
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    if ($email) {
        $headers[] = 'Reply-To: ' . $email;
    }

    wp_mail($to, $subject, $body, $headers);

    wp_send_json_success(array(
        'message' => 'Thank you! Your inquiry has been received. Our team will contact you within 24 hours.',
    ));
}
add_action('wp_ajax_avr_submit_inquiry', 'avr_submit_inquiry_handler');
add_action('wp_ajax_nopriv_avr_submit_inquiry', 'avr_submit_inquiry_handler');
