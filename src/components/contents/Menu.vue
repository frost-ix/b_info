<template>
  <Swiper
    :modules="modules"
    :options="options"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import {
  onSwiper,
  onSlideChange,
  swiperOptions,
} from "@/functions/common/Swiper";
import MenuComponent from "@/components/common/MenuComponent.vue";
import menusData from "@/template/dump.json";

const menus = ref(menusData);
const modules = [Navigation, Pagination, Autoplay];
const options = swiperOptions();
const router = useRouter();

function handleSelect(item: string) {
  // List.vue로 이동하면서 상태로 item 전달
  router.push({ name: "List", state: { title: item } });
}
</script>
