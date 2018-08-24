<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
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


global $product;

//if( woocommerce_template_single_add_to_cart() ){
//    $wc_single_add_to_cart = woocommerce_template_single_add_to_cart();
//}
//else{
//
//}
//


//
//$rel_prod = wc_get_related_products( $product->get_id(), 4 );
////var_dump($rel_prod);
//foreach($rel_prod as $key => $rel_prod_for)
//{
//   $rel_product[$key] = wc_get_product($rel_prod[$key]);
//   //var_dump($rel_product);
//}
?>
<script type="text/javascript">
   /*(function($) {
        "use strict";
        $(document).ready(function() {

            var sync1 = $("#sync1",".single-product-image-inner");
            var sync2 = $("#sync2",".single-product-image-inner");
            sync1.owlCarousel({
                singleItem : true,
                slideSpeed : 100,
                navigation: true,
                pagination:false,
                navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                afterAction : syncPosition,
                responsiveRefreshRate : 200
            });

            sync2.owlCarousel({
                items : 4,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 3],
                itemsTabletSmall: false,
                itemsMobile: [479, 2],
                pagination:false,
                responsiveRefreshRate : 100,
                navigation: false,
                navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                afterInit : function(el){
                    el.find(".owl-item").eq(0).addClass("synced");
                }
            });

            function syncPosition(el){
                var current = this.currentItem;
                $("#sync2")
                    .find(".owl-item")
                    .removeClass("synced")
                    .eq(current)
                    .addClass("synced");
                if($("#sync2").data("owlCarousel") !== undefined){
                    center(current);
                }
            }

            $("#sync2").on("click", ".owl-item", function(e){
                e.preventDefault();
                var number = $(this).data("owlItem");
                sync1.trigger("owl.goTo",number);
            });

            function center(number){
                var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
                var num = number;
                var found = false;
                for(var i in sync2visible){
                    if(num === sync2visible[i]){
                        var found = true;
                    }
                }

                if(found===false){
                    if(num>sync2visible[sync2visible.length-1]){
                        sync2.trigger("owl.goTo", num - sync2visible.length+2)
                    }else{
                        if(num - 1 === -1){
                            num = 0;
                        }
                        sync2.trigger("owl.goTo", num);
                    }
                } else if(num === sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", sync2visible[1])
                } else if(num === sync2visible[0]){
                    sync2.trigger("owl.goTo", num-1)
                }
            }


            $(document).on('found_variation',function(event,variation){
                var $product = $(event.target).closest('.product');
                if ((typeof variation !== 'undefined') && (typeof variation.variation_id !== 'undefined')) {
                    var $stock    = $product.find( '.product_meta' ).find( '.product_stock' );
                    // Display SKU
                    if ( variation.availability_html ) {
                        $stock.wc_set_content( $(variation.availability_html).text() );
                    } else {
                        $stock.wc_reset_content();
                    }


                    var variation_id = variation.variation_id,
                        $mainImage = $product.find('#sync1');
                    var index = parseInt($('a[data-variation_id*="|'+variation_id+'|"]',$mainImage).data('index'),10) ;
                    if (!isNaN(index) ) {
                        sync1.trigger("owl.goTo",index);
                    }
                }
            });

            $(document).on('reset_data',function(event){
                var $product = $(event.target).closest('.product');
                $product.find( '.product_meta' ).find( '.product_stock').wc_reset_content();
                sync1.trigger("owl.goTo",0);
            });

        });
    })(jQuery);*/
 </script>
