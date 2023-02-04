<script setup lang="ts">
import CategoryCard from "../molecules/CategoryCard.vue";

const category = [
  {
    categoryName: "Fashion",
    nItems: 50000,
    bgImg: "/src/components/icons/CategoryFashion.png",
  },
  {
    categoryName: "Skincare",
    nItems: 2000,
    bgImg: "src/components/icons/CategorySkincare.png",
  },
  {
    categoryName: "Shoes",
    nItems: 10000,
    bgImg: "src/components/icons/CategoryShoes.png",
  },
  {
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
        class="card-0"
        :idx="0"
        :category="category[0].categoryName"
        :nItems="category[0].nItems"
        :bgImg="category[0].bgImg"
      ></CategoryCard>
      <CategoryCard
        class="card-1"
        :idx="1"
        :category="category[1].categoryName"
        :nItems="category[1].nItems"
        :bgImg="category[1].bgImg"
      ></CategoryCard>
      <CategoryCard
        class="card-2"
        :idx="2"
        :category="category[2].categoryName"
        :nItems="category[2].nItems"
        :bgImg="category[2].bgImg"
      ></CategoryCard>
      <CategoryCard
        class="card-3"
        :idx="3"
        :category="category[3].categoryName"
        :nItems="category[3].nItems"
        :bgImg="category[3].bgImg"
      ></CategoryCard>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  max-width: 1200px;
}

.container > h2 {
  width: 343px;
  margin-bottom: 30px;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.3px;
  color: #101913;
}

.container-cards {
  display: grid;
  grid-template-columns: 500fr 287fr 361fr;
  grid-template-columns: subgrid 287fr 361fr;
  gap: 26px;
}

.card-0 {
  grid-column: 1/2;
  grid-row: 1/2;
}
.card-1 {
  grid-column: 1/2;
  grid-row: 2/3;
}
.card-2 {
  grid-column: 2/3;
  grid-row: 1/3;
}
.card-3 {
  grid-column: 3/4;
  grid-row: 1/3;
}
</style>
