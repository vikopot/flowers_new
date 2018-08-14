<?php /* Template Name: home*/ ?>
<?#var_dump($flowers_theme_opt);

?>

<!--<ul class="products">-->
<?php
//    $args = array(
//        'post_type' => 'product',
//        'posts_per_page' => 12
//    );
//    $loop = new WP_Query( $args );
//    if ( $loop->have_posts() ) {
//        while ( $loop->have_posts() ) : $loop->the_post();
//            var_dump($product->get_id());
//            echo $product->get_name();
//            echo $product->get_price();
//            the_permalink();
//            ?><!-- <img src="--><?//=get_the_post_thumbnail_url( $product->get_id(), 'thumbnail' );?><!--" alt="">--><?//
//        endwhile;
//    } else {
//        echo __( 'No products found' );
//    }
//    wp_reset_postdata();
//
//    ?>
<!--</ul>-->

<? get_header(); ?>
         <div id="wrapper-content" class="clearfix">
            <main class="site-content-page">
               <div class="site-content-page-inner ">
                  <div class="page-content" style="margin-top: 0px;">
                     <div id="post-30" class="post-30 page type-page status-publish hentry">
                        <div class="entry-content" style="margin-top: 0px;">
                           <div class="container">
                              <div class="vc_row wpb_row vc_row-fluid" style="margin-bottom: 20px !important;"><!--вместо  vc_custom_1443867642165-->
                                 <!-- <div class="col-md-9 col-sm-12 sm-margin-bottom-30 wpb_column vc_column_container vc_col-sm-9">
                                    <div class="vc_column-inner ">
                                       <div class="wpb_wrapper">
                                          <div class="handmade-banner custom   bot-left">
                                             <div class="bg-img" style="height:490px; background-image: url(http://themes.g5plus.net/handmade/wp-content/uploads/2015/09/banner-home-2.jpg);"></div>
                                             <div class="overlay-banner">
                                                <a class="link-banner" title="" target="_self" href="#">
                                                   <div class="content-middle">
                                                      <div class="content-middle-inner">
                                                         <h2>Эксклюзивные букеты</h2>
                                                         <span class="sub-title">Читать...</span>
                                                      </div>
                                                   </div>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div> -->

<style type="text/css">
   .carousel-item p{
      font-size: 14px;
          /*font-family: gothic;*/
   }
   .carousel-item h5,
   .carousel-item p{
      font-family: 'gothic';
      color: #898383;
   }