<!--fff-->
<main class="single-product-wrap">
   <div class="container clearfix">
      <div class="row clearfix">
         <div class="site-content-single-product col-md-12">
            <div class="single-product-inner">
               <div id="product-<?php the_ID(); ?>" <?php wc_product_class(); ?>>
                  <div class="single-product-info clearfix">

                    
                     <?do_action( 'woocommerce_before_single_product_summary' );?>
                     <div class="summary-product-wrap col-lg-6 col-md-6 col-sm-12">
                        <div class="summary-product entry-summary">
                           <h1 itemprop="name" class="product_title entry-title p-font"><?=$product->get_name();?></h1>
                           <!-- <div class="woocommerce-product-rating" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">
                              <a href="#reviews" class="woocommerce-review-link" rel="nofollow"><span itemprop="reviewCount" class="count">1</span> customer review</a> 
                              <div class="star-rating" title="Rated 4.00 out of 5">
                                 <span style="width:80%">
                                 <strong itemprop="ratingValue" class="rating">4.00</strong> out of <span itemprop="bestRating">5</span> based on <span itemprop="ratingCount" class="rating">1</span> customer rating </span>
                              </div>
                           </div> -->
                           <p class="price">
	                           	<? if ( empty( $product->get_sale_price() ) ){ ?>
						         	<span class="woocommerce-Price-amount amount">
						         		<span class="woocommerce-Price-currencySymbol">₴</span><?=$product->get_price();?></span>
						         	</span>
						        <?} else{ ?>
						        	<del>
						        		<span class="woocommerce-Price-amount amount">
						        			<span class="woocommerce-Price-currencySymbol">₴</span><?=$product->get_regular_price();?></span>
						        	</del>
									<ins>
										<span class="woocommerce-Price-amount amount">
											<span class="woocommerce-Price-currencySymbol">₴</span><?=$product->get_sale_price();?></span>
									</ins>
								<? } ?>
	                           	<!-- <del>
	                           		<span class="woocommerce-Price-amount amount">
	                           			<span class="woocommerce-Price-currencySymbol">$</span>40.00</span>
	                           	</del>
	                           	<ins>
	                           		<span class="woocommerce-Price-amount amount">
	                           			<span class="woocommerce-Price-currencySymbol">$</span>30.00</span>
	                           	</ins> -->
                           </p>
                           <div class="product-single-short-description" itemprop="description">
                              <p><?=$product->get_description();?></p>
                           </div>


                          <!--  <form class="cart" action="http://themes.g5plus.net/handmade/product/knit-from-wool-bracelets/" method="post" enctype="multipart/form-data">
                              <div class="quantity">
                                 <div class="quantity-inner">
                                    <button class="btn-number" data-type="minus">
                                    <i class="pe-7s-less"></i>
                                    </button>
                                    <input type="text" step="1" min="1" name="quantity" value="1" title="Qty" class="input-text qty text" size="4">
                                    <button class="btn-number" data-type="plus">
                                    <i class="pe-7s-plus"></i>
                                    </button>
                                 </div>
                              </div>
                              <button type="submit" name="add-to-cart" value="1559" class="single_add_to_cart_button button alt">Add to cart</button>
                           </form> -->

                           <?woocommerce_template_single_add_to_cart();?>
                        <!--    <div class="single-product-function">
                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1559">
                                 <div class="yith-wcwl-add-button show" style="display:block">
                                    <a href="/handmade/product/knit-from-wool-bracelets/?add_to_wishlist=1559" rel="nofollow" data-product-id="1559" data-product-type="simple" class="add_to_wishlist">
                                    Add to Wishlist</a>
                                    <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden">
                                 </div>
                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;">
                                    <span class="feedback">Product added!</span>
                                    <a href="http://themes.g5plus.net/handmade/wishlist/" rel="nofollow">
                                    Browse Wishlist </a>
                                 </div>
                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none">
                                    <span class="feedback">The product is already in the wishlist!</span>
                                    <a href="http://themes.g5plus.net/handmade/wishlist/" rel="nofollow">
                                    Browse Wishlist </a>
                                 </div>
                                 <div style="clear:both"></div>
                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                              </div>
                              <div class="clear"></div>
                              <a title="Compare" href="http://themes.g5plus.net/handmade/product/knit-from-wool-bracelets/?action=yith-woocompare-add-product&amp;id=1559" class="compare" data-product_id="1559"><i class="fa fa-exchange"></i> Compare</a>
                           </div> -->
                           <div class="product_meta">
                               <? #var_dump($product); ?>
                              <span class="product-stock-status-wrapper"><label>Состояние:</label> <span class="product_stock"><span class="product-stock-status in-stock"><? if($product->stock_status == "instock" ){echo "В наличии";}else{echo "Нет в наличии";} ?></span></span> </span>
                              <!-- <span><label>Size:</label><span class="product_dimensions"> N/A</span></span> -->
                            <!--   <span class="posted_in"><label>Категории:</label> <a href="http://themes.g5plus.net/handmade/product-category/birthday-gifts/" rel="tag">Birthday Gifts</a>, <a href="http://themes.g5plus.net/handmade/product-category/jewelry/" rel="tag">Jewelry</a>, <a href="http://themes.g5plus.net/handmade/product-category/personal/" rel="tag">Personal</a>, <a href="http://themes.g5plus.net/handmade/product-category/special-goods/" rel="tag">Special Goods</a>.</span> -->
                              <!-- <span class="tagged_as"><label>Теги:</label> <a href="http://themes.g5plus.net/handmade/product-tag/birthday/" rel="tag">Birthday</a>, <a href="http://themes.g5plus.net/handmade/product-tag/jewelry/" rel="tag">Jewelry</a>, <a href="http://themes.g5plus.net/handmade/product-tag/person/" rel="tag">Person</a>.</span> -->
                           </div>
                          <!--  <div class="social-share-wrap">
                              <label>Share:</label>
                              <ul class="social-share">
                                 <li>
                                    <a onclick="window.open('https://www.facebook.com/sharer.php?s=100&amp;p[url]=http%3A%2F%2Fthemes.g5plus.net%2Fhandmade%2Fproduct%2Fknit-from-wool-bracelets%2F','sharer', 'toolbar=0,status=0,width=620,height=280');" href="javascript:;">
                                    <i class="fa fa-facebook"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a onclick="popUp=window.open('http://twitter.com/home?status=Knit+From+Wool+Bracelets http%3A%2F%2Fthemes.g5plus.net%2Fhandmade%2Fproduct%2Fknit-from-wool-bracelets%2F','sharer','scrollbars=yes,width=800,height=400');popUp.focus();return false;" href="javascript:;">
                                    <i class="fa fa-twitter"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="javascript:;" onclick="popUp=window.open('https://plus.google.com/share?url=http%3A%2F%2Fthemes.g5plus.net%2Fhandmade%2Fproduct%2Fknit-from-wool-bracelets%2F','sharer','scrollbars=yes,width=800,height=400');popUp.focus();return false;">
                                    <i class="fa fa-google-plus"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a onclick="popUp=window.open('http://linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Fthemes.g5plus.net%2Fhandmade%2Fproduct%2Fknit-from-wool-bracelets%2F&amp;title=Knit+From+Wool+Bracelets','sharer','scrollbars=yes,width=800,height=400');popUp.focus();return false;" href="javascript:;">
                                    <i class="fa fa-linkedin"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a onclick="popUp=window.open('http://www.tumblr.com/share/link?url=http%3A%2F%2Fthemes.g5plus.net%2Fhandmade%2Fproduct%2Fknit-from-wool-bracelets%2F&amp;name=Knit+From+Wool+Bracelets&amp;description=Pellentesque+habitant+morbi+tristique+senectus+et+netus+et+malesuada+fames+ac+turpis+egestas.+Vestibulum+tortor+quam%2C+feugiat+vitae%2C+ultricies+eget%2C+tempor+sit+amet%2C+ante.+Donec+eu+libero+sit+amet+quam+egestas+semper.+Aenean+ultricies+mi+vitae+est.+Mauris+placerat+eleifend+leo.','sharer','scrollbars=yes,width=800,height=400');popUp.focus();return false;" href="javascript:;">
                                    <i class="fa fa-tumblr"></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a onclick="popUp=window.open('http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fthemes.g5plus.net%2Fhandmade%2Fproduct%2Fknit-from-wool-bracelets%2F&amp;description=Knit+From+Wool+Bracelets&amp;media=http://themes.g5plus.net/handmade/wp-content/uploads/2013/06/product-21.jpg','sharer','scrollbars=yes,width=800,height=400');popUp.focus();return false;" href="javascript:;">
                                    <i class="fa fa-pinterest"></i>
                                    </a>
                                 </li>
                              </ul>
                           </div> -->
                        </div>
                     </div>
                  </div>
                 <!--  <div class="woocommerce-tabs wc-tabs-wrapper">
                     <ul class="tabs wc-tabs" role="tablist">
                        <li class="description_tab active" id="tab-title-description" role="tab" aria-controls="tab-description">
                           <a href="#tab-description">Description</a>
                        </li>
                        <li class="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                           <a href="#tab-reviews">Отзывы (<?=$product->get_review_count();?>)</a>
                        </li>
                     </ul>
                     <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description" style="display: block;">
                        <h2>Описание</h2>
                        <p><?=$product->get_description();?></p>
                     </div>
                     <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews" style="display: none;">
                        <div id="reviews" class="woocommerce-Reviews">
                           <div id="comments">
                              <h2 class="woocommerce-Reviews-title">1 review for <span>Knit From Wool Bracelets</span></h2>
                              <ol class="commentlist">
                                 <li class="comment even thread-even depth-1" id="li-comment-34">
                                    <div id="comment-34" class="comment_container">
                                       <img src="http://2.gravatar.com/avatar/59c82b1d2c60537f900fb191b3cb611b?s=60&amp;d=mm&amp;r=g" width="60" height="60" alt="" class="avatar avatar-60wp-user-avatar wp-user-avatar-60 alignnone photo avatar-default">
                                       <div class="comment-text">
                                          <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4</strong> out of 5</span></div>
                                          <p class="meta">
                                             <strong class="woocommerce-review__author">Maria </strong>
                                             <span class="woocommerce-review__dash">–</span> <time class="woocommerce-review__published-date" datetime="2013-06-07T15:56:24+00:00">June 7, 2013</time>
                                          </p>
                                          <div class="description">
                                             <p>He really is the cutest little man. Swoooon!</p>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                              </ol>
                           </div>
                           <div id="review_form_wrapper">
                              <div id="review_form">
                                 <div id="respond" class="comment-respond">
                                    <span id="reply-title" class="comment-reply-title">Add a review <small><a rel="nofollow" id="cancel-comment-reply-link" href="/handmade/product/knit-from-wool-bracelets/#respond" style="display:none;">Cancel reply</a></small></span> 
                                    <form action="http://themes.g5plus.net/handmade/wp-comments-post.php" method="post" id="commentform" class="comment-form" novalidate="">
                                       <div class="comment-form-rating">
                                          <label for="rating">Your rating</label>
                                          <p class="stars"><span><a class="star-1" href="#">1</a><a class="star-2" href="#">2</a><a class="star-3" href="#">3</a><a class="star-4" href="#">4</a><a class="star-5" href="#">5</a></span></p>
                                          <select name="rating" id="rating" aria-required="true" required="" style="display: none;">
                                             <option value="">Rate…</option>
                                             <option value="5">Perfect</option>
                                             <option value="4">Good</option>
                                             <option value="3">Average</option>
                                             <option value="2">Not that bad</option>
                                             <option value="1">Very poor</option>
                                          </select>
                                       </div>
                                       <p class="comment-form-comment"><label for="comment">Your review&nbsp;<span class="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true" required=""></textarea></p>
                                       <p class="form-submit"><input name="submit" type="submit" id="submit" class="handmade-button style1 button-2x" value="Submit"> <input type="hidden" name="comment_post_ID" value="1559" id="comment_post_ID">
                                          <input type="hidden" name="comment_parent" id="comment_parent" value="0">
                                       </p>
                                    </form>
                                 </div>
                              </div>
                           </div>
                           <div class="clear"></div>
                        </div>
                     </div>
                  </div> -->

