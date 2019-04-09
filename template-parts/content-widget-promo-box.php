<?php
/**
 * Template part for displaying the Promo Box widget.
 *
 * The variables bellow, that are available in the scope of this file, are already sanitized in the
 * Pixelgrade_WidgetFields class with the sanitizeFields() method.
 *
 * @global int $featured_image The featured image attachment ID.
 * @global string $headline The headline text.
 * @global string $description The description text.
 * @global string $button_text The button text.
 * @global string $button_url The button link URL.
 * @global string $box_style The box style (currently either 'light' or 'dark').
 * @global bool $switch_content_order Whether to switch the content order.
 *
 * @package Felt
 * @since 2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! empty( $headline ) || ! empty( $description ) || ( ! empty( $button_text ) && ! empty( $button_url ) ) ) { ?>

	<div class="c-promo__content">

		<?php if ( ! empty( $title ) ) { ?>
			<div class="c-promo__subtitle h6"><?php echo $title; // WPCS: XSS OK. ?></div>
		<?php } ?>

		<?php if ( ! empty( $headline ) ) { ?>
			<div class="c-promo__title"><div><?php echo $headline; // WPCS: XSS OK. ?></div></div>
		<?php } ?>

		<?php if ( ! empty( $description ) ) { ?>
			<div class="c-promo__description"><div><?php echo $description; // WPCS: XSS OK. ?></div></div>
		<?php } ?>

		<?php if ( ! empty( $button_text ) && ! empty( $button_url ) ) { ?>
			<div class="c-promo__action">
				<a href="<?php echo esc_url( $button_url ); ?>" class="c-promo__btn c-btn c-btn-directional c-btn-directional--right"><?php echo $button_text; // WPCS: XSS OK. ?></a>
			</div>
		<?php } ?>

	</div>

<?php }

if ( ! empty ( $featured_image ) ) { ?>
	<div class="c-promo__media">
		<?php echo wp_get_attachment_image( $featured_image, 'full' ); ?>
	</div>
<?php }
