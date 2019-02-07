<?php
/**
 * Felt Customizer Options Config
 *
 * @package Felt
 * @since 1.0.0
 */
/**
 * Hook into the Customify's fields and settings.
 *
 * The config can turn to be complex so is better to visit:
 * https://github.com/pixelgrade/customify
 *
 * @param $options array - Contains the plugin's options array right before they are used, so edit with care
 *
 * @return mixed The return of options is required, if you don't need options return an empty array
 *
 */
/* =============
 * For customizing the components Customify options you need to use the /inc/components.php file.
 * Also there you will find the example code for making changes.
 * ============= */

/**
 * Remove options from Customify
 */
function felt_lite_remove_customify_options( $options ) {
	$options['sections'] = array();

	return $options;
}
add_filter( 'customify_filter_fields', 'felt_lite_remove_customify_options', 9999, 1 );
