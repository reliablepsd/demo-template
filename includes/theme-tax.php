<?php
// Register Custom Taxonomy
function news_section() {

	$labels = array(
		'name'                       => _x( 'News Section', 'Taxonomy General Name', 'am' ),
		'singular_name'              => _x( 'News Sections', 'Taxonomy Singular Name', 'am' ),
		'menu_name'                  => __( 'News Sections', 'am' ),
		'all_items'                  => __( 'All News Sections', 'am' ),
		'parent_item'                => __( 'Parent News Section', 'am' ),
		'parent_item_colon'          => __( 'Parent News Section:', 'am' ),
		'new_item_name'              => __( 'New News Section Name', 'am' ),
		'add_new_item'               => __( 'Add New News Section', 'am' ),
		'edit_item'                  => __( 'Edit News Section', 'am' ),
		'update_item'                => __( 'Update News Section', 'am' ),
		'view_item'                  => __( 'View News Section', 'am' ),
		'separate_items_with_commas' => __( 'Separate items with commas', 'am' ),
		'add_or_remove_items'        => __( 'Add or remove News Sections', 'am' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'am' ),
		'popular_items'              => __( 'Popular News Sections', 'am' ),
		'search_items'               => __( 'Search News Sections', 'am' ),
		'not_found'                  => __( 'Not Found', 'am' ),
		'no_terms'                   => __( 'No News Sections', 'am' ),
		'items_list'                 => __( 'News Sections list', 'am' ),
		'items_list_navigation'      => __( 'Items list navigation', 'am' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => false,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
	);
	register_taxonomy( 'news_section', array( 'news' ), $args );

}
add_action( 'init', 'news_section', 0 );