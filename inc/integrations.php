<?php
/**
 * Require files that deal with various plugins integrations.
 *
 * @package Felt
 * @since 1.0.0
 */

/**
 * Load Customify compatibility file.
 * https://pixelgrade.com/
 */
if ( class_exists( 'PixCustomifyPlugin' )) {
	require pixelgrade_get_parent_theme_file_path( pixelgrade_get_theme_relative_path( __DIR__ ) . 'integrations/customify.php' );
}

/**
 * Load Jetpack compatibility file.
 * https://jetpack.me/
 */
require pixelgrade_get_parent_theme_file_path( pixelgrade_get_theme_relative_path( __DIR__ ) . 'integrations/jetpack.php' );

/**
 * Load Yoast compatibility file.
 * https://yoast.com/
 */
require pixelgrade_get_parent_theme_file_path( pixelgrade_get_theme_relative_path( __DIR__ ) . 'integrations/yoast.php' );

/**
 * Load Gridable compatibility file.
 * https://pixelgrade.com/
 */
require pixelgrade_get_parent_theme_file_path( pixelgrade_get_theme_relative_path( __DIR__ ) . 'integrations/gridable.php' );
