<?php
/**
 * Provides specific logic for the pro version of the theme.
 *
 * @package Felt
 * @since 2.3.0
 */

if ( pixelgrade_user_has_access( 'pro-features' ) ) {
	pixelgrade_autoload_dir(  pixelgrade_get_theme_relative_path( __DIR__ ) . 'pro' );
}
