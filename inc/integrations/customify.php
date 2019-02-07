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

add_filter( 'customify_filter_fields', 'felt_add_customify_options', 11, 1 );

// Modify Customify Config
add_filter( 'customify_filter_fields', 'felt_change_customify_style_manager_section', 13, 1 );

add_filter( 'pixelgrade_customify_general_section_options', 'felt_customify_general_section', 10, 2 );
add_filter( 'pixelgrade_header_customify_section_options', 'felt_customify_header_section', 10, 2 );
add_filter( 'pixelgrade_customify_main_content_section_options', 'felt_customify_main_content_section', 10, 2 );
add_filter( 'pixelgrade_customify_buttons_section_options', 'felt_customify_buttons_section', 10, 2 );
add_filter( 'pixelgrade_footer_customify_section_options', 'felt_customify_footer_section', 10, 2 );
add_filter( 'pixelgrade_customify_blog_grid_section_options', 'felt_customify_blog_grid_section', 10, 2 );

define( 'VARIATION_SERIF_FONT', 'Charter' );
define( 'VARIATION_SANS_SERIF_FONT', 'HK Grotesk' );
define( 'VARIATION_SITE_TITLE_FONT', 'Caudex' );

// Color Constants
define( 'SM_COLOR_PRIMARY', '#ff6000' );
define( 'SM_COLOR_SECONDARY', '#ff9200' );
define( 'SM_COLOR_TERTIARY', '#ff7019' );
define( 'SM_DARK_PRIMARY', '#161616' );
define( 'SM_DARK_SECONDARY', '#1c1c1c' );
define( 'SM_DARK_TERTIARY', '#161616' );
define( 'SM_LIGHT_PRIMARY', '#fffcfc' );
define( 'SM_LIGHT_SECONDARY', '#fff4e8' );
define( 'SM_LIGHT_TERTIARY', '#f7f3f0' );

function felt_add_customify_options( $options ) {
	$options['opt-name'] = 'felt_options';
	$options['sections'] = array();

	return $options;
}

/**
 * Add the Style Manager cross-theme Customizer section.
 *
 * @param array $options
 *
 * @return array
 */
function felt_change_customify_style_manager_section( $options ) {
	// If the theme hasn't declared support for style manager, bail.
	if ( ! current_theme_supports( 'customizer_style_manager' ) ) {
		return $options;
	}

	if ( ! isset( $options['sections']['style_manager_section'] ) ) {
		$options['sections']['style_manager_section'] = array();
	}

	// The section might be already defined, thus we merge, not replace the entire section config.
	$options['sections']['style_manager_section'] = Pixelgrade_Config::merge( $options['sections']['style_manager_section'], array(
		'options' => array(
			'sm_color_primary'   => array(
				'connected_fields' => array(
					// low
					'main_content_body_link_active_color',
					'main_content_heading_6_color',
					'buttons_color',

					// medium
					'blog_item_meta_primary_color',
					'blog_item_meta_secondary_color',
					'header_links_active_color',
					'header_sticky_background'
				),
				'default'          => SM_COLOR_PRIMARY,
			),
			'sm_color_secondary' => array(
				'default' => SM_COLOR_SECONDARY,
			),
			'sm_color_tertiary'  => array(
				'default' => SM_COLOR_TERTIARY,
			),
			'sm_dark_primary'    => array(
				'connected_fields' => array(
					// high
					'main_content_body_link_color',
					'header_navigation_links_color',

					// striking
					'main_content_page_title_color',
					'main_content_heading_1_color',
					'main_content_heading_2_color',
					'main_content_heading_3_color',

					// always black
					'main_content_heading_4_color',
					'main_content_heading_5_color',
					'blog_item_title_color',
					'blog_item_excerpt_color',
				),
				'default'          => SM_DARK_PRIMARY,
			),
			'sm_dark_secondary'  => array(
				'connected_fields' => array(
					// high
					'footer_background',

					// always black
					'main_content_body_text_color',
				),
				'default'          => SM_DARK_SECONDARY,
			),
			'sm_dark_tertiary'   => array(
				'default' => SM_DARK_TERTIARY,
			),
			'sm_light_primary'   => array(
				'connected_fields' => array(
					'main_content_content_background_color',
					'buttons_text_color',
					'header_sticky_active_links_color',
					'footer_links_color',
					'footer_body_text_color',
				),
				'default'          => SM_LIGHT_PRIMARY,
			),
			'sm_light_secondary' => array(
				'connected_fields' => array(
					'header_background',
					'header_sticky_text_color'
				),
				'default'          => SM_LIGHT_SECONDARY,
			),
			'sm_light_tertiary'  => array(
				'default' => SM_LIGHT_TERTIARY,
			),
		),
	) );

	return $options;
}


