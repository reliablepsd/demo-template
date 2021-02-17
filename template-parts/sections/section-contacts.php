<?php
?>
<section class="contact-wrapper">
	<div class="container a-up">
		<?php am_the_sub_field( 'title', '<h1>', '</h1>' ); ?>
		<?php am_the_sub_field( 'content', '<p class="underline-part">', '</p>' ); ?>
		<?php
		$rows = get_sub_field( 'emails' );
		if ( $rows ) {
			echo '<ul class="contact-mails">';
			foreach ( $rows as $row ) {
				$email = array_key_exists( 'email', $row ) ? $row['email'] : '';
				echo '<li>';
				echo '<a href="mailto:' . $email . '">' . $email . '</a>';
				echo '</li>';
			}
			echo '</ul>';
		} ?>
		<?php
		$socials = get_sub_field( 'socials' );
		if ( $socials ): ?>
			<ul class="contact-social">
				<li><a target="_blank" href="<?php echo array_key_exists( 'linkedin_url', $socials ) ? $socials['linkedin_url'] : ''; ?>"><i
							class="icon-linkedin"></i></a></li>
				<li><a target="_blank" href="<?php echo array_key_exists( 'twitter_url', $socials ) ? $socials['twitter_url'] : ''; ?>"><i
							class="icon-twitter"></i></a></li>
				<li><a target="_blank" href="<?php echo array_key_exists( 'facebook_url', $socials ) ? $socials['facebook_url'] : ''; ?>"><i
							class="icon-facebook"></i></a></li>
			</ul>
		<?php endif; ?>
	</div>
</section>
