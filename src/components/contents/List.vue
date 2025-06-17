<script setup lang="ts">
import ListComponent from "../common/ListComponent.vue";
import listData from "../../template/listDump.json";
</script>

<template>
  <ListComponent
    class="list-component"
    v-for="(item, idx) in listData"
    :key="idx"
    :item="item"
  />
</template>