/**
 * Modify the Customify config for the General Section - from the Base component
 *
 * @param array $section_options The specific Customify config to be filtered
 * @param array $options The whole Customify config
 *
 * @return array $general_section The modified specific config
 */
function felt_customify_general_section( $section_options, $options ) {
	$modified_config = array(
		// General
		'general' => array(
			'options' => array(
				'widgets_title_position' => array(
					'type'     => 'radio',
					'label'    => esc_html__( 'Widgets Titles Position', '__theme_txtd' ),
					'desc'     => esc_html__( 'Choose if you want to display the titles above the widgets or rotate them 90-degrees and align along the left of widgets content rather than at the top.', '__theme_txtd' ),
					'default'  => 'sideways',
					'choices'  => array(
						'above'    => esc_html__( 'Above', '__theme_txtd' ),
						'sideways' => esc_html__( 'Sideways', '__theme_txtd' ),
					),
					'priority' => 10,
				),
			),
		),
	);
	// Now we merge the modified config with the original one
	// Thus overwriting what we have changed
	$section_options = Pixelgrade_Config::merge( $section_options, $modified_config );
	// Remove Ajax Loading Option
	unset( $section_options['general']['options']['use_ajax_loading'] );

	return $section_options;
}

/**
 * Main Content Section
 *
 * @param array $section_options The specific Customify config to be filtered
 * @param array $options The whole Customify config
 *
 * @return array $main_content_section The modified specific config
 */
