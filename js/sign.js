$(function () {

    /*make pass text*/
    var  pass_check= $('.form-sign .pass span');
    pass_check.each(function () {
        $(this).click(function () {
            if($(this).prev().attr('type')=='password'){
                $(this).prev().prop('type','text');
                $(this).next().fadeOut();
                $(this).html('<i class="fas fa-eye"></i>');
            }
            else{
                $(this).prev().prop('type','password');
                $(this).next().fadeOut();
                $(this).html('<i class="fas fa-eye-slash"></i>');
            }
        })
    })

    /*wrapper*/
    $('.sign-content .form-sign a').click(function () {
        $('.model-wrap').fadeIn();
        $('html, body').css({
            overflow: 'hidden'
        });
    })
    $('.model-wrap .box .close-wrap').click(function () {
           $('.model-wrap').fadeOut();
        $('html, body').css({
            overflow: 'scroll'
        });
    })
})