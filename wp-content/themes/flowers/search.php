<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package flowers
 */

get_header();
?>

	<section id="primary" class="content-area container">
		<main id="main" class="site-main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title">
					<?php
					/* translators: %s: search query. */
					printf( esc_html__( 'Поиск по запросу: %s', 'flowers' ), '<span>' . get_search_query() . '</span>' );
					?>
				</h1>
			</header><!-- .page-header -->

			<?php
			/* Start the Loop */
			?><div class="row"><?
			while ( have_posts() ) :
				the_post();

				/**
				 * Run the loop for the search to output the results.
				 * If you want to overload this in a child theme then include a file
				 * called content-search.php and that will be used instead.
				 */
				?>
			<!-- 	<div class="container">
				   <div class="vc_row wpb_row vc_row-fluid">
				      <div class="wpb_column vc_column_container vc_col-sm-12">
				         <div class="vc_column-inner ">
				            <div class="wpb_wrapper">
				               <div class="vc_tta-container" data-vc-action="collapse">
				                  <div class="vc_general vc_tta vc_tta-tabs vc_tta-color-grey vc_tta-style-tab_style1 vc_tta-shape-square vc_tta-o-shape-group vc_tta-gap-20 vc_tta-o-no-fill vc_tta-tabs-position-top vc_tta-controls-align-right"> -->
				                    <!--  <div class="vc_tta-panels-container">
				                        <div class="vc_tta-panels">
				                           <div class="vc_tta-panel" id="birthday-gifts" data-vc-content=".vc_tta-panel-body">
												<div class="vc_tta-panel-body" style="">
											   		<div class="woocommerce sc-product-wrap   no-title">
											      		<div class="product-listing woocommerce clearfix columns-4"> -->
      														<?get_template_part( 'template-parts/content', 'search' );?>
											<!-- 			</div>
													</div>
												</div>
											</div>
										</div>
									 </div> -->
								<!--</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->
<?
			endwhile;
			?></div> <!-- row<?

			the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php
get_sidebar();
get_footer();
