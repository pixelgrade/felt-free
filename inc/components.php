<?php
/**
 * Handle the specific Components integration.
 *
 * @package Felt
 * @since 1.0.0
 */

/**
 * Setup components by adding support for the ones needed.
 */
function felt_setup_components() {
	/*
	 * Declare support for the Pixelgrade Components the theme uses.
	 * Please note that some components will load regardless (like Base, Blog, Header, Footer).
	 * It is safe although to declare support for all that you use (for future proofing).
	 */
	add_theme_support( 'pixelgrade-base-component' );
	add_theme_support( 'pixelgrade-blog-component' );
	add_theme_support( 'pixelgrade-header-component' );
	add_theme_support( 'pixelgrade-footer-component' );
	add_theme_support( 'pixelgrade-gallery-settings-component' );
}
add_action( 'after_setup_theme', 'felt_setup_components', 10 );

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
	$config['zones']['left']['display_blank']  = true;
	$config['zones']['right']['display_blank'] = false;

	// Change the nav menu location's title
	$config['menu_locations']['primary-right']['title'] = esc_html__( 'Main Menu', '__theme_txtd' );
	// Deactivate the default zone behaviour
	$config['menu_locations']['primary-right']['zone_callback'] = false;
	// Set the nav menu location's CSS id
	$config['menu_locations']['primary-right']['nav_menu_args']['menu_id'] = 'menu-1';
	// Set the nav menu location CSS class
	$config['menu_locations']['primary-right']['nav_menu_args']['menu_class'] = 'menu  menu--primary';

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

	unset( $config['sidebars']['sidebar-footer'] );

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
