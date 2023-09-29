jQuery(document).ready(function($){
    let lastScrollTop = 0;
    $(window).on("scroll load", function(){
        let scroll = $(this).scrollTop();
        scroll > lastScrollTop ? $("#header").addClass("scroll-nav-down").removeClass("scroll-nav-up") : $("#header").addClass("scroll-nav-up").removeClass("scroll-nav-down");
        lastScrollTop = scroll;
    });
    
    $(".toggle-icon").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("open");
        $("html, body").toggleClass("nav-overlay-open");
        $(".main-header").removeClass("fixed-header");
        $(".navigation").toggleClass("open");
    });

    if($(window).width() <= 1023){
        let level1 = $("ul.nav-menu > li.menu-item-has-children > a");
        level1.on("click", function(e){
            e.preventDefault();
            $(this).parent("li").siblings().children("a").removeClass("active");
            $(this).toggleClass("active");
            $(this).parent("li").siblings().children("ul").slideUp(900);
            $(this).siblings("ul").slideToggle(900);
        });
    }

    $('.accordion-header').on('click', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().removeClass('active');
        $(this).parent().siblings().find('.accordion-header').removeClass('open');
        $(this).toggleClass("open");
        $(this).siblings('.accordion-content').slideToggle(500);
        $(this).parent().siblings().find('.accordion-content').slideUp(500);
    });
    
    $("ul.equipment-links > li > a:first").addClass("current");
    $(".equipment-row[data-value='equipments-tab-1']").addClass("current");
    // let eq_html = $("ul.equipment-links").clone().addClass("copy");
    // $(".our-equipment-tabs").append(eq_html);
    $("ul.equipment-links > li > a").on("click", function(e){
        e.preventDefault();
        $(this).parent().siblings().find("a").removeClass("current");
        $(this).addClass("current");
        let attr = $(this).attr('data-name');
        $(".equipment-row").hide();
        $(".equipment-row[data-value="+ attr +"]").fadeIn('normal');
    });

    $("ul.positions-links li a:first").addClass("current");
    $(".open-positions-row[data-value='all']").addClass("current");

    $("ul.positions-links li a").on("click", function(e){
        e.preventDefault();
        $(this).parent().siblings().find("a").removeClass("current");
        $(this).addClass("current");
        let _this = $(this).attr("data-name");
        $(".open-positions-row").hide();
        let _thisattr = $(".open-positions-row[data-value="+ _this +"]");
       _thisattr.fadeIn('normal');
        if(_this === "all"){
            console.log("am murali")
            $(".open-positions-row").fadeIn();
        }
    });
    if($(window).width() >= 768){
        $(".leadership-list").each(function() {
            let _this = $(this).children('.leadership-text');
            let descItem = _this.find(".leadership-desc");
            _this.mouseenter(function() {
                descItem.stop(true, false).slideDown(1000);
            }).mouseleave(function() {
                descItem.stop(true, false).slideUp(1000);
            });
        });
    }
   
    if($(window).width() <= 1023){
        /* Remove divs for mobile speed which is not used */
        $(".home-circular-wave").remove();
        $(".other-services-swoop").remove();

    }

    if($(window).width() <= 767){
        $(".footer-list span").on("click", function(e){
            e.preventDefault();
            $(this).toggleClass("active");
            $(this).parent().siblings(".footer-list").find("ul.footer-links").slideUp(800);
            $(this).siblings("ul.footer-links").slideToggle(800);
        });
        $(".our-locations-title").on("click", function(e){
            e.preventDefault();
            $(this).toggleClass("open");
            $(this).parent().siblings(".our-locations-list").find(".our-locations-title").removeClass("open");
            $(this).parent().siblings(".our-locations-list").find(".our-locations-desc").slideUp("slow");
            $(this).siblings(".our-locations-desc").slideToggle("slow");
        });

        /* Remove divs for mobile speed which is not used */
        $("picture.cta-thumb-sm").remove();
        $(".other-services-swoop").remove();
        $(".optional-cta-swoosh").remove();
        
    }

    
});
