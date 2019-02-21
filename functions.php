<?php
/**
 * Felt functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Felt
 * @since 1.0.0
 */

/**
 * =========================
 * A few (wise) words
 *
 * For consistency amongst our themes, we have put as much of the theme behaviour (both logical and stylistic)
 * in components (the `components` directory). This includes the "classic" theme files like `archive.php`, `single.php`,
 * `header.php`, or `sidebar.php`.
 * Do no worry. You can still have those files in a theme, or a child theme. It will automagically work!
 *
 * We prefer not to use those files if the theme design allows us to stick to the markup patterns common to our themes,
 * available in our components.
 * This will make for more solid themes, faster update cycles and faster development for new themes.
 *
 * Now, let the show begin!
 * Oh snap... it already began :)
 * =========================
 */

/*
 * =========================
 * Autoload the Pixelgrade Components FTW!
 * This must be the FIRST thing a theme does!
 * =========================
 */
require_once trailingslashit( get_template_directory() ) . 'components/components-autoload.php';
Pixelgrade_Components_Autoload();

if ( ! function_exists( 'felt_setup' ) ) {
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function felt_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on '__theme_txtd', use a find and replace
		 * to change '__theme_txtd' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( '__theme_txtd', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded title tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Add image sizes used by theme.
		 */
		// Used for blog archive(the height is flexible)
		add_image_size( 'felt-card-image', 450, 9999, false );
		// Used for sliders(fixed height)
		add_image_size( 'felt-slide-image', 9999, 800, false );
		// Used for hero image
		add_image_size( 'felt-hero-image', 2700, 9999, false );

		/*
		 * Add theme support for site logo
		 *
		 * First, it's the image size we want to use for the logo thumbnails
		 * Second, the 2 classes we want to use for the "Display Header Text" Customizer logic
		 */
		add_theme_support( 'custom-logo', apply_filters( 'felt_header_site_logo', array(
			'height'      => 600,
			'width'       => 1360,
			'flex-height' => true,
			'flex-width'  => true,
			'header-text' => array(
				'site-title',
				'site-description-text',
			)
		) ) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'comment-list',
			'gallery',
			'caption',
		) );

		/*
		 * Remove themes' post formats support
		 */
		remove_theme_support( 'post-formats' );

		/*
		 * Add the editor style and fonts
		 */
		add_editor_style(
			array(
				felt_google_fonts_url(),
				'editor-style.css',
			)
		);

		/*
		 * Enable support for Visible Edit Shortcuts in the Customizer Preview
		 *
		 * @link https://make.wordpress.org/core/2016/11/10/visible-edit-shortcuts-in-the-customizer-preview/
		 */
		add_theme_support( 'customize-selective-refresh-widgets' );
	}
}
add_action( 'after_setup_theme', 'felt_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function felt_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'felt_content_width', 720 );
}
add_action( 'after_setup_theme', 'felt_content_width', 0 );

function felt_custom_tiled_gallery_width() {
	$width = pixelgrade_option( 'main_content_container_width', 1300 );

	if ( pixelgrade_is_active_sidebar( 'sidebar-1' ) ) {
		$width = pixelgrade_option( 'main_content_container_width', 1300 ) - 300 - 56;
	}

	return $width;
}
add_filter( 'tiled_gallery_content_width', 'felt_custom_tiled_gallery_width' );

/**
 * Enqueue scripts and styles.
 */
function felt_scripts() {
	$theme = wp_get_theme();
	$main_style_deps = array();
	$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

	/* Default Google Fonts */
	wp_enqueue_style( 'felt-google-fonts', felt_google_fonts_url() );

	/* Default Self-hosted Fonts should be loaded when Customify is off */
	if ( ! class_exists( 'PixCustomifyPlugin' ) || ! pixelgrade_user_has_access( 'pro-features' ) ) {
		wp_enqueue_style( 'felt-fonts-charissil', felt_charissil_font_url() );
		$main_style_deps[] = 'felt-fonts-charissil';

		wp_enqueue_style( 'felt-fonts-hkgrotesk', felt_hkgrotesk_font_url() );
		$main_style_deps[] = 'felt-fonts-hkgrotesk';
	}

	/* The main theme stylesheet */
	wp_enqueue_style( 'felt-style', get_template_directory_uri() . '/style.css', $main_style_deps, $theme->get( 'Version' ) );

	wp_style_add_data( 'felt-style', 'rtl', 'replace' );

	/* Scripts */
	wp_register_script( 'gsap-tweenmax','//cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js', array(), '2.0.2', true );
	wp_register_script( 'select2','//cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js', array(), '4.0.5', true );
	wp_register_script( 'slick-carousel','//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js', array(), '1.9.0', true );

	wp_enqueue_script( 'felt-commons-scripts', get_theme_file_uri( '/assets/js/commons.js' ), array(), $theme->get( 'Version' ), true );
	wp_enqueue_script( 'felt-scripts', get_theme_file_uri( '/assets/js/scripts' . $suffix . '.js' ), array( 'felt-commons-scripts', 'jquery', 'masonry', 'hoverIntent', 'gsap-tweenmax', 'select2', 'slick-carousel' ), $theme->get( 'Version' ), true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	wp_localize_script( 'felt-scripts', 'feltStrings', array(
		'ajaxurl' => esc_url( admin_url( 'admin-ajax.php' ) ),
	) );
}
add_action( 'wp_enqueue_scripts', 'felt_scripts' );

function felt_gutenberg_styles() {
	wp_enqueue_style( 'felt-gutenberg', get_theme_file_uri( '/editor.css' ), false );
	wp_enqueue_style( 'felt-font-hkgrotesk', felt_hkgrotesk_font_url() );
	wp_enqueue_style( 'felt-font-charissil', felt_charissil_font_url() );

	$content_width = pixelgrade_option( 'main_content_content_width' );
	$container_width = pixelgrade_option( 'main_content_container_width', 1300 ) - 300;

	$style = '
	    .edit-post-visual-editor[class] .editor-block-list__block,
        .edit-post-visual-editor[class] .editor-post-title__block {
            max-width: ' . $content_width . 'px;
        }

        .editor-block-list__layout .editor-block-list__block[data-type="core/gallery"],
        .editor-block-list__layout .editor-block-list__block[data-align=left],
        .editor-block-list__layout .editor-block-list__block[data-align=right] {
            max-width: ' . $container_width . 'px;
        }';
	wp_add_inline_style( 'felt-gutenberg', $style );

}
add_action( 'enqueue_block_editor_assets', 'felt_gutenberg_styles' );

function felt_load_wp_admin_style() {
	wp_register_style( 'felt_wp_admin_css', get_template_directory_uri() . '/admin.css', false, '1.0.0' );
	wp_enqueue_style( 'felt_wp_admin_css' );
}
add_action( 'admin_enqueue_scripts', 'felt_load_wp_admin_style' );

/*
 * ==================================================
 * Load all the files directly in the `inc` directory
 * ==================================================
 */
pixelgrade_autoload_dir( 'inc' );
