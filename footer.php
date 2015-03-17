			<footer class="above-footer">
			<?php /* Widgetized sidebar */
    				if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Call To Action Box') ) : ?><?php endif; ?>	
			</footer>
			</div>
			<footer class="footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
				
				<div id="inner-footer" class="wrap cf">
					
					
					<?php /* Widgetized sidebar */
    				if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Footer 1 Section') ) : ?><?php endif; ?>

    				

					<p class="source-org copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. All rights reserved. <a href="#">Terms &amp; Conditions</a></p>

				</div>

			</footer>

		</div>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>

	</body>

</html> <!-- end of site. what a ride! -->
