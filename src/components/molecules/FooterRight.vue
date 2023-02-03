<template>
  <div class="mini-list-container">
    <div v-for="(m, index) in menus" :key="index">
      <MiniList v-bind="m" />
    </div>
    <div>
      <ContactList v-bind="contactInfo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MiniList from "@/components/atoms/MiniList.vue";
import ContactList from "@/components/atoms/ContactList.vue";

defineProps({
  menus: { type: Array },
  contactInfo: Object,
});
</script>

<style scoped>
.mini-list-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 3rem;
  column-gap: 4rem;
}
</style>
