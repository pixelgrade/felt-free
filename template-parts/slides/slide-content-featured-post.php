<?php
/**
 * This template is used to display the content of a featured post slide in the hero.
 *
 * @global int $slide_index The current slide index.
 * @global array $slide The current slide.
 * @global int $post_ID The global current post ID, most likely the page ID.
 * @global $location
 * @global ...there are more
 *
 * @package Felt
 * @since 2.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

// Get the hero content alignment
$alignment = 'center';

// Let's deal with the meta keys, if they are not already defined.. by higher powers
// We may have got the meta names from an include (like in custom widgets using this template part)
if ( ! isset( $primary_meta ) && ! isset( $secondary_meta ) ) {
	$primary_meta   = pixelgrade_option( 'blog_items_primary_meta', 'category' );
	$secondary_meta = pixelgrade_option( 'blog_items_secondary_meta', 'date' );
}

$primary_meta_output   = $primary_meta !== 'none' ? pixelgrade_get_post_meta( $primary_meta ) : false;
$secondary_meta_output = $secondary_meta !== 'none' ? pixelgrade_get_post_meta( $secondary_meta ) : false;

// Get the custom text for the view post button
$link_post_label = trim( esc_html__( 'Read More', '__theme_txtd' ) );
?>

<div <?php pixelgrade_hero_wrapper_class( $alignment ); ?>>

	<?php
	/**
	 * pixelgrade_hero_before_content hook.
	 */
	do_action( 'pixelgrade_hero_before_content', $location, $slide, $slide_index, $post_ID );
	?>

	<div class="c-hero__content">

		<?php if ( $primary_meta_output || $secondary_meta_output ) { ?>

			<div class="c-hero__meta">
				<div class="c-meta">
					<?php
					if ( $primary_meta_output ) {
						echo '<div class="c-meta__primary">' . $primary_meta_output . '</div>'; // WPCS: XSS OK.
						// Add a separator if we also have secondary meta
						if ( $secondary_meta_output ) {
							echo '<div class="c-meta__separator js-card-meta-separator"></div>';
						}
					}

					if ( $secondary_meta_output ) {
						echo '<div class="c-meta__secondary">' . $secondary_meta_output . '</div>'; // WPCS: XSS OK.
					} ?>
				</div>
			</div>

		<?php } ?>

		<a class="c-hero__link" href="<?php the_permalink( $slide['post_id'] ); ?>">
			<div class="c-hero__title-mask">
				<h2 class="h1"><?php echo get_the_title( $slide['post_id'] ); ?></h2>
			</div>
		</a>

		<?php
		if ( pixelgrade_option( 'blog_items_excerpt_visibility', true ) || ! empty( $show_excerpt ) ) { ?>
			<div class="c-hero__excerpt"><?php the_excerpt(); ?></div>
		<?php }

		if ( ! empty( $link_post_label ) ) { ?>
			<div class="c-hero__action">
				<span class="link--arrow  light">
					<?php echo esc_html( $link_post_label); // WPCS: XSS OK. ?>
				</span>
			</div>
		<?php } ?>
	</div><!-- .c-hero__content -->

	<?php
	/**
	 * pixelgrade_hero_after_content hook.
	 */
	do_action( 'pixelgrade_hero_after_content', $location, $slide, $slide_index, $post_ID );
	?>

</div><!-- .c-hero__wrapper -->
