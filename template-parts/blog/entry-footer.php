<?php
/**
 * The template part used for displaying the entry footer.
 *
 * @package Felt
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>

<footer class="entry-footer  u-content-width">
	<div class="entry-footer__wrapper">
		<?php pixelgrade_entry_footer(); ?>
		<?php pixelgrade_the_post_navigation(); ?>
	</div><!-- .entry-footer__wrapper -->
</footer><!-- .entry-footer -->

<?php
// If comments are open or we have at least one comment, load up the comment template.
if ( comments_open() || get_comments_number() ) :
	pixelgrade_comments_template();
endif;
