<?php
/**
 * Custom functions that act independently of the theme templates.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package Felt
 * @since 1.0.0
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 *
 * @return array
 */
function felt_body_classes( $classes ) {
	//bail if we are in the admin area
	if ( is_admin() ) {
		return $classes;
	}

	$classes[] = 'u-content-background';

	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	//Add a class to the body for the full width page templates
	if ( is_page() && ( is_page_template( 'page-templates/full-width.php' ) || is_page_template( 'page-templates/full-width-no-title.php' ) ) ) {
		$classes[] = 'full-width';
	}

	if ( is_singular() && ! is_attachment() ) {
		$classes[] = 'singular';
	}

	if ( is_singular() && ! is_page_template( array(
			'page-templates/front-page.php',
			'page-templates/full-width.php',
			'page-templates/full-width-no-title.php',
		) ) && pixelgrade_is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'has-sidebar';
	}

	if ( is_single() ) {
		$image_orientation = pixelgrade_get_post_thumbnail_aspect_ratio_class();

		if ( ! empty( $image_orientation ) ) {
			$classes[] = 'entry-image--' . pixelgrade_get_post_thumbnail_aspect_ratio_class();
		}
	}

	if ( is_page() ) {
		unset( $classes[ 'entry-image--' . pixelgrade_get_post_thumbnail_aspect_ratio_class() ] );
	}

	$header_position = pixelgrade_option( 'header_position' );
	if ( 'sticky' == $header_position || empty( $header_position ) ) {
		$classes[] = 'u-site-header-sticky';
	}

	if ( 'stacked' == pixelgrade_option( 'footer_layout', 'stacked' ) ) {
		$classes[] = 'u-footer-layout-stacked';
	}

	$main_content_underlined_body_links = pixelgrade_option( 'main_content_underlined_body_links', false, false );
	if ( ! empty( $main_content_underlined_body_links ) ) {
		$classes[] = 'u-underlined-links';
	}

	$header_text = get_theme_mod( 'header_text' );
	if ( empty( $header_text ) ) {
		$classes[] = 'site-title-hidden';
	}

	$header_width = pixelgrade_option( 'header_width' );
	if ( 'full' == $header_width || empty( $header_width ) ) {
		$classes[] = 'u-full-width-header';
	}

	// If we are on some archive and we don't display featured images (or placeholders), we need to keep the header short
	if ( ( is_home() || is_archive() || is_search() ) && ! pixelgrade_display_featured_images() ) {
		$classes[] = 'u-site-header-short';
	}

	if ( is_customize_preview() ) {
		$classes[] = 'is-customizer-preview';
	}

	if ( pixelgrade_option( 'widgets_title_position' ) === 'sideways' && ( true === pixelgrade_user_has_access( 'pro-features' ) ) ) {
		$classes[] = 'u-widget-title-sideways';
	}

	return $classes;
}

add_filter( 'body_class', 'felt_body_classes' );

function felt_body_attributes( $attributes ) {
	if ( pixelgrade_option( 'main_color' ) ) {
		$attributes['data-color'] = pixelgrade_option( 'main_color' );
	}

	// Some schema.org magic
	if ( is_page() ) {
		$attributes['itemscope'] = '';
		$attributes['itemtype'] = 'http://schema.org/WebPage';
	}

	$attributes['data-parallax'] = pixelgrade_option( 'parallax_amount' );

	return $attributes;
}

add_filter( 'pixelgrade_body_attributes', 'felt_body_attributes', 10, 1 );

