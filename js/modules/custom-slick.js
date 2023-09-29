
import jQuery from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

jQuery(document).ready(function($){
      var _windowWidth = $(window).width();
      const clientsSlider = $('.client-logos-slider');
      const clientsLength = clientsSlider.find(".client-logo-list").length;
      if(clientsLength>=9){
        clientsSlider.slick({
          slidesToShow: 9,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplay: true,
        });
      }
  
      function toggleSlickSlider() {
        if (_windowWidth <= 1023) {
          $('.short-intro-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            variableWidth: true,
          });
        } else {
          if ($('.short-intro-slider').hasClass('slick-initialized')) {
            $('.short-intro-slider').slick('unslick');
          }
        }
      }    
      toggleSlickSlider();

      function introSlider(){
        if (_windowWidth <= 767) {
          $('.sub-head-row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            centerMode: true,
            centerPadding: '20px'
          });
        }
        else{

        }
      }
      introSlider();

      function processSlider(){
        if (_windowWidth <= 767) {
          $('.process-row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            centerMode: true,
            centerPadding: '0'
          });
        }
        else{

        }
      }
      processSlider();

      $(window).on('resize load', function() {
        var newScreenWidth = $(window).width();
        if (newScreenWidth !== _windowWidth) {
          _windowWidth = newScreenWidth;
          toggleSlickSlider();
      introSlider();
      processSlider();

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
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              arrows: false,
            }
          }
      ]
      });
      $('.news-slider-nav').on('setPosition', function(event, slick){
          $(".news-slider-nav .small-post-list").removeAttr("style");
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
    arrows: true,
    prevArrow: '<div class="slick-arrow slick-prev button btn-transparent"><span class="fa-sharp fa-solid fa-arrow-left"></span><span>Previous</span></div>',
    nextArrow: '<div class="slick-arrow slick-next button btn-transparent"><span>Next</span><span class="fa-sharp fa-solid fa-arrow-right"></span></div>',
    dots: false,
    variableWidth: true,
    asNavFor: '.timeline-slider-nav'
  });
  $('.timeline-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    asNavFor: '.timeline-slider-for',
    focusOnSelect: true,
    arrows: false,
    dots: false,
  });
 
});
 









