<script setup lang="ts">
const popularProducts = [
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
  <div class="container">
    <h2>Populer Products From All Brands</h2>
    <div>
      <div class="container-cards">
        <div
          v-for="(prod, index) in popularProducts"
          :key="index"
          class="card"
          :class="
            'col' + ((index % 4) + 1) + ' row' + (Math.floor(index / 4) + 1)
          "
        >
          <div>
            <img :src="prod.urlImg" :alt="prod.name" />
          </div>
          <h4>{{ prod.name }}</h4>
          <small>{{ prod.price }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container > h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.3px;
  color: var(---black);
}

.container > div {
  margin: auto;
  width: 100%;
  margin-bottom: 150px;
}

.container-cards {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(3, 33%);
  gap: 20px;
  justify-content: center;
  align-items: start;
  justify-items: center;
  align-content: center;
}

.card > div {
  margin-bottom: 15px;
}

.card > div > img {
  width: 280px;
  height: 380px;
  border-radius: 30px;
}

.card > h4 {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: var(---black);
}

.card > small {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: var(---black);
}

.col1 {
  grid-column: 1/2;
}
.col2 {
  grid-column: 2/3;
}
.col3 {
  grid-column: 3/4;
}
.col4 {
  grid-column: 4/5;
}

.row1 {
  grid-row: 1/2;
}
.row2 {
  grid-row: 2/3;
}
.row3 {
  grid-row: 3/4;
}
</style>
