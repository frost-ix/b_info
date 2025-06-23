<script setup lang="ts">
const props = defineProps<{
  boardId?: string;
  title?: string;
  contents?: string;
  writeDate?: string;
  updateDate?: string;
}>();
</script>
<template>
  <div class="board-component">
    <h2>{{ props.title }}</h2>
    <p v-if="props.writeDate">작성일: {{ props.writeDate }}</p>
    <p v-if="props.updateDate">수정일: {{ props.updateDate }}</p>
    <p v-if="props.contents">{{ props.contents }}</p>
  </div>
</template>
