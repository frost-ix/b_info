<script setup lang="ts">
const props = defineProps<{ item: any }>();
function handleClick() {
  console.log(props.item.items);
}
</script>

<template>
  <div class="list-row" @click="handleClick">
    <span>{{ item.title ?? item }}</span>
  </div>
</template>

<style scoped>
.list-row {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background 0.2s;
}
.list-row:hover {
  background: #f5f5f5;
}
</style>
