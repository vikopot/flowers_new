<?php
/**
 * flowers functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package flowers
 */

if ( ! function_exists( 'flowers_setup' ) ) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function flowers_setup() {
        /*
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         * If you're building a theme based on flowers, use a find and replace
         * to change 'flowers' to the name of your theme in all the template files.
         */
        load_theme_textdomain( 'flowers', get_template_directory() . '/languages' );

        // Add default posts and comments RSS feed links to head.
        add_theme_support( 'automatic-feed-links' );

        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support( 'title-tag' );

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support( 'post-thumbnails' );

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus( array(
            'menu-1' => esc_html__( 'Primary', 'flowers' ),
        ) );

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support( 'html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ) );

        // Set up the WordPress core custom background feature.
        add_theme_support( 'custom-background', apply_filters( 'flowers_custom_background_args', array(
            'default-color' => 'ffffff',
            'default-image' => '',
        ) ) );

        // Add theme support for selective refresh for widgets.
        add_theme_support( 'customize-selective-refresh-widgets' );

        /**
         * Add support for core custom logo.
         *
         * @link https://codex.wordpress.org/Theme_Logo
         */
        add_theme_support( 'custom-logo', array(
            'height'      => 250,
            'width'       => 250,
            'flex-width'  => true,
            'flex-height' => true,
        ) );
    }
endif;
add_action( 'after_setup_theme', 'flowers_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function flowers_content_width() {
    // This variable is intended to be overruled from themes.
    // Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
    // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
    $GLOBALS['content_width'] = apply_filters( 'flowers_content_width', 640 );
}
add_action( 'after_setup_theme', 'flowers_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function flowers_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Sidebar', 'flowers' ),
        'id'            => 'sidebar-1',
        'description'   => esc_html__( 'Add widgets here.', 'flowers' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );
}
add_action( 'widgets_init', 'flowers_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function flowers_scripts() {
    wp_enqueue_style( 'flowers-style', get_stylesheet_uri() );

    wp_enqueue_script( 'flowers-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

    wp_enqueue_script( 'flowers-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'flowers_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';


/**
 * redux config
 */
require get_template_directory() . '/inc/sample-config.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
    require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
    require get_template_directory() . '/inc/woocommerce.php';
}


function my_enqueue_stuff() {





    // <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    wp_enqueue_style( 'flowers-bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');

    /*    <link rel="stylesheet" href="<?php echo get_bloginfo('template_url');?>/layouts/6b6cf80f85e258f63952c28df862c487.css" data-minify="1" />*/

//    wp_enqueue_script('flowers-jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
//    wp_enqueue_script( 'flowers-bootstrap_js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js');
//
//
    /*    <link rel="stylesheet" href="<?php echo get_bloginfo('template_url');?>/layouts/6b6cf80f85e258f63952c28df862c487.css" data-minify="1" />*/
//    wp_enqueue_style('flowers-main_css',get_template_directory_uri(). '/layouts/6b6cf80f85e258f63952c28df862c487.css');


//    wp_enqueue_script('flowers-second_js', get_template_directory_uri() . '/js/1e2d507c5610e2750f2f3a3c173602ca.js');//atr - data-minify="1"




    //push
    // <script charset="UTF-8" src="//cdn.sendpulse.com/js/push/14aa881f8080b6a5a1fa5c698ced7c61_0.js" async></script>
    wp_enqueue_script( 'flowers-push', '//cdn.sendpulse.com/js/push/14aa881f8080b6a5a1fa5c698ced7c61_0.js');


    if ( is_product() ) {
        // wp_enqueue_style( 'flowers-single_product', 'http://themes.g5plus.net/handmade/wp-content/themes/handmade/g5plus-framework/xmenu/assets/css/style.css');
        wp_enqueue_style( 'flowers-single_product_css', get_template_directory_uri() . '/layouts/product.css');
        wp_enqueue_style( 'carousel-css', get_template_directory_uri() . '/owlcarousel/owl.carousel.min.css');
        wp_enqueue_style( 'carousel-css_theme_default', get_template_directory_uri() . '/owlcarousel/owl.theme.default.min.css');
        wp_enqueue_script( 'carousel_js', get_template_directory_uri() . '/owlcarousel/owl.carousel.min.js');
        wp_deregister_style('flowers-bootstrap');
    } else {
        /** Call regular enqueue */
    }


    if ( is_cart() ) {
        wp_enqueue_style( 'flowers-cart', get_template_directory_uri() . '/layouts/cart.css');
    }


    if ( is_checkout() ) {
        wp_enqueue_style( 'flowers-checkout', get_template_directory_uri() . '/layouts/checkout.css');
    wp_deregister_style('flowers-bootstrap');//конфликтует с классами wc
    }

    if( is_account_page() )
    {
        wp_deregister_style('flowers-bootstrap');
    }
    //гость
    if( is_page('8') && !is_user_logged_in() ){
    	  wp_enqueue_style( 'flowers-checkout', get_template_directory_uri() . '/layouts/my_account.css');
    }
    //юзер
    if( is_page('8') && is_user_logged_in() ){
        wp_enqueue_style( 'flowers-checkout', get_template_directory_uri() . '/layouts/my_account_logged.css');
    }


    //    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    //wp_enqueue_script( 'flowers-jqeury', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
}
add_action( 'wp_enqueue_scripts', 'my_enqueue_stuff' );

//убирем <meta name="generator" ...>
remove_action('wp_head', 'wp_generator');

// НЕРАБОТАЕТ (НЕ ТО)
// add_action( 'woocommerce_before_mini_cart', 'wc_mini_cart_before' );
// function wc_mini_cart_before(){
// 	echo '<div class="cart_list_wrapper">';
// }

// add_action( 'woocommerce_after_mini_cart', 'wc_mini_cart_after' );
// function wc_mini_cart_after(){
// 	echo '</div>';
// }
// НЕРАБОТАЕТ (НЕ ТО)



// function custom_mini_cart() {
//     return '<div class="shopping-cart-wrapper header-customize-item with-price">
//     <div class="widget_shopping_cart_content">
//                        <div class="widget_shopping_cart_icon">
//                         <i class="wicon fa fa-shopping-cart"></i>
//                         <span class="total">'.
//                          WC()->cart->get_cart_contents_count().
//                          '</span>
//                            </div>
//                            <div class="sub-total-text">
//                            <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">?</span>0.00</span>
//                             </div>
//                           <div class="cart_list_wrapper">
//                         //. woocommerce_mini_cart()
//                          </div>
//                          </div>';


//       }
//        add_shortcode( 'custom-techno-mini-cart', 'custom_mini_cart' );


/*ajax cart*/
add_filter( 'woocommerce_add_to_cart_fragments', function($fragments) {

    ob_start();
    ?>

    <span class="total">
        <?php echo WC()->cart->get_cart_contents_count(); ?>
    </span>

    <?php $fragments['span.total'] = ob_get_clean();

    return $fragments;

} );

/*
add_filter( 'woocommerce_add_to_cart_fragments', function($fragments) {

    ob_start();
    ?>

    <div class="header-quickcart">
        <?php woocommerce_mini_cart(); ?>
    </div>

    <?php $fragments['div.header-quickcart'] = ob_get_clean();

    return $fragments;

} );*/


// function get_product_category_by_id( $category_id ) {
//     $term = get_term_by( 'id', $category_id, 'product_cat', 'ARRAY_A' );
//     return $term['name'];
// }




// echo get_post_type( get_the_ID() );



/*ярляк on sale*/
add_filter('woocommerce_sale_flash', 'woocommerce_custom_sale_text', 10, 3);
function woocommerce_custom_sale_text($text, $post, $_product)
{
    return '<span></span>';
}

/*get current template*/
//add_action('wp_head', 'show_template');
//function show_template() {
//    global $template;
//    echo basename($template);
//}
//

add_filter( 'wp_nav_menu_items', 'add_loginout_link', 10, 2 );

function add_loginout_link( $items, $args ) {

    if (is_user_logged_in() ) {

        $items .= '<li><a href="'. wp_logout_url( get_permalink( woocommerce_get_page_id( 'myaccount' ) ) ) .'">Log Out</a></li>';

    }

    elseif (!is_user_logged_in() ) {

        $items .= '<li><a href="' . get_permalink( wc_get_page_id( 'myaccount' ) ) . '">Log In</a></li>';

    }

    return $items;

}

//echo do_shortcode('[logout]');
//отключение купона на странице оформление заказа(уведомление "у вас есть купон?")
remove_action( 'woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form', 10 );

// hide coupon field on cart page
function hide_coupon_field_on_cart( $enabled ) {
    if ( is_cart() ) {
        $enabled = false;
    }
    return $enabled;
}
add_filter( 'woocommerce_coupons_enabled', 'hide_coupon_field_on_cart' );
// hide coupon field on checkout page
function hide_coupon_field_on_checkout( $enabled ) {
    if ( is_checkout() ) {
        $enabled = false;
    }
    return $enabled;
}
add_filter( 'woocommerce_coupons_enabled', 'hide_coupon_field_on_checkout' );


/**
 * Remove password strength check.
 */
function iconic_remove_password_strength() {
    wp_dequeue_script( 'wc-password-strength-meter' );
}
add_action( 'wp_print_scripts', 'iconic_remove_password_strength', 10 );



//<?php
//ADD TO CART FUNCTION
add_action('wp_footer', 'my_custom_wc_button_script');
function my_custom_wc_button_script() {
    ?>
    <script>
        jQuery(document).ready(function($) {
            var ajaxurl = "<?php echo esc_attr( admin_url( 'admin-ajax.php' ) ); ?>";
            $( document.body).on('click', '.my-custom-add-to-cart-button', function(e) {
                e.preventDefault();
                var $this = $(this);
                if( $this.is(':disabled') ) {
                    return;
                }
                var id = $(this).data("product-id");
                var data = {
                    action     : 'my_custom_add_to_cart',
                    product_id : id
                };
                $.post(ajaxurl, data, function(response) {
                    if( response.success ) {
                        $this.text("added to cart");
                        $this.attr('disabled', 'disabled');
                        $( document.body ).trigger( 'wc_fragment_refresh' );
                    }
                }, 'json');
            })
        });
    </script>
    <?php
}
add_action('wp_ajax_my_custom_add_to_cart', "my_custom_add_to_cart");
add_action('wp_ajax_nopriv_my_custom_add_to_cart', "my_custom_add_to_cart");
function my_custom_add_to_cart() {
    $retval = array(
        'success' => false,
        'message' => ""
    );
    if( !function_exists( "WC" ) ) {
        $retval['message'] = "woocommerce not installed";
    } elseif( empty( $_POST['product_id'] ) ) {
        $retval['message'] = "no product id provided";
    } else {
        $product_id = $_POST['product_id'];
        if( my_custom_cart_contains( $product_id ) ) {
            $retval['message'] = "product already in cart";
        } else {
            $cart = WC()->cart;
            $retval['success'] = $cart->add_to_cart( $product_id );
            if( !$retval['success'] ) {
                $retval['message'] = "product could not be added to cart";
            } else {
                $retval['message'] = "product added to cart";
            }
        }
    }
    echo json_encode( $retval );
    wp_die();
}
function my_custom_cart_contains( $product_id ) {
    $cart = WC()->cart;
    $cart_items = $cart->get_cart();
    if( $cart_items ) {
        foreach( $cart_items as $item ) {
            $product = $item['data'];
            if( $product_id == $product->id ) {
                return true;
            }
        }
    }
    return false;
}


// disable the magnification zoom in product images
//убирем зум(увеличение при наведении на картинку товара(на странице товара))
add_action( 'template_redirect', function() {
    remove_theme_support( 'wc-product-gallery-zoom' );
//    remove_theme_support( 'wc-product-gallery-lightbox' );
//    remove_theme_support( 'wc-product-gallery-slider' );
}, 100 );
?>
