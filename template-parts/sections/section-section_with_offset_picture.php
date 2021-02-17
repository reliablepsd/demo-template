<section class="gray-wrapper _light _o-v _img-m-t-m">
	<div class="container">
		<div class="gray-row">
			<div class="gray-img">
				<?php $image = get_sub_field( 'image' ); ?>
				<?php am_the_retina_img( $image, array( 'size' => 'size_430x430' ) ); ?>
			</div>
			<?php am_the_sub_field( 'content', '<div class="gray-txt a-up">', '</div>' ) ?>
		</div>
	</div>
</section>