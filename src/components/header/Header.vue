<template>
  <div id="header">
    <h1 id="header-text">B!nfo</h1>
    <p id="header-subtext">뱅드림의 정보를 한곳에서!</p>

    <button @click="toggleDarkMode">다크모드 전환</button>
  </div>
</template>

<script setup lang="ts">
import { toggleDarkMode, applySavedTheme } from "@/functions/common/event";

applySavedTheme();
</script>
