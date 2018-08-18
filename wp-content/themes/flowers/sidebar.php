<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package flowers
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<aside id="secondary" class="widget-area col-3">
<!--    price-->
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
    <div class="row">

    </div>
    <?=do_shortcode('[searchandfilter id="wpf_5b76cf8a802e4"]');?>
    <?=do_shortcode('[searchandfilter id="wpf_5b76d56e36d0c"]');?>
    <?=do_shortcode('[searchandfilter id="wpf_5b76d6f04b6f0"]');?>
    <?=do_shortcode('[searchandfilter id="wpf_5b76dd49bc31b"]');?>
<!--    [searchandfilter id="wpf_5b76dd49bc31b"]-->
<!--    [searchandfilter id="wpf_5b76d56e36d0c"]-->
<!--    [searchandfilter id="%d0%ba%d0%be%d0%bc%d1%83"]-->
<!--    category-->
    <?
    function woocommerce_subcats_from_parentcat_by_ID($parent_cat_ID) {
        $args = array(
            'hierarchical' => 1,
            'show_option_none' => '',
            'hide_empty' => 0,
            'parent' => $parent_cat_ID,
            'taxonomy' => 'product_cat'
        );
        $subcats = get_categories($args);

        foreach ($subcats as $sc)
        {
            $link = get_term_link( $sc->slug, $sc->taxonomy );
            echo '<a class="dropdown-item" href="'. $link .'">'.$sc->name.'</a>';
        }

    }
    ?>
<!--    вывод по id гл.категорий -->
    <div class="row">
        <div class="col">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <? woocommerce_subcats_from_parentcat_by_ID(17); ?>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <? woocommerce_subcats_from_parentcat_by_ID(18); ?>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <? woocommerce_subcats_from_parentcat_by_ID(19); ?>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <? woocommerce_subcats_from_parentcat_by_ID(20); ?>
                </div>
            </div>
        </div>
    </div>










</aside><!-- #secondary -->
