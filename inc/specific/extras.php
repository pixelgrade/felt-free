<?php
function output_dropcap_in_single_product_page() {
	global $product;
	echo '<div class="header-dropcap">' . esc_html( substr( $product->get_title(), 0, 1 ) ) . '</div>';
}
add_action( 'woocommerce_single_product_summary', 'output_dropcap_in_single_product_page', 6 );