<script>
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel();
    });
</script>

                  <div class="related products" style="margin-bottom: 20px">
                     <h4 class="widget-title"><span>Рекомендуемые товары</span></h4>
                     <div class="product-listing woocommerce clearfix product-slider">
                        <div class="owl-carousel owl-theme" data-plugin-options='{"items" :4,"pagination" : false, "navigation" : true,"itemsDesktop" : [1199,4], "itemsDesktopSmall" : [980,3], "itemsTablet" : [768, 3], "itemsTabletSmall": [600, 2]}'>

<?
//global $product;

$rel_prod = wc_get_related_products( $product->get_id(), 4 );
//var_dump($rel_prod);
foreach($rel_prod as $key => $rel_prod_for)
{
    $rel_product = wc_get_product($rel_prod[$key]);
    //$rel_product[$key] - запасной вариант
    //var_dump($rel_product);
    ?>
    <!--<div class="owl-item">-->
        <div class="product-item-wrap rating-visible post-1550 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-illumination product_cat-romantic product_cat-special-goods product_tag-illumination product_tag-romatic last instock shipping-taxable purchasable product-type-simple">
            <div class="product-item-inner">
                <div class="product-thumb">
                    <div class="product-flash-wrap"><!--<span class="on-hot product-flash">Hot</span>--></div>
                    <div class="product-thumb-primary"> <img width="300" height="300" src="<?=get_the_post_thumbnail_url( $rel_product->id, 'full' );?>" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="<?=get_the_post_thumbnail_url( $rel_product->id, 'full' );?> 600w, <?=get_the_post_thumbnail_url( $rel_product->id, 'full' );?> 150w, <?=get_the_post_thumbnail_url( $rel_product->id, 'full' );?> 300w, <?=get_the_post_thumbnail_url( $rel_product->id, 'full' );?> 180w" sizes="(max-width: 300px) 100vw, 300px"></div>
                    <div class="product-thumb-secondary"> <img width="300" height="300" src="<?=get_the_post_thumbnail_url( $rel_product->id, 'full' );?>" class="attachment-shop_catalog size-shop_catalog" alt=""></div>
                    <a class="product-link" href="<?=get_permalink( $rel_product->id );?>"></a>
                    <!--<div class="product-actions">
                        <a data-toggle="tooltip" data-placement="top" title="" href="http://themes.g5plus.net/handmade/product/gift-boxes/?action=yith-woocompare-add-product&amp;id=1550" class="compare" data-product_id="1550" data-original-title="Compare"><i class="fa fa-exchange"></i> </a>
                        <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1550">
                            <div class="yith-wcwl-add-button show" style="display:block" data-original-title="" title=""> <a href="/handmade/product/yellow-pillow/?add_to_wishlist=1550" rel="nofollow" data-product-id="1550" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden"></div>
                            <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;" data-original-title="" title=""> <span class="feedback">Product added!</span> <a href="http://themes.g5plus.net/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                            <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none" data-original-title="" title=""> <span class="feedback">The product is already in the wishlist!</span> <a href="http://themes.g5plus.net/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                            <div style="clear:both"></div>
                            <div class="yith-wcwl-wishlistaddresponse"></div>
                        </div>
                        <div class="clear"></div>
                        <a data-toggle="tooltip" data-placement="top" title="" class="product-quick-view" data-product_id="1550" href="http://themes.g5plus.net/handmade/product/gift-boxes/" data-original-title="Quick view"><i class="fa fa-search"></i></a>
                        <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to cart"><a rel="nofollow" href="/handmade/product/yellow-pillow/?add-to-cart=1550" data-quantity="1" data-product_id="1550" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fa fa-shopping-cart"></i> Add to cart</a></div>
                    </div>-->
                </div>
                <div class="product-info">
<!--                    <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>-->
                    <h3 class="product-name p-font"><a href="http://themes.g5plus.net/handmade/product/gift-boxes/"><?=$rel_product->name;?></a></h3>
                    <span class="price"><? if ( empty( $rel_product->sale_price ) ){ ?>
                            <span class="woocommerce-Price-amount amount">
                               <span class="woocommerce-Price-currencySymbol">₴</span><?=$rel_product->price;?></span>
                            <!-- </span> -->
                        <?} else{ ?>
                            <del>
                                <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">₴</span><?=$rel_product->regular_price;?></span>
                            </del>
                            <ins>
                               <span class="woocommerce-Price-amount amount">
                                    <span class="woocommerce-Price-currencySymbol">₴</span><?=$rel_product->sale_price;?></span>
                            </ins>
                        <? } ?>
                    </span>
                </div>
            </div>
        </div>
    <!--</div>-->
    <?
}
?>


