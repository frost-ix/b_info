import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

// Swiper의 다양한 기능을 모듈화하여 관리
const swiperFunctions = {
  onSlideChange: function (swiper: any) {
    console.log("Slide changed to:", swiper.activeIndex);
  },

  onSwiper: function () {
    console.log("Swiper initialized");
  },

  swiperOptions: function () {
    return {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 100,
        disableOnInteraction: true,
      },
      loop: true,
      loopAddBlankSlides: true,
      loopAdditionSlides: 1,
      slidesPerView: 1,
      centeredSlides: true,
    };
  },
};
// Swiper 모듈을 CommonSwiper 객체화
const swiperModules = { Swiper, SwiperSlide, Autoplay, Navigation, Pagination };

// CommonSwiper 객체를 생성하여 Swiper와 관련된 모든 기능을 포함
export const CommonSwiper = {
  swiperFunctions,
  swiperModules,
};
