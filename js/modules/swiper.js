import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const introSwiper = new Swiper('.short-intro-swiper', {
  modules: [Navigation, Pagination],
    direction: 'horizontal',
    slidesPerView: 'auto',
    effect: 'slide',
		speed: 1000,
    pagination: {
      el: '.intro-pagination',
      clickable: true,
    },
});

var $window = jQuery(window);
function toggleSwiper() {
  // if(jQuery(window).width() >= 1024){ introSwiper.destroy(); }
  // else{ introSwiper.enable(); }
  jQuery(window).width() >= 1024 ? introSwiper.destroy() : introSwiper.enable();
}
$window.on('resize load', toggleSwiper);
$window.trigger('resize load', toggleSwiper);