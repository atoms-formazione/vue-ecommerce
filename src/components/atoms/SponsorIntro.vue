<template>
  <div class="blurb-container-container">
    <div class="blurb-container">{{ blurb }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  blurb: String,
});
</script>

<style scoped>
.blurb-container {
  font-size: 1.5rem;
  color: var(--black);
  font-weight: 500;
  width: 35vw;
  text-align: center;
}

.blurb-container-container {
  display: flex;
  justify-content: center;
}
</style>
