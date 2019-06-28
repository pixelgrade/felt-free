<?php
/**
 * The Footer - Featured Area sidebar, placed above the Footer widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Felt
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! is_active_sidebar( 'footer-featured' ) ) {
	return;
}

dynamic_sidebar( 'footer-featured' );
