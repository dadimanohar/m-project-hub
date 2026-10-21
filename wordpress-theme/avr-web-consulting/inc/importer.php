<?php
/**
 * AVR Web Consulting — idempotent content importer.
 *
 * Creates the approved website pages and posts as native WordPress content
 * (Gutenberg blocks) from the bundled content library in inc/content/.
 *
 * Safety rules:
 *  - Never overwrites an existing page/post (matched by path or slug).
 *  - Rerunning creates no duplicates.
 *  - A dry-run preview shows exactly what would happen before any write.
 *  - The admin page requires manage_options and a nonce for the run action.
 *
 * @package AVR_Web_Consulting
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Load every content definition from inc/content/*.php.
 *
 * @return array[] List of content definitions.
 */
function avr_content_library() {
    static $defs = null;
    if (null !== $defs) {
        return $defs;
    }
    $defs = array();
    $dir  = get_template_directory() . '/inc/content';
    $manifest_file = $dir . '/manifest.php';
    if (!file_exists($manifest_file)) {
        return $defs;
    }
    $manifest = include $manifest_file;
    foreach (array_keys($manifest) as $file) {
        $path = $dir . '/' . $file;
        if (file_exists($path)) {
            $items = include $path;
            if (is_array($items)) {
                foreach ($items as $item) {
                    $defs[] = $item;
                }
            }
        }
    }
    return $defs;
}

/**
 * Find an existing post for a definition without ever matching trash.
 *
 * @param array $def Content definition.
 * @return WP_Post|null
 */
function avr_find_existing($def) {
    $path = trim($def['path'], '/');
    if ('' === $path) {
        // Homepage: check the configured static front page first.
        $front_id = (int) get_option('page_on_front');
        if ($front_id) {
            $front = get_post($front_id);
            if ($front && 'publish' === $front->post_status) {
                return $front;
            }
        }
        $found = get_posts(array(
            'post_type'   => 'page',
            'name'        => 'home',
            'post_status' => 'publish',
            'numberposts' => 1,
        ));
        return $found ? $found[0] : null;
    }

    if ('post' === $def['type']) {
        $found = get_posts(array(
            'post_type'   => 'post',
            'name'        => $def['slug'],
            'post_status' => 'publish',
            'numberposts' => 1,
        ));
        return $found ? $found[0] : null;
    }

    $page = get_page_by_path($path, OBJECT, 'page');
    if ($page && 'publish' === $page->post_status) {
        return $page;
    }
    // Fallback: match by final slug anywhere (handles hierarchy differences).
    $found = get_posts(array(
        'post_type'   => 'page',
        'name'        => $def['slug'],
        'post_status' => 'publish',
        'numberposts' => 1,
    ));
    return $found ? $found[0] : null;
}

/**
 * Plan the import without writing anything (dry run).
 *
 * @return array[] Rows: path, type, action ('create'|'skip'), note.
 */
function avr_import_plan() {
    $plan = array();
    foreach (avr_content_library() as $def) {
        $existing = avr_find_existing($def);
        $plan[] = array(
            'path'   => $def['path'],
            'type'   => $def['type'],
            'action' => $existing ? 'skip' : 'create',
            'note'   => $existing ? sprintf('Already exists (ID %d) — left untouched', $existing->ID) : 'Will be created',
        );
    }
    return $plan;
}

/**
 * Run the import. Idempotent: only creates missing content.
 *
 * @return array[] Same shape as avr_import_plan(), with results.
 */
