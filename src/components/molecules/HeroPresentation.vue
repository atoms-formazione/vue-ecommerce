<template>
  <div class="presentation">
    <div class="p1e2">
      <p class="p1">{{ p1 }}</p>
      <p class="p2">{{ p2 }}</p>
    </div>
    <p class="p3">{{ p3 }}</p>
    <StandardButton buttonValue="Shop Now" buttonPath="" />
  </div>
</template>

<script setup lang="ts">
import StandardButton from "../atoms/StandardButton.vue";

const props = defineProps({
  p1: String,
  p2: String,
  p3: String,
});
</script>

<style scoped>
.p1 {
  font-weight: 700;
  font-size: 3rem;
  color: var(--black);
}
.p2 {
  font-weight: 700;
  font-size: 3rem;
  color: var(--green);
}

.p3 {
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 20px;
  color: var(--grey);
  letter-spacing: 0.3px;
  flex-grow: 0;
  margin-top: 2rem;
}

.presentation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-around;
}
</style>