function felt_customify_main_content_section( $section_options, $options ) {
	$new_section_options = array(
		// Main Content
		'main_content' => array(
			'options' => array(
				'main_content_container_width'         => array(
					'default' => 1300,
				),
				'main_content_container_sides_spacing' => array(
					'default' => 40,
				),
				'main_content_container_padding'       => array(
					'default' => 0,
				),
				'main_content_content_width'           => array(
					'default' => 885,
					'css'     => array(
						array(
							'property' => 'max-width',
							'selector' => '
								.u-content-width>:not([class*=align]):not([class*=gallery]),
								.mce-content-body:not([class*="page-template-full-width"]) > :not([class*="align"]):not([data-wpview-type*="gallery"])',
							'unit'     => 'px',
						),
					),
				),
				'main_content_border_width'            => array(
					'default' => 0,
					'css'     => array(
						array(
							'property'        => 'border-width',
							'selector'        => '.u-border-width',
							'unit'            => 'px',
							'callback_filter' => 'typeline_spacing_cb'
						),
						array(
							'property'        => 'border-bottom-width',
							'selector'        => '#infinite-footer',
							'unit'            => 'px',
							'callback_filter' => 'typeline_spacing_cb'
						),
						array(
							'property'        => 'padding-left',
							'selector'        => '.c-navbar__content',
							'unit'            => 'px',
							'callback_filter' => 'typeline_spacing_cb'
						),
						array(
							'property'        => 'top',
							'selector'        => '.site-header-sticky',
							'unit'            => 'px',
							'callback_filter' => 'typeline_spacing_cb'
						),
						array(
							'property'        => 'left',
							'selector'        => '.site-header-sticky',
							'unit'            => 'px',
							'callback_filter' => 'typeline_spacing_cb'
						),
						array(
							'property'        => 'right',
							'selector'        => '.site-header-sticky',
							'unit'            => 'px',
							'callback_filter' => 'typeline_spacing_cb'
						),
						array(
							'property'        => 'left',
							'selector'        => '.o-layout__full .featured-posts-slideshow .slick-prev',
							'unit'            => 'px',
							'callback_filter' => 'typeline_spacing_cb'
						),
						array(
							'property'        => 'right',
							'selector'        => '.o-layout__full .featured-posts-slideshow .slick-next',
							'unit'            => 'px',
							'callback_filter' => 'typeline_spacing_cb'
						),
						array(
							'property'        => 'min-height',
							'selector'        => '.admin-bar .site-header--inverted',
							'unit'            => 'px',
							'callback_filter' => 'felt_inverted_site_header_height'
						)
					),
				),
				'main_content_border_color'            => array(
					'default' => '#F7F6F5',
					'css'     => array(
						array(
							'property' => 'border-color',
							'selector' => '.site',
						),
					),
				),
				// [Section] COLORS
				'main_content_page_title_color'        => array(
					'default' => SM_DARK_PRIMARY,
				),
				'main_content_body_text_color'         => array(
					'default' => SM_DARK_SECONDARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => 'body,
								.u-buttons-outline .comment-form .form-submit .submit,
								.u-buttons-outline .c-comments-toggle__label',
						),
						array(
							'property' => 'background-color',
							'selector' => '
								.u-buttons-solid.comment-form .form-submit .submit,
								.u-buttons-solid.c-comments-toggle__label,
								.widget_promo_box--dark::before',
						),
						array(
							'property' => 'color',
							'selector' => 'body, 
								a,
								a:hover,
								a:active,
								.u-buttons-outline .comment-form .form-submit .submit,
								.u-buttons-outline .c-comments-toggle__label,
								.c-search-overlay .search-field,
								.c-search-overlay__close-button svg,
								.widget_promo_box--dark .c-promo__btn[class],
								.widget_promo_box--dark .c-promo__btn[class]:hover',
						),
						array(
							'property' => 'background-color',
							'selector' => '
								.u-buttons-solid.comment-form .form-submit .submit,
								.u-buttons-solid.c-comments-toggle__label, 
								.menu--primary .sub-menu:after,
								.widget_promo_box--dark::before',
						),
						array(
							'property' => 'border-color',
							'selector' => '.c-author',
						),
					),
				),
				'main_content_body_link_color'         => array(
					'default' => SM_DARK_PRIMARY,
				),
				'main_content_body_link_active_color'  => array(
					'default' => SM_COLOR_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.entry-content a:not([class]):hover,
								.entry-content a:not([class]):active,
								.entry-content .c-btn-link',
						),
						array(
							'property' => 'color',
							'selector' => '.entry-content a:not([class]):hover,
								.entry-content a:not([class]):active,
								.entry-content .c-btn-link,
								.slick-dots .slick-active',
						),
						array(
							'property' => 'border-color',
							'selector' => '.entry-content blockquote,
								.edit-post-visual-editor[class][class] blockquote',
						),
					),
				),
				'main_content_underlined_body_links'   => array(
					'default' => 1,
				),
				// [Sub Section] Headings Color
				'main_content_heading_1_color'         => array(
					'default' => SM_DARK_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.entry-content h1, .h1, h1',
						),
					),
				),
				'main_content_heading_2_color'         => array(
					'default' => SM_DARK_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.entry-content h2, .h2, h2',
						),
					),
				),
				'main_content_heading_3_color'         => array(
					'default' => SM_DARK_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.entry-content h3, .h3, h3',
						),
					),
				),
				'main_content_heading_4_color'         => array(
					'default' => SM_DARK_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.entry-content h4, .h4, h4, .comment__author',
						),
					),
				),
				'main_content_heading_5_color'         => array(
					'default' => SM_DARK_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.entry-content h5, .h5, h5, .header-meta, .nav-links__label',
						),
					),
				),
				'main_content_heading_6_color'         => array(
					'default' => SM_COLOR_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => 'h6, .h6, .c-author__footer, .comment__metadata, .reply a, .entry-header .cats a',
						),
					),
				),
				'main_content_body_text_font'          => array(
					'selector' => 'body, .c-reading-bar__wrapper-title',
					'default'  => array(
						'font-family'    => VARIATION_SERIF_FONT,
						'font-weight'    => '400',
						'font-size'      => 17,
						'line-height'    => 1.6,
						'letter-spacing' => 0,
						'text-transform' => 'none',
					),
				),

				'main_content_page_title_font' => array(
					'selector' => '.single .entry-title, .h0, .header-dropcap, .dropcap',
					'default'  => array(
						'font-family'    => VARIATION_SANS_SERIF_FONT,
						'font-weight'    => '700',
						'font-size'      => 50,
						'line-height'    => 1.2,
						'letter-spacing' => 0,
						'text-transform' => 'none',
					),
				),

				'main_content_paragraph_text_font' => array(
					'default' => array(
						'font-family'    => VARIATION_SERIF_FONT,
						'font-weight'    => '400',
						'font-size'      => 17,
						'line-height'    => 1.6,
						'letter-spacing' => 0,
						'text-transform' => 'none',
					),
				),

				'main_content_quote_block_font' => array(
					'selector' => '
						.entry-content blockquote,
						.edit-post-visual-editor[class][class] blockquote,
						',
					'default'  => array(
						'font-family'    => VARIATION_SANS_SERIF_FONT,
						'font-weight'    => '700',
						'font-size'      => 50,
						'line-height'    => 1.2,
						'letter-spacing' => 0,
						'text-transform' => 'none',
					),
				),

				// [Sub Section] Headings Fonts
				'main_content_heading_1_font'   => array(
					'default' => array(
						'font-family'    => VARIATION_SANS_SERIF_FONT,
						'font-weight'    => '700',
						'font-size'      => 36,
						'line-height'    => 1.1,
						'letter-spacing' => 0,
						'text-transform' => 'none',
					),
				),

				'main_content_heading_2_font' => array(
					'default' => array(
						'font-family'    => VARIATION_SANS_SERIF_FONT,
						'font-weight'    => '700',
						'font-size'      => 26,
						'line-height'    => 1.,
						'letter-spacing' => 0,
						'text-transform' => 'none',
					),
				),

				'main_content_heading_3_font' => array(
					'default' => array(
						'font-family'    => VARIATION_SANS_SERIF_FONT,
						'font-weight'    => '700',
						'font-size'      => 21,
						'line-height'    => 1.2,
						'letter-spacing' => 0,
						'text-transform' => 'none',
					),
				),

				'main_content_heading_4_font' => array(
					'selector' => $section_options['main_content']['options']['main_content_heading_4_font']['selector'] . ', .c-footer .widget .menu',
					'default'  => array(
						'font-family'    => VARIATION_SANS_SERIF_FONT,
						'font-weight'    => '500',
						'font-size'      => 16,
						'line-height'    => 1.2,
						'letter-spacing' => 0,
						'text-transform' => 'none',
					),
				),

				'main_content_heading_5_font' => array(
					'selector' => '.entry-content h5, .h5, h5, .header-meta, .nav-links__label',
					'default'  => array(
						'font-family'    => VARIATION_SANS_SERIF_FONT,
						'font-weight'    => '700',
						'font-size'      => 14,
						'line-height'    => 1.2,
						'letter-spacing' => 0.15,
						'text-transform' => 'uppercase',
					),
				),

				'main_content_heading_6_font'           => array(
					'default' => array(
						'font-family'    => VARIATION_SANS_SERIF_FONT,
						'font-weight'    => '500',
						'font-size'      => 13,
						'line-height'    => 1.2,
						'letter-spacing' => 0.15,
						'text-transform' => 'uppercase',
					),
				),

				// [Sub Section] Backgrounds
				'main_content_content_background_color' => array(
					'default' => SM_LIGHT_PRIMARY,
					'css'     => array(
						array(
							'property' => 'background-color',
							'selector' => '
								.mce-content-body,
								.u-content-background,
								.edit-post-visual-editor,
								.c-search-overlay,
								.single-post .widget-area--post,
								.widget_featured_posts_carousel .slick-slider .slick-list:after,
								.widget_promo_box--dark .c-promo__btn[class],
								.nav--is-open .c-navbar__content'
						),
						array(
							'property' => 'color',
							'selector' => '
                                .entry-content blockquote::before,
                                .c-hero__content blockquote::before,
                                .comment-content blockquote::before,
                                .mce-content-body blockquote::before,
                                .header-dropcap,
                                div.jetpack-recipe div.jetpack-recipe-directions ol li:after, div.jetpack-recipe div.jetpack-recipe-directions ul li:after,
                                .menu--primary .sub-menu.sub-menu li[class].hover>a,
                                .menu--primary .sub-menu.sub-menu li[class] a,
                                .widget_promo_box--dark'
						),
						array(
							'property'        => 'color',
							'selector'        => '.c-card__letter',
							'callback_filter' => 'felt_card_letter_color'
						),
						array(
							'property' => 'outline-color',
							'selector' => '.single-post .widget-area--post:before',
						),
						array(
							'property'        => 'box-shadow',
							'selector'        => '
								.entry-content a:not([class]), 
								.comment__content a',
							'callback_filter' => 'links_box_shadow_cb'
						),
						array(
							'property'        => 'box-shadow',
							'selector'        => '.entry-content a:not([class]):hover, 
								.comment__content a:hover, 
								.widget a:hover,
								.c-footer .widget a:hover',
							'callback_filter' => 'links_hover_box_shadow_cb'
						),
					),
				),
			)
		),
	);
	// Now we merge the modified config with the original one
	// Thus overwriting what we have changed
	$section_options = Pixelgrade_Config::merge( $section_options, $new_section_options );

	return $section_options;
}

