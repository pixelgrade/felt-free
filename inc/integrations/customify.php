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

add_filter( 'customify_filter_fields', 'felt_lite_add_customify_options', 11, 1 );
add_filter( 'customify_filter_fields', 'felt_lite_add_customify_style_manager_section', 12, 1 );

add_filter( 'customify_filter_fields', 'felt_lite_fill_customify_options', 20 );

// Color Constants
define( 'FELTLITE_SM_COLOR_PRIMARY', '#ff6000' );
define( 'FELTLITE_SM_COLOR_SECONDARY', '#ff9200' );
define( 'FELTLITE_SM_COLOR_TERTIARY', '#ff7019' );
define( 'FELTLITE_SM_DARK_PRIMARY', '#161616' );
define( 'FELTLITE_SM_DARK_SECONDARY', '#1c1c1c' );
define( 'FELTLITE_SM_DARK_TERTIARY', '#161616' );
define( 'FELTLITE_SM_LIGHT_PRIMARY', '#fffcfc' );
define( 'FELTLITE_SM_LIGHT_SECONDARY', '#fff4e8' );
define( 'FELTLITE_SM_LIGHT_TERTIARY', '#f7f3f0' );

function felt_lite_add_customify_options( $options ) {
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
function felt_lite_add_customify_style_manager_section( $options ) {
	// If the theme hasn't declared support for style manager, bail.
	if ( ! current_theme_supports( 'customizer_style_manager' ) ) {
		return $options;
	}

	if ( ! isset( $options['sections']['style_manager_section'] ) ) {
		$options['sections']['style_manager_section'] = array();
	}

	$new_config = array(
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
				'default'          => FELTLITE_SM_COLOR_PRIMARY,
			),
			'sm_color_secondary' => array(
				'default' => FELTLITE_SM_COLOR_SECONDARY,
			),
			'sm_color_tertiary'  => array(
				'default' => FELTLITE_SM_COLOR_TERTIARY,
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
				'default'          => FELTLITE_SM_DARK_PRIMARY,
			),
			'sm_dark_secondary'  => array(
				'connected_fields' => array(
					// high
					'footer_background',

					// always black
					'main_content_body_text_color',
				),
				'default'          => FELTLITE_SM_DARK_SECONDARY,
			),
			'sm_dark_tertiary'   => array(
				'default' => FELTLITE_SM_DARK_TERTIARY,
			),
			'sm_light_primary'   => array(
				'connected_fields' => array(
					'main_content_content_background_color',
					'buttons_text_color',
					'header_sticky_active_links_color',
					'footer_links_color',
					'footer_body_text_color',
				),
				'default'          => FELTLITE_SM_LIGHT_PRIMARY,
			),
			'sm_light_secondary' => array(
				'connected_fields' => array(
					'header_background',
					'header_sticky_text_color'
				),
				'default'          => FELTLITE_SM_LIGHT_SECONDARY,
			),
			'sm_light_tertiary'  => array(
				'default' => FELTLITE_SM_LIGHT_TERTIARY,
			),
		),
	);

	$options['sections']['style_manager_section'] = Customify_Array::array_merge_recursive_distinct( $options['sections']['style_manager_section'], $new_config );

	return $options;
}

