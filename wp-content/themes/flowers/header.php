<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package flowers
 */
// nocache_headers();
#get_product_search_form();
// echo get_post_type( get_the_ID() );
// для ссылок в меню
if( is_front_page() )
{
    $home_url_link = '';
}
else
{
    $home_url_link =  home_url( '/' );
}
// echo $home_url_link;
global $flowers_theme_opt;
#var_dump($flowers_theme_opt);
// global $product;
// $carg_pr = $product->get_category_ids();
// var_Dump($carg_pr );
?>

<?
//var_dump(get_page_template());
//var_dump(is_woocommerce());
//var_dump(is_shop());
//var_dump(is_product_category());
//var_dump(is_product_tag());
//var_dump(is_product());
//var_dump(is_cart());
//var_dump(is_checkout());
//var_dump(is_account_page());
//var_dump(is_wc_endpoint_url());
//var_dump(is_ajax());
?>

<?php //global $template; echo basename($template); ?>

<!DOCTYPE html>
<html lang="en-US">
<head>

    <? #wp_head(); ?>
    <meta charset='utf-8'>
    <!-- Slider -->


    <!--    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>-->

    <!-- slim->min -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script> -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <!-- slider end-->


    <style>
        /*style.css*/
        @font-face {
            font-family: 'gothic';
            src: url('<?php echo get_bloginfo('template_url');?>/fonts/g/gothic.eot');
            src: local('gothic'), url('<?php echo get_bloginfo('template_url');?>/fonts/g/gothic.woff') format('woff'),
            url('<?php echo get_bloginfo('template_url');?>/fonts/g/gothic.ttf') format('truetype');
        }
        @font-face{
            font-family:fontawesome;
            src:url(http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/fontawesome/fontawesome-webfont.eot?v=4.3.0);
            src:url(http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/fontawesome/fontawesome-webfont.eot?#iefix&v=4.3.0) format('embedded-opentype'),
            url(http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/fontawesome/fontawesome-webfont.woff2?v=4.3.0) format('woff2'),
            url(http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/fontawesome/fontawesome-webfont.woff?v=4.3.0) format('woff'),
            url(http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/fontawesome/fontawesome-webfont.ttf?v=4.3.0) format('truetype'),
            url(http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/fontawesome/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular) format('svg');
            font-weight:400;font-style:normal
        }
    </style>
    <link rel="stylesheet" href="<?php echo get_bloginfo('template_url');?>/layouts/6b6cf80f85e258f63952c28df862c487.css" data-minify="1" />
    <script src="<?php echo get_bloginfo('template_url');?>/js/1e2d507c5610e2750f2f3a3c173602ca.js" data-minify="1"></script>
    <script type="text/javascript">document.documentElement.className = document.documentElement.className + ' yes-js js_active js'</script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="pingback" <a href="http://themes.g5plus.net/handmade/xmlrpc.php" />
    <link rel="shortcut icon" href="http://themes.g5plus.net/handmade/wp-content/themes/handmade/assets/images/favicon.ico" />
    <!--[if lt IE 9]> <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script> <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script> <![endif]-->
    <title>Home 02 &#8211; HandMade</title>
    <style>.wishlist_table .add_to_cart,a.add_to_wishlist.button.alt{border-radius:16px;-moz-border-radius:16px;-webkit-border-radius:16px}</style>
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
    <link rel='dns-prefetch' href='//s.w.org' />
    <link rel="alternate" type="application/rss+xml" title="HandMade &raquo; Feed" href="http://themes.g5plus.net/handmade/feed/" />
    <link rel="alternate" type="application/rss+xml" title="HandMade &raquo; Comments Feed" href="http://themes.g5plus.net/handmade/comments/feed/" />


    <style type="text/css">img.wp-smiley,img.emoji{display:inline !important;border:none !important;box-shadow:none !important;height:1em !important;width:1em !important;margin:0
        .07em !important;vertical-align:-0.1em !important;background:none !important;padding:0
        !important}
    </style>
    <style id='rs-plugin-settings-inline-css' type='text/css'>#rs-demo-id{}</style>
    <link rel='stylesheet' id='woocommerce-smallscreen-css' property='stylesheet' href='http://themes.g5plus.net/handmade/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=3.4.2' type='text/css' media='only screen and (max-width: 768px)' />
    <style id='woocommerce-inline-inline-css' type='text/css'>.woocommerce form .form-row
        .required{visibility:visible}
    </style>
    <link rel='stylesheet' id='redux-google-fonts-g5plus_handmade_options-css' property='stylesheet' href='http://fonts.googleapis.com/css?family=Varela+Round%3A400%7CPlayfair+Display%3A400%2C700%2C900%2C400italic%2C700italic%2C900italic&#038;subset=latin&#038;ver=1532339728' type='text/css' media='all' />

    <link rel='https://api.w.org/' href='http://themes.g5plus.net/handmade/wp-json/' />
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://themes.g5plus.net/handmade/xmlrpc.php?rsd" />
    <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://themes.g5plus.net/handmade/wp-includes/wlwmanifest.xml" />

    <link rel="canonical" href="http://themes.g5plus.net/handmade/home-02/" />
    <link rel='shortlink' href='http://themes.g5plus.net/handmade/?p=30' />
    <link rel="alternate" type="application/json+oembed" href="http://themes.g5plus.net/handmade/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fthemes.g5plus.net%2Fhandmade%2Fhome-02%2F" />
    <link rel="alternate" type="text/xml+oembed" href="http://themes.g5plus.net/handmade/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fthemes.g5plus.net%2Fhandmade%2Fhome-02%2F&#038;format=xml" />
    <style id="g5plus_custom_style" type="text/css"></style>
    <style type="text/css"></style>
    <noscript>
        <style>.woocommerce-product-gallery{opacity:1 !important}</style>
    </noscript>

    <noscript> <img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=755297787996624&ev=PageView&noscript=1"/> </noscript>
    <!-- <meta name="generator" content="Powered by Visual Composer - drag and drop page builder for WordPress." /> -->
    <!--[if lte IE 9]>
    <link rel="stylesheet" type="text/css" href="http://themes.g5plus.net/handmade/wp-content/plugins/js_composer/assets/css/vc_lte_ie9.min.css" media="screen">
    <![endif]-->
    <meta name="generator" content="Powered by Slider Revolution 5.4.1 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />

    <!-- <link rel="stylesheet" type="text/css" media="all" href="http://themes.g5plus.net/handmade/?custom-page=header-custom-css&amp;current_page_id=30" /> -->
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo get_bloginfo('template_url');?>/layouts/header-custom-css.css" />

    <style type="text/css" title="dynamic-css" class="options-output">body{background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:center center}.page-title-margin{margin-top:25px;margin-bottom:55px}.archive-title-margin{margin-top:25px;margin-bottom:55px}.single-blog-title-margin{margin-top:25px;margin-bottom:55px}body{font-family:"Varela Round";font-weight:400;font-style:normal;font-size:14px}h1{font-family:"Playfair Display";font-weight:400;font-style:normal;font-size:36px}h2{font-family:"Playfair Display";font-weight:400;font-style:normal;font-size:28px}h3{font-family:"Playfair Display";font-weight:400;font-style:normal;font-size:24px}h4{font-family:"Playfair Display";font-weight:400;font-style:normal;font-size:21px}h5{font-family:"Playfair Display";font-weight:400;font-style:normal;font-size:18px}h6{font-family:"Playfair Display";font-weight:400;font-style:normal;font-size:14px}{font-family:"Varela Round"}{font-family:"Playfair Display"}.page-title-inner h1{font-family:"Playfair Display";text-transform:none;font-weight:400;font-style:normal;color:#333;font-size:35px}.page-title-inner .page-sub-title{font-family:"Playfair Display";text-transform:none;font-weight:400;font-style:italic;color:#333;font-size:14px}.archive-product-title-margin{margin-top:25px;margin-bottom:55px}.single-product-title-margin{margin-top:25px;margin-bottom:55px}.portfolio-title-margin{margin-top:25px;margin-bottom:55px}
    </style>
    <style type="text/css" data-type="vc_shortcodes-custom-css">
        .vc_custom_1443867642165{margin-top:25px !important;margin-bottom:20px !important}
        .vc_custom_1443857836785{margin-top:22px !important;margin-bottom:77px !important}
        .vc_custom_1444636519242{margin-top:53px !important}
        @media screen and (max-width: 768px){
            .vc_custom_1443867642165{
                margin-top: 0px !important;
            }
        }
    </style>
    <noscript>
        <style type="text/css">.wpb_animate_when_almost_visible{opacity:1}</style>
    </noscript>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

    <link rel="stylesheet" href="<?php echo get_bloginfo('template_url');?>/layouts/Pe-icon-7-stroke.css">
    <style>
        @font-face {
            font-family:fontawesome;
            src:url(http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/fontawesome/fontawesome-webfont.eot?#iefix&v=4.3.0) format(embedded-opentype),url('<?php echo get_bloginfo('template_url');?>/fonts/fontawesome-webfont.woff2?v=4.3.0') format(woff2),url(<?php echo get_bloginfo('template_url');?>/fonts/fontawesome-webfont.woff?v=4.3.0) format(woff),url(http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/fontawesome/fontawesome-webfont.ttf?v=4.3.0) format(truetype),url(http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/fontawesome/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular) format(svg);
            font-weight:400;
            font-style:normal;
        }
        .x-menu-a-text i{
            color: #b1d1c9;
        }
        @font-face {
            font-family: 'gothic';
            src: url('<?php echo get_bloginfo('template_url');?>/fonts/g/gothic.eot');
            src: local('gothic'), url('<?php echo get_bloginfo('template_url');?>/fonts/g/gothic.woff') format('woff'), url('<?php echo get_bloginfo('template_url');?>/fonts/g/gothic.ttf') format('truetype');
        }
        /*a('map' and 'up') focus*/
        .map-scroll-up .map a:active,.map-scroll-up .scroll-up a:active,
        .map-scroll-up .map a:focus, .map-scroll-up .scroll-up a:focus{
            color: #000;
        }
    </style>
    <?php wp_head(); ?>



</head>
<body class="page-template-default page page-id-30 woocommerce-no-js footer-static header-2 woocommerce wpb-js-composer js-comp-ver-5.1.1 vc_responsive" style="font-family: 'gothic'!important;">
<div id="wrapper">
    <div class="top-bar mobile-top-bar-hide">
        <div class="container">
            <style>
                .sidebar.top-bar-left,
                    /*.sidebar.top-bar-right*/{
                    display: flex;
                    align-items: center;
                }
                .sidebar.top-bar-left aside.widget,
                .sidebar.top-bar-center aside.widget,
                .sidebar.top-bar-right aside.widget{
                    margin-bottom: 0px;
                }
                .top-bar .sidebar.top-bar-center .separate-right:after{
                    background-color: #00000000;
                }
                .sidebar.top-bar-right .separate-left.widget.widget-my-account a:hover{
                    color: #000;
                }
            </style>
            <div class="row">
                <div class="sidebar top-bar-left col-md-4">
                    <aside id="text-4" class="widget widget_text">
                        <div class="textwidget">
                            <div id="lang_sel">
                                <ul>
                                    <li>
                                        <img src="<?php echo get_bloginfo('template_url');?>/img/king.png" alt="HandMade - Shop WordPress WooCommerce Theme" width="30px" style="padding-right: 5px;width: 50px;">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <aside id="text-5" class="widget widget_text">
                        <div class="textwidget">
                            <div class="custom-dropdown-list">

                                <!-- <span>USD <i class="fas fa-angle-down"></i></span> -->
                                <!--  <ul>
                                    <li><a href="#">USD - US Dollar</a></li>
                                    <li><a href="#">EUR - Euro</a></li>
                                    <li><a href="#">GBP - British Pound</a></li>
                                    <li><a href="#">INR - Indian Rupee</a></li>
                                 </ul> -->
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="sidebar top-bar-center col-md-4" style="text-align: center;">
                    <aside id="text-6" class="separate-right p-color widget widget_text">
                        <div class="textwidget" style=" display: flex; align-items: center;color: #000"><?=$flowers_theme_opt["header-up_bar-tagline"];?></div>
                    </aside>
                </div>
                <div class="sidebar top-bar-right col-md-4">
                    <aside id="nav_menu-5" class="widget widget_nav_menu">
                        <div class="menu-topbar-menu-container">
                            <ul id="menu-topbar-menu" class="menu">
                                <li id="menu-item-2562" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2562">Время работы <?=$flowers_theme_opt["header-up_bar-work_time"];?></li>
                                <!-- <li id="menu-item-2563" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2563"><a href="/handmade/wishlist-2/">9 -20</a></li> -->
                                <!-- <li id="menu-item-2564" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2564"><a href="/handmade/blog/">Blog</a></li> -->
                            </ul>
                        </div>
                    </aside>
                    <aside id="g5plus-my-account-2" class="separate-left widget widget-my-account">
<!--                        <a href="/handmade/my-account/">Вход</a>-->
                        <?
                        if (is_user_logged_in() )
                        {
                            echo '<a href="'. wp_logout_url( get_permalink( woocommerce_get_page_id( 'myaccount' ) ) ) .'">Выход</a>';
                        }
                        elseif (!is_user_logged_in() )
                        {
                            echo '<a href="' . get_permalink( wc_get_page_id( 'myaccount' ) ) . '">Вход</a>';
                        }
                        ?>
                    </aside>

                </div>
            </div>
        </div>
    </div>
    <style type="text/css">
        .header-mobile-before img{
            padding-bottom: 0px;
            padding-top: 0px;
        }
        header.header-mobile-2 .header-container-wrapper{
            background-color: #fff;
        }
        .mobile-header .header-mobile-inner .header-customize i.fa,
        .mobile-header .header-customize i.wicon.fa.fa-shopping-cart{
            color:#000;
        }
        .mobile-header .header-mobile-inner .toggle-icon-wrapper .toggle-icon:before,
        .mobile-header .header-mobile-inner .toggle-icon-wrapper .toggle-icon:after{
            background-color: #101010;
        }
        .mobile-header .header-mobile-inner .toggle-icon-wrapper .toggle-icon span{
            background: #101010;
        }
    </style>
    <header id="header-mobile" class="mobile-header header-mobile-2">
        <div class="header-mobile-before"> <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="Flowers Roses"> <img src=<?php echo get_bloginfo('template_url');?>/img/love_roses_nocrown1.png" alt="HandMade - Shop WordPress WooCommerce Theme"> </a></div>
        <div class="header-container-wrapper menu-drop-fly header-mobile-sticky">
            <div class="container header-mobile-wrapper">
                <div class="header-mobile-inner">
                    <div class="toggle-icon-wrapper toggle-mobile-menu" data-ref="nav-menu-mobile" data-drop-type="fly">
                        <div class="toggle-icon"> <span></span></div>
                    </div>
                    <div class="header-customize">
                        <div class="search-button-wrapper header-customize-item">
                            <a class="icon-search-menu" href="#" data-search-type="standard">
                                <i class="wicon fa fa-search"></i>
                            </a>
                        </div>
                        <div class="shopping-cart-wrapper header-customize-item no-price style-default">
                            <div class="widget_shopping_cart_content">
                                <div class="widget_shopping_cart_icon">
                                    <i class="wicon fa fa-shopping-cart"></i>
                                    <span class="total">0</span>
                                </div>
                                <div class="sub-total-text">
                                    <!--                                	<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">?</span>0.00</span></div>-->
                                    <?php echo WC()->cart->get_cart_subtotal(); ?>
                                    <div class="cart_list_wrapper">
                                        <ul class="cart_list product_list_widget ">
                                            <li class="empty">
                                                <h4>Корзина пуста</h4>
                                                <p>В вашей корзине пока нет товаров</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="nav-menu-mobile" class="header-mobile-nav menu-drop-fly">
                        <!--  <form class="search-form-menu-mobile" method="get" action="<?php home_url('/');?>">
                        <input type="text" name="s" id="search-input" placeholder="Поиск...">
                        <button type="submit" class="btn-search">
                            <i class="fas fa-search"></i>
                        </button>
                    </form> -->

<!--                        <form role="search" method="get" class="search-form-menu-mobile" action="--><?php //echo esc_url( home_url( '/' ) ); ?><!--">-->
<!---->
<!--                            <input type="search" id="woocommerce-product-search-field---><?php //echo isset( $index ) ? absint( $index ) : 0; ?><!-- search-input" class="search-field" placeholder="--><?php //echo esc_attr__( 'Search products&hellip;', 'woocommerce' ); ?><!--" value="--><?php //echo get_search_query(); ?><!--" name="s" />-->
<!--                            <button type="submit" value="--><?php //echo esc_attr_x( 'Search', 'submit button', 'woocommerce' ); ?><!--"  class="btn-search"><i class="fas fa-search"></i></button>-->
<!---->
<!--                            <input type="hidden" name="post_type" value="product" />-->
<!--                        </form>-->
                        <?php echo do_shortcode('[aws_search_form]'); ?>


                        <ul id="menu-main-menu" class="nav-menu-mobile x-nav-menu x-nav-menu_main-menu x-animate-slide-up" data-breakpoint="991">
                            <li id="menu-item-mobile-2294" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children x-menu-item x-sub-menu-standard">
                                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="x-menu-a-text scrollto_link"><span class="x-menu-text">Главная</span></a>

                            </li>
                            <li id="menu-item-mobile-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                <a href="<?=$home_url_link; ?>#bl2" class="x-menu-a-text scrollto_link"><span class="x-menu-text">Хиты Продаж</span></a>

                            </li>
                            <li id="menu-item-mobile-2497" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children x-menu-item x-sub-menu-standard">
                                <a href="<?=$home_url_link; ?>#bl3" class="x-menu-a-text scrollto_link"><span class="x-menu-text">Акции и Скидки</span></a>

                            </li>
                            <li id="menu-item-mobile-2440" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                <a href="<?=$home_url_link; ?>#bl4" class="x-menu-a-text scrollto_link"><span class="x-menu-text">Доставка</span></a>

                            </li>
                            <li id="menu-item-mobile-2422" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-pos-full x-sub-menu-multi-column">
                                <a href="<?=$home_url_link; ?>#bl5" class="x-menu-a-text scrollto_link"><span class="x-menu-text">О Нас</span></a>

                            </li>
                            <li id="menu-item-mobile-2524" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children x-menu-item x-pos-full x-sub-menu-multi-column">
                                <a href="<?=$home_url_link; ?>#bl6" class="x-menu-a-text scrollto_link"><span class="x-menu-text">Контакты</span></a>

                            </li>
                            <li id="menu-item-mobile-2478" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-pos-full x-item-image x-image-layout x-image-layout-above x-sub-menu-multi-column">
                                <a href="<?=$home_url_link; ?>#bl7" class="x-menu-a-text scrollto_link"><span class="x-menu-text">Отзывы</span></a>

                            </li>
                        </ul>
                        <script>
                            $(document).ready(function() {
                                $("a.scrollto_link").click(function() {
                                    var elementClick = $(this).attr("href");
                                    var dest = $(elementClick).offset().top;
                                    // console.log(elementClick);
                                    var offset_to_target_block = 100;
                                    var destination;

                                    if( elementClick == '#bl6')
                                    {
                                        dest = $(document).height();
                                        offset_to_target_block = 0;
                                        console.log('if true');
                                    }
                                    console.log('do'+dest);
                                    destination = dest - offset_to_target_block;

                                    jQuery("html:not(:animated),body:not(:animated)").animate({
                                        scrollTop: destination
                                    }, 800);

                                    // alert(0);
                                    return false;
                                });
                            });
                        </script>
                    </div>
                    <div class="main-menu-overlay"></div>
                </div>
            </div>
    </header>
    <header id="header" class="main-header header-2 header-desktop-wrapper">
        <div class="header-nav-above">
            <div class="container">
                <div class="fl">
                    <div class="header-customize header-customize-left">
                        <div class="custom-text-wrapper header-customize-item">
                            <ul class="custom-list" style="/*margin-bottom: 30px;*/margin-right: -15px">
                                <li style="color:#999">социальные сети</li>
                                <li style="font-size: 22px"><!-- 9:00 - 20:00 --></li>
                            </ul>
                        </div>
                        <ul class="header-customize-item header-social-profile-wrapper" style="font-size: 22px">
                            <!-- <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li> -->
                            <li><a href="<?=$flowers_theme_opt["header-socials-fb"];?>" target="_blank"><i class="fab fa-facebook" style="color: #999;"></i></a></li>
                            <li><a href="<?=$flowers_theme_opt["header-socials-insta"];?>" target="_blank"><i class="fab fa-instagram" style="color: #999;"></i></a></li>
                            <!-- <li><a href="#" target="_blank"><i class="fab fa-google-plus"></i></a></li> -->
                        </ul>
                    </div>
                </div>
                <div class="header-logo"> <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="HandMade - Shop WordPress WooCommerce Theme"> <img src=<?php echo get_bloginfo('template_url');?>/img/love_roses_nocrown1.png" alt="HandMade - Shop WordPress WooCommerce Theme" /> </a></div>
                <div class="fr">
                    <div class="header-customize header-customize-right header-customize-separate">
                        <div class="custom-text-wrapper header-customize-item">
                            <div class="contact-info"> <i class="fas fa-phone"></i> <?=$flowers_theme_opt['header-phone'];?></div>
                        </div>



                        <!-- <div class="shopping-cart-wrapper header-customize-item with-price"> -->
                        <!-- <div class="widget_shopping_cart_content"> -->
                        <!-- <a class="cart-customlocation" href="<?php echo wc_get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>"><?php echo sprintf ( _n( '%d item', '%d items', WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() ); ?> - <?php echo WC()->cart->get_cart_total(); ?></a> -->
                        <!-- </div> -->
                        <!-- </div> -->
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

                            /*mob menu 777*/
                            .container.header-mobile-wrapper .header-mobile-inner .header-mobile-nav.menu-drop-fly form.aws-search-form input{
                                background: #383838;
                                color: white;
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
                                    <!--                                    <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">?</span></span>-->
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


                                        <!--                                            </div>-->

                                    <?php endif; ?>

                                    <?php do_action( 'woocommerce_after_mini_cart' ); ?>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <style type="text/css">
            .header-nav-wrapper .fas.fa-shopping-cart{
                display: none;
            }
            .header-nav-wrapper.header-sticky.sticky-scheme-inherit.nav-hover-primary.sticky-on .fas.fa-shopping-cart{
                display: contents;
            }
            .nav-hover-primary .menu-wrapper .x-nav-menu li > a.x-menu-a-text:hover{
                color: #b78933 !important;
            }
            header.main-header .menu-wrapper .x-nav-menu li.current-menu-parent > a.x-menu-a-text{
                color: #000 !important;
            }
            /* header.main-header .menu-wrapper .x-nav-menu li.current-menu-ancestor > a.x-menu-a-text*/
        </style>
        <div class="header-nav-wrapper header-sticky sticky-scheme-inherit nav-hover-primary">
            <div class="container" style="display: table">
                <div class="header-wrapper">
                    <div class="header-left">
                        <div id="primary-menu" class="menu-wrapper">
                            <ul id="main-menu" class="main-menu x-nav-menu x-nav-menu_main-menu x-animate-slide-up" data-breakpoint="991">
                                <li class="logo-sticky"> <a href="/handmade/" title="HandMade - Shop WordPress WooCommerce Theme"> <img src="<?php echo get_bloginfo('template_url');?>/img/king.png" alt="HandMade - Shop WordPress WooCommerce Theme"/> </a></li>
                                <li id="menu-item-2294" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="x-menu-a-text"><span class="x-menu-text">Главная</span></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="<?php echo $home_url_link; ?>#bl2" class="x-menu-a-text scrollto_link"><span class="x-menu-text">Хит продаж</span></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="<?=$home_url_link; ?>#bl3" class="x-menu-a-text scrollto_link"><span class="x-menu-text">Акции и скидки</span></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="<?=$home_url_link; ?>#bl4" class="x-menu-a-text scrollto_link"><span class="x-menu-text">Доставка</span></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="<?=$home_url_link; ?>#bl5" class="x-menu-a-text scrollto_link"><span class="x-menu-text">О Нас</span></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="<?=$home_url_link; ?>#bl6" class="x-menu-a-text scrollto_link"><span class="x-menu-text">Контакты</span></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="<?=$home_url_link; ?>#bl7" class="x-menu-a-text scrollto_link"><span class="x-menu-text">Отзывы</span></a>
                                </li>
                                <!-- <li id="menu-item-2497" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children x-menu-item x-sub-menu-standard">
                                   <a href="/handmade/blog/" class="x-menu-a-text"><span class="x-menu-text">Blog</span><b class="x-caret"></b></a>
                                </li> -->

                            </ul>
                        </div>
                    </div>
                    <div class="header-right">
                        <div class="header-customize header-customize-nav">
                            <div class="search-button-wrapper header-customize-item style-default"> <a class="icon-search-menu" href="#" data-search-type="standard"><i class="wicon fa fa-search"></i></a></div>
                            <div class="search-button-wrapper header-customize-item style-default"> <a class="icon-search-menu" href="#" data-search-type="standard"><i class="fas fa-shopping-cart" style="color:#000"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div id="search_popup_wrapper" class="dialog">
        <div class="dialog__overlay"></div>
        <div class="dialog__content">
            <div class="morph-shape">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 520 280" preserveAspectRatio="none">
                    <rect x="3" y="3" fill="none" width="516" height="276" />
                </svg>
            </div>
            <div class="dialog-inner">
                <h2>Введите свой запрос</h2>

                <!-- <form method="get" action="<?php home_url('/');?>" class="search-popup-inner">
                    <input type="text" name="s" placeholder="Поиск...">
                    <button type="submit">Поиск</button>
                </form> -->



<!--                <form role="search" method="get" class="search-popup-inner" action="--><?php //echo esc_url( home_url( '/' ) ); ?><!--">-->
<!---->
<!--                    <input type="search" id="woocommerce-product-search-field---><?php //echo isset( $index ) ? absint( $index ) : 0; ?><!--" class="search-field" placeholder="--><?php //echo esc_attr__( 'Search products&hellip;', 'woocommerce' ); ?><!--" value="--><?php //echo get_search_query(); ?><!--" name="s" />-->
<!--                    <button type="submit" value="--><?php //echo esc_attr_x( 'Search', 'submit button', 'woocommerce' ); ?><!--">--><?php //echo esc_html_x( 'Search', 'submit button', 'woocommerce' ); ?><!--</button>-->
<!---->
<!--                    <input type="hidden" name="post_type" value="product" />-->
<!--                </form>-->
                <?php echo do_shortcode('[aws_search_form]'); ?>

                <div><button class="action" data-dialog-close="close" type="button"><i class="fas fa-close"></i></button></div>
            </div>
        </div>
    </div>