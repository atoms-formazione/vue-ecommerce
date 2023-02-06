<template>
  <div>
    <ul class="navbar" v-if="links !== undefined">
      <li v-for="(l, index) in links" :key="index" class="nav-listitem">
        <NavLink v-bind="l" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import NavLink from "@/components/atoms/NavLink.vue";

defineProps({
  links: { type: Array },
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  padding-top: 0.75rem;
}

.nav-listitem {
  list-style: none;
  display: block;
}

.nav-listitem:hover {
  transform: scale(1.1);
  transition-duration: var(--short-transition);
}
.nav-listitem:active {
  opacity: 0.6;
}
</style>
