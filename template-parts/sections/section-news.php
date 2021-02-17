<section class="news-block-wrapper">
	<div class="container">
		<?php am_the_sub_field( 'title', '<h2 class="tittle-line a-down"><span>', '</span></h2>' ); ?>
		<?php
		$featured_posts = get_sub_field( 'news' );
		if ( $featured_posts ): ?>
			<div class="news-block">
				<?php foreach ( $featured_posts as $post ):

					// Setup this post for WP functions (variable must be named $post).
					setup_postdata( $post ); ?>
					<div class="news-block-item">
						<h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
						<?php the_excerpt(); ?>
					</div>
				<?php endforeach; ?>
			</div>
			<?php
			// Reset the global post object so that the rest of the page works correctly.
			wp_reset_postdata(); ?>
		<?php endif; ?>
	</div>
</section>