import Swiper from 'swiper';
import {FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
Swiper.use([FreeMode,Navigation, Pagination, Thumbs]);

jQuery(document).ready(function($){
  var $window = $(window);
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
  const toggleSwiper = () => { $(window).width() >= 1024 ? introSwiper.destroy() : introSwiper.enable(); }
  $window.on('resize load', toggleSwiper);
  $window.trigger('resize load', toggleSwiper);

  const newsSwiperNav = new Swiper(".news-swiper-nav", {
    modules: [Navigation, Pagination, FreeMode],
    direction: 'vertical',
    slidesPerView: 1,
    slidesPerScroll: 1,
    effect: 'slide',
    speed: 1000,
    FreeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.news-swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const newsSwiperFor = new Swiper(".news-swiper-for", {
    modules: [Thumbs],
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerScroll: 1,
    effect: 'slide',
    speed: 1000,
    thumbs: {
      swiper: newsSwiperNav
    }
  });

});