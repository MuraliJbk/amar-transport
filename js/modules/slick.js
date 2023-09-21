import jQuery from 'jquery';
import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';


(function($) {
    $('.other-services-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slick-arrow slick-prev button btn-transparent"><span class="fa-sharp fa-solid fa-arrow-left"></span><span>Previous</span></div>',
        nextArrow: '<div class="slick-arrow slick-next button btn-transparent"><span>Next</span><span class="fa-sharp fa-solid fa-arrow-right"></span></div>',
        dots: false,
        variableWidth: true,
      });

  $('.timeline-slider-for').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.timeline-slider-nav'
  });
  $('.timeline-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.timeline-slider-for',
    focusOnSelect: true,
    arrows: false,
    dots: false,
  });
 
})(jQuery);
 









