
import jQuery from 'jquery';
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';

(function($) {
  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-video',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  $('.custom-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  

})(jQuery);