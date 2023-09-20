import Swiper from 'swiper';
import {FreeMode, Navigation, Pagination, Thumbs, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
Swiper.use([FreeMode, Navigation, Pagination, Thumbs]);

var _selfwindow = jQuery(window);
const introSwiperEle = document.querySelector('.short-intro-swiper');
if(introSwiperEle){
 const introSwiper = new Swiper(introSwiperEle, {
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
  
  const toggleSwiper = () => { _selfwindow.width() >= 1024 ? introSwiper.destroy() : introSwiper.enable(); }
  _selfwindow.on('resize load', toggleSwiper);
  _selfwindow.trigger('resize load', toggleSwiper);
}

const swiperClients = document.querySelectorAll(".swiper-clients");
  swiperClients.forEach(function(element, index){
    const _this = new Swiper(element, {
      modules: [Navigation, Pagination, Autoplay],
      direction: 'horizontal',
      slidesPerView: 9,
      slidesPerScroll: 9,
      loop: true,
      effect: 'slide',
      speed: 1000,
      autoplay: true,
      pagination: {
        el: '.intro-pagination',
        clickable: true,
      },
  });
})


const newsSwiperNav = document.querySelector('.news-swiper-nav');
if(newsSwiperNav){
  new Swiper(newsSwiperNav, {
    direction: 'vertical',
    effect: "slide",
    loop: true,
    spaceBetween: 26,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
}
const swiper2 = document.querySelector('.news-swiper-for');
if(swiper2){
  new Swiper(swiper2, {
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
}

const servicesSwiper = document.querySelector('.other-services-swiper');
if(servicesSwiper){
  new Swiper(servicesSwiper, {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      slidesPerView: 4,
      loop: true,
      effect: 'slide',
      speed: 1000,
      pagination: {
        el: '.services-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
}

