<?php
/**
 * Template part for displaying related posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Felt
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

//@todo Make sure that things go smoothly in the Customizer (Jetpack uses some dummy content in its logic)

//we first need to know the bigger picture - the location this template part was loaded from
$location = pixelgrade_set_location( 'related-posts', true );

// Get the related posts IDs from Jetpack
$related_posts_ids = felt_get_jetpack_related_posts_ids();

$args = array(
	'post_type'           => 'post',
	'ignore_sticky_posts' => true,
	'no_found_rows'       => false, // a little efficiency
);

//Now query for these post IDs
if ( ! empty( $related_posts_ids ) ) {
	// Do a custom query for the related posts
	$args['post__in'] = $related_posts_ids;
	$args['orderby']  = 'post__in';
} else {
	// Show Recent Posts instead on failure to connect to Jetpack's server or failure to find related posts (maybe it's still thinking and indexing)

	// Get the Jetpack Related Options
	$related_posts_options = felt_get_jetpack_related_posts_options();

	$args['post__not_in']   = array( get_the_ID() );
	$args['posts_per_page'] = ! empty( $related_posts_options['size'] ) ? (int) $related_posts_options['size'] : 3;
	$args['paged']          = 1;
	$args['orderby']        = 'date';
	$args['order']          = 'desc';
}

// Do a custom query for the related posts
$query = new WP_Query( $args );

if ( $query->have_posts() ) {

	// We remove the Jetpack Sharing filters because we don't want share buttons on related posts
	remove_filter( 'the_content', 'sharing_display', 19 );
	remove_filter( 'the_excerpt', 'sharing_display', 19 );
	?>
	<div id="related-posts-container" class="related-posts-container">
		<div class="u-container-sides-spacing">
			<div class="o-wrapper u-container-width">
				<?php felt_the_jetpack_related_posts_headline( esc_html__( 'Related Posts', '__theme_txtd' ) ); ?>
				<div class="c-gallery  o-grid--3col-@desk  o-grid--3col-@lap  o-grid--col-@small">
					<?php
					/* Start the Loop */
					while ( $query->have_posts() ) : $query->the_post();
						/*
						 * Include the Post-Format-specific template for the content.
						 * If you want to override this in a child theme, then include a file
						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
						 */
					?>
						<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
							<div class="c-card  c-card--related">
								<?php if ( has_post_thumbnail() ) : ?>
								<div class="c-card__aside">
									<div class="c-card__frame">
										<?php the_post_thumbnail(); ?>
									</div>
								</div><!-- .c-card__aside -->
								<?php endif; ?>
								<div class="c-card__content">
									<h2 class="c-card__title"><span><?php the_title(); ?></span></h2>
									<?php if ( ! has_post_thumbnail() ) : ?>
										<div class="c-card__excerpt"><?php the_excerpt(); ?></div>
									<?php endif; ?>
								</div><!-- .c-card__content -->
								<a class="c-card__link" href="<?php the_permalink(); ?>"></a>
							</div><!-- .c-card.c-card--related -->
						</article><!-- #post-<?php the_ID(); ?> -->
					<?php
					endwhile;

					wp_reset_postdata(); ?>
				</div><!-- .c-gallery -->
			</div><!-- .o-wrapper.u-blog-grid-width -->
		</div>
	</div><!-- #related-posts-container -->

<?php }
