<?php

global $am_option;

load_theme_textdomain( $am_option['textdomain'], get_template_directory() . '/languages' );

add_filter('body_class','am_browser_body_class');
add_action('widgets_init', 'am_unregister_default_wp_widgets', 1);
add_filter('the_content', 'am_texturize_shortcode_before' );

//acf plugin
if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
        'position' => 59
	));

	// acf_add_options_sub_page(array(
		// 'page_title' 	=> 'Theme Socials Settings',
		// 'menu_title'	=> 'Socials',
		// 'parent_slug'	=> 'theme-general-settings',
	// ));

}

// This theme uses wp_nav_menu() in one location.
register_nav_menus( array(
	'mainmenu' => __( 'Main Navigation', 'am' ),
	'footermenu' => __( 'Footer Navigation', 'am' ),
) );

//remove_filter( 'the_content', 'wpautop' );
//add_filter( 'the_content', 'wpautop' , 99);
//add_filter( 'the_content', 'shortcode_unautop',100 );

add_image_size('members_300x356', 300, 356, true);
add_image_size('size_430x430', 430, 430, true);
//show_admin_bar(false);
//define( 'WPCF7_AUTOP', false );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function am_content_width() {
    $GLOBALS['content_width'] = apply_filters('wfc_content_width', 960);
}
add_action('after_setup_theme', 'am_content_width', 0);


/**
 * Register widgetized areas
 */
function am_the_widgets_init() {

    if ( !function_exists('register_sidebars') )
        return;

    $before_widget = '<div id="%1$s" class="widget %2$s"><div class="widget_inner">';
    $after_widget = '</div></div>';
    $before_title = '<h3 class="widgettitle">';
    $after_title = '</h3>';

    register_sidebar(array('name' => __('Default Sidebar','am'),'id' => 'sidebar-default','before_widget' => $before_widget,'after_widget' => $after_widget,'before_title' => $before_title,'after_title' => $after_title));
    register_sidebar(array('name' => __('Page Default Sidebar','am'),'id' => 'sidebar-page-default','before_widget' => $before_widget,'after_widget' => $after_widget,'before_title' => $before_title,'after_title' => $after_title));
}
add_action('widgets_init', 'am_the_widgets_init' );


/**
 * Default Menu Walker which can be customized.
 */
class AM_Default_Walker_Nav_Menu extends Walker_Nav_Menu {

	public function start_lvl( &$output, $depth = 0, $args = null ) {
		if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
			$t = '';
			$n = '';
		} else {
			$t = "\t";
			$n = "\n";
		}
		$indent = str_repeat( $t, $depth );

		// Default class.
		$classes = array( 'sub-menu' );

		/**
		 * Filters the CSS class(es) applied to a menu list element.
		 *
		 * @since 4.8.0
		 *
		 * @param string[] $classes Array of the CSS classes that are applied to the menu `<ul>` element.
		 * @param stdClass $args    An object of `wp_nav_menu()` arguments.
		 * @param int      $depth   Depth of menu item. Used for padding.
		 */
		$class_names = join( ' ', apply_filters( 'nav_menu_submenu_css_class', $classes, $args, $depth ) );
		$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

