$(function () {
    /*slider home page*/
    $('.product-detail .owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
            0:{
                items:3
            },
            400:{
               items:4
            },
            495:{
               items:5
            },
           597:{
                items:6
            },
            768:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
    $('.other-slider .owl-carousel.other-owl').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
            0:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:4
            }
        }
    })
    $('.other-slider .owl-carousel.owl-mo1').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,

        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            768: {
                items: 2
            }
        }
    })
    $('.other-slider .owl-carousel.owl-mo2').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,

        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            768: {
                items: 2
            }
        }
    })
    /**/
    $('.other-slider .owl-carousel .owl-nav .owl-next span').html('<i class="fas fa-chevron-left"></i>');
    $('.other-slider .owl-carousel .owl-nav .owl-prev span').html('<i class="fas fa-chevron-right"></i>');
    /*change image when click img in slider*/
    $imgs_Slider=$('.product-detail .col-md-11 .row .col-md-4 .product-slider .item');
    $imgs_Slider.each(function () {
          $(this).click(function () {
             $imgsClicked=$(this).find('img');
             $srcIMG=$imgsClicked.attr('src');
              $(".item").removeClass("active");
              $(this).addClass('active');
              $('.product-detail .col-md-11 .row .col-md-4 .active-product-img').attr('src',$srcIMG);
          })
    })
    /*add / minus one of price*/
    var minus_array=$('.bought-product .num-buy-product .minus');
    minus_array.each(function () {
        $(this).click(function () {
            var quantity=parseFloat($(this).prev().text());
            console.log(quantity)
            if(quantity>0){
                quantity=quantity-1;
                $(this).prev().text(quantity);}
        })
    })

    var plus_array=$('.bought-product .num-buy-product .plus');
    plus_array.each(function () {
        $(this).click(function () {
            var quantity=parseFloat($(this).next().text());
            quantity=quantity+1;
            $(this).next().text(quantity);
        })
    })
})