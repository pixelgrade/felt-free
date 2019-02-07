<?php
/**
 * Provides specific logic for the current theme variation.
 *
 * @package Felt
 * @since 2.0.0
 */

/*
 * Load all the files directly in the specific directory.
 */
pixelgrade_autoload_dir( trailingslashit( __DIR__ ) . 'specific' );

function felt_setup_pixelgrade_care() {
	/*
	 * Declare support for Pixelgrade Care
	 */
	add_theme_support( 'pixelgrade_care', array(
			'support_url'   => 'https://pixelgrade.com/docs/felt/',
			'changelog_url' => 'https://wupdates.com/felt-changelog',
		)
	);
}
add_action( 'after_setup_theme', 'felt_setup_pixelgrade_care' );
