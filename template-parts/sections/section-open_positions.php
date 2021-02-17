<section class="gray-wrapper _height-auto _t-a-l">
	<div class="container a-up">
		<?php am_the_sub_field( 'title', '<h2 class="underline _pb2">', '</h2>' ); ?>
		<?php
		$rows = get_sub_field( 'positions' );
		if ( $rows ) {
			echo '<ul class="gray-list">';
			foreach ( $rows as $row ) {
				$summary = $row['summary'];
				$title   = $row['title'];
				echo '<li><a href="' . $summary['url'] . '" target="_blank">';
				echo $title;
				echo '</a></li>';
			}
			echo '</ul>';
		} ?>
	</div>
</section>