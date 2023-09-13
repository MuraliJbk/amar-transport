import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

var $window = jQuery(window);
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
const toggleSwiper = () => { jQuery(window).width() >= 1024 ? introSwiper.destroy() : introSwiper.enable(); }
$window.on('resize load', toggleSwiper);
$window.trigger('resize load', toggleSwiper);

const newsSwiperFor = new Swiper(".news-swiper-for", {
  direction: 'horizontal',
  slidesPerView: 1,
  effect: 'slide',
  speed: 1000,
  
});
const newsSwiperNav = new Swiper(".news-swiper-nav", {
  direction: 'vertical',
  slidesPerView: 3,
  effect: 'slide',
  speed: 1000,
  pagination: {
    el: '.news-swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});