<template>
  <div class="large-icon">
    <img :src="imgUrl" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  imgUrl: String,
});
</script>

<style scoped>
.large-icon {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.large-icon > img {
  object-fit: contain;
  width: 3rem;
}
</style>
