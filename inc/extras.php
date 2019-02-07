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
	if ( ( is_home() || is_archive() || is_search() ) && ! felt_display_featured_images() ) {
		$classes[] = 'u-site-header-short';
	}

	if ( is_customize_preview() ) {
		$classes[] = 'is-customizer-preview';
	}

	if ( 'sideways' === pixelgrade_option( 'widgets_title_position' ) ) {
		$classes[] = 'u-widget-title-sideways';
	}

	return $classes;
}

add_filter( 'body_class', 'felt_body_classes' );

function felt_body_attributes( $attributes ) {
	if ( pixelgrade_option( 'main_color' ) ) {
		$attributes['data-color'] = pixelgrade_option( 'main_color' );
	}

	$attributes['data-parallax'] = pixelgrade_option( 'parallax_amount' );

	return $attributes;
}

add_filter( 'pixelgrade_body_attributes', 'felt_body_attributes', 10, 1 );

/**
 * Display the classes for the blog wrapper.
 *
 * @param string|array $class Optional. One or more classes to add to the class list.
 * @param string|array $location Optional. The place (template) where the classes are displayed. This is a hint for filters.
 */
function felt_blog_class( $class = '', $location = '' ) {
	// Separates classes with a single space, collates classes
	echo 'class="' . join( ' ', felt_get_blog_class( $class, $location ) ) . '"';
}

/**
 * Retrieve the classes for the portfolio wrapper as an array.
 *
 * @since Felt 1.0
 *
 * @param string|array $class Optional. One or more classes to add to the class list.
 * @param string|array $location Optional. The place (template) where the classes are displayed. This is a hint for filters.
 *
 * @return array Array of classes.
 */
function felt_get_blog_class( $class = '', $location = '' ) {

	$classes = array();

	$classes[] = 'c-gallery c-gallery--blog';
	// layout
	$grid_layout       = pixelgrade_option( 'blog_grid_layout', 'regular' );
	$grid_layout_class = "c-gallery--" . $grid_layout;
	$classes[]         = $grid_layout_class;

	if ( $grid_layout == 'masonry' ) {
		$classes[] = 'js-masonry';
	}

	// items per row
	$items_per_row          = intval( pixelgrade_option( 'blog_items_per_row', 3 ) );
	$items_per_row_at_desk  = $items_per_row;
	$items_per_row_at_lap   = $items_per_row == 1 ? 1 : $items_per_row > 4 ? $items_per_row - 1 : $items_per_row;
	$items_per_row_at_small = $items_per_row_at_lap > 1 ? $items_per_row_at_lap - 1 : $items_per_row_at_lap;
	$items_per_row_class    = 'o-grid--' . $items_per_row_at_desk . 'col-@desk o-grid--' . $items_per_row_at_lap . 'col-@lap o-grid--' . $items_per_row_at_small . 'col-@xsmall';
	// title position
	$title_position       = pixelgrade_option( 'blog_items_title_position', 'regular' );
	$title_position_class = 'c-gallery--title-' . $title_position;

	if ( $title_position == 'overlay' ) {
		$title_alignment_class = 'c-gallery--title-' . pixelgrade_option( 'blog_items_title_alignment_overlay', 'bottom-left' );
	} else {
		$title_alignment_class = 'c-gallery--title-' . pixelgrade_option( 'blog_items_title_alignment_nearby', 'left' );
	}

	$classes[] = $title_position_class;
	$classes[] = $title_alignment_class;
	$classes[] = $items_per_row_class;

	if ( ! empty( $class ) ) {
		if ( ! is_array( $class ) ) {
			$class = preg_split( '#\s+#', $class );
		}
		$classes = array_merge( $classes, $class );
	} else {
		// Ensure that we always coerce class to being an array.
		$class = array();
	}

	$classes = array_map( 'esc_attr', $classes );

	/**
	 * Filters the list of CSS classes for the blog wrapper.
	 *
	 * @param array $classes An array of header classes.
	 * @param array $class An array of additional classes added to the blog wrapper.
	 * @param string|array $location The place (template) where the classes are displayed.
	 */
	$classes = apply_filters( 'felt_blog_class', $classes, $class, $location );

	return array_unique( $classes );
}

/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function felt_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="' . get_bloginfo( 'pingback_url', 'display' ) . '">';
	}
}

add_action( 'wp_head', 'felt_pingback_header' );

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
				'family' => urlencode( implode( '|', $fonts ) ),
				'subset' => urlencode( $subsets ),
			), '//fonts.googleapis.com/css' );
		}

		return $fonts_url;
	} #function
endif;

