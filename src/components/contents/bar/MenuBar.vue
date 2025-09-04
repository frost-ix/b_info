<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

// 메뉴 데이터
// 추후 db에서 데이터 가져올 예정
/*
json type
{ id: number, title: string, to: string }
 */
const menuItems = ref([
  { id: 1, title: "홈", to: "/home" },
  { id: 2, title: "제품", to: "/products" },
  { id: 3, title: "서비스", to: "/services" },
  { id: 4, title: "연락처", to: "/contact" },
]);
</script>

<template>
  <nav class="menu-bar">
    <ul class="menu-list">
      <li v-for="item in menuItems" :key="item.id" class="menu-item">
        <router-link :to="item.to" class="menu-link" active-class="active-link">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
