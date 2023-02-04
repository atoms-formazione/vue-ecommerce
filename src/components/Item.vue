<script setup lang="ts">
const props = defineProps({
  image: String,
  title: String,
  cost: String,
});
</script>

<template>
  <img :src="image" alt="Image" class="image" />
  <p class="title">{{ title }}</p>
  <p class="cost">€ {{ cost }}</p>
</template>

<style scoped></style>
