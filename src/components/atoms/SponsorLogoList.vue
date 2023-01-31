<template>
  <div class="sponsor-container">
    <div class="sponsor-logo" v-for="(l, index) in sponsorList" :key="index">
      <img :src="'./static/images/' + l" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  sponsorList: [],
});
</script>

<style scoped>
.sponsor-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
}

.sponsor-logo {
  max-width: 10rem;
}

.sponsor-logo > img {
  width: 100%;
  object-fit: contain;
}
</style>
