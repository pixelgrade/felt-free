<?php
/**
 * The template part used for displaying the entry title for pages.
 *
 * @package Felt
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

$classes = array();
$classes[] = 'entry-title';
$classes[] = 'u-page-title-color';

$classes = apply_filters( 'components_entry_header_classes', $classes );

the_title( '<h1 class="' . esc_attr( join( ' ', $classes ) ) . '">', '</h2>' );
