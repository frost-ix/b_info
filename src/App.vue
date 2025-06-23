<script setup lang="ts">
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import { returnPage } from "@/functions/common/event";
</script>
<template>
  <Header />
  <button @click="returnPage('Menu')">홈으로</button>
  <Suspense>
    <router-view />
  </Suspense>
  <Footer />
</template>
