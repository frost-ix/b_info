<script setup lang="ts">
import ListComponent from "../common/ListComponent.vue";
import listData from "../../template/listDump.json";
</script>

<template>
  <div>
    <ListComponent v-for="(item, idx) in listData" :key="idx" :item="item" />
  </div>
</template>
