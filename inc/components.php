<?php
/**
 * This file is responsible for adjusting the Pixelgrade Components to this theme's specific needs.
 *
 * @package Felt
 * @since 1.0.0
 */

/*========================*/
/* CUSTOMIZING THE HEADER */
/*========================*/

function felt_remove_header_component_filters() {
	// Remove the default filter that adds classes to the nav zones
	remove_filter( 'pixelgrade_css_class', array( Pixelgrade_Header(), 'nav_menu_zone_classes' ), 10 );
}

add_action( 'after_setup_theme', 'felt_remove_header_component_filters' );

/**
 * Customize the Header component config.
 *
 * @param array $config
 *
 * @return array
 */

function felt_customize_header_config( $config ) {
	// Don't output empty markup
	$config['zones']['left']['display_blank']  = ! pixelgrade_user_has_access( 'pro-features' );
	$config['zones']['right']['display_blank'] = false;

	if ( pixelgrade_user_has_access( 'pro-features' ) ) {
		// Customize the nav menu locations
		// Change the nav menu location's title
		$config['menu_locations']['primary-left']['title'] = esc_html__( 'Top Menu', '__theme_txtd' );
		// Deactivate the default zone behaviour
		$config['menu_locations']['primary-left']['zone_callback'] = false;
		// Set the nav menu location's CSS id
		$config['menu_locations']['primary-left']['nav_menu_args']['menu_id'] = 'menu-2';
		// Set the nav menu location CSS class
		$config['menu_locations']['primary-left']['nav_menu_args']['menu_class'] = 'menu  menu--secondary';
		// Set the nav menu depth
		$config['menu_locations']['primary-left']['nav_menu_args']['depth'] = 1;
	}

	// Change the nav menu location's title
	$config['menu_locations']['primary-right']['title'] = esc_html__( 'Main Menu', '__theme_txtd' );
	// Deactivate the default zone behaviour
	$config['menu_locations']['primary-right']['zone_callback'] = false;
	// Set the nav menu location's CSS id
	$config['menu_locations']['primary-right']['nav_menu_args']['menu_id'] = 'menu-1';
	// Set the nav menu location CSS class
	$config['menu_locations']['primary-right']['nav_menu_args']['menu_class'] = 'menu  menu--primary';

	if ( pixelgrade_user_has_access( 'pro-features' ) ) {
		// The Social Menu should be in the left zone
		$config['menu_locations']['jetpack-social-menu']['default_zone'] = 'left';
		// Make sure there is no callback
		$config['menu_locations']['jetpack-social-menu']['zone_callback'] = false;
		// Make sure it comes after the menu
		$config['menu_locations']['jetpack-social-menu']['order'] = 20;
	}

	return $config;
}

add_filter( 'pixelgrade_header_config', 'felt_customize_header_config', 10, 1 );

/**
 * END CUSTOMIZING THE HEADER
 * ==========================
 */

/*========================*/
/* CUSTOMIZING THE FOOTER */
/*========================*/

/**
 * Customize the Footer component config.
 *
 * @param array $config
 *
 * @return array
 */
function felt_customize_footer_config( $config ) {
	// Don't output empty markup in the footer
	$config['zones']['middle']['display_blank'] = false;
	$config['zones']['bottom']['display_blank'] = false;


	if ( ! pixelgrade_user_has_access( 'pro-features' ) ) {
		unset( $config['menu_locations']['footer'] );
		unset( $config['sidebars']['sidebar-footer'] );
	}

	return $config;
}

add_filter( 'pixelgrade_footer_config', 'felt_customize_footer_config', 10, 1 );

function felt_prevent_footer_sidebar_on_404( $display, $sidebar_id, $sidebar_settings ) {
	if ( is_404() && 'sidebar-footer' == $sidebar_id ) {
		return false;
	}

	return $display;
}

add_filter( 'pixelgrade_footer_display_sidebar', 'felt_prevent_footer_sidebar_on_404', 10, 3 );

/**
 * END CUSTOMIZING THE FOOTERs
 * ==========================
 */
