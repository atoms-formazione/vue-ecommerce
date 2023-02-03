<template>
  <!-- <div class="nav-links"> -->
    <ul class="nav-links">
    <li v-for="link in links" :key="link">
      <a :href="'#'+link">{{ link }}</a>
    </li>
  </ul>
    <!-- <a>Home</a>
    <a>Products</a>
    <a>Categories</a>
    <a>Brands</a>
    <a>Pricing</a> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
type NavLInksProps = {
  links: string[];
};
defineProps<NavLInksProps>();

</script>

<style scoped>
/* .nav-links > a {
  margin-right: 2rem;
}*/
.nav-links a:hover {
  cursor: pointer;
  font-weight: 700;
} 

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links li {
  /* font-weight: 700; */
  list-style: none;
}

.nav-links li a {
  text-decoration: none;
  color: var(--black);
}


</style>
