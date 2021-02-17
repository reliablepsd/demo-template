<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport"
	      content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
	<meta name="format-detection" content="telephone=no">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php /*<link rel="shortcut icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicon.png">*/ ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<!-- Back to top button -->
<?php
if ( get_field( 'show_to_top_button' ) ): ?>
	<a id="button-to-top"></a>
<?php endif; ?>
<div class="wrapper">
	<header id="header" class="header">
		<div class="header-menu-wrapper">
			<div class="container">
				<div class="header-logo">
					<?php if ( $header_logo = get_field( 'header_logo', 'options' ) ) : ?>
						<a id="logo"
						   href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php am_the_retina_icon( $header_logo, array( 'width' => 200 ) ); ?></a>
					<?php endif; ?>
				</div>
				<div class="nav-drop">
					<nav class="nav">
						<?php if ( has_nav_menu( 'mainmenu' ) ) : ?>
							<div id="mainmenu">
								<?php wp_nav_menu( array(
									'theme_location' => 'mainmenu',
									'menu_class'     => 'header-menu',
									'menu_id'        => 'header-menu',
									'container'      => '',
									'depth'          => 0
								) ); ?>
							</div><!-- /mainmenu -->
						<?php endif; ?>
					</nav>
				</div>
				<a href="!#" class="nav-opener"><span></span></a>
			</div>
		</div>
	</header>
	<main id="main" class="main">
