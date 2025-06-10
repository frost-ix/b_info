<script lang="ts" setup>
import { ref } from "vue";
// 1. props 정의
const props = defineProps<{
  title?: string;
  items?: string[];
}>();

// 3. emit 정의
const emit = defineEmits<{
  (e: "select", value: string): void;
}>();

const selected = ref<string | null>(null);

function onItemClick(item: string) {
  selected.value = item;
  emit("select", item);
}
</script>

<template>
  <div>
    <h2>{{ selected || props.title }}</h2>
    <li v-for="item in props.items" :key="item" @click="onItemClick(item)">
      <slot name="item" :item="item">
        {{ item }}
      </slot>
    </li>
    <slot></slot>
  </div>
</template>
