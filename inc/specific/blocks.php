<?php
/**
 * Custom functions related to the Components Blocks system.
 *
 * Development notice: This file is synced from the variations directory! Do not edit in the `inc` directory!
 *
 * @package Felt
 * @since 1.0.0
 */

/**
 * Register new blog blocks, besides the ones provided by the blog component.
 *
 * @param string $component_slug The component's slug.
 * @param array $component_config The component entire component config.
 */

function variation_change_blog_component_config() {

	Pixelgrade_BlocksManager()->registerBlock( 'blog/single-portrait', array(
		'extend' => 'blog/default',
		'type' => 'loop', // We need this to be a loop so all who rely on "in_the_loop" have an easy life.
		'blocks' => array(
			'header' => array(
				'extend'   => 'blog/container',
				'blocks'   => array(
					'blog/entry-thumbnail',
					'blog/entry-header-single',
				),
				'wrappers' => array(
					array(
						'priority' => 100,
						'classes'  => 'single-header'
					),
				),
			),
			'layout' => array(
				'extend'   => 'blog/container',
				'blocks'   => array(
					'sidebar' => array(
						'extend'   => 'blog/side',
						'blocks'   => array( 'blog/sidebar' ),
						'wrappers' => array(
							'side' => array(
								'extend_classes' => 'widget-area--post',
							),
						),
					),
					'blog/entry-content',
					'sidebar-below-post' => array(
						'blocks' => array(
							'blog/sidebar-below-post',
							'author-box' => array(
								'type' => 'callback',
								'callback' => 'pixelgrade_the_author_info_box',
							)
						),
						'wrappers' => array(
							array(
								'classes' => 'entry-aside u-content-width'
							),
						),
					),
					'blog/entry-footer',
				),
				'wrappers' => array(
					'main' => array(
						'classes' => 'single-main clearfix'
					),
				),
			),
			'blog/related-posts',
		),
	) );

	Pixelgrade_BlocksManager()->registerBlock( 'blog/single-landscape', array(
		'extend' => 'blog/default',
		'type' => 'loop', // We need this to be a loop so all who rely on "in_the_loop" have an easy life.
		'blocks' => array(
			'header'  => array(
				'extend'   => 'blog/container',
				'blocks'   => array(
					'blog/entry-header-single',
				),
				'wrappers' => array(
					array(
						'priority' => 100,
						'classes'  => 'single-header'
					),
				),
			),
			'content' => array(
				'extend' => 'blog/container',
				'blocks' => array(
					'layout' => array(
						'extend'   => 'blog/layout',
						'blocks'   => array(
							'main' => array(
								'extend' => 'blog/main',
								'blocks' => array(
									'blog/entry-thumbnail',
									'blog/entry-content',
									'sidebar-below-post' => array(
										'blocks' => array(
											'blog/sidebar-below-post',
											'author-box' => array(
												'type' => 'callback',
												'callback' => 'pixelgrade_the_author_info_box',
											)
										),
										'wrappers' => array(
											array(
												'classes' => 'entry-aside u-content-width'
											),
										),
									),
									'blog/entry-footer',
								),
							),
							'side' => array(
								'extend' => 'blog/side',
								'blocks' => array( 'blog/sidebar' ),
								'checks' => array(
									array(
										'callback' => 'pixelgrade_is_active_sidebar',
										'args'     => array( 'sidebar-1' ),
									),
								),
								'wrappers' => array(
									'side' => array(
										'extend_classes' => 'widget-area--post',
									),
								),
							),
						),
						'wrappers' => array(
							'layout' => array(
								'extend_classes' => 'o-layout--blog'
							),
							'main' => array(
								'classes' => 'single-main clearfix',
							),
						),
					),
				),
			),
			'blog/related-posts',
		)
	) );

	Pixelgrade_BlocksManager()->registerBlock( 'blog/single', array(
		'type' => 'loop', // We need this to be a loop so all who rely on "in_the_loop" have an easy life.
		'blocks' => array(
			'image-landscape' => array(
				'extend' => 'blog/single-landscape',
				'checks' => array(
					'callback' => 'pixelgrade_has_portrait_thumbnail',
					'compare' => 'NOT'
				),
			),
			'image-portrait'  => array(
				'extend' => 'blog/single-portrait',
				'checks' => array(
					'callback' => 'pixelgrade_has_portrait_thumbnail'
				),
			),
		),
	) );

	Pixelgrade_BlocksManager()->registerBlock( 'blog/page', array(
		'extend' => 'blog/default',
		'type' => 'loop', // We need this to be a loop so all who rely on "in_the_loop" have an easy life.
		'blocks' => array(
			'content' => array(
				'extend' => 'blog/container',
				'blocks' => array(
					'layout' => array(
						'extend'   => 'blog/layout',
						'classes' => 'o-layout  o-layout--blog',
						'blocks'   => array(
							'main' => array(
								'extend' => 'blog/main',
								'blocks' => array(
									'blog/entry-header-page',
									'blog/entry-content',
									'blog/entry-footer',
								),
							),
							'side' => array(
								'extend' => 'blog/side',
								'blocks' => array( 'blog/sidebar' ),
								'checks' => array(
									array(
										'callback' => 'is_page_template',
										'args' => array(
											array(
												'page-templates/front-page.php',
												'page-templates/full-width.php',
												'page-templates/full-width-no-title.php',
											),
										),
									),
								),
								'wrappers' => array(
									'side' => array(
										'extend_classes' => 'widget-area--post',
									),
								),
							),
						),
					),
				),
			),
			'blog/related-posts',
		)
	) );

}

add_action( 'pixelgrade_blog_after_register_blocks', 'variation_change_blog_component_config', 20 );
