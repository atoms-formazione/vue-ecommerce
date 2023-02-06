<template>
  <p class="header-logo">
    <span :class="[whiteText ? 'white' : 'black']">{{ logoTitle1 }}</span
    ><span class="green">{{ logoTitle2 }}</span>
  </p>
</template>

<script setup lang="ts">
defineProps({
  logoTitle1: String,
  logoTitle2: String,
  whiteText: Boolean,
});
</script>

<style scoped>
.black {
  color: var(--black);
}

.white {
  color: white;
}

.green {
  color: var(--green);
}
.header-logo {
  font-size: 2.1rem;
  font-weight: 700;
}
</style>
