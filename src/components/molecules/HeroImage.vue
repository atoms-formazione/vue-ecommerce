<template>
  <div class="immagine">
    <img :src="'./static/images/' + src" :alt="alt" :class="alt" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: String,
  alt: String,
});

// const src = "Hero_Image.png";
// const alt = "shopping-lady";
</script>

<style scoped>
.immagine {
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

.immagine > img {
  object-fit: contain;
  width: 100%;
}
</style>