if ( ! function_exists( 'felt_google_fonts_url' ) ) :
	/**
	 * Register Google fonts for Felt.
	 *
	 * @since Felt 1.0
	 *
	 * @return string Google fonts URL for the theme.
	 */
	function felt_google_fonts_url() {
		$fonts_url = '';
		$fonts     = array();
		$subsets   = 'latin,latin-ext';


		/* Translators: If there are characters in your language that are not
		* supported by Playfair Display, translate this to 'off'. Do not translate
		* into your own language.
		*/
		if ( 'off' !== esc_html_x( 'on', 'Playfair Display font: on or off', '__theme_txtd' ) ) {
			$fonts[] = 'Playfair Display:700';
		}

		/* Translators: If there are characters in your language that are not
		* supported by Lora, translate this to 'off'. Do not translate
		* into your own language.
		*/
		if ( 'off' !== esc_html_x( 'on', 'Lora font: on or off', '__theme_txtd' ) ) {
			$fonts[] = 'Lora:400,700';
		}

		/* Translators: If there are characters in your language that are not
		* supported by PT Serif, translate this to 'off'. Do not translate
		* into your own language.
		*/
		if ( 'off' !== esc_html_x( 'on', 'PT Serif font: on or off', '__theme_txtd' ) ) {
			$fonts[] = 'PT Serif:400,400i,700,700i';
		}

		/* Translators: If there are characters in your language that are not
		* supported by Montserrat, translate this to 'off'. Do not translate
		* into your own language.
		*/
		if ( 'off' !== esc_html_x( 'on', 'Montserrat font: on or off', '__theme_txtd' ) ) {
			$fonts[] = 'Montserrat:300,400,500,600';
		}

		/* translators: To add an additional character subset specific to your language, translate this to 'greek', 'cyrillic', 'devanagari' or 'vietnamese'. Do not translate into your own language. */
		$subset = esc_html_x( 'no-subset', 'Add new subset (greek, cyrillic, devanagari, vietnamese)', '__theme_txtd' );

		if ( 'cyrillic' == $subset ) {
			$subsets .= ',cyrillic,cyrillic-ext';
		} elseif ( 'greek' == $subset ) {
			$subsets .= ',greek,greek-ext';
		} elseif ( 'devanagari' == $subset ) {
			$subsets .= ',devanagari';
		} elseif ( 'vietnamese' == $subset ) {
			$subsets .= ',vietnamese';
		}

		if ( $fonts ) {
			$fonts_url = add_query_arg( array(
				'family' => rawurlencode( implode( '|', $fonts ) ),
				'subset' => rawurlencode( $subsets ),
			), '//fonts.googleapis.com/css' );
		}

		return $fonts_url;
	} #function
endif;

/**
 * Get the HK Grotesk font URL
 *
 * @return string
 */
function felt_hkgrotesk_font_url() {

	/* Translators: If there are characters in your language that are not
	* supported by HK Grotesk, translate this to 'off'. Do not translate
	* into your own language.
	*/
	$hk_grotesk = esc_html_x( 'on', 'HK Grotesk font: on or off', '__theme_txtd' );
	if ( 'off' !== $hk_grotesk ) {
		return get_template_directory_uri() . '/assets/fonts/hkgrotesk/stylesheet.css';
	}

	return '';
}

if ( ! function_exists( 'felt_comment_form_custom_fields' ) ) :
	/**
	 * Custom comment form fields
	 *
	 * @since Felt 1.0
	 *
	 * @param array $fields
	 *
	 * @return array
	 */
	function felt_comment_form_custom_fields( $fields ) {

		$commenter = wp_get_current_commenter();
		$req       = get_option( 'require_name_email' );
		$aria_req  = ( $req ? 'aria-required="true"' : '' );

		$fields = array_merge( $fields, array(
			'author' =>
				'<p class="comment-form-author"><label for="author">' . esc_html__( 'Name', '__theme_txtd' ) . ( $req ? '*' : '' ) . '</label> ' .
				'<input id="author" name="author" type="text" placeholder="' . esc_attr__( 'Your name', '__theme_txtd' ) . '" value="' . esc_attr( $commenter['comment_author'] ) .
				'" ' . $aria_req . ' /></p>',

			'email' =>
				'<p class="comment-form-email"><label for="email">' . esc_html__( 'Email', '__theme_txtd' ) . ( $req ? '*' : '' ) . '</label> ' .
				'<input id="email" name="email" type="text" placeholder="' . esc_attr__( 'your@email.com', '__theme_txtd' ) . '" value="' . esc_attr( $commenter['comment_author_email'] ) .
				'" ' . $aria_req . ' /></p>',

			'url' =>
				'<p class="comment-form-url"><label for="url">' . esc_html__( 'Website', '__theme_txtd' ) . '</label>' .
				'<input id="url" name="url" type="text" value="' . esc_attr( $commenter['comment_author_url'] ) .
				'" size="30" /></p>',
		) );

		return $fields;
	}
