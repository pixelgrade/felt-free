<?php
/**
 * Felt Lite admin logic.
 *
 * @package Felt Lite
 */

/**
 * Load Recommended plugins notification logic.
 */
require_once trailingslashit( get_template_directory() ) . 'inc/lite/admin/required-plugins.php';


function felt_lite_admin_setup() {

	/**
	 * Load and initialize Pixelgrade Assistant notice logic.
	 * @link https://wordpress.org/plugins/pixelgrade-assistant/
	 */
	require_once trailingslashit( get_template_directory() ) . 'inc/lite/admin/pixelgrade-assistant-notice/class-notice.php';
	PixelgradeAssistant_Install_Notice::init();
}
add_action('after_setup_theme', 'felt_lite_admin_setup' );
