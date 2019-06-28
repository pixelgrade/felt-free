<?php
/**
 * Felt Theme admin dashboard logic.
 *
 * @package Felt
 */

function felt_lite_admin_assets() {
	wp_enqueue_style( 'felt_lite_admin_style', get_template_directory_uri() . '/inc/lite/admin/css/admin.css', array(), '2.4.2.1', false );
}
add_action( 'admin_enqueue_scripts', 'felt_lite_admin_assets' );
