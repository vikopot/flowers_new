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

?>
<?
global $flowers_theme_opt;
#var_dump($flowers_theme_opt);

?>
<!DOCTYPE html>
<html lang="en-US">
<head>

<? wp_head(); ?>
    <meta charset='utf-8'>
    <!-- Slider -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
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
    <script type='text/javascript'>/*  */
        // var wc_add_to_cart_params = {"ajax_url":"\/handmade\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/handmade\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"http:\/\/themes.g5plus.net\/handmade\/cart\/","is_cart":"","cart_redirect_after_add":"no"};

    </script>
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
    <meta name="generator" content="Powered by Visual Composer - drag and drop page builder for WordPress." />
    <!--[if lte IE 9]>
    <link rel="stylesheet" type="text/css" href="http://themes.g5plus.net/handmade/wp-content/plugins/js_composer/assets/css/vc_lte_ie9.min.css" media="screen">
    <![endif]-->
    <meta name="generator" content="Powered by Slider Revolution 5.4.1 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />

    <!-- <link rel="stylesheet" type="text/css" media="all" href="http://themes.g5plus.net/handmade/?custom-page=header-custom-css&amp;current_page_id=30" /> -->
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo get_bloginfo('template_url');?>/layouts/header-custom-css.css" />

    <style type="text/css" title="dynamic-css" class="options-output">body{background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:center center}.page-title-margin{margin-top:25px;margin-bottom:55px}.archive-title-margin{margin-top:25px;margin-bottom:55px}.single-blog-title-margin{margin-top:25px;margin-bottom:55px}body{font-family:"Varela Round";font-weight:400;font-style:normal;font-size:14px}h1{font-family:"Playfair Display";font-weight:400;font-style:normal;font-size:36px}h2{font-family:"Playfair Display";font-weight:400;font-style:normal;font-size:28px}h3{font-family:"Playfair Display";font-weight:400;font-style:normal;font-size:24px}h4{font-family:"Playfair Display";font-weight:400;font-style:normal;font-size:21px}h5{font-family:"Playfair Display";font-weight:400;font-style:normal;font-size:18px}h6{font-family:"Playfair Display";font-weight:400;font-style:normal;font-size:14px}{font-family:"Varela Round"}{font-family:"Playfair Display"}.page-title-inner
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      h1{font-family:"Playfair Display";text-transform:none;font-weight:400;font-style:normal;color:#333;font-size:35px}.page-title-inner .page-sub-title{font-family:"Playfair Display";text-transform:none;font-weight:400;font-style:italic;color:#333;font-size:14px}.archive-product-title-margin{margin-top:25px;margin-bottom:55px}.single-product-title-margin{margin-top:25px;margin-bottom:55px}.portfolio-title-margin{margin-top:25px;margin-bottom:55px}
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
    <?php #wp_head(); ?>
</head>
<body class="page-template-default page page-id-30 woocommerce-no-js footer-static header-2 woocommerce wpb-js-composer js-comp-ver-5.1.1 vc_responsive" style="font-family: 'gothic'!important;">
<div id="wrapper">
    <div class="top-bar mobile-top-bar-hide">
        <div class="container">
            <div class="row">
                <div class="sidebar top-bar-left col-md-4">
                    <aside id="text-4" class="widget widget_text">
                        <div class="textwidget">
                            <div id="lang_sel">
                                <ul>
                                    <li>
                                        <img src="<?php echo get_bloginfo('template_url');?>/img/king.png" alt="HandMade - Shop WordPress WooCommerce Theme" width="30px" style="padding-right: 5;width: 50px;">
                                        <!-- <a href="#" class="lang_sel_sel icl-en"> <img class="iclflag" src="http://themes.g5plus.net/handmade/wp-content/themes/handmade/assets/images/flags/en.png" alt="en" title="English">&nbsp;English </a> -->
                                        <!--  <ul>
                                            <li class="icl-fr"> <a href="#"> <img class="iclflag" src="http://themes.g5plus.net/handmade/wp-content/themes/handmade/assets/images/flags/fr.png" alt="fr" title="French">&nbsp;French </a></li>
                                            <li class="icl-de"> <a href="#"> <img class="iclflag" src="http://themes.g5plus.net/handmade/wp-content/themes/handmade/assets/images/flags/de.png" alt="de" title="German">&nbsp;German </a></li>
                                            <li class="icl-ja"> <a href="#"> <img class="iclflag" src="http://themes.g5plus.net/handmade/wp-content/themes/handmade/assets/images/flags/ja.png" alt="ja" title="Japanese">&nbsp;Japanese </a></li>
                                         </ul> -->
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
                <div class="sidebar top-bar-right col-md-8">

                    <aside id="text-6" class="separate-right p-color widget widget_text">
                        <div class="textwidget" style=" display: flex; align-items: center; "><?=$flowers_theme_opt["header-up_bar-tagline"];?></div>
                    </aside>
                    <aside id="nav_menu-5" class="widget widget_nav_menu">
                        <div class="menu-topbar-menu-container">
                            <ul id="menu-topbar-menu" class="menu">
                                <li id="menu-item-2562" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2562"><a href="/handmade/my-account/">Время работы <?=$flowers_theme_opt["header-up_bar-work_time"];?></a></li>
                                <!-- <li id="menu-item-2563" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2563"><a href="/handmade/wishlist-2/">9 -20</a></li> -->
                                <!-- <li id="menu-item-2564" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2564"><a href="/handmade/blog/">Blog</a></li> -->
                            </ul>
                        </div>
                    </aside>
                    <aside id="g5plus-my-account-2" class="separate-left widget widget-my-account"> <a href="/handmade/my-account/">Вход</a> </aside>

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
        <div class="header-mobile-before"> <a href="/handmade/" title="HandMade - Shop WordPress WooCommerce Theme"> <img src=<?php echo get_bloginfo('template_url');?>/img/love_roses_nocrown1.png" alt="HandMade - Shop WordPress WooCommerce Theme"> </a></div>
        <div class="header-container-wrapper menu-drop-fly header-mobile-sticky">
            <div class="container header-mobile-wrapper">
                <div class="header-mobile-inner">
                    <div class="toggle-icon-wrapper toggle-mobile-menu" data-ref="nav-menu-mobile" data-drop-type="fly">
                        <div class="toggle-icon"> <span></span></div>
                    </div>
                    <div class="header-customize">
                        <div class="search-button-wrapper header-customize-item"> <a class="icon-search-menu" href="#" data-search-type="standard"><i class="wicon fa fa-search"></i></a></div>
                        <div class="shopping-cart-wrapper header-customize-item no-price style-default">
                            <div class="widget_shopping_cart_content">
                                <div class="widget_shopping_cart_icon"> <i class="wicon fa fa-shopping-cart"></i> <span class="total">0</span></div>
                                <div class="sub-total-text"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>0.00</span></div>
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
                    <form class="search-form-menu-mobile" method="get" action="http://themes.g5plus.net/handmade"> <input type="text" name="s" placeholder="Поиск..."> <button type="submit"><i class="fas fa-search"></i></button></form>
                    <ul id="menu-main-menu" class="nav-menu-mobile x-nav-menu x-nav-menu_main-menu x-animate-slide-up" data-breakpoint="991">
                        <li id="menu-item-mobile-2294" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children x-menu-item x-sub-menu-standard">
                            <a href="#" class="x-menu-a-text"><span class="x-menu-text">Главная</span></a>
                            <!-- <ul class="x-sub-menu x-sub-menu-standard x-list-style-none x-widget-area-wrapper">
                               <li id="menu-item-mobile-2489" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/home-01/" class="x-menu-a-text"><i class="x-menu-icon fa fa-location-arrow x-icon-left"></i><span class="x-menu-text">Home 01</span></a></li>
                               <li id="menu-item-mobile-2488" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-30 current_page_item x-menu-item x-sub-menu-standard"><a href="/handmade/home-02/" class="x-menu-a-text"><i class="x-menu-icon fa fa-sun-o x-icon-left"></i><span class="x-menu-text">Home 02</span></a></li>
                               <li id="menu-item-mobile-2487" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/home-03/" class="x-menu-a-text"><i class="x-menu-icon fab fa-pagelines x-icon-left"></i><span class="x-menu-text">Home 03</span></a></li>
                               <li id="menu-item-mobile-2486" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/home-04/" class="x-menu-a-text"><i class="x-menu-icon fa fa-try x-icon-left"></i><span class="x-menu-text">Home 04</span></a></li>
                               <li id="menu-item-mobile-2485" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/home-05/" class="x-menu-a-text"><i class="x-menu-icon fa fa-paw x-icon-left"></i><span class="x-menu-text">Home 05</span></a></li>
                               <li id="menu-item-mobile-2484" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/home-06/" class="x-menu-a-text"><i class="x-menu-icon fa fa-stumbleupon x-icon-left"></i><span class="x-menu-text">Home 06</span></a></li>
                               <li id="menu-item-mobile-2483" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/home-07/" class="x-menu-a-text"><i class="x-menu-icon fa fa-tree x-icon-left"></i><span class="x-menu-text">Home 07</span></a></li>
                               <li id="menu-item-mobile-2482" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/home-08/" class="x-menu-a-text"><i class="x-menu-icon fa fa-deviantart x-icon-left"></i><span class="x-menu-text">Home 08</span></a></li>
                            </ul> -->
                        </li>
                        <li id="menu-item-mobile-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                            <a href="#" class="x-menu-a-text"><span class="x-menu-text">Хиты Продаж</span></a>
                            <!-- <ul class="x-sub-menu x-sub-menu-standard x-list-style-none x-widget-area-wrapper">
                               <li id="menu-item-mobile-2496" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/contact-01/" class="x-menu-a-text"><span class="x-menu-text">Contact 01</span></a></li>
                               <li id="menu-item-mobile-2495" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/contact-02/" class="x-menu-a-text"><span class="x-menu-text">Contact 02</span></a></li>
                               <li id="menu-item-mobile-2494" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/about-us/" class="x-menu-a-text"><span class="x-menu-text">About Us</span></a></li>
                               <li id="menu-item-mobile-2493" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/about-me/" class="x-menu-a-text"><span class="x-menu-text">About Me</span></a></li>
                               <li id="menu-item-mobile-2492" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/about-team/" class="x-menu-a-text"><span class="x-menu-text">About Team</span></a></li>
                               <li id="menu-item-mobile-2490" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/f-a-q/" class="x-menu-a-text"><span class="x-menu-text">F.A.Q</span></a></li>
                               <li id="menu-item-mobile-2491" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/services/" class="x-menu-a-text"><span class="x-menu-text">Services</span></a></li>
                               <li id="menu-item-mobile-2421" class="menu-item menu-item-type-custom menu-item-object-custom x-menu-item x-sub-menu-standard"><a href="/handmade/404" class="x-menu-a-text"><span class="x-menu-text">404 Error</span></a></li>
                               <li id="menu-item-mobile-2644" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/coming-soon/" class="x-menu-a-text"><span class="x-menu-text">Coming Soon</span></a></li>
                               <li id="menu-item-mobile-2645" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/under-construction/" class="x-menu-a-text"><span class="x-menu-text">Under Construction</span></a></li>
                            </ul> -->
                        </li>
                        <li id="menu-item-mobile-2497" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children x-menu-item x-sub-menu-standard">
                            <a href="/handmade/blog/" class="x-menu-a-text"><span class="x-menu-text">Акции и Скидки</span></a>
                            <!--  <ul class="x-sub-menu x-sub-menu-standard x-list-style-none">
                                <li id="menu-item-mobile-2423" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                   <a href="#" class="x-menu-a-text"><span class="x-menu-text">Large Image Layout</span><b class="x-caret"></b></a>
                                   <ul class="x-sub-menu x-sub-menu-standard x-list-style-none">
                                      <li id="menu-item-mobile-2511" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-large-image-left-sidebar/" class="x-menu-a-text"><span class="x-menu-text">Left Sidebar</span></a></li>
                                      <li id="menu-item-mobile-2512" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-large-image-right-sidebar/" class="x-menu-a-text"><span class="x-menu-text">Right Sidebar</span></a></li>
                                      <li id="menu-item-mobile-2510" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-large-image-full-width/" class="x-menu-a-text"><span class="x-menu-text">Full Width</span></a></li>
                                   </ul>
                                </li>
                                <li id="menu-item-mobile-2424" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                   <a href="#" class="x-menu-a-text"><span class="x-menu-text">Medium Image Layout</span><b class="x-caret"></b></a>
                                   <ul class="x-sub-menu x-sub-menu-standard x-list-style-none">
                                      <li id="menu-item-mobile-2514" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-medium-image-left-sidebar/" class="x-menu-a-text"><span class="x-menu-text">Left Sidebar</span></a></li>
                                      <li id="menu-item-mobile-2515" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-medium-image-right-sidebar/" class="x-menu-a-text"><span class="x-menu-text">Right Sidebar</span></a></li>
                                      <li id="menu-item-mobile-2513" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-medium-image-full-width/" class="x-menu-a-text"><span class="x-menu-text">Full Width</span></a></li>
                                   </ul>
                                </li>
                                <li id="menu-item-mobile-2425" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                   <a href="#" class="x-menu-a-text"><span class="x-menu-text">Grid Layout</span><b class="x-caret"></b></a>
                                   <ul class="x-sub-menu x-sub-menu-standard x-list-style-none">
                                      <li id="menu-item-mobile-2520" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-grid-2-columns/" class="x-menu-a-text"><span class="x-menu-text">2 Columns</span></a></li>
                                      <li id="menu-item-mobile-2519" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-grid-3-columns/" class="x-menu-a-text"><span class="x-menu-text">3 Columns</span></a></li>
                                      <li id="menu-item-mobile-2518" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-grid-left-sidebar/" class="x-menu-a-text"><span class="x-menu-text">Left Sidebar</span></a></li>
                                      <li id="menu-item-mobile-2517" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-grid-right-sidebar/" class="x-menu-a-text"><span class="x-menu-text">Right Sidebar</span></a></li>
                                      <li id="menu-item-mobile-2516" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-grid-full-width/" class="x-menu-a-text"><span class="x-menu-text">Full Width</span></a></li>
                                   </ul>
                                </li>
                                <li id="menu-item-mobile-2449" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                   <a href="#" class="x-menu-a-text"><span class="x-menu-text">Masonry Layout</span><b class="x-caret"></b></a>
                                   <ul class="x-sub-menu x-sub-menu-standard x-list-style-none">
                                      <li id="menu-item-mobile-2541" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-masonry-2-columns-2/" class="x-menu-a-text"><span class="x-menu-text">2 Columns</span></a></li>
                                      <li id="menu-item-mobile-2540" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-masonry-3-columns/" class="x-menu-a-text"><span class="x-menu-text">3 Columns</span></a></li>
                                      <li id="menu-item-mobile-2539" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-masonry-left-sidebar/" class="x-menu-a-text"><span class="x-menu-text">Left Sidebar</span></a></li>
                                      <li id="menu-item-mobile-2538" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-masonry-right-sidebar/" class="x-menu-a-text"><span class="x-menu-text">Right Sidebar</span></a></li>
                                      <li id="menu-item-mobile-2537" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/blog-masonry-full-width/" class="x-menu-a-text"><span class="x-menu-text">Full Width</span></a></li>
                                   </ul>
                                </li>
                                <li id="menu-item-mobile-2450" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                   <a href="#" class="x-menu-a-text"><span class="x-menu-text">Single Post</span><b class="x-caret"></b></a>
                                   <ul class="x-sub-menu x-sub-menu-standard x-list-style-none x-widget-area-wrapper">
                                      <li id="menu-item-mobile-2542" class="menu-item menu-item-type-post_type menu-item-object-post x-menu-item x-sub-menu-standard"><a href="/handmade/standard-post-example/" class="x-menu-a-text"><span class="x-menu-text">Standard</span></a></li>
                                      <li id="menu-item-mobile-2543" class="menu-item menu-item-type-post_type menu-item-object-post x-menu-item x-sub-menu-standard"><a href="/handmade/image-post-example/" class="x-menu-a-text"><span class="x-menu-text">Image</span></a></li>
                                      <li id="menu-item-mobile-2544" class="menu-item menu-item-type-post_type menu-item-object-post x-menu-item x-sub-menu-standard"><a href="/handmade/gallery-post-example/" class="x-menu-a-text"><span class="x-menu-text">Gallery</span></a></li>
                                      <li id="menu-item-mobile-2545" class="menu-item menu-item-type-post_type menu-item-object-post x-menu-item x-sub-menu-standard"><a href="/handmade/amazing-youtube-video-post/" class="x-menu-a-text"><span class="x-menu-text">Video</span></a></li>
                                      <li id="menu-item-mobile-2546" class="menu-item menu-item-type-post_type menu-item-object-post x-menu-item x-sub-menu-standard"><a href="/handmade/incredible-audio-player-post/" class="x-menu-a-text"><span class="x-menu-text">Audio</span></a></li>
                                   </ul>
                                </li>
                             </ul> -->
                        </li>
                        <li id="menu-item-mobile-2440" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                            <a href="#" class="x-menu-a-text"><span class="x-menu-text">Доставка</span></a>
                            <!-- <ul class="x-sub-menu x-sub-menu-standard x-list-style-none">
                               <li id="menu-item-mobile-2441" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                  <a href="#" class="x-menu-a-text"><span class="x-menu-text">Grid Layout</span><b class="x-caret"></b></a>
                                  <ul class="x-sub-menu x-sub-menu-standard x-list-style-none x-widget-area-wrapper">
                                     <li id="menu-item-mobile-2532" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/portfolio-grid-3-columns/" class="x-menu-a-text"><span class="x-menu-text">3 Columns</span></a></li>
                                     <li id="menu-item-mobile-2533" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/portfolio-grid-4-columns/" class="x-menu-a-text"><span class="x-menu-text">4 Columns</span></a></li>
                                     <li id="menu-item-mobile-2527" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/portfolio-grid-5-columns/" class="x-menu-a-text"><span class="x-menu-text">5 Columns</span></a></li>
                                  </ul>
                               </li>
                               <li id="menu-item-mobile-2442" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                  <a href="#" class="x-menu-a-text"><span class="x-menu-text">Masonry Layout</span><b class="x-caret"></b></a>
                                  <ul class="x-sub-menu x-sub-menu-standard x-list-style-none x-widget-area-wrapper">
                                     <li id="menu-item-mobile-2531" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/portfolio-masonry-3-columns/" class="x-menu-a-text"><span class="x-menu-text">3 Columns</span></a></li>
                                     <li id="menu-item-mobile-2529" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/portfolio-masonry-3-columns-classic/" class="x-menu-a-text"><span class="x-menu-text">3 Columns Classic</span></a></li>
                                     <li id="menu-item-mobile-2530" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/portfolio-masonry-4-columns/" class="x-menu-a-text"><span class="x-menu-text">4 Columns</span></a></li>
                                     <li id="menu-item-mobile-2528" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/portfolio-masonry-one-page/" class="x-menu-a-text"><span class="x-menu-text">One Page</span></a></li>
                                  </ul>
                               </li>
                               <li id="menu-item-mobile-2443" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                  <a href="#" class="x-menu-a-text"><span class="x-menu-text">Single Portfolio</span><b class="x-caret"></b></a>
                                  <ul class="x-sub-menu x-sub-menu-standard x-list-style-none x-widget-area-wrapper">
                                     <li id="menu-item-mobile-2444" class="menu-item menu-item-type-custom menu-item-object-custom x-menu-item x-sub-menu-standard"><a href="/handmade/portfolio/aqua-project/" class="x-menu-a-text"><span class="x-menu-text">Horizontal Slider</span></a></li>
                                     <li id="menu-item-mobile-2445" class="menu-item menu-item-type-custom menu-item-object-custom x-menu-item x-sub-menu-standard"><a href="/handmade/portfolio/blue-label/" class="x-menu-a-text"><span class="x-menu-text">Vertical Slider</span></a></li>
                                     <li id="menu-item-mobile-2446" class="menu-item menu-item-type-custom menu-item-object-custom x-menu-item x-sub-menu-standard"><a href="/handmade/portfolio/all-white/" class="x-menu-a-text"><span class="x-menu-text">Small Slider</span></a></li>
                                     <li id="menu-item-mobile-2447" class="menu-item menu-item-type-custom menu-item-object-custom x-menu-item x-sub-menu-standard"><a href="/handmade/portfolio/green-label/" class="x-menu-a-text"><span class="x-menu-text">Big Slider</span></a></li>
                                  </ul>
                               </li>
                            </ul> -->
                        </li>
                        <li id="menu-item-mobile-2422" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-pos-full x-sub-menu-multi-column">
                            <a href="#" class="x-menu-a-text"><span class="x-menu-text">О Нас</span></a>
                            <!--    <ul class="x-sub-menu x-sub-menu-multi-column x-pos-full x-list-style-none">
                                  <li id="menu-item-mobile-2451" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-header-column x-sub-menu-standard x-col x-col-3-12">
                                     <a href="#" class="x-menu-a-text"><span class="x-menu-text">ShortCodes</span><b class="x-caret"></b></a>

                                  </li>
                                  <li id="menu-item-mobile-2452" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-header-column x-sub-menu-standard x-col x-col-3-12">
                                     <a href="#" class="x-menu-a-text"><span class="x-menu-text">ShortCodes</span><b class="x-caret"></b></a>

                                  </li>
                                  <li id="menu-item-mobile-2453" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-header-column x-sub-menu-standard x-col x-col-3-12">
                                     <a href="#" class="x-menu-a-text"><span class="x-menu-text">Our Features</span><b class="x-caret"></b></a>

                                  </li>
                                  <li id="menu-item-mobile-2463" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-header-column x-sub-menu-standard x-col x-col-3-12">
                                     <a href="#" class="x-menu-a-text"><span class="x-menu-text">Our Features</span><b class="x-caret"></b></a>

                                  </li>
                               </ul> -->
                        </li>
                        <li id="menu-item-mobile-2524" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children x-menu-item x-pos-full x-sub-menu-multi-column">
                            <a href="/handmade/shop/" class="x-menu-a-text"><span class="x-menu-text">Контакты</span></a>
                            <!-- <ul class="x-sub-menu x-sub-menu-multi-column x-pos-full x-list-style-none">
                               <li id="menu-item-mobile-2474" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-tabs x-disable-link x-sub-menu-tab x-col x-col-2-10">
                                  <a class="x-menu-a-text x-disable-menu-item"><span class="x-menu-text x-disable-text">Tabs Product</span><b class="x-caret"></b></a>
                                  <ul class="x-sub-menu x-sub-menu-tab x-list-style-none x-tab-position-left">
                                     <li id="menu-item-mobile-2475" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-pos-full x-sub-menu-multi-column x-has-description">
                                        <a href="#" class="x-menu-a-text"><span class="x-menu-text">Main Shop</span><b class="x-caret"></b></a>
                                        <p class="x-description">This is tab contain links your account and display styles for product.</p>
                                        <ul class="x-sub-menu x-sub-menu-multi-column x-pos-full x-list-style-none">
                                           <li id="menu-item-mobile-2427" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-header-column x-sub-menu-standard x-col x-col-3-12">
                                              <a href="#" class="x-menu-a-text"><span class="x-menu-text">Layout</span><b class="x-caret"></b></a>
                                              <ul class="x-sub-menu x-sub-menu-standard x-list-style-none">
                                                 <li id="menu-item-mobile-2476" class="menu-item menu-item-type-custom menu-item-object-custom x-menu-item x-sub-menu-standard"><a href="/handmade/shop/?layout=container&amp;sidebar=none&amp;columns=2" class="x-menu-a-text"><span class="x-menu-text">2 Columns</span></a></li>
                                                 <li id="menu-item-mobile-2477" class="menu-item menu-item-type-custom menu-item-object-custom x-menu-item x-sub-menu-standard"><a href="/handmade/shop/?layout=container&amp;sidebar=none&amp;columns=3" class="x-menu-a-text"><span class="x-menu-text">3 Columns</span></a></li>
                                                 <li id="menu-item-mobile-2428" class="menu-item menu-item-type-custom menu-item-object-custom x-menu-item x-sub-menu-standard"><a href="/handmade/shop/?layout=container&amp;sidebar=left&amp;columns=3" class="x-menu-a-text"><span class="x-menu-text">Left Sidebar</span></a></li>
                                                 <li id="menu-item-mobile-2429" class="menu-item menu-item-type-custom menu-item-object-custom x-menu-item x-sub-menu-standard"><a href="/handmade/shop/?layout=container&amp;sidebar=right&amp;columns=3" class="x-menu-a-text"><span class="x-menu-text">Right Sidebar</span></a></li>
                                                 <li id="menu-item-mobile-2426" class="menu-item menu-item-type-custom menu-item-object-custom x-menu-item x-sub-menu-standard"><a href="/handmade/shop/?layout=container&amp;sidebar=none&amp;columns=4" class="x-menu-a-text"><span class="x-menu-text">Full Width</span></a></li>
                                              </ul>
                                           </li>
                                           <li id="menu-item-mobile-2448" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-header-column x-sub-menu-standard x-col x-col-3-12">
                                              <a href="#" class="x-menu-a-text"><span class="x-menu-text">Misc Pages</span><b class="x-caret"></b></a>
                                              <ul class="x-sub-menu x-sub-menu-standard x-list-style-none">
                                                 <li id="menu-item-mobile-2534" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/cart/" class="x-menu-a-text"><span class="x-menu-text">Shopping Cart</span></a></li>
                                                 <li id="menu-item-mobile-2535" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/checkout/" class="x-menu-a-text"><span class="x-menu-text">Checkout</span></a></li>
                                                 <li id="menu-item-mobile-2551" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/order-tracking/" class="x-menu-a-text"><span class="x-menu-text">Order Tracking</span></a></li>
                                                 <li id="menu-item-mobile-2552" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/wishlist-2/" class="x-menu-a-text"><span class="x-menu-text">Wishlist</span></a></li>
                                                 <li id="menu-item-mobile-2536" class="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-sub-menu-standard"><a href="/handmade/my-account/" class="x-menu-a-text"><span class="x-menu-text">Мой аккаунт</span></a></li>
                                              </ul>
                                           </li>
                                           <li id="menu-item-mobile-2473" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-header-column x-sub-menu-standard x-col x-col-3-12">
                                              <a href="#" class="x-menu-a-text"><span class="x-menu-text">Best Sellers</span><span class="x-menu-feature">Hot</span><b class="x-caret"></b></a>
                                              <ul class="x-sub-menu x-sub-menu-standard x-list-style-none">
                                                 <li id="menu-item-mobile-2547" class="menu-item menu-item-type-post_type menu-item-object-product x-menu-item x-sub-menu-standard"><a href="/handmade/product/yellow-pillow/" class="x-menu-a-text"><span class="x-menu-text">Yellow Pillow</span></a></li>
                                                 <li id="menu-item-mobile-2549" class="menu-item menu-item-type-post_type menu-item-object-product x-menu-item x-sub-menu-standard"><a href="/handmade/product/handmade-stuffed-animals/" class="x-menu-a-text"><span class="x-menu-text">Handmade stuffed animals</span></a></li>
                                                 <li id="menu-item-mobile-2550" class="menu-item menu-item-type-post_type menu-item-object-product x-menu-item x-sub-menu-standard"><a href="/handmade/product/flower-bending/" class="x-menu-a-text"><span class="x-menu-text">Gift boxes with bow tie flower</span></a></li>
                                                 <li id="menu-item-mobile-2548" class="menu-item menu-item-type-post_type menu-item-object-product x-menu-item x-sub-menu-standard"><a href="/handmade/product/handmade-paper-stars/" class="x-menu-a-text"><span class="x-menu-text">Handmade paper stars</span></a></li>
                                              </ul>
                                           </li>
                                        </ul>
                                     </li>
                                     <li id="menu-item-mobile-2479" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-multi-column">
                                        <a href="#" class="x-menu-a-text"><span class="x-menu-text">Product Types</span><b class="x-caret"></b></a>
                                        <ul class="x-sub-menu x-sub-menu-multi-column x-list-style-none">
                                           <li id="menu-item-mobile-2560" class="menu-item menu-item-type-post_type menu-item-object-product x-menu-item x-item-image x-image-layout x-image-layout-above x-sub-menu-standard x-col x-col-3-12"><a class="x-image" <a href="/handmade/product/basket-of-wool/"><img src="http://themes.g5plus.net/handmade/wp-content/uploads/2013/06/product-04-300x300.jpg" alt="" /></a><a href="/handmade/product/basket-of-wool/" class="x-menu-a-text"><span class="x-menu-text">Simple Product</span></a></li>
                                           <li id="menu-item-mobile-2561" class="menu-item menu-item-type-post_type menu-item-object-product x-menu-item x-item-image x-image-layout x-image-layout-above x-sub-menu-standard x-col x-col-3-12"><a class="x-image" <a href="/handmade/product/greeting-cards/"><img src="http://themes.g5plus.net/handmade/wp-content/uploads/2013/06/product-11-300x300.jpg" alt="" /></a><a href="/handmade/product/greeting-cards/" class="x-menu-a-text"><span class="x-menu-text">Variable Product</span></a></li>
                                           <li id="menu-item-mobile-2558" class="menu-item menu-item-type-post_type menu-item-object-product x-menu-item x-item-image x-image-layout x-image-layout-above x-sub-menu-standard x-col x-col-3-12"><a class="x-image" <a href="/handmade/product/birthday-gifts-products/"><img src="http://themes.g5plus.net/handmade/wp-content/uploads/2013/06/product-18-300x300.jpg" alt="" /></a><a href="/handmade/product/birthday-gifts-products/" class="x-menu-a-text"><span class="x-menu-text">Group Product</span></a></li>
                                           <li id="menu-item-mobile-2559" class="menu-item menu-item-type-post_type menu-item-object-product x-menu-item x-item-image x-image-layout x-image-layout-above x-sub-menu-standard x-col x-col-3-12"><a class="x-image" <a href="/handmade/product/wool-knit-scarf-coat/"><img src="http://themes.g5plus.net/handmade/wp-content/uploads/2013/06/product-01-300x300.jpg" alt="" /></a><a href="/handmade/product/wool-knit-scarf-coat/" class="x-menu-a-text"><span class="x-menu-text">External/Affiliate Product</span></a></li>
                                        </ul>
                                     </li>
                                  </ul>
                               </li>
                            </ul> -->
                        </li>
                        <li id="menu-item-mobile-2478" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-pos-full x-item-image x-image-layout x-image-layout-above x-sub-menu-multi-column">
                            <a href="#" class="x-menu-a-text"><span class="x-menu-text">Отзывы</span></a>
                            <!--  <ul class="x-sub-menu x-sub-menu-multi-column x-pos-full x-list-style-none">
                                <li id="menu-item-mobile-2553" class="menu-item menu-item-type-post_type menu-item-object-post x-menu-item x-item-image x-image-layout x-image-layout-above x-sub-menu-standard x-col x-col-2-10"><a class="x-image" <a href="/handmade/i-love-my-life-very-much/"><img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/08/news-01-300x200.jpg" alt="" /></a><a href="/handmade/i-love-my-life-very-much/" class="x-menu-a-text"><span class="x-menu-text">I Love My Life Very Much</span></a></li>
                                <li id="menu-item-mobile-2554" class="menu-item menu-item-type-post_type menu-item-object-post x-menu-item x-item-image x-image-layout x-image-layout-above x-sub-menu-standard x-col x-col-2-10"><a class="x-image" <a href="/handmade/here-are-many-variations-of-passages/"><img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/08/news-02-300x200.jpg" alt="" /></a><a href="/handmade/here-are-many-variations-of-passages/" class="x-menu-a-text"><span class="x-menu-text">Here Are Many Variations Of Passages</span></a></li>
                                <li id="menu-item-mobile-2555" class="menu-item menu-item-type-post_type menu-item-object-post x-menu-item x-item-image x-image-layout x-image-layout-above x-sub-menu-standard x-col x-col-2-10"><a class="x-image" <a href="/handmade/inteligent-transitions-in-ux-design/"><img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/08/news-03-300x200.jpg" alt="" /></a><a href="/handmade/inteligent-transitions-in-ux-design/" class="x-menu-a-text"><span class="x-menu-text">Inteligent Transitions In Ux Design</span></a></li>
                                <li id="menu-item-mobile-2556" class="menu-item menu-item-type-post_type menu-item-object-post x-menu-item x-item-image x-image-layout x-image-layout-above x-sub-menu-standard x-col x-col-2-10"><a class="x-image" <a href="/handmade/standard-post-example/"><img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/07/news-04-300x200.jpg" alt="" /></a><a href="/handmade/standard-post-example/" class="x-menu-a-text"><span class="x-menu-text">Standard Post Example</span></a></li>
                                <li id="menu-item-mobile-2557" class="menu-item menu-item-type-post_type menu-item-object-post x-menu-item x-item-image x-image-layout x-image-layout-above x-sub-menu-standard x-col x-col-2-10"><a class="x-image" <a href="/handmade/image-post-example/"><img src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/06/news-05-300x200.jpg" alt="" /></a><a href="/handmade/image-post-example/" class="x-menu-a-text"><span class="x-menu-text">Image Post Example</span></a></li>
                             </ul> -->
                        </li>
                    </ul>
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
                <div class="header-logo"> <a href="/handmade/" title="HandMade - Shop WordPress WooCommerce Theme"> <img src=<?php echo get_bloginfo('template_url');?>/img/love_roses_nocrown1.png" alt="HandMade - Shop WordPress WooCommerce Theme" /> </a></div>
                <div class="fr">
                    <div class="header-customize header-customize-right header-customize-separate">
                        <div class="custom-text-wrapper header-customize-item">
                            <div class="contact-info"> <i class="fas fa-phone"></i> <?=$flowers_theme_opt['header-phone'];?></div>
                        </div>
                        <div class="shopping-cart-wrapper header-customize-item with-price">
                            <div class="widget_shopping_cart_content">
                                <div class="widget_shopping_cart_icon"> <i class="wicon fa fa-shopping-cart"></i> <span class="total">0</span></div>
                                <div class="sub-total-text"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>0.00</span></div>
                                <div class="cart_list_wrapper">
                                    <ul class="cart_list product_list_widget ">
                                        <li class="empty">
                                            <h4>Ваша корзина пуста</h4>
                                            <p>В вашей корзине нет товаров</p>
                                        </li>
                                    </ul>
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
            <div class="container">
                <div class="header-wrapper">
                    <div class="header-left">
                        <div id="primary-menu" class="menu-wrapper">
                            <ul id="main-menu" class="main-menu x-nav-menu x-nav-menu_main-menu x-animate-slide-up" data-breakpoint="991">
                                <li class="logo-sticky"> <a href="/handmade/" title="HandMade - Shop WordPress WooCommerce Theme"> <img src="<?php echo get_bloginfo('template_url');?>/img/king.png" alt="HandMade - Shop WordPress WooCommerce Theme"/> </a></li>
                                <li id="menu-item-2294" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="#" class="x-menu-a-text"><span class="x-menu-text">Главная</span></a>
                                </li>
                                <!-- <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                   <a href="#" class="x-menu-a-text"><span class="x-menu-text">Цветы</span><b class="x-caret"></b></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                   <a href="#" class="x-menu-a-text"><span class="x-menu-text">Десерты</span><b class="x-caret"></b></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                   <a href="#" class="x-menu-a-text"><span class="x-menu-text">Игрушки</span><b class="x-caret"></b></a>
                                </li> -->
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="#" class="x-menu-a-text"><span class="x-menu-text">Хит продаж</span></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="#" class="x-menu-a-text"><span class="x-menu-text">Акции и скидки</span></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="#" class="x-menu-a-text"><span class="x-menu-text">Доставка</span></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="#" class="x-menu-a-text"><span class="x-menu-text">О Нас</span></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="#" class="x-menu-a-text"><span class="x-menu-text">Контакты</span></a>
                                </li>
                                <li id="menu-item-2295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children x-menu-item x-sub-menu-standard">
                                    <a href="#" class="x-menu-a-text"><span class="x-menu-text">Отзывы</span></a>
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
                <form method="get" action="#" class="search-popup-inner"> <input type="text" name="s" placeholder="Поиск..."> <button type="submit">Поиск</button></form>
                <div><button class="action" data-dialog-close="close" type="button"><i class="fas fa-close"></i></button></div>
            </div>
        </div>
    </div>