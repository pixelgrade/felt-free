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