/**
 * Main Content Section
 *
 * @param array $section_options The specific Customify config to be filtered
 * @param array $options The whole Customify config
 *
 * @return array $main_content_section The modified specific config
 */
function felt_customify_buttons_section( $section_options, $options ) {

	$buttons = apply_filters( 'pixelgrade_button_selectors_array', array(
		'.button',
		'.c-btn:not(.c-promo__btn)',
		'.c-comments-toggle__label',
		'button[type=button]',
		'button[type=reset]',
		'button[type=submit]',
		'input[type=button]',
		'input[type=submit]',
		'div.jetpack-recipe .jetpack-recipe-print[class] a',
		'.featured-posts__more',
		'.entry-content .cats[class] > a',
		'.meta__item--button',
		'[id="subscribe-submit"]',
	) );

	$buttons_default = implode( ',', $buttons );
	$buttons_solid   = implode( ',', array_map( 'pixelgrade_prefix_solid_buttons', $buttons ) );
	$buttons_outline = implode( ',', array_map( 'pixelgrade_prefix_outline_buttons', $buttons ) );

	$buttons_active = implode( ',', array(
			implode( ',', $buttons ),
			implode( ',', array_map( 'pixelgrade_suffix_hover_buttons', $buttons ) ),
			implode( ',', array_map( 'pixelgrade_suffix_active_buttons', $buttons ) ),
			implode( ',', array_map( 'pixelgrade_suffix_focus_buttons', $buttons ) ),
		)
	);

	$new_section_options = array(

		// Main Content
		'buttons' => array(
			'options' => array(
				'buttons_style'      => array(
					'default' => 'solid'
				),
				'buttons_shape'      => array(
					'default' => 'square'
				),
				'buttons_color'      => array(
					'default' => SM_COLOR_PRIMARY,
					'css'     => array(
						array(
							'property' => 'background-color',
							'selector' => $buttons_solid,
						),
						array(
							'property' => 'color',
							'selector' => $buttons_outline,
						),
					),
				),
				'buttons_text_color' => array(
					'default' => SM_LIGHT_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => $buttons_active,
						)
					),
				),
				'buttons_font'       => array(
					'selector' => $buttons_default,
					'default'  => array(
						'font-family'    => VARIATION_SANS_SERIF_FONT,
						'font-weight'    => '500',
						'font-size'      => 16,
						'line-height'    => 1.2,
						'letter-spacing' => 0,
					),
				),
			)
		),
	);

	// Now we merge the modified config with the original one
	// Thus overwriting what we have changed
	$section_options = Pixelgrade_Config::merge( $section_options, $new_section_options );

	return $section_options;
}

