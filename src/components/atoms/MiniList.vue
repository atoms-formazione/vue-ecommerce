<template>
  <ul class="listina">
    <li class="listina-title">
      <b>{{ listTitle }}</b>
    </li>
    <li v-for="(l, index) in listContent" :key="index" class="listina-item">
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
  list-style-type: none;
  display: block;
  line-height: 2rem;
}

.link {
  color: white;
}

.listina-title {
  font-size: 1rem;
}

.listina-item {
  font-size: 0.9rem;
}

.listina-item:hover {
  transform: translateX(0.5rem);
  transition-duration: var(--short-transition);
}
.listina-item:active {
  opacity: 0.6;
}
</style>
