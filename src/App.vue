<script setup lang="ts">
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import MenuBar from "./components/contents/bar/MenuBar.vue";
</script>
<template>
  <Header />
  <MenuBar />
  <Suspense>
    <router-view />
  </Suspense>
  <Footer />
</template>
