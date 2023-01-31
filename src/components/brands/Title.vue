<template>
  <div>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
});
</script>

<style scoped>
.text {
  font-weight: 700;
  font-size: 2rem;
  width: 38rem;
  text-align: center;
  margin-bottom: 2rem;
}
</style>
