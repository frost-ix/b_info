export function onSlideChange(swiper: any) {
  console.log("Slide changed to:", swiper.activeIndex);
}

export function onSwiper() {
  console.log("Swiper initialized");
}

export function swiperOptions() {
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
}