@media(min-width:1200px){
   /*.carousel-item img{*/
      /*height: 490px;*/
   /*}*/
 }
   
   .carousel-item button.slider_btn{
       padding: 10px 30px;
       /*color: #b78933;
       background:  #fce2e5 ;*/
       color: #fff;
       background:  #b78933;
       border: #ffffff00 ;


       -webkit-transition: all .25s;
    -moz-transition: all .25s;
    -ms-transition: all .25s;
    -o-transition: all .25s;
    transition: all .25s;
   }
   .carousel-item button.slider_btn:hover{
      color: #b78933;
       background:  #fce2e5 ;
       border: #ffffff00 ;
      /*color: #fce2e5;*/
       /*background:  #b78933;*/
   }
   .carousel-item button.slider_btn:focus{
      color: #b78933;
       background:  #fce2e5 ;
       border: #ffffff00 ;
      box-shadow: none !important;
   }
   .carousel-item button.slider_btn:active{
      color: #b78933;
       background:  #fce2e5 ;
       border: #ffffff00 ;
       box-shadow: none !important;
   }
   article.carousel-caption{
      background-image: url('<?php echo get_bloginfo('template_url');?>/img/aside8.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
   }


   .carousel-item {
       height: 100vh;
       min-height: 300px;
       background: no-repeat center center scroll;
       -webkit-background-size: cover;
       -moz-background-size: cover;
       -o-background-size: cover;
       background-size: cover;
   }

   @media(max-width:1024px){
       .carousel-item{
           height: 45vh;
       }
   }
   @media(min-width: 992px) and (max-width: 1366px){
       .carousel-item{
           height: 70vh;
       }
   }
   /*@media(min-width:992px){*/
       /*.carousel-item{*/
           /*height: 490px;*/
       /*}*/
   /*}*/

</style>

          <div class="col-md-12 col-sm-12 sm-margin-bottom-30 wpb_column vc_column_container vc_col-sm-9">
               <div id="carousel1_indicator" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                        <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel1_indicator" data-slide-to="1"></li>
                        <li data-target="#carousel1_indicator" data-slide-to="2"></li>
                      </ol>
  <div class="carousel-inner">
    <div class="carousel-item active" style="background-image: url('https://static.tildacdn.com/tild6139-3838-4161-b633-643461643932/11.png')">

<!--     <img class="d-block w-100" src="https://static.tildacdn.com/tild6139-3838-4161-b633-643461643932/11.png" alt="Third slide">-->
      <article class="carousel-caption d-none d-md-block">
       <h5>Добро пожаловать в Love Roses</h5>
       <!--<p>Добро пожаловать в Flowers Boutique</p>-->
      <button type="button" class="btn  slider_btn" style="    margin: 5px;">Купить</button>
     </article> <!-- carousel-caption .// -->
      <article class="carousel-caption hidden-md-up" style="display: flex;justify-content: center;background: none;">
         <button type="button" class="btn  slider_btn" style="    margin: 5px;">Подробнее</button>
      </article>
    </div>
<!--      <div class="carousel-item" style="background-image: url('http://placehold.it/1900x1080')">-->
<!--          <div class="carousel-caption d-none d-md-block">-->
<!--              <h3>First Slide</h3>-->
<!--              <p>This is a description for the first slide.</p>-->
<!--          </div>-->
<!--      </div>-->
    <div class="carousel-item" style="background-image: url(<?=get_bloginfo('template_url');?>/img/slide1.jpg)">
<!--      <img class="d-block w-100" src="--><?php //echo get_bloginfo('template_url');?><!--/img/slide1.jpg" alt="Second slide">-->
      <article class="carousel-caption d-md-block">
       <h5>Third slide label</h5>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt</p>
      <button type="button" class="btn slider_btn" style="    margin: 5px;">Купить</button>
     </article> <!-- carousel-caption .// -->
     <article class="carousel-caption hidden-md-up" style="display: flex;justify-content: center;background: none;">
         <button type="button" class="btn  slider_btn" style="    margin: 5px;">Купить</button>
      </article>
    </div>
    <div class="carousel-item" style="background-image: url(<?=get_bloginfo('template_url');?>/img/slide2.JPG)">
<!--      <img class="d-block w-100" src="--><?php //echo get_bloginfo('template_url');?><!--/img/slide2.JPG" alt="Third slide">-->
      <article class="carousel-caption d-md-block">
       <h5>Third slide label</h5>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt</p>
      <button type="button" class="btn slider_btn" style="    margin: 5px;">Купить</button>
     </article> <!-- carousel-caption .// -->
     <article class="carousel-caption hidden-md-up" style="display: flex;justify-content: center;background: none;">
         <button type="button" class="btn  slider_btn" style="    margin: 5px;">Купить</button>
      </article>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!--              <script src="https://blackrockdigital.github.io/startbootstrap-full-slider/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>-->


<style type="text/css">
   .sc-product-categories-home-wrap li a{
      font-family: 'gothic';
   }
   .sc-product-categories-home-wrap li:last-child{
      border-bottom: none; 
   }
   .vc_column-inner .wpb_wrapper ul.product-categories-home.row li{
      background-image: url('<?php echo get_bloginfo('template_url');?>/img/catalog_block.png');
      background-size: 100%;
       margin: 5px;
       height: 100px;
       align-items: center;
       display: flex;
       justify-content: center;
       padding: 0px;
   }
   .vc_column-inner .wpb_wrapper ul.product-categories-home.row li:first-child{
        margin-left: 0px;
    }
   .vc_column-inner .wpb_wrapper ul.product-categories-home.row li:last-child{
       margin-right: 0px;
   }
   .sc-product-categories-home-wrap.p-color-bg.style-02{
       background: none;
       padding-left: 0px;
       padding-right: 0px;
   }

</style>
                                 <div class="col-md-12 col-sm-12 wpb_column vc_column_container vc_col-sm-3">
                                    <div class="vc_column-inner " style="padding: 0px">
                                       <div class="wpb_wrapper">
                                          <div data-height="490" class="sc-product-categories-home-wrap p-color-bg style-02">


                                             <ul class="product-categories-home row">
                                                <li class="col-lg col-md col-sm"><a href="/handmade/product-category/every-day/" title="Every Day">Все товары</a></li>
                                                <li class="col-lg col-md col-sm"><a href="http://www.kolopar.xyz/product-category/%d1%86%d0%b2%d0%b5%d1%82%d1%8b/" title="Uncategorized">Цветы</a></li>
                                                <li class="col-lg col-md col-sm"><a href="http://www.kolopar.xyz/product-category/%d0%b4%d0%b5%d1%81%d0%b5%d1%80%d1%82%d1%8b/" title="Special Goods">Десерты</a></li>
                                                <li class="col-lg col-md col-sm"><a href="http://www.kolopar.xyz/product-category/%d0%b8%d0%b3%d1%80%d1%83%d1%88%d0%ba%d0%b8/" title="Romantic">Игрушки</a></li>
                                                <li class="col-lg col-md col-sm"><a href="http://www.kolopar.xyz/product-category/%d1%88%d0%b0%d1%80%d1%8b/" title="Personal">Шары</a></li>
                                             </ul>
                                             
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                            <style type="text/css">
                              .handmade-post-content{
                                 text-align: center;
                              }
                              .entry-thumbnail{ display: flex; justify-content: center; }
                              .entry-thumbnail i { font-size: 60px; padding-top: 20%; }

                              /*btn next prev*/
                              div.owl-buttons{
                                 display: none;
                              }
                              .entry-thumbnail_overlay img.about_img{
                                 width: 70px;
                                 color: #b88a30;
                              }
                              .entry-thumbnail_overlay i{
                                 color: #b88a30;
                              }
                           </style>
                           <div class="container" id="bl5">
                              <div class="vc_row wpb_row vc_row-fluid margin-bottom-70">
                                 <div class="wpb_column vc_column_container vc_col-sm-12">
                                    <div class="vc_column-inner ">
                                       <div class="wpb_wrapper">
                                          <div class="handmade-post ">
                                             <h2>О Нас</h2>
                                             <div class="handmade-line"></div>
                                             <div class="row">
                                                <div data-plugin-options='{&quot;autoPlay&quot;: true, &quot;items&quot;:3,&quot;itemsDesktop&quot;:[1199, 3],&quot;itemsDesktopSmall&quot;:[980, 3],&quot;itemsTablet&quot;:[768, 1], &quot;pagination&quot;:false, &quot;navigation&quot;:true}' class="owl-carousel">
                                                   <div class="handmade-post-item">
                                                      <div class="handmade-post-image">
                                                         <div class="entry-thumbnail"> <a href="/handmade/here-are-many-variations-of-passages/" title="Here Are Many Variations Of Passages" class="entry-thumbnail_overlay"> <img src="https://static.tildacdn.com/tild3639-6533-4634-a332-313438373863/icons8-flowers-100.png" alt="Опытные кондитеры" width="100" height="100" class="about_img"><!-- <i class="fas fa-gift"></i> --> </a> <a data-rel="prettyPhoto" <a href="/handmade/wp-content/uploads/2015/08/news-02.jpg" class="prettyPhoto"><i class="fas fa-expand"></i></a></div>
                                                         <div class="handmade-post-image-overlay"> <!-- <a class="handmade-post-readmore" <a href="/handmade/here-are-many-variations-of-passages/" title="Here Are Many Variations Of Passages">READ MORE </a> --></div>
                                                      </div>
                                                      <div class="handmade-post-content">
                                                         <h3><a href="#" rel="bookmark" title="Image Post Example">Подарок на любой вкус</a></h3>
                                                         <div class="post-entry-meta p-color"> <span class="handmade-post-date"><!-- June 1, 2015 --></span> | <span class="handmade-post-author"><a href="/handmade/author/admin/"><!-- admin --></a></span></div>
                                                         <p>Наше главное направление - флористика, но мы можем предложить Вам всевозможные варианты подарка!</p>
                                                      </div>
                                                   </div>
                                                   <div class="handmade-post-item">
                                                      <div class="handmade-post-image">
                                                         <div class="entry-thumbnail"> 
                                                            <a href="/handmade/here-are-many-variations-of-passages/" title="Here Are Many Variations Of Passages" class="entry-thumbnail_overlay"> 
                                                               <img src="https://static.tildacdn.com/tild3036-6632-4365-a334-333363316136/icons8-delivered-100.png" alt="Опытные кондитеры" width="100" height="100" class="about_img"><!-- <i class="fas fa-box"></i> --> 
                                                            </a> 
                                                            <!-- <a data-rel="prettyPhoto" <a href="/handmade/wp-content/uploads/2015/08/news-02.jpg" class="prettyPhoto"><!-- <i class="fas fa-expand"></i> --> 
                                                               
                                                            </a>
                                                         </div>
                                                         <div class="handmade-post-image-overlay"> <!-- <a class="handmade-post-readmore" <a href="/handmade/here-are-many-variations-of-passages/" title="Here Are Many Variations Of Passages">READ MORE </a> --></div>
                                                      </div>
                                                      <div class="handmade-post-content">
                                                         <h3><a href="#" rel="bookmark" title="Image Post Example">Доставка</a></h3>
                                                         <div class="post-entry-meta p-color"> <span class="handmade-post-date"><!-- June 1, 2015 --></span> | <span class="handmade-post-author"><a href="/handmade/author/admin/"><!-- admin --></a></span></div>
                                                         <p>Наши курьеры преднесут подарок именно так. как этого хотиты Вы.</p>
                                                      </div>
                                                   </div>
                                                   <div class="handmade-post-item">
                                                      <div class="handmade-post-image">
                                                         <div class="entry-thumbnail">
                                                            <a href="/handmade/here-are-many-variations-of-passages/" title="Here Are Many Variations Of Passages" class="entry-thumbnail_overlay">
                                                               <img src="<?php echo get_bloginfo('template_url');?>/img/gift.png" alt="Опытные кондитеры" width="100" height="100" class="about_img"><!-- <i class="fab fa-gratipay"></i> -->
                                                            </a>
                                                            <!-- <a data-rel="prettyPhoto" <a href="/handmade/wp-content/uploads/2015/08/news-02.jpg" class="prettyPhoto"> -->
                                                               <!-- <i class="fas fa-expand"></i> -->
                                                            </a>
                                                         </div>
                                                         <div class="handmade-post-image-overlay"> <!-- <a class="handmade-post-readmore" <a href="/handmade/here-are-many-variations-of-passages/" title="Here Are Many Variations Of Passages">READ MORE </a> -->    
                                                         </div>
                                                      </div>
                                                      <div class="handmade-post-content">
                                                         <h3><a href="#" rel="bookmark" title="Image Post Example">Авторский подарок</a></h3>
                                                         <div class="post-entry-meta p-color"> <span class="handmade-post-date"><!-- June 1, 2015 --></span> | <span class="handmade-post-author"><a href="/handmade/author/admin/"><!-- admin --></a></span></div>
                                                         <p>Вы можете сами выбрать каждую деталь Вашего подарка!</p>
                                                      </div>
                                                   </div>
                                                   <div class="handmade-post-item">
                                                      <div class="handmade-post-image">
                                                         <div class="entry-thumbnail"> <a href="/handmade/here-are-many-variations-of-passages/" title="Here Are Many Variations Of Passages" class="entry-thumbnail_overlay"> <img src="https://static.tildacdn.com/tild3133-3630-4431-b634-663161633038/icons8-card-payment-.png" alt="Опытные кондитеры" width="100" height="100" class="about_img"><!-- <i class="far fa-credit-card"></i> --> </a> <a data-rel="prettyPhoto" <a href="/handmade/wp-content/uploads/2015/08/news-02.jpg" class="prettyPhoto"><i class="fas fa-expand"></i></a></div>
                                                         <div class="handmade-post-image-overlay"> <!-- <a class="handmade-post-readmore" <a href="/handmade/here-are-many-variations-of-passages/" title="Here Are Many Variations Of Passages">READ MORE </a> --></div>
                                                      </div>
                                                      <div class="handmade-post-content">
                                                         <h3><a href="#" rel="bookmark" title="Image Post Example">Оплата</a></h3>
                                                         <div class="post-entry-meta p-color"> <span class="handmade-post-date"><!-- June 1, 2015 --></span> | <span class="handmade-post-author"><a href="/handmade/author/admin/"><!-- admin --></a></span></div>
                                                         <p>мы позаботились о том, чтобы у Вас не возникло проблем с оплатой подарка! Оплата курьером или картой*</p>
                                                      </div>
                                                   </div>
                                                   <div class="handmade-post-item">
                                                      <div class="handmade-post-image">
                                                         <div class="entry-thumbnail"> <a href="/handmade/here-are-many-variations-of-passages/" title="Here Are Many Variations Of Passages" class="entry-thumbnail_overlay"> <img src="<?php echo get_bloginfo('template_url');?>/img/birthday-cake.png" alt="Опытные кондитеры" width="100" height="100" class="about_img"><!-- <i class="fas fa-birthday-cake"></i> --> <a data-rel="prettyPhoto" <a href="/handmade/wp-content/uploads/2015/08/news-02.jpg" class="prettyPhoto"><i class="fas fa-expand"></i></a></div>
                                                         <div class="handmade-post-image-overlay"> <!-- <a class="handmade-post-readmore" <a href="/handmade/here-are-many-variations-of-passages/" title="Here Are Many Variations Of Passages">READ MORE </a> --></div>
                                                      </div>
                                                      <div class="handmade-post-content">
                                                         <h3><a href="#" rel="bookmark" title="Image Post Example">Свежие десерты</a></h3>
                                                         <div class="post-entry-meta p-color"> <span class="handmade-post-date"><!-- June 1, 2015 --></span> | <span class="handmade-post-author"><a href="/handmade/author/admin/"><!-- admin --></a></span></div>
                                                         <p>Мы не храним готовые десерты, а готовим их индивидуально для Вас!</p>
                                                      </div>
                                                   </div>
                                                   <div class="handmade-post-item">
                                                      <div class="handmade-post-image">
                                                         <div class="entry-thumbnail"> <a href="/handmade/here-are-many-variations-of-passages/" title="Here Are Many Variations Of Passages" class="entry-thumbnail_overlay"> <img src="<?php echo get_bloginfo('template_url');?>/img/chef.png" alt="Опытные кондитеры" width="100" height="100" class="about_img"> </a> <a data-rel="prettyPhoto" <a href="/handmade/wp-content/uploads/2015/08/news-02.jpg" class="prettyPhoto"><i class="fas fa-expand"></i></a></div>
                                                         <div class="handmade-post-image-overlay"> <!-- <a class="handmade-post-readmore" <a href="/handmade/here-are-many-variations-of-passages/" title="Here Are Many Variations Of Passages">READ MORE </a> --></div>
                                                      </div>
                                                      <div class="handmade-post-content">
                                                         <h3><a href="#" rel="bookmark" title="Image Post Example">Опытные кондитеры</a></h3>
                                                         <div class="post-entry-meta p-color"> <span class="handmade-post-date"><!-- June 1, 2015 --></span> | <span class="handmade-post-author"><a href="/handmade/author/admin/"><!-- admin --></a></span></div>
                                                         <p>Наши кондитеры готовят вкусные десерты, при этом делая их в соответствии с нормами полезного питания!</p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <style type="text/css">
                              .vc_tta-style-tab_style1 .vc_tta-tab.vc_active > a span, .handmade-vertical-progress-bar .vc_single_bar .vc_label_units, .handmade-icon-box.style2:hover .ibox-icon i, .handmade-icon-box .ibox-icon, .handmade-icon-box h3:hover a, .handmade-titles span, .handmade-banner a span.sub-title, .p-color, .p-color-hover:hover, ul.breadcrumbs li + li:before, .blog-inner h3.entry-title a:hover, .handmade-post h3.entry-title a:hover, .blog-inner article.format-link .entry-content-link a:hover, .handmade-post article.format-link .entry-content-link a:hover, .woocommerce div.product span.price ins, .woocommerce div.product p.price ins, .woocommerce div.product p.price, .woocommerce div.product span.price, .search-form input[type="text"]:focus + button, .search-form button[type="submit"]:hover, #wp-calendar tbody a, .sidebar ul.product_list_widget li a:hover, .wpb_widgetised_column ul.product_list_widget li a:hover, .sidebar ul.product_list_widget li span.amount, .wpb_widgetised_column ul.product_list_widget li span.amount, .product-listing.woocommerce .product-name a:hover, .portfolio-item a:hover i, .entry-content a, .comment-text a, .entry-content a:hover, .comment-text a:hover, .sidebar .widget-social-profile ul.social-profile li a, .wpb_widgetised_column .widget-social-profile ul.social-profile li a, .top-bar .sidebar i.fa, .shopping-cart-wrapper.with-price .widget_shopping_cart_content .widget_shopping_cart_icon > i.wicon, .shopping-cart-wrapper .widget_shopping_cart_content .cart_list_wrapper li .cart-right > a:hover, header.main-header i.fa, .custom-select:before, .woocommerce .woocommerce-ordering:after, .woocommerce-page-size:after, .product-listing.woocommerce .product-actions .yith-wcwl-wishlistaddedbrowse a, .product-listing.woocommerce .product-actions .yith-wcwl-wishlistexistsbrowse a, .product-listing.woocommerce .product-actions .added_to_cart.wc-forward, .site-content-single-product .single-product-info .summary-product-wrap form.cart .group_table td.price, .site-content-single-product .single-product-info .summary-product-wrap .single-product-function .yith-wcwl-wishlistaddedbrowse a:hover, .site-content-single-product .single-product-info .summary-product-wrap .single-product-function .yith-wcwl-wishlistexistsbrowse a:hover, .site-content-single-product .single-product-info .summary-product-wrap .single-product-function .yith-wcwl-add-button a.add_to_wishlist:hover, .site-content-single-product .single-product-info .summary-product-wrap .single-product-function a.compare:hover, .site-content-single-product .single-product-info .summary-product-wrap .single-product-function .compare.added:before, .site-content-single-product .single-product-info .summary-product-wrap .single-product-function .yith-wcwl-wishlistexistsbrowse a:before, .site-content-single-product .single-product-info .summary-product-wrap .single-product-function .yith-wcwl-wishlistaddedbrowse a:before, .site-content-single-product .single-product-info .summary-product-wrap .product_meta > span a, .woocommerce div.product .woocommerce-tabs ul.tabs li.active a, .woocommerce div.product .woocommerce-tabs ul.tabs li:hover a, .woocommerce table.shop_table.cart tbody td.product-name .product-name-wrap .product-name-inner a:hover, .woocommerce table.shop_table.cart td.product-price, .woocommerce table.shop_table.cart td.product-subtotal, .woocommerce-cart .cart-collaterals .cart_totals table .cart-subtotal td, .woocommerce-cart .cart-collaterals .cart_totals table .order-total td, .woocommerce-cart .cart-collaterals .cart_totals table .cart-subtotal strong, .woocommerce-cart .cart-collaterals .cart_totals table .order-total strong, .woocommerce ul#shipping_method .amount, .woocommerce table.woocommerce-checkout-review-order-table thead th, .woocommerce table.shop_table.order_details thead th, .woocommerce table.woocommerce-checkout-review-order-table .cart-subtotal td, .woocommerce table.shop_table.order_details .cart-subtotal td, .woocommerce table.woocommerce-checkout-review-order-table .order-total td, .woocommerce table.shop_table.order_details .order-total td, .woocommerce table.woocommerce-checkout-review-order-table .cart-subtotal th, .woocommerce table.shop_table.order_details .cart-subtotal th, .woocommerce table.woocommerce-checkout-review-order-table .order-total th, .woocommerce table.shop_table.order_details .order-total th, .woocommerce table.shop_table.cart.wishlist_table td.product-name a:hover, .sc-product-sidebar-wrap span.amount, .sc-product-sidebar-wrap .owl-theme .owl-controls .owl-buttons div:hover, .sc-product-sidebar-wrap .comment a.title:hover, .contact-form-7-slider-wrap .form-submit input[type="submit"], .i-location:before, .i-phone:before, .i-mail:before, .i-clock:before, .blog-inner .jp-play-pause i, .handmade-post .jp-play-pause i, .blog-inner article.format-quote .entry-content-quote blockquote cite, .handmade-post article.format-quote .entry-content-quote blockquote cite, .sidebar .widget_archive li > a:hover, .wpb_widgetised_column .widget_archive li > a:hover, .sidebar .widget_categories li > a:hover, .wpb_widgetised_column .widget_categories li > a:hover, .sidebar .widget_pages li > a:hover, .wpb_widgetised_column .widget_pages li > a:hover, .sidebar .widget_meta li > a:hover, .wpb_widgetised_column .widget_meta li > a:hover, .sidebar .widget_recent_comments li > a:hover, .wpb_widgetised_column .widget_recent_comments li > a:hover, .sidebar .widget_recent_entries li > a:hover, .wpb_widgetised_column .widget_recent_entries li > a:hover, .sidebar .widget_rss li > a:hover, .wpb_widgetised_column .widget_rss li > a:hover, .sidebar .widget_nav_menu > div li > a:hover, .wpb_widgetised_column .widget_nav_menu > div li > a:hover, .sidebar .widget_product_categories li > a:hover, .wpb_widgetised_column .widget_product_categories li > a:hover, .sidebar .widget_layered_nav li > a:hover, .wpb_widgetised_column .widget_layered_nav li > a:hover, .sidebar .widget_archive li.current-cat > a, .wpb_widgetised_column .widget_archive li.current-cat > a, .sidebar .widget_categories li.current-cat > a, .wpb_widgetised_column .widget_categories li.current-cat > a, .sidebar .widget_pages li.current-cat > a, .wpb_widgetised_column .widget_pages li.current-cat > a, .sidebar .widget_meta li.current-cat > a, .wpb_widgetised_column .widget_meta li.current-cat > a, .sidebar .widget_recent_comments li.current-cat > a, .wpb_widgetised_column .widget_recent_comments li.current-cat > a, .sidebar .widget_recent_entries li.current-cat > a, .wpb_widgetised_column .widget_recent_entries li.current-cat > a, .sidebar .widget_rss li.current-cat > a, .wpb_widgetised_column .widget_rss li.current-cat > a, .sidebar .widget_nav_menu > div li.current-cat > a, .wpb_widgetised_column .widget_nav_menu > div li.current-cat > a, .sidebar .widget_product_categories li.current-cat > a, .wpb_widgetised_column .widget_product_categories li.current-cat > a, .sidebar .widget_layered_nav li.current-cat > a, .wpb_widgetised_column .widget_layered_nav li.current-cat > a, .sidebar .widget_archive li.current-menu-item > a, .wpb_widgetised_column .widget_archive li.current-menu-item > a, .sidebar .widget_categories li.current-menu-item > a, .wpb_widgetised_column .widget_categories li.current-menu-item > a, .sidebar .widget_pages li.current-menu-item > a, .wpb_widgetised_column .widget_pages li.current-menu-item > a, .sidebar .widget_meta li.current-menu-item > a, .wpb_widgetised_column .widget_meta li.current-menu-item > a, .sidebar .widget_recent_comments li.current-menu-item > a, .wpb_widgetised_column .widget_recent_comments li.current-menu-item > a, .sidebar .widget_recent_entries li.current-menu-item > a, .wpb_widgetised_column .widget_recent_entries li.current-menu-item > a, .sidebar .widget_rss li.current-menu-item > a, .wpb_widgetised_column .widget_rss li.current-menu-item > a, .sidebar .widget_nav_menu > div li.current-menu-item > a, .wpb_widgetised_column .widget_nav_menu > div li.current-menu-item > a, .sidebar .widget_product_categories li.current-menu-item > a, .wpb_widgetised_column .widget_product_categories li.current-menu-item > a, .sidebar .widget_layered_nav li.current-menu-item > a, .wpb_widgetised_column .widget_layered_nav li.current-menu-item > a, .sidebar .widget-twitter-wrap i, .wpb_widgetised_column .widget-twitter-wrap i, .sidebar .widget-twitter-wrap span.twitter-content a:hover, .wpb_widgetised_column .widget-twitter-wrap span.twitter-content a:hover, .sidebar .mail-chimp-wrapper .mail-chimp-button > button, .wpb_widgetised_column .mail-chimp-wrapper .mail-chimp-button > button, .sidebar ul.instagram-pics + p, .wpb_widgetised_column ul.instagram-pics + p, .sidebar .widget-posts-wrap .widget-posts-title:hover, .wpb_widgetised_column .widget-posts-wrap .widget-posts-title:hover, #g5plus-modal-search .g5plus-dismiss-modal:hover, #g5plus-modal-search .ajax-search-result li:hover > a, #g5plus-modal-search .ajax-search-result li.selected > a, #search_popup_wrapper .search-popup-inner > button, .social.icon-text a i, footer.main-footer-wrapper .sidebar .widget_archive li > a:hover, footer.main-footer-wrapper .sidebar .widget_categories li > a:hover, footer.main-footer-wrapper .sidebar .widget_product_categories li > a:hover, footer.main-footer-wrapper .sidebar .widget_nav_menu > div li > a:hover, footer.main-footer-wrapper .sidebar .widget_meta li > a:hover, footer.main-footer-wrapper .sidebar .widget_pages li > a:hover, footer.main-footer-wrapper .sidebar .widget_recent_comments li > a:hover, footer.main-footer-wrapper .sidebar .widget_recent_entries li > a:hover, footer.main-footer-wrapper .sidebar .widget_rss li > a:hover, footer.main-footer-wrapper .sidebar .widget_archive li.current-cat > a, footer.main-footer-wrapper .sidebar .widget_categories li.current-cat > a, footer.main-footer-wrapper .sidebar .widget_product_categories li.current-cat > a, footer.main-footer-wrapper .sidebar .widget_nav_menu > div li.current-cat > a, footer.main-footer-wrapper .sidebar .widget_meta li.current-cat > a, footer.main-footer-wrapper .sidebar .widget_pages li.current-cat > a, footer.main-footer-wrapper .sidebar .widget_recent_comments li.current-cat > a, footer.main-footer-wrapper .sidebar .widget_recent_entries li.current-cat > a, footer.main-footer-wrapper .sidebar .widget_rss li.current-cat > a, footer.main-footer-wrapper .sidebar .widget_archive li.current-menu-item > a, footer.main-footer-wrapper .sidebar .widget_categories li.current-menu-item > a, footer.main-footer-wrapper .sidebar .widget_product_categories li.current-menu-item > a, footer.main-footer-wrapper .sidebar .widget_nav_menu > div li.current-menu-item > a, footer.main-footer-wrapper .sidebar .widget_meta li.current-menu-item > a, footer.main-footer-wrapper .sidebar .widget_pages li.current-menu-item > a, footer.main-footer-wrapper .sidebar .widget_recent_comments li.current-menu-item > a, footer.main-footer-wrapper .sidebar .widget_recent_entries li.current-menu-item > a, footer.main-footer-wrapper .sidebar .widget_rss li.current-menu-item > a, footer.main-footer-wrapper .sidebar .widget-footer-logo .footer-logo-read-more a, footer.main-footer-wrapper .sidebar .widget-footer-logo .footer-logo-read-more > span, footer.main-footer-wrapper .sidebar aside.widget-social-profile.footer-social-icon span, footer.main-footer-wrapper .main-footer .footer-contact-form span.wpcf7-not-valid-tip, footer.main-footer-wrapper .bottom-bar-wrapper .bottom-bar-text a, .post-navigation .nav-previous:hover .post-navigation-icon, .post-navigation .nav-next:hover .post-navigation-icon, .post-navigation .nav-previous:hover .post-navigation-title, .post-navigation .nav-next:hover .post-navigation-title, .top-bar .sidebar a:hover, .shopping-cart-wrapper .widget_shopping_cart_content .widget_shopping_cart_icon > i.wicon, .shopping-cart-wrapper .widget_shopping_cart_content .cart_list_wrapper li .cart-right > a:hover, .shopping-cart-wrapper.with-price .widget_shopping_cart_content .widget_shopping_cart_icon > i.wicon, .handmade-view-demo h3 a:hover, .site-content-single-product .single-product-info .summary-product-wrap h1.product_title a:hover, .top-bar .sidebar .widget #lang_sel > ul > li > a:after{
                                 color: black;
                              }
                           </style>
                           <div class="container" id="bl2">
                              <div class="vc_row wpb_row vc_row-fluid">
                                 <div class="wpb_column vc_column_container vc_col-sm-12">
                                    <div class="vc_column-inner ">
                                       <div class="wpb_wrapper">
                                          <div class="vc_tta-container" data-vc-action="collapse">
                                             <h2>Хиты продаж</h2>
                                             <div class="vc_general vc_tta vc_tta-tabs vc_tta-color-grey vc_tta-style-tab_style1 vc_tta-shape-square vc_tta-o-shape-group vc_tta-gap-20 vc_tta-o-no-fill vc_tta-tabs-position-top vc_tta-controls-align-right">
                                                <div class="vc_tta-tabs-container">
                                                   <ul class="vc_tta-tabs-list">
                                                      <li class="vc_tta-tab vc_active" data-vc-tab><a href="#birthday-gifts" data-vc-tabs data-vc-container=".vc_tta"><span class="vc_tta-title-text">Цветы</span></a></li>
                                                       <li class="vc_tta-tab" data-vc-tab><a href="#decor-art" data-vc-tabs data-vc-container=".vc_tta"><span class="vc_tta-title-text"> Десерты </span></a></li> 
                                                       <li class="vc_tta-tab" data-vc-tab><a href="#special-goods" data-vc-tabs data-vc-container=".vc_tta"><span class="vc_tta-title-text">Игрушки</span></a></li>
                                                       <li class="vc_tta-tab" data-vc-tab><a href="#birthday-gifts1" data-vc-tabs data-vc-container=".vc_tta"><span class="vc_tta-title-text">Шары</span></a></li>
                                                   </ul>
                                                </div>
                                                <div class="vc_tta-panels-container">
                                                   <div class="vc_tta-panels">
                                                      <div class="vc_tta-panel vc_active" id="birthday-gifts" data-vc-content=".vc_tta-panel-body">
                                                         <div class="vc_tta-panel-heading">
                                                            <h4 class="vc_tta-panel-title"><a href="#birthday-gifts" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Цветы</span></a></h4>
                                                         </div>
                                                         <div class="vc_tta-panel-body">
                                                            <div class="woocommerce sc-product-wrap   no-title">
                                                               <div class="product-listing woocommerce clearfix columns-4">
                                                                  <div class="product-item-wrap rating-visible post-2239 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts first instock sale shipping-taxable product-type-grouped">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://cdn2.flowwow.com/data/flowers/270x300/52/1503683180_95494952.jpg 600w, https://cdn2.flowwow.com/data/flowers/270x300/52/1503683180_95494952.jpg 150w, https://cdn2.flowwow.com/data/flowers/270x300/52/1503683180_95494952.jpg 300w, https://cdn2.flowwow.com/data/flowers/270x300/52/1503683180_95494952.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://cdn2.flowwow.com/data/flowers/270x300/52/1503683180_95494952.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/birthday-gifts-products/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/birthday-gifts-products/?action=yith-woocompare-add-product&amp;id=2239" class="compare" data-product_id="2239"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-2239">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=2239" rel="nofollow" data-product-id="2239" data-product-type="grouped" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="2239" <a href="/handmade/product/birthday-gifts-products/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="View products"><a rel="nofollow" <a href="/handmade/product/birthday-gifts-products/" data-quantity="1" data-product_id="2239" data-product_sku="" class="button product_type_grouped btn_add_to_cart"><i class="fas fa-shopping-cart"></i> View products</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/birthday-gifts-products/">Birthday Gifts Grouped</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>35.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1569 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-every-day product_cat-personal product_tag-birthday product_tag-every-day product_tag-person product_tag-women  instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-new product-flash">New</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://fiberam-market.ru/images/products/73705399.jpg 600w, https://fiberam-market.ru/images/products/73705399.jpg 150w, https://fiberam-market.ru/images/products/73705399.jpg 300w, https://fiberam-market.ru/images/products/73705399.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/yellow-pillow/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/yellow-pillow/?action=yith-woocompare-add-product&amp;id=1569" class="compare" data-product_id="1569"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1569">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1569" rel="nofollow" data-product-id="1569" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1569" <a href="/handmade/product/yellow-pillow/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1569" data-quantity="1" data-product_id="1569" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/yellow-pillow/">Yellow Pillow</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1567 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-birthday product_tag-jewelry product_tag-person  instock sale shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">12.5%</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://cdn3.flowwow.com/data/flowers/270x300/51/1509803055_34794351.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://cdn3.flowwow.com/data/flowers/270x300/51/1509803055_34794351.jpg 600w, https://cdn3.flowwow.com/data/flowers/270x300/51/1509803055_34794351.jpg 150w, https://cdn3.flowwow.com/data/flowers/270x300/51/1509803055_34794351.jpg 300w, https://cdn3.flowwow.com/data/flowers/270x300/51/1509803055_34794351.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://cdn3.flowwow.com/data/flowers/270x300/51/1509803055_34794351.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/bracelets-with-names/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/bracelets-with-names/?action=yith-woocompare-add-product&amp;id=1567" class="compare" data-product_id="1567"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1567">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1567" rel="nofollow" data-product-id="1567" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1567" <a href="/handmade/product/bracelets-with-names/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1567" data-quantity="1" data-product_id="1567" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:60%">Rated <strong class="rating">3.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/bracelets-with-names/">Bracelets With Names</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>35.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1566 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-every-day product_cat-illumination product_cat-jewelry product_cat-personal product_tag-birthday product_tag-every-day product_tag-jewelry product_tag-person last instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="hhttps://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://cdn2.flowwow.com/data/flowers/270x300/76/1506259572_33249376.jpg 600w, https://cdn2.flowwow.com/data/flowers/270x300/76/1506259572_33249376.jpg 150w, https://cdn2.flowwow.com/data/flowers/270x300/76/1506259572_33249376.jpg 300w, https://cdn2.flowwow.com/data/flowers/270x300/76/1506259572_33249376.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://cdn2.flowwow.com/data/flowers/270x300/76/1506259572_33249376.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/knit-handmade-bracelets-2/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/knit-handmade-bracelets-2/?action=yith-woocompare-add-product&amp;id=1566" class="compare" data-product_id="1566"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1566">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1566" rel="nofollow" data-product-id="1566" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1566" <a href="/handmade/product/knit-handmade-bracelets-2/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1566" data-quantity="1" data-product_id="1566" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/knit-handmade-bracelets-2/">Knit Handmade Bracelets</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1565 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-every-day product_cat-jewelry product_cat-personal product_tag-birthday product_tag-jewelry product_tag-person first instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://cdn3.flowwow.com/data/flowers/270x300/41/1503657671_5340541.jpg 600w, https://cdn3.flowwow.com/data/flowers/270x300/41/1503657671_5340541.jpg 150w, https://cdn3.flowwow.com/data/flowers/270x300/41/1503657671_5340541.jpg 300w, https://cdn3.flowwow.com/data/flowers/270x300/41/1503657671_5340541.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://cdn3.flowwow.com/data/flowers/270x300/41/1503657671_5340541.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/colorful-bracelet/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/colorful-bracelet/?action=yith-woocompare-add-product&amp;id=1565" class="compare" data-product_id="1565"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1565">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1565" rel="nofollow" data-product-id="1565" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1565" <a href="/handmade/product/colorful-bracelet/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1565" data-quantity="1" data-product_id="1565" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/colorful-bracelet/">Colorful Bracelet</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1559 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-birthday product_tag-jewelry product_tag-person  instock sale shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">25%</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://cdn2.flowwow.com/data/flowers/270x300/33/1503657543_14863933.jpg 600w, https://cdn2.flowwow.com/data/flowers/270x300/33/1503657543_14863933.jpg 150w, https://cdn2.flowwow.com/data/flowers/270x300/33/1503657543_14863933.jpg 300w, https://cdn2.flowwow.com/data/flowers/270x300/33/1503657543_14863933.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://cdn2.flowwow.com/data/flowers/270x300/33/1503657543_14863933.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/knit-from-wool-bracelets/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/knit-from-wool-bracelets/?action=yith-woocompare-add-product&amp;id=1559" class="compare" data-product_id="1559"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1559">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1559" rel="nofollow" data-product-id="1559" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1559" <a href="/handmade/product/knit-from-wool-bracelets/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1559" data-quantity="1" data-product_id="1559" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/knit-from-wool-bracelets/">Knit From Wool Bracelets</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>30.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1558 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-illumination product_cat-jewelry product_cat-personal product_tag-birthday product_tag-illumination product_tag-jewelry product_tag-person  instock shipping-taxable purchasable product-type-variable">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"><span class="on-hot product-flash">Hot</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://cdn3.flowwow.com/data/flowers/270x300/82/1506260664_95963782.jpg 600w, https://cdn3.flowwow.com/data/flowers/270x300/82/1506260664_95963782.jpg 150w, https://cdn3.flowwow.com/data/flowers/270x300/82/1506260664_95963782.jpg 300w, https://cdn3.flowwow.com/data/flowers/270x300/82/1506260664_95963782.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://cdn3.flowwow.com/data/flowers/270x300/82/1506260664_95963782.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/friendship-bracelets/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/friendship-bracelets/?action=yith-woocompare-add-product&amp;id=1558" class="compare" data-product_id="1558"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1558">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1558" rel="nofollow" data-product-id="1558" data-product-type="variable" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1558" <a href="/handmade/product/friendship-bracelets/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Select options"><a rel="nofollow" <a href="/handmade/product/friendship-bracelets/" data-quantity="1" data-product_id="1558" data-product_sku="" class="button product_type_variable add_to_cart_button btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Select options</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:40%">Rated <strong class="rating">2.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/friendship-bracelets/">Friendship Bracelets</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>45.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1555 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-illumination product_cat-romantic product_cat-special-goods product_tag-birthday product_tag-illumination product_tag-romatic product_tag-special-goods last instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-new product-flash">New</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://cdn3.flowwow.com/data/flowers/270x300/42/1503684971_37114242.jpg 600w, https://cdn3.flowwow.com/data/flowers/270x300/42/1503684971_37114242.jpg 150w, https://cdn3.flowwow.com/data/flowers/270x300/42/1503684971_37114242.jpg 300w, https://cdn3.flowwow.com/data/flowers/270x300/42/1503684971_37114242.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://cdn3.flowwow.com/data/flowers/270x300/42/1503684971_37114242.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/flower-bending/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/flower-bending/?action=yith-woocompare-add-product&amp;id=1555" class="compare" data-product_id="1555"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1555">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1555" rel="nofollow" data-product-id="1555" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1555" <a href="/handmade/product/flower-bending/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1555" data-quantity="1" data-product_id="1555" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/flower-bending/">Flower Bending</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>35.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                      <div class="vc_tta-panel" id="decor-art" data-vc-content=".vc_tta-panel-body">
                                                         <div class="vc_tta-panel-heading">
                                                            <h4 class="vc_tta-panel-title"><a href="#decor-art" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Десерты</span></a></h4>
                                                         </div>
                                                         <div class="vc_tta-panel-body">
                                                            <div class="woocommerce sc-product-wrap   no-title">
                                                               <div class="product-listing woocommerce clearfix columns-4">
                                                                  <div class="product-item-wrap rating-visible post-1569 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-every-day product_cat-personal product_tag-birthday product_tag-every-day product_tag-person product_tag-women first instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-new product-flash">New</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MADE_NICE-copy.w710.h473.jpg 600w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MADE_NICE-copy.w710.h473.jpg 150w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MADE_NICE-copy.w710.h473.jpg 300w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MADE_NICE-copy.w710.h473.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MADE_NICE-copy.w710.h473.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/yellow-pillow/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/yellow-pillow/?action=yith-woocompare-add-product&amp;id=1569" class="compare" data-product_id="1569"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1569">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1569" rel="nofollow" data-product-id="1569" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1569" <a href="/handmade/product/yellow-pillow/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1569" data-quantity="1" data-product_id="1569" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/yellow-pillow/">Yellow Pillow</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1567 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-birthday product_tag-jewelry product_tag-person  instock sale shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">12.5%</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MAR_DE_ZAHR_3-copy.w710.h473.jpgg 600w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MAR_DE_ZAHR_3-copy.w710.h473.jpg 150w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MAR_DE_ZAHR_3-copy.w710.h473.jpg 300w, hhttps://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MAR_DE_ZAHR_3-copy.w710.h473.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MAR_DE_ZAHR_3-copy.w710.h473.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/bracelets-with-names/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/bracelets-with-names/?action=yith-woocompare-add-product&amp;id=1567" class="compare" data-product_id="1567"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1567">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1567" rel="nofollow" data-product-id="1567" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1567" <a href="/handmade/product/bracelets-with-names/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1567" data-quantity="1" data-product_id="1567" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:60%">Rated <strong class="rating">3.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/bracelets-with-names/">Bracelets With Names</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>35.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1566 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-every-day product_cat-illumination product_cat-jewelry product_cat-personal product_tag-birthday product_tag-every-day product_tag-jewelry product_tag-person  instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/CHEFS_CLUB-copy.w710.h473.jpg 600w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/CHEFS_CLUB-copy.w710.h473.jpg 150w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/CHEFS_CLUB-copy.w710.h473.jpg 300w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/CHEFS_CLUB-copy.w710.h473.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/CHEFS_CLUB-copy.w710.h473.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/knit-handmade-bracelets-2/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/knit-handmade-bracelets-2/?action=yith-woocompare-add-product&amp;id=1566" class="compare" data-product_id="1566"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1566">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1566" rel="nofollow" data-product-id="1566" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1566" <a href="/handmade/product/knit-handmade-bracelets-2/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1566" data-quantity="1" data-product_id="1566" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/knit-handmade-bracelets-2/">Knit Handmade Bracelets</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1565 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-every-day product_cat-jewelry product_cat-personal product_tag-birthday product_tag-jewelry product_tag-person last instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/D_ANSEL_COLD_BREW-copy.w710.h473.jpg 600w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/D_ANSEL_COLD_BREW-copy.w710.h473.jpg 150w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/D_ANSEL_COLD_BREW-copy.w710.h473.jpg 300w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/D_ANSEL_COLD_BREW-copy.w710.h473.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/D_ANSEL_COLD_BREW-copy.w710.h473.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/colorful-bracelet/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/colorful-bracelet/?action=yith-woocompare-add-product&amp;id=1565" class="compare" data-product_id="1565"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1565">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1565" rel="nofollow" data-product-id="1565" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1565" <a href="/handmade/product/colorful-bracelet/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1565" data-quantity="1" data-product_id="1565" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/colorful-bracelet/">Colorful Bracelet</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1559 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-birthday product_tag-jewelry product_tag-person first instock sale shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">25%</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MISTER_DIPPS-copy.w710.h473.jpg 600w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MISTER_DIPPS-copy.w710.h473.jpg 150w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MISTER_DIPPS-copy.w710.h473.jpg 300w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MISTER_DIPPS-copy.w710.h473.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/MISTER_DIPPS-copy.w710.h473.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/knit-from-wool-bracelets/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/knit-from-wool-bracelets/?action=yith-woocompare-add-product&amp;id=1559" class="compare" data-product_id="1559"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1559">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1559" rel="nofollow" data-product-id="1559" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1559" <a href="/handmade/product/knit-from-wool-bracelets/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1559" data-quantity="1" data-product_id="1559" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/knit-from-wool-bracelets/">Knit From Wool Bracelets</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>30.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1558 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-illumination product_cat-jewelry product_cat-personal product_tag-birthday product_tag-illumination product_tag-jewelry product_tag-person  instock shipping-taxable purchasable product-type-variable">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"><span class="on-hot product-flash">Hot</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/ROBERTAS_BAKERY-copy.w710.h473.jpg 600w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/ROBERTAS_BAKERY-copy.w710.h473.jpg 150w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/ROBERTAS_BAKERY-copy.w710.h473.jpg 300w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/ROBERTAS_BAKERY-copy.w710.h473.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/ROBERTAS_BAKERY-copy.w710.h473.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/friendship-bracelets/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/friendship-bracelets/?action=yith-woocompare-add-product&amp;id=1558" class="compare" data-product_id="1558"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1558">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1558" rel="nofollow" data-product-id="1558" data-product-type="variable" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1558" <a href="/handmade/product/friendship-bracelets/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Select options"><a rel="nofollow" <a href="/handmade/product/friendship-bracelets/" data-quantity="1" data-product_id="1558" data-product_sku="" class="button product_type_variable add_to_cart_button btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Select options</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:40%">Rated <strong class="rating">2.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/friendship-bracelets/">Friendship Bracelets</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>45.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1557 product type-product status-publish has-post-thumbnail product_cat-every-day product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-every-day product_tag-jewelry product_tag-special-goods  instock sale shipping-taxable product-type-external">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">11.1%</span> <span class="on-new product-flash">New</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/LILIA_CHOCOLATE_VANILLA_SWIRL-copy.w710.h473.jpg 600w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/LILIA_CHOCOLATE_VANILLA_SWIRL-copy.w710.h473.jpg 150w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/LILIA_CHOCOLATE_VANILLA_SWIRL-copy.w710.h473.jpg 300w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/LILIA_CHOCOLATE_VANILLA_SWIRL-copy.w710.h473.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/LILIA_CHOCOLATE_VANILLA_SWIRL-copy.w710.h473.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/wool-knit-scarf-coat/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/wool-knit-scarf-coat/?action=yith-woocompare-add-product&amp;id=1557" class="compare" data-product_id="1557"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1557">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1557" rel="nofollow" data-product-id="1557" data-product-type="external" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1557" <a href="/handmade/product/wool-knit-scarf-coat/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Buy Product"><a rel="nofollow" href="http://themeforest.net/user/g5theme" data-quantity="1" data-product_id="1557" data-product_sku="" class="button product_type_external btn_add_to_cart"><i class="fas fa-info"></i> Buy Product</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/wool-knit-scarf-coat/">Wool Knit Scarf-Coat</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>45.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1553 product type-product status-publish has-post-thumbnail product_cat-every-day product_cat-personal product_cat-special-goods product_tag-every-day product_tag-person product_tag-special-goods last instock sale shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">25%</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/OLMSTEAD_2-copy.w710.h473.jpg 600w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/OLMSTEAD_2-copy.w710.h473.jpg 150w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/OLMSTEAD_2-copy.w710.h473.jpg 300w, https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/OLMSTEAD_2-copy.w710.h473.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://pixel.nymag.com/imgs/daily/grub/2017/07/10/ice-cream/OLMSTEAD_2-copy.w710.h473.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/funny-wool-basket/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/funny-wool-basket/?action=yith-woocompare-add-product&amp;id=1553" class="compare" data-product_id="1553"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1553">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1553" rel="nofollow" data-product-id="1553" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1553" <a href="/handmade/product/funny-wool-basket/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1553" data-quantity="1" data-product_id="1553" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:60%">Rated <strong class="rating">3.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/funny-wool-basket/">Funny Wool Basket</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>30.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>






