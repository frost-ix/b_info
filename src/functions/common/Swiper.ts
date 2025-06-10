export function onSlideChange(swiper: any) {
  console.log("Slide changed to:", swiper.activeIndex);
}

export function onSwiper(swiper: any) {
  console.log(swiper);
}

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
