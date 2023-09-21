import jQuery from 'jquery';
import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';


(function($) {


    $('.other-services-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slick-arrow slick-prev"><span class="slick-btn fa-light fa-angle-left flex flex-center"></span></div>',
        nextArrow: '<div class="slick-arrow slick-next"><span class="slick-btn fa-light fa-angle-right flex flex-center"></span></div>',
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
 









