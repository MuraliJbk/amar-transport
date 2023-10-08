
import jQuery from 'jquery';
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';

document.addEventListener("DOMContentLoaded", function() {
  jQuery('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-video',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});

window.onload = function () {
  const customLink = jQuery(".custom-popup-link");
  const customSlider = jQuery('.custom-popup-slider');

  customSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<div class="slick-arrow slick-prev button"><span class="fa-sharp fa-solid fa-arrow-left"></span></div>',
    nextArrow: '<div class="slick-arrow slick-next button"><span class="fa-sharp fa-solid fa-arrow-right"></span></div>',
    dots: false,
  });



  customSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    // Pause the video in the current slide's iframe when changing slides
    const currentSlideIframe = jQuery(slick.$slides[currentSlide]).find('iframe');
    if (currentSlideIframe.length > 0) {
      const iframeSrc = currentSlideIframe.attr('src');
      currentSlideIframe.attr('src', iframeSrc);
    }
  });

  customLink.on("click", function (event) {
    event.preventDefault();
    customSlider.slick('slickGoTo', 0);
  });

  customLink.magnificPopup({
    type: 'inline',
    midClick: true,
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
};
