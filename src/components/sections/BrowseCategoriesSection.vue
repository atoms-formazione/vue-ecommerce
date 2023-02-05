<script setup lang="ts">
import CategoryCard from "../molecules/CategoryCard.vue";

const category = [
  {
    id: 1,
    categoryName: "Fashion",
    nItems: 50000,
    bgImg: "/src/components/icons/CategoryFashion.png",
  },
  {
    id: 2,
    categoryName: "Skincare",
    nItems: 2000,
    bgImg: "src/components/icons/CategorySkincare.png",
  },
  {
    id: 3,
    categoryName: "Shoes",
    nItems: 10000,
    bgImg: "src/components/icons/CategoryShoes.png",
  },
  {
    id: 4,
    categoryName: "Electronic",
    nItems: 10000,
    bgImg: "src/components/icons/CategoryElectronic.png",
  },
];
</script>

<template>
  <div class="container">
    <h2>Browse Categories of The Store</h2>
    <div class="container-cards">
      <CategoryCard
        v-for="(cat, index) of category"
        :key="cat.id"
        :class="'card-' + (index + 1)"
        v-bind="cat"
      ></CategoryCard>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  max-width: 1200px;
  padding: 12px;
}

.container > h2 {
  width: 343px;
  margin-bottom: 30px;

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.3px;
  color: var(--black);
}

.container-cards {
  display: grid;
  grid-template-columns: 500fr 287fr 361fr;
  gap: 26px;
}

.card-1 {
  grid-column: 1/2;
  grid-row: 1/2;
}
.card-2 {
  grid-column: 1/2;
  grid-row: 2/3;
}
.card-3 {
  grid-column: 2/3;
  grid-row: 1/3;
}
.card-4 {
  grid-column: 3/4;
  grid-row: 1/3;
}
</style>
