<?php get_header();
$post_type = 'news'; ?>

	<section class="filter-wrapper">
		<div class="container">
			<div class="filter-head">
				<ul class="filter-list">
					<!-- For filtering controls add -->
					<li ><a href="<?php echo get_post_type_archive_link( $post_type ); ?>" data-filter="all">All
							Posts</a></li>
					<?php
					$terms = get_terms( array(
						'taxonomy'   => 'news_section',
						'hide_empty' => false,
					) ); ?>
					<?php if ( is_array( $terms ) && $terms != [] ): ?>
						<?php foreach ( $terms as $term ): ?>
							<?php if ( is_object( $term ) ): ?>
								<li><a href="<?php echo substr(get_post_type_archive_link( $post_type ),0,-1) . '?filter=' . $term->slug; ?>"
								       data-filter="<?php echo $term->slug; ?>"><?php echo $term->name; ?></a></li>
							<?php endif; ?>
						<?php endforeach; ?>
					<?php endif; ?>
				</ul>
				<div class="filter-search">
					<div id="search_block">
						<a href="<?php echo substr(get_post_type_archive_link( $post_type ),0,-1) . '?search=search-open'?>"><i class="icon-search filter-btn-open-link"></i></a>
					</div><!-- /search_block -->
				</div>
			</div>
			<div class="filter-container">
				<?php if ( have_posts() ) : ?>
					<?php while ( have_posts() ) : the_post(); ?>
						<article>
							<time><?php echo get_the_date( 'M j, Y' ); ?></time>
							<h1><?php the_title(); ?></h1>
							<?php the_content(); ?>
						</article>
					<?php endwhile; ?>
				<?php endif; ?>
			</div>
		</div>
	</section>

<?php get_footer(); ?>