<script setup lang="ts">
const products = ref([])

await fetch('https://dummyjson.com/products/?limit=12')
  .then(res => res.json())
  .then(data => products.value = data.products)
</script>

<template>
  <div class=" mt-[130px]">
    <h2 class="text-[32px] leading-10 tracking-[0.3px] font-bold mb-8 max-w-[360px]">
      Populer Products From
      All Brands
    </h2>
    <div class="grid grid-cols-4 gap-6">
      <div v-for="{ id, thumbnail, title, price, brand } in products" :key="id">
        <div class="w-[280px] h-[448px] relative overflow-hidden rounded-[30px] shadow-md hover:shadow-xl border border-grey/5">
          <div
            class="absolute inset-0"
          >
            <img :src="thumbnail" :alt="title" class="w-full h-full object-cover hover:scale-150 hover:ease-in ease-out transition-all">
          </div>
        </div>
        <h3 class="mt-4 text-xl font-medium">
          {{ title }} - {{ brand }}
        </h3>
        <h4>{{ price }}$</h4>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
