<template>
  <div class="large-icon-paragraph">
    <LargeIcon :img-url="imgUrl" />
    <p class="item-title">{{ itemTitle }}</p>
    <p class="item-content">{{ itemContent }}</p>
  </div>
</template>

<script setup lang="ts">
import LargeIcon from "../atoms/LargeIcon.vue";
defineProps({
  itemTitle: String,
  itemContent: String,
  imgUrl: String,
});
</script>

<style scoped>
.large-icon-paragraph {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.item-title {
  font-size: 1.2rem;
  font-weight: 600;
  display: block;
  max-width: 15rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.item-content {
  font-size: 0.9rem;
  display: block;
  max-width: 17rem;
  text-align: center;
}
</style>
