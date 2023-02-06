<template>
  <div class="blurb-container-container">
    <div class="blurb-container" v-html="blurb"></div>
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
  line-height: 1.75rem;
  color: var(--black);
  font-weight: 600;
  width: 35vw;
}

.blurb-container-container {
  display: flex;
}

.centered {
  justify-content: center;
  text-align: center;
}

.left-align {
  justify-content: flex-start;
}
</style>
