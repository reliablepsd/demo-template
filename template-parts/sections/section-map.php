<?php
$location = get_sub_field('map');
if( $location ): ?>
	<section class="map-wrapper">
		<div id="google-map-block" data-lat="<?php echo esc_attr($location['lat']); ?>" data-lng="<?php echo esc_attr($location['lng']); ?>"></div>
	</section>
<?php endif; ?>

