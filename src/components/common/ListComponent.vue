<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{ title?: string; items?: any[] }>();

const emit = defineEmits<{
  (e: "select", item: any): void;
}>();

const selectedItem = ref<any | null>(null);

function onItemClick(item: any) {
  selectedItem.value = item;
  emit("select", item);
}
</script>

<template>
  <div class="list-row">
    <h2 id="list-title">{{ props.title ?? "불러오는 중.." }}</h2>
    <ul>
      <li v-for="item in props.items" @click="onItemClick(props.title)">
        {{ item.title ?? "불러오는 중.." }}
      </li>
    </ul>
  </div>
</template>
