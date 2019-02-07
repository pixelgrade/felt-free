<?php
/**
 * The Promo Box Widget class
 *
 * @package Felt
 * @since 2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Pixelgrade_PromoBoxWidget' ) ) :

	/**
	 * Class used to implement the Pixelgrade Promo Box widget.
	 *
	 * @see Pixelgrade_Widget_Fields
	 * @see WP_Widget
	 */
	class Pixelgrade_PromoBoxWidget extends Pixelgrade_WidgetFields {

		// These are the widget args
		public $args = array(
			'before_title'  => '<h4 class="widgettitle">',
			'after_title'   => '</h4>',
			'before_widget' => '<div class="widget-wrap">',
			'after_widget'  => '</div></div>'
		);

		/**
		 * Sets up a new Promo Box widget instance.
		 *
		 * @access public
		 */
		public function __construct() {
			// Set up the widget config
			$config = array(
			    'fields_sections' => array(
			        'default' => array(
			            'title' => '',
			            'priority' => 1, // This section should really be the first as it is not part of the accordion
                    ),
                    'content' => array(
                        'title' => esc_html__( 'Content', '__theme_txtd' ),
                        'default_state' => 'open',
                        'priority' => 10,
                    ),
                    'layout' => array(
                        'title' => esc_html__( 'Layout', '__theme_txtd' ),
                        'priority' => 20,
                    ),
                    'display' => array(
                        'title' => esc_html__( 'Display', '__theme_txtd' ),
                        'priority' => 30,
                    ),
                    'others' => array(
                        'title' => esc_html__( 'Others', '__theme_txtd' ),
                        'priority' => 40,
                    ),
                ),
			    'fields' => array(

				    // Title Section
				    'title'                => array(
					    'type'     => 'text',
					    'label'    => esc_html__( 'Section Title:', '__theme_txtd' ),
					    'default'  => esc_html__( 'My Promo Box', '__theme_txtd' ),
					    'section'  => 'default',
					    'priority' => 10,
				    ),

				    // Content Section
				    'featured_image'       => array(
					    'type'     => 'image',
					    'label'    => esc_html__( 'Featured Image:', '__theme_txtd' ),
					    'default'  => 0, // This is the attachment ID
					    'section'  => 'content',
					    'priority' => 10,
				    ),
				    'headline'             => array(
					    'type'     => 'textarea',
					    'label'    => esc_html__( 'Headline:', '__theme_txtd' ),
					    'default'  => 'What is a high converting headline worth to you?',
					    'section'  => 'content',
					    'priority' => 20,
				    ),
				    'description'          => array(
					    'type'     => 'textarea',
					    'label'    => esc_html__( 'Description:', '__theme_txtd' ),
					    'default'  => 'This is a Promo Box Widget where you can personalize your own advertisment area, with your content, images and call to actions. You can promote your product or link to another website of yours.',
					    'section'  => 'content',
					    'priority' => 30,
				    ),
				    'button_text'          => array(
					    'type'     => 'text',
					    'label'    => esc_html__( 'Button Text:', '__theme_txtd' ),
					    'default'  => esc_html__('Get started now', '__theme_txtd' ),
					    'section'  => 'content',
					    'priority' => 40,
				    ),
				    'button_url'           => array(
					    'type'     => 'text',
					    'label'    => esc_html__( 'Button Link URL:', '__theme_txtd' ),
					    'default'  => esc_html__('#', '__theme_txtd' ),
					    'section'  => 'content',
					    'priority' => 50,
				    ),


				    // Display Section
				    'box_style'            => array(
					    'type'     => 'radio_group',
					    'label'    => esc_html__( 'Box Style:', '__theme_txtd' ),
					    'options'  => array(
						    'light' => esc_html__( 'Light', '__theme_txtd' ),
						    'dark'  => esc_html__( 'Dark', '__theme_txtd' ),
					    ),
					    'default'  => 'dark',
					    'section'  => 'display',
					    'priority' => 10,
				    ),
				    'switch_content_order' => array(
					    'type'     => 'checkbox',
					    'label'    => esc_html__( 'Switch Content Order', '__theme_txtd' ),
					    'default'  => false,
					    'section'  => 'display',
					    'priority' => 20,
				    ),

				    // Others Section
			    ),
			    'posts'    => array(
				    'classes'   => array( 'c-promo' ),
				    // You can have multiple templates here (array of arrays) and we will use the first one that passes processing and is found
				    // @see Pixelgrade_Config::evaluateTemplateParts()
				    'templates' => array(
					    'component_slug'    => Pixelgrade_Blog::COMPONENT_SLUG,
					    'slug'              => 'content-widget',
					    'name'              => 'promo-box',
					    'lookup_parts_root' => true,
				    ),
			    ),
			);

			if ( ! pixelgrade_user_has_access( 'pro-features' ) ) {
				if ( empty( $config['sidebars_not_supported'] ) ) {
					$config['sidebars_not_supported'] = array();
				}

				$config['sidebars_not_supported'] = array_merge( $config['sidebars_not_supported'], array(
					'sidebar-1',
					'sidebar-2',
					'front-page-1',
					'front-page-2',
					'front-page-3',
					'front-page-4',
					'front-page-5',
					'front-page-6',
					'front-page-7',
					'archive-1',
					'footer-featured',
				) );
			}

            // Set up the widget options
            $widget_ops = array(
                'classname'                   => 'widget_promo_box',
                'description'                 => esc_html__( 'Do you promo, in style.', '__theme_txtd' ),
                'customize_selective_refresh' => true,
            );

			// Initialize the widget
			parent::__construct( 'pixelgrade-promo-box',
				apply_filters( 'pixelgrade_promo_box_widget_name', esc_html__( '&#32; Pixelgrade: Promo Box', '__theme_txtd' ) ),
				$widget_ops,
                $config );

			// Set up an alternate widget options name
			$this->alt_option_name = 'widget_promo_box';
		}

		/**
		 * Outputs the content for the current Featured Posts widget instance.
		 *
		 * @access public
		 *
		 * @param array $args Display arguments including 'before_title', 'after_title',
		 *                        'before_widget', and 'after_widget'.
		 * @param array $instance Settings for the current Featured Posts widget instance.
		 */
		public function widget( $args, $instance ) {

			// First, process the sidebars that are not supported by the current widget instance, if any.
			if ( false === $this->showInSidebar( $args, $instance ) ) {
				$this->sidebarNotSupportedMessage( $args, $instance );
				return;
			}

			// There is no point in doing anything of we don't have a template part to display with.
			// So first try and find a template part to use
			$found_template = false;
			if ( ! empty( $this->config['posts']['templates'] ) ) {
				$found_template = Pixelgrade_Config::evaluateTemplateParts( $this->config['posts']['templates'] );
			}
			if ( ! empty( $found_template ) ) {
				// Make sure that we have the defaults in place, where there entry is missing
				$instance = wp_parse_args( $instance, $this->getDefaults() );

				// Make sure that we have properly sanitized values (although they should be sanitized on save/update)
				$instance = $this->sanitizeFields( $instance );

				// Make every instance entry a variable in the current symbol table (scope in plain English)
				foreach ( $instance as $k => $v ) {
					if ( ! $this->isFieldDisabled( $k ) ) {
						// Add the variable
						$$k = $v;
					}
				}

				/**
				 * Filters the widget title.
				 *
				 * @var string $title
				 *
				 * @param string $title The widget title. Default 'Pages'.
				 * @param array $instance An array of the widget's settings.
				 * @param mixed $id_base The widget ID.
				 */
				$title = apply_filters( 'widget_title', $title, $instance, $this->id_base );

				$classes = array();
				if ( ! empty( $this->config['posts']['classes'] ) ) {
					$classes = array_merge( $classes, (array) $this->config['posts']['classes'] );
				}

				// Add our dynamic classes
				if ( isset( $box_style ) ) {
					$classes[] = 'c-promo--' . $box_style;
					// We also want to add our class to the widget top wrapper
					preg_match('/class="([^"]*)"/', $args['before_widget'], $matches);
					if ( ! empty( $matches[1] ) ) {
						$args['before_widget'] = str_replace( $matches[1], $matches[1] . ' widget_promo_box--' . $box_style, $args['before_widget'] );
					}
				}
				if ( ! empty( $switch_content_order ) ) {
					$classes[] = 'c-promo--reversed';
				}

				// Allow others (maybe other widgets that extend this) to change the classes
				$classes = apply_filters( 'pixelgrade_promo_box_widget_classes', $classes, $instance );

				// Allow others (maybe other widgets that extend this) to change the attributes
				$attributes = apply_filters( 'pixelgrade_promo_box_widget_attributes', array(), $instance );

				/*
				 * Start outputting the widget markup
				 */
				echo $args['before_widget'];

				/**
				 * Fires at the beginning of the Promo Box widget, after the title.
				 */
				do_action( 'pixelgrade_promo_box_widget_start', $instance, $args ); ?>

				<div <?php pixelgrade_css_class( $classes ); ?> <?php pixelgrade_element_attributes( $attributes ); ?>>

					<?php
					// We use include so the template part gets access to all the variables defined above
					include( $found_template ); ?>

				</div>

				<?php
				/**
				 * Fires at the end of the Promo Box widget.
				 */
				do_action( 'pixelgrade_promo_box_widget_end', $instance, $args );

				echo $args['after_widget'];
			} else {
				// Let the developers know that something is amiss
				_doing_it_wrong( __METHOD__, sprintf( 'Couldn\'t find a template part to use for displaying widget posts in the %s widget!', $this->name ), null );
			}
		}
	}

endif;
