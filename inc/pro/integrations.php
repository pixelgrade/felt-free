<?php
/**
 * Require files that deal with various plugins integrations.
 *
 * @package Felt
 * @since 1.0.0
 */

/**
 * Load Pixelgrade Care compatibility file.
 * http://pixelgrade.com/
 */
require pixelgrade_get_parent_theme_file_path( pixelgrade_get_theme_relative_path( __DIR__ ) . 'integrations/pixelgrade-care.php' );
