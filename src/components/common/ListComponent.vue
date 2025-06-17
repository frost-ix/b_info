<script setup lang="ts">
const props = defineProps<{ item: any }>();
function handleClick() {
  console.log(props.item.items);
}
</script>

<template>
  <div class="list-row" @click="handleClick">
    <h2>{{ item.title ?? item }}</h2>
    <ul>
      <li v-for="item in item.items">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
