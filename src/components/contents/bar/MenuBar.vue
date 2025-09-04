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
        <h3>메뉴</h3>
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
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);

const menuItems = ref([
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "About", to: "/about" },
  { id: 3, title: "Projects", to: "/projects" },
  { id: 4, title: "Contact", to: "/contact" },
]);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
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
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>