/**
 * Blog Grid Section
 *
 * @param array $section_options The specific Customify config to be filtered
 * @param array $options The whole Customify config
 *
 * @return array $main_content_section The modified specific config
 */
function felt_customify_blog_grid_section( $section_options, $options ) {
	// First setup the default values
	// These should always come from the theme, not relying on the component's defaults
	$new_section_options = array(
		// Blog Grid
		'blog_grid' => array(
			'options' => array(
				'blog_grid_width'                    => array(
					'default' => 1300,
				),
				'blog_container_sides_spacing'       => array(
					'default' => 60,
				),
				'blog_grid_layout'                   => array(
					'default' => 'regular',
				),
				'blog_items_aspect_ratio'            => array(
					'default' => 120,
					'css'     => array(
						array(
							'property'        => 'dummy',
							'selector'        => '.c-card__frame',
							'callback_filter' => 'pixelgrade_aspect_ratio_cb',
							'unit'            => '%',
						),
					),
				),
				'blog_items_per_row'                 => array(
					'default' => 3,
				),
				'blog_items_vertical_spacing'        => array(
					'default' => 40,
				),
				'blog_items_horizontal_spacing'      => array(
					'default' => 40,
				),
				// [Sub Section] Items Title
				'blog_items_title_position'          => array(
					'default' => 'below',
				),
				'blog_items_title_alignment_nearby'  => array(
					'default' => 'left',
				),
				'blog_items_title_alignment_overlay' => array(
					'default' => 'middle-center',
				),
				// Title Visiblity
				'blog_items_title_visibility'        => array(
					'default' => 1,
				),
				// Excerpt Visiblity
				'blog_items_excerpt_visibility'      => array(
					'default' => 1,
				),
				// [Sub Section] Items Meta
				'blog_items_primary_meta'            => array(
					'default' => 'category',
				),
				'blog_items_secondary_meta'          => array(
					'default' => 'date',
				),
				'blog_item_title_color'              => array(
					'default' => SM_DARK_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.c-card__title',
						),
					),
				),
				'blog_item_excerpt_font'             => array(
					'default' => array(
						'font-family'    => VARIATION_SERIF_FONT,
						'font-weight'    => '400',
						'font-size'      => 16,
						'line-height'    => 1.5,
						'letter-spacing' => 0,
						'text-transform' => 'none',
					),
				),
				'blog_item_excerpt_color'            => array(
					'default' => SM_DARK_PRIMARY,
				),
				'blog_item_meta_primary_color'       => array(
					'default' => SM_COLOR_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.c-meta__primary',
						),
					),
				),
				'blog_item_meta_secondary_color'     => array(
					'default' => SM_COLOR_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.c-meta__secondary, .c-meta__separator',
						),
					),
				),
				'blog_item_thumbnail_background'     => array(
					'default' => '#000000',
					'css'     => array(
						array(
							'property' => 'background-color',
							'selector' => '.c-card__thumbnail-background',
						),
					),
				),
				// [Sub Section] Thumbnail Hover
				'blog_item_thumbnail_hover_opacity'  => array(
					'default' => 1,
					'css'     => array(
						array(
							'property' => 'opacity',
							'selector' => '.c-card:hover .c-card__frame',
							'unit'     => '',
						),
					),
				),
				'blog_item_title_font'               => array(
					'selector' => '.c-card__title, .c-card__letter',
					'default'  => array(
						'font-family'    => VARIATION_SANS_SERIF_FONT,
						'font-weight'    => '700',
						'font-size'      => 21,
						'line-height'    => 1.3,
						'letter-spacing' => 0,
						'text-transform' => 'none',
					),
				),
				'blog_item_meta_font'                => array(
					'selector' => '.c-meta__primary, .c-meta__secondary',
					'default'  => array(
						'font-family'    => VARIATION_SANS_SERIF_FONT,
						'font-weight'    => '500',
						'font-size'      => 13,
						'line-height'    => 1.1,
						'letter-spacing' => 0.1,
						'text-transform' => 'uppercase',
					),
				),
			),
		),
	);
	// Now we merge the modified config with the original one
	// Thus overwriting what we have changed
	$section_options = Pixelgrade_Config::merge( $section_options, $new_section_options );

	return $section_options;
}

