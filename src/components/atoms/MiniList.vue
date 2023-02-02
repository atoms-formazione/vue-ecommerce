<template>
  <ul class="listina">
    <li>
      <b>{{ listTitle }}</b>
    </li>
    <li v-for="(l, index) in listContent" :key="index">{{ l }}</li>
  </ul>
</template>

<script setup lang="ts">
// defineProps({
//   listTitle: String,
//   listContent: [],
// });

const listTitle: string = "For Beginner";
const listContent: string[] = ["About", "Career", "Promotion"];
</script>

<style scoped>
.listina {
  width: 100%;
  overflow-wrap: break-word;
  color: white;
  font-size: 1rem;
  list-style-type: none;
  display: block;
  line-height: 2rem;
}
</style>
