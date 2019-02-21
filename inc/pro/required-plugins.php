<?php
/**
 * Guides required or recommended plugins
 *
 * @package Felt
 * @since 1.0.0
 */

function felt_pro_register_required_plugins() {

	/**
	 * Array of plugin arrays. Required keys are name and slug.
	 * If the source is NOT from the .org repo, then source is also required.
	 */

	$protocol = 'http:';
	if ( is_ssl() ) {
		$protocol = 'https:';
	}

	$plugins = array(
		array(
			'name'               => 'Pixelgrade Care',
			'slug'               => 'pixelgrade-care',
			'force_activation'   => true,
			'force_deactivation' => false,
			'required'           => true,
			'source'             => $protocol . '//wupdates.com/api_wupl_version/JxbVe/2v5t1czd3vw4kmb5xqmyxj1kkwmnt9q0463lhj393r5yxtshdyg05jssgd4jglnfx7A2vdxtfdcf78r9r1sm217k4ht3r2g7pkdng5f6tgwyrk23wryA0pjxvs7gwhhb',
			'external_url'       => $protocol . '//github.com/pixelgrade/pixelgrade_care',
			'version'            => '1.4.9.2',
			'is_automatic'       => true,
		),
		array(
			'name'               => 'Customify',
			'slug'               => 'customify',
			'required'           => true,
		),
		array(
			'name'               => 'Gridable',
			'slug'               => 'gridable',
			'required'           => false,
		),
		array(
			'name'               => 'Jetpack',
			'slug'               => 'jetpack',
			'required'           => false,
		),
		array(
			'name'               => 'Widget CSS Classes',
			'slug'               => 'widget-css-classes',
			'required'           => false,
		),
		array(
			'name'               => 'MailChimp for WordPress',
			'slug'               => 'mailchimp-for-wp',
			'required'           => false,
		),
		array(
			'name'               => 'Holler Box',
			'slug'               => 'holler-box',
			'required'           => false,
		),
	);

	tgmpa( $plugins );

}
add_action( 'tgmpa_register', 'felt_pro_register_required_plugins', 999 );
