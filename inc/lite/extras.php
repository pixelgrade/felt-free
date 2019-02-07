<?php

/**
 * Theme About page logic.
 */
require get_template_directory() . '/inc/lite/admin/about-page.php';

/**
 * Check if the widget is only available for the Pro version.
 *
 * @param array $args The widget arguments.
 *
 * @return bool
 */
function felt_lite_widgets_message( $html_message, $args, $instance ) {

	$disallowed_widgets = array(
        'featured-posts-list',
        'featured-posts-6cards',
        'pixelgrade-featured-posts-carousel',
        'categories-image-grid'
    );

	foreach ( $disallowed_widgets as $widget ) {
		if ( 0 === strpos( $args['widget_id'], $widget ) ) {
			$html_message = '<div class="c-alert  c-alert--danger">
                    <h4 class="c-alert__title">'. esc_html__( '🤦 Widget Type Not Available In Lite Version', '__theme_txtd' ) . '</h4>
                    <div class="c-alert__body">
                        <p>'.  sprintf( esc_html__( 'The %s is not available in the Lite version, but hey, the Pro version is just around the corner!', '__theme_txtd' ), '<em>' . $args['widget_name'] . '</em>' ) .'</p>
                    </div>
                </div>';
		}
	}

	return $html_message;
}
add_filter( 'pixelgrade_sidebar_not_supported_message', 'felt_lite_widgets_message', 10, 3 );

/**
 * Assets that will be loaded for the customizer sidebar
 */
function felt_lite_customizer_assets() {
	wp_enqueue_style( 'felt_lite_customizer_style', get_template_directory_uri() . '/inc/lite/admin/customizer.css', null, '1.0.0', false );
}

add_action( 'customize_controls_enqueue_scripts', 'felt_lite_customizer_assets' );

/**
 * Add PRO Tab in Customizer
 */
function felt_lite_customize_register( $wp_customize ) {
	// View Pro
	$wp_customize->add_section(
		'felt_lite_style_view_pro', array(
			'title'       => '' . esc_html__( 'View PRO Version', '__theme_txtd' ),
			'priority'    => 2,
			'description' => sprintf(
			/* translators: The upsell link. */
				__(
					'<div class="upsell-container">
				<h2>Need More? Go PRO</h2>
				<p>Take it to the next level and stand out. See the hotspots of Felt PRO:</p>
				<ul class="upsell-features">
                        <li>
                            <h4>Personalize to Match Your Style</h4>
                            <div class="description">Having different tastes and preferences might be tricky for users, but not with Felt onboard. It has Style Manager, an intuitive and catchy interface that allows you to change color palettes and fonts with a few clicks.</div>
                        </li>

                        <li>
                            <h4>New Widgets for More Flexiblity</h4>
                            <div class="description">Besides the Slideshow, Featured and Grid Posts widgets, the PRO version comes with extra goodies: Carousel, Lists Posts, Promo Box, and Categories Images. You also get more layout options and widget areas to play with.</div>
                        </li>

                        <li>
                            <h4>Advanced Features for a Unique Look</h4>
                            <div class="description">Felt PRO takes everything to the next level, unlocking access to features like Sticky Menu with support for submenus, Author Info Box and Related Posts to display below your articles and a Reading Progress Bar that will switch to a link to the next article to maintain the attention of your readers.</div>
                        </li>

                        <li>
                            <h4>Premium Customer Support</h4>
                            <div class="description">You will benefit by priority support from a caring and devoted team, eager to help and to spread happiness. We work hard to provide a flawless experience for those who vote us with trust and choose to be our special clients.</div>
                        </li>
                        
                </ul> %s </div>', '__theme_txtd'
				),
				sprintf( '<a href="%1$s" target="_blank" class="button button-primary">%2$s</a>', esc_url( felt_lite_get_pro_link() ), esc_html__( 'Get Felt Pro', '__theme_txtd' ) )
			),
		)
	);

	$wp_customize->add_setting(
		'felt_lite_style_view_pro_desc', array(
			'default'           => '',
			'sanitize_callback' => 'felt_sanitize_checkbox',
		)
	);

	$wp_customize->add_control(
		'felt_lite_style_view_pro_desc', array(
			'section' => 'felt_lite_style_view_pro',
			'type'    => 'hidden',
		)
	);
}

add_action( 'customize_register', 'felt_lite_customize_register' );

/**
 * Generate a link to the Felt Lite info page.
 */
function felt_lite_get_pro_link() {
	return 'https://pixelgrade.com/themes/blogging/felt-pro?utm_source=felt-lite-clients&utm_medium=customizer&utm_campaign=felt-lite';
}

function felt_lite_body_classes( $classes ) {

	$classes[] = 'lite-version';

	return $classes;
}
add_filter( 'body_class', 'felt_lite_body_classes' );
