<template>
  <div>
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

import { useRouter, useRoute } from "vue-router";
import { CommonSwiper } from "@/functions/common/Swiper";
import MenuComponent from "@/components/common/MenuComponent.vue";
import CategoryAxios from "@/functions/api/Board/CategoriesAxios";
import { Category } from "@/interface/category";
import { SwiperModule } from "swiper/types";

// ----------------------------------------------------------------
// CommonSwiper에서 Swiper와 SwiperSlide 모듈 가져오기
const Swiper = CommonSwiper.swiperModules.Swiper;
const SwiperSlide = CommonSwiper.swiperModules.SwiperSlide;
const modules: SwiperModule[] = [
  CommonSwiper.swiperModules.Navigation,
  CommonSwiper.swiperModules.Pagination,
  CommonSwiper.swiperModules.Autoplay,
];
const options = CommonSwiper.swiperFunctions.swiperOptions();
// ----------------------------------------------------------------

const category = ref<Category[] | null>(null);
const router = useRouter();
const route = useRoute();
const loading = ref(true);
const error = ref<string | null>(null);
const isMounted = ref(false); // 마운트 상태 추적

// List.vue로 이동하면서 상태로 item 전달
function handleSelect(item: string) {
  router.push({
    name: "리스트",
    state: { title: item },
    query: { ...route.query },
  });
}

onMounted(async () => {
  isMounted.value = true;

  try {
    // 모바일에서 더 안정적인 로딩을 위해 nextTick 추가
    await nextTick();

    if (!isMounted.value) return;

    // API 호출을 여기서 수행
    const categoriesData = await CategoryAxios.getCategory();

    if (!isMounted.value) return;

    category.value = categoriesData.length > 0 ? categoriesData : null;
  } catch (err) {
    if (isMounted.value) {
      console.error("카테고리 로딩 오류:", err);
      error.value = "카테고리를 불러오는 데 실패했습니다";
    }
  } finally {
    if (isMounted.value) {
      loading.value = false;
    }
  }
});
</script>
