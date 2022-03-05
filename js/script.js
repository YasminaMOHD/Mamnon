$(function () {
    new WOW().init();
    // $('.owl-carousel').owlCarousel();

    /*sticky nav bar*/
    var header_height= $('header .first-nav .second-nav').outerHeight();
    $(window).scroll(function () {
        var scroll_height= $(window).scrollTop();
        if(scroll_height>header_height){
            $('header .first-nav .second-nav').addClass('sticky')
        }else {
            $('header .first-nav .second-nav').removeClass('sticky')
        }
    })

    /*sidebar*/
    $menu_width=$('.sideMenu').outerWidth();
    $('.sideMenu').css('right',-$menu_width);
    $('.second-nav .navbar-toggler img').click(function () {
        $('.sideMenu').fadeIn();
        $('.sideMenu').css('right','0');

    })

    $menu1= $('.second-nav .sideMenu ul .nav-link.other-menu');
    $menu1.each(function () {
        $(this).click(function () {
            $(this).next().fadeToggle();
        });
    })

    $menu2= $('.second-nav .sideMenu ul .dropdown-item.other-menu');
    $menu2.each(function () {
        $(this).click(function () {
            $(this).next().fadeToggle();
        });
    })

    $('.sideMenu .close').click(function () {
        $('.sideMenu').css('right',-$menu_width);
        $('.sideMenu').fadeOut();
    })

    /*middle virtical cart page*/
    var  num_prod_height=$('.cart-product .num-cover').height();
    var  num_cartProd_height=$('.cart-product .product').height();
    var newHeight=(num_cartProd_height/2)-(num_prod_height/2);

    $('.cart-product .num-buy-product').css({
        top:newHeight
    });


    /*add / minus one of price*/
    var minus_array=$('.cart-product .num-buy-product .minus');
    minus_array.each(function () {
        $(this).click(function () {
            var quantity=parseFloat($(this).prev().text());
            console.log(quantity)
            if(quantity>0){
                quantity=quantity-1;
                $(this).prev().text(quantity);}
        })
    })

    var plus_array=$('.cart-product .num-buy-product .plus');
    plus_array.each(function () {
        $(this).click(function () {
            var quantity=parseFloat($(this).next().text());
            quantity=quantity+1;
            $(this).next().text(quantity);
        })
    })

/**/


    /*end add / minus one of price*/

    /*lazy loading / shimmer effect*/
    $('.lazy-loading').css('display','none');
    $('body').css('overflow','auto');
    $('.wv-cloth .wv-img .col-sm-4').removeClass('shine');
    $('main .card-image').removeClass('shine');
})
