<template>
  <a :href="linkPath" class="nav-link">{{ linkName }}</a>
</template>

<script setup lang="ts">
defineProps({ linkName: String, linkPath: String });
</script>

<style scoped>
.nav-link {
  color: var(--grey);
}
</style>
