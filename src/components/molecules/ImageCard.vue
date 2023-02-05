<template>
  <button
    class="whole-card"
    :href="{ linkPath }"
    :style="{ backgroundImage: `url(${imageSrc})` }"
  >
    <div v-if="cardText !== undefined" class="card-overlay">
      <CategoryCardText v-bind="cardText" />
    </div>
  </button>
</template>

<script setup lang="ts">
import CategoryCardText from "@/components/atoms/CategoryCardText.vue";

defineProps({
  cardText: Object,
  linkPath: String,
  imageSrc: String,
});
</script>

<style scoped>
.whole-card {
  width: 100%;
  height: 100%;
  /* background-image: url("https://www.icegif.com/wp-content/uploads/2022/01/icegif-1197.gif"); */
  background-size: cover;
  background-position: center;
  display: block;
  border-radius: 2rem;
  border: none;
  overflow: hidden;
  padding: 0;
}

.whole-card:active {
  background-image: none;
}

.card-overlay {
  width: 100%;
  height: 100%;
}
</style>