/**
 * Header Section
 *
 * @param array $section_options The specific Customify config to be filtered
 * @param array $options The whole Customify config
 *
 * @return array $main_content_section The modified specific config
 */
function felt_customify_header_section( $section_options, $options ) {
	$new_section_options = array(
		'header_section' => array(
			'options' => array(
				'header_logo_height'              => array(
					'default' => 145,
				),
				'header_height'                   => array(
					'default'     => 53,
					'input_attrs' => array(
						'step' => 1,
					),
					'css'         => array(
						array(
							'property' => 'min-height',
							'selector' => '.menu--primary, .site-header-sticky',
							'unit'     => 'px',
						),
					)
				),
				'header_navigation_links_spacing' => array(
					'default' => 56,
				),
				'header_position'                 => array(
					'default' => 'sticky'
				),
				'header_width'                    => array(
					'default' => 'container',
				),
				'header_sides_spacing'            => array(
					'default' => 30,
				),
				'header_navigation_links_color'   => array(
					'default' => SM_DARK_PRIMARY,
				),
				'header_links_active_color'       => array(
					'default' => SM_COLOR_PRIMARY,
				),
				'header_links_active_style'       => array(
					'default' => 'active'
				),
				'header_background'               => array(
					'default' => SM_LIGHT_SECONDARY,
					'css'     => array(
						array(
							'property' => 'background-color',
							'selector' => '.u-header-background, .u-site-header-sticky--not-top .site-header,
								.single.u-site-header-sticky:not(.u-site-header-transparent) .site-header,
								.single:not(.entry-image--none) .entry-header,
								.c-navbar__zone--right .menu--primary:after,
								.entry-content a:not([class]),
								.comment__content a:not([class]),
								.o-layout__full:first-child .widget:nth-of-type(2n):not(.widget_promo_box--dark):not(.dark),
								.o-layout__full:first-child .widget:nth-of-type(2n):not(.widget_promo_box--dark):not(.dark) .slick-list:after,
								.o-layout__full:not(:first-child) .widget:nth-of-type(2n+1):not(.widget_promo_box--dark):not(.dark),
								.o-layout__full:not(:first-child) .widget:nth-of-type(2n+1):not(.widget_promo_box--dark):not(.dark) .slick-list:after,
								.widget_promo_box--light,
								.site-description,
								.related-posts-container,
								.jetpack_subscription_widget.widget--content,
								.widget_blog_subscription.widget--content,
								article:not(.has-post-thumbnail) > .c-card .c-card__thumbnail-background,
								.highlighted',
						),
						array(
							'property' => 'background-color',
							'selector' => '.woocommerce-header:after,
								.woocommerce-product-archive:after,
								.woocommerce-product-header:after'
						),
					),
				),
				// [Sub Section] Sticky Header added bellow
				// Fonts
				'header_site_title_font'          => array(
					'fields'  => array(
						'font-size' => array(
							'max' => 150,
						),
					),
					'default' => array(
						'font-family'    => VARIATION_SITE_TITLE_FONT,
						'font-weight'    => '700',
						'font-size'      => 100,
						'line-height'    => 1,
						'letter-spacing' => 0,
						'text-transform' => 'none',
					),
				),
				'header_navigation_font'          => array(
					'selector' => '.c-navbar, .c-reading-bar',
					'default'  => array(
						'font-family'    => VARIATION_SANS_SERIF_FONT,
						'font-weight'    => '500',
						'font-size'      => 16,
						'line-height'    => 1,
						'letter-spacing' => 0,
						'text-transform' => 'none'
					),
				),
			),
		),
	);

	$section_options = Pixelgrade_Config::merge( $section_options, $new_section_options );
	// Add the new sticky header subsection
	$sticky_header                                = array(
		// [Sub Section] Sticky Header
		'header_sticky_section'            => array(
			'type' => 'html',
			'html' => '<span class="separator sub-section label">' . esc_html__( 'Sticky Header', '__theme_txtd' ) . '</span><span class="description customize-control-description">' . esc_html__( 'Customize the sticky header (fixed) colors.', '__theme_txtd' ) . '</span>',
		),
		'header_sticky_text_color'         => array(
			'type'    => 'color',
			'label'   => esc_html__( '(S) Navigation Links Color', '__theme_txtd' ),
			'live'    => true,
			'default' => SM_LIGHT_SECONDARY,
			'css'     => array(
				array(
					'property' => 'color',
					'selector' => '.site-header-sticky,
								.site-header-sticky .c-navbar,
								.site-header-sticky .c-navbar li'
				),
			),
		),
		'header_sticky_active_links_color' => array(
			'default' => SM_LIGHT_PRIMARY,
			'type'    => 'color',
			'label'   => esc_html__( '(S) Links Active Color', '__theme_txtd' ),
			'live'    => true,
			'css'     => array(
				array(
					'property' => 'color',
					'selector' => '
								.site-header-sticky a:hover, 
								.site-header-sticky .search-trigger:hover *,
								.site-header-sticky .c-navbar [class*="current-menu"],
								.site-header-sticky .c-navbar li:hover,
								.c-reading-bar__menu-trigger:hover'
				),
				array(
					'property' => 'background-color',
					'selector' => '.site-header-sticky .c-navbar li a:before'
				),
			),
		),
		'header_sticky_background'         => array(
			'type'    => 'color',
			'label'   => esc_html__( '(S) Header Background', '__theme_txtd' ),
			'live'    => true,
			'default' => SM_COLOR_PRIMARY,
			'css'     => array(
				array(
					'property' => 'background-color',
					'selector' => '.site-header-sticky, .c-reading-bar'
				),
			),
		),
	);
	$section_options['header_section']['options'] = Pixelgrade_Array::insertBeforeKey( $section_options['header_section']['options'], 'header_title_fonts_section', $sticky_header );

	return $section_options;
}

