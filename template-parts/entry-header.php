<?php
/**
 * The template part used for displaying the entry header.
 *
 * @package Felt
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

pixelgrade_the_main_category_link( '<div><div class="cats">', '</div></div>' ); ?>
<div class="header-dropcap"><?php echo esc_html( substr( get_the_title(), 0, 1 ) ); ?></div>
<?php the_title( '<h1 class="entry-title u-page-title-color">', '</h1>' ); ?>
<div class="header-meta"><?php pixelgrade_posted_on(); ?></div>
