<template>
  <ul class="listina">
    <li>
      <b>{{ listTitle }}</b>
    </li>
    <li v-for="(l, index) in listContent" :key="index">
      <a class="link" :href="l.linkPath">{{ l.linkName }}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps({
  listTitle: String,
  listContent: { type: Array<Link> },
});

interface Link {
  linkName: string;
  linkPath: string;
}
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

.link {
  color: white;
}
</style>
