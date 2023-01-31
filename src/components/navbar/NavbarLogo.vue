<template>
  <div class="bachira">
    {{ first }}<span class="green">{{ second }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  first: String,
  second: String,
});
</script>

<style scoped>
.bachira {
  font-size: 2rem;
  font-weight: 700;
  color: black;
}

.green {
  color: var(--green);
  font-weight: 700;
}
</style>