function felt_lite_fill_customify_options( $options ) {
	$buttons = apply_filters( 'pixelgrade_button_selectors_array', array(
		'.button',
		'.c-btn:not(.c-promo__btn)',
		'.widget_promo_box--light .c-promo__btn',
		'.c-comments-toggle__label',
		'button[type=button]',
		'button[type=reset]',
		'button[type=submit]',
		'input[type=button]',
		'input[type=submit]',
		'div.jetpack-recipe .jetpack-recipe-print[class] a',
		'.featured-posts__more',
		'.meta__item--button',
		'[id="subscribe-submit"]',
		'.button[class][class][class][class][class]'
	) );

	$buttons_solid   = implode( ',', array_map( 'pixelgrade_prefix_solid_buttons', $buttons ) );
	$buttons_outline = implode( ',', array_map( 'pixelgrade_prefix_outline_buttons', $buttons ) );

	$buttons_active = implode( ',', array(
			implode( ',', $buttons ),
			implode( ',', array_map( 'pixelgrade_suffix_hover_buttons', $buttons ) ),
			implode( ',', array_map( 'pixelgrade_suffix_active_buttons', $buttons ) ),
			implode( ',', array_map( 'pixelgrade_suffix_focus_buttons', $buttons ) ),
		)
	);

	$new_config = array(
		'general'   => array(
			'title' => '',
			'type'  => 'hidden',
			'options'   => array(

			)
		),
		'header_section'    => array(
			'title' => '',
			'type'  => 'hidden',
			'options'   => array(
				'header_navigation_links_color'   => array(
					'default' => FELTLITE_SM_DARK_PRIMARY,
				),
				'header_links_active_color'       => array(
					'default' => FELTLITE_SM_COLOR_PRIMARY,
				),
				'header_background'               => array(
					'default' => FELTLITE_SM_LIGHT_SECONDARY,
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
								.woocommerce-product-header:after, 
								.single-product .woocommerce-notices-wrapper:after'
						),
					),
				),
				'header_sticky_text_color'         => array(
					'type'    => 'color',
					'label'   => esc_html__( '(S) Navigation Links Color', '__theme_txtd' ),
					'live'    => true,
					'default' => FELTLITE_SM_LIGHT_SECONDARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.site-header-sticky,
								.site-header-sticky .c-navbar,
								.site-header-sticky .c-navbar li'
						),
						array(
							'property' => 'background-color',
							'selector' => '.site-header-sticky .cart-count'
						),
					),
				),
				'header_sticky_active_links_color' => array(
					'default' => FELTLITE_SM_LIGHT_PRIMARY,
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
					'default' => FELTLITE_SM_COLOR_PRIMARY,
					'css'     => array(
						array(
							'property' => 'background-color',
							'selector' => '
						.site-header-sticky, 
						.c-reading-bar,
						.woocommerce-store-notice[class][class]'
						),
						array(
							'property' => 'color',
							'selector' => '.site-header-sticky .cart-count'
						),
					),
				),
			)
		),
		'main_content'  => array(
			'title' => '',
			'type'  => 'hidden',
			'options'   => array(
				'main_content_border_color'            => array(
					'default' => '#F7F6F5',
					'css'     => array(
						array(
							'property' => 'border-color',
							'selector' => '.site',
						),
					),
				),
				'main_content_page_title_color'        => array(
					'default' => FELTLITE_SM_DARK_PRIMARY,
					'css' => array(
						array(
							'property' => 'background-color',
							'selector' => ''
						)
					),
				),
				'main_content_body_text_color'         => array(
					'default' => FELTLITE_SM_DARK_SECONDARY,
					'css'     => array(
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
								.widget_promo_box--dark::before,
								#content .sharedaddy[class] .sd-social-icon .sd-content.sd-content ul li[class*=\'share-\'] a.sd-button,
								.entry-content .cats[class] > a',
						),
						array(
							'property' => 'border-color',
							'selector' => '.c-author',
						),
					),
				),
				'main_content_body_link_color'         => array(
					'default' => FELTLITE_SM_DARK_PRIMARY,
				),
				'main_content_body_link_active_color'  => array(
					'default' => FELTLITE_SM_COLOR_PRIMARY,
					'css'     => array(
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
				'main_content_heading_1_color'         => array(
					'default' => FELTLITE_SM_DARK_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.entry-content h1, .h1, h1',
						),
					),
				),
				'main_content_heading_2_color'         => array(
					'default' => FELTLITE_SM_DARK_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.entry-content h2, .h2, h2',
						),
					),
				),
				'main_content_heading_3_color'         => array(
					'default' => FELTLITE_SM_DARK_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.entry-content h3, .h3, h3',
						),
					),
				),
				'main_content_heading_4_color'         => array(
					'default' => FELTLITE_SM_DARK_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.entry-content h4, .h4, h4, .comment__author',
						),
					),
				),
				'main_content_heading_5_color'         => array(
					'default' => FELTLITE_SM_DARK_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.entry-content h5, .h5, h5, .header-meta, .nav-links__label',
						),
					),
				),
				'main_content_heading_6_color'         => array(
					'default' => FELTLITE_SM_COLOR_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => 'h6, .h6, .c-author__footer, .comment__metadata, .reply a, .entry-header .cats a',
						),
					),
				),
				'main_content_content_background_color'     => array(
					'type'    => 'color',
					'label'   => esc_html__( 'Content Background Color', '__components_txtd' ),
					'live'    => true,
					'default' => null, // this should be set by the theme (previously #F5FBFE)
					'css'     => array(
						array(
							'property' => 'background-color',
							'selector' => '.u-content-background, .mce-content-body',
						),
					),
				),
			)
		),
		'footer_section'    => array(
			'title' => '',
			'type'  => 'hidden',
			'options'   => array(
				'footer_body_text_color'       => array(
					'default' => FELTLITE_SM_LIGHT_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '
								.c-footer, 
								.widget.dark, 
								.widget-area--side .widget_promo_box--dark,
								.widget-area--main .widget_promo_box--dark,
								.widget-area--below-post .widget_promo_box--dark'
						),
					),
				),
				'footer_links_color'           => array(
					'default' => FELTLITE_SM_LIGHT_PRIMARY
				),
				'footer_background'            => array(
					'default' => FELTLITE_SM_DARK_SECONDARY,
					'css'     => array(
						array(
							'property' => 'background-color',
							'selector' => '
								.u-footer-background, 
								.widget.dark, 
								.widget-area--side .widget_promo_box--dark,
								.widget-area--main .widget_promo_box--dark,
								.widget-area--below-post .widget_promo_box--dark,
								.widget_promo_box--dark[class][class][class]:before',
						),
					),
				),
			)
		),
		'buttons'   => array(
			'title' => '',
			'type'  => 'hidden',
			'options'   => array(
				'buttons_color'      => array(
					'default' => FELTLITE_SM_COLOR_PRIMARY,
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
					'default' => FELTLITE_SM_LIGHT_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => $buttons_active,
						)
					),
				),
			)
		),
		'blog_grid' => array(
			'title' => '',
			'type'  => 'hidden',
			'options'   => array(
				'blog_item_footer_color'             => array(
					'type'  => 'hidden_control',
					'default' => FELTLITE_SM_DARK_PRIMARY,
				),
				'blog_item_title_color'              => array(
					'type'  => 'hidden_control',
					'default' => FELTLITE_SM_DARK_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.c-card__title',
						),
					),
				),
				'blog_item_excerpt_color'            => array(
					'type'  => 'hidden_control',
					'default' => FELTLITE_SM_DARK_PRIMARY,
				),
				'blog_item_meta_primary_color'       => array(
					'type'  => 'hidden_control',
					'default' => FELTLITE_SM_COLOR_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.c-meta__primary',
						),
					),
				),
				'blog_item_meta_secondary_color'     => array(
					'type'  => 'hidden_control',
					'default' => FELTLITE_SM_COLOR_PRIMARY,
					'css'     => array(
						array(
							'property' => 'color',
							'selector' => '.c-meta__secondary, .c-meta__separator',
						),
					),
				),
				'blog_item_thumbnail_background'     => array(
					'type'  => 'hidden_control',
					'default' => '#000000',
					'css'     => array(
						array(
							'property' => 'background-color',
							'selector' => '.c-card__thumbnail-background',
						),
					),
				),
			)
		)
	);

	$options['sections'] = Customify_Array::array_merge_recursive_distinct( $options['sections'], $new_config );

	return $options;
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

	return $fonts;
}
add_filter( 'customify_theme_fonts', 'felt_add_customify_theme_fonts' );

