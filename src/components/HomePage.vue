<script setup lang="ts">
</script>

<template>
  <!-- TODO: remove static padding -->
  <div class="example px-10">
    <HeroSection />
    <BrandsSection />

    <Suspense>
      <ProductsGrid />
    </Suspense>
  </div>
</template>
