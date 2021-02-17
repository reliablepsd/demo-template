<?php
$news_sections = wp_get_post_terms( get_the_ID(), 'news_section', 'all' );
$data_category = '';; ?>
<?php if ( is_array( $news_sections ) && $news_sections != [] && array_key_exists( 0, $news_sections ) ): ?>

	<?php if ( is_object( $news_sections[0] ) ) {
		$data_category = $news_sections[0]->slug;
	} ?>
<?php endif; ?>
<article class="filtr-item" data-category="<?php echo $data_category; ?>">
	<time><?php echo get_the_date( 'M j, Y' ); ?></time>
	<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
	<?php the_excerpt(); ?>
</article>