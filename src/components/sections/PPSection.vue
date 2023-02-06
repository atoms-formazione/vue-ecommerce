<script setup lang="ts">
import PPCard from "../molecules/PPCard.vue";

const pProp = defineProps<{
  allBrands: boolean;
  brandName: string;
  gridStyle: boolean;
  urlRepository: string;
}>();

const products = [
  {
    id: 1,
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    id: 2,
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    id: 3,
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    id: 4,
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    id: 5,
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    id: 6,
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    id: 7,
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    id: 8,
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    id: 9,
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    id: 10,
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    id: 11,
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
  {
    id: 12,
    urlImg: "/src/components/icons/PopularProductProva.png",
    name: "Nike Air Force",
    price: "Rp 2.999.999",
  },
];

const prodData =
  pProp.urlRepository !== "myData"
    ? await fetch(pProp.urlRepository)
        .then((res) => res.json())
        .then((json) => {
          if (pProp.allBrands) {
            return json.products;
          }

          let res: any[] = [];
          json.products.forEach((e: any) => {
            if (e.brand == pProp.brandName) {
              res.push(e);
            }
          });
          //console.log(res);
          return res;
        })
        .then((json) => {
          let res: any[] = [];
          json.forEach((e: any) => {
            res.push({
              id: e.id,
              name: e.title,
              price: e.price.toString(),
              urlImg: e.images[0],
              brand: e.brand,
            });
          });
          //console.log(res);
          return res;
        })
    : products;
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
            v-for="(prod, index) in prodData"
            :key="index"
            v-bind="prod"
          ></PPCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container > div > h2 {
  width: 370px;
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.3px;
  color: var(---black);
}

.container-grid > div,
.container-flex > div {
  margin: auto;
  max-width: 1200px;
}

.container-flex > div > h2 {
  padding-left: 10px;
}

.container-grid > div {
  padding: 10px;
  margin-bottom: 150px;
}

.container-flex > div > div {
  margin: auto;
  margin-bottom: 85px;
  overflow-x: overlay;
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
  /*margin-left: 120px;*/
  margin: auto;
  max-width: 1200px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 24px;
}

.container-cards-flex > .card:last-child {
  padding-right: 10px;
}

.scrollbar-style::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
  margin: auto 10px;
}

.scrollbar-style::-webkit-scrollbar {
  width: 12px;
}

.scrollbar-style::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>
