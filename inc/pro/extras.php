<?php
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * @package Felt
 * @since 2.3.0
 */

/**
 * Sets up pro theme features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function felt_pro_setup() {

	add_action( 'pixelgrade_after_footer', 'felt_output_sticky_header', 10 );
	add_action( 'pixelgrade_after_footer', 'felt_output_search_overlay_trigger', 15 );
	add_action( 'pixelgrade_after_footer', 'felt_output_search_overlay', 16 );
	add_action( 'pixelgrade_after_footer', 'felt_output_menu_label', 25 );

	/**
	 * Enable support for the Style Manager Customizer section (via Customify).
	 */
	add_theme_support( 'customizer_style_manager' );
}
add_action( 'after_setup_theme', 'felt_pro_setup' );

/**
 * Add page templates specific to the Pro version.
 *
 * @param array $config Contains the themes features.
 *
 * @return array The modified configuration, with the Pro page templates included.
 */
function felt_pro_page_templates( $config ) {

	// Determine the relative path of the pro directory.
	$pro_dir_relative_path = pixelgrade_get_theme_relative_path( dirname( __FILE__ ) );

	// Add the Archive Index page template to the blog component page templates config.
	$config['page_templates'][ $pro_dir_relative_path . 'page-templates/archive-index.php' ] = esc_html__( 'Archive Index', '__theme_txtd' );

	return $config;
}
add_filter( 'pixelgrade_blog_initial_config', 'felt_pro_page_templates', 11, 1 );

/**
 * Register Archive Index for the Pro version.
 */
function felt_pro_archive_index_sidebar() {
	/**
	 * The Archive Index Widget Areas
	 */
	register_sidebar( array(
		'name'          => esc_html__( 'Archive Index', '__theme_txtd' ),
		'id'            => 'archive-1',
		'description'   => esc_html__( 'Add widgets here.', '__theme_txtd' ),
		'before_widget' => '<section id="%1$s" class="widget widget--content %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget__title h3"><span>',
		'after_title'   => '</span></h2>',
	) );
}
add_action( 'widgets_init', 'felt_pro_archive_index_sidebar', 31 );

function felt_pro_custom_widgets_init() {
	/**
     * Promo Box Widget available only in PRO version
     */
	$path = pixelgrade_get_parent_theme_file_path( 'inc/widgets/class-PromoBoxWidget.php' );
	if ( ! empty( $path ) ) {
		require_once $path;
		register_widget( 'Pixelgrade_PromoBoxWidget' );
	}
}
add_action( 'widgets_init', 'felt_pro_custom_widgets_init', 32 );

function felt_pro_footer_credits_url( $url ) {
	return 'https://pixelgrade.com/?utm_source=felt-pro-clients&utm_medium=footer&utm_campaign=felt-pro';
}
add_filter( 'pixelgrade_footer_credits_url', 'felt_pro_footer_credits_url' );
