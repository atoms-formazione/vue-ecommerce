<template>
  <div class="card-label">
    <div class="card-label-text">
      <p class="card-label-title">{{ categoryName }}</p>
      <p class="card-label-items">
        {{ itemNo!.toLocaleString("en-US") }} items
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  categoryName: String,
  itemNo: Number,
});
</script>

<style scoped>
.card-label {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #4d4d4d83;
  position: relative;
}

.card-label-text {
  color: white;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  text-align: left;
  overflow-y: hidden;
  max-width: 80%;
}

.card-label-title {
  font-size: 1.2rem;
  font-weight: 600;
}
.card-label-items {
  font-size: 1rem;
  font-weight: 400;
}
</style>
