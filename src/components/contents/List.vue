<template>
  <ListComponent class="list-component" :title="data.title" :items="data.items">
    <template #item="{ item }">
      <ul @click="handleSelect(item)">
        <li>
          {{ item.contents ?? "불러오는 중.." }}
        </li>
      </ul>
    </template>
  </ListComponent>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ListComponent from "@/components/common/ListComponent.vue";
import BoardAxios from "@/functions/api/board/BoardAxios";
import { useRouter, useRoute } from "vue-router";

const { title } = history.state;
const boardList = await BoardAxios.getTargetBoardList(title);
const data = ref({
  title: title,
  items: boardList.length > 0 ? boardList : [],
});

const router = useRouter();
const route = useRoute();

function handleSelect(item: any) {
  console.log("Selected item:", item);
  router.push({
    name: "Board",
    state: { boardId: item },
    query: { ...route.query },
  });
}
</script>
