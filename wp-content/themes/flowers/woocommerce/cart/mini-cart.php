<?php
/**
 * Mini-cart
 *
 * Contains the markup for the mini-cart, used by the cart widget.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/mini-cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.3.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>





  <style>
                        .shopping-cart-wrapper .widget_shopping_cart_content .cart_list_wrapper/*,
                        .shopping-cart-wrapper .widget_shopping_cart_content .product_list_widget */{
                            display: block;
                            visibility: hidden;
                            opacity: 0;
                            position: absolute;
                            top: 100%;
                            right: 0;
                            left: auto;
                            z-index: 9998;
                            min-width: 300px;
                            background: #fff;
                            border: solid 2px #eeeeee;
                            padding: 0;
                            line-height: 2em;
                            -webkit-transition: 0.5s all;
                            -moz-transition: 0.5s all;
                            -ms-transition: 0.5s all;
                            -o-transition: 0.5s all;
                            transition: 0.5s all;
                            -webkit-transition-timing-function: cubic-bezier(1, 0.07, 1, 0.07);
                            -moz-transition-timing-function: cubic-bezier(1, 0.07, 1, 0.07);
                            -ms-transition-timing-function: cubic-bezier(1, 0.07, 1, 0.07);
                            -o-transition-timing-function: cubic-bezier(1, 0.07, 1, 0.07);
                            transition-timing-function: cubic-bezier(1, 0.07, 1, 0.07);
                        }
                            .shopping-cart-wrapper .widget_shopping_cart_content:hover .cart_list_wrapper/*,
                            .shopping-cart-wrapper .widget_shopping_cart_content:hover .product_list_widget*/{

                                  visibility: visible;
                                opacity: 1;
                                -webkit-transition-timing-function: cubic-bezier(0.11, 0.76, 0.24, 0.93);
                                -moz-transition-timing-function: cubic-bezier(0.11, 0.76, 0.24, 0.93);
                                -ms-transition-timing-function: cubic-bezier(0.11, 0.76, 0.24, 0.93);
                                -o-transition-timing-function: cubic-bezier(0.11, 0.76, 0.24, 0.93);
                                transition-timing-function: cubic-bezier(0.11, 0.76, 0.24, 0.93);
                            }
                        </style>

                        <div class="shopping-cart-wrapper header-customize-item with-price">
                            <div class="widget_shopping_cart_content">
                               <div class="widget_shopping_cart_icon">
                                    <i class="wicon fa fa-shopping-cart"></i>
                                    <span class="total">
                                        <?php echo WC()->cart->get_cart_contents_count();?>
                                    </span>
                                </div>
                                <div class="sub-total-text">
<!--                                    <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>--><?php //echo 3333; ?><!--</span>-->
                                    <?php echo WC()->cart->get_cart_subtotal(); ?>
                                </div>
                            <div class="cart_list_wrapper">
                                

                                <?php if ( ! WC()->cart->is_empty() ) : ?>

                                    <ul class="cart_list product_list_widget ps-container <?php echo esc_attr( $args['list_class'] ); ?>">
                                        <?php
                                            do_action( 'woocommerce_before_mini_cart_contents' );

                                            foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
                                                $_product     = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
                                                $product_id   = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );

                                                if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_widget_cart_item_visible', true, $cart_item, $cart_item_key ) ) {
                                                    $product_name      = apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key );
                                                    $thumbnail         = apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key );
                                                    $product_price     = apply_filters( 'woocommerce_cart_item_price', WC()->cart->get_product_price( $_product ), $cart_item, $cart_item_key );
                                                    $product_permalink = apply_filters( 'woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '', $cart_item, $cart_item_key );
                                                    ?>
                                                    <li>
                                                       
                                                        <?php if ( empty( $product_permalink ) ) : ?>

                                                            <div class="cart-left">
                                                                <?php echo $thumbnail  . '&nbsp;'; ?>
                                                            </div>

                                                        <?php else : ?>

                                                            <div class="cart-left">
                                                                <!-- link+img -->
                                                                <a href="<?php echo esc_url( $product_permalink ); ?>">
                                                                    <?php echo $thumbnail .  '&nbsp;'; ?>
                                                                </a>
                                                            </div>

                                                        <?php endif; ?>

                                                        <div class="cart-right">
                                                            <!-- link+name -->
                                                            <a href="<?php echo esc_url( $product_permalink ); ?>">
                                                                <?php echo $product_name .  '&nbsp;'; ?>
                                                            </a>
                                                            <?php echo wc_get_formatted_cart_item_data( $cart_item ); ?>
                                                            
                                                            <!-- qty -->
                                                            <?php echo apply_filters( 'woocommerce_widget_cart_item_quantity', '<span class="quantity">' . sprintf( '%s &times; %s', $cart_item['quantity'], $product_price ) . '</span>', $cart_item, $cart_item_key ); ?>
                                                            
                                                            <!-- remove -->
                                                             <?php
                                                            echo apply_filters( 'woocommerce_cart_item_remove_link', sprintf(
                                                                '<a href="%s" class="mini-cart-remove" aria-label="%s" data-product_id="%s" data-cart_item_key="%s" data-product_sku="%s"><i class="pe-7s-close-circle"></i></a>',
                                                                esc_url( wc_get_cart_remove_url( $cart_item_key ) ),
                                                                __( 'Remove this item', 'woocommerce' ),
                                                                esc_attr( $product_id ),
                                                                esc_attr( $cart_item_key ),
                                                                esc_attr( $_product->get_sku() )
                                                            ), $cart_item_key );
                                                            ?>
                                                        </div>
                                                    </li>
                                                    <?php
                                                }
                                            }

                                            do_action( 'woocommerce_mini_cart_contents' );
                                        ?>
                                    </ul>
									
									<div class="cart-total">
                                    	<p class="total"><strong><?php #_e( 'Subtotal', 'woocommerce' ); ?>Итого:</strong> <?php echo WC()->cart->get_cart_subtotal(); ?></p>
                                    

	                                    <?php do_action( 'woocommerce_widget_shopping_cart_before_buttons' ); ?>

	                                    <p class="buttons both-buttons"><?php do_action( 'woocommerce_widget_shopping_cart_buttons' ); ?></p>
									</div>

                                <?php else : ?>

<!--                                    <div class="cart_list_wrapper">-->
											<ul class="cart_list product_list_widget ps-container" style="max-height: 200px;" data-ps-id="ce07f373-1122-56f6-d23e-5ceaf1405020">
															<li class="empty">
														<h4>Корзина пуста</h4>
														<p>В вашей корзине нет товаров</p>
													</li>
												
											<div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 3px; display: block;"><div class="ps-scrollbar-x" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px; display: block;"><div class="ps-scrollbar-y" style="top: 0px; height: 0px;"></div></div></ul><!-- end product list -->

											
<!--											</div>-->

                                <?php endif; ?>

                                <?php do_action( 'woocommerce_after_mini_cart' ); ?>
                                </div>
                            </div>
                        </div>