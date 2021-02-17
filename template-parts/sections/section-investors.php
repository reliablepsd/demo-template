<section class="gray-wrapper _pb _dark">
	<div class="container _s">
		<?php am_the_sub_field( 'content', '<h2 class="underline-half _pb a-up">', '</h2>' ); ?>
	</div>
</section>

<section class="investors-wrapper">
	<div class="container">
		<div class="investors-inner _mtm">
			<?php am_the_sub_field( 'title', '<h4 class="_l-s a-up"><strong>', '</strong></h4>' ); ?>
			<div class="investors">

				<?php

				$rows = get_sub_field( 'investors_logo' );
				if ( $rows ) {
					echo '<ul class="investors-img">';
					foreach ( $rows as $row ) {
						$image         = $row['logo'];
						$link          = $row['link'];
						if ( is_array( $link ) && $link != [] && is_array( $image ) && $image != [] ):
							$link_url = $link['url'];
							$link_title  = $link['title'];
							$link_target = $link['target'] ? $link['target'] : '_self'; ?>
							<li><a href="<?php echo esc_url( $link_url ); ?>"
							       target="<?php echo esc_attr( $link_target ); ?>"><?php am_the_retina_icon( $image ); ?></a></li>
						<?php endif;
					}
					echo '</ul>';
				}; ?>
				<div class="investors-txt">
					<?php am_the_sub_field( 'additional_info', '<p>', '</p>' ); ?>
				</div>
			</div>
		</div>
	</div>
</section>