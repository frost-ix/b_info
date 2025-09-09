<template>
  <div class="hamburger-container">
    <button
      @click="toggleMenu"
      class="hamburger-btn"
      :class="{ active: isMenuOpen }"
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>

    <!-- v-show 사용 -->
    <div class="menu-overlay" v-show="isMenuOpen" @click="closeMenu"></div>

    <nav class="slide-menu" v-show="isMenuOpen">
      <div class="menu-header">
        <h3>카테고리</h3>
        <button @click="closeMenu" class="close-btn">&times;</button>
      </div>

      <ul class="menu-list">
        <li v-for="item in menuItems" :key="item.id" class="menu-item">
          <router-link
            :to="item.to"
            class="menu-link"
            active-class="active-link"
            @click="closeMenu"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
      <a id="toggle-theme" @click="toggleTheme" style="cursor: pointer">
        {{ isDarkTheme ? "라이트 모드" : "다크 모드" }}
      </a>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import routerPath from "@/router/index";
import { loadTheme, toggleThemeSys } from "@/functions/common/event";

const isMenuOpen = ref(false);
const isDarkTheme = ref(false);

const pathList = routerPath.options.routes
  .filter((route) => !route.path.includes("/e") && route.path !== "/")
  .map((route) => ({
    title: route.name,
    to: route.path,
  }));

const menuItems = ref(pathList);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleTheme = () => {
  isDarkTheme.value = toggleThemeSys();
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleKeydown = (event) => {
  if (event.key === "Escape" && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
  isDarkTheme.value = loadTheme();
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>
