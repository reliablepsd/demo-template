<?php
$class           = '';
$container_class = '';
$extra_padding   = get_sub_field( 'extra_padding' );
$gray_background = get_sub_field( 'gray_background' );
$narrow_column   = get_sub_field( 'narrow_column' );
$class           = $extra_padding ? $class . ' entry _p-xl ' : $class . '';
$class           = $gray_background ? $class . ' _bg-gray-l ' :  $class .'';
$container_class =$narrow_column ? $container_class . ' _s a-up ' : ''
?>
<section class="text-wrapper <?php echo $class; ?>">
	<div class="container <?php echo $container_class; ?>">
		<?php am_the_sub_field( 'content' ) ?>
	</div>
</section>
