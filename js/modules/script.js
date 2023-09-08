jQuery(document).ready(function($){
    let lastScrollTop = 0;
    $(window).on("scroll load", function(){
        let scroll = $(this).scrollTop();
        scroll > lastScrollTop ? $("#header").addClass("scroll-nav-down").removeClass("scroll-nav-up") : $("#header").addClass("scroll-nav-up").removeClass("scroll-nav-down");
        lastScrollTop = scroll;
    });
});