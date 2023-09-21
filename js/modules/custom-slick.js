jQuery(document).ready(function($){
  var _windowWidth = $(window).width();
    $('.client-logos-slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    });

  
      function toggleSlickSlider() {
        if (_windowWidth <= 767) {
          $('.short-intro-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true
          });
        } else {
          if ($('.short-intro-slider').hasClass('slick-initialized')) {
            $('.short-intro-slider').slick('unslick');
          }
        }
      }    
      toggleSlickSlider();
      $(window).on('resize load', function() {
        var newScreenWidth = $(window).width();
        if (newScreenWidth !== _windowWidth) {
          _windowWidth = newScreenWidth;
          toggleSlickSlider();
        }
      });

      $('.news-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.news-slider-nav'
      });
      $('.news-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.news-slider-for',
        focusOnSelect: true,
        dots: true,
        arrows: true,
        prevArrow: '<div class="slick-arrow slick-prev button flex flex-center"><span class="fa-sharp fa-solid fa-arrow-left"></span></div>',
        nextArrow: '<div class="slick-arrow slick-next button flex flex-center"><span class="fa-sharp fa-solid fa-arrow-right"></span></div>',
      });

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
 
});
 









