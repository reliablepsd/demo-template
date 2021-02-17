<?php $background_video = get_sub_field( 'background_video' ); ?>
<?php if ( is_array( $background_video ) && $background_video != [] ): ?>
	<section class="hero-wrapper jarallax _home"
	         data-jarallax-video="mp4:<?php am_the_array( 'url', null, null, $background_video ); ?>">
		<div class="hero-mob-video">
			<video autoplay="autoplay" loop="loop" muted="muted" playsinline>
				<?php am_the_array( 'url', '<source src="', '" type="video/mp4">', $background_video ); ?>
			</video>
		</div>
		<div class="container">
			<?php am_the_sub_field( 'title', '<h1 class="a-up">', '</h1>' ); ?>
		</div>
	</section>
<?php endif; ?>
