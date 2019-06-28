<?php
/**
 * The sidebar containing the Front Page Content Area #2 widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Felt
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! is_active_sidebar( 'front-page-5' ) ) {
	return;
}
?>

<div class="widget-area  widget-area--main  widget-area--front-page-5  o-layout__main">
	<?php dynamic_sidebar( 'front-page-5' ); ?>
</div><!-- .o-layout__main -->
