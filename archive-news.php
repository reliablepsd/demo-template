<?php get_header(); ?>

	<section class="filter-wrapper">
		<div class="container">
			<div class="filter-head">
				<ul class="filter-list">
					<!-- For filtering controls add -->
					<li class="_active"><a href="#" data-filter="all">All Posts</a></li>
					<?php
					$terms = get_terms( array(
						'taxonomy'   => 'news_section',
						'hide_empty' => false,
					) ); ?>
					<?php if ( is_array( $terms ) && $terms != [] ): ?>
						<?php foreach ( $terms as $term ): ?>
							<?php if ( is_object( $term ) ): ?>
								<li><a href="#" data-filter="<?php echo $term->slug; ?>"><?php echo $term->name; ?></a></li>
							<?php endif; ?>
						<?php endforeach; ?>
					<?php endif; ?>

				</ul>
				<div class="filter-search">
					<!-- filtering is implemented using js -->
					<i class="icon-search filter-btn-open"></i>
					<input class="filter-search-input" type="text" name="filter-search" placeholder="Search" data-search>
					<i class="icon-close filter-btn-close"></i>
				</div>
			</div>
			<div class="filter-container">
				<?php if ( have_posts() ) : ?>

					<?php while ( have_posts() ) : the_post(); ?>

						<?php get_template_part( 'template-parts/content', 'news' ); ?>

					<?php endwhile; ?>

				<?php else : ?>

					<?php get_template_part( 'template-parts/content', 'none' ); ?>

				<?php endif; ?>
			</div>
		</div>
	</section>

<?php get_footer(); ?>