<!--                                  <div class="owl-item">-->
<!--                                      <div class="product-item-wrap rating-visible post-1550 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-illumination product_cat-romantic product_cat-special-goods product_tag-illumination product_tag-romatic last instock shipping-taxable purchasable product-type-simple">-->
<!--                                          <div class="product-item-inner">-->
<!--                                              <div class="product-thumb">-->
<!--                                                  <div class="product-flash-wrap"><span class="on-hot product-flash">Hot</span></div>-->
<!--                                                  <div class="product-thumb-primary"> <img width="300" height="300" src="http://themes.g5plus.net/handmade/wp-content/uploads/2013/06/product-10.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="http://themes.g5plus.net/handmade/wp-content/uploads/2013/06/product-10.jpg 600w, http://themes.g5plus.net/handmade/wp-content/uploads/2013/06/product-10-150x150.jpg 150w, http://themes.g5plus.net/handmade/wp-content/uploads/2013/06/product-10-300x300.jpg 300w, http://themes.g5plus.net/handmade/wp-content/uploads/2013/06/product-10-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"></div>-->
<!--                                                  <div class="product-thumb-secondary"> <img width="300" height="300" src="http://themes.g5plus.net/handmade/wp-content/uploads/2013/06/product-09-300x300.jpg" class="attachment-shop_catalog size-shop_catalog" alt=""></div>-->
<!--                                                  <a class="product-link" href="http://themes.g5plus.net/handmade/product/gift-boxes/"></a>-->
<!--                                                  <div class="product-actions">-->
<!--                                                      <a data-toggle="tooltip" data-placement="top" title="" href="http://themes.g5plus.net/handmade/product/gift-boxes/?action=yith-woocompare-add-product&amp;id=1550" class="compare" data-product_id="1550" data-original-title="Compare"><i class="fa fa-exchange"></i> </a>-->
<!--                                                      <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1550">-->
<!--                                                          <div class="yith-wcwl-add-button show" style="display:block" data-original-title="" title=""> <a href="/handmade/product/yellow-pillow/?add_to_wishlist=1550" rel="nofollow" data-product-id="1550" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden"></div>-->
<!--                                                          <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;" data-original-title="" title=""> <span class="feedback">Product added!</span> <a href="http://themes.g5plus.net/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>-->
<!--                                                          <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none" data-original-title="" title=""> <span class="feedback">The product is already in the wishlist!</span> <a href="http://themes.g5plus.net/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>-->
<!--                                                          <div style="clear:both"></div>-->
<!--                                                          <div class="yith-wcwl-wishlistaddresponse"></div>-->
<!--                                                      </div>-->
<!--                                                      <div class="clear"></div>-->
<!--                                                      <a data-toggle="tooltip" data-placement="top" title="" class="product-quick-view" data-product_id="1550" href="http://themes.g5plus.net/handmade/product/gift-boxes/" data-original-title="Quick view"><i class="fa fa-search"></i></a>-->
<!--                                                      <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to cart"><a rel="nofollow" href="/handmade/product/yellow-pillow/?add-to-cart=1550" data-quantity="1" data-product_id="1550" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fa fa-shopping-cart"></i> Add to cart</a></div>-->
<!--                                                  </div>-->
<!--                                              </div>-->
<!--                                              <div class="product-info">-->
<!--                                                  <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>-->
<!--                                                  <h3 class="product-name p-font"><a href="http://themes.g5plus.net/handmade/product/gift-boxes/">Gift Boxes</a></h3>-->
<!--                                                  <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>40.00</span></span>-->
<!--                                              </div>-->
<!--                                          </div>-->
<!--                                      </div>-->
<!--                                  </div>-->
                              





                        </div>
<!--                         <div class="owl-controls clickable">-->
<!---->
<!--                         </div>-->
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   
</main>