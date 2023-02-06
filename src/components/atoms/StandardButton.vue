<template>
  <button class="button-div">{{ buttonValue }}</button>
</template>

<script setup lang="ts">
defineProps({
  buttonValue: String,
  buttonPath: String,
});
</script>

<style scoped>
.button-div {
  background-color: var(--green);
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 8px;
  box-shadow: none;
  border: none;
  width: fit-content;
}

.button-div:active {
  background: #535a56;
}

.button-div:hover {
  opacity: 0.8;
  transform: scale(1.1);
  transition-duration: var(--short-transition);
}
</style>
