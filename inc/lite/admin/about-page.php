<?php
/**
 * Felt Lite Theme About Page logic.
 *
 * @package Felt Lite
 */

function felt_lite_admin_setup() {
	/**
	 * Load the About page class
	 */
	// phpcs:ignore
	require_once 'ti-about-page/class-ti-about-page.php';

	/*
	* About page instance
	*/
	$config = array(
		// Menu name under Appearance.
		'menu_name'               => esc_html__( 'About Felt Lite', '__theme_txtd' ),
		// Page title.
		'page_name'               => esc_html__( 'About Felt Lite', '__theme_txtd' ),
		/* translators: Main welcome title */
		'welcome_title'         => sprintf( esc_html__( 'Welcome to %s! - Version ', '__theme_txtd' ), 'Felt Lite' ),
		// Main welcome content
		'welcome_content'       => esc_html__( ' Felt is a free magazine‐style WordPress theme for publishers who want to showcase their fresh ideas. Thanks to the modular layout you can highlight what’s truly important for your tribe to enhance stronger bonds and become memorable. No matter if you are a blogger, journalist, designer or small entrepreneur, this theme will fit perfectly everytime.', '__theme_txtd' ),
		/**
		 * Tabs array.
		 *
		 * The key needs to be ONLY consisted from letters and underscores. If we want to define outside the class a function to render the tab,
		 * the will be the name of the function which will be used to render the tab content.
		 */
		'tabs'                    => array(
			'getting_started'  => esc_html__( 'Getting Started', '__theme_txtd' ),
			'recommended_actions' => esc_html__( 'Recommended Actions', '__theme_txtd' ),
			'recommended_plugins' => esc_html__( 'Useful Plugins','__theme_txtd' ),
			'support'       => esc_html__( 'Support', '__theme_txtd' ),
			'changelog'        => esc_html__( 'Changelog', '__theme_txtd' ),
			'free_pro'         => esc_html__( 'Free VS PRO', '__theme_txtd' ),
		),
		// Support content tab.
		'support_content'      => array(
			'first' => array (
				'title' => esc_html__( 'Contact Support','__theme_txtd' ),
				'icon' => 'dashicons dashicons-sos',
				'text' => wp_kses( __( 'We want to make sure you have the best experience using Felt Lite. If you <strong>do not have a paid upgrade</strong>, please post your question in our community forums.', '__theme_txtd' ), wp_kses_allowed_html() ),
				'button_label' => esc_html__( 'Contact Support','__theme_txtd' ),
				'button_link' => esc_url( 'https://wordpress.org/support/theme/felt-lite' ),
				'is_button' => true,
				'is_new_tab' => true
			),
			'second' => array(
				'title' => esc_html__( 'Documentation','__theme_txtd' ),
				'icon' => 'dashicons dashicons-book-alt',
				'text' => esc_html__( 'Need more details? Please check our full documentation for detailed information on how to use Felt Lite.','__theme_txtd' ),
				'button_label' => esc_html__( 'Read The Documentation','__theme_txtd' ),
				'button_link' => 'https://pixelgrade.com/felt-lite-documentation/',
				'is_button' => false,
				'is_new_tab' => true
			)
		),
		// Getting started tab
		'getting_started' => array(
			'first' => array(
				'title' => esc_html__( 'Go to Customizer','__theme_txtd' ),
				'text' => esc_html__( 'Using the WordPress Customizer you can easily customize every aspect of the theme.','__theme_txtd' ),
				'button_label' => esc_html__( 'Go to Customizer','__theme_txtd' ),
				'button_link' => esc_url( admin_url( 'customize.php' ) ),
				'is_button' => true,
				'recommended_actions' => false,
				'is_new_tab' => true
			),
			'second' => array (
				'title' => esc_html__( 'Recommended actions','__theme_txtd' ),
				'text' => esc_html__( 'We have compiled a list of steps for you, to take make sure the experience you will have using one of our products is very easy to follow.','__theme_txtd' ),
				'button_label' => esc_html__( 'Recommended actions','__theme_txtd' ),
				'button_link' => esc_url( admin_url( 'themes.php?page=felt-lite-welcome&tab=recommended_actions' ) ),
				'button_ok_label' => esc_html__( 'You are good to go!','__theme_txtd' ),
				'is_button' => false,
				'recommended_actions' => true,
				'is_new_tab' => false
			),
			'third' => array(
				'title' => esc_html__( 'Read the documentation','__theme_txtd' ),
				'text' => esc_html__( 'Need more details? Please check our full documentation for detailed information on how to use Felt Lite.','__theme_txtd' ),
				'button_label' => esc_html__( 'Documentation','__theme_txtd' ),
				'button_link' => 'https://pixelgrade.com/felt-lite-documentation/',
				'is_button' => false,
				'recommended_actions' => false,
				'is_new_tab' => true
			)
		),
		// Free vs pro array.
		'free_pro'                => array(
			'free_theme_name'     => 'Felt Lite',
			'pro_theme_name'      => 'Felt PRO',
			'pro_theme_link'      => 'https://pixelgrade.com/themes/felt-pro/?utm_source=felt-lite-clients&utm_medium=about-page&utm_campaign=felt-lite',
			/* translators: View link */
			'get_pro_theme_label' => sprintf( esc_html__( 'Get %s', '__theme_txtd' ), 'Felt Pro' ),
			'features'            => array(
				array(
					'title'       => esc_html__( 'Daring Design for Devoted Readers', '__theme_txtd' ),
					'description' => esc_html__( 'Felt\'s design helps you stand out from the crowd and create an experience that your readers will love and talk about. With a flexible home page you have the chance to easily showcase appealing content with ease.', '__theme_txtd' ),
					'is_in_lite'  => 'true',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => esc_html__( 'Mobile-Ready For All Devices', '__theme_txtd' ),
					'description' => esc_html__( 'Felt makes room for your readers to enjoy your articles on the go, no matter the device they are using. We shaped everything to look amazing to your audience.', '__theme_txtd' ),
					'is_in_lite'  => 'true',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => esc_html__( 'Widgetized Sidebars To Keep Attention', '__theme_txtd' ),
					'description' => esc_html__( 'The widget-based flexible system allows you to add your favorite widgets all over the Front Page and on the right side of your articles.', '__theme_txtd' ),
					'is_in_lite'  => 'true',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => esc_html__( 'New Widgets for Extra Flexiblity', '__theme_txtd' ),
					'description' => esc_html__( 'Felt PRO gives you extra ways to showcase your articles in great style. Besides the Slideshow, Featured and Grid Posts widgets, the PRO version comes with much more: Carousel, List Posts, Categories Images, and many others.', '__theme_txtd' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => esc_html__( 'Advanced Widgets Options', '__theme_txtd' ),
					'description' => esc_html__( 'Felt\'s PRO version comes with more widget options to display and filter posts. For instance, you can have far more control on setting the source of the posts (filtering by category, tags, etc.) or how they are displayed, everything to push the content to the right people and promote it by the blink of an eye.', '__theme_txtd' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => esc_html__( 'Flexible Home Page Design', '__theme_txtd' ),
					'description' => esc_html__( 'Felt\'s PRO version has more Widget Areas available to enable you to place widgets on the Front Page Center, Footer or Below the Post at the end of your articles.', '__theme_txtd' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => esc_html__( 'Reliable Support for All Kind of Ads', '__theme_txtd' ),
					'description' => esc_html__( 'Make money out of your website in various ways with the Promo Box widget. Use it to deliver quality ads to your audience, promote a special offer or anything else that helps you achieve your goals.', '__theme_txtd' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => esc_html__( 'Sticky Menu and Reading Progress Bar', '__theme_txtd' ),
					'description' => esc_html__( 'Keep the menu at the top of your page while you scroll, making it more accessible on whatever page you are navigating. On article pages, we\'re pushing this concept even further and improve it with a Progress Bar, and at the end, it will switch to a link to the next article so you can keep momentum and maintain the attention of your readers.', '__theme_txtd' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => esc_html__( 'Flexible Color Scheme with Style Manager', '__theme_txtd' ),
					'description' => esc_html__( 'Showcase your unique style in an easy and smart way by using an intuitive inter­face that allows you to change color palettes and fonts with a few clicks until they fully represent you and match your particular needs.','__theme_txtd' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => esc_html__( 'Advanced Typography Settings', '__theme_txtd' ),
					'description' => esc_html__( 'Adjust your fonts by taking advantage of a play­ground with 600+ fonts variety you can wisely choose from at any moment.','__theme_txtd' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => esc_html__( 'Premium Support and Assistance', '__theme_txtd' ),
					'description' => esc_html__( 'We offer ongoing customer support to help you get things done fast. This way, you save energy and time and focus on what brings you happiness. We know our products inside-out and we can lend a hand to help you save resources of all kinds.','__theme_txtd' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => esc_html__( 'Friendly Self-Service', '__theme_txtd' ),
					'description' => esc_html__( 'We give you full access to an in-depth documentation to get the job done as quickly as possible. We don\'t stay in your way by offering you full access to our self-help tool directly from your Dashboard.', '__theme_txtd' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => esc_html__( 'No Credit Footer Link', '__theme_txtd' ),
					'description' => esc_html__( 'You can easily remove the "Theme: Felt Lite by Pixelgrade" copyright from the footer area and make the theme yours from start to finish.', '__theme_txtd' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				)
			),
		),
		// Plugins array.
		'recommended_plugins'        => array(
			'already_activated_message' => esc_html__( 'Already activated', '__theme_txtd' ),
			'version_label' => esc_html__( 'Version: ', '__theme_txtd' ),
			'install_label' => esc_html__( 'Install and Activate', '__theme_txtd' ),
			'activate_label' => esc_html__( 'Activate', '__theme_txtd' ),
			'deactivate_label' => esc_html__( 'Deactivate', '__theme_txtd' ),
			'content'                   => array(
				array(
					'slug' => 'jetpack'
				),
				array(
					'slug' => 'wordpress-seo'
				)
			),
		),
		// Required actions array.
		'recommended_actions'        => array(
			'install_label' => esc_html__( 'Install and Activate', '__theme_txtd' ),
			'activate_label' => esc_html__( 'Activate', '__theme_txtd' ),
			'deactivate_label' => esc_html__( 'Deactivate', '__theme_txtd' ),
			'content'            => array(
				'jetpack' => array(
					'title'       => 'Jetpack',
					'description' => wp_kses( __( 'It is highly recommended that you install Jetpack so you can enable the <b>Portfolio</b> content type for adding and managing your projects. Plus, Jetpack provides a whole host of other useful things for you site.', '__theme_txtd' ), wp_kses_allowed_html() ),
					'check'       => defined( 'JETPACK__VERSION' ),
					'plugin_slug' => 'jetpack',
					'id' => 'jetpack'
				),
			),
		),
	);
	Felt_Lite_About_Page::init( $config );
}
add_action( 'after_setup_theme', 'felt_lite_admin_setup' );
