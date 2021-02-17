<?php

// Register Custom Post Type
function news_func() {

	$labels = array(
		'name'                  => _x( 'News', 'Post Type General Name', 'am' ),
		'singular_name'         => _x( 'News', 'Post Type Singular Name', 'am' ),
		'menu_name'             => __( 'News', 'am' ),
		'name_admin_bar'        => __( 'News', 'am' ),
		'archives'              => __( 'News Archives', 'am' ),
		'attributes'            => __( 'News Attributes', 'am' ),
		'parent_item_colon'     => __( 'Parent News:', 'am' ),
		'all_items'             => __( 'All News', 'am' ),
		'add_new_item'          => __( 'Add New News', 'am' ),
		'add_new'               => __( 'Add New', 'am' ),
		'new_item'              => __( 'New News', 'am' ),
		'edit_item'             => __( 'Edit News', 'am' ),
		'update_item'           => __( 'Update News', 'am' ),
		'view_item'             => __( 'View News', 'am' ),
		'view_items'            => __( 'View News', 'am' ),
		'search_items'          => __( 'Search News', 'am' ),
		'not_found'             => __( 'Not found', 'am' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'am' ),
		'featured_image'        => __( 'Featured Image', 'am' ),
		'set_featured_image'    => __( 'Set featured image', 'am' ),
		'remove_featured_image' => __( 'Remove featured image', 'am' ),
		'use_featured_image'    => __( 'Use as featured image', 'am' ),
		'insert_into_item'      => __( 'Insert into News', 'am' ),
		'uploaded_to_this_item' => __( 'Uploaded to this News', 'am' ),
		'items_list'            => __( 'News list', 'am' ),
		'items_list_navigation' => __( 'News list navigation', 'am' ),
		'filter_items_list'     => __( 'Filter News list', 'am' ),
	);
	$args = array(
		'label'                 => __( 'News', 'am' ),
		'description'           => __( 'News Post Type', 'am' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'menu_icon'           => 'dashicons-category',
		'capability_type'       => 'page',
	);
	register_post_type( 'news', $args );

}
add_action( 'init', 'news_func', 0 );

// Register Custom Post Type
function member_func() {

	$labels = array(
		'name'                  => _x( 'Members', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Member', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Members', 'text_domain' ),
		'name_admin_bar'        => __( 'Members', 'text_domain' ),
		'archives'              => __( 'Member Archives', 'text_domain' ),
		'attributes'            => __( 'Member Attributes', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Member:', 'text_domain' ),
		'all_items'             => __( 'All Members', 'text_domain' ),
		'add_new_item'          => __( 'Add New Member', 'text_domain' ),
		'add_new'               => __( 'Add New', 'text_domain' ),
		'new_item'              => __( 'New Member', 'text_domain' ),
		'edit_item'             => __( 'Edit Member', 'text_domain' ),
		'update_item'           => __( 'Update Member', 'text_domain' ),
		'view_item'             => __( 'View Member', 'text_domain' ),
		'view_items'            => __( 'View Members', 'text_domain' ),
		'search_items'          => __( 'Search Member', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into Member', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Member', 'text_domain' ),
		'items_list'            => __( 'Members list', 'text_domain' ),
		'items_list_navigation' => __( 'Members list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter Members list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Member', 'text_domain' ),
		'description'           => __( 'Post Type Description', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor','thumbnail' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => true,
		'publicly_queryable'    => false,
		'menu_icon'           => 'dashicons-groups',
		'capability_type'       => 'page',
	);
	register_post_type( 'member', $args );

}
add_action( 'init', 'member_func', 0 );