function avr_import_run() {
    $results  = array();
    $parent_ids = array(); // path segment => post ID, for hierarchy.

    foreach (avr_content_library() as $def) {
        $existing = avr_find_existing($def);
        if ($existing) {
            $results[] = array(
                'path'   => $def['path'],
                'type'   => $def['type'],
                'action' => 'skip',
                'note'   => sprintf('Already exists (ID %d) — left untouched', $existing->ID),
            );
            $parent_ids[trim($def['path'], '/')] = $existing->ID;
            continue;
        }

        $parent_id = 0;
        if (!empty($def['parent'])) {
            $segments = explode('/', trim($def['path'], '/'));
            array_pop($segments);
            $parent_path = implode('/', $segments);
            if (isset($parent_ids[$parent_path])) {
                $parent_id = $parent_ids[$parent_path];
            } else {
                $parent_page = get_page_by_path($parent_path, OBJECT, 'page');
                if ($parent_page) {
                    $parent_id = $parent_page->ID;
                }
            }
        }

        $postarr = array(
            'post_type'    => $def['type'],
            'post_status'  => 'publish',
            'post_name'    => $def['slug'],
            'post_title'   => wp_strip_all_tags($def['title']),
            'post_content' => $def['content'],
        );
        if ('page' === $def['type'] && $parent_id) {
            $postarr['post_parent'] = $parent_id;
        }

        $post_id = wp_insert_post($postarr, true);
        if (is_wp_error($post_id)) {
            $results[] = array(
                'path'   => $def['path'],
                'type'   => $def['type'],
                'action' => 'error',
                'note'   => $post_id->get_error_message(),
            );
            continue;
        }

        update_post_meta($post_id, '_avr_meta_description', $def['description']);
        if ('post' === $def['type']) {
            wp_set_post_categories($post_id, array(1)); // Uncategorized default; editable later.
        }

        $parent_ids[trim($def['path'], '/')] = $post_id;
        $results[] = array(
            'path'   => $def['path'],
            'type'   => $def['type'],
            'action' => 'create',
            'note'   => sprintf('Created (ID %d)', $post_id),
        );
    }

    // Configure static front page and blog page when they exist.
    $home = avr_find_existing(array('path' => '/', 'slug' => 'home', 'type' => 'page'));
    if ($home) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $home->ID);
    }
    $blog = get_page_by_path('blog', OBJECT, 'page');
    if ($blog) {
        update_option('page_for_posts', $blog->ID);
    }

    // Pretty permalinks are required for the page hierarchy URLs.
    $permalink_structure = get_option('permalink_structure');
    if (empty($permalink_structure)) {
        update_option('permalink_structure', '/%postname%/');
    }
    flush_rewrite_rules();

    return $results;
}

/**
 * Register the Tools → AVR Content Import admin page.
 */
function avr_importer_menu() {
    add_management_page(
        'AVR Content Import',
        'AVR Content Import',
        'manage_options',
        'avr-content-import',
        'avr_importer_page'
    );
}
add_action('admin_menu', 'avr_importer_menu');

/**
 * Render the importer admin page.
 */
function avr_importer_page() {
    if (!current_user_can('manage_options')) {
        wp_die('You do not have permission to access this page.');
    }

    $ran    = false;
    $rows   = avr_import_plan();
    $notice = '';

    if (isset($_POST['avr_import_run']) && check_admin_referer('avr_content_import')) {
        $rows   = avr_import_run();
        $ran    = true;
        $notice = 'Import finished. Existing content was left untouched.';
    }

    $create_count = count(array_filter($rows, function ($r) { return 'create' === $r['action']; }));
    $skip_count   = count(array_filter($rows, function ($r) { return 'skip' === $r['action']; }));
    $error_count  = count(array_filter($rows, function ($r) { return 'error' === $r['action']; }));
    ?>
    <div class="wrap">
        <h1>AVR Web Consulting — Content Import</h1>
        <p>This tool creates the approved website pages and blog posts as editable WordPress content (Gutenberg blocks). It is <strong>safe to rerun</strong>: existing pages are never modified or duplicated.</p>
        <p><strong>Before running:</strong> take a database backup (your host or a backup plugin can do this in one click).</p>
        <?php if ($notice) : ?>
            <div class="notice notice-success"><p><?php echo esc_html($notice); ?></p></div>
        <?php endif; ?>
        <p>
            <strong><?php echo (int) $create_count; ?></strong> to create ·
            <strong><?php echo (int) $skip_count; ?></strong> already exist ·
            <strong><?php echo (int) $error_count; ?></strong> errors
        </p>
        <form method="post">
            <?php wp_nonce_field('avr_content_import'); ?>
            <button type="submit" name="avr_import_run" value="1" class="button button-primary" <?php disabled($create_count, 0); ?>>
                <?php echo $ran ? 'Run again (creates nothing new)' : 'Create missing content'; ?>
            </button>
        </form>
        <h2><?php echo $ran ? 'Import results' : 'Dry-run preview (nothing has been written yet)'; ?></h2>
        <table class="widefat striped">
            <thead><tr><th>Path</th><th>Type</th><th>Action</th><th>Note</th></tr></thead>
            <tbody>
                <?php foreach ($rows as $row) : ?>
                    <tr>
                        <td><code><?php echo esc_html($row['path']); ?></code></td>
                        <td><?php echo esc_html($row['type']); ?></td>
                        <td><?php echo esc_html($row['action']); ?></td>
                        <td><?php echo esc_html($row['note']); ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <?php
}
