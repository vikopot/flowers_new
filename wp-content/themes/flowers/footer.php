<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package flowers
 */
 
?>
<footer class="main-footer-wrapper light">
    <div id="wrapper-footer">
        <div class="main-footer">
            <div class="footer_inner clearfix">
<!--                <div class="footer-top-bar-wrapper">-->
<!--                    <!-- <div class="footer-top-bar-inner">-->
<!--                       <div class="full">-->
<!--                          <div class=" sidebar">-->
<!--                             <aside id="handmade-partner-carousel-4" class="widget widget-partner-carousel">-->
<!--                                <div class="container">-->
<!--                                   <div class="partner-wrap col-md-12  owl-carousel " data-plugin-options='{ "items" : 5,"pagination": false, "navigation": false, "autoPlay": true}'>-->
<!--                                      <div class="partner content-middle-inner"> <a href="#" title="Vintage Old"> <img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/partner-1.jpg" alt="Vintage Old" /> </a></div>-->
<!--                                      <div class="partner content-middle-inner"> <a href="#" title="Vintage"> <img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/partner-2.jpg" alt="Vintage" /> </a></div>-->
<!--                                      <div class="partner content-middle-inner"> <a href="#" title="Vintage Interior"> <img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/partner-3.jpg" alt="Vintage Interior" /> </a></div>-->
<!--                                      <div class="partner content-middle-inner"> <a href="#" title="Vintage Design"> <img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/partner-4.jpg" alt="Vintage Design" /> </a></div>-->
<!--                                      <div class="partner content-middle-inner"> <a href="#" title="Vintage"> <img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/partner-5.jpg" alt="Vintage" /> </a></div>-->
<!--                                      <div class="partner content-middle-inner"> <a href="#" title="Vintage"> <img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/partner-2.jpg" alt="Vintage" /> </a></div>-->
<!--                                   </div>-->
<!--                                </div>-->
<!--                             </aside>-->
<!--                             <aside id="handmade-map-scroll-up-3" class="widget widget-map-scroll-up">-->
<!--                                <div class="map-scroll-up">-->
<!--                                   <div class="link-wrap">-->
<!--                                      <div class="map col-md-6 col-sm-6 col-xs-6"> <a href="javascript:;" class="a-map p-color-hover"> <i class="pe-7s-map-marker pe-lg pe-va"></i> <span>Мы на карте</span> </a></div>-->
<!--                                      <div class="scroll-up col-md-6 col-sm-6 col-xs-6"> <a href="javascript:;" class="a-scroll-up p-color-hover"> <i class="pe-7s-up-arrow"></i> <span>Вверх страницы</span> </a></div>-->
<!--                                   </div>-->
<!--                                   <div class="handmade-map container">-->
<!--                                      <div class="row">-->
<!--                                         <div class="col-md-12">-->
<!--                                            <div class="handmade-google-map " data-location-x="40.6700" data-location-y="-73.9400" data-marker-title="Google map" style="height:450px" data-map-zoom="12" data-map-style="none"></div>-->
<!--                                         </div>-->
<!--                                      </div>-->
<!--                                   </div>-->
<!--                                </div>-->
<!--                             </aside>-->
<!--                          </div>-->
<!--                       </div>-->
<!--                    </div> -->
<!--                </div>-->
                <div class="footer_top_holder col-12">
                    <div class="container">
                        <div class="row footer-top-col-4 footer-1">
                            <div class="sidebar footer-sidebar col-md-3 col-sm-6 col-lg-3">
                                <aside id="wolverine-footer-logo-2" class="widget widget-footer-logo">
                                    <div class="footer-logo">
                                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="Flowers Roses"><img class="footer-logo-img" src="<?php echo get_bloginfo('template_url');?>/img/king.png" alt="Flowers Roses" style="        width: 80px;"/></a>
                                        <div class="sub-description"> Доставка цветов по всей Одессе. Любовь и забота о клиенте в каждом букете.</div>
                                    </div>
                                </aside>
                            </div>
                            <div class="sidebar footer-sidebar col-md-3 col-sm-6 col-lg-3 col-xs-6">
                                <aside id="nav_menu-3" class="widget widget_nav_menu">
                                    <h4 class="widget-title"><span>Страницы</span></h4>
                                    <div class="menu-footer-information-container">
                                        <ul id="menu-footer-information" class="menu">
                                            <li id="menu-item-2430" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2430"><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Главная</a></li>

                                            <li id="menu-item-2431" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2431"><a href="<?php echo $home_url_link; ?>#bl2" class="scrollto_link">Хиты продаж</a></li>
                                            <li id="menu-item-2429" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2431"><a href="<?=$home_url_link; ?>#bl3" class="scrollto_link">Акции и скидки</a></li><!-- 2429 -->
                                            <li id="menu-item-2432" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2432"><a href="<?=$home_url_link; ?>#bl4" class="scrollto_link">Доставка</a></li>
                                            <li id="menu-item-2433" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2433"><a href="<?=$home_url_link; ?>#bl5" class="scrollto_link">О нас</a></li>
                                            <li id="menu-item-2434" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2434"><a href="<?=$home_url_link; ?>#bl6" class="scrollto_link">Контакты</a></li>
                                            <li id="menu-item-2435" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2435"><a href="<?=$home_url_link; ?>#bl7" class="scrollto_link">Отзывы</a></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div class="sidebar footer-sidebar col-md-3 col-sm-6 col-lg-3 col-xs-6">
                                <aside id="nav_menu-4" class="widget widget_nav_menu">
                                    <h4 class="widget-title"><span>Категории</span></h4>
                                    <div class="menu-footer-extras-container">
                                        <ul id="menu-footer-extras" class="menu">
                                            <li id="menu-item-2435" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2435"><a href="http://www.kolopar.xyz/product-category/%d1%86%d0%b2%d0%b5%d1%82%d1%8b/">Цветы</a></li>
                                            <li id="menu-item-2436" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2436"><a href="http://www.kolopar.xyz/product-category/%d0%b4%d0%b5%d1%81%d0%b5%d1%80%d1%82%d1%8b/">Десерты</a></li>
                                            <li id="menu-item-2437" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2437"><a href="http://www.kolopar.xyz/product-category/%d0%b8%d0%b3%d1%80%d1%83%d1%88%d0%ba%d0%b8/">Игрушки</a></li>
                                            <li id="menu-item-2438" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2438"><a href="http://www.kolopar.xyz/product-category/%d1%88%d0%b0%d1%80%d1%8b/">Шары</a></li>
                                            <!-- <li id="menu-item-2439" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2439"><a href="#">Site Map</a></li> -->
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                            <div class="sidebar footer-sidebar col-md-3 col-sm-6 col-lg-3" >
                                <aside id="text-2" class="widget-title-s-font widget widget_text">
                                    <h4 class="widget-title"><span>Контакты</span></h4>
                                    <div class="textwidget">
                                        <ul class="footer-contact-us">
                                            <li> <i class="fas fa-map-marker p-color"></i> <span> Одесса, Пушкина 89 </span></li>
                                            <li> <i class="fas fa-envelope p-color"></i> <span> flowers@gmail.com </span></li>
                                            <li> <i class="fas fa-phone p-color"></i> <span>+ 38(094) 949 68 88</span></li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style>
            @media(max-width:767px) {

                footer .bottom-bar-wrapper .sidebar.text-left {
                    margin: 10px 5px 0px;
                }

                footer .bottom-bar-wrapper .sidebar.text-left aside#text-3 {
                    margin: 0px;
                }
            }

            @media(min-width:768px) {
                footer .bottom-bar-wrapper .sidebar.text-left {
                    display: flex;
                    align-items: center;
                }
                footer .bottom-bar-wrapper .sidebar.text-left .copyright{
                    margin: 0px;
                }
            }
        </style>
        <div class="bottom-bar-wrapper">
            <div class="bottom-bar-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 sidebar text-left">
                            <aside id="text-3" class="copyright margin-top-10 widget widget_text"><!--copyright margin-top-10 widget widget_text-->
                                <div class="textwidget">
                                    <div>© Copyright 2018. Love Roses .</div>
                                    <!--                                    <div>Theme Flowers</div>-->
                                </div>
                            </aside>
                        </div>
                        <div class="col-md-6 sidebar text-right">
                            <aside id="handmade-payment-gate-2" class="widget widget-payment-gate">
                                <ul class="payment-gate" id="bl6">
                                    <li> <a target="_blank" href="http://www.mastercard.com" title="Master card"> <img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/master_card.jpg" alt="Master card" /> </a></li>
                                    <li> <a target="_blank" href="http://www.visa.com" title="Visa"> <img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/visa.jpg" alt="Visa" /> </a></li>
                                    <li> <a target="_blank" href="http://www.paypal.com" title="Paypal"> <img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/paypal.jpg" alt="Paypal" /> </a></li>
                                    <li> <a target="_blank" href="https://www.americanexpress.com/" title="American Express"> <img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/american_express.jpg" alt="American Express" /> </a></li>
                                    <li> <a target="_blank" href="https://www.westernunion.com" title="Weston Union"> <img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/weston_union.jpg" alt="Weston Union" /> </a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
