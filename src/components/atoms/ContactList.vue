<template>
  <ul class="listina">
    <li>
      <b>{{ listTitle }}</b>
    </li>
    <li>{{ email }}</li>
    <li>{{ phone }}</li>
    <li>{{ address }}</li>
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
</style>
