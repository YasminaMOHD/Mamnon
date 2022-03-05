$(function () {
    /*slider home page*/
    $('.owl-carousel').owlCarousel({
        rtl:true,
        items:7,
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
            500:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
})