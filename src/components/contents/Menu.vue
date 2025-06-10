<template>
  <Swiper
    :modules="modules"
    :options="options"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide v-for="(menu, index) in menus" :key="index">
      <MenuComponent
        :title="menu.title"
        :items="menu.items"
        @select="(v) => console.log(v)"
      >
        <template #item="{ item }">
          <span>{{ item }}</span>
        </template>
      </MenuComponent>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  onSwiper,
  onSlideChange,
  swiperOptions,
} from "../../functions/common/Swiper";
import MenuComponent from "../common/MenuComponent.vue";
import menusData from "../../template/dump.json";
import "swiper/swiper-bundle.css";

const menus = ref(menusData);
const modules = [Navigation, Pagination, Autoplay];
const options = swiperOptions();
</script>
