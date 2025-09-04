<template>
  <div id="header">
    <h1 id="header-text" @click="returnPage('Menu')">B!nfo</h1>
    <p id="header-subtext">뱅드림의 정보를 한곳에서!</p>
  </div>
</template>

<script setup lang="ts">
import { returnPage } from "@/functions/common/event";
</script>
