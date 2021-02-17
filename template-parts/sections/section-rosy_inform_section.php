<?php
$class             = '';
$gray_color_scheme = get_sub_field( 'gray_color_scheme' );
$image_position    = get_sub_field( 'image_position' );
$class             = $gray_color_scheme ? $class . ' _bg-gray ' :$class . '';
$class             = ( $image_position == 'left' ) ? $class  : $class . ' _revers ';
?>
<section class="half-wrapper <?php echo $class; ?>">
	<div class="half-inner">
		<div class="half-l jarallax<?php echo $gray_color_scheme ? '-slow' : ''; ?>">
			<?php
			$image = get_sub_field( 'image' );
			am_the_retina_img( $image, array( 'class' => 'jarallax-img' ) ); ?>
		</div>
		<div class="half-r a-up-parent">

			<?php am_the_sub_field( 'title', '<h2>', '</h2>' ); ?>
			<?php am_the_sub_field( 'content' ); ?>
		</div>
	</div>
</section>