<style type="text/css">
    .back-to-top{
        opacity: 0;
        border-radius: 50%;
    }
    .back-to-top.in{
        opacity: 1;
    }
    .back-to-top i{
        color: black;
    }
</style>
<a class="back-to-top" href="javascript:;" style="
    display:  flex;
    justify-content: center;
    align-items:  center;
"> <i class="fas fa-angle-up"></i> </a>  <!-- <script type="text/javascript">var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/58d49c44f97dd14875f59da4/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();</script> -->



<!--Start of Tawk.to Script-->
<script type="text/javascript">


    // var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

    // (function(){


    // var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    // s1.async=true;
    // s1.src='https://embed.tawk.to/5b63d801e21878736ba2958e/default';
    // s1.charset='UTF-8';
    // s1.setAttribute('crossorigin','*');
    // s0.parentNode.insertBefore(s1,s0);
    // })();

</script>
<!--End of Tawk.to Script-->





<!-- Chatra {literal} -->
<script>
    (function(d, w, c) {
        w.ChatraID = 'JeKp2rQmPsXps2Szd';
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
</script>
<!-- /Chatra {/literal} -->



<script type="text/javascript"></script>
<script type="text/javascript">var c = document.body.className;
    c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
    document.body.className = c;</script>
<script type='text/javascript'>/*  */
    var _wpcf7 = {"recaptcha":{"messages":{"empty":"Please verify that you are not a robot."}},"cached":"1"};
    /*  */</script>
<!-- <script type='text/javascript'>/*  */
var woocommerce_params = {"ajax_url":"\/handmade\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/handmade\/?wc-ajax=%%endpoint%%"};
/*  */</script>
<script type='text/javascript'>/*  */
var wc_cart_fragments_params = {"ajax_url":"\/handmade\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/handmade\/?wc-ajax=%%endpoint%%","cart_hash_key":"wc_cart_hash_c44dd2ca6b3e914a8f1e1721af859412","fragment_name":"wc_fragments_c44dd2ca6b3e914a8f1e1721af859412"};
/*  */</script>
<script type='text/javascript'>/*  */
var yith_woocompare = {"ajaxurl":"\/handmade\/?wc-ajax=%%endpoint%%","actionadd":"yith-woocompare-add-product","actionremove":"yith-woocompare-remove-product","actionview":"yith-woocompare-view-table","actionreload":"yith-woocompare-reload-product","added_label":"Added","table_title":"Product Comparison","auto_open":"yes","loader":"http:\/\/themes.g5plus.net\/handmade\/wp-content\/plugins\/yith-woocommerce-compare\/assets\/images\/loader.gif","button_text":"Compare","cookie_name":"yith_woocompare_list"};
/*  */</script> -->

<!-- этот блок влияет на отображение новинок -->
<script type='text/javascript'>/*  */
    var yith_wcwl_l10n = {"ajax_url":"\/handmade\/wp-admin\/admin-ajax.php","redirect_to_cart":"no","multi_wishlist":"","hide_add_button":"1","is_user_logged_in":"","ajax_loader_url":"http:\/\/themes.g5plus.net\/handmade\/wp-content\/plugins\/yith-woocommerce-wishlist\/assets\/images\/ajax-loader.gif","remove_from_wishlist_after_add_to_cart":"yes","labels":{"cookie_disabled":"We are sorry, but this feature is available only if cookies are enabled on your browser.","added_to_cart_message":"<div class=\"woocommerce-message\">Product correctly added to cart<\/div>"},"actions":{"add_to_wishlist_action":"add_to_wishlist","remove_from_wishlist_action":"remove_from_wishlist","move_to_another_wishlist_action":"move_to_another_wishlsit","reload_wishlist_and_adding_elem_action":"reload_wishlist_and_adding_elem"}};
    /*  */</script>
<script type='text/javascript'>/*  */
    var g5plus_framework_constant = {"product_compare":"Compare","product_wishList":"WishList"};
    var g5plus_framework_ajax_url = "http:\/\/themes.g5plus.net\/handmade\/wp-admin\/admin-ajax.php?activate-multi=true";
    var g5plus_framework_theme_url = "http:\/\/themes.g5plus.net\/handmade\/wp-content\/themes\/handmade\/";
    var g5plus_framework_site_url = "http:\/\/themes.g5plus.net\/handmade";
    /*  */</script>
<!-- этот блок влияет на отображение новинок END-->


<script type='text/javascript'>/*  */
    var xmenu_meta = {"setting-responsive-breakpoint":"991"};
    var xmenu_meta_custom = [];
    /*  */</script>
<script>jQuery("style#g5plus_custom_style").append("@media screen and (min-width: 992px) {#menu-item-mobile-2475 > ul.x-sub-menu{background-image:url('http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/bg-mega-menu.png');background-attachment:scroll;background-position:bottom right;background-repeat:no-repeat;background-size:auto;}}");</script>
<script>jQuery("style#g5plus_custom_style").append("@media screen and (min-width: 992px) {#menu-item-2475 > ul.x-sub-menu{background-image:url('http://themes.g5plus.net/handmade/wp-content/uploads/2015/10/bg-mega-menu.png');background-attachment:scroll;background-position:bottom right;background-repeat:no-repeat;background-size:auto;}}");</script>

<!-- <script src="js/cart_menu-scroll.js" data-minify="1"></script> -->
<!-- нужен для корзинки -->

<!-- <script src="js/cart_menu-scroll_test.js" data-minify="1"></script> -->



<!--<script type='text/javascript' src='http://maps.googleapis.com/maps/api/js?libraries=places&#038;language=en_US&#038;key=AIzaSyDsUcTjt43mTheN9ruCsQVgBE-wgN6_AfY&#038;ver=4.7.11'></script>-->
<!-- <script src="http://themes.g5plus.net/handmade/wp-content/cache/min/1/b556597d6d10fe6159bc54775bd45117.js" data-minify="1"></script> -->
<script src="<?php echo get_bloginfo('template_url');?>/js/b556597d6d10fe6159bc54775bd45117.js" data-minify="1"></script>

<!-- <script src="<?php echo get_bloginfo('template_url');?>/js/owl.carousel.js"></script> -->

<!-- нужен для бургера -->

<!---->
<!--<script>-->
<!--    $(document).ready(function(){-->
<!--        $(".owl-carousel").owlCarousel();-->
<!--    });-->
<!--</script>-->
<?php wp_footer(); ?>
</body>
</html>