/**
 * Footer Section
 *
 * @param array $section_options The specific Customify config to be filtered
 * @param array $options The whole Customify config
 *
 * @return array $main_content_section The modified specific config
 */
function felt_customify_footer_section( $section_options, $options ) {
	// First setup the default values
	// These should always come from the theme, not relying on the component's defaults
	$new_section_options = array(
		// Footer
		'footer_section' => array(
			'options' => array(
				// [Section] Layout
				'copyright_text'               => array(
					'default' => esc_html__( '&copy; %year% %site-title%.', '__theme_txtd' ),
				),
				'footer_top_spacing'           => array(
					'default' => 80,
					'css'     => array(
						// Component
						array(
							'property'        => 'padding-top',
							'selector'        => '.u-footer-top-spacing',
							'unit'            => 'px',
							'callback_filter' => 'typeline_spacing_cb',
						),
						// Custom for Felt
						array(
							'property'        => 'margin-top',
							'selector'        => '.c-footer__zone:not(:empty)+.c-footer__zone',
							'unit'            => 'px',
							'callback_filter' => 'typeline_spacing_cb',
						),
					),
				),
				'footer_bottom_spacing'        => array(
					'default' => 56,
					'css'     => array(
						// Component
						array(
							'property'        => 'padding-bottom',
							'selector'        => '.u-footer-bottom-spacing',
							'unit'            => 'px',
							'callback_filter' => 'typeline_spacing_cb',
						),
						// Custom for Felt
						array(
							'property'        => 'padding-top',
							'selector'        => '.c-footer__zone--bottom:not(:first-child)',
							'unit'            => 'px',
							'callback_filter' => 'typeline_spacing_cb',
						),
					),
				),
				'footer_hide_back_to_top_link' => array(
					'default' => false,
				),
				'footer_hide_credits'          => array(
					'default' => false,
				),
				'footer_layout'                => array(
					'default' => 'row',
				),
				// [Section] COLORS
				'footer_body_text_color'       => array(
					'default' => SM_LIGHT_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.c-footer, .widget.dark'
						),
					),
				),
				'footer_links_color'           => array(
					'default' => SM_LIGHT_PRIMARY
				),
				'footer_background'            => array(
					'default' => SM_DARK_SECONDARY,
					'css'     => array(
						array(
							'property' => 'background-color',
							'selector' => '.u-footer-background, .widget.dark',
						),
					),
				),
			),
		),
	);
	// Now we merge the modified config with the original one
	// Thus overwriting what we have changed
	$section_options = Pixelgrade_Config::merge( $section_options, $new_section_options );

	return $section_options;
}

