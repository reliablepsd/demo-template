<?php
function debug( $data, $log = 0 ) {
	if ( $log == 1 ) {
		if ( true == WP_DEBUG ) {

			if ( is_array( $data ) || is_object( $data ) ) {
				error_log( print_r( $data, true ) );
			} else {
				error_log( $data );
			}

		} else {
			ob_start();

			echo '[' . date( 'd-M-Y h:i:s T' ) . '] ';

			if ( is_array( $data ) || is_object( $data ) ) {
				print_r( $data );
			} else {
				echo( $data );
			}

			echo "\r\n";

			file_put_contents( ABSPATH . 'wp-content/debug.log', ob_get_contents(), FILE_APPEND );

			ob_end_clean();
		}
	} elseif ( $log == 0 ) {
		echo '<pre style="color:red">' . print_r( $data, 1 ) . '</pre>';

	}

}

function my_acf_format_value( $value, $post_id, $field ) {

	// Render shortcodes in all textarea values.
	return do_shortcode( $value );
}

// Apply to textarea fields.
add_filter( 'acf/format_value/type=textarea', 'my_acf_format_value', 10, 3 );


function excerpt_more_custom( $length ) {
	global $post;
//	if ($post->post_type == 'member'){
//		return ' ... ';
//	} else {
		return '';
//	}
}
add_filter('excerpt_more', 'excerpt_more_custom', 100 );
//add_filter( 'excerpt_length', function(){
//	return 20;
//} );
function excerpt_length_custom( $length ) {
	global $post;
	if ($post->post_type == 'member'){
		return 80;
	} else {
		return 20;
	}
}
add_filter( 'excerpt_length', 'excerpt_length_custom', 100 );

function add_image_and_wrap( $label, $directory_name, $screenshot_name ) {
	$image_src     = get_template_directory() . '/markup/assets/img/acf_admin_image/' . $directory_name . '/' . $screenshot_name . '.png';
	$image_src_uri = get_template_directory_uri() . '/markup/assets/img/acf_admin_image/' . $directory_name . '/' . $screenshot_name . '.png';

	if ( file_exists( $image_src ) ) {

		return '<div style="position:relative"><button  onmouseover="this.nextElementSibling.style.display=\'block\';" onmouseout="this.nextElementSibling.style.display=\'none\';">v</button> ' . $label . ' <img style="position:absolute; bottom:100%;right:110%;max-width:500px; max-height: 350px;display:none" src="'.$image_src_uri.'" alt="image"> </div>';
	}

	return $label;

}

function my_acf_update_field( $field ) {

	if ( is_array( $field ) && array_key_exists( 'layouts', $field ) ) {
		foreach ( $field['layouts'] as $key => &$layout ) {
			if ( $layout['label'] == strip_tags($layout['label']) )
			{
				$modify_layout = add_image_and_wrap( $layout['label'], $field['name'], $layout['name'] );
				if ( $modify_layout !== $layout['label'] ) {
					$layout['label'] = $modify_layout;
				}
			}
		}
	}

	return $field;
}

// Apply to all fields.
add_filter( 'acf/update_field/type=flexible_content', 'my_acf_update_field', 10, 1 );
