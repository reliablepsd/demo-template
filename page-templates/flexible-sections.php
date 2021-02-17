<?php
/*
Template Name: Flexible Sections
Template Post Type: page
*/

get_header();
$show_page_title_section = get_field( 'show_page_title_section' ); ?>
<?php if ( $show_page_title_section ):
	$title = ( get_field( 'custom_title' ) != '' ) ? get_field( 'custom_title' ) : get_the_title();
	$class = get_field( 'high_bottom_margin' )  ?' _pb2 _pt ' : '';

?>
	<section class="gray-wrapper  <?php echo $class;?>  _height-auto _t-a-l _dark">
		<div class="container">
			<h1 class="a-up"><span class="underline _pb"><?php echo $title; ?></span></h1>
		</div>
	</section>
<?php endif; ?>
<?php if ( have_posts() ) :
	while ( have_posts() ) : the_post();
		if ( have_rows( 'sections' ) ) :
			while ( have_rows( 'sections' ) ) : the_row();
				get_template_part( 'template-parts/sections/section', get_row_layout() );
			endwhile;
		endif;
	endwhile;
endif;
get_footer(); ?>