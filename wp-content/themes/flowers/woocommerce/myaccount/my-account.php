<?php
/**
 * My Account page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/my-account.php.
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
 * @version 2.6.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
//
//wc_print_notices();
//
///**
// * My Account navigation.
// * @since 2.6.0
// */
//do_action( 'woocommerce_account_navigation' ); ?>
<!---->
<!--<div class="woocommerce-MyAccount-content">-->
<!--	--><?php
//		/**
//		 * My Account content.
//		 * @since 2.6.0
//		 */
//		do_action( 'woocommerce_account_content' );
//	?>
<!--</div>-->
<?php
$current_user = wp_get_current_user();
//var_dump($current_user);
//$getmemid = $current_user->user_login;
$name = $current_user->user_login;
//var_dump($getmemid );
?>
<!--111-->
<style>
    .title_page{
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
    }

    .nav_buttons{
        display: flex;
        justify-content: space-between;
    }
    .nav_buttons_item{
        margin: 10px 0px;
        display: flex;
        justify-content: center;
    }
    .button nav_buttons_item_link{}

    .change-acc_link{
        padding: 0px 5px;

    }
    .change-acc_link p{
        color: #811a15;
    }
    .commit-content_title{
        width: 100%;
    }
   .commit-content{
       padding: 10px;
       margin: 10px 0px;
   }
   .commit-content_btn{

   }
    div.wpcf7-mail-sent-ok{
        border: 2px solid #fce2e5;
    }
</style>
<div class="container">
    <div class="row title_page">
        <h1>Здравствуйте, <?=$name;?>!</h1>
<!--        <a href="#">сменить аккаунт</a>-->
        <a href="<?=wp_logout_url( get_permalink( woocommerce_get_page_id( 'shop' ) ) ) ?>" class="change-acc_link"><p>сменить аккаунт</p></a>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="row col-12">
                <h3>Избранное:</h3>

                <div class="owl-carousel owl-theme">
                    <div class="item"><h4>1</h4></div>
                    <div class="item"><h4>2</h4></div>
                    <div class="item"><h4>3</h4></div>
                    <div class="item"><h4>4</h4></div>
                    <div class="item"><h4>5</h4></div>
                    <div class="item"><h4>6</h4></div>
                    <div class="item"><h4>7</h4></div>
                    <div class="item"><h4>8</h4></div>
                    <div class="item"><h4>9</h4></div>
                    <div class="item"><h4>10</h4></div>
                    <div class="item"><h4>11</h4></div>
                    <div class="item"><h4>12</h4></div>
                </div>

               <?=do_shortcode('[alg_wc_wl]');?>

            </div>
            <div class="row col-12 nav_buttons">
<!--                <button class="buttton">На Главную</button>-->
                <div class="col-lg-6 col-md-12 col-sm-12 nav_buttons_item">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="button nav_buttons_item_link">На Главную</a>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 nav_buttons_item">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>shop" class="button nav_buttons_item_link">В Магазин</a>
                </div>

<!--                <button class="buttton">В Магазин</button>-->


            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="row col-12">
                <h3 class="commit-content_title">Ваша скидка 10%</h3>

                <?=do_shortcode('[contact-form-7 id="94" title="Без названия"]');?>
<!--                <textarea name="" id="" cols="30" rows="10" placeholder="Оставьте свой отзыв, он очень важен для нас"></textarea>-->
<!--                <button class="buttton">Отправить</button>-->
            </div>
        </div>
    </div>
</div>
