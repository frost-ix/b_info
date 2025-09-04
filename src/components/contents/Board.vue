<template>
  <BoardComponent
    :boardId="boardId"
    :title="boardData.title"
    :content="boardData.content"
    :writeDate="boardData.writeDate"
    :updateDate="boardData.updateDate"
  >
    <template #item="{ item }">
      <div class="board-item">
        <h3>{{ item.title }}</h3>
        <p>작성일: {{ item.writeDate }}</p>
        <p>수정일: {{ item.updateDate }}</p>
        <p>{{ item.content }}</p>
      </div>
    </template>
  </BoardComponent>
</template>
<script setup lang="ts">
import BoardComponent from "@/components/common/BoardComponent.vue";
import BoardAxios from "@/functions/api/board/BoardAxios";
import { ref } from "vue";

const { boardId } = history.state;
const data = await BoardAxios.getTargetBoard(boardId as string);
const boardData = ref({
  title: data.title ?? "불러오는 중..",
  content: data.content ?? "불러오는 중..",
  writeDate: data.writeDate ?? "불러오는 중..",
  updateDate: data.updateDate ?? "불러오는 중..",
});
</script>