function felt_lite_add_default_color_palette( $color_palettes ) {

	$color_palettes = array_merge( array(
		'default' => array(
			'label'   => esc_html__( 'Theme Default', 'felt' ),
			'preview' => array(
				'background_image_url' => 'https://cloud.pixelgrade.com/wp-content/uploads/2018/09/vivid-autumn-palette-400x156.png',
			),
			'options' => array(
				'sm_color_primary'   => FELTLITE_SM_COLOR_PRIMARY,
				'sm_color_secondary' => FELTLITE_SM_COLOR_SECONDARY,
				'sm_color_tertiary'  => FELTLITE_SM_COLOR_TERTIARY,
				'sm_dark_primary'    => FELTLITE_SM_DARK_PRIMARY,
				'sm_dark_secondary'  => FELTLITE_SM_DARK_SECONDARY,
				'sm_dark_tertiary'   => FELTLITE_SM_DARK_TERTIARY,
				'sm_light_primary'   => FELTLITE_SM_LIGHT_PRIMARY,
				'sm_light_secondary' => FELTLITE_SM_LIGHT_SECONDARY,
				'sm_light_tertiary'  => FELTLITE_SM_LIGHT_TERTIARY,
			),
		),
	), $color_palettes );

	return $color_palettes;
}

add_filter( 'customify_get_color_palettes', 'felt_lite_add_default_color_palette' );
