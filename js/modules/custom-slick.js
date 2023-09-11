jQuery(document).ready(function($){
    if($(window).width() <= 1023){
        $(".short-intro-row").slick({
            slideToShow: 1,
            slideToScroll: 1,
            variableWidth: true,
            dots: true,
            arrows: false,
        })
    }
});