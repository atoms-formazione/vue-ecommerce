<template>
  <div class="presentation">
    <p class="p1">{{ p1 }}</p>
    <p class="p2">{{ p2 }}</p>
    <p class="p3">{{ p3 }}</p>
    <ShoppingButton shop="Shopping Now"></ShoppingButton>
  </div>
</template>

<script setup lang="ts">
import ShoppingButton from "./ShoppingButton.vue";

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
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-top: 2rem;
}
</style>
