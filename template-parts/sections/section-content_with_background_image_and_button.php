<?php
$content                  = get_sub_field( 'content' );
$link                     = get_sub_field( 'button' );
$gray_button_color_schema = get_sub_field( 'gray_button_color_schema' );
$make_the_image_blurry    = get_sub_field( 'make_the_image_blurry' );
$separator                = '';
$show_separator           = get_sub_field( 'show_separator' );
if ( $show_separator ) {
	$separator_position = get_sub_field( 'separator_position' );
	$separator          = ( $separator_position == 'top' ) ? 'underline-half _top pt20 ' : 'underline-half _h2-lg  a-up';
}
$class = '';
if ( $content != '' && $link != [] ) {
	$class .= ' ';
} else {
	$class .= ' _alone ';
}
$class = !$make_the_image_blurry ? $class . '  _bg-none ' :  $class . '';
$class = $gray_button_color_schema ? $class . '   _height-xl ' :  $class . '';
?>
<?php ?>
<section class="more-wrapper jarallax <?php echo $class; ?>">
	<?php
	$image = get_sub_field( 'background_image' );
	am_the_retina_img( $image, array( 'class' => 'jarallax-img' ) ); ?>
	<div class="container a-up  <?php echo $separator ?> ">

			<?php echo $content; ?>

		<?php
		if ( $link ):
			$link_url = $link['url'];
			$link_title = $link['title'];
			$link_target = $link['target'] ? $link['target'] : '_self';
			?>
			<p><a class="btn btn-outline  <?php echo $gray_button_color_schema ? '_o-gray' : ''; ?>"
			      href="<?php echo esc_url( $link_url ); ?>"
			      target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a></p>
		<?php endif; ?>
	</div>
</section>