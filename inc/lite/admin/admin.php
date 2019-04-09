<?php
/**
 * Felt Theme admin dashboard logic.
 *
 * @package Felt
 */

function felt_lite_admin_setup() {

	/**
	 * Load and initialize Pixelgrade Care notice logic.
	 */
	require_once 'pixcare-notice/class-notice.php';
	PixelgradeCare_Install_Notice::init();
}
add_action( 'after_setup_theme', 'felt_lite_admin_setup' );

function felt_lite_admin_assets() {
	wp_enqueue_style( 'felt_lite_admin_style', get_template_directory_uri() . '/inc/lite/admin/css/admin.css', array(), '2.4.0.2', false );
}
add_action( 'admin_enqueue_scripts', 'felt_lite_admin_assets' );
