<?php
/**
 * The template for displaying all pages
 *
 * @package AVR_Web_Consulting
 */

get_header();
?>

<div class="container-page py-16 lg:py-24">
  <?php
  while (have_posts()) :
      the_post();
      ?>
      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="entry-header mb-8">
          <h1 class="entry-title font-display text-4xl font-bold text-foreground"><?php the_title(); ?></h1>
        </header>

        <div class="entry-content prose prose-lg max-w-none text-foreground/90">
          <?php the_content(); ?>
        </div>
      </article>
      <?php
  endwhile;
  ?>
</div>

<?php
get_footer();
