<?php
/**
 * Felt Theme Customizer.
 *
 * @package Felt
 * @since 1.0.0
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function felt_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.site-title',
			'render_callback' => 'felt_customize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'        => '.site-description-text',
			'render_callback' => 'felt_customize_partial_blogdescription',
		) );
	}

	// add a setting for the site logo
	$wp_customize->add_setting( 'pixelgrade_transparent_logo', array(
		'theme_supports'    => array( 'custom-logo' ),
		'transport'         => 'postMessage',
		'sanitize_callback' => 'felt_sanitize_transparent_logo',
	) );
	// Add a control to upload the logo
	// But first get the custom logo options
	$custom_logo_args = get_theme_support( 'custom-logo' );
	$wp_customize->add_control( new WP_Customize_Cropped_Image_Control( $wp_customize, 'pixelgrade_transparent_logo',
		array(
			'label'         => esc_html__( 'Logo while on Transparent Header', '__theme_txtd' ),
			'button_labels' => array(
				'select'       => esc_html__( 'Select logo', '__theme_txtd' ),
				'change'       => esc_html__( 'Change logo', '__theme_txtd' ),
				'default'      => esc_html__( 'Default', '__theme_txtd' ),
				'remove'       => esc_html__( 'Remove', '__theme_txtd' ),
				'placeholder'  => esc_html__( 'No logo selected', '__theme_txtd' ),
				'frame_title'  => esc_html__( 'Select logo', '__theme_txtd' ),
				'frame_button' => esc_html__( 'Choose logo', '__theme_txtd' ),
			),
			'section'       => 'title_tagline',
			'priority'      => 9, // put it after the normal logo that has priority 8
			'height'        => $custom_logo_args[0]['height'],
			'width'         => $custom_logo_args[0]['width'],
			'flex_height'   => $custom_logo_args[0]['flex-height'],
			'flex_width'    => $custom_logo_args[0]['flex-width'],
		) ) );

	$wp_customize->selective_refresh->add_partial( 'pixelgrade_transparent_logo', array(
		'settings'            => array( 'pixelgrade_transparent_logo' ),
		'selector'            => '.custom-logo-link--transparent',
		'render_callback'     => 'felt_customizer_partial_transparent_logo',
		'container_inclusive' => true,
	) );
}

add_action( 'customize_register', 'felt_customize_register' );

/* =========================
 * SANITIZATION FOR LOGO
 * ========================= */

function felt_sanitize_transparent_logo( $attachment_id ) {

	$mimes_allowed = array(
		'jpg|jpeg|jpe' => 'image/jpeg',
		'gif'          => 'image/gif',
		'png'          => 'image/png'
	);
	$attachment_mime_type = get_post_mime_type( $attachment_id );

	//if file has a valid mime type return input, otherwise return FALSE
	foreach ( $mimes_allowed as $mime_type ) {
		if ( $attachment_mime_type == $mime_type ) {
			return $attachment_id;
		}
	}

	return false;
}


/* =========================
 * SANITIZATION FOR SETTINGS
 * ========================= */

/**
 * Sanitize the header position options.
 */
function felt_sanitize_header_position( $input ) {
	$valid = array(
		'static' => esc_html__( 'Static', '__theme_txtd' ),
		'sticky' => esc_html__( 'Sticky (fixed)', '__theme_txtd' ),
	);

	if ( array_key_exists( $input, $valid ) ) {
		return $input;
	}

	return '';
}

/* ============================
 * Customizer rendering helpers
 * ============================ */

/**
 * Render the site title for the selective refresh partial.
 *
 * @see felt_customize_register()
 *
 * @return string
 */
function felt_customize_partial_blogname() {
	return get_bloginfo( 'name', 'display' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @see felt_customize_register()
 *
 * @return string
 */
function felt_customize_partial_blogdescription() {
	return get_bloginfo( 'description', 'display' );
}

/**
 * Callback for rendering the custom logo, used in the custom_logo partial.
 *
 * This method exists because the partial object and context data are passed
 * into a partial's render_callback so we cannot use get_custom_logo() as
 * the render_callback directly since it expects a blog ID as the first
 * argument. When WP no longer supports PHP 5.3, this method can be removed
 * in favor of an anonymous function.
 *
 * @see WP_Customize_Manager::register_controls()
 *
 * @return string Custom logo transparent.
 */
function felt_customizer_partial_transparent_logo() {
	return pixelgrade_get_custom_logo_transparent();
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function felt_customize_preview_js() {
	wp_enqueue_script( 'felt_customizer', pixelgrade_get_theme_file_uri( '/assets/js/customizer.js' ), array( 'customize-preview' ), '20171201', true );
}
add_action( 'customize_preview_init', 'felt_customize_preview_js' );
