<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<style scoped></style>