function felt_colorislight( $hex ) {
	$hex       = str_replace( '#', '', $hex );
	$r         = ( hexdec( substr( $hex, 0, 2 ) ) / 255 );
	$g         = ( hexdec( substr( $hex, 2, 2 ) ) / 255 );
	$b         = ( hexdec( substr( $hex, 4, 2 ) ) / 255 );
	$lightness = round( ( ( ( max( $r, $g, $b ) + min( $r, $g, $b ) ) / 2 ) * 100 ) );

	return ( $lightness >= 70 ? true : false );
}

function felt_card_letter_color( $value, $selector, $property, $unit ) {
	$output              = '';
	$no_image_background = pixelgrade_option( 'header_background' );
	$image_background    = pixelgrade_option( 'blog_item_thumbnail_background' );
	$dark_color          = pixelgrade_option( 'blog_item_title_color' );
	$light_color         = pixelgrade_option( 'main_content_content_background_color' );
	$no_image_color      = felt_colorislight( $no_image_background ) ? $dark_color : $light_color;
	$image_color         = felt_colorislight( $image_background ) ? $dark_color : $light_color;
	$output              .= $selector . ' {' . PHP_EOL .
	                        $property . ': ' . $no_image_color . ';' . PHP_EOL .
	                        '}' . PHP_EOL .
	                        '.post.has-post-thumbnail > .c-card ' . $selector . ' {' . PHP_EOL .
	                        $property . ': ' . $image_color . ';' . PHP_EOL .
	                        '}' . PHP_EOL;

	return $output;
}

// @todo check this out
function links_box_shadow_cb( $value, $selector, $property, $unit ) {
	$output = '';
	$output .= $selector . ' {' . PHP_EOL .
	           $property . ': ' . $value . ' 0 1.5em inset;' . PHP_EOL .
	           '}' . PHP_EOL;

	return $output;
}

function links_box_shadow_cb_customizer_preview() {
	$js = "
function links_box_shadow_cb( value, selector, property, unit ) {
    var css = '',
        style = document.getElementById('felt_links_box_shadow_cb_style_tag'),
        head = document.head || document.getElementsByTagName('head')[0];
    css += selector + ' {' +
        property + ': ' + value + ' 0 1.5em inset;' +
    '}';
    if ( style !== null ) {
        style.innerHTML = css;
    } else {
        style = document.createElement('style');
        style.setAttribute('id', 'felt_links_box_shadow_cb_style_tag');
        style.type = 'text/css';
        if ( style.styleSheet ) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }
}" . PHP_EOL;
	wp_add_inline_script( 'customify-previewer-scripts', $js );
}

add_action( 'customize_preview_init', 'links_box_shadow_cb_customizer_preview', 20 );

function links_hover_box_shadow_cb( $value, $selector, $property, $unit ) {
	$output = '';
	$output .= $selector . ' {' . PHP_EOL .
	           $property . ': ' . $value . ' 0 0 inset;' . PHP_EOL .
	           '}' . PHP_EOL;

	return $output;
}

function links_hover_box_shadow_cb_customizer_preview() {
	$js = "
function links_hover_box_shadow_cb( value, selector, property, unit ) {
    var css = '',
        style = document.getElementById('links_hover_box_shadow_cb_style_tag'),
        head = document.head || document.getElementsByTagName('head')[0];
    css += selector + ' {' +
        property + ': ' + value + ' 0 0 inset;' +
    '}';
    if ( style !== null ) {
        style.innerHTML = css;
    } else {
        style = document.createElement('style');
        style.setAttribute('id', 'links_hover_box_shadow_cb_style_tag');
        style.type = 'text/css';
        if ( style.styleSheet ) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }
}" . PHP_EOL;
	wp_add_inline_script( 'customify-previewer-scripts', $js );
}

add_action( 'customize_preview_init', 'links_hover_box_shadow_cb_customizer_preview', 20 );

function felt_inverted_site_header_height( $value, $selector, $property, $unit ) {
	$output = $selector . ' { ' .
	          $property . ': calc(100vh - ' . $value . $unit . ');' .
	          '}';

	return $output;
}

function felt_add_customify_theme_fonts( $fonts ) {
	$fonts['HK Grotesk'] = array(
		'family'   => 'HK Grotesk',
		'src'      => get_template_directory_uri() . '/assets/fonts/hkgrotesk/stylesheet.css',
		'variants' => array( '300', '400', '500', '700' )
	);
	$fonts['Charter']    = array(
		'family'   => 'Charter',
		'src'      => get_template_directory_uri() . '/assets/fonts/charter/stylesheet.css',
		'variants' => array( '400', '400i', '700', '700i' )
	);

	return $fonts;
}

add_filter( 'customify_theme_fonts', 'felt_add_customify_theme_fonts' );
