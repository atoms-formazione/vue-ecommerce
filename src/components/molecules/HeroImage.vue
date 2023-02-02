<template>
  <div class="immagine">
    <img
      src="@@/images/Hero_Image.png"
      alt="shoppingLady"
      class="shopping-lady"
    />
  </div>
</template>

<script setup lang="ts"></script>

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
