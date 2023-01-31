<template>
  <div>
    <tr>
      <td class="title">{{ title }}</td>
    </tr>
    <ul>
      <li>{{ a1 }}</li>
      <li>{{ a2 }}</li>
      <li>{{ a3 }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  a1: String,
  a2: String,
  a3: String,
});
</script>

<style scoped>
.title {
  font-weight: 700;
}

li {
  list-style: none;
}

ul {
  padding: 0;
}

div {
  color: white;
}
</style>