endif;
add_filter( 'comment_form_default_fields', 'felt_comment_form_custom_fields' );

/**
 * Add "Styles" drop-down
 */
function felt_mce_editor_buttons( $buttons ) {
	array_unshift( $buttons, 'styleselect' );

	return $buttons;
}

add_filter( 'mce_buttons_2', 'felt_mce_editor_buttons' );

/**
 * Add styles/classes to the "Styles" drop-down
 *
 * @since Felt 1.0
 *
 * @param array $settings
 *
 * @return array
 */
function felt_mce_before_init( $settings ) {

	$style_formats = array(
		array( 'title' => esc_html__( 'Display', '__theme_txtd' ), 'block' => 'h1', 'classes' => 'h0' ),
		array( 'title' => esc_html__( 'Intro Text', '__theme_txtd' ), 'selector' => 'p', 'classes' => 'intro' ),
		array( 'title' => esc_html__( 'Dropcap', '__theme_txtd' ), 'inline' => 'span', 'classes' => 'dropcap' ),
		array(
			'title'    => esc_html__( 'Button Directional &#8594;', '__theme_txtd' ),
			'selector' => 'a',
			'classes'  => 'c-btn-directional  c-btn-directional--right'
		),
	);

	$settings['style_formats'] = json_encode( $style_formats );

	return $settings;
}
add_filter( 'tiny_mce_before_init', 'felt_mce_before_init' );

// Remove the main category from the category list since we will show it separately
add_filter( 'the_category_list', 'pixelgrade_remove_main_category_from_list', 10, 2 );

/**
 * Return false to prevent the title markup to be displayed
 *
 * @since Felt 1.0
 *
 * @param bool $show
 * @param string|array $location
 *
 * @return bool
 */
function felt_prevent_entry_title( $show, $location ) {
	//we don't want an header if we are using the Full Width (No Title) or Default (No Title) page template
	if ( is_page() && pixelgrade_in_location( 'no-title', $location ) ) {
		return false;
	}

	if ( is_home() && 'posts' == get_option( 'show_on_front' ) ) {
		// This means we are showing the latest posts on front page and we don't have a page title
		return false;
	}

	if ( pixelgrade_in_location( 'front-page', $location ) ) {
		return false;
	}

	return $show;
}
add_filter( 'pixelgrade_display_entry_header', 'felt_prevent_entry_title', 10, 2 );

function felt_modify_embed_defaults() {
	$content_width = pixelgrade_option( 'main_content_content_width', 720 );

	return array(
		'width'  => $content_width,
		'height' => $content_width * 3 / 4
	);
}
add_filter( 'embed_defaults', 'felt_modify_embed_defaults' );

function felt_add_post_card_letter(){

	echo '<span class="c-card__letter">' . esc_html( mb_substr( get_the_title(), 0, 1 ) ) . '</span>';
}
add_action('pixelgrade_before_card_frame_end', 'felt_add_post_card_letter');

add_filter( 'pixelgrade_add_categories_to_content', '__return_true', 9999 );
add_filter( 'pixelgrade_add_tags_to_content', '__return_true', 9999 );

pixelgrade_autoload_dir( 'inc/lite' );
