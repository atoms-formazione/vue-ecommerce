<template>
  <div>
    <p>
      <span class="ba" :class="[isWhite ? 'color-white' : 'color-black']"
        >Ba</span
      >
      <span class="chira">chira</span>
    </p>
  </div>
</template>

<script setup lang="ts">
const prop = defineProps({
  isWhite: Boolean,
});
</script>

<style scoped>
p {
  font-size: 25px;
  font-weight: 700;
}

.ba {
  font-weight: 700;
}
.chira {
  color: #3c9379;
  font-weight: 700;
}

.color-black {
  color: black;
}

.color-white {
  color: white;
}
</style>
