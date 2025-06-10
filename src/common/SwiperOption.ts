export function swiperOptions() {
  return {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    loopAddBlankSlides: true,
    loopAdditionSlides: 1,
    autoplay: {
      delay: 100,
      disableOnInteraction: true,
    },
  };
}

export type SwiperOptions = ReturnType<typeof swiperOptions>;
