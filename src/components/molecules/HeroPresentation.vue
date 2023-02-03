<template>
  <div class="presentation">
    <div class="p1e2">
      <p class="p1">{{ p1 }}</p>
      <p class="p2">{{ p2 }}</p>
    </div>
    <p class="p3">{{ p3 }}</p>
    <StandardButton v-bind="heroButtonData" />
  </div>
</template>

<script setup lang="ts">
import StandardButton from "../atoms/StandardButton.vue";

defineProps({
  p1: String,
  p2: String,
  p3: String,
  heroButtonData: Object,
});
</script>

<style scoped>
.p1 {
  font-weight: 600;
  font-size: 3rem;
  color: var(--black);
  line-height: 2.1ch;
}
.p2 {
  font-weight: 600;
  font-size: 3rem;
  color: var(--green);
  line-height: 2.1ch;
}

.p3 {
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 20px;
  color: var(--grey);
  letter-spacing: 0.3px;
  margin-top: 2rem;
}

.presentation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-around;
}
</style>
