<template>
  <div class="foot">
    <h4>{{ title }}</h4>
    <p>{{ parte1 }}</p>
    <p>{{ parte2 }}</p>
    <p>{{ parte3 }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: String,
  parte1: String,
  parte2: String,
  parte3: String,
});
</script>
<style scoped>
.foot {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
