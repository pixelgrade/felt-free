<?php
/**
 * The Featured Posts - Grid Widget
 *
 * @package Felt
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Make sure the base widget class is loaded
if ( ! class_exists( 'Pixelgrade_FeaturedPosts_BaseWidget' ) ) {
	require_once pixelgrade_get_theme_file_path( 'inc/widgets/featured-posts/abstracts/class-FeaturedPosts-BaseWidget.php' );
}

if ( ! class_exists( 'Pixelgrade_FeaturedPosts_GridWidget' ) ) :

	/**
	 * Class used to implement a Featured Posts - Grid widget.
	 *
	 * @see WP_Widget
	 */
	class Pixelgrade_FeaturedPosts_GridWidget extends Pixelgrade_FeaturedPosts_BaseWidget {

		/**
		 * Sets up a new Featured Posts - Grid widget instance.
		 *
		 * @access public
		 */
		public function __construct() {
			$widget_ops = array(
				'classname'                   => 'widget_featured_posts_grid',
				'description'                 => esc_html__( 'Displays posts in a multi-columns layout grid.', '__theme_txtd' ),
				'customize_selective_refresh' => true,
			);

			// This is the way we can alter the base widget's behaviour
			$config = array(
                'fields'   => array(
                ),
				'posts' => array(
					'classes'       => array( 'featured-posts-grid' ),
				),
			);

			if ( ! pixelgrade_user_has_access( 'pro-features' ) ) {
				$config['sidebars_not_supported'] = array(
					'front-page-4',
					'front-page-5',
					'front-page-6',
					'archive-1',
					'footer-featured',
				);
			}

			parent::__construct( 'featured-posts-grid',
				apply_filters( 'pixelgrade_widget_name', esc_html__( '&#10; Pixelgrade: Grid Posts', '__theme_txtd' ) ),
				$widget_ops,
				$config );

			$this->alt_option_name = 'widget_featured_entries_grid';
		}
	}

endif;
