<?php ?>
<section class="team-wrapper">
	<div class="container">
		<?php
		$featured_posts = get_sub_field( 'members' );
		if ( $featured_posts ): ?>
			<div class="team-inner _mtm">
				<?php
				$count = 0;
				foreach ( $featured_posts as $post ):
					// Setup this post for WP functions (variable must be named $post).
					setup_postdata( $post );
					$img_position = ( $count % 2 == 0 ) ? ' a-left' : ' a-rigth'; ?>
					<div class="team-item">
						<div
							class="team-img <?php echo $img_position; ?>"><?php am_the_post_img( array( 'size' => 'members_300x356' ), $post->ID ); ?></div>
						<div class="team-txt">
							<h2><?php the_title(); ?></h2>
							<?php am_the_field( 'position', '<h3>', '</h3>', $post->ID ); ?>
							<?php the_excerpt(); ?>
							<div class="team-more"><a href="#team<?php echo $post->ID; ?>"
							                          class="popup-show"><?php _e( 'More »', 'am' ) ?></a></div>
							<div id="team<?php echo $post->ID; ?>" class="modal mfp-hide">
								<button class="modal__close mfp-close">×</button>
								<h3><?php the_title(); ?></h3>
								<?php am_the_field( 'position', '<div class="team-position underline">', '</div>', $post->ID ); ?>
								<?php the_content(); ?>
							</div>
						</div>
					</div>
					<?php
					$count ++;
				endforeach; ?>
			</div>
			<?php
			// Reset the global post object so that the rest of the page works correctly.
			wp_reset_postdata(); ?>
		<?php endif; ?>
	</div>
</section>
