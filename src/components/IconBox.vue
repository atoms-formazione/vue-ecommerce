<script setup lang="ts">
const props = defineProps({
  icon: String,
  title: String,
  text: String,
});
</script>

<template>
  <div>
    <img :src="icon" alt="icon" class="icon" />
    <p class="title">{{ title }}</p>
    <p class="text">{{ text }}</p>
  </div>
</template>

<style scoped>
.icon {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.title {
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: #101913;
}

.text {
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #535a56;
}
</style>
