</main>
</div>
<footer id="footer" class="footer">
	<div class="footer-top">
		<div class="container">
			<div class="footer-logo">
				<?php $footer_logo = get_field('footer_logo','options');?>
				<a id="logo"
				   href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php am_the_retina_icon($footer_logo, array('width'=>182));?></a>
			</div>
			<div class="footer-col">
				<div class="footer-row _text">
					<p>
					<?php am_the_field('full_name',null,null,'options');?>
						<br>
					<?php am_the_field('address',null,null,'options');?>
					</p>
					<p>
						<a href="mailto:<?php  am_the_field('email',null,null,'options','email2');?>"><?php am_the_field('email',null,null,'options');?></a>
					</p>
					<ul class="footer-social">
						<?php am_the_field('social_twitter_url' , '<li><a href="' , '" target="_blank"><i class="icon-twitter"></i></a></li>' , 'options');?>
						<?php am_the_field('social_facebook_url' , '<li><a href="' , '" target="_blank"><i class="icon-facebook"></i></a></li>' , 'options');?>
						<?php am_the_field('social_linkedin_url' , '<li><a href="' , '" target="_blank"><i class="icon-linkedin"></i></a></li>' , 'options');?>
					</ul>
				</div>
				<div class="footer-row _form">
					<h6><strong><?php _e( 'Sign up for News updates', 'am' ) ?></strong></h6>
					<?php echo do_shortcode('[forminator_form id="319"]');?>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="container">
			<div class="footer-copy">&copy; <?php echo date( 'Y' ); ?> <?php am_the_field('full_name',null,null,'options'); ?> <?php _e( 'All Rights Reserved.', 'am' ) ?>
			</div>
			<?php if ( has_nav_menu( 'footermenu' ) ) : ?>
				<div class="footermenu">
					<?php wp_nav_menu( array(
						'theme_location' => 'footermenu',
						'menu_class'     => 'footer-policy',
						'menu_id'        => 'footer-policy',
						'container'      => '',
						'depth'          => 1
					) ); ?>
				</div>
			<?php endif; ?>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>