<script setup lang="ts">
import PPCard from "../molecules/PPCard.vue";

defineProps<{
  allBrands: boolean;
  brandName: string;
  gridStyle: boolean;
}>();

const products = [
  {
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
];
</script>

<template>
  <div
    class="container"
    :class="[gridStyle ? 'container-grid' : 'container-flex']"
  >
    <div>
      <h2 v-if="allBrands">Populer Products From All Brands</h2>
      <h2 v-if="!allBrands">Populer Products From {{ brandName }}</h2>
      <div class="scrollbar-style">
        <div
          :class="[gridStyle ? 'container-cards-grid' : 'container-cards-flex']"
        >
          <PPCard
            v-for="(prod, index) in products"
            :key="index"
            :name="products[index].name"
            :price="products[index].price"
            :urlImg="products[index].urlImg"
          ></PPCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container > div > h2 {
  width: 360px;
  margin-bottom: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.3px;
  color: var(---black);
}

.container-grid > div {
  margin: auto;
  padding: 10px;
  max-width: 1200px;
  margin-bottom: 150px;
}

.container-flex > div > div {
  margin: auto;
  margin-bottom: 85px;
  overflow-x: overlay;
}

.container-flex > div > h2 {
  margin-left: 120px;
}

.container-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-auto-rows: auto;
  gap: 20px;
  justify-content: center;
  align-items: start;
  justify-items: center;
  align-content: center;
}

.container-cards-flex {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  justify-content: flex-start;
  overflow-x: initial;
  margin-left: 120px;
  padding-bottom: 16px;
}

.scrollbar-style::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.scrollbar-style::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.scrollbar-style::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>
