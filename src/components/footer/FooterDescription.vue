<template>
  <div class="flex-container">
    <div>
      <NavbarLogo first="Ba" second="chira" is-white></NavbarLogo>
    </div>
    <div>
      <p class="paragraph">
        Bachira is an online store dealing with all product Bachira provide
        cheap, high quality, products to customers
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarLogo from "../navbar/NavbarLogo.vue";
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
}

.paragraph {
  color: white;
}
</style>
