<template>
  <Swiper
    :modules="modules"
    :options="options"
    @swiper="CommonSwiper.swiperFunctions.onSwiper"
    @slideChange="CommonSwiper.swiperFunctions.onSlideChange"
  >
    <SwiperSlide v-for="(menu, index) in category" :key="index">
      <MenuComponent :title="menu.categoryName" :items="menu.subCategory">
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
import { useRouter, useRoute } from "vue-router";
import { CommonSwiper } from "@/functions/common/Swiper";
import MenuComponent from "@/components/common/MenuComponent.vue";
import { getCategory } from "@/functions/api/board/CategoriesAxios";

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

const categories = await getCategory();
const category = ref(categories.length > 0 ? categories : null);
const router = useRouter();
const route = useRoute();

// List.vue로 이동하면서 상태로 item 전달
function handleSelect(item: string) {
  router.push({
    name: "List",
    state: { title: item },
    query: { ...route.query },
  });
}
</script>
