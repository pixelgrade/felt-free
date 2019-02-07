<?php
/**
 * Custom template tags for the pro version of the theme.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package Felt
 * @since 2.3.0
 */

if ( ! function_exists( 'felt_output_sticky_header' ) ) {
	/**
	 *
	 */
	function felt_output_sticky_header() {
		$header_position = pixelgrade_option( 'header_position' );
		if ( empty( $header_position ) || 'sticky' === $header_position ) {
			get_template_part( 'template-parts/site-header-sticky' );
		}
	}
}

if ( ! function_exists( 'felt_output_search_overlay_trigger' ) ) {
	/**
	 *
	 */
	function felt_output_search_overlay_trigger() { ?>
		<button class="c-btn--reset  c-btn--search  search-trigger  js-search-trigger  u-hidden">
			<?php get_template_part( 'template-parts/svg/icon-search' ); ?>
			<span class="screen-reader-text"><?php esc_html_e( 'Search', '__theme_txtd' ); ?></span>
		</button>
		<?php
	}
}

if ( ! function_exists( 'felt_output_search_overlay' ) ) {
	/**
	 *
	 */
	function felt_output_search_overlay() {
		ob_start();
		get_template_part( 'template-parts/search-overlay' );
		$search_overlay = ob_get_clean();
		echo apply_filters( 'felt_search_overlay_markup', $search_overlay );
	}
}

if ( ! function_exists( 'felt_output_menu_label' ) ) {
	/**
	 *
	 */
	function felt_output_menu_label() {
		$menu_label = '<span class="u-hidden  js-menu-mobile-label">' . esc_html__( 'Menu', '__theme_txtd' ) . '</span>';
		echo apply_filters( 'felt_menu_label_markup', $menu_label );
	}
}
