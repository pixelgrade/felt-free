<?php
/**
 * Template part for displaying a message that posts cannot be found.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Felt
 * @since 1.0.0
 */

?>

<section class="no-results not-found">
	<div class="page-content  entry-content">
        <h2 class="page-title h3"><?php esc_html_e( 'Nothing Found', '__theme_txtd' ); ?></h2>
		<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
            <p><?php printf( wp_kses( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', '__theme_txtd' ), array( 'a' => array( 'href' => array() ) ) ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
        <?php endif ?>
	</div><!-- .page-content -->
</section><!-- .no-results -->
