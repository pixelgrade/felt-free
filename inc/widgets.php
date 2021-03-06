<?php
/**
 * Handles the definition of sidebars and the loading of various widgets
 *
 * @package Felt
 * @since 1.0.0
 */

/**
 * Register the front page widget areas.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function felt_widget_areas_init_front_page() {

	/**
	 * The Front Page Widget Areas
	 */
	// The Full Width Area #1
	register_sidebar( array(
		'name'          => esc_html__( 'Front Page - Full Width Top', '__theme_txtd' ),
		'id'            => 'front-page-1',
		'description'   => esc_html__( 'Add widgets here.', '__theme_txtd' ),
		'before_widget' => '<section id="%1$s" class="widget widget--full %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget__title"><span>',
		'after_title'   => '</span></h2>',
	) );

	// The Content Area #1
	register_sidebar( array(
		'name'          => esc_html__( 'Front Page - &#9484;  Content 1', '__theme_txtd' ),
		'id'            => 'front-page-2',
		'description'   => esc_html__( 'Add widgets here.', '__theme_txtd' ),
		'before_widget' => '<section id="%1$s" class="widget widget--content %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget__title"><span>',
		'after_title'   => '</span></h2>',
	) );

	// The Sidebar Area #1
	// @todo Rename this sidebar right here
	register_sidebar( array(
		'name'          => esc_html__( 'Front Page - &#9492; Sidebar 1', '__theme_txtd' ),
		'id'            => 'front-page-3',
		'description'   => esc_html__( 'Add widgets here.', '__theme_txtd' ),
		'before_widget' => '<section id="%1$s" class="widget widget--side %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget__title"><span>',
		'after_title'   => '</span></h2>',
	) );

	// The Full Width Area #3
	register_sidebar( array(
		'name'          => esc_html__( 'Front Page - Full Width Bottom', '__theme_txtd' ),
		'id'            => 'front-page-7',
		'description'   => esc_html__( 'Add widgets here.', '__theme_txtd' ),
		'before_widget' => '<section id="%1$s" class="widget widget--full %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget__title"><span>',
		'after_title'   => '</span></h2>',
	) );

	// Footer - Featured Area
	register_sidebar( array(
		'name'          => esc_html__( 'Footer - Featured Area', '__theme_txtd' ),
		'id'            => 'footer-featured',
		'description'   => esc_html__( 'Site-wide widgets displayed above the Footer Area of your website.', '__theme_txtd' ),
		'before_widget' => '<section id="%1$s" class="widget widget--full %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget__title"><span>',
		'after_title'   => '</span></h2>',
	) );
}

// We use a latter priority to make sure that all these sidebars appear grouped
add_action( 'widgets_init', 'felt_widget_areas_init_front_page', 30 );


/**
 * Register the our custom widgets for use in Appearance -> Widgets
 */
function felt_custom_widgets_init() {
	/**
	 * Load and register the custom Featured Posts Widgets
	 */

	// The Featured Posts - Grid Widget
	require_once pixelgrade_get_parent_theme_file_path( pixelgrade_get_theme_relative_path( __DIR__ ) . 'widgets/featured-posts/class-FeaturedPosts-GridWidget.php' );
	register_widget( 'Pixelgrade_FeaturedPosts_GridWidget' );

	// The Featured Posts - 5 Cards Layout Widget
	require_once pixelgrade_get_parent_theme_file_path( pixelgrade_get_theme_relative_path( __DIR__ ) . 'widgets/featured-posts/class-FeaturedPosts-5CardsWidget.php' );
	register_widget( 'Pixelgrade_FeaturedPosts_5CardsWidget' );

	// The Featured Posts - Slideshow Widget
	require_once pixelgrade_get_parent_theme_file_path( pixelgrade_get_theme_relative_path( __DIR__ ) . 'widgets/featured-posts/class-FeaturedPosts-SlideshowWidget.php' );
	register_widget( 'Pixelgrade_FeaturedPosts_SlideshowWidget' );
}
add_action( 'widgets_init', 'felt_custom_widgets_init', 10 );

if ( ! function_exists( 'felt_the_footer_featured_area' ) ) {
	function felt_the_footer_featured_area( $location ) {
		if ( is_active_sidebar( 'footer-featured' ) && ( ! function_exists( 'is_checkout' ) || ! is_checkout() ) ) { ?>

            <div class="u-container-sides-spacing">
                <div class="o-wrapper u-container-width">
                    <div class="o-layout">
                        <div class="o-layout__full  widget-area  widget-area--footer-featured">
							<?php
							// The Footer - Featured Area
							pixelgrade_get_sidebar( 'footer-featured' );
							?>
                        </div><!-- .widget-area -->
                    </div><!-- .o-layout -->
                </div><!-- .o-wrapper .u-container-width -->
            </div><!-- .u-container-sides-spacing -->

		<?php }
	}
}
add_action( 'pixelgrade_before_footer', 'felt_the_footer_featured_area', 10, 1 );