<!-- 7878 -->
<div class="vc_tta-panel" id="birthday-gifts1" data-vc-content=".vc_tta-panel-body">
                                                         <div class="vc_tta-panel-heading">
                                                            <h4 class="vc_tta-panel-title"><a href="#birthday-gifts1" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Шары</span></a></h4>
                                                         </div>
                                                         <div class="vc_tta-panel-body">
                                                            <div class="woocommerce sc-product-wrap   no-title">
                                                               <div class="product-listing woocommerce clearfix columns-4">
                                                                  <div class="product-item-wrap rating-visible post-1569 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-every-day product_cat-personal product_cat-birthday-gifts1 product_tag-birthday product_tag-every-day product_tag-person product_tag-women first instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-new product-flash">New</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://images-na.ssl-images-amazon.com/images/I/51UAN2fK7iL.jpg 600w, https://images-na.ssl-images-amazon.com/images/I/51UAN2fK7iL.jpg 150w, https://images-na.ssl-images-amazon.com/images/I/51UAN2fK7iL.jpg 300w, https://images-na.ssl-images-amazon.com/images/I/51UAN2fK7iL.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://images-na.ssl-images-amazon.com/images/I/51UAN2fK7iL.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/yellow-pillow/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/yellow-pillow/?action=yith-woocompare-add-product&amp;id=1569" class="compare" data-product_id="1569"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1569">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1569" rel="nofollow" data-product-id="1569" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1569" <a href="/handmade/product/yellow-pillow/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1569" data-quantity="1" data-product_id="1569" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/yellow-pillow/">Yellow Pillow334</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1567 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-birthday product_tag-jewelry product_tag-person  instock sale shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">12.5%</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://images-na.ssl-images-amazon.com/images/I/51ugn%2BUg6NL.jpg 600w, https://images-na.ssl-images-amazon.com/images/I/51ugn%2BUg6NL.jpg 150w, https://images-na.ssl-images-amazon.com/images/I/51ugn%2BUg6NL.jpg 300w, https://images-na.ssl-images-amazon.com/images/I/51ugn%2BUg6NL.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://images-na.ssl-images-amazon.com/images/I/51ugn%2BUg6NL.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/bracelets-with-names/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/bracelets-with-names/?action=yith-woocompare-add-product&amp;id=1567" class="compare" data-product_id="1567"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1567">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1567" rel="nofollow" data-product-id="1567" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1567" <a href="/handmade/product/bracelets-with-names/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1567" data-quantity="1" data-product_id="1567" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:60%">Rated <strong class="rating">3.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/bracelets-with-names/">Bracelets With Names</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>35.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1566 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-every-day product_cat-illumination product_cat-jewelry product_cat-personal product_tag-birthday product_tag-every-day product_tag-jewelry product_tag-person  instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://images-na.ssl-images-amazon.com/images/I/61Xb8UptGhL._SX569_.jpg 600w, https://images-na.ssl-images-amazon.com/images/I/61Xb8UptGhL._SX569_.jpg 150w, https://images-na.ssl-images-amazon.com/images/I/61Xb8UptGhL._SX569_.jpg 300w, https://images-na.ssl-images-amazon.com/images/I/61Xb8UptGhL._SX569_.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://images-na.ssl-images-amazon.com/images/I/61Xb8UptGhL._SX569_.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/knit-handmade-bracelets-2/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/knit-handmade-bracelets-2/?action=yith-woocompare-add-product&amp;id=1566" class="compare" data-product_id="1566"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1566">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1566" rel="nofollow" data-product-id="1566" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1566" <a href="/handmade/product/knit-handmade-bracelets-2/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1566" data-quantity="1" data-product_id="1566" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/knit-handmade-bracelets-2/">Knit Handmade Bracelets</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1565 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-every-day product_cat-jewelry product_cat-personal product_tag-birthday product_tag-jewelry product_tag-person last instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://images-na.ssl-images-amazon.com/images/I/61HK5mYoo9L._SX569_.jpg 600w, https://images-na.ssl-images-amazon.com/images/I/61HK5mYoo9L._SX569_.jpg 150w, https://images-na.ssl-images-amazon.com/images/I/61HK5mYoo9L._SX569_.jpg 300w, https://images-na.ssl-images-amazon.com/images/I/61HK5mYoo9L._SX569_.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://images-na.ssl-images-amazon.com/images/I/61HK5mYoo9L._SX569_.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/colorful-bracelet/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/colorful-bracelet/?action=yith-woocompare-add-product&amp;id=1565" class="compare" data-product_id="1565"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1565">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1565" rel="nofollow" data-product-id="1565" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1565" <a href="/handmade/product/colorful-bracelet/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1565" data-quantity="1" data-product_id="1565" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/colorful-bracelet/">Colorful Bracelet</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1559 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-birthday product_tag-jewelry product_tag-person first instock sale shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">25%</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://images-na.ssl-images-amazon.com/images/I/41Zt0NxDNdL.jpg 600w, https://images-na.ssl-images-amazon.com/images/I/41Zt0NxDNdL.jpg 150w, https://images-na.ssl-images-amazon.com/images/I/41Zt0NxDNdL.jpg 300w, https://images-na.ssl-images-amazon.com/images/I/41Zt0NxDNdL.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://images-na.ssl-images-amazon.com/images/I/41Zt0NxDNdL.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/knit-from-wool-bracelets/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/knit-from-wool-bracelets/?action=yith-woocompare-add-product&amp;id=1559" class="compare" data-product_id="1559"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1559">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1559" rel="nofollow" data-product-id="1559" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1559" <a href="/handmade/product/knit-from-wool-bracelets/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1559" data-quantity="1" data-product_id="1559" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/knit-from-wool-bracelets/">Knit From Wool Bracelets</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>30.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1558 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-illumination product_cat-jewelry product_cat-personal product_tag-birthday product_tag-illumination product_tag-jewelry product_tag-person  instock shipping-taxable purchasable product-type-variable">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"><span class="on-hot product-flash">Hot</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://images-na.ssl-images-amazon.com/images/I/41MLKPpbzoL._AC_SR160,160_.jpg 600w, https://images-na.ssl-images-amazon.com/images/I/41MLKPpbzoL._AC_SR160,160_.jpg 150w, https://images-na.ssl-images-amazon.com/images/I/41MLKPpbzoL._AC_SR160,160_.jpg 300w, https://images-na.ssl-images-amazon.com/images/I/41MLKPpbzoL._AC_SR160,160_.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://images-na.ssl-images-amazon.com/images/I/41MLKPpbzoL._AC_SR160,160_.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/friendship-bracelets/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/friendship-bracelets/?action=yith-woocompare-add-product&amp;id=1558" class="compare" data-product_id="1558"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1558">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1558" rel="nofollow" data-product-id="1558" data-product-type="variable" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1558" <a href="/handmade/product/friendship-bracelets/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Select options"><a rel="nofollow" <a href="/handmade/product/friendship-bracelets/" data-quantity="1" data-product_id="1558" data-product_sku="" class="button product_type_variable add_to_cart_button btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Select options</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:40%">Rated <strong class="rating">2.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/friendship-bracelets/">Friendship Bracelets</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>45.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1557 product type-product status-publish has-post-thumbnail product_cat-every-day product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-every-day product_tag-jewelry product_tag-special-goods  instock sale shipping-taxable product-type-external">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">11.1%</span> <span class="on-new product-flash">New</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://images-na.ssl-images-amazon.com/images/I/61qlshev0%2BL._SX569_.jpg 600w, https://images-na.ssl-images-amazon.com/images/I/61qlshev0%2BL._SX569_.jpg 150w, https://images-na.ssl-images-amazon.com/images/I/61qlshev0%2BL._SX569_.jpg 300w, https://images-na.ssl-images-amazon.com/images/I/61qlshev0%2BL._SX569_.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://images-na.ssl-images-amazon.com/images/I/61qlshev0%2BL._SX569_.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/wool-knit-scarf-coat/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/wool-knit-scarf-coat/?action=yith-woocompare-add-product&amp;id=1557" class="compare" data-product_id="1557"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1557">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1557" rel="nofollow" data-product-id="1557" data-product-type="external" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1557" <a href="/handmade/product/wool-knit-scarf-coat/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Buy Product"><a rel="nofollow" href="http://themeforest.net/user/g5theme" data-quantity="1" data-product_id="1557" data-product_sku="" class="button product_type_external btn_add_to_cart"><i class="fas fa-info"></i> Buy Product</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/wool-knit-scarf-coat/">Wool Knit Scarf-Coat</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>45.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1553 product type-product status-publish has-post-thumbnail product_cat-every-day product_cat-personal product_cat-special-goods product_tag-every-day product_tag-person product_tag-special-goods last instock sale shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">25%</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://images-na.ssl-images-amazon.com/images/I/71V7GhQUMPL._SX569_.jpg 600w, https://images-na.ssl-images-amazon.com/images/I/71V7GhQUMPL._SX569_.jpg 150w, https://images-na.ssl-images-amazon.com/images/I/71V7GhQUMPL._SX569_.jpg 300w, https://images-na.ssl-images-amazon.com/images/I/71V7GhQUMPL._SX569_.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://images-na.ssl-images-amazon.com/images/I/71V7GhQUMPL._SX569_.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/funny-wool-basket/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/funny-wool-basket/?action=yith-woocompare-add-product&amp;id=1553" class="compare" data-product_id="1553"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1553">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1553" rel="nofollow" data-product-id="1553" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1553" <a href="/handmade/product/funny-wool-basket/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1553" data-quantity="1" data-product_id="1553" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:60%">Rated <strong class="rating">3.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/funny-wool-basket/">Funny Wool Basket</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>30.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>







                                                      <div class="vc_tta-panel" id="special-goods" data-vc-content=".vc_tta-panel-body">
                                                         <div class="vc_tta-panel-heading">
                                                            <h4 class="vc_tta-panel-title"><a href="#special-goods" data-vc-accordion data-vc-container=".vc_tta-container"><span class="vc_tta-title-text">Игрушки</span></a></h4>
                                                         </div>
                                                         <div class="vc_tta-panel-body">
                                                            <div class="woocommerce sc-product-wrap   no-title">
                                                               <div class="product-listing woocommerce clearfix columns-4">
                                                                  <div class="product-item-wrap rating-visible post-1567 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-birthday product_tag-jewelry product_tag-person first instock sale shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">12.5%</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/s/l/sleep-sheep-prod-995x995_2.jpg 600w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/s/l/sleep-sheep-prod-995x995_2.jpg 150w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/s/l/sleep-sheep-prod-995x995_2.jpg 300w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/s/l/sleep-sheep-prod-995x995_2.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/s/l/sleep-sheep-prod-995x995_2.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/bracelets-with-names/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/bracelets-with-names/?action=yith-woocompare-add-product&amp;id=1567" class="compare" data-product_id="1567"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1567">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1567" rel="nofollow" data-product-id="1567" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1567" <a href="/handmade/product/bracelets-with-names/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1567" data-quantity="1" data-product_id="1567" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:60%">Rated <strong class="rating">3.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/bracelets-with-names/">Bracelets With Names</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>35.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1559 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-birthday product_tag-jewelry product_tag-person  instock sale shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">25%</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/s/l/sleep-sheep-smart-sensor-prod-995x995_7.jpg 600w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/s/l/sleep-sheep-smart-sensor-prod-995x995_7.jpg 150w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/s/l/sleep-sheep-smart-sensor-prod-995x995_7.jpg 300w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/s/l/sleep-sheep-smart-sensor-prod-995x995_7.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/s/l/sleep-sheep-smart-sensor-prod-995x995_7.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/knit-from-wool-bracelets/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/knit-from-wool-bracelets/?action=yith-woocompare-add-product&amp;id=1559" class="compare" data-product_id="1559"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1559">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1559" rel="nofollow" data-product-id="1559" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1559" <a href="/handmade/product/knit-from-wool-bracelets/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1559" data-quantity="1" data-product_id="1559" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/knit-from-wool-bracelets/">Knit From Wool Bracelets</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>30.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1557 product type-product status-publish has-post-thumbnail product_cat-every-day product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-every-day product_tag-jewelry product_tag-special-goods  instock sale shipping-taxable product-type-external">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">11.1%</span> <span class="on-new product-flash">New</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/p/e/peaceful-panda-prod-995x995_1.jpg 600w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/p/e/peaceful-panda-prod-995x995_1.jpg 150w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/p/e/peaceful-panda-prod-995x995_1.jpg 300w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/p/e/peaceful-panda-prod-995x995_1.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/p/e/peaceful-panda-prod-995x995_1.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/wool-knit-scarf-coat/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/wool-knit-scarf-coat/?action=yith-woocompare-add-product&amp;id=1557" class="compare" data-product_id="1557"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1557">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1557" rel="nofollow" data-product-id="1557" data-product-type="external" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1557" <a href="/handmade/product/wool-knit-scarf-coat/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Buy Product"><a rel="nofollow" href="http://themeforest.net/user/g5theme" data-quantity="1" data-product_id="1557" data-product_sku="" class="button product_type_external btn_add_to_cart"><i class="fas fa-info"></i> Buy Product</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/wool-knit-scarf-coat/">Wool Knit Scarf-Coat</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>45.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1556 product type-product status-publish has-post-thumbnail product_cat-illumination product_cat-special-goods product_tag-illumination product_tag-special-goods last instock shipping-taxable purchasable product-type-variable has-default-attributes">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/n/i/nighty-night-owl-smart-sensor-prod-995x995_1_1.jpg 600w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/n/i/nighty-night-owl-smart-sensor-prod-995x995_1_1.jpg 150w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/n/i/nighty-night-owl-smart-sensor-prod-995x995_1_1.jpg 300w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/n/i/nighty-night-owl-smart-sensor-prod-995x995_1_1.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/n/i/nighty-night-owl-smart-sensor-prod-995x995_1_1.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/greeting-cards/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/greeting-cards/?action=yith-woocompare-add-product&amp;id=1556" class="compare" data-product_id="1556"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1556">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1556" rel="nofollow" data-product-id="1556" data-product-type="variable" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1556" <a href="/handmade/product/greeting-cards/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Select options"><a rel="nofollow" <a href="/handmade/product/greeting-cards/" data-quantity="1" data-product_id="1556" data-product_sku="" class="button product_type_variable add_to_cart_button btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Select options</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/greeting-cards/">Greeting Cards</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>14.00</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>15.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1555 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-illumination product_cat-romantic product_cat-special-goods product_tag-birthday product_tag-illumination product_tag-romatic product_tag-special-goods first instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-new product-flash">New</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/f/r/frankie-the-fox-prod-995x995_2.jpg 600w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/f/r/frankie-the-fox-prod-995x995_2.jpg 150w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/f/r/frankie-the-fox-prod-995x995_2.jpg 300w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/f/r/frankie-the-fox-prod-995x995_2.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/f/r/frankie-the-fox-prod-995x995_2.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/flower-bending/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/flower-bending/?action=yith-woocompare-add-product&amp;id=1555" class="compare" data-product_id="1555"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1555">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1555" rel="nofollow" data-product-id="1555" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1555" <a href="/handmade/product/flower-bending/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1555" data-quantity="1" data-product_id="1555" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/flower-bending/">Flower Bending</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>35.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1554 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-illumination product_cat-romantic product_cat-special-goods product_tag-birthday product_tag-illumination product_tag-romatic product_tag-special-goods  instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"><span class="on-hot product-flash">Hot</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/b/u/bubbly-bunny-prod-995x995_1.jpg 600w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/b/u/bubbly-bunny-prod-995x995_1.jpg 150w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/b/u/bubbly-bunny-prod-995x995_1.jpg 300w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/b/u/bubbly-bunny-prod-995x995_1.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/b/u/bubbly-bunny-prod-995x995_1.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/handmade-paper-stars/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/handmade-paper-stars/?action=yith-woocompare-add-product&amp;id=1554" class="compare" data-product_id="1554"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1554">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1554" rel="nofollow" data-product-id="1554" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1554" <a href="/handmade/product/handmade-paper-stars/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1554" data-quantity="1" data-product_id="1554" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/handmade-paper-stars/">Handmade Paper Stars</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>45.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1553 product type-product status-publish has-post-thumbnail product_cat-every-day product_cat-personal product_cat-special-goods product_tag-every-day product_tag-person product_tag-special-goods  instock sale shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"> <span class="on-sale product-flash">25%</span></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/g/e/gentle-giraffe-prod-995x995_1.jpg 600w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/g/e/gentle-giraffe-prod-995x995_1.jpg 150w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/g/e/gentle-giraffe-prod-995x995_1.jpg 300w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/g/e/gentle-giraffe-prod-995x995_1.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/g/e/gentle-giraffe-prod-995x995_1.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/funny-wool-basket/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/funny-wool-basket/?action=yith-woocompare-add-product&amp;id=1553" class="compare" data-product_id="1553"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1553">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1553" rel="nofollow" data-product-id="1553" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1553" <a href="/handmade/product/funny-wool-basket/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1553" data-quantity="1" data-product_id="1553" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:60%">Rated <strong class="rating">3.00</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/funny-wool-basket/">Funny Wool Basket</a></h3>
                                                                           <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>30.00</span></ins></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                                  <div class="product-item-wrap rating-visible post-1552 product type-product status-publish has-post-thumbnail product_cat-special-goods product_tag-birthday product_tag-illumination product_tag-jewelry product_tag-person last instock shipping-taxable purchasable product-type-simple">
                                                                     <div class="product-item-inner">
                                                                        <div class="product-thumb">
                                                                           <div class="product-flash-wrap"></div>
                                                                           <div class="product-thumb-primary"> <img width="300" height="300" src="https://fiberam-market.ru/images/products/73705399.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" srcset="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/p/o/pouf-blue-turtle-prod-995x995-web.jpg 600w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/p/o/pouf-blue-turtle-prod-995x995-web.jpg 150w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/p/o/pouf-blue-turtle-prod-995x995-web.jpg 300w, https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/p/o/pouf-blue-turtle-prod-995x995-web.jpg 180w" sizes="(max-width: 300px) 100vw, 300px" /></div>
                                                                           <div class="product-thumb-secondary"> <img width="300" height="300" src="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/p/o/pouf-blue-turtle-prod-995x995-web.jpg" class="attachment-shop_catalog size-shop_catalog" alt="" /></div>
                                                                           <a class="product-link" <a href="/handmade/product/shaking-wrist/"></a>
                                                                           <div class="product-actions">
                                                                              <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/shaking-wrist/?action=yith-woocompare-add-product&amp;id=1552" class="compare" data-product_id="1552"><i class="fas fa-exchange-alt"></i> </a>
                                                                              <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1552">
                                                                                 <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1552" rel="nofollow" data-product-id="1552" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                                                 <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                                                 <div style="clear:both"></div>
                                                                                 <div class="yith-wcwl-wishlistaddresponse"></div>
                                                                              </div>
                                                                              <div class="clear"></div>
                                                                              <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1552" <a href="/handmade/product/shaking-wrist/"><i class="fas fa-search"></i></a>
                                                                              <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1552" data-quantity="1" data-product_id="1552" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                                           </div>
                                                                        </div>
                                                                        <div class="product-info">
                                                                           <div class="star-rating"><span style="width:93.4%">Rated <strong class="rating">4.67</strong> out of 5</span></div>
                                                                           <h3 class="product-name p-font"><a href="/handmade/product/shaking-wrist/">Shaking Wrist</a></h3>
                                                                           <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                                        </div>
                                                                     </div>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="container" id="bl3">
                              <div class="vc_row wpb_row vc_row-fluid vc_custom_1443857836785">
                                 <div class="wpb_column vc_column_container vc_col-sm-12">
                                    <div class="vc_column-inner ">
                                       <div class="wpb_wrapper">
                                          <div class="handmade-banner style2   right">
                                             <div class="overflow-hidden">
                                                <div class="bg-img" style="height:269px; height:269px; background-image:url('http://kolopar.xyz/wp-content/themes/flowers/img/rose_4.jpg'); background-size:100%"></div>
                                             </div>
                                             <div class="overlay-banner">
                                                <a class="link-banner" title="" target="_self" href="#">
                                                   <div class="content-middle">
                                                      <div class="content-middle-inner">
                                                         <h2>Получи - 10%</h2>
                                                         <p>Достаточно зарегистрироваться!</p>
                                                      </div>
                                                   </div>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <style type="text/css">
                              .product-item-inner .product-info{
                                     background: #fff;
                                         border-right: 1px solid #eee;
                              }
                           </style>
                           <div class="container">
                              <div class="vc_row wpb_row vc_row-fluid">
                                 <div class="wpb_column vc_column_container vc_col-sm-12">
                                    <div class="vc_column-inner ">
                                       <div class="wpb_wrapper">
                                          <div id="5b615e4c9f3eb" data-columns="3" class="woocommerce sc-product-wrap   product-creative">
                                             <h3 class="sc-title s-font"><span>Новинки</span></h3>
                                             <a href="javascript:;" class="iso-filter " data-section-id="5b615e4c9f3eb" data-page="1" data-total-product="12" data-total-pages="2" data-navigation="prev"><span class="prev"><i class='fa fa-angle-left'></i></span></a> <a href="javascript:;" class="iso-filter " data-section-id="5b615e4c9f3eb" data-page="1" data-total-product="12" data-total-pages="2" data-navigation="next"><span class="next"><i class='fa fa-angle-right'></i></span></a>
                                             <div class="product-listing woocommerce clearfix">
                                                <div class="product-item-wrap rating-visible col-md-6 col-sm-6 col-xs-6  page-1 post-2239 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts first instock sale shipping-taxable product-type-grouped">
                                                   <div class="product-item-inner double-size">
                                                      <div class="product-thumb">
                                                         <div class="product-flash-wrap"></div>
                                                         <div class="product-thumb-primary"> <img class="attachment-shop_catalog wp-post-image" width="570" height="570" alt="Birthday Gifts Grouped" src="https://fiberam-market.ru/images/products/73705399.jpg"></div>
                                                         <a class="product-link" <a href="/handmade/product/birthday-gifts-products/"></a>
                                                         <div class="product-actions">
                                                            <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/birthday-gifts-products/?action=yith-woocompare-add-product&amp;id=2239" class="compare" data-product_id="2239"><i class="fas fa-exchange-alt"></i> </a>
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-2239">
                                                               <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=2239" rel="nofollow" data-product-id="2239" data-product-type="grouped" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div style="clear:both"></div>
                                                               <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="2239" <a href="/handmade/product/birthday-gifts-products/"><i class="fas fa-search"></i></a>
                                                            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="View products"><a rel="nofollow" <a href="/handmade/product/birthday-gifts-products/" data-quantity="1" data-product_id="2239" data-product_sku="" class="button product_type_grouped btn_add_to_cart"><i class="fas fa-shopping-cart"></i> View products</a></div>
                                                         </div>
                                                      </div>
                                                      <div class="product-info">
                                                         <h3 class="product-name p-font"><a href="/handmade/product/birthday-gifts-products/">Birthday Gifts Grouped</a></h3>
                                                         <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>35.00</span></span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="product-item-wrap rating-visible col-md-3 col-sm-6 col-xs-6  page-1 post-1569 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-every-day product_cat-personal product_tag-birthday product_tag-every-day product_tag-person product_tag-women instock shipping-taxable purchasable product-type-simple">
                                                   <div class="product-item-inner ">
                                                      <div class="product-thumb">
                                                         <div class="product-flash-wrap"> <span class="on-new product-flash">New</span></div>
                                                         <div class="product-thumb-primary"> <img class="attachment-shop_catalog wp-post-image" width="570" height="570" alt="Yellow Pillow" src="https://cdn3.flowwow.com/data/flowers/270x300/51/1509803055_34794351.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"></div>
                                                         <a class="product-link" <a href="/handmade/product/yellow-pillow/"></a>
                                                         <div class="product-actions">
                                                            <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/yellow-pillow/?action=yith-woocompare-add-product&amp;id=1569" class="compare" data-product_id="1569"><i class="fas fa-exchange-alt"></i> </a>
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1569">
                                                               <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1569" rel="nofollow" data-product-id="1569" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div style="clear:both"></div>
                                                               <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1569" <a href="/handmade/product/yellow-pillow/"><i class="fas fa-search"></i></a>
                                                            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1569" data-quantity="1" data-product_id="1569" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                         </div>
                                                      </div>
                                                      <div class="product-info">
                                                         <div class="star-rating"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div>
                                                         <h3 class="product-name p-font"><a href="/handmade/product/yellow-pillow/">Yellow Pillow</a></h3>
                                                         <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="product-item-wrap rating-visible col-md-3 col-sm-6 col-xs-6  page-1 post-1567 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-birthday product_tag-jewelry product_tag-person instock sale shipping-taxable purchasable product-type-simple">
                                                   <div class="product-item-inner ">
                                                      <div class="product-thumb">
                                                         <div class="product-flash-wrap"> <span class="on-sale product-flash">12.5%</span></div>
                                                         <div class="product-thumb-primary"> <img class="attachment-shop_catalog wp-post-image" width="570" height="570" alt="Bracelets With Names" src="https://cdn2.flowwow.com/data/flowers/270x300/52/1503683180_95494952.jpg"></div>
                                                         <a class="product-link" <a href="/handmade/product/bracelets-with-names/"></a>
                                                         <div class="product-actions">
                                                            <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/bracelets-with-names/?action=yith-woocompare-add-product&amp;id=1567" class="compare" data-product_id="1567"><i class="fas fa-exchange-alt"></i> </a>
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1567">
                                                               <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1567" rel="nofollow" data-product-id="1567" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div style="clear:both"></div>
                                                               <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1567" <a href="/handmade/product/bracelets-with-names/"><i class="fas fa-search"></i></a>
                                                            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1567" data-quantity="1" data-product_id="1567" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                         </div>
                                                      </div>
                                                      <div class="product-info">
                                                         <div class="star-rating"><span style="width:60%">Rated <strong class="rating">3.00</strong> out of 5</span></div>
                                                         <h3 class="product-name p-font"><a href="/handmade/product/bracelets-with-names/">Bracelets With Names</a></h3>
                                                         <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>35.00</span></ins></span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="product-item-wrap rating-visible col-md-6 col-sm-6 col-xs-6  page-1 post-1566 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-every-day product_cat-illumination product_cat-jewelry product_cat-personal product_tag-birthday product_tag-every-day product_tag-jewelry product_tag-person last instock shipping-taxable purchasable product-type-simple">
                                                   <div class="product-item-inner double-size">
                                                      <div class="product-thumb">
                                                         <div class="product-flash-wrap"></div>
                                                         <div class="product-thumb-primary"> <img class="attachment-shop_catalog wp-post-image" width="570" height="570" alt="Knit Handmade Bracelets" src="https://images-na.ssl-images-amazon.com/images/I/51UAN2fK7iL.jpg"></div>
                                                         <a class="product-link" <a href="/handmade/product/knit-handmade-bracelets-2/"></a>
                                                         <div class="product-actions">
                                                            <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/knit-handmade-bracelets-2/?action=yith-woocompare-add-product&amp;id=1566" class="compare" data-product_id="1566"><i class="fas fa-exchange-alt"></i> </a>
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1566">
                                                               <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1566" rel="nofollow" data-product-id="1566" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div style="clear:both"></div>
                                                               <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1566" <a href="/handmade/product/knit-handmade-bracelets-2/"><i class="fas fa-search"></i></a>
                                                            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1566" data-quantity="1" data-product_id="1566" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                         </div>
                                                      </div>
                                                      <div class="product-info">
                                                         <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                         <h3 class="product-name p-font"><a href="/handmade/product/knit-handmade-bracelets-2/">Knit Handmade Bracelets</a></h3>
                                                         <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="product-item-wrap rating-visible col-md-3 col-sm-6 col-xs-6  page-1 post-1565 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-every-day product_cat-jewelry product_cat-personal product_tag-birthday product_tag-jewelry product_tag-person first instock shipping-taxable purchasable product-type-simple">
                                                   <div class="product-item-inner ">
                                                      <div class="product-thumb">
                                                         <div class="product-flash-wrap"></div>
                                                         <div class="product-thumb-primary"> <img class="attachment-shop_catalog wp-post-image" width="570" height="570" alt="Colorful Bracelet" src="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/p/e/peaceful-panda-prod-995x995_1.jpg"></div>
                                                         <a class="product-link" <a href="/handmade/product/colorful-bracelet/"></a>
                                                         <div class="product-actions">
                                                            <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/colorful-bracelet/?action=yith-woocompare-add-product&amp;id=1565" class="compare" data-product_id="1565"><i class="fas fa-exchange-alt"></i> </a>
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1565">
                                                               <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1565" rel="nofollow" data-product-id="1565" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div style="clear:both"></div>
                                                               <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1565" <a href="/handmade/product/colorful-bracelet/"><i class="fas fa-search"></i></a>
                                                            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1565" data-quantity="1" data-product_id="1565" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                         </div>
                                                      </div>
                                                      <div class="product-info">
                                                         <h3 class="product-name p-font"><a href="/handmade/product/colorful-bracelet/">Colorful Bracelet</a></h3>
                                                         <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="product-item-wrap rating-visible col-md-3 col-sm-6 col-xs-6  page-1 post-1559 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-birthday product_tag-jewelry product_tag-person instock sale shipping-taxable purchasable product-type-simple">
                                                   <div class="product-item-inner ">
                                                      <div class="product-thumb">
                                                         <div class="product-flash-wrap"> <span class="on-sale product-flash">25%</span></div>
                                                         <div class="product-thumb-primary"> <img class="attachment-shop_catalog wp-post-image" width="570" height="570" alt="Knit From Wool Bracelets" src="https://cdn2.flowwow.com/data/flowers/270x300/33/1503657543_14863933.jpg"></div>
                                                         <a class="product-link" <a href="/handmade/product/knit-from-wool-bracelets/"></a>
                                                         <div class="product-actions">
                                                            <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/knit-from-wool-bracelets/?action=yith-woocompare-add-product&amp;id=1559" class="compare" data-product_id="1559"><i class="fas fa-exchange-alt"></i> </a>
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1559">
                                                               <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1559" rel="nofollow" data-product-id="1559" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div style="clear:both"></div>
                                                               <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1559" <a href="/handmade/product/knit-from-wool-bracelets/"><i class="fas fa-search"></i></a>
                                                            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1559" data-quantity="1" data-product_id="1559" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                         </div>
                                                      </div>
                                                      <div class="product-info">
                                                         <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                         <h3 class="product-name p-font"><a href="/handmade/product/knit-from-wool-bracelets/">Knit From Wool Bracelets</a></h3>
                                                         <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>30.00</span></ins></span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="product-item-wrap rating-visible col-md-6 col-sm-6 col-xs-6  page-2 post-1558 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-illumination product_cat-jewelry product_cat-personal product_tag-birthday product_tag-illumination product_tag-jewelry product_tag-person instock shipping-taxable purchasable product-type-variable">
                                                   <div class="product-item-inner double-size">
                                                      <div class="product-thumb">
                                                         <div class="product-flash-wrap"><span class="on-hot product-flash">Hot</span></div>
                                                         <div class="product-thumb-one"> <img class="attachment-shop_catalog wp-post-image" width="570" height="570" alt="Friendship Bracelets" src="//cdn2.flowwow.com/data/flowers/632x632/41/1503657671_5340541.jpg"></div>
                                                         <a class="product-link" <a href="/handmade/product/friendship-bracelets/"></a>
                                                         <div class="product-actions">
                                                            <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/friendship-bracelets/?action=yith-woocompare-add-product&amp;id=1558" class="compare" data-product_id="1558"><i class="fas fa-exchange-alt"></i> </a>
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1558">
                                                               <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1558" rel="nofollow" data-product-id="1558" data-product-type="variable" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div style="clear:both"></div>
                                                               <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1558" <a href="/handmade/product/friendship-bracelets/"><i class="fas fa-search"></i></a>
                                                            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Select options"><a rel="nofollow" <a href="/handmade/product/friendship-bracelets/" data-quantity="1" data-product_id="1558" data-product_sku="" class="button product_type_variable add_to_cart_button btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Select options</a></div>
                                                         </div>
                                                      </div>
                                                      <div class="product-info">
                                                         <div class="star-rating"><span style="width:40%">Rated <strong class="rating">2.00</strong> out of 5</span></div>
                                                         <h3 class="product-name p-font"><a href="/handmade/product/friendship-bracelets/">Friendship Bracelets</a></h3>
                                                         <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>45.00</span></span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="product-item-wrap rating-visible col-md-3 col-sm-6 col-xs-6  page-2 post-1557 product type-product status-publish has-post-thumbnail product_cat-every-day product_cat-jewelry product_cat-personal product_cat-special-goods product_tag-every-day product_tag-jewelry product_tag-special-goods last instock sale shipping-taxable product-type-external">
                                                   <div class="product-item-inner ">
                                                      <div class="product-thumb">
                                                         <div class="product-flash-wrap"> <span class="on-sale product-flash">11.1%</span> <span class="on-new product-flash">New</span></div>
                                                         <div class="product-thumb-primary"> <img class="attachment-shop_catalog wp-post-image" width="570" height="570" alt="Wool Knit Scarf-Coat" src="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/s/l/sleep-sheep-prod-995x995_2.jpg"></div>
                                                         <a class="product-link" <a href="/handmade/product/wool-knit-scarf-coat/"></a>
                                                         <div class="product-actions">
                                                            <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/wool-knit-scarf-coat/?action=yith-woocompare-add-product&amp;id=1557" class="compare" data-product_id="1557"><i class="fas fa-exchange-alt"></i> </a>
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1557">
                                                               <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1557" rel="nofollow" data-product-id="1557" data-product-type="external" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div style="clear:both"></div>
                                                               <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1557" <a href="/handmade/product/wool-knit-scarf-coat/"><i class="fas fa-search"></i></a>
                                                            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Buy Product"><a rel="nofollow" href="http://themeforest.net/user/g5theme" data-quantity="1" data-product_id="1557" data-product_sku="" class="button product_type_external btn_add_to_cart"><i class="fas fa-info"></i> Buy Product</a></div>
                                                         </div>
                                                      </div>
                                                      <div class="product-info">
                                                         <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                         <h3 class="product-name p-font"><a href="/handmade/product/wool-knit-scarf-coat/">Wool Knit Scarf-Coat</a></h3>
                                                         <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>45.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></ins></span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="product-item-wrap rating-visible col-md-3 col-sm-6 col-xs-6  page-2 post-1556 product type-product status-publish has-post-thumbnail product_cat-illumination product_cat-special-goods product_tag-illumination product_tag-special-goods first instock shipping-taxable purchasable product-type-variable has-default-attributes">
                                                   <div class="product-item-inner ">
                                                      <div class="product-thumb">
                                                         <div class="product-flash-wrap"></div>
                                                         <div class="product-thumb-primary"> <img class="attachment-shop_catalog wp-post-image" width="570" height="570" alt="Greeting Cards" src="https://fiberam-market.ru/images/products/73705399.jpg"></div>
                                                         <a class="product-link" <a href="/handmade/product/greeting-cards/"></a>
                                                         <div class="product-actions">
                                                            <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/greeting-cards/?action=yith-woocompare-add-product&amp;id=1556" class="compare" data-product_id="1556"><i class="fas fa-exchange-alt"></i> </a>
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1556">
                                                               <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1556" rel="nofollow" data-product-id="1556" data-product-type="variable" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div style="clear:both"></div>
                                                               <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1556" <a href="/handmade/product/greeting-cards/"><i class="fas fa-search"></i></a>
                                                            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Select options"><a rel="nofollow" <a href="/handmade/product/greeting-cards/" data-quantity="1" data-product_id="1556" data-product_sku="" class="button product_type_variable add_to_cart_button btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Select options</a></div>
                                                         </div>
                                                      </div>
                                                      <div class="product-info">
                                                         <h3 class="product-name p-font"><a href="/handmade/product/greeting-cards/">Greeting Cards</a></h3>
                                                         <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>14.00</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>15.00</span></span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="product-item-wrap rating-visible col-md-6 col-sm-6 col-xs-6  page-2 post-1555 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-illumination product_cat-romantic product_cat-special-goods product_tag-birthday product_tag-illumination product_tag-romatic product_tag-special-goods instock shipping-taxable purchasable product-type-simple">
                                                   <div class="product-item-inner double-size">
                                                      <div class="product-thumb">
                                                         <div class="product-flash-wrap"> <span class="on-new product-flash">New</span></div>
                                                         <div class="product-thumb-primary"> <img class="attachment-shop_catalog wp-post-image" width="570" height="570" alt="Flower Bending" src="https://images-na.ssl-images-amazon.com/images/I/41Zt0NxDNdL.jpg"></div>
                                                         <a class="product-link" <a href="/handmade/product/flower-bending/"></a>
                                                         <div class="product-actions">
                                                            <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/flower-bending/?action=yith-woocompare-add-product&amp;id=1555" class="compare" data-product_id="1555"><i class="fas fa-exchange-alt"></i> </a>
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1555">
                                                               <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1555" rel="nofollow" data-product-id="1555" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div style="clear:both"></div>
                                                               <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1555" <a href="/handmade/product/flower-bending/"><i class="fas fa-search"></i></a>
                                                            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1555" data-quantity="1" data-product_id="1555" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                         </div>
                                                      </div>
                                                      <div class="product-info">
                                                         <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                         <h3 class="product-name p-font"><a href="/handmade/product/flower-bending/">Flower Bending</a></h3>
                                                         <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>35.00</span></span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="product-item-wrap rating-visible col-md-3 col-sm-6 col-xs-6  page-2 post-1554 product type-product status-publish has-post-thumbnail product_cat-birthday-gifts product_cat-illumination product_cat-romantic product_cat-special-goods product_tag-birthday product_tag-illumination product_tag-romatic product_tag-special-goods instock shipping-taxable purchasable product-type-simple">
                                                   <div class="product-item-inner ">
                                                      <div class="product-thumb">
                                                         <div class="product-flash-wrap"><span class="on-hot product-flash">Hot</span></div>
                                                         <div class="product-thumb-primary"> <img class="attachment-shop_catalog wp-post-image" width="570" height="570" alt="Handmade Paper Stars" src="https://www.cloudb.com/pub/media/catalog/product/cache/f073062f50e48eb0f0998593e568d857/b/u/bubbly-bunny-prod-995x995_1.jpg"></div>
                                                         <a class="product-link" <a href="/handmade/product/handmade-paper-stars/"></a>
                                                         <div class="product-actions">
                                                            <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/handmade-paper-stars/?action=yith-woocompare-add-product&amp;id=1554" class="compare" data-product_id="1554"><i class="fas fa-exchange-alt"></i> </a>
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1554">
                                                               <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1554" rel="nofollow" data-product-id="1554" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div style="clear:both"></div>
                                                               <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1554" <a href="/handmade/product/handmade-paper-stars/"><i class="fas fa-search"></i></a>
                                                            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1554" data-quantity="1" data-product_id="1554" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                         </div>
                                                      </div>
                                                      <div class="product-info">
                                                         <div class="star-rating"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                         <h3 class="product-name p-font"><a href="/handmade/product/handmade-paper-stars/">Handmade Paper Stars</a></h3>
                                                         <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>45.00</span></span>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="product-item-wrap rating-visible col-md-3 col-sm-6 col-xs-6  page-2 post-1553 product type-product status-publish has-post-thumbnail product_cat-every-day product_cat-personal product_cat-special-goods product_tag-every-day product_tag-person product_tag-special-goods last instock sale shipping-taxable purchasable product-type-simple">
                                                   <div class="product-item-inner ">
                                                      <div class="product-thumb">
                                                         <div class="product-flash-wrap"> <span class="on-sale product-flash">25%</span></div>
                                                         <div class="product-thumb-primary"> <img class="attachment-shop_catalog wp-post-image" width="570" height="570" alt="Funny Wool Basket" src="https://cdn3.flowwow.com/data/flowers/270x300/42/1503684971_37114242.jpg"></div>
                                                         <a class="product-link" <a href="/handmade/product/funny-wool-basket/"></a>
                                                         <div class="product-actions">
                                                            <a data-toggle="tooltip" data-placement="top" title="Compare" <a href="/handmade/product/funny-wool-basket/?action=yith-woocompare-add-product&amp;id=1553" class="compare" data-product_id="1553"><i class="fas fa-exchange-alt"></i> </a>
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1553">
                                                               <div class="yith-wcwl-add-button show" style="display:block"> <a href="/handmade/home-02/?add_to_wishlist=1553" rel="nofollow" data-product-id="1553" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a> <img src="http://themes.g5plus.net/handmade/wp-content/plugins/yith-woocommerce-wishlist/assets/images/wpspin_light.gif" class="ajax-loading" alt="loading" width="16" height="16" style="visibility:hidden" /></div>
                                                               <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="/handmade/wishlist/" rel="nofollow"> Browse Wishlist </a></div>
                                                               <div style="clear:both"></div>
                                                               <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <a data-toggle="tooltip" data-placement="top" title="Quick view" class="product-quick-view" data-product_id="1553" <a href="/handmade/product/funny-wool-basket/"><i class="fas fa-search"></i></a>
                                                            <div class="add-to-cart-wrap" data-toggle="tooltip" data-placement="top" title="Add to cart"><a rel="nofollow" href="/handmade/home-02/?add-to-cart=1553" data-quantity="1" data-product_id="1553" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart btn_add_to_cart"><i class="fas fa-shopping-cart"></i> Add to cart</a></div>
                                                         </div>
                                                      </div>
                                                      <div class="product-info">
                                                         <div class="star-rating"><span style="width:60%">Rated <strong class="rating">3.00</strong> out of 5</span></div>
                                                         <h3 class="product-name p-font"><a href="/handmade/product/funny-wool-basket/">Funny Wool Basket</a></h3>
                                                         <span class="price"><del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>40.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">₴</span>30.00</span></ins></span>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                   
                           <div class="container" id="bl7">
                              <div class="vc_row wpb_row vc_row-fluid margin-bottom-80">
                                 <div class="wpb_column vc_column_container vc_col-sm-12">
                                    <div class="vc_column-inner ">
                                       <div class="wpb_wrapper">
                                          <div class="handmade-testimonial border-p-color style1 dark ">
                                             <div data-plugin-options='{&quot;singleItem&quot;:true,&quot;transitionStyle&quot;:&quot;fade&quot;,&quot;pagination&quot;:true,&quot;navigation&quot;:false,&quot;stopOnHover&quot;:false,&quot;autoHeight&quot;:false,&quot;autoPlay&quot;:5000,&quot;slideSpeed&quot;:200,&quot;paginationSpeed&quot;:800,&quot;rewindSpeed&quot;:1000}' class="owl-carousel">
                                                <div class="testimonial-item">
                                                   <div class="testimonial-avatar"> <img class="" src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/09/our-team-1-123x123.jpg" width="123" height="123" alt="our-team-1" title="our-team-1" /></div>
                                                   <div class="testimonial-info">
                                                      <p>“Отличный магазин, спасибо за быструю доставку.”</p>
                                                      <h3 class="p-color">Сергей Лунченко</h3>
                                                      <span class="s-color">доставка цветов</span>
                                                   </div>
                                                </div>
                                                <div class="testimonial-item">
                                                   <div class="testimonial-avatar"> <img class="" src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/09/our-team-4-123x123.jpg" width="123" height="123" alt="our-team-4" title="our-team-4" /></div>
                                                   <div class="testimonial-info">
                                                      <p>“Большое спасибо за персональный букет.”</p>
                                                      <h3 class="p-color">Анастасия Пульковска</h3>
                                                      <span class="s-color">персональная композиция</span>
                                                   </div>
                                                </div>
                                                <div class="testimonial-item">
                                                   <div class="testimonial-avatar"> <img class="" src="http://themes.g5plus.net/handmade/wp-content/uploads/2015/09/our-team-3-123x123.jpg" width="123" height="123" alt="our-team-3" title="our-team-3" /></div>
                                                   <div class="testimonial-info">
                                                      <p>“Все просто супер! Доставка за 1 день и vip композиция как я просил. Полностью доволен. Рекомендую.”</p>
                                                      <h3 class="p-color">Денис Витальенко</h3>
                                                      <span class="s-color">доставка</span>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                          <div class="container">
                              <h2>О Нас</h2>
                              <div class="vc_row wpb_row vc_row-fluid margin-bottom-40" id="bl4">
                                 <div class="col-md-4 col-sm-12 sm-margin-bottom-30 wpb_column vc_column_container vc_col-sm-4">
                                    <div class="vc_column-inner ">
                                       <div class="wpb_wrapper">
                                          <div style="border-color: #eeeeee;" class="handmade-banner style1   content-center">
                                             <div class="bg-img" style="height:270px; background-image: url(http://themes.g5plus.net/handmade/wp-content/uploads/2015/09/banner-1.jpg);"></div>
                                             <div class="overlay-banner">
                                                <a class="link-banner" title="" target="_self" href="#">
                                                   <div class="content-middle">
                                                      <div class="content-middle-inner">
                                                         <h2>Инкогнито</h2>
                                                         <span class="sub-title">Наш курьер подарит букет/подарок анонимно</span>
                                                      </div>
                                                   </div>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-md-4 col-sm-12 sm-margin-bottom-30 wpb_column vc_column_container vc_col-sm-4">
                                    <div class="vc_column-inner ">
                                       <div class="wpb_wrapper">
                                          <div class="handmade-banner style3  margin-bottom-50 top">
                                             <div class="bg-img" style="height:270px; background-image: url(http://themes.g5plus.net/handmade/wp-content/uploads/2015/09/banner-1.jpg);"></div>
                                             <div class="overlay-banner">
                                                <a class="link-banner" title="" target="_self" href="#">
                                                   <div class="content-middle">
                                                      <div class="content-middle-inner" style="text-align: center;">
                                                         <h2 style="width: 80%;
    font-size: 27px;
    margin: auto;
    margin-bottom: 5px;">Доставка</h2>
                                                         <span class="sub-title">Мы привезем букет в указанное время, по указанному адресу и вы сможете на месте  рассчитаться с курьером</span>
                                                      </div>
                                                   </div>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-md-4 col-sm-12 wpb_column vc_column_container vc_col-sm-4">
                                    <div class="vc_column-inner ">
                                       <div class="wpb_wrapper">
                                          <div class="handmade-banner style1  margin-bottom-50 content-left">
                                             <div class="bg-img" style="height:270px; background-image: url(http://themes.g5plus.net/handmade/wp-content/uploads/2015/09/banner-1.jpg);"></div>
                                             <div class="overlay-banner">
                                                <a class="link-banner" title="" target="_self" href="#">
                                                   <div class="content-middle">
                                                      <div class="content-middle-inner" style="text-align: center;">
                                                         <h2 style="width: 80%;
    font-size: 27px;
    margin: auto;
    margin-bottom: 5px;">Подарок</h2>
                                                         <span class="sub-title">Мы привезем букет в указанное время и место в качестве подарка от вас</span>
                                                      </div>
                                                   </div>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="fullwidth">
                              <div class="vc_row wpb_row vc_row-fluid">
                                 <div class="wpb_column vc_column_container vc_col-sm-12">
                                    <div class="vc_column-inner ">
                                       <div class="wpb_wrapper">
                                          <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text"><span class="vc_sep_holder vc_sep_holder_l"><span style="border-color:#eeeeee;" class="vc_sep_line"></span></span><span class="vc_sep_holder vc_sep_holder_r"><span style="border-color:#eeeeee;" class="vc_sep_line"></span></span></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </main>
         </div>
<? get_footer(); ?>