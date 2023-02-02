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
</style>
