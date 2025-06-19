<script setup lang="ts">
import { ref } from "vue";
import { returnPage } from "@/functions/common/event";
import ListComponent from "@/components/common/ListComponent.vue";
import listData from "@/template/listDump.json";

const { title } = history.state || "기본 제목";
const data = ref(
  listData.filter((item) => item.title === title)[0] || {
    title: "기본 제목",
    items: ["test", "test2"],
  },
);
</script>

<template>
  <button @click="returnPage">뒤로가기</button>
  <ListComponent
    class="list-component"
    :title="data.title"
    :items="data.items"
  />
</template>
