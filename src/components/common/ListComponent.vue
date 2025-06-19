<script setup lang="ts">
const props = defineProps<{ title?: string; items?: any[] }>();
function handleClick() {
  console.log(props.items);
}
</script>

<template>
  <div class="list-row" @click="handleClick">
    <h2>{{ props.title ?? "불러오는 중.." }}</h2>
    <ul>
      <li v-for="item in props.items">
        {{ item ?? "불러오는 중.." }}
      </li>
    </ul>
  </div>
</template>
