<template>
  <div class="bachira" :class="[isWhite ? 'color-white' : 'color-black']">
     {{ first }}<span class="green">{{ second }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  first: String,
  second: String,
  // color: Boolean,
  isWhite: Boolean,
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

.color-white {
  color: white;
}
.color-black {
  color: var(--black);
}
</style>
