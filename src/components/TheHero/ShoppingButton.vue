<template>
  <div>
    <button>{{ shop }}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  shop: String,
});
</script>

<style scoped>
button {
  background-color: var(--green);
  border: none;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 22px;
  padding-left: 22px;
  border-radius: 8px;
  text-align: center;
  color: white;
  font-weight: 500;
  margin-top: 3rem;
}
</style>
