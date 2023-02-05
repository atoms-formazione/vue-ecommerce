<script setup lang="ts">
const props = defineProps({
  image: String,
  title: String,
  cost: String,
});
</script>

<template>
  <div>
    <img :src="image" alt="Image" class="image" />
    <p class="title">{{ title }}</p>
    <p class="cost">€ {{ cost }}</p>
  </div>
</template>

<style scoped>
.image {
  width: 280px;
  height: 380px;
  border-radius: 30px;
}

.title {
  font-weight: 500;
  size: 20px;
  color: #101913;
}

.cost {
  font-weight: 400;
  size: 16px;
  color: #101913;
}
</style>
