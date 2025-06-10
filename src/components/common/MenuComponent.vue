<script lang="ts" setup>
// 1. props 정의
const props = defineProps<{
  title?: string;
  color?: string;
  items?: string[];
}>();

// 3. emit 정의
const emit = defineEmits<{
  (e: "select", value: string): void;
}>();

function onItemClick(item: string) {
  emit("select", item);
}
</script>

<template>
  <div :style="{ color: props.color }">
    <!-- 2. slot 기본 사용 -->
    <h2>{{ props.title }}</h2>
    <li v-for="item in props.items" :key="item" @click="onItemClick(item)">
      <slot name="item" :item="item">
        {{ item }}
      </slot>
    </li>
    <!-- 기본 slot -->
    <slot></slot>
  </div>
</template>
