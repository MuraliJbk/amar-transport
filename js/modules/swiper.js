import Swiper from 'swiper';
import {FreeMode, Navigation, Pagination, Thumbs} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
Swiper.use([FreeMode, Navigation, Pagination, Thumbs]);

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

var newsSwiperNav = new Swiper(".news-swiper-nav", {
    direction: 'vertical',
    effect: "slide",
    loop: true,
    spaceBetween: 26,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".news-swiper-for", {
    slidesPerView: 1,
    effect: "slide",
    loop: true,
    pagination: {
    el: '.news-swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: newsSwiperNav,
    },
});

const servicesSwiper = new Swiper('.other-services-swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    slidesPerView: 4,
    loop: true,
    effect: 'slide',
    speed: 1000,
    pagination: {
      el: '.services-pagination',
      clickable: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
});

