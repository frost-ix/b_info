<template>
  <Swiper
    :modules="modules"
    :options="options"
    @swiper="CommonSwiper.swiperFunctions.onSwiper"
    @slideChange="CommonSwiper.swiperFunctions.onSlideChange"
  >
    <SwiperSlide v-for="(menu, index) in menus" :key="index">
      <MenuComponent :title="menu.title" :items="menu.items">
        <template #item="{ item }">
          <ul @click="handleSelect(item)">
            <li>{{ item }}</li>
          </ul>
        </template>
      </MenuComponent>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { CommonSwiper } from "@/functions/common/Swiper";
import MenuComponent from "@/components/common/MenuComponent.vue";
import menusData from "@/template/dump.json";

// ----------------------------------------------------------------
// CommonSwiper에서 Swiper와 SwiperSlide 모듈 가져오기
const Swiper = CommonSwiper.swiperModules.Swiper;
const SwiperSlide = CommonSwiper.swiperModules.SwiperSlide;
const modules = [
  CommonSwiper.swiperModules.Navigation,
  CommonSwiper.swiperModules.Pagination,
  CommonSwiper.swiperModules.Autoplay,
];
const options = CommonSwiper.swiperFunctions.swiperOptions();
// ----------------------------------------------------------------

const menus = ref(menusData);
const router = useRouter();

// List.vue로 이동하면서 상태로 item 전달
function handleSelect(item: string) {
  router.push({ name: "List", state: { title: item } });
}
</script>
