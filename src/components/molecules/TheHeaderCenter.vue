<template>
  <div>
    <ul class="nav-bar">
      <li v-for="(l, index) in links" :key="index" class="nav-link">
        <a :href="l.linkPath">{{ l.linkName }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
export type Link = { linkName: string; linkPath: string };
type NavbarLinks = { links: Link[] };
defineProps<NavbarLinks>();
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  padding-top: 0.75rem;
}

.nav-link {
  list-style: none;
  display: block;
}

.nav-link > a {
  color: var;
}
</style>
