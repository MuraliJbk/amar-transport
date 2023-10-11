import jQuery from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

jQuery(document).ready(function($) {
  var _windowWidth = $(window).width();
  const clientsSlider = $('.client-logos-slider');
  const clientsLength = clientsSlider.find('.client-logo-list').length;
  if (clientsLength >= 9) {
    clientsSlider.slick({
      slidesToShow: 9,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 4,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            dots: true,
          },
        },
      ],
    });
  }
 
  const shortIntroSlider = $(".short-intro-slider");
  const shortIntroSlide = shortIntroSlider.children(".short-intro-list");
  if (jQuery(window).width() >= 1024) {
    if(shortIntroSlide.length > 4){
      shortIntroSlider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
        speed: 1000,
      });
    }
  }
  else{
    shortIntroSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      variableWidth: true,
    });
  }
 
  function introSlider() {
    if (_windowWidth <= 767) {
      $('.sub-head-row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 1000,
        infinite: false,
        autoplay: false,
      });
    } else {
      if ($('.sub-head-row').hasClass('slick-initialized')) {
        $('.sub-head-row').slick('unslick');
      }
    }
  }
  introSlider();

  function processSlider() {
    if (_windowWidth <= 767) {
      $('.process-row').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
        speed: 1000,
      });
    } else {
    }
  }
  processSlider();

  $(window).on('resize load', function () {
    var newScreenWidth = $(window).width();
    if (newScreenWidth !== _windowWidth) {
      _windowWidth = newScreenWidth;
      introSlider();
      processSlider();
    }
  });

  $('.news-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    dots: true,
    arrows: true,
    prevArrow:
      '<div class="slick-arrow slick-prev button flex flex-center"><span class="fa-sharp fa-solid fa-arrow-left"></span></div>',
    nextArrow:
      '<div class="slick-arrow slick-next button flex flex-center"><span class="fa-sharp fa-solid fa-arrow-right"></span></div>',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $('.news-slider-nav').on('setPosition', function (event, slick) {
    $('.news-slider-nav .small-post-list').removeAttr('style');
  });

  $('.other-services-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-arrow slick-prev button btn-transparent"><span class="fa-sharp fa-solid fa-arrow-left"></span><span>Previous</span></div>',
    nextArrow: '<div class="slick-arrow slick-next button btn-transparent"><span>Next</span><span class="fa-sharp fa-solid fa-arrow-right"></span></div>',
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
          adaptiveHeight: true,
        },
      },
    ],
  });
  $('.other-services-slider').on('setPosition', function (event, slick) {
    $('.other-services-slider .services-slide').removeAttr('style');
  });

  $('.timeline-slider-for').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<div class="slick-arrow slick-prev button btn-transparent"><span class="fa-sharp fa-solid fa-arrow-left"></span><span>Previous</span></div>',
    nextArrow:
      '<div class="slick-arrow slick-next button btn-transparent"><span>Next</span><span class="fa-sharp fa-solid fa-arrow-right"></span></div>',
    dots: false,
    variableWidth: true,
    asNavFor: '.timeline-slider-nav',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
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
  $('.timeline-slider-for').on('setPosition', function (event, slick) {
    $('.timeline-for-slide').removeAttr('style');
  });
  $('.timeline-slider-nav').on('setPosition', function (event, slick) {
    $('.timeline-nav-slide').removeAttr('style');
  });
});


