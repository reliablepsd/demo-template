<?php

add_shortcode( 'underline_color', 'underline_color_func' );

function underline_color_func( $atts, $content  ) {
	$atts    = shortcode_atts( array(
		'text'    => '',
		'padding' => ''
	), $atts );
	$padding = ( $atts['padding'] == 'bottom' ) ? '_pb' : '';

	return '<span class="underline ' . $padding . '">' . $content . '</span>';
}

add_shortcode( 'orange_button', 'orange_button_func' );

function orange_button_func( $atts, $content ) {
	$content = str_replace( '<a ', '<a class="btn btn-outline"', $content );

	return '<p>' . $content . '</p>';
}