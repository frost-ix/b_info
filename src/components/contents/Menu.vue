<script setup lang="ts">
import MenuComponent from "../common/MenuComponent.vue";
import { ref } from "vue";
import menusData from "../../template/dump.json";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// "1", "2", ... 키만 추출해서 배열로 변환 (타입 단언)
const menuArray = Object.keys(menusData)
  .filter((key) => !isNaN(Number(key)))
  .map((key) => (menusData as any)[key]);
const menus = ref(menuArray);

const swiperModules = [Navigation, Pagination, Autoplay];
const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
};
function onSlideChange(swiper: any) {
  console.log("Slide changed to:", swiper.activeIndex);
}
function onSwiper(swiper: any) {
  console.log(swiper);
}
</script>

<template>
  <div class="menu-wrapper">
    <Swiper
      :modules="swiperModules"
      :options="swiperOptions"
      class="menu-swiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="(menu, index) in menus" :key="index">
        <MenuComponent
          :title="menu.title"
          :color="menu.color"
          :items="menu.items"
          @select="(value) => console.log('Selected:', value)"
        >
          <template #item="{ item }">
            <span>{{ item }}</span>
          </template>
        </MenuComponent>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