		$output .= "{$n}{$indent}<ul$class_names>{$n}";
	}

	public function end_lvl( &$output, $depth = 0, $args = null ) {
		if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
			$t = '';
			$n = '';
		} else {
			$t = "\t";
			$n = "\n";
		}
		$indent  = str_repeat( $t, $depth );
		$output .= "$indent</ul>{$n}";
	}

	public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
		if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
			$t = '';
			$n = '';
		} else {
			$t = "\t";
			$n = "\n";
		}
		$indent = ( $depth ) ? str_repeat( $t, $depth ) : '';

		$classes   = empty( $item->classes ) ? array() : (array) $item->classes;
		$classes[] = 'menu-item-' . $item->ID;

		/**
		 * Filters the arguments for a single nav menu item.
		 *
		 * @since 4.4.0
		 *
		 * @param stdClass $args  An object of wp_nav_menu() arguments.
		 * @param WP_Post  $item  Menu item data object.
		 * @param int      $depth Depth of menu item. Used for padding.
		 */
		$args = apply_filters( 'nav_menu_item_args', $args, $item, $depth );

		/**
		 * Filters the CSS classes applied to a menu item's list item element.
		 *
		 * @since 3.0.0
		 * @since 4.1.0 The `$depth` parameter was added.
		 *
		 * @param string[] $classes Array of the CSS classes that are applied to the menu item's `<li>` element.
		 * @param WP_Post  $item    The current menu item.
		 * @param stdClass $args    An object of wp_nav_menu() arguments.
		 * @param int      $depth   Depth of menu item. Used for padding.
		 */
		$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args, $depth ) );
		$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

		/**
		 * Filters the ID applied to a menu item's list item element.
		 *
		 * @since 3.0.1
		 * @since 4.1.0 The `$depth` parameter was added.
		 *
		 * @param string   $menu_id The ID that is applied to the menu item's `<li>` element.
		 * @param WP_Post  $item    The current menu item.
		 * @param stdClass $args    An object of wp_nav_menu() arguments.
		 * @param int      $depth   Depth of menu item. Used for padding.
		 */
		$id = apply_filters( 'nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args, $depth );
		$id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

		$output .= $indent . '<li' . $id . $class_names . '>';

		$atts           = array();
		$atts['title']  = ! empty( $item->attr_title ) ? $item->attr_title : '';
		$atts['target'] = ! empty( $item->target ) ? $item->target : '';
		if ( '_blank' === $item->target && empty( $item->xfn ) ) {
			$atts['rel'] = 'noopener noreferrer';
		} else {
			$atts['rel'] = $item->xfn;
		}
		$atts['href']         = ! empty( $item->url ) ? $item->url : '';
		$atts['aria-current'] = $item->current ? 'page' : '';

		/**
		 * Filters the HTML attributes applied to a menu item's anchor element.
		 *
		 * @since 3.6.0
		 * @since 4.1.0 The `$depth` parameter was added.
		 *
		 * @param array $atts {
		 *     The HTML attributes applied to the menu item's `<a>` element, empty strings are ignored.
		 *
		 *     @type string $title        Title attribute.
		 *     @type string $target       Target attribute.
		 *     @type string $rel          The rel attribute.
		 *     @type string $href         The href attribute.
		 *     @type string $aria_current The aria-current attribute.
		 * }
		 * @param WP_Post  $item  The current menu item.
		 * @param stdClass $args  An object of wp_nav_menu() arguments.
		 * @param int      $depth Depth of menu item. Used for padding.
		 */
		$atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args, $depth );

		$attributes = '';
		foreach ( $atts as $attr => $value ) {
			if ( is_scalar( $value ) && '' !== $value && false !== $value ) {
				$value       = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
				$attributes .= ' ' . $attr . '="' . $value . '"';
			}
		}

		/** This filter is documented in wp-includes/post-template.php */
		$title = apply_filters( 'the_title', $item->title, $item->ID );

		/**
		 * Filters a menu item's title.
		 *
		 * @since 4.4.0
		 *
		 * @param string   $title The menu item's title.
		 * @param WP_Post  $item  The current menu item.
		 * @param stdClass $args  An object of wp_nav_menu() arguments.
		 * @param int      $depth Depth of menu item. Used for padding.
		 */
		$title = apply_filters( 'nav_menu_item_title', $title, $item, $args, $depth );

		$item_output  = $args->before;
		$item_output .= '<a' . $attributes . '>';
		$item_output .= $args->link_before . $title . $args->link_after;
		$item_output .= '</a>';
		$item_output .= $args->after;

		/**
		 * Filters a menu item's starting output.
		 *
		 * The menu item's starting output only includes `$args->before`, the opening `<a>`,
		 * the menu item's title, the closing `</a>`, and `$args->after`. Currently, there is
		 * no filter for modifying the opening and closing `<li>` for a menu item.
		 *
		 * @since 3.0.0
		 *
		 * @param string   $item_output The menu item's starting HTML output.
		 * @param WP_Post  $item        Menu item data object.
		 * @param int      $depth       Depth of menu item. Used for padding.
		 * @param stdClass $args        An object of wp_nav_menu() arguments.
		 */
		$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
	}

	public function end_el( &$output, $item, $depth = 0, $args = null ) {
		if ( isset( $args->item_spacing ) && 'discard' === $args->item_spacing ) {
			$t = '';
			$n = '';
		} else {
			$t = "\t";
			$n = "\n";
		}
		$output .= "</li>{$n}";
	}

}

/**
 * Add CSS styles and JS scripts
 */
function am_add_css_and_js( ) {

    global $am_option;

	// iclude comment js if needed
	if (is_singular() && get_option('thread_comments')){
        wp_enqueue_script('comment-reply');
	}

	// iclude jQuery
	wp_deregister_script('jquery');
    wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', array(), null, true);

	// internal js
	$am_js_files = array(
		 'markup/assets/js/jquery.main.js',
		 'markup/assets/js/general.js',
	); // example: array('script1', 'script2');

	// external js
	$am_js_external_files = array(); // example: array('https://maps.googleapis.com/maps/api/js');

	// internal CSS
	$am_css_files = array(
		 'markup/assets/css/root.css',
		 'markup/assets/css/style.css',
		 'markup/assets/css/style-wp.css',
	); // example: array('style1', 'style2');

	// external CSS
	$am_css_external_links = array(
		'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'
	); // example: array('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

	// include JS
    if( !is_admin() ) {

		if ($key = get_field('google_map_api', 'option')) :
			wp_enqueue_script('am_google_maps', 'https://maps.googleapis.com/maps/api/js?key='.$key, array( 'jquery' ), '1.0.0',true );
		endif;

        if ($am_js_external_files) {
			foreach($am_js_external_files as $link_key => $am_js_external_file){
				wp_enqueue_script('am_external_js_'.sanitize_title($link_key), $am_js_external_file, array( 'jquery' ), '1.0.0', true);
			}
		}

        if ($am_js_files) {
			foreach($am_js_files as $am_js_file){
				wp_enqueue_script('am_'.sanitize_title($am_js_file), get_theme_file_uri($am_js_file), array( 'jquery' ), filemtime( get_theme_file_path($am_js_file)), true );
			}
		}
    }

    if ($am_css_external_links){
		foreach($am_css_external_links as $link_key => $am_css_external_link){
			wp_enqueue_style('am_external_css_'.sanitize_title($link_key), $am_css_external_link, array(), null);
		}
	}

    if ($am_css_files){
		foreach($am_css_files as $am_css_file){
			wp_enqueue_style('am_'.sanitize_title($am_css_file), get_theme_file_uri($am_css_file), array(), filemtime( get_theme_file_path($am_css_file)));
		}
	}
}

add_action('wp_enqueue_scripts', 'am_add_css_and_js');
am_show_acf(true);