if ( ! function_exists( 'felt_has_post_thumbnail' ) ) :

	function felt_has_portrait_thumbnail( $post_id = null ) {

		// $post is the current post
		$post = get_post( $post_id );

		$jetpack_show_single_featured_image = get_option( 'jetpack_content_featured_images_post', true );

		// Bail if no post or the image is hidden from Jetpack's content options
		if ( empty( $post ) || empty( $jetpack_show_single_featured_image ) ) {
			return 'none';
		}

		$image_type = pixelgrade_get_image_aspect_ratio_type( get_post_thumbnail_id( $post ), 'none' );

		if ( 'portrait' === $image_type ) {
			return true;
		}

		return false;
	}

endif;

if ( ! function_exists( 'felt_has_landscape_thumbnail' ) ) :
	/**
	 * Get the class corresponding to the aspect ratio of the post featured image
	 *
	 * @since Felt 1.0
	 *
	 * @param int|WP_Post $post_id Optional. Post ID or post object.
	 *
	 * @return string Aspect ratio specific class.
	 */
	function felt_has_landscape_thumbnail( $post_id = null ) {

		// $post is the current post
		$post = get_post( $post_id );

		$jetpack_show_single_featured_image = get_option( 'jetpack_content_featured_images_post', true );

		// Bail if no post or the image is hidden from Jetpack's content options
		if ( empty( $post ) || empty( $jetpack_show_single_featured_image ) ) {
			return 'none';
		}

		$image_type = pixelgrade_get_image_aspect_ratio_type( get_post_thumbnail_id( $post ), 'none' );

		if ( 'landscape' === $image_type ) {
			return true;
		}

		return false;
	}

endif;

if ( ! function_exists( 'felt_has_no_thumbnail' ) ) :
	/**
	 * Get the class corresponding to the aspect ratio of the post featured image
	 *
	 * @since Felt 1.0
	 *
	 * @param int|WP_Post $post_id Optional. Post ID or post object.
	 *
	 * @return string Aspect ratio specific class.
	 */
	function felt_has_no_thumbnail( $post_id = null ) {

		// $post is the current post
		$post = get_post( $post_id );

		$jetpack_show_single_featured_image = get_option( 'jetpack_content_featured_images_post', true );

		// Bail if no post or the image is hidden from Jetpack's content options
		if ( empty( $post ) || empty( $jetpack_show_single_featured_image ) ) {
			return 'none';
		}

		$image_type = pixelgrade_get_image_aspect_ratio_type( get_post_thumbnail_id( $post ), 'none' );

		if ( 'none' === $image_type ) {
			return true;
		}

		return false;
	} #function

endif;

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
		$aria_req  = ( $req ? ' aria-required="true"' : '' );

		$fields = array_merge( $fields, array(
			'author' =>
				'<p class="comment-form-author"><label for="author">' . esc_html__( 'Name', '__theme_txtd' ) . ( $req ? '*' : '' ) . '</label> ' .
				'<input id="author" name="author" type="text" placeholder="' . esc_attr__( 'Your name', '__theme_txtd' ) . '" value="' . esc_attr( $commenter['comment_author'] ) .
				'"' . $aria_req . ' /></p>',

			'email' =>
				'<p class="comment-form-email"><label for="email">' . esc_html__( 'Email', '__theme_txtd' ) . ( $req ? '*' : '' ) . '</label> ' .
				'<input id="email" name="email" type="text" placeholder="' . esc_attr__( 'your@email.com', '__theme_txtd' ) . '" value="' . esc_attr( $commenter['comment_author_email'] ) .
				'"' . $aria_req . ' /></p>',

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
		array( 'title'    => esc_html__( 'Button Directional &#8594;', '__theme_txtd' ),
		       'selector' => 'a',
		       'classes'  => 'c-btn-directional  c-btn-directional--right'
		),
	);

	$settings['style_formats'] = json_encode( $style_formats );

	return $settings;
}

add_filter( 'tiny_mce_before_init', 'felt_mce_before_init' );

// Remove the main category from the category list since we will shot it separately
add_filter( 'the_category_list', 'pixelgrade_remove_main_category_from_list', 10, 2 );

/**
 * Return false to prevent the title markup to be displayed
 *
 * @since Felt 1.0
 *
 * @param bool $display
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


/**
 * Generate the HK Grotesk font URL
 *
 * @return string
 */
function felt_charter_font_url() {

	/* Translators: If there are characters in your language that are not
	* supported by Charter, translate this to 'off'. Do not translate
	* into your own language.
	*/
	$charter = esc_html_x( 'on', 'Charter font: on or off', '__theme_txtd' );
	if ( 'off' !== $charter ) {
		return get_template_directory_uri() . '/assets/fonts/charter/stylesheet.css';
	}

	return '';
}

/**
 * Generate the HK Grotesk font URL
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

add_filter( 'pixelgrade_footer_use_jetpack_social_menu', '__return_true' );

function felt_modify_embed_defaults() {
	$content_width = pixelgrade_option( 'main_content_content_width', 720 );
	return array(
		'width'  => $content_width,
		'height' => $content_width * 3/4
	);
}
add_filter( 'embed_defaults', 'felt_modify_embed_defaults' );
