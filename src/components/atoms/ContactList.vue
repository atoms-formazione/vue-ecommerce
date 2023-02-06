<template>
  <ul class="listina">
    <li class="listina-title">
      <b>{{ listTitle }}</b>
    </li>
    <li class="listina-items">{{ email }}</li>
    <li class="listina-items">{{ phone }}</li>
    <li class="listina-items">{{ address }}</li>
  </ul>
</template>

<script setup lang="ts">
defineProps({
  listTitle: String,
  email: String,
  phone: String,
  address: String,
});
</script>

<style scoped>
.listina {
  width: 100%;
  overflow-wrap: break-word;
  color: white;
  font-size: 1rem;
  list-style-type: none;
  display: block;
  line-height: 2rem;
}

.listina-title {
  font-size: 1rem;
}

.listina-items {
  font-size: 0.9rem;
}
</style>
