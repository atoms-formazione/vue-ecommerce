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
  brand: String,
  title: String,
  price: String,
});
</script>

<style scoped>
.whole-card {
  width: 100%;
  height: 100%;
  /* background-image: url("https://www.icegif.com/wp-content/uploads/2022/01/icegif-1197.gif"); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
  border-radius: 2rem;
  border: solid 1px lightgray;
  overflow: hidden;
  padding: 0;
}

.whole-card:hover {
  opacity: 0.8;
}

.whole-card:active {
  opacity: 0.6;
}

.card-overlay {
  width: 100%;
  height: 100%;
}
</style>
