<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

global $product;


// exit();

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>

<?
//global $product;
// var_dump($product);
// $img = get_the_post_thumbnail_url( $product->get_id(), 'full' );
// var_dump($img);
// $name = $product->get_name();
// $price = $product->get_price();
?>
<div class="product-item-wrap product col-lg-4 col-md-4 col-sm-4">
   <div class="product-item-inner">
      <div class="product-thumb">

         <div class="product-flash-wrap">
         	<!-- <span class="on-new product-flash">New</span> -->
<!--         	--><?//
//				$date1 = $product->get_date_created();
//				$date1  = substr($date1, 0, 10);
//				// echo $date1;
//				$date2 = date("Y.m.d");
//				// $date2 = '2018-12-03';
//
//				$date2 = str_replace('.', '-', $date2);
//				// echo $date2;
//
//
//				$diff = abs(strtotime($date2) - strtotime($date1));
//
//				$years = floor($diff / (365*60*60*24));
//				$months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));
//				$days = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24)/ (60*60*24));
//
//				// printf("%d years, %d months, %d days\n", $years, $months, $days);
//				if( $years > 0 ||  $months > 0 || $days > 7)
//				{
//					// echo "старый";
//					if ( !empty( $product->get_sale_price() ) ) { ?>
<!--		         		<span class="on-sale product-flash">-->
<!--		         		--><?//
//		         		//a < b = ((b-a)/a) * 100
//		         		$s_p = $product->get_sale_price();//a
//		         		$r_p = $product->get_regular_price();//b
//
//		         		$percent = $s_p / $r_p ;
//		         		$percent = 1 - $percent;
//		         		$percent = $percent * 100;
//		         		echo intval($percent);
//		         		?><!--%</span>--><?//
//		         	}
//				}
//				else{
//					// echo "new";?>
<!--					<span class="on-new product-flash">New</span>-->
<!--					--><?//
//				}

				?>



         </div>

         <div class="product-thumb-primary">
         	<img width="300" height="300" src="<?=get_the_post_thumbnail_url( $product->get_id(), 'full' );?>" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="<?=get_the_post_thumbnail_url( $product->get_id(), 'full' );?> 600w, <?=get_the_post_thumbnail_url( $product->get_id(), 'full' );?> 300w, <?=get_the_post_thumbnail_url( $product->get_id(), 'full' );?> 180w" sizes="(max-width: 300px) 100vw, 300px">
         </div>
         <div class="product-thumb-secondary">
         	<img width="300" height="300" src="<?=get_the_post_thumbnail_url( $product->get_id(), 'full' );?>" class="attachment-shop_catalog size-shop_catalog" alt="">
         </div>

         <a class="product-link" <a="" href="<?php the_permalink();?>"></a>
         <div class="product-actions">
             <!--<a data-toggle="tooltip" data-placement="top" title="" <a="" href="/handmade/product/yellow-pillow/?action=yith-woocompare-add-product&amp;id=1569" class="compare" data-product_id="1569" data-original-title="Compare">
            	<i class="fas fa-exchange-alt"></i>
            </a>-->

            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1569">
               <div class="yith-wcwl-add-button show" style="display:block" data-original-title="" title="">

<div>
	<div data-item_id="<?php echo $product->get_id(); ?>" data-action="alg-wc-wl-toggle" class="alg-wc-wl-btn add alg-wc-wl-thumb-btn alg-wc-wl-thumb-btn-abs alg-wc-wl-thumb-btn-single positioned-on-parent" style="left: 17px; top: 17px; right: auto; bottom: auto; display: block;">
   <div class="alg-wc-wl-view-state alg-wc-wl-view-state-add">
   <i class="fa fa-heart" aria-hidden="true"></i>
   </div>
   <div class="alg-wc-wl-view-state alg-wc-wl-view-state-remove">
   <i class="fa fa-heart" aria-hidden="true"></i>
   </div>
   <i class="loading fa fa-refresh fa-spin fa-fw"></i>
   </div>
</div>


			   <!--	<a href="#/handmade/home-02/?add_to_wishlist=1569" rel="nofollow" data-product-id="1569" data-product-type="simple" class="add_to_wishlist">Add to Wishlist</a>-->


               	<img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden">
               </div>
               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;" data-original-title="" title="">
               	<span class="feedback">Product added!</span>
               	<a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a>
               </div>
               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none" data-original-title="" title="">
               	<span class="feedback">The product is already in the wishlist!</span>
               	<a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a>
               </div>
               <div style="clear:both"></div>
               <div class="yith-wcwl-wishlistaddresponse"></div>
            </div>

            <div class="clear"></div>
             <style>
                 #my-custom-add-to-cart-button{
                     display: none;
                 }
                 #my-custom-add-to-cart-button:first-child{
                    display: block;
                 }

             </style>
            <!--<a data-toggle="tooltip" data-placement="top" title="" class="product-quick-view" data-product_id="1569" <a="" href="<?php the_permalink();?>" data-original-title="Quick view"><i class="fas fa-search"></i></a>-->
            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to cart">

                <a rel="nofollow" id="my-custom-add-to-cart-button" href="<?php echo get_bloginfo('template_url');?>/?add-to-cart=<?php echo $product->get_id(); ?>" data-product_id="<?php echo $product->get_id(); ?>" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart my-custom-add-to-cart-button">
                    <i class="fa fa-shopping-cart"></i> Add to cart</a>

<!--                <a rel="nofollow" href="/handmade/product/knit-from-wool-bracelets/?add-to-cart=1548" data-quantity="1" data-product_id="1548" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart">-->
<!--                    <i class="fa fa-shopping-cart"></i> Add to cart</a>-->

            </div>
         </div>
      </div>
      <div class="product-info">
         <!-- <div class="star-rating">
         	<span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span>
         </div> -->
         <h3 class="product-name p-font">
         	<a href="<?php the_permalink();?>"><?=$product->get_name();?></a>
         </h3>
         <span class="price">
         	<? if ( empty( $product->get_sale_price() ) ){ ?>
	         	<span class="woocommerce-Price-amount amount" style="color: #000">
	         		<span class="woocommerce-Price-currencySymbol">₴</span><?=$product->get_price();?></span>
	         	</span>
	        <?} else{ ?>
	        	<del>
	        		<span class="woocommerce-Price-amount amount">
	        			<span class="woocommerce-Price-currencySymbol">₴</span><?=$product->get_regular_price();?></span>
	        	</del>
				<ins>
					<span class="woocommerce-Price-amount amount" style="color: #000">
						<span class="woocommerce-Price-currencySymbol">₴</span><?=$product->get_sale_price();?></span>
				</ins>
			<? } ?>
      </div>
   </div>
</div>
