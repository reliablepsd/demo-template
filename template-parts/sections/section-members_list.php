<?php $gray_color_scheme = get_sub_field( 'gray_color_scheme' ); ?>
<section class="directors-wrapper <?php echo $gray_color_scheme ?: '_white'; ?>">
	<div class="container _full">
		<?php am_the_sub_field( 'title', '<h2>', '</h2>' ); ?>
		<?php
		$featured_posts = get_sub_field( 'members' );
		if ( $featured_posts ): ?>
			<div class="directors a-up-parent">
				<?php foreach ( $featured_posts as $post ):
					// Setup this post for WP functions (variable must be named $post).
					setup_postdata( $post ); ?>
					<div class="directors-item">
						<h3><?php the_title(); ?></h3>
						<?php am_the_field( 'position', '<h4>', '</h4>', $post->ID ); ?>
						<div class="directors-more"><a href="#directors-white-<?php echo $post->ID; ?>"
						                               class="popup-show"><?php _e( 'Read bio »', 'am' ) ;?></a></div>
						<div id="directors-white-<?php echo $post->ID; ?>" class="modal mfp-hide">
							<button class="modal__close mfp-close">×</button>
							<h3><?php the_title(); ?></h3>
							<?php am_the_field( 'position', '<div class="team-position underline">', '</div>', $post->ID ); ?>
							<?php the_content(); ?>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
			<?php
			// Reset the global post object so that the rest of the page works correctly.
			wp_reset_postdata(); ?>
		<?php endif; ?>
	</div>